/**
 * Internal dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import EditorStyles from "./editor-styles";

import { Spinner } from "@wordpress/components";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

export default class Edit extends Component {
  constructor() {
    super(...arguments);
    this.fetchPhotos = this.fetchPhotos.bind(this);
    this.state = {
      token: "",
      loading: true,
      responseCode: 200,
      errorMessage: "",
    };
  }

  fetchPhotos() {
    if (!this.props.attributes.token) {
      return false;
    }

    return fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${this.props.attributes.token}`
    )
      .then((res) => res.json())
      .then((json) => {
        if (json.error) {
          this.setState({ ...this.state, errorMessage: json.error.message });
        }
        if (json.data) {
          this.setState({ ...this.state, responseCode: 200 });
          this.setState({ ...this.state, loading: false });

          if (json.data.length > 0) {
            this.props.setAttributes({ instaPosts: json.data });
            this.setState({
              ...this.state,
              token: this.props.attributes.token,
            });
          } else {
            this.props.setAttributes({ instaPosts: [] });
            this.setState({ ...this.state, responseCode: 500 });
          }
        }
      })
      .catch((error)=> {
        console.log('Invalid token');
        this.setState({ ...this.state, responseCode: 500 });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-instagram-style-" + this.props.clientId
    );

    if (null !== element && undefined !== element) {
      element.innerHTML = EditorStyles(this.props);
    }

    if( prevProps.attributes.token !== this.props.attributes.token) {
      this.fetchPhotos();
    }

    if (prevState.token !== this.state.token) {
      this.fetchPhotos();
    }
  }

  componentDidMount() {
    // Assigning block_id in the attribute.
    this.props.setAttributes({ block_id: this.props.clientId });

    this.props.setAttributes({ classMigrate: true });

    // Pushing Style tag for this block css.
    const $style = document.createElement("style");
    $style.setAttribute(
      "id",
      "responsive-block-editor-addons-instagram-style-" + this.props.clientId
    );
    document.head.appendChild($style);

    this.fetchPhotos();
  }

  render() {
    const {
      attributes: {
        block_id,
        token,
        numberOfItems,
        instaPosts,
        hasEqualImages,
        borderRadius,
      },
      setAttributes,
    } = this.props;

    let instagramContent;

    if (token && this.state.responseCode === 200) {
      if (this.state.loading) {
        instagramContent = (
          <p>
            <Spinner />
            {__("Fetching feed, Please wait", "responsive-block-editor-addons")}
          </p>
        );
      } else {
        instagramContent = (
          <div className="responsive-block-editor-addons-instagram-posts-container responsive-block-editor-addons-grid">
            {instaPosts &&
              instaPosts.slice(0, numberOfItems).map((img) => {
                return (
                  <div
                    className={
                      "responsive-block-editor-addons-image-wrapper has-equal-images"
                    }
                    key={img.id}
                  >
                    <img
                      className="responsive-block-editor-addons-instagram-image"
                      src={ 'VIDEO' === img.media_type ? img.thumbnail_url : img.media_url }
                      alt={img.caption ? img.caption : ""}
                    />
                  </div>
                );
              })}
          </div>
        );
      }
    } else if (this.state.responseCode !== 200) {
      instagramContent = (
        <div>Something went wrong {this.state.errorMessage} </div>
      );
    } else {
      instagramContent = (
        <div className="responsive-block-editor-addons-intro-page">
          <p>
            <strong>Instagram Block</strong>
          </p>
          <p>
            {" "}
            To get started please add an Instagram Access Token into the 'Access
            Token' setting. You can follow these
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://developers.facebook.com/docs/instagram-basic-display-api"
            >
              {" steps "}
            </a>
            to generate token.
          </p>
        </div>
      );
    }

    return [
      <style id={`responsive-block-editor-addons-instagram-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>,
      <Inspector key={"inspector"} {...{ setAttributes, ...this.props }} />,
      <div
        key={"instawrap"}
        className={classnames(
          this.props.className,
          "responsive-block-editor-addons-block-instagram",
          `block-${block_id}`
        )}
      >
        <div className="responsive-block-editor-addons-instagram-wrapper">
          {instagramContent}
        </div>
      </div>,
    ];
  }
}
