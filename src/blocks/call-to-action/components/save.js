/**
 * Internal dependencies
 */
import classnames from "classnames";
import CallToAction from "./cta";
import ResponsiveBlocksIcon from "../../../ResponsiveBlocksIcon.json";
import renderSVG from "../../../renderIcon";
import React from "react";

/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;
const { RichText, InnerBlocks } = wp.blockEditor;

let svg_icons = Object.keys(ResponsiveBlocksIcon);

export default class Save extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      block_id,
      buttonText,
      buttonUrl,
      buttonSize,
      buttonShape,
      buttonTarget,
      ctaTitle,
      ctaText,
      ctaTitleFontSize,
      ctaTextFontSize,
      backgroundImage,
      dimRatio,
      icon,
      iconPosition,
      resctaType,
      ctalinkText,
      backgroundType,
      boxShadowPosition,
      opacity,
    } = this.props.attributes;
    const dimRatioToClass = (ratio) => {
      return 0 === ratio || 50 === ratio
        ? null
        : "has-background-dim-" + 10 * Math.round(ratio / 10);
    };

    var boxShadowPositionCSS = boxShadowPosition;

    if ("outset" === boxShadowPosition) {
      boxShadowPositionCSS = "";
    }

    // Save the block markup for the front end
    return [
      <CallToAction {...this.props}>
        <div
          className={classnames(
            "responsive-block-editor-addons-block-call-to-action",
            `block-${block_id}`
          )}
        >
          {"image" == backgroundType && backgroundImage && !!backgroundImage.length && (
            <div className="responsive-block-editor-addons-cta-image-wrap">
              <img
                className={classnames(
                  "responsive-block-editor-addons-cta-image",
                  dimRatioToClass(dimRatio),
                  {
                    "has-background-dim": 0 !== dimRatio,
                  }
                )}
              />
            </div>
          )}

          <div className="responsive-block-editor-addons-cta-content">
            {ctaTitle && (
              <RichText.Content
                tagName="h2"
                className={classnames(
                  "responsive-block-editor-addons-cta-title",
                  "responsive-block-editor-addons-font-size-" + ctaTitleFontSize
                )}
                value={ctaTitle}
              />
            )}
            {ctaText && (
              <RichText.Content
                tagName="div"
                className={classnames(
                  "responsive-block-editor-addons-cta-text",
                  "responsive-block-editor-addons-font-size-" + ctaTextFontSize
                )}
                value={ctaText}
              />
            )}
          </div>

          {resctaType === "text" && (
            <a
              href={buttonUrl}
              target={buttonTarget ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className={classnames(
                "responsive-block-editor-addons-cta-link-text"
              )}
            >
              <RichText.Content value={ctalinkText} />
            </a>
          )}

          {buttonText && resctaType === "button" && (
            <div
              className={classnames(
                "responsive-block-editor-addons-cta-button-wrapper",
                buttonShape,
                buttonSize
              )}
            >
              {"" !== icon && iconPosition == "before" && (
                <span
                  className={classnames(
                    `responsive-block-editor-addons-cta-button__icon`,
                    `responsive-block-editor-addons-cta-button__icon-position-${iconPosition}`
                  )}
                >
                  {renderSVG(icon)}
                </span>
              )}
              <a
                href={buttonUrl}
                target={buttonTarget ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className={classnames(
                  "responsive-block-editor-addons-cta-button",
                  buttonSize
                )}
              >
                <RichText.Content value={buttonText} />
              </a>
              {"" !== icon && iconPosition == "after" && (
                <span
                  className={classnames(
                    `responsive-block-editor-addons-cta-button__icon`,
                    `responsive-block-editor-addons-cta-button__icon-position-${iconPosition}`
                  )}
                >
                  {renderSVG(icon)}
                </span>
              )}
            </div>
          )}
        </div>
      </CallToAction>,
    ];
  }
}
