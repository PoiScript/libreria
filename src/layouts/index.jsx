import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'

import 'katex/dist/katex.min.css'

import { LeftTop, RightBottom } from './carve'
import Border from '../assets/border.png'

import './index.css'
import { theme } from './theme'

const Container = styled.div`
  z-index: 99;
  margin: 15px 0;
  padding: 15px 0;
  border: 15px solid transparent;
  border-image: url(${Border}) 60 round;
`

const App = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Container>
      <LeftTop />
      {children()}
      <RightBottom />
    </Container>
  </ThemeProvider>
)

App.propTypes = {
  children: PropTypes.func
}

export default App
