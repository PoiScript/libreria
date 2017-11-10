import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import './data.css'

const Data = ({ pathContext: { categories } }) => (
  <div className='content'>
    <Helmet title='Data' />
    <header className='primary-header text-shadow--0-3rem'>■DATA</header>
    <div className='category-container'>
      {categories.map((category, i) => (
        <Link key={i} className='category-row' to={`${category.slug}`}>
          {category.name}
        </Link>
      ))}
    </div>
  </div>
)

export default Data
