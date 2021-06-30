/**
 * Internal dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import times from "lodash/times";
import renderSVG from "../../../renderIcon";
import ResponsiveBlocksIcon from "../../../ResponsiveBlocksIcon.json";
import React from "react";
import EditorStyles from "./editor-styles";

/**
 * WordPress dependencies
 */
const { __, sprintf } = wp.i18n;
const { Component } = wp.element;
const { RichText, InnerBlocks, BlockControls, AlignmentToolbar } = wp.editor;
const { Button, Dashicon, Icon } = wp.components;
import memoize from "memize";
import map from "lodash/map";
import { loadGoogleFont } from "../../../utils/font";

const getCount = memoize((count) => {
  return times(count, (index) => [
    "responsive-block-editor-addons/count-up",
    {
      placeholder: sprintf(
        /* translators: %d: a digit 1-3 */
        __("Title %d", "responsive-block-editor-addons"),
        parseInt(index + 1)
      ),
    },
  ]);
});

let svg_icons = Object.keys(ResponsiveBlocksIcon);

export default class Edit extends Component {
  constructor() {
    super(...arguments);
  }

  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-count-up-style-" + this.props.clientId
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
      "responsive-block-editor-addons-count-up-style-" + this.props.clientId
    );
    document.head.appendChild($style);
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        block_id,
        countUp,
        count,
        contentAlign,
        dateFontFamily,
        headingFontFamily,
        contentFontFamily,
        resshowIcon,
        resshowTitle,
        resshowDesc,
        resshowNum,
        iconStyle,
      },
      setAttributes,
    } = this.props;
    var data_copy = [...countUp];

    const classes = classnames("responsive-count", {
      [`has-text-align-${contentAlign}`]: contentAlign,
    });

    const formattingControls = ["bold", "italic", "strikethrough"];

    return [
      // Show the alignment toolbar on focus
      <BlockControls key="controls">
        <AlignmentToolbar
          value={contentAlign}
          onChange={(value) => setAttributes({ contentAlign: value })}
        />
      </BlockControls>,

      // Show the block controls on focus

      <Inspector {...{ setAttributes, ...this.props }} />,

      <div className={classes}>
        {" "}
        <div
          className={classnames(
            "responsive-block-editor-addons-block-count-up",
            `block-${block_id}`,
            "responsive-count__inner"
          )}
        >
          {dateFontFamily && loadGoogleFont(dateFontFamily)}
          {headingFontFamily && loadGoogleFont(headingFontFamily)}
          {contentFontFamily && loadGoogleFont(contentFontFamily)}
          {countUp.map((test, index) => (
            <div className={classnames("responsive-count-item")}>
              {resshowIcon && (
                <div
                  className={classnames(
                    "responsive-block-editor-addons-count-up__source-wrap",
                    `res-countup-icon-design-${iconStyle}`
                  )}
                >
                  <div className="responsive-block-editor-addons-count-up__source-icon">
                    {renderSVG(countUp[index]["icon"])}
                  </div>
                </div>
              )}
              {resshowTitle && (
                <RichText
                  tagName="span"
                  className="responsive-count-item__title"
                  value={countUp[index]["title"]}
                  placeholder={countUp[index]["title"]}
                  onChange={(value) => {
                    var new_content = {
                      title: value,
                      amount: data_copy[index]["amount"],
                      features: data_copy[index]["features"],
                      icon: data_copy[index]["icon"],
                    };
                    data_copy[index] = new_content;
                    setAttributes({ countUp: data_copy });
                  }}
                  formattingControls={formattingControls}
                  keepPlaceholderOnFocus
                />
              )}
              {resshowNum && (
                <div className="responsive-count-item__price-wrapper">
                  <RichText
                    tagName="div"
                    className="responsive-count-item__amount"
                    data-duration="1000"
                    data-delay="16"
                    placeholder={countUp[index]["amount"]}
                    value={countUp[index]["amount"]}
                    onChange={(value) => {
                      var new_content = {
                        title: data_copy[index]["title"],
                        amount: value,
                        features: data_copy[index]["features"],
                        icon: data_copy[index]["icon"],
                      };
                      data_copy[index] = new_content;
                      setAttributes({ countUp: data_copy });
                    }}
                    formattingControls={formattingControls}
                    keepPlaceholderOnFocus
                  />
                </div>
              )}
              {resshowDesc && (
                <RichText
                  tagName="div"
                  className="responsive-count-item__features"
                  value={countUp[index]["features"]}
                  placeholder={__(
                    "Description",
                    "responsive-block-editor-addons"
                  )}
                  onChange={(value) => {
                    var new_content = {
                      title: data_copy[index]["title"],
                      amount: data_copy[index]["amount"],
                      features: value,
                      icon: data_copy[index]["icon"],
                    };
                    data_copy[index] = new_content;
                    setAttributes({ countUp: data_copy });
                  }}
                  keepPlaceholderOnFocus
                />
              )}
            </div>
          ))}
        </div>
      </div>,
    ];
  }
}
