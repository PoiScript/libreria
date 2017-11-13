import styled from 'styled-components'

export default styled.div`
  position: relative;
  background-color: ${props => props.theme.overflowColor};
  box-shadow: 0.2rem 0.2rem 0 ${props => props.theme.shadowColor};
  padding: 0.6rem 1.8rem;
  
  &:before {
    content: '';
    position: absolute;
    width: 0.3rem;
    top: 0;
    height: 100%;
    left: 0;
    border: solid ${props => props.theme.textColor};
    border-width: 0 0.2rem 0 0.7rem;
  }

  &:after {
    content: '';
    position: absolute;
    right: 0.5rem;
    height: 0.8rem;
    bottom: 0.3rem;
    border: solid ${props => props.theme.textColor};
    border-width: 0 0.8rem 0 0;
  }
`
