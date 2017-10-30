const { resolve } = require('path')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return graphql(`{
    allMarkdownRemark(limit: 1000) {
      edges {
        node {
          excerpt(pruneLength: 250) html id
          frontmatter { path title }
        }
      }
    }
  }`)
    .then(result => {
      if (result.errors) {
        return Promise.reject(result.errors)
      }

      result.data.allMarkdownRemark.edges
        .forEach(({ node }) => {
          createPage({
            path: node.frontmatter.path,
            component: resolve('src/templates/entry.jsx')
          })
        })
    })
}
