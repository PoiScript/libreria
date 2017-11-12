import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Link from './link'
import Container from './container'
import Wrapper from '../../components/wrapper'
import Header from '../../components/header'
import SubHeader from '../../components/subheader'

const Category = ({ pathContext: { category, entries } }) => (
  <Wrapper>
    <Helmet title={category} />
    <Header>■{category}</Header>
    <SubHeader>- {entries.length} ITEM{entries.length === 1 || 'S'} -</SubHeader>
    <Container>
      {entries.map((entry, i) => (
        <Link key={i} to={`${entry.fields.categorySlug}/${entry.fields.slug}`}>
          {entry.meta.title}
        </Link>
      ))}
    </Container>
  </Wrapper>
)

Category.propTypes = {
  pathContext: PropTypes.shape({
    category: PropTypes.string.isRequired
  }).isRequired
}

export default Category
