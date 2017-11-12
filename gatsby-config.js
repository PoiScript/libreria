const { join } = require('path')

module.exports = {
  siteMetadata: {
    title: 'Libreria',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-git',
      options: {
        path: join(__dirname, 'content'),
        extension: ['.md']
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: join(__dirname, 'content'),
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-katex'
        ]
      }
    }
  ]
}
