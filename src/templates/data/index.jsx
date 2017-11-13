import React from 'react'
import Helmet from 'react-helmet'

import Link from './link'
import Container from './container'
import Wrapper from '../../components/wrapper'
import Header from '../../components/header'
import SubHeader from '../../components/subheader'

const Data = ({ pathContext: { categories } }) => (
  <Wrapper>
    <Helmet title='Data' />
    <Header>■DATA</Header>
    <SubHeader>- {categories.length} ITEM{categories.length === 1 || 'S'} -</SubHeader>
    <Container>
      {categories.map((cat, i) => (
        <Link key={i} to={`${cat.slug}`}>
          {cat.name}<span className='spacer' />[{cat.entries}]
        </Link>
      ))}
    </Container>
  </Wrapper>
)

export default Data
