/**
 * Internal dependencies
 */
import Buttons from "./buttons";
import React from "react";
import classnames from "classnames";
import ResponsiveBlocksIcon from "../../../../ResponsiveBlocksIcon.json";
import renderSVG from "../../../../renderIcon";

/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;
const { RichText } = wp.blockEditor;

let svg_icons = Object.keys(ResponsiveBlocksIcon);

export default class Save extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    // Setup the attributes
    const {
      block_id,
      counterId,
      label,
      target,
      link,
      opacity,
      icon,
      iconPosition,
      boxShadowPosition,
      hoverEffect,
      inheritFromTheme,
      inheritFromThemesaved,
      inheritFromThemeLocalTimestamp,
      noFollow,
    } = this.props.attributes;

    let imgopacity = opacity / 100;

    var boxShadowPositionCSS = boxShadowPosition;

    var classAfterInheritCheck = " not-inherited-from-theme";
    if(inheritFromTheme) {
      classAfterInheritCheck = " inherited-from-theme";
    }
    let updatedButtonTextClass = "responsive-block-editor-addons-button__link_child" + classAfterInheritCheck;

    if ("outset" === boxShadowPosition) {
      boxShadowPositionCSS = "";
    }
    
    return [
      
      <Buttons {...this.props}>
        <div
          className={classnames(
            `responsive-block-editor-addons-${counterId}`,
            "responsive-block-editor-addons-button__wrapper",
            `responsive-block-editor-addons-button__effect-${hoverEffect}`,
            inheritFromTheme ? "wp-block-button" : null
          )}
          data-rbea-inherit-wrapper="true"
          data-inherit-from-theme={inheritFromThemesaved ? '1' : '0'}
          data-local-timestamp={inheritFromThemeLocalTimestamp || ''}
          data-rbea-inherit-parent="self"
          data-rbea-inherit-child=".responsive-block-editor-addons-buttons-repeater"
        >
          <a
            className={classnames(
              "responsive-block-editor-addons-buttons-repeater",
              "responsive-block-editor-addons-button__wrapper",
              inheritFromTheme ? "wp-block-button__link" : null
            )}
            href={link}
            rel={noFollow ? target ? "nofollow noopener noreferrer" : "nofollow": null}
            target={target ? "_blank" : null}
          >
            {"" !== icon && iconPosition == "before" && (
              <span
                className={classnames(
                  `responsive-block-editor-addons-button__icon`,
                  `responsive-block-editor-addons-button__icon-position-${iconPosition}`,
                  "rbea-dynamic-icon"
                )}
                data-icon={icon}
                aria-hidden="true"
              >
              </span>
            )}
            <RichText.Content
              value={label}
              tagName="div"
              className={updatedButtonTextClass}
            />
            {"" !== icon && iconPosition == "after" && (
              <span
                className={classnames(
                  `responsive-block-editor-addons-button__icon`,
                  `responsive-block-editor-addons-button__icon-position-${iconPosition}`,
                  "rbea-dynamic-icon"
                )}
                data-icon={icon}
                aria-hidden="true"
              >
              </span>
            )}
          </a>
        </div>
      </Buttons>,
    ];
  }
}
