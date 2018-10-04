import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from 'gatsby'

import logo from "../img/logo.svg";
import Layout from "../components/Layout";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <h1 className="has-text-weight-bold is-size-2">
              <img src={logo} alt="Čtvrtkon" style={{ width: "280px" }}/>
            </h1>
          </div>
          <div className="container is-outlined has-background-white-ter"
               style={{ padding: "2em 4em" }}
          >
            <h2 className="is-size-3">Příští Čtvrtkon / Pozvánka</h2>
            {posts
              .map(({ node: post }) => (
                <div
                  className="content"
                  key={post.id}
                >
                  <p>
                    <h2>
                      <Link className="has-text-primary" to={post.fields.slug}>
                        {post.frontmatter.title}
                      </Link>
                    </h2>
                    <img src={post.frontmatter.image} alt={post.frontmatter.title}/>
                    <small>{post.frontmatter.date}</small>
                  </p>
                  <p>
                    {post.excerpt}
                    <br/>
                    <br/>
                    <Link className="button is-primary is-outlined" to={post.fields.slug}>
                      Přečíst více
                    </Link>
                  </p>
                </div>
              ))}
          </div>
        </section>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            image
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
