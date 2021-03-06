import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Link from './link'
import Wrapper from '../../components/wrapper'

const Content = styled.div`
  flex: 1;
  text-align: center;
  margin-top: 20vh;
`

const Title = styled.div`
  font-size: 5rem;
  letter-spacing: 0.5rem;
`

const Description = styled.div`
  padding: 0;
  margin: 0;
  font-size: smaller;
  letter-spacing: 0.1rem;
  font-weight: 400;
`

const Container = styled.div`
  margin-top: 15vh;
`

const Copyright = styled.div`
  text-align: center;
  margin-top: 15vh;
`

const HomeScreen = ({ data: { entries } }) => (
  <Wrapper>
    <Helmet title='Libreria' />
    <Content>
      <Title>Libreria</Title>
      <Description>PoiScript's wiki and it's {entries.totalCount} entries so far …</Description>
      <Container>
        <Link to='/data'>DATA</Link>
      </Container>
    </Content>
    <Copyright>© 2017 PoiScript. All Rights Reserved.</Copyright>
  </Wrapper>
)

export default HomeScreen

export const homeScreenQuery = graphql`
  query HomeScreenQuery {
    entries: allMarkdownRemark {
      totalCount
    }
  }
`
