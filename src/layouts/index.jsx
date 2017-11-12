import React from 'react'
import PropTypes from 'prop-types'

import 'katex/dist/katex.min.css'

import { BottomBorder, TopBorder } from './border'
import {
  BottomRightDoubleCirclesCarve,
  BottomRightDoubleLinesCarve,
  BottomRightLineCarve,
  TopLeftDoubleCirclesCarve,
  TopLeftDoubleLinesCarve,
  TopLeftLineCarve
} from './carve'

import './index.css'

const App = ({ children }) => (
  <div>
    <TopLeftLineCarve />
    <TopLeftDoubleLinesCarve />
    <TopLeftDoubleCirclesCarve />
    <TopBorder />
    <div>{children()}</div>
    <BottomBorder />
    <BottomRightLineCarve />
    <BottomRightDoubleLinesCarve />
    <BottomRightDoubleCirclesCarve />
  </div>
)

App.propTypes = {
  children: PropTypes.func
}

export default App
