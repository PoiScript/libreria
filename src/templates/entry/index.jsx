import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import Paginator from './paginator'
import CommitStatus from './commit-status'
import Wrapper from '../../components/wrapper'
import Header from '../../components/header'

const Entry = ({ data: { entry, gitInfo } }) => (
  <Wrapper>
    <Helmet title={entry.meta.title} />
    <Paginator>
      <Link to='/'>Libreria</Link> >&nbsp;
      <Link to={`${entry.fields.categorySlug}`}>{entry.meta.category}</Link> >&nbsp;
      {entry.meta.title}
    </Paginator>
    <Header>■{entry.meta.title}</Header>
    <p>{entry.wordCount.words}</p>
    <div dangerouslySetInnerHTML={{ __html: entry.html }} />
    <CommitStatus
      title={entry.meta.title}
      words={entry.wordCount.words}
      gitInfo={gitInfo}
    />
  </Wrapper>
)

export default Entry

export const entryQuery = graphql`
  query EntryQuery($fileAbsolutePath: String!) {
    entry: markdownRemark(fileAbsolutePath: { eq: $fileAbsolutePath }) {
      html
      wordCount {
        words
      }
      meta: frontmatter {
        title
        category
      }
      fields {
        categorySlug
      }
    }
    gitInfo (fileAbsolutePath: { eq: $fileAbsolutePath }) {
      total
      latest {
        date
        hash
      }
    }
  }
`
