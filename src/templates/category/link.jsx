import Link from 'gatsby-link'
import styled from 'styled-components'

export default styled(Link)`
  text-decoration: none;
  display: block;
  margin: 10px 0;
  position: relative;
  background-color: #dcd8c0;
  padding: 0.6rem 0.5rem;
  cursor: pointer;
  letter-spacing: 0.15rem;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    height: 100%;
    left: 0;
    border-left: 0.3rem solid #bd9d86;
  }

  &:hover {
    color: #d7d1b9;
    transition: background-color .1s, color .1s;
    background: linear-gradient(to bottom,
    #4d4940 5%, transparent 5%, transparent 10%, #4d4940 10%,
    #4d4940 90%, transparent 90%, transparent 95%, #4d4940 95%);
  }
`
