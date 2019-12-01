import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon-white.svg";
import logo from "../img/logo-white.svg";
import slack from "../img/slack_white.png";
import facebook from "../img/facebook-logo.svg";

const Navbar = () => (
  <nav className="navbar is-primary shadow is-uppercase has-text-weight-bold">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item logo-wrapper">
          <img src={logo} alt="Čtvrtkon"/>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" activeClassName="is-active" to="/posts">
          Pozvánky
        </Link>
        <Link className="navbar-item" activeClassName="is-active" to="/about">
          O Projektu
        </Link>
        <Link className="navbar-item" activeClassName="is-active" to="/contact">
          Kontakt
        </Link>
      </div>
      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://www.facebook.com/groups/ctvrtkon/"
          target="_blank"
          rel="noopener noreferrer"
          title="Čtvrtkon Facebook skupina"
        >
          <span className="icon">
            <img src={facebook} alt="Facebook icon"/>
          </span>
        </a>
        <a
          className="navbar-item"
          href="https://ctvrtkon-slack.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          title="Připojit se na Čtvrtkon slack"
        >
          <span className="icon">
            <img src={slack} alt="Slack icon"/>
          </span>
        </a>
        <a
          className="navbar-item"
          href="https://github.com/Ctvrtkon/ctvrtkon.cz"
          target="_blank"
          rel="noopener noreferrer"
          title="Otevřít Github toho projektu"
        >
          <span className="icon">
            <img src={github} alt="Github icon"/>
          </span>
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;

