import React, { Component } from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";

class PostPreviewFull extends Component {
  render() {
    const post = this.props.post;

    return <div className="column is-full">
      <Link className="has-text-primary" to={this.props.slug}>
        <div className="card is-shady">
          <div className="card-content">
            <h5 className="title is-5">{post.title}</h5>
          </div>
          <div className="card-content main-post-content">
            <div className="content columns">
              <div className="column">
                <figure className="image is-marginless is-paddingless">
                    <img src={post.image} alt={post.title} className="post-image is-2by1"/>
                  </figure>
              </div>
              <div className="column">
                <p className="content has-text-justified is-medium">
                  {post.description}
                </p>
                <br />
                <Link to={this.props.slug} className="is-pulled-right">Na detail pozvánky ►</Link>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>;
  }
}

PostPreviewFull.propTypes = {
  slug: PropTypes.any,
  post: PropTypes.shape({
    image: PropTypes.any,
    title: PropTypes.any,
    description: PropTypes.any,
    date: PropTypes.any
  })
};

class PostPreviewHalf extends Component {
  render() {
    const post = this.props.post;

    return <div className="column is-half">
      <Link className="has-text-primary" to={this.props.slug}>
        <div className="card is-shady">
          <div className="card-content">
            <h5 className="title is-5">{post.title}</h5>
          </div>
          <div className="card-image">
            <figure className="image is-2by1">
              <img src={post.image} alt={post.title} className="post-image"/>
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              {post.description}
              <br />
              <Link to={this.props.slug} className="is-pulled-right">Na detail pozvánky ►</Link>
              <br />
            </div>
          </div>
        </div>
      </Link>
    </div>;
  }
}

PostPreviewHalf.propTypes = {
  slug: PropTypes.any,
  post: PropTypes.shape({
    image: PropTypes.any,
    title: PropTypes.any,
    description: PropTypes.any,
    date: PropTypes.any
  })
};

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const { node: firstPost } = posts[0];
    return (
      <Layout>
        <section className="section has-overlay">
          <div className="container is-outlined has-background-white-ter" style={{ padding: "2em 4em" }}>
            <div className="level">
              <p>Vítejte na stránkách Čtvrtkonu - Jihočeské Webové komunity.</p>
            </div>
            <h4 className="title is-4">Příští Čtvrtkon / Pozvánka</h4>
            <div className="columns">
              <PostPreviewFull slug={firstPost.fields.slug} post={firstPost.frontmatter}/>
            </div>
            <h4 className="title is-4">Přednášky z minulých akcí</h4>
            <div className="columns is-multiline">
              {posts
                .filter((_, idx) => idx > 0) // skip first post as its part of full preview
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
          excerpt(pruneLength: 700)
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
