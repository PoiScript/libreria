import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  background-color: #dcd8c0;
`

const Title = styled.div`
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  background-color: #454138;
  color: #dcd8c0
`

const Content = styled.div`
  padding: 1rem;
  
  > hr:first-of-type {
    border-top: solid #bab5a1;
    border-width: 0.125rem 0 0 0;
  }
  
  > hr:not(:first-of-type) {
    border-top: solid #bab5a1;
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

const CommitStatus = ({ lastCommit, firstCommit, count, title }) => (
  <Wrapper>
    <Title>Status</Title>
    <Content>
      <Row>
        <span>{title}</span>
        <span>Lv: {count}</span>
      </Row>
      <hr />
      <Row>
        <span>Last Commit:</span>
        <a href={GITHUB_COMMIT_URL + lastCommit.hash}>{lastCommit.message}</a>
      </Row>
      <Row>
        <span>Commit Date:</span>
        <span>{lastCommit.date}</span>
      </Row>
      <hr />
      <Row>
        <span>First Commit:</span>
        <a href={GITHUB_COMMIT_URL + firstCommit.hash}>{firstCommit.message}</a>
      </Row>
      <Row>
        <span>Commit Date:</span>
        <span>{firstCommit.date}</span>
      </Row>
      <hr />
      <NoError>NO ERROR</NoError>
    </Content>
  </Wrapper>
)

export default CommitStatus
