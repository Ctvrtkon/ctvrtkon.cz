import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import { PostPreviewFull, PostPreviewHalf } from "../components/Posts";
import { FaCaretRight } from "react-icons/fa";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const { node: firstPost } = posts[0];
    return (
      <Layout>
        <div className="level">
          <p>Čtvrteční setkání webové komunity v Českých Budějovicích.</p>
        </div>
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
        <div className="column has-text-right">
          <Link to="/posts" className="button is-text">Starší pozvánky <FaCaretRight /></Link>
        </div>
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
      limit: 5
    ) {
      edges {
        node {
          excerpt(pruneLength: 500)
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
            time(formatString: "DD.MM.YYYY")
            place
            section
            fbEventLink
          }
        }
      }
    }
  }
`;
