import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import 'katex/dist/katex.min.css'

import { LeftTop, RightBottom } from './carve'
import Border from '../assets/border.png'

import './index.css'

const Container = styled.div`
  z-index: 99;
  margin: 15px 0;
  padding: 15px 0;
  border: 15px solid transparent;
  border-image: url(${Border}) 60 round;
`

const App = ({ children }) => (
  <Container>
    <LeftTop />
    {children()}
    <RightBottom />
  </Container>
)

App.propTypes = {
  children: PropTypes.func
}

export default App
