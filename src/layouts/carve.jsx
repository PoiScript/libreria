import styled from 'styled-components'

const Carve = styled.div`
  width: 500px;
  height: 500px;
  position: fixed;
  z-index: -1;
  background-repeat: no-repeat;
  background-size:  400px 400px, 600px 400px, 600px 600px;
  background-image:
    radial-gradient(at top left,
      transparent 345px, ${props => props.theme.carveColor} 346px,
      ${props => props.theme.carveColor} 349px, transparent 350px,
      transparent 360px, ${props => props.theme.carveColor} 361px,
      ${props => props.theme.carveColor} 364px, transparent 365px),
    linear-gradient(45deg,
      transparent 250px, ${props => props.theme.carveColor} 251px,
      ${props => props.theme.carveColor} 254px, transparent 255px,
      transparent 315px, ${props => props.theme.carveColor} 316px,
      ${props => props.theme.carveColor} 319px, transparent 320px),
    linear-gradient(45deg,
      transparent 424px, ${props => props.theme.carveColor} 425px,
      ${props => props.theme.carveColor} 428px, transparent 429px);
`

export const LeftTop = Carve.extend`
  top: 0;
  left: 0;
`

export const RightBottom = Carve.extend`
  right: 0;
  bottom: 0;
  transform: rotate(180deg);
  
  @media (max-width: 1024px) {
    display: none;
  }
`
