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

  return graphql(`{
    entries: allMarkdownRemark {
      edges {
        node {
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
  }`)
    .then(({ data: { entries }, errors }) => {
      if (errors) {
        return Promise.reject(errors)
      }

      entries.edges
        .forEach(({ node }) => {
          createPage({
            path: join(node.fields.categorySlug, node.fields.slug),
            component: resolve('src/templates/entry.jsx'),
            context: {
              fileAbsolutePath: node.fileAbsolutePath
            }
          })
        })

      entries.edges
        .map(({ node }) => node.fields.categorySlug)
        .filter((slug, index, self) => self.indexOf(slug) === index)
        .forEach(slug => {
          const filteredEntries = entries.edges
            .map(({ node }) => node)
            .filter(node => node.fields.categorySlug === slug)
          const category = filteredEntries[0].meta.category
          createPage({
            path: slug,
            component: resolve('src/templates/category.jsx'),
            context: {
              category,
              entries: filteredEntries
            }
          })
        })
    })
}
