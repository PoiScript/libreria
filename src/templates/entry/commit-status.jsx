import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  background-color: ${props => props.theme.overflowColor};
  box-shadow: 0.3rem 0.3rem 0 ${props => props.theme.shadowColor};
`

const Title = styled.div`
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  color: ${props => props.theme.overflowColor};
  background-color: ${props => props.theme.textColor};
`

const Content = styled.div`
  padding: 1rem;
  
  > hr:first-of-type {
    border-top: solid ${props => props.theme.shadowColor};
    border-width: 0.125rem 0 0 0;
  }
  
  > hr:not(:first-of-type) {
    border-top: solid ${props => props.theme.shadowColor};
    border-width: 0.1rem 0 0 0;
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 0;
`

const NoError = styled.div`
  font-weight: 400;
  text-align: center;
  margin: 40px 0;
`

const GITHUB_COMMIT_URL = 'https://github.com/PoiScript/libreria/commit/'

const CommitStatus = ({ gitInfo, title, words }) => (
  <Wrapper>
    <Title>Status</Title>
    <Content>
      <Row>
        <span>{title}</span><span>Lv: {gitInfo.count}</span>
      </Row>
      <hr />
      <Row>
        <span>Words:</span><span>{words}</span>
      </Row>
      <Row>
        <span>Last Changed:</span>
        <a href={GITHUB_COMMIT_URL + gitInfo.latest.hash}>{gitInfo.latest.date}</a>
      </Row>
      <hr />
      <NoError>NO ERROR</NoError>
    </Content>
  </Wrapper>
)

export default CommitStatus
