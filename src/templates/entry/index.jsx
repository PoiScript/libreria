import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { injectGlobal } from 'styled-components'

import 'katex/dist/katex.min.css'

import Paginator from './paginator'
import CommitStatus from './commit-status'
import Wrapper from '../../components/wrapper'
import Header from '../../components/header'

injectGlobal`
  .katex-display > .katex {
    background-color: #dcd8c0;
    box-shadow: 0.3rem 0.3rem 0 #bab5a1;
    padding: 20px;
  }
`

const Entry = ({ pathContext: { entry, gitInfo } }) => (
  <Wrapper>
    <Helmet title={entry.meta.title} />
    <Paginator>
      <Link to='/'>Libreria</Link> >&nbsp;
      <Link to={`${entry.fields.categorySlug}`}>{entry.meta.category}</Link> >&nbsp;
      {entry.meta.title}
    </Paginator>
    <Header>■{entry.meta.title}</Header>
    <div dangerouslySetInnerHTML={{ __html: entry.html }} />
    <CommitStatus
      title={entry.meta.title}
      count={gitInfo.commitCount}
      lastCommit={gitInfo.lastCommit}
      firstCommit={gitInfo.firstCommit}
    />
  </Wrapper>
)

export default Entry
