import React from 'react'

import TopBorderImg from '../assets/border-top.png'
import BottomBorderImg from '../assets/border-bottom.png'

const style = {
  zIndex: 99,
  margin: '15px 0',
  borderLeft: '15px solid transparent',
  borderRight: '15px solid transparent',
  borderBottom: '15px solid transparent'
}

export const TopBorder = () => (
  <section style={{ ...style, borderImage: `url(${TopBorderImg}) 60 round` }} />
)

export const BottomBorder = () => (
  <section style={{ ...style, borderImage: `url(${BottomBorderImg}) 60 round` }} />
)
