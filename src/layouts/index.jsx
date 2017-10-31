import React from 'react'
import PropTypes from 'prop-types'

import 'katex/dist/katex.min.css'
import './index.css'

const App = ({ children }) => (
  <div>
    <div className='topLeft circles topLeftCircles' />
    <div className='topLeft line1' />
    <div className='topLeft line2 topLeftLine2' />
    <div>{children()}</div>
    <div className='bottomRight circles bottomRightCircles' />
    <div className='bottomRight line1' />
    <div className='bottomRight line2 bottomRightLine2' />
  </div>
)

App.propTypes = {
  children: PropTypes.func
}

export default App
