import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { PostPreviewFull, PostPreviewHalf } from "../components/Posts";
import Helmet from "react-helmet";

export default class PostsPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const { node: firstPost } = posts[0];
    return (
      <Layout>
        <Helmet title={`Pozvánky | Čtvrtkon.cz`}/>
        <h4 className="title is-4">Příští Čtvrtkon <span className="has-text-grey has-text-weight-normal">/ Pozvánka</span></h4>
        <div className="columns">
          <PostPreviewFull slug={firstPost.fields.slug} post={firstPost.frontmatter}/>
        </div>
        <div className="horizontal-divider">&nbsp;</div>
        <h4 className="title is-4">Minulé akce</h4>
        <div className="columns is-multiline">
          {posts
            .filter((_, idx) => idx > 0) // skip first post as its part of full preview
            .map(({ node: post }) => (
              <PostPreviewHalf key={post.id} slug={post.fields.slug} post={post.frontmatter}/>
            ))}
        </div>
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
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            description
            templateKey
            date(formatString: "DD.MM.YYYY")
            time(formatString: "DD.MM.YYYY HH:mm"),
            place,
            fbEventLink
          }
        }
      }
    }
  }
`;
