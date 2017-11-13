import styled from 'styled-components'

export default styled.div`
  box-shadow: 0.3rem 0.3rem 0 ${props => props.theme.shadowColor};
  position: relative;
  background-color: ${props => props.theme.overflowColor};
  padding: 1px 0;
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
