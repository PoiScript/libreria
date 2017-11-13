import Link from 'gatsby-link'
import styled from 'styled-components'

export default styled(Link)`
  display: flex;
  flex-direction: row;
  font-weight: 500;
  text-decoration: none;
  margin: 10px 0;
  position: relative;
  background-color: ${props => props.theme.borderColor};
  padding: 0.6rem 0.5rem;
  cursor: pointer;
  letter-spacing: 0.15rem;

  &:hover {
    color: ${props => props.theme.invertTextColor};
    transition: background-color .1s, color .1s;
    background: linear-gradient(to bottom,
      ${props => props.theme.textColor} 5%, transparent 5%, transparent 10%, ${props => props.theme.textColor} 10%,
      ${props => props.theme.textColor} 90%, transparent 90%, transparent 95%, ${props => props.theme.textColor} 95%);
  }

  .spacer {
    flex: 1 1 auto;
  }
`
