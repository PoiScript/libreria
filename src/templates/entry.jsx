import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import CommitStatus from '../components/commit-status'

import './entry.css'

const Entry = ({ pathContext: { entry, gitInfo } }) => (
  <div>
    <Helmet title={entry.meta.title} />
    <div className='content'>
      <div className='entry-paginator'>
        <Link to='/'>Libreria</Link>
        &nbsp;> <Link to={`${entry.fields.categorySlug}`}>{entry.meta.category}</Link>
        &nbsp;> {entry.meta.title}
      </div>
    </div>
    <div className='content'>
      <div className='primary-header text-shadow--0-3rem'>■{entry.meta.title}</div>
      <div dangerouslySetInnerHTML={{ __html: entry.html }} />
      <CommitStatus
        title={entry.meta.title}
        count={gitInfo.commitCount}
        lastCommit={gitInfo.lastCommit}
        firstCommit={gitInfo.firstCommit}
      />
    </div>
  </div>
)

export default Entry
