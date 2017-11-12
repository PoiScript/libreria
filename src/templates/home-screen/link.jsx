import Link from 'gatsby-link'
import styled from 'styled-components'

export default styled(Link)`
  display: inline-block;
  width: 80px;
  padding: 2px;
  text-decoration: none;

  &:hover {
    text-shadow: 0.2rem 0.2rem 0 #bab5a1;
  }

  &:hover {
    border: solid #424242;
    border-width: 0 0 2px 0;
  }
`
