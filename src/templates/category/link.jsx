import Link from 'gatsby-link'
import styled from 'styled-components'

export default styled(Link)`
  text-decoration: none;
  display: block;
  margin: 10px 0;
  position: relative;
  background-color: ${props => props.theme.overflowColor};
  padding: 0.6rem 0.5rem;
  cursor: pointer;
  letter-spacing: 0.15rem;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    border-left: 0.3rem solid ${props => props.theme.primaryBorderColor};
  }

  &:hover {
    color: ${props => props.theme.overflowColor};
    transition: background-color .1s, color .1s;
    background: linear-gradient(to bottom,
    ${props => props.theme.textColor} 5%, transparent 5%, transparent 10%, ${props => props.theme.textColor} 10%,
    ${props => props.theme.textColor} 90%, transparent 90%, transparent 95%, ${props => props.theme.textColor} 95%);
  }
`
