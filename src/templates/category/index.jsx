import React from 'react'
import Helmet from 'react-helmet'

import Link from './link'
import Container from './container'
import Wrapper from '../../components/wrapper'
import Header from '../../components/header'
import SubHeader from '../../components/subheader'

const Category = ({ data: { entries }, pathContext: { name, slug } }) => (
  <Wrapper>
    <Helmet title={name} />
    <Header>■{name}</Header>
    <SubHeader>- {entries.totalCount} ITEM{entries.totalCount === 1 || 'S'} -</SubHeader>
    <Container>
      {entries.edges.map(({ node }, i) => (
        <Link key={i} to={`${slug}/${node.fields.slug}`}>
          {node.meta.title}
        </Link>
      ))}
    </Container>
  </Wrapper>
)

export default Category

export const categoryQuery = graphql`
  query CategoryQuery($slug: String!) {
    entries: allMarkdownRemark(
      filter: { fields: { categorySlug: { eq: $slug } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          meta: frontmatter {
            title
          }
        }
      }
    }
  }
`
