import React from 'react'
import PropTypes from 'prop-types'

import 'katex/dist/katex.min.css'

import { BottomBorder, TopBorder } from './border'
import { LeftTop, RightBottom } from './carve'

import './index.css'

const App = ({ children }) => (
  <div>
    <LeftTop />
    <TopBorder />
    {children()}
    <BottomBorder />
    <RightBottom />
  </div>
)

App.propTypes = {
  children: PropTypes.func
}

export default App
