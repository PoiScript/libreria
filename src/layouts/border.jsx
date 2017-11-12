import styled from 'styled-components'

import TopBorderImg from '../assets/border-top.png'
import BottomBorderImg from '../assets/border-bottom.png'

const Border = styled.section`
  z-index: 99;
  margin: 15px 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid transparent;
`

export const TopBorder = Border.extend`
  border-image: url(${TopBorderImg}) 60 round
`

export const BottomBorder = Border.extend`
  border-image: url(${BottomBorderImg}) 60 round
`
