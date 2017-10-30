import React from 'react'
import Helmet from 'react-helmet'

const styles = {
  header: {
    fontSize: '2.5rem',
    fontWeight: 'normal',
    textShadow: '0.3rem 0.3rem 0 #bab5a1',
    textTransform: 'uppercase',
    letterSpacing: '0.5rem'
  }
}

export default ({ data }) => {
  const { markdownRemark: entry } = data
  return (
    <div>
      <Helmet title={entry.frontmatter.title} />
      <div style={styles.header}>{entry.frontmatter.title}</div>
      <div dangerouslySetInnerHTML={{ __html: entry.html }} />
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter { path title }
    }
  }
`
