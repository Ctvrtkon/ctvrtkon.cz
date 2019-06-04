import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Helmet from "react-helmet";
import Content, { HTMLContent } from "../components/Content";

export const CompetitionPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;
  return (
    <div>
      <Helmet title={`O Projektu | Čtvrtkon.cz`}/>
      <h2 className="title is-h2">{title}</h2>
      <PageContent className="content" content={content}/>
    </div>
  );
};

CompetitionPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  team: PropTypes.array,
  contentComponent: PropTypes.func
};

const CompetitionPage = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <CompetitionPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

CompetitionPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default CompetitionPage;

export const competitionPageQuery = graphql`
  query CompetitionPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
