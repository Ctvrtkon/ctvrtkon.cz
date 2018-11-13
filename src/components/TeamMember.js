import React, { Component } from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { v4 } from "uuid";

export class TeamMember extends Component {
  render() {
    const { m } = this.props;
    return <div className="card team">
      <div className="card-content pb-0">
        <div className="media">
          <div className="media-left">
            <figure className="image is-square is-96x96">
              <Img fixed={m.image.childImageSharp.fixed} style={{position: "initial"}} alt={m.name} className="is-rounded"/>
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-5">{m.name}</p>
            <p className="subtitle is-7">
              <strong className="is-uppercase">{m.department}</strong><br />
              <a href={m.link} rel="noopener noreferrer" target="_blank">{m.link.replace(/(^\w+:|^)\/\//, '')}</a>
            </p>
          </div>
        </div>
      </div>
      <div className="card-content">
          <div className="tags">{m.description.split(' ').map(tag => <span key={v4()} className="tag is-primary">{tag}</span> )}</div>
      </div>
    </div>;
  }

}

TeamMember.propTypes = {
  m: PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string,
    image: PropTypes.any,
    department: PropTypes.string,
    description: PropTypes.string
  })
};