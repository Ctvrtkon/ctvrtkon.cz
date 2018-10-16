import React, { Component } from "react";
import PropTypes from "prop-types";

export class TeamMember extends Component {
  render() {
    const { m } = this.props;
    return <div className="card team">
      <div className="card-content pb-0">
        <div className="media">
          <div className="media-left">
            <figure className="image is-square is-96x96">
              <img className="is-rounded" src={m.image ? m.image : "https://via.placeholder.com/256x256"} alt={m.name}/>
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-5">{m.name}</p>
            <p className="subtitle is-7">
              <strong className="is-uppercase">{m.department}</strong><br />
              <a href={m.link} rel="noopener noreferrer" target="_blank">{m.link}</a>
            </p>
          </div>
        </div>
      </div>
      <div className="card-content">
        <p>{m.description.split(' ').map(tag => <span><span className="tag is-primary">{tag}</span>&nbsp;</span> )}</p>
      </div>
    </div>;
  }

}

TeamMember.propTypes = {
  m: PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string,
    image: PropTypes.string,
    department: PropTypes.string,
    description: PropTypes.string
  })
};