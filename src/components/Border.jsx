import React from 'react'

import TopBorderImg from '../assets/border-top.png'
import BottomBorderImg from '../assets/border-bottom.png'

const styles = {
  border: {
    zIndex: 99,
    margin: '15px 0',
    borderLeft: '15px solid transparent',
    borderRight: '15px solid transparent',
    borderBottom: '15px solid transparent'
  },
  nav: {
    borderImage: `url(${TopBorderImg}) 60 round`
  },
  footer: {
    borderImage: `url(${BottomBorderImg}) 60 round`
  }
}

export const TopBorder = () => (
  <section style={{...styles.nav, ...styles.border}} />
)

export const BottomBorder = () => (
  <section style={{...styles.footer, ...styles.border}} />
)
