module.exports = {
  siteMetadata: {
    title: 'Libreria',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: __dirname + '/content',
        name: 'pages',
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
