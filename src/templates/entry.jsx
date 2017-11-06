import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import { BottomBorder, TopBorder } from '../components/Border'
import CommitStatus from '../components/CommitStatus'

import './entry.css'

const styles = {
  content: {
    margin: 'auto',
    padding: '0 10px',
    maxWidth: '960px'
  },
  header: {
    fontSize: '2.5rem',
    paddingTop: '10px',
    fontWeight: 'normal',
    textShadow: '0.3rem 0.3rem 0 #bab5a1',
    textTransform: 'uppercase',
    letterSpacing: '0.5rem'
  }
}

export default ({ data: { entry, git } }) => (
  <div>
    <Helmet title={entry.meta.title} />
    <TopBorder />
    <div style={styles.content}>
      <div className='paginator'>
        <Link to='/'>Libreria</Link> > <Link to={entry.meta.category}>{entry.meta.category}</Link> > {entry.meta.title}
      </div>
    </div>
    <div style={styles.content}>
      <div style={styles.header}>■{entry.meta.title}</div>
      <div dangerouslySetInnerHTML={{ __html: entry.html }} />
      <CommitStatus
        title={entry.meta.title}
        count={git.commitCount}
        lastCommit={git.lastCommit}
        firstCommit={git.firstCommit}
      />
    </div>
    <BottomBorder />
  </div>
)

export const entryQuery = graphql`
  query EntryQuery($fileAbsolutePath: String!) {
    entry: markdownRemark(fileAbsolutePath: { eq: $fileAbsolutePath }) {
      html
      meta: frontmatter {
        category
        title
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
