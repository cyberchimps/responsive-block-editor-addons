/**
 * Internal dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import EditorStyles from "./editor-styles";

import { Spinner } from "@wordpress/components";
import AutoRegisterCSSBlock from "../../../extensions/custom-css/AutoRegisterCSSBlock";

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
  const { token } = this.props.attributes;

  if (!token) return;

  // Step 1: Get Instagram Business ID
  fetch(`https://graph.facebook.com/v19.0/me/accounts?fields=instagram_business_account&access_token=${token}`)
    .then((res) => res.json())
    .then((json) => {
      if (json.error || !json.data || !json.data.length || !json.data[0].instagram_business_account) {
        console.log("Error fetching business account", json.error);
        this.setState({
          responseCode: 500,
          loading: false,
          errorMessage: "Instagram Business ID not found.",
        });
        return;
      }

      const businessId = json.data[0].instagram_business_account.id;

      // Step 2: Fetch Media
      return fetch(`https://graph.facebook.com/v19.0/${businessId}/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${token}`);
    })
    .then((res) => res?.json?.())
    .then((mediaJson) => {
      if (!mediaJson) return;

      if (mediaJson.error) {
        console.log("Media fetch error", mediaJson.error);
        this.setState({
          responseCode: 500,
          loading: false,
          errorMessage: mediaJson.error.message,
        });
        return;
      }

      if (mediaJson.data && mediaJson.data.length > 0) {
        console.log("Fetched IG media", mediaJson.data);
        this.props.setAttributes({ instaPosts: mediaJson.data });
        this.setState({
          responseCode: 200,
          loading: false,
          token: token,
          errorMessage: "",
        });
      } else {
        this.props.setAttributes({ instaPosts: [] });
        this.setState({
          responseCode: 500,
          loading: false,
          errorMessage: "No media found.",
        });
      }
    })
    .catch((err) => {
      console.log("Fetch error", err);
      this.setState({
        responseCode: 500,
        loading: false,
        errorMessage: "Something went wrong while fetching Instagram feed.",
      });
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
              href="https://cyberchimps.com/docs/responsive-blocks/blocks/instagram-feed/"
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
      <AutoRegisterCSSBlock key="auto-register-css" {...this.props} />,
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
