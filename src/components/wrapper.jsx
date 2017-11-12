import styled from 'styled-components'

export default styled.div`
  margin: auto;
  padding: 0 10px;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  /* minus top/bottom boarder height */
  min-height: calc(100vh - 90px);
`
