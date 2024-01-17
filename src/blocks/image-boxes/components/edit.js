/**
 * Internal dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import times from "lodash/times";
import React from "react";
import { hexToRgba } from "../../../utils/index.js";
import EditorStyles from "./editor-styles";

/**
 * WordPress dependencies
 */
const { __, sprintf } = wp.i18n;
const { Component, Fragment } = wp.element;
const {
  RichText,
  AlignmentToolbar,
  BlockControls,
  InnerBlocks,
  MediaUpload,
  URLInput,
} = wp.blockEditor;
const { Button, Dashicon, Icon } = wp.components;

import memoize from "memize";
import map from "lodash/map";
import { loadGoogleFont } from "../../../utils/font";

const ALLOWED_MEDIA_TYPES = ["image"];

const getCount = memoize((count) => {
  return times(count, (index) => [
    "responsive-block-editor-addons/image-boxes-block-item",
    {
      placeholder: sprintf(
        /* translators: %d: a digit 1-3 */
        __("Image Box Title %d", "responsive-block-editor-addons"),
        parseInt(index + 1)
      ),
    },
  ]);
});

export default class Edit extends Component {
  constructor() {
    super(...arguments);
  }

  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-image-boxes-style-" + this.props.clientId
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
      "responsive-block-editor-addons-image-boxes-style-" + this.props.clientId
    );
    document.head.appendChild($style);
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        block_id,
        imageboxesBlock,
        count,
        gutter,
        contentAlign,
        itemBackgroundColor,
        itemHoverBackgroundColor,
        titleHeadingTag,
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
        titleFontFamily,
        descriptionFontFamily,
        imageSize,
        showTitle,
        showDescription,
      },
      isSelected,
      setAttributes,
    } = this.props;
    var data_copy = [...imageboxesBlock];

    const getButtonTemplate = memoize((button_block, imageboxesBlock) => {
      return times(button_block, (n) => [
        "responsive-block-editor-addons/image-boxes-block-item",
        imageboxesBlock[n],
      ]);
    });
    const classes = classnames(
      this.props.className, 
      "wp-block-responsive-block-editor-addons-image-boxes-block",
      {
        [`has-text-align-${contentAlign}`]: contentAlign,
      }
    );

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

    const formattingControls = ["core/bold", "core/italic", "core/strikethrough"];

    return [
      // Show the block controls on focus
      <style id={`responsive-block-editor-addons-image-boxes-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>,
      <Inspector key="inspector" {...{ setAttributes, ...this.props }} />,

      <div key={`image-${block_id}`} className={classes}>
        <div key={`image-block-${block_id}`} className={innerClasses}>
          {imageboxesBlock.map((test, index) => (
            <div key={`block-${index}`} className="wp-block-responsive-block-editor-addons-image-boxes-block-item-wrapper">
              <div key={`block-image-${index}`}
                className={classnames(
                  "wp-block-responsive-block-editor-addons-image-boxes-block-item",
                  "editor",
                  `responsive-block-editor-addons-block-image-boxes-${index}`,
                  "responsive-block-editor-addons-block-image-boxes",
                  `block-${block_id}`
                )}
              >
                <div className="responsive-block-editor-addons-add-image"></div>
                {titleFontFamily && loadGoogleFont(titleFontFamily)}
                {descriptionFontFamily && loadGoogleFont(descriptionFontFamily)}
                {showTitle && (<RichText
                  tagName={titleHeadingTag}
                  className="wp-block-responsive-block-editor-addons-image-boxes-block-item__title"
                  value={imageboxesBlock[index]["title"]}
                  placeholder={imageboxesBlock[index]["title"]}
                  onChange={(value) => {
                    var new_content = {
                      title: value,
                      hover_description: data_copy[index]["hover_description"],
                      cta_url: data_copy[index]["cta_url"],
                      img_id: imageboxesBlock[index]["img_id"],
                      img_url: imageboxesBlock[index]["img_url"],
                    };
                    data_copy[index] = new_content;
                    setAttributes({ imageboxesBlock: data_copy });
                  }}
                  allowedFormats={formattingControls}
                  
                />)}
                {showDescription && (<RichText
                  tagName="p"
                  className="wp-block-responsive-block-editor-addons-image-boxes-block-item__description"
                  value={imageboxesBlock[index]["hover_description"]}
                  placeholder={imageboxesBlock[index]["hover_description"]}
                  onChange={(value) => {
                    var new_content = {
                      hover_description: value,
                      title: data_copy[index]["title"],
                      cta_url: data_copy[index]["cta_url"],
                      img_id: imageboxesBlock[index]["img_id"],
                      img_url: imageboxesBlock[index]["img_url"],
                    };
                    data_copy[index] = new_content;
                    setAttributes({ imageboxesBlock: data_copy });
                  }}
                  allowedFormats={formattingControls}
                  
                />)}
                {hasArrow && <span className="imagebox-arrow">&#x21AA;</span>}
                {isSelected && (
                  <form
                    key="form-link"
                    onSubmit={(event) => event.preventDefault()}
                  >
                    <Dashicon icon={"admin-links"} />
                    <URLInput
                      className="button-url"
                      value={data_copy[index]["cta_url"]}
                      onChange={(value) => {
                        var new_content = {
                          cta_url: value,
                          title: data_copy[index]["title"],
                          hover_description:
                            data_copy[index]["hover_description"],

                          img_id: imageboxesBlock[index]["img_id"],
                          img_url: imageboxesBlock[index]["img_url"],
                        };
                        data_copy[index] = new_content;
                        setAttributes({ imageboxesBlock: data_copy });
                      }}
                      __nextHasNoMarginBottom={true}
                    />
                    <Button
                      label={__("Apply", "responsive-block-editor-addons")}
                      type="submit"
                    >
                      <Icon icon="editor-break" />
                    </Button>
                  </form>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>,
    ];
  }
}
