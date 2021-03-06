import React from "react";
import PropTypes from "prop-types";
import { AboutPageTemplate } from "../../templates/about-page";

const AboutPagePreview = ({ entry, widgetFor }) => {
  return <AboutPageTemplate
    title={entry.getIn(["data", "title"])}
    team={entry.getIn(["data", "people"]).toArray().map((i) => {
      // emulate childImageSharp from graphQL
      let p = i.toJS();
      const uri = p.image;
      p.image = {childImageSharp: {fixed: uri}};
      return p;
    })}
    content={widgetFor("body")}
  />
};

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func,
};

export default AboutPagePreview;
