const { resolve, parse, join } = require('path')
const { kebabCase } = require('lodash')

const templates = resolve('src/templates')

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
      value: kebabCase(node.frontmatter.category)
    })
  }
}

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return graphql(`
  {
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
  }
  `)
    .then(({ data: { entries }, errors }) => {
      if (errors) {
        return Promise.reject(errors)
      }

      // home page
      createPage({
        path: '/',
        component: join(templates, 'home-screen/index.jsx')
      })

      // entry page
      entries.edges.forEach(({ node: { fields, fileAbsolutePath } }) => {
        createPage({
          path: join(fields.categorySlug, fields.slug),
          component: join(templates, 'entry/index.jsx'),
          context: {
            fileAbsolutePath
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
          component: join(templates, 'category/index.jsx'),
          context: {
            slug: category.slug,
            name: category.name
          }
        })
      })

      // data page
      createPage({
        path: 'data',
        component: join(templates, 'data/index.jsx'),
        context: {
          categories: categories.map(cat => Object.assign(cat, { entries: cat.entries.length }))
        }
      })
    })
}
