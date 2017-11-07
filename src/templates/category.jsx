import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'


import './category.css'

const Category = ({ pathContext: { category, entries } }) => (
  <div>
    <div className='content'>
      <header>
        <span className='primary-header'>■{category}</span>
        <span className='primary-subheader'>- {entries.length} ITEMS</span>
      </header>
      <div className='category-container'>
        {entries.map((entry, i) => (
          <Link
            key={i}
            className='category-row'
            to={`${entry.fields.categorySlug}/${entry.fields.slug}`}
          >
            {entry.meta.title}
          </Link>
        ))}
      </div>
    </div>
  </div>
)

Category.propTypes = {
  pathContext: PropTypes.shape({
    category: PropTypes.string.isRequired
  }).isRequired
}

export default Category
