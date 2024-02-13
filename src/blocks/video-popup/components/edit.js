/**
 * External dependencies
 */
import classnames from "classnames";
import React from "react";
import EditorStyles from "./editor-styles";

/**
 * Internal dependencies
 */
import Inspector from "./inspector";
import { createVideoBackground, hasBackgroundOverlay } from "../util/index.js";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
import { applyFilters, addFilter } from "@wordpress/hooks";
const { Component, Fragment } = wp.element;
const { PanelBody, SelectControl, TextControl } = wp.components;
const { RichText } = wp.blockEditor;

const DivBackground = (props) => {
  const {
    blockTag: BlockTag,
    className,
    backgroundAttrName,
    blockProps,
    showBackground,
    showVideoBackground,
    ...propsToPass
  } = props;
  const divClasses = classnames([className], {
    "responsive-block-editor-addons--has-background-overlay":
      showBackground &&
      hasBackgroundOverlay(backgroundAttrName, blockProps.attributes),
  });

  return (
    <BlockTag className={divClasses} {...propsToPass}>
      {props.children}
      {showBackground &&
        showVideoBackground &&
        createVideoBackground(backgroundAttrName, blockProps)}
    </BlockTag>
  );
};

DivBackground.defaultProps = {
  className: "",
  backgroundAttrName: "%s",
  blockProps: {},
  showBackground: true,
  showVideoBackground: true,
  blockTag: "div",
};

export default class Edit extends Component {
  constructor() {
    super(...arguments);
  }

  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-video-popup-style-" + this.props.clientId
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
      "responsive-block-editor-addons-video-popup-style-" + this.props.clientId
    );
    document.head.appendChild($style);
  }

  render() {
    const { className } = this.props;

    const {
      attributes: {
        block_id,
        shadow = "",
        playButtonType,
        opacity,
        butopacity,
        boxShadowPosition,
        align,
      },
      setAttributes,
    } = this.props;


    var boxShadowPositionCSS = boxShadowPosition;

    if ("outset" === boxShadowPosition) {
      boxShadowPositionCSS = "";
    }

    const mainClasses = classnames(
      [className, "responsive-block-editor-addons-video-popup--v3"],
      applyFilters(
        "responsive-block-editor-addons.video-popup.mainclasses",
        {},
        this.props
      )
    );

    const boxClasses = classnames(
      ["responsive-block-editor-addons-video-popup__wrapper"],
      applyFilters(
        "responsive-block-editor-addons.video-popup.boxclasses",
        {
          [`responsive-block-editor-addons--shadow-${shadow}`]: shadow !== "",
        },
        this.props
      )
    );

    let imgopacity = opacity / 100;

    let playopacity = butopacity / 100;

    return [
      <style id={`responsive-block-editor-addons-video-popup-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>,
      <Fragment key={`video-popup-fragment-${block_id}`} >
        <Inspector key="inspector" {...{ setAttributes, ...this.props }} />

        <div
        key={`video-popup-${block_id}`}
          className={classnames(
            className,
            "responsive-block-editor-addons-block-video-popup",
            `block-${block_id}`,
            "responsive-block-editor-addons-video-popup",
            `align${align}`
          )}
        >
          <DivBackground
            className="responsive-block-editor-addons-video-popup__wrapper"
            backgroundAttrName="preview%s"
            blockProps={this.props}
          >
            <span className="responsive-block-editor-addons-video-popup__play-button">
              {playButtonType === "normal" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 256 320"
                >
                  <path d="M0 0v320l256-160L0 0z" />
                </svg>
              )}
              {playButtonType === "circle" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 40 40"
                >
                  <path d="M16 29l12-9-12-9v18zm4-29C8.95 0 0 8.95 0 20s8.95 20 20 20 20-8.95 20-20S31.05 0 20 0zm0 36c-8.82 0-16-7.18-16-16S11.18 4 20 4s16 7.18 16 16-7.18 16-16 16z" />
                </svg>
              )}
              {playButtonType === "outline" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 34 34"
                >
                  <path d="M17 34C7.6 34 0 26.4 0 17S7.6 0 17 0s17 7.6 17 17-7.6 17-17 17zm0-32C8.7 2 2 8.7 2 17s6.7 15 15 15 15-6.7 15-15S25.3 2 17 2z" />
                  <path d="M12 25.7V8.3L27 17l-15 8.7zm2-14v10.5l9-5.3-9-5.2z" />
                </svg>
              )}
              {playButtonType === "video" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"></path>
                </svg>
              )}
            </span>
          </DivBackground>
        </div>
      </Fragment>,
    ];
  }
}
