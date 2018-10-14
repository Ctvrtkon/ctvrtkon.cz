import React, { Component } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

export class PostPreviewFull extends Component {
  render() {
    const post = this.props.post;

    return <div className="column is-full">
      <div className="card is-shady">
        <div className="card-content">
          <Link className="has-text-primary" to={this.props.slug}>
            <h5 className="title is-5">{post.title}</h5>
          </Link>
        </div>
        <div className="card-content main-post-content">
          <div className="content columns">
            <div className="column"  style={{ paddingBottom: "0" }}>
              <div className="image is-marginless is-paddingless">
                <img src={post.image} alt={post.title} className="post-image is-2by1"/>
              </div>
            </div>
            <div className="column">
              <p className="content has-text-justified is-medium">
                {post.description}
              </p>
              <br/>
              <p className="has-text-right">
                <Link to={this.props.slug}>Na detail pozvánky ►</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}

PostPreviewFull.propTypes = {
  slug: PropTypes.any,
  post: PropTypes.shape({
    image: PropTypes.any,
    title: PropTypes.any,
    description: PropTypes.any,
    date: PropTypes.any
  })
};

export class PostPreviewHalf extends Component {
  render() {
    const post = this.props.post;

    return <div className="column is-half post-preview-half">
      <div className="card is-shady">
        <div className="card-content">
          <Link className="has-text-primary" to={this.props.slug}>
            <h5 className="title is-5">{post.title}</h5>
          </Link>
        </div>
        <div className="card-image">
          <div className="image">
            <img src={post.image} alt={post.title} className="post-image"/>
          </div>
        </div>
        <div className="card-content">
          <div className="content">
            {post.description}
          </div>
        </div>
        <div className="card-content has-text-right no-border">
          <Link to={this.props.slug}>Na detail pozvánky ►</Link>
        </div>
      </div>
    </div>;
  }
}

PostPreviewHalf.propTypes = {
  slug: PropTypes.any,
  post: PropTypes.shape({
    image: PropTypes.any,
    title: PropTypes.any,
    description: PropTypes.any,
    date: PropTypes.any
  })
};