import React, {Component} from "react";
import {Link} from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import {FaCaretRight} from "react-icons/fa";
import {mapSection} from "../utils";

export class PostPreviewFull extends Component {
    render() {
        const post = this.props.post;

        return <div className="column is-full">
            <div className="card is-shady">
                <div className="card-content main-post-content">
                    <div className="content columns">
                        <div className="column is-7" style={{paddingBottom: "0", paddingTop: "0"}}>
                            <div className="image is-marginless is-paddingless">
                                <Img fluid={post.image.childImageSharp.fluid} alt={post.title} className="is-2by1"/>
                            </div>
                        </div>
                        <div className="column text-column is-5">
                            <Link className="has-text-primary" to={this.props.slug}>
                                <h3 className="title is-3">{mapSection(post.section)}{post.title}</h3>
                            </Link>
                            <h6 className="subtitle is-6">
                                {post.place} | {post.time}<br/>
                                {!!post.fbEventLink ?
                                    <a href={post.fbEventLink} rel="noopener noreferrer" target="_blank">Facebook event</a>
                                    : ''
                                }
                                {!!post.ticketUrl ?
                                    <span> | <a href={post.ticketUrl} rel="noopener noreferrer" target="_blank">Registrace</a></span>
                                    : ''
                                }
                            </h6>
                            <p className="content">
                                {post.description}
                            </p>
                            <br/>
                            <p className="has-text-right btn-holder">
                                <Link to={this.props.slug} className="button is-outlined is-link">Více informací <FaCaretRight/></Link>
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
        section: PropTypes.any,
        description: PropTypes.any,
        time: PropTypes.any,
        place: PropTypes.any,
        fbEventLink: PropTypes.any,
        ticketUrl: PropTypes.any
    })
};

export class PostPreviewHalf extends Component {
    render() {
        const post = this.props.post;

        return <div className="column is-half post-preview-half">
            <div className="card is-shady">
                <div className="card-content card-header">
                    <Link className="has-text-primary" to={this.props.slug}>
                        <h5 className="title is-5">{mapSection(post.section)}{post.title}</h5>
                    </Link>
                </div>
                <div className="card-image">
                    <div className="image">
                        <Img fluid={post.image.childImageSharp.fluid} alt={post.title} className="post-image"/>
                    </div>
                </div>
                <div className="card-content">
                    <div className="content">
                        {post.description}
                    </div>
                </div>
                <div className="card-content has-text-right no-border">
                    <Link to={this.props.slug} className="button is-outlined is-link">Více informací <FaCaretRight/></Link>
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
        section: PropTypes.any,
        description: PropTypes.any,
    })
};
