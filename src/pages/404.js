import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";

const NotFoundPage = () => (
  <Layout>
    <div>
      <h1>Stránka nenalezena</h1>
      <p>Je nám líto, ale daná stránka neexistuje. Pokračujte prosím na <Link to="/">hlavní stránku</Link></p>
    </div>
  </Layout>
);

export default NotFoundPage;
