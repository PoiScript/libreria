import React from 'react'
import PropTypes from 'prop-types'

import 'katex/dist/katex.min.css'
import './index.css'

const App = ({ children }) => (
  <div className="content">
    {children()}
  </div>
)

App.propTypes = {
  children: PropTypes.func
}

export default App
