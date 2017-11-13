import styled from 'styled-components'

export default styled.div`
  position: relative;
  padding: 0;
  margin: 40px 20px 0 40px;
  
  &:before {
    content: '';
    position: absolute;
    width: 0.3rem;
    top: 0;
    left: -2rem;
    height: 100%;
    border: solid ${props => props.theme.borderColor};
    border-width: 0 0.2rem 0 0.7rem;
  }
`
