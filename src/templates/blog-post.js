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
                                   time,
                                   place,
                                   fbEventLink
                                 }) => {
  const PostContent = contentComponent || Content;
  const displayInfoBox = [time, place, fbEventLink].some(v => !!v);
  return (
    <div className="post-detail">
      <Helmet title={`${title} | Čtvrtkon.cz`}
              meta={[
                { name: "description", content: description }
              ]}
      />
      <h2 className="title">{title}</h2>
      <img src={image} alt={title} className="post-image is-pulled-right"/>
      {displayInfoBox ?
        <ul className="is-unstyled info-box">
          {!!time ? <li><strong>Kdy: </strong> {time}</li> : ""}
          {!!place ? <li><strong>Kde: </strong> {place}</li> : ""}
          {!!fbEventLink ?
            <li><strong>Událost: </strong><a href={fbEventLink} rel="noopener noreferrer" target="_blank">odkaz</a></li> : ""}
        </ul> : ""}
      <PostContent content={content} className="has-text-justified"/>
    </div>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  time: PropTypes.string,
  place: PropTypes.string,
  fbEventLink: PropTypes.string
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
        time={post.frontmatter.time}
        place={post.frontmatter.place}
        fbEventLink={post.frontmatter.fbEventLink}
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
        time
        fbEventLink
        place
      }
    }
  }
`;
