import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import CommitStatus from '../components/CommitStatus'

import './entry.css'

const Entry = ({ data: { entry, git } }) => (
  <div>
    <Helmet title={entry.meta.title} />
    <div className='content'>
      <div className='paginator'>
        <Link to='/'>Libreria</Link> > <Link to={`${entry.fields.categorySlug}`}>{entry.meta.category}</Link> > {entry.meta.title}
      </div>
    </div>
    <div className='content'>
      <div className='primary-header'>■{entry.meta.title}</div>
      <div dangerouslySetInnerHTML={{ __html: entry.html }} />
      <CommitStatus
        title={entry.meta.title}
        count={git.commitCount}
        lastCommit={git.lastCommit}
        firstCommit={git.firstCommit}
      />
    </div>
  </div>
)

export default Entry

export const entryQuery = graphql`
  query EntryQuery($fileAbsolutePath: String!) {
    entry: markdownRemark(fileAbsolutePath: { eq: $fileAbsolutePath }) {
      html
      meta: frontmatter {
        category
        title
      }
      fields {
        categorySlug
      }
    }
      git: gitInfo(fileAbsolutePath: { eq: $fileAbsolutePath }) {
      commitCount
      lastCommit {
        hash
        message
        date
      }
      firstCommit {
        hash
        message
        date
      }
    }
  }
`
