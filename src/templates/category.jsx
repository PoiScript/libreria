import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import './category.css'

const Category = ({ pathContext: { category, entries } }) => (
  <div className='content'>
    <Helmet title={category} />
    <header className='primary-header text-shadow--0-3rem'>■{category}</header>
    <header className='primary-subheader'>- {entries.length} ITEMS -</header>
    <div className='entry-container'>
      {entries.map((entry, i) => (
        <Link
          key={i}
          className='entry-row'
          to={`${entry.fields.categorySlug}/${entry.fields.slug}`}
        >
          {entry.meta.title}
        </Link>
      ))}
    </div>
  </div>
)

Category.propTypes = {
  pathContext: PropTypes.shape({
    category: PropTypes.string.isRequired
  }).isRequired
}

export default Category
