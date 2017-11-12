import styled from 'styled-components'

export default styled.div`
  box-shadow: 0.3rem 0.3rem 0 #bab5a1;
  position: relative;
  background-color: #dcd8c0;
  padding: 1px 0;
  margin: 40px 20px 0 40px;
  
  &:before {
    content: '';
    position: absolute;
    width: 0.3rem;
    top: 0;
    left: -2rem;
    height: 100%;
    border: solid #938f7d;
    border-width: 0 0.2rem 0 0.7rem;
  }
`
