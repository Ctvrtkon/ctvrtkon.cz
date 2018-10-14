import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { PostPreviewHalf } from "../components/Posts";

export default class PostsPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    return (
      <Layout>
        <section className="section has-overlay">
          <div className="container is-outlined has-background-white-ter" style={{ padding: "2em 4em" }}>
            <h4 className="title is-4">Pozvánky</h4>
            <div className="columns is-multiline">
            {posts
                .map(({ node: post }) => (
                  <PostPreviewHalf key={post.id} slug={post.fields.slug} post={post.frontmatter}/>
                ))}
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

PostsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query PostsQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
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
