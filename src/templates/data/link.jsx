import Link from 'gatsby-link'
import styled from 'styled-components'

export default styled(Link)`
  display: flex;
  flex-direction: row;
  font-weight: 500;
  text-decoration: none;
  margin: 10px 0;
  position: relative;
  background-color: #b0a996;
  padding: 0.6rem 0.5rem;
  cursor: pointer;
  letter-spacing: 0.15rem;

  &:hover {
    color: #d7d1b9;
    transition: background-color .1s, color .1s;
    background: linear-gradient(to bottom,
    #4d4940 5%, transparent 5%, transparent 10%, #4d4940 10%,
    #4d4940 90%, transparent 90%, transparent 95%, #4d4940 95%);
  }
  
  /* spacer */
  span {
    flex: 1 1 auto;
  }
`
