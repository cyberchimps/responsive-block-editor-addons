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
        twEnabled,
        twView,     
        twStyle,       
        twUrlMode,
        twCustomUrl,
        twLabel,
        twColor,
        twBg,
        twHColor,
        twHBg,
        twFontFamily,
        twTextTransform,
        twTextDecoration,
        twIconTextSpacing,
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
            {showQuote && <span className="rbea-dynamic-icon" data-icon={icon} aria-hidden="true"></span>}
          </div>

          <RichText.Content
            tagName="span"
            className="responsive-block-editor-addons-block-blockquote-text"
            value={quoteContent}
          />
          { twEnabled && (
            <div className="rbea-bq__tweet-wrap">
              <a
                className={classnames(
                  "rbea-bq__tweet",
                  `rbea-bq__tweet--${twStyle || "classic"}`
                )}
                href="#"
                data-url-mode={twUrlMode || "current"}
                data-custom-url={twCustomUrl || ""}
                data-view={twView || "both"}
                data-label={twLabel}
                data-hover-color={twHColor || ""}
                data-hover-bg={twHBg || ""}
                target="_blank"
                rel="noopener"
              >
                { (twView !== "text") && (
                  // Custom X icon since dashicons-x doesn't exist
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                )}
                { (twView !== "icon") && (
                  <span className="rbea-bq__label">{ twLabel !== undefined ? twLabel : "Post" }</span>
                )}
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }
}
