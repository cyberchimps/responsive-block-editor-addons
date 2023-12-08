/**
 * Internal dependencies
 */
import classnames from "classnames";
import map from "lodash/map";
import React from "react";
import { hexToRgba } from "../../../utils/index.js";

/**
 * WordPress dependencies
 */
const { Component } = wp.element;
const { InnerBlocks, RichText } = wp.blockEditor;

export default class Save extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      block_id,
      counterId,
      imageboxesBlock,
      contentAlign,
      count,
      itemBackgroundColor,
      itemHoverBackgroundColor,
      titleHeadingTag,
      gutter,
      hasArrow,
      opacity,
      boxShadowPosition,
      secondaryBackgroundColor,
      hoverSecondaryBackgroundColor,
      gradientDegree,
      bgGradient,
      hoverGradientDegree,
      hoverBgGradient,
      hoverOpacity,
      imageSize,
      showTitle,
      showDescription,
    } = this.props.attributes;

    const classes = classnames(
      this.props.className,
    {
      [`has-text-align-${contentAlign}`]: contentAlign,
    });

    const innerClasses = classnames(
      "wp-block-responsive-block-editor-addons-image-boxes-block__inner",
      {
        "has-columns": count > 1,
        [`has-${count}-columns`]: count,
        "has-responsive-columns": count > 1,
        [`has-${gutter}-gutter`]: gutter,
      }
    );

    let imgopacity = opacity / 100;

    let hoverImgopacity = hoverOpacity / 100;

    var tempsecondaryBackgroundColor = bgGradient
      ? secondaryBackgroundColor
      : itemBackgroundColor;
    var tempHoverSecondaryBackgroundColor = hoverBgGradient
      ? hoverSecondaryBackgroundColor
      : itemHoverBackgroundColor;

    var hoverGradient =
      "linear-gradient(" +
      hoverGradientDegree +
      "deg," +
      hexToRgba(itemHoverBackgroundColor || "#ffffff", hoverImgopacity || 0) +
      "," +
      hexToRgba(
        tempHoverSecondaryBackgroundColor || "#ffffff",
        hoverImgopacity || 0
      ) +
      ")";
    var boxShadowPositionCSS = boxShadowPosition;

    if ("outset" === boxShadowPosition) {
      boxShadowPositionCSS = "";
    }

    return [
      <div className={classes}>
        <div key={`block-${block_id}`} className={innerClasses}>
          {imageboxesBlock.map((test, index) => (
            <a key={`block-image-href-${block_id}`} href={imageboxesBlock[index]["cta_url"]}>
              <div key={`block-image-${block_id}`}
                className={classnames(
                  "wp-block-responsive-block-editor-addons-image-boxes-block-item",
                  `responsive-block-editor-addons-block-image-boxes-${index}`,
                  "responsive-block-editor-addons-block-image-boxes",
                  `block-${block_id}`
                )}
              >
                <div className="responsive-block-editor-addons-add-image"></div>
                {showTitle && (<RichText.Content
                  tagName={titleHeadingTag}
                  className="wp-block-responsive-block-editor-addons-image-boxes-block-item__title"
                  value={imageboxesBlock[index]["title"]}
                />)}
                {showDescription && (<RichText.Content
                  tagName="p"
                  className="wp-block-responsive-block-editor-addons-image-boxes-block-item__description"
                  value={imageboxesBlock[index]["hover_description"]}
                />)}
                {hasArrow && <span className="imagebox-arrow">&#x21AA;</span>}
              </div>
            </a>
          ))}
        </div>
      </div>,
    ];
  }
}
