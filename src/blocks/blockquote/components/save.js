/**
 * Internal dependencies
 */
import classnames from "classnames";
import renderSVG from "../renderQuoteIcon";

/**
 * WordPress dependencies
 */
const { Component } = wp.element;
const { RichText } = wp.blockEditor;
const { Dashicon } = wp.components;

export default class Save extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      attributes: {
        block_id,
        quoteContent,
        quoteFontSize,
        quoteAlign,
        showQuote,
        backgroundType,
        backgroundImage,
        backgroundVideo,
        icon,
      },
      setAttributes,
    } = this.props;

    return (
      <div
        className={classnames(
          this.props.className,
          quoteAlign,
          "responsive-block-editor-addons-font-size-" + quoteFontSize,
          "responsive-block-editor-addons-block-blockquote",
          `block-${block_id}`
        )}
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

          <RichText.Content
            tagName="span"
            className="responsive-block-editor-addons-block-blockquote-text"
            value={quoteContent}
          />
        </div>
      </div>
    );
  }
}
