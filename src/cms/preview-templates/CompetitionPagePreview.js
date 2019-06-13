import React from "react";
import PropTypes from "prop-types";
import {CompetitionPageTemplate} from "../../templates/competition-2019";



const CompetitionPagePreview = ({ entry, widgetFor }) => (
  <CompetitionPageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

CompetitionPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default CompetitionPagePreview;
