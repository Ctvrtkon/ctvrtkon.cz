import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/logo-alternative.svg";

const Navbar = () => (
  <nav className="navbar is-primary is-uppercase has-text-weight-bold">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
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
          href="https://github.com/Ctvrtkon/ctvrtkon.cz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={github} alt="Github"/>
          </span>
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;

