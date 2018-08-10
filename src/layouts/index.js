import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'
import logo from '../img/logo.svg'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Čtvrtkon.cz" />
    <Navbar />
    <div>{children()}</div>
    <div className="footer has-background-grey-darker has-text-white has-text-centered">
      <img src={logo} className="logo" /><br />
      Upravit na <a href="https://github.com/Ctvrtkon/ctvrtkon.cz" className="has-text-white" target="_blank">githubu</a>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
