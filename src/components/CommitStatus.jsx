import React from 'react'

import './CommitStatus.css'

const styles = {
  status: {
    boxOrdinalGroup: 'vertical',
    margin: 0,
    marginBottom: '1rem',
    backgroundColor: '#dcd8c0',
    padding: '0.5rem',
    boxShadow: '0.2rem 0.2rem 0 #bab5a1'
  },
  statusHeader: {
    margin: '-0.5rem',
    marginBottom: '0.5rem',
    padding: '0.5rem 1rem',
    fontSize: '1.2rem',
    backgroundColor: '#454138',
    color: '#bab5a1'
  }
}

export default ({ lastCommit, firstCommit, count, title }) => (
  <div style={styles.status}>
    <div style={styles.statusHeader}>Status</div>
    <div className='status-content'>
      <div className='status-row'>
        <span>{title}</span>
        <span>Lv: {count}</span>
      </div>
      <hr />
      <div className='status-row'>
        <span>Last Commit:</span>
        <a href={'https://github.com/PoiScript/libreria/commit/' + lastCommit.hash}>{lastCommit.message}</a>
      </div>
      <div className='status-row'>
        <span>Commit Date:</span>
        <span>{lastCommit.date}</span>
      </div>
      <hr />
      <div className='status-row'>
        <span>First Commit:</span>
        <a href={'https://github.com/PoiScript/libreria/commit/' + firstCommit.hash}>{firstCommit.message}</a>
      </div>
      <div className='status-row'>
        <span>Commit Date:</span>
        <span>{firstCommit.date}</span>
      </div>
      <hr />
      <div className='no-error'>NO ERROR</div>
    </div>
  </div>
)
