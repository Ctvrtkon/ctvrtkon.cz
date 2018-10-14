import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";

export default class FormSuccessPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section has-overlay">
          <div className="container is-outlined has-background-white-ter" style={{ padding: "2em 4em" }}>
            <h1 className="title is-h1">Děkujeme</h1>
            <p>Děkujeme za váš podnět. Co nejdříve se mu budeme věnovat. <Link to="/">Zpět na hlavní stránku.</Link></p>
          </div>
        </section>
      </Layout>

    );
  }
};
