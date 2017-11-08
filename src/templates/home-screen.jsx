import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import './home-screen.css'

const HomeScreen = ({ pathContext: { count } }) => (
  <div className='home-screen'>
    <Helmet title='Libreria' />
    <div className='home-screen-content'>
      <div className='home-screen-title text-shadow--0-3rem'>Libreria</div>
      <div className='home-screen-description text-shadow--0-2rem'>
        PoiScript's wiki and it's {count} entries so far …
      </div>
      <div className='home-screen-link-container'>
        <Link className='home-screen-link' to='/category'>Category</Link>
      </div>
    </div>
    <div className='home-screen-copyright text-shadow--0-2rem'>
      © 2017 PoiScript. All Rights Reserved.
    </div>
  </div>
)

HomeScreen.propTypes = {
  pathContext: PropTypes.shape({
    count: PropTypes.number.isRequired
  }).isRequired
}

export default HomeScreen
