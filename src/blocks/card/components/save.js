/**
 * Internal dependencies
 */
import classnames from "classnames";
import ResponsiveBlocksIcon from "../../../ResponsiveBlocksIcon.json";
import renderSVG from "../../../renderIcon";
import React from "react";

/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;
const { Dashicon } = wp.components;
const { RichText } = wp.blockEditor;

let svg_icons = Object.keys(ResponsiveBlocksIcon);

export default class Save extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      block_id,
      cardsArray,
      buttonTarget,
      boxShadowPosition,
      stack,
      opacity,
      resshowImage,
      imageopacity,
      backgroundType,
      backgroundImage,
      imageSize,
      icon,
      iconPosition,
      butopacity,
      buttonSize,
      inheritFromTheme,
      inheritFromThemesaved,
      inheritFromThemeLocalTimestamp,
    } = this.props.attributes;

    var boxShadowPositionCSS = boxShadowPosition;

    if ("outset" === boxShadowPosition) {
      boxShadowPositionCSS = "";
    }

    const dimRatioToClass = (ratio) => {
      return 0 === ratio || 50 === ratio
        ? null
        : "has-background-dim-" + 10 * Math.round(ratio / 10);
    };

    return [
      <div
        className={classnames(
          this.props.className,
          "responsive-block-editor-addons-block-card",
          `block-${block_id}`,
          `responsive-columns__stack-${stack}`
        )}
      >
        <div
          className={classnames(
            "wp-block-responsive-block-editor-addons-card__inner"
          )}
        >
          {cardsArray.map((test, index) => (
            <div key={`card-item-${index}`}
              className={classnames(
                "wp-block-responsive-block-editor-addons-card-item"
              )}
            >
              {"image" == backgroundType && backgroundImage && (
                <div className="responsive-block-editor-addons-card-background-image-wrap">
                  <div
                    className={classnames(
                      "responsive-block-editor-addons-card-background-image",
                      dimRatioToClass(imageopacity),
                      {
                        "has-background-dim": 0 !== imageopacity,
                      }
                    )}
                  ></div>
                </div>
              )}
              {resshowImage && (
                <div
                  className={classnames(
                    "responsive-block-editor-addons-card-avatar"
                  )}
                >
                  <div
                    className={classnames(
                      "responsive-block-editor-addons-card-avatar-img",
                      `responsive-block-editor-addons-card-avatar-img-${index}`
                    )}
                  >
                  </div>
                </div>
              )}

              <div className="card-content-wrap">
                <RichText.Content
                  tagName="h4"
                  className="wp-block-responsive-block-editor-addons-card-item__title"
                  value={cardsArray[index]["title"]}
                />
                <RichText.Content
                  tagName="p"
                  className="wp-block-responsive-block-editor-addons-card-item__subtitle"
                  value={cardsArray[index]["subtitle"]}
                />
                <div
                  className={
                    "wp-block-responsive-block-editor-addons-card-item__price-wrapper"
                  }
                >
                  <RichText.Content
                    tagName="p"
                    className="wp-block-responsive-block-editor-addons-card-item__content"
                    value={cardsArray[index]["content"]}
                  />
                </div>
                <div 
                  className={classnames(
                    "wp-block-responsive-block-editor-addons-card-item__button-wrapper",
                    inheritFromTheme ? "wp-block-button" : null
                  )}
                  data-rbea-inherit-wrapper="true"
                  data-inherit-from-theme={inheritFromThemesaved ? '1' : '0'}
                  data-local-timestamp={inheritFromThemeLocalTimestamp || ''}
                  data-rbea-inherit-parent="self"
                  data-rbea-inherit-child=".responsive-block-editor-addons-card-button-inner a"
                >
                  <div className="responsive-block-editor-addons-card-button-inner">
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
                    <a
                      href={cardsArray[index]["buttonURL"]}
                      target={buttonTarget ? "_blank" : null}
                      rel={buttonTarget ? "noopener noreferrer" : null}
                      className={classnames("res-button", buttonSize, inheritFromTheme ? "wp-block-button wp-block-button__link" : null)}
                    >
                      <RichText.Content value={cardsArray[index]["button"]} />
                    </a>
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
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>,
    ];
  }
}
