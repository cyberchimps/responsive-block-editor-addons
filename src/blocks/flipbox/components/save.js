/**
 * Internal dependencies
 */
import classnames from "classnames";
import map from "lodash/map";
import generateCSSUnit from "../../../generateCSSUnit";
import renderSVG from "../../../renderIcon";
import ResponsiveBlocksIcon from "../../../ResponsiveBlocksIcon.json";

/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;
const { RichText } = wp.blockEditor;
const { Dashicon } = wp.components;
import Style from "style-it";
import generateBackgroundImageEffect from "../../../generateBackgroundImageEffect";
import { hexToRgba } from "../../../utils";

let svg_icons = Object.keys(ResponsiveBlocksIcon);
export default class Save extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      block_id,
      flipboxArray,
      contentAlign,
      count,
      gutter,
      frontTextColor,
      frontBackgroundColor,
      backTextColor,
      backBackgroundColor,
      iconSize,
      iconColor,
      flipStyleSelected,
      transitionSpeed,
      blockBorderStyle,
      blockBorderWidth,
      blockBorderRadius,
      blockBorderColor,
      boxShadowColor,
      boxShadowHOffset,
      boxShadowVOffset,
      boxShadowBlur,
      boxShadowSpread,
      boxShadowPosition,
      height,
      topMargin,
      bottomMargin,
      topPadding,
      bottomPadding,
      leftPadding,
      rightPadding,
      backtopPadding,
      backbottomPadding,
      backleftPadding,
      backrightPadding,
      buttonTarget,
      backIconColor,
      backIconSize,
      showFrontIcon,
      showFrontTitle,
      showFrontSubtitle,
      showBackIcon,
      showBackTitle,
      showBackSubtitle,
      showBackButton,
      backgroundImage,
      colorOpacity,
      backBackgroundImage,
      backColorOpacity,
      buttonColor,
      buttonTextColor,
      buttonBorderRadius,
      buttonHpadding,
      buttonVpadding,
      buttonHTextColor,
      buttonHColor,
      buttonbackgroundType,
      buttongradientDirection,
      buttoncolorLocation1,
      buttoncolorLocation2,
      buttonbackgroundColor1,
      buttonbackgroundColor2,
      buttonHbackgroundType,
      buttonHgradientDirection,
      buttonHcolorLocation1,
      buttonHcolorLocation2,
      buttonHbackgroundColor1,
      buttonHbackgroundColor2,
      buttonopacity,
      buttonHopacity,
      imageOpacity,
      backImageOpacity,
      stack
    } = this.props.attributes;

    var boxShadowPositionCSS = boxShadowPosition;

    if ("outset" === boxShadowPosition) {
      boxShadowPositionCSS = "";
    }

    const classes = classnames(
      this.props.className, 
      "responsive-block-editor-addons-block-flipbox",
      `block-${block_id}`,
      {
        [`has-text-align-${contentAlign}`]: contentAlign,
      }
    );

    const innerClasses = classnames(
      "wp-block-responsive-block-editor-addons-flipbox__inner",
      {
        "has-columns": count > 1,
        [`has-${count}-columns`]: count,
        "has-responsive-columns": count > 1,
        [`has-${gutter}-gutter`]: gutter,
      },
      `responsive-flipbox-columns__stack-${stack}`,
    );

    const transitionSpeedSec = transitionSpeed / 10;

    const flipboxTransition =
      transitionSpeed < 10
        ? "transform 0." + transitionSpeed + "s"
        : "transform " + transitionSpeedSec + "s";

    let coloropacity = colorOpacity / 100;
    let backcoloropacity = backColorOpacity / 100;
    let imageopacity = imageOpacity / 100;
    let backimageopacity = backImageOpacity / 100;

    return [
      <div className={classes}>
        <div className={innerClasses}>
          {flipboxArray.map((test, index) => (
            <div key={`flipbox-${index}`}
              className={classnames(
                "wp-block-responsive-block-editor-addons-flip-box"
              )}
            >
              <div className={classnames("flip-box-inner", flipStyleSelected)}>
                <div className="flip-box-front">
                  {showFrontIcon && (
                    <div
                      className={classnames(
                        "wp-block-responsive-block-editor-addons-flip-box-dashicon-fronticon-wrap"
                      )}
                    >
                      {"" !== flipboxArray[index]["icon"] && (
                      <span
                      >
                        {renderSVG(flipboxArray[index]["icon"])}
                      </span>
                      )}
                    </div>
                  )}
                  {showFrontTitle && (
                    <RichText.Content
                      tagName="p"
                      className="wp-block-responsive-block-editor-addons-flip-box__title"
                      value={flipboxArray[index]["title"]}
                    />
                  )}
                  {showFrontSubtitle && (
                    <RichText.Content
                      tagName="p"
                      className="wp-block-responsive-block-editor-addons-flip-box__subtitle"
                      value={flipboxArray[index]["subtitle"]}
                    />
                  )}
                </div>
                <div className={classnames("flip-box-back", flipStyleSelected)}>
                  {showBackIcon && (
                    <div
                      className={classnames(
                        "wp-block-responsive-block-editor-addons-flip-box-dashicon-backicon-wrap"
                      )}
                    >
                      {"" !== flipboxArray[index]["back_icon"] && (
                      <span
                      >
                        {renderSVG(flipboxArray[index]["back_icon"])}
                      </span>
                      )}
                    </div>
                  )}
                  {showBackTitle && (
                    <RichText.Content
                      tagName="p"
                      className="wp-block-responsive-block-editor-addons-flip-box__backtitle"
                      value={flipboxArray[index]["back_title"]}
                    />
                  )}
                  {showBackSubtitle && (
                    <RichText.Content
                      tagName="p"
                      className="wp-block-responsive-block-editor-addons-flip-box__backsubtitle"
                      value={flipboxArray[index]["back_subtitle"]}
                    />
                  )}
                  {showBackButton && (
                    <a
                      href={flipboxArray[index]["back_buttonURL"]}
                      target={buttonTarget ? "_blank" : null}
                      rel={buttonTarget ? "noopener noreferrer" : null}
                      className={classnames(
                        "wp-block-responsive-block-editor-addons-flipbox-item__button",
                        "res-button",
                        "wp-block-button__link"
                      )}
                    >
                      <RichText.Content
                        value={flipboxArray[index]["back_button"]}
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>,
    ];
  }
}
