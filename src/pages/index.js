import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from 'gatsby'
import Layout from "../components/Layout";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <section className="section">
          <div className="container is-outlined has-background-white-ter" style={{ padding: "2em 4em" }}>
            <div className="columns is-multiline">
              {posts
                .map(({ node: post }) => (
                  <div class="column is-half">
                    <Link className="has-text-primary" to={post.fields.slug}>
                      <div class="card is-shady">
                        <div class="card-image">
                          <figure class="image">
                            <img src={post.frontmatter.image} alt={post.frontmatter.title} className="post-image" />
                          </figure>
                        </div>
                        <div class="card-content">
                          <div class="media">
                            <div class="media-content">
                              <h2 class="title is-4">{post.frontmatter.title}</h2>
                            </div>
                          </div>
                          <div class="content">
                            {post.frontmatter.description}
                            <br />
                            <p className="has-text-right is-size-7">
                              <time>{post.frontmatter.date}</time>
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
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
          excerpt(pruneLength: 200)
          id
          fields {
            slug
          }
          frontmatter {
            title
            image
            description
            templateKey
            date(formatString: "DD.MM.YYYY")
          }
        }
      }
    }
  }
`;
