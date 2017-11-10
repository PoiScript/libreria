const { resolve, parse, join } = require('path')

const createSlug = (text) => {
  return text.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}

exports.onCreateNode = ({ node, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === 'MarkdownRemark') {
    createNodeField({
      node,
      name: 'slug',
      value: parse(node.fileAbsolutePath).name
    })

    createNodeField({
      node,
      name: 'categorySlug',
      value: createSlug(node.frontmatter.category)
    })
  }
}

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return graphql(`
  {
    entries: allMarkdownRemark {
      totalCount
      edges {
        node {
          html
          fileAbsolutePath
          meta: frontmatter {
            category
            title
          }
          fields {
            slug
            categorySlug
          }
        }
      }
    }
    allGitInfo {
      edges {
        node {
          commitCount
          fileAbsolutePath
          lastCommit {
            hash
            date
            message
          }
          firstCommit {
            hash
            date
            message
          }
        }
      }
    }
  }
  `)
    .then(({ data: { entries, allGitInfo }, errors }) => {
      if (errors) {
        return Promise.reject(errors)
      }

      // home page
      createPage({
        path: '/',
        component: resolve('src/templates/home-screen.jsx'),
        context: {
          count: entries.totalCount
        }
      })

      // entry page
      entries.edges
        .forEach(({ node }) => {
          const gitInfo = allGitInfo.edges.map(({ node }) => node)
            .find(info => info.fileAbsolutePath === node.fileAbsolutePath)
          createPage({
            path: join(node.fields.categorySlug, node.fields.slug),
            component: resolve('src/templates/entry.jsx'),
            context: {
              entry: node,
              gitInfo
            }
          })
        })

      // group entries by the category
      const categories = Object.values(entries.edges.reduce((result, { node: { meta, fields } }) => {
        if (!result[fields.categorySlug]) {
          result[fields.categorySlug] = {
            name: meta.category,
            slug: fields.categorySlug,
            entries: []
          }
        }
        result[fields.categorySlug].entries.push({ meta, fields })
        delete result.node
        return result
      }))

      // category page
      categories.forEach(category => {
        createPage({
          path: category.slug,
          component: resolve('src/templates/category.jsx'),
          context: {
            category: category.name,
            entries: category.entries
          }
        })
      })

      // data page
      createPage({
        path: 'data',
        component: resolve('src/templates/data.jsx'),
        context: {
          categories
        }
      })
    })
}
