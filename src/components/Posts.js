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
            <div className="column">
              <figure className="image is-marginless is-paddingless">
                <img src={post.image} alt={post.title} className="post-image is-2by1"/>
              </figure>
            </div>
            <div className="column">
              <p className="content has-text-justified is-medium">
                {post.description}
              </p>
              <br/>
              <Link to={this.props.slug} className="is-pulled-right">Na detail pozvánky ►</Link>
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

    return <div className="column is-half">
      <div className="card is-shady">
        <div className="card-content">
          <Link className="has-text-primary" to={this.props.slug}>
            <h5 className="title is-5">{post.title}</h5>
          </Link>
        </div>
        <div className="card-image">
          <figure className="image is-2by1">
            <img src={post.image} alt={post.title} className="post-image"/>
          </figure>
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