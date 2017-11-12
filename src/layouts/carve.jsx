import styled from 'styled-components'

const TopLeftCorner = styled.div`
  top: 0;
  left: 0;
  z-index: -1;
  position: fixed;
`

const BottomRightCorner = styled.div`
  right: 0;
  bottom: 0;
  z-index: -1;
  position: fixed;
  
  @media (max-width: 1024px) {
    display: none;
  }
`

export const TopLeftLineCarve = TopLeftCorner.extend`
  width: 500px;
  height: 500px;
  background-image: linear-gradient(45deg,
  transparent 49.8%, #b4af9b 50%, transparent 50.2%);
`

export const TopLeftDoubleLinesCarve = TopLeftCorner.extend`
  width: 600px;
  height: 400px;
  background-image: linear-gradient(45deg,
  transparent 33.6%, #b4af9b 33.8%, transparent 34%,
  transparent 46%, #b4af9b 46.2%, transparent 46.4%);
`

export const TopLeftDoubleCirclesCarve = TopLeftCorner.extend`
  width: 300px;
  height: 300px;
  background-image: radial-gradient(at top left,
  transparent 66.5%, #b4af9b 67%, transparent 67.5%,
  transparent 69%, #b4af9b 69.5%, transparent 69.9%);
`

export const BottomRightLineCarve = BottomRightCorner.extend`
  width: 500px;
  height: 500px;
  background-image: linear-gradient(45deg,
  transparent 49.8%, #b4af9b 50%, transparent 50.2%);
`

export const BottomRightDoubleLinesCarve = BottomRightCorner.extend`
  width: 600px;
  height: 400px;
  background-image: linear-gradient(45deg,
  transparent 53.6%, #b4af9b 53.8%, transparent 54%,
  transparent 66%, #b4af9b 66.2%, transparent 66.4%);
`

export const BottomRightDoubleCirclesCarve = BottomRightCorner.extend`
  width: 300px;
  height: 300px;
  background-image: radial-gradient(at right bottom,
  transparent 66.5%, #b4af9b 67%, transparent 67.5%,
  transparent 69%, #b4af9b 69.5%, transparent 69.9%);
`
