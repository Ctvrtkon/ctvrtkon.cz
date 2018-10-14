import React from "react";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar";
import "./all.sass";
import logo from "../img/logo.svg";
import github from "../img/github-icon.svg";
import { Link } from "gatsby";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Čtvrtkon.cz">
      <html lang="cs"/>
      <meta charSet="utf-8"/>
      <meta name="description" content="Čtvrteční setkání webové komunity v Českých Budějovicích"/>
    </Helmet>
    <Navbar/>
    <div>
      <section className="section has-overlay">
        <div className="container is-outlined has-background-white-ter" style={{ padding: "2em 4em" }}>
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
            <ul>
              <li><a href="https://www.facebook.com/groups/ctvrtkon/" target="_blank" className="has-text-white"
                     rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://twitter.com/ctvrtkon" target="_blank" className="has-text-white" rel="noopener noreferrer">Twitter</a>
              </li>
              <li><a href="https://ctvrtkon-slack.herokuapp.com/" target="_blank" className="has-text-white"
                     rel="noopener noreferrer">Slack</a></li>
              <li><a href="https://www.youtube.com/channel/UCp56QhLAr4zefLhkHUFt0UQ/" target="_blank" className="has-text-white"
                     rel="noopener noreferrer">YouTube</a></li>
            </ul>
          </div>
        </section>
      </div>
      <div className="section is-paddingless has-text-centered">
        <p>
          <small className="is-small has-text-weight-bolder">&copy; 2013 - 2018 ČTVRTKON.CZ - ČTVRTEČNÍ SETKÁNÍ WEBOVÉ KOMUNITY V ČESKÝCH
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
