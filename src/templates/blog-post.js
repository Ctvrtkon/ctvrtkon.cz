import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const BlogPostTemplate = ({
                                   content,
                                   contentComponent,
                                   title,
                                   description,
                                   image,
                                   date,
                                   helmet
                                 }) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="card is-shady">
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <h2 className="title">{title}</h2>
                <p className="subtitle">{description}</p>
              </div>
              <div className="media-right">
                <figure className="image">
                  <img src={image} alt={title} className="post-image"/>
                </figure>
              </div>
            </div>
            <div className="content">
              <PostContent content={content}/>
              <br/>
              <p className="has-text-right is-size-7">
                <time>{date}</time>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  date: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet)
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        helmet={<Helmet title={`${post.frontmatter.title} | Blog`}/>}
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
        date={post.frontmatter.date}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        image
        date(formatString: "DD.MM.YYYY")
      }
    }
  }
`;
