import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Helmet from "react-helmet";
import Content, { HTMLContent } from "../components/Content";
import { TeamMember } from "../components/TeamMember";

export const AboutPageTemplate = ({ title, content, team, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <Helmet title={`O Projektu | Čtvrtkon.cz`}/>
      <h2 className="title is-h2">{title}</h2>
      <PageContent className="content" content={content}/>
      <h3 className="title is-3">Team:</h3>
      <div className="columns is-multiline">
        {team.map((m) => (<div className="column is-4 is-marginless"><TeamMember key={m.name} m={m}/></div>))}
      </div>
    </div>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  team: PropTypes.array,
  contentComponent: PropTypes.func
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        team={post.frontmatter.people}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        people {
          name
          link
          image
          department
          description
        }
      }
    }
  }
`;
