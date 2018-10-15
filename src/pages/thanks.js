import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";

export default class ThanksPage extends React.Component {
  render() {
    return (
      <Layout>
        <h1 className="title is-h1">Děkujeme</h1>
        <p>Děkujeme za váš podnět. Co nejdříve se mu budeme věnovat. <Link to="/">Zpět na hlavní stránku.</Link></p>
      </Layout>
    );
  }
};