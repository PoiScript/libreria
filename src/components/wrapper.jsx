import styled from 'styled-components'

export default styled.div`
  margin: auto;
  padding: 0 10px;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  /* minus top/bottom boarder height */
  min-height: calc(100vh - 90px);

  .katex-display > .katex {
    background-color: ${props => props.theme.overflowColor};
    box-shadow: 0.3rem 0.3rem 0 ${props => props.theme.shadowColor};
    padding: 20px;
  }
`
