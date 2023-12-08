/**
 * Internal dependencies
 */
import classnames from "classnames";
import map from "lodash/map";
import renderSVG from "../../../renderIcon";
import ResponsiveBlocksIcon from "../../../ResponsiveBlocksIcon.json";
import React from "react";

/**
 * WordPress dependencies
 */
const { Component } = wp.element;
const { InnerBlocks, RichText } = wp.blockEditor;
const { Button, Dashicon, Icon } = wp.components;

let svg_icons = Object.keys(ResponsiveBlocksIcon);

export default class Save extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      block_id,
      countUp,
      contentAlign,
      count,
      gutter,
      resshowIcon,
      resshowTitle,
      resshowDesc,
      resshowNum,
      iconStyle,
    } = this.props.attributes;

    const classes = classnames("responsive-count", {
      [`has-text-align-${contentAlign}`]: contentAlign,
    });

    return [
      <div key={`main-block-${block_id}`} className={classes}>
        <div key={`block-${block_id}`}
          className={classnames(
            this.props.className, 
            "responsive-block-editor-addons-block-count-up",
            `block-${block_id}`,
            "responsive-count__inner"
          )}
        >
          {countUp.map((test, index) => (
            <div key={`count-up-${index}`} className={classnames("responsive-count-item")}>
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
              {resshowTitle && countUp[index]["title"] && (
                <RichText.Content
                  tagName="span"
                  className="responsive-count-item__title"
                  value={countUp[index]["title"]}
                />
              )}
              {resshowNum && countUp[index]["amount"] && (
                <div className={"responsive-count-item__price-wrapper"}>
                  <RichText.Content
                    tagName="div"
                    className="responsive-count-item__amount"
                    value={countUp[index]["amount"]}
                    data-duration="1000"
                    data-delay="16"
                  />
                </div>
              )}
              {resshowDesc && countUp[index]["features"] && (
                <RichText.Content
                  tagName="div"
                  className="responsive-count-item__features"
                  value={countUp[index]["features"]}
                />
              )}
            </div>
          ))}
        </div>
      </div>,
    ];
  }
}
