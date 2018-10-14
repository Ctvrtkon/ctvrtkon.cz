import React from "react";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar";
import "./all.sass";
import logo from "../img/logo.svg";
import github from "../img/github-icon.svg";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Čtvrtkon.cz"/>
    <Navbar/>
    <div>{children}</div>
    <div className="footer has-background-grey-darker has-text-white has-text-centered">
      <p>
        <img src={logo} alt="ctvrtkon.cz" className="logo" width="300"/>
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
);

export default TemplateWrapper;
