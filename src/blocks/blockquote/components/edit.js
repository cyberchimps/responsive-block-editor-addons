/**
 * Internal dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import renderSVG from "../renderQuoteIcon";
import { loadGoogleFont } from "../../../utils/font";
import EditorStyles from "./editor-styles";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { RichText, AlignmentToolbar, BlockControls } = wp.blockEditor;
const { Dashicon } = wp.components;

export default class Edit extends Component {
  constructor() {
    super(...arguments);
  }

  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-blockquote-style-" + this.props.clientId
    );

    if (null !== element && undefined !== element) {
      element.innerHTML = EditorStyles(this.props);
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
      "responsive-block-editor-addons-blockquote-style-" + this.props.clientId
    );
    document.head.appendChild($style);
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        block_id,
        quoteContent,
        quoteFontFamily,
        quoteFontSize,
        quoteAlign,
        showQuote,
        backgroundType,
        backgroundImage,
        backgroundVideo,
        icon,
        twEnabled,
        twView, 
        twStyle,
        twUrlMode,
        twCustomUrl,
        twLabel,
        twFontFamily,
      },
      setAttributes,
    } = this.props;

    const previewHref =
      twUrlMode === "custom" && twCustomUrl
        ? twCustomUrl
        : (typeof window !== "undefined" ? window.location.href : "#");

    const showIcon  = (twView || "both") !== "text";
    const showLabel = (twView || "both") !== "icon";

    const tweetBtnClasses = classnames(
      "rbea-bq__tweet",
      `rbea-bq__tweet--${twStyle || "classic"}`
    );


    return [
      // Show the alignment toolbar on focus
      <style id={`responsive-block-editor-addons-blockquote-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>,
      <BlockControls key="controls">
        <AlignmentToolbar
          value={quoteAlign}
          onChange={(value) => setAttributes({ quoteAlign: value })}
        />
      </BlockControls>,

      // Show the block controls on focus
      <Inspector key={`inspector-${block_id}`} {...{ setAttributes, ...this.props }} />,

      // Show the block markup in the editor
      <div
        className={classnames(
          this.props.className,
          quoteAlign,
          "responsive-block-editor-addons-font-size-" + quoteFontSize,
          "responsive-block-editor-addons-block-blockquote",
          `block-${block_id}`
        )}
        key={`${block_id}`}
      >
        {backgroundType == "image" && (
          <div className="responsive-block-editor-addons-section-background-image-wrap">
            {backgroundImage && (
              <img
                className={classnames(
                  "responsive-block-editor-addons-section-background-image"
                )}
                src={backgroundImage}
              />
            )}
          </div>
        )}
        {"video" == backgroundType && (
          <div className="responsive-block-editor-addons-section__video-wrap">
            {backgroundVideo && (
              <video autoplay loop muted playsinline>
                <source src={backgroundVideo.url} type="video/mp4" />
              </video>
            )}
          </div>
        )}
        <div className={"responsive-block-editor-addons-block-blockquote-item"}>
          <div className="responsive-block-editor-addons-block-blockquote-quote">
            {showQuote && renderSVG(icon)}
          </div>
          {quoteFontFamily && loadGoogleFont(quoteFontFamily)}
          {twFontFamily && loadGoogleFont(twFontFamily)}
          <RichText
            tagName="span"
            placeholder={__(
              "Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. ",
              "responsive-block-editor-addons"
            )}
            value={quoteContent}
            className={classnames(
              "responsive-block-editor-addons-block-blockquote-text"
            )}
            onChange={(value) => setAttributes({ quoteContent: value })}
          />
          {twEnabled && (
            <div className="rbea-bq__tweet-wrap">
              <a
                className={tweetBtnClasses}
                href={previewHref}
                target="_blank"
                rel="noopener"
                onClick={(e) => e.preventDefault()} // editor preview only
              >
                {showIcon && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                )}
                                  {showLabel && <span className="rbea-bq__label">{twLabel}</span>}
              </a>
            </div>
          )}

        </div>
      </div>,
    ];
  }
}
