import React from 'react'
import Helmet from 'react-helmet'

import { BottomBorder, TopBorder } from '../components/Border'

const styles = {
  content: {
    margin: 'auto',
    maxWidth: '960px',
    padding: '10px'
  },
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
      <TopBorder />
      <div style={styles.content}>
        <div style={styles.header}>■{entry.frontmatter.title}</div>
        <div dangerouslySetInnerHTML={{ __html: entry.html }} />
      </div>
      <BottomBorder />
    </div>
  )
}

export const entryQuery = graphql`
  query EntryQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
