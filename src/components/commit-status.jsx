import React from 'react'

import './commit-status.css'

const CommitStatus = ({ lastCommit, firstCommit, count, title }) => (
  <div className='commit-status box-shadow--0-2rem'>
    <div className='commit-status-title'>Status</div>
    <div className='commit-status-content'>
      <div className='commit-status-row'>
        <span>{title}</span>
        <span>Lv: {count}</span>
      </div>
      <hr />
      <div className='commit-status-row'>
        <span>Last Commit:</span>
        <a href={'https://github.com/PoiScript/libreria/commit/' + lastCommit.hash}>
          {lastCommit.message}
        </a>
      </div>
      <div className='commit-status-row'>
        <span>Commit Date:</span>
        <span>{lastCommit.date}</span>
      </div>
      <hr />
      <div className='commit-status-row'>
        <span>First Commit:</span>
        <a href={'https://github.com/PoiScript/libreria/commit/' + firstCommit.hash}>
          {firstCommit.message}
        </a>
      </div>
      <div className='commit-status-row'>
        <span>Commit Date:</span>
        <span>{firstCommit.date}</span>
      </div>
      <hr />
      <div className='commit-status-no-error'>NO ERROR</div>
    </div>
  </div>
)

export default CommitStatus
