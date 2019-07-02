import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import {graphql} from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import Content, {HTMLContent} from "../components/Content";
import {mapSection} from "../utils";

export const BlogPostTemplate = ({
                                     content,
                                     contentComponent,
                                     title,
                                     description,
                                     image,
                                     time,
                                     place,
                                     section,
                                     fbEventLink
                                 }) => {
    const PostContent = contentComponent || Content;
    const displayInfoBox = [time, place, fbEventLink].some(v => !!v);
    return (
        <div className="post-detail">
            <Helmet title={`${title} | Čtvrtkon.cz`}
                    meta={[
                        {name: "description", content: description},
                        {property: "og:title", content: title},
                        {property: "og:description", content: description},
                        {property: "og:image", content: image}
                    ]}
            />
            <h2 className="title is-2">{mapSection(section)}{title}</h2>
            <div className="columns">
                <div className="column is-two-fifths is-full-tablet is-full-mobile">
                    {displayInfoBox ?
                        <ul className="is-unstyled info-box">
                            {!!time ? <li><strong>Kdy: </strong> {time}</li> : ""}
                            {!!place ? <li><strong>Kde: </strong> {place}</li> : ""}
                            {!!fbEventLink ?
                                <li><strong>Událost: </strong><a href={fbEventLink} rel="noopener noreferrer" target="_blank">odkaz</a>
                                </li> : ""}
                        </ul> : ""}
                </div>
                {image ?
                    <div className="column is-three-fifths is-full-tablet is-full-mobile">
                        <Img fluid={image} alt={title} className=""/>
                    </div> : ""}
            </div>
            <PostContent content={content} className="is-text-content"/>
        </div>
    );
};

BlogPostTemplate.propTypes = {
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.any,
    section: PropTypes.any,
    time: PropTypes.string,
    place: PropTypes.string,
    fbEventLink: PropTypes.string
};

const BlogPost = ({data}) => {
    const {markdownRemark: post} = data;
    return (
        <Layout>
            <BlogPostTemplate
                content={post.html}
                contentComponent={HTMLContent}
                title={post.frontmatter.title}
                description={post.frontmatter.description}
                image={post.frontmatter.image.childImageSharp.fluid}
                time={post.frontmatter.time}
                place={post.frontmatter.place}
                section={post.frontmatter.section}
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
        image {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        time(formatString: "DD.MM.YYYY HH:mm")
        section
        fbEventLink
        place
      }
    }
  }
`;
