/**
 * Internal dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import CallToAction from "./cta";
import ResponsiveBlocksIcon from "../../../ResponsiveBlocksIcon.json";
import renderSVG from "../../../renderIcon";
import React from "react";
import { loadGoogleFont } from "../../../utils/font";
import EditorStyles from "./editor-styles";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const {
  RichText,
  URLInput,
  AlignmentToolbar,
  BlockControls,
  MediaUpload,
  InnerBlocks,
  MediaUploadCheck,
  figure,
  BlockAlignmentToolbar,
} = wp.blockEditor;
const { Button, Dashicon, Icon } = wp.components;

let svg_icons = Object.keys(ResponsiveBlocksIcon);

export default class Edit extends Component {
  constructor() {
    super(...arguments);
  }

  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-call-to-action-style-" +
        this.props.clientId
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
      "responsive-block-editor-addons-call-to-action-style-" +
        this.props.clientId
    );
    document.head.appendChild($style);
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        block_id,
        buttonText,
        buttonUrl,
        buttonAlignment,
        buttonSize,
        buttonShape,
        ctaTitle,
        ctaText,
        ctaTitleFontFamily,
        ctaTitleFontSize,
        ctaTextFontFamily,
        ctaTextFontSize,
        ctaWidth,
        backgroundImage,
        dimRatio,
        icon,
        iconPosition,
        resctaType,
        ctalinkText,
        backgroundType,
        boxShadowPosition,
        opacity,
      },
      isSelected,
      setAttributes,
    } = this.props;

    var boxShadowPositionCSS = boxShadowPosition;
    let imgopacity = opacity / 100;

    if ("outset" === boxShadowPosition) {
      boxShadowPositionCSS = "";
    }


    const onSelectImage = (img) => {
      setAttributes({
        imgID: img.id,
        backgroundImage: img.url,
        imgAlt: img.alt,
      });
    };

    const dimRatioToClass = (ratio) => {
      return 0 === ratio || 50 === ratio
        ? null
        : "has-background-dim-" + 10 * Math.round(ratio / 10);
    };

    if ("outset" === boxShadowPosition) {
      boxShadowPositionCSS = "";
    }

    return [
      <style id={`responsive-block-editor-addons-call-to-action-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>,
      // Show the alignment toolbar on focus
      <BlockControls
        key={
          "responsive-block-editor-addons-cta-block-controls-" +
          this.props.clientId
        }
      >
        <BlockAlignmentToolbar
          value={ctaWidth}
          onChange={(ctaWidth) => setAttributes({ ctaWidth })}
          controls={["center", "wide", "full"]}
        />
        <AlignmentToolbar
          value={buttonAlignment}
          onChange={(value) => {
            setAttributes({ buttonAlignment: value });
          }}
        />
      </BlockControls>,

      // Show the block controls on focus
      <Inspector
        key={
          "responsive-block-editor-addons-cta-inspector-" + this.props.clientId
        }
        {...{ setAttributes, ...this.props }}
      />,

      // Show the button markup in the editor
      <CallToAction
        key={"responsive-block-editor-addons-cta-" + this.props.clientId}
        {...this.props}
      >
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
          {ctaTitleFontFamily && loadGoogleFont(ctaTitleFontFamily)}
          {ctaTextFontFamily && loadGoogleFont(ctaTextFontFamily)}
          <div className="responsive-block-editor-addons-cta-content">
            <RichText
              tagName="h2"
              placeholder={__(
                "Call-To-Action Title",
                "responsive-block-editor-addons"
              )}
              
              value={ctaTitle}
              className={classnames(
                "responsive-block-editor-addons-cta-title",
                "responsive-block-editor-addons-font-size-" + ctaTitleFontSize
              )}
              onChange={(value) => setAttributes({ ctaTitle: value })}
            />
            <RichText
              tagName="div"
              placeholder={__(
                "Call To Action Text",
                "responsive-block-editor-addons"
              )}
              
              value={ctaText}
              className={classnames(
                "responsive-block-editor-addons-cta-text",
                "responsive-block-editor-addons-font-size-" + ctaTextFontSize
              )}
              onChange={(value) => setAttributes({ ctaText: value })}
            />
          </div>
          {resctaType === "text" && (
            <RichText
              tagName="div"
              placeholder={__("CTA text...", "responsive-block-editor-addons")}
              value={ctalinkText}
              allowedFormats={[]}
              className={classnames(
                "responsive-block-editor-addons-cta-link-text"
              )}
              onChange={(value) => setAttributes({ ctalinkText: value })}
            />
          )}
          {resctaType === "button" && (
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
              <RichText
                tagName="a"
                placeholder={__(
                  "Button text...",
                  "responsive-block-editor-addons"
                )}
                value={buttonText}
                allowedFormats={[]}
                className={classnames(
                  "responsive-block-editor-addons-cta-button"
                )}
                onChange={(value) => setAttributes({ buttonText: value })}
              />
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
        {isSelected && (
          <form
            key="form-link"
            className={`blocks-button__inline-link responsive-block-editor-addons-cta-button-${buttonAlignment}`}
            onSubmit={(event) => event.preventDefault()}
            style={{
              textAlign: buttonAlignment,
            }}
          >
            <Dashicon icon={"admin-links"} />
            <URLInput
              className="button-url"
              value={buttonUrl}
              onChange={(value) => setAttributes({ buttonUrl: value })}
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
      </CallToAction>,
    ];
  }
}
