import React from "react";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar";
import "./all.sass";
import logo from "../img/logo-white.svg";
import github from "../img/github-icon-white.svg";
import { Link } from "gatsby";
import { FaFacebook, FaTwitter, FaSlack, FaYoutube } from "react-icons/fa";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Čtvrtkon.cz">
      <html lang="cs"/>
      <meta charSet="utf-8"/>
      <meta name="description" content="Čtvrteční setkání webové komunity v Českých Budějovicích"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/img/favicons/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/img/favicons/favicon-32x32.png"/>
      <link rel="mask-icon" href="/img/favicons/safari-pinned-tab.svg" color="#5bbad5"/>
      <meta name="msapplication-TileColor" content="#007CA3"/>
      <meta name="theme-color" content="#ffffff"/>
      <meta name="twitter:site" content="@ctvrtkon"/>
      <meta name="twitter:creator" content="@ctvrtkon"/>
      <meta property="og:title" content="Čtvrtkon.cz"/>
      <meta property="og:site_name" content="Čtvrtkon.cz"/>
      <meta property="og:type" content="website"/>
      <meta property="og:description" content="Čtvrteční setkání webové komunity v Českých Budějovicích"/>
      <meta property="og:image" content="/img/facebook-logo.png"/>
    </Helmet>
    <Navbar/>
    <div>
      <section className="section has-overlay">
        <div className="container main-container shadow is-outlined has-background-white-ter">
          {children}
        </div>
      </section>
    </div>
    <div className="footer has-background-grey-darker has-text-white">
      <div className="section is-paddingless has-text-centered">
        <section className="columns">
          <div className="column has-text-left is-3 is-offset-2">
            <ul>
              <li>
                <Link to="/" className="has-text-white">
                  Domů
                </Link>
              </li>
              <li>
                <Link to="/posts" className="has-text-white">
                  Pozvánky
                </Link>
              </li>
              <li>
                <Link to="/about" className="has-text-white">
                  O Projektu
                </Link>
              </li>
              <li>
                <Link to="/competition-2019" className="has-text-white">
                  Soutěž!
                </Link>
              </li>
              <li>
                <Link to="/contact" className="has-text-white">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          <div className="column is-2">
            <img src={logo} alt="ctvrtkon.cz" className="logo" width="300"/>
          </div>
          <div className="column is-3 has-text-right">
            <ul className="links">
              <li><a href="https://www.facebook.com/groups/ctvrtkon/" target="_blank" className="has-text-white"
                     rel="noopener noreferrer">Facebook&nbsp;&nbsp;<FaFacebook /></a></li>
              <li><a href="https://twitter.com/ctvrtkon" target="_blank" className="has-text-white" rel="noopener noreferrer">Twitter&nbsp;&nbsp;<FaTwitter/></a>
              </li>
              <li><a href="https://ctvrtkon-slack.herokuapp.com/" target="_blank" className="has-text-white"
                     rel="noopener noreferrer">Slack&nbsp;&nbsp;<FaSlack/></a></li>
              <li><a href="https://www.youtube.com/channel/UCp56QhLAr4zefLhkHUFt0UQ/" target="_blank" className="has-text-white"
                     rel="noopener noreferrer">YouTube&nbsp;&nbsp;<FaYoutube/></a></li>
            </ul>
          </div>
        </section>
      </div>
      <div className="section is-paddingless has-text-centered">
        <p>
          <small className="is-small has-text-weight-bolder">&copy; 2013 - 2019 ČTVRTKON.CZ - ČTVRTEČNÍ SETKÁNÍ WEBOVÉ KOMUNITY V ČESKÝCH
            BUDĚJOVICÍCH
          </small>
          <br/><br/>
          <a
            href="https://github.com/Ctvrtkon/ctvrtkon.cz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <img src={github} alt="Github"/>
            </span>
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default TemplateWrapper;
