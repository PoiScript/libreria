const { resolve } = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === 'MarkdownRemark') {
    console.log('node: ' + node)
    console.log('getNode: ' + getNode)
    createNodeField({
      node,
      name: 'slug',
      value: createFilePath({ node, getNode })
    })
  }
}

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return graphql(`{
    allMarkdownRemark(limit: 1000) {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
  }`)
    .then(result => {
      if (result.errors) {
        return Promise.reject(result.errors)
      }

      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: resolve('src/templates/entry.jsx'),
          context: {
            slug: node.fields.slug,
          }
        })
      })
    })
}
