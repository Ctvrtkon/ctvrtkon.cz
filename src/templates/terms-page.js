import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Content, { HTMLContent } from "../components/Content";
import Layout from "../components/Layout";
import Helmet from "react-helmet";

export const TermsPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <Helmet title={`Obchodní podmínky | Čtvrtkon.cz`} />
      <h2 className="title is-h2">{title}</h2>
      <PageContent className="content" content={content} />
    </div>
  );
};

TermsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const TermsPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <TermsPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

TermsPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default TermsPage;

export const termsPageQuery = graphql`
  query TermsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
