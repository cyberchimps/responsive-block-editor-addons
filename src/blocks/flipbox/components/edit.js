/**
 * Internal dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import EditorStyles from "./editor-styles";
import renderSVG from "../../../renderIcon";
import ResponsiveBlocksIcon from "../../../ResponsiveBlocksIcon.json";


/**
 * WordPress dependencies
 */
const { __, sprintf } = wp.i18n;
const { Component, Fragment } = wp.element;
const { Button, Dashicon, Icon } = wp.components;
const { RichText, URLInput } = wp.blockEditor;

import memoize from "memize";
import map from "lodash/map";
import generateCSSUnit from "../../../generateCSSUnit";
import Style from "style-it";
import { hexToRgba } from "../../../utils";
import generateBackgroundImageEffect from "../../../generateBackgroundImageEffect";

let svg_icons = Object.keys(ResponsiveBlocksIcon);

export default class Edit extends Component {
  constructor() {
    super(...arguments);
  }

  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-flipbox-style-" + this.props.clientId
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
      "responsive-block-editor-addons-flipbox-style-" + this.props.clientId
    );
    document.head.appendChild($style);
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        block_id,
        flipboxArray,
        count,
        gutter,
        contentAlign,
        frontTextColor,
        backTextColor,
        backBackgroundColor,
        frontBackgroundColor,
        transitionSpeed,
        colorButtonSelected,
        frontTitle,
        frontContent,
        iconSize,
        iconColor,
        flipStyleSelected,
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
        imageOpacity,
        backImageOpacity,
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
        stack
      },
      setAttributes,
    } = this.props;

    var data_copy = [...flipboxArray];

    var boxShadowPositionCSS = boxShadowPosition;

    if ("outset" === boxShadowPosition) {
      boxShadowPositionCSS = "";
    }

    let flipStyle = "rotateY(0deg)";
    let flipStyleBack, flipClass;

    if (colorButtonSelected == "back_selected") {
      flipClass = "backSelected";
      if (flipStyleSelected == "LTR") {
        flipStyle = "rotateY(180deg)";
        flipStyleBack = "rotateY(180deg)";
      }
      if (flipStyleSelected == "RTL") {
        flipStyle = "rotateY(-180deg)";
        flipStyleBack = "rotateY(-180deg)";
      }
      if (flipStyleSelected == "BTT") {
        flipStyle = "rotateX(180deg)";
        flipStyleBack = "rotateX(180deg)";
      }
      if (flipStyleSelected == "TTB") {
        flipStyle = "rotateX(-180deg)";
        flipStyleBack = "rotateX(-180deg)";
      }
    } else {
      flipClass = "frontSelected";
      if (flipStyleSelected == "LTR") {
        flipStyle = "rotateY(0deg)";
        flipStyleBack = "rotateY(180deg)";
      }
      if (flipStyleSelected == "RTL") {
        flipStyle = "rotateY(0deg)";
        flipStyleBack = "rotateY(-180deg)";
      }
      if (flipStyleSelected == "BTT") {
        flipStyle = "rotateX(0deg)";
        flipStyleBack = "rotateX(180deg)";
      }
      if (flipStyleSelected == "TTB") {
        flipStyle = "rotateX(0deg)";
        flipStyleBack = "rotateX(-180deg)";
      }
    }

    const formattingControls = ["core/bold", "core/italic", "core/strikethrough"];
    const transitionSpeedSec = transitionSpeed / 10;

    const flipboxTransition =
      transitionSpeed < 10
        ? "transform 0." + transitionSpeed + "s"
        : "transform " + transitionSpeedSec + "s";

    let coloropacity = colorOpacity / 100;
    let backcoloropacity = backColorOpacity / 100;
    let imageopacity = imageOpacity / 100;
    let backimageopacity = backImageOpacity / 100;

    const classes = classnames(
      this.props.className, 
      "wp-block-responsive-block-editor-addons-flipbox",
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

    // Add CSS.
    var element = document.getElementById(
      "res-blockquote-style-" + this.props.clientId
    );
    if (null != element && "undefined" != typeof element) {
      element.innerHTML = styling(this.props);
    }

    return [
      <style id={`responsive-block-editor-addons-flipbox-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>,
      // Show the block controls on focus

      <Inspector key="inspector" {...{ setAttributes, ...this.props }} />,
      <div key={`block-${block_id}`} className={classes}>
        {" "}
        <div key={`block-main-${block_id}`} className={innerClasses}>
          {flipboxArray.map((test, index) => (
            <div
            key={`flipbox-${index}`}
              className={classnames(
                "wp-block-responsive-block-editor-addons-flip-box"
              )}
            >
              <div
              key={`flipbox-inner-${index}`}
                className={classnames(
                  "flip-box-inner",
                  flipStyleSelected,
                  flipClass
                )}
              >
                <div
              key={`flipbox-box-front-${index}`}
                  className={classnames("flip-box-front", flipStyleSelected)}
                >
                  {showFrontIcon && (
                    <div key={`flipbox-box-front-icon-${index}`}
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
                    <RichText
                    key="front-title"
                      tagName="p"
                      className="wp-block-responsive-block-editor-addons-flip-box__title"
                      value={flipboxArray[index]["title"]}
                      placeholder={flipboxArray[index]["title"]}
                      onChange={(value) => {
                        var new_content = {
                          front_buttonURL: data_copy[index]["front_buttonURL"],
                          front_button: data_copy[index]["front_button"],
                          back_buttonURL: data_copy[index]["back_buttonURL"],
                          back_button: data_copy[index]["back_button"],
                          title: value,
                          subtitle: data_copy[index]["subtitle"],
                          back_title: data_copy[index]["back_title"],
                          back_subtitle: data_copy[index]["back_subtitle"],
                          icon: data_copy[index]["icon"],
                          back_icon: data_copy[index]["back_icon"],
                        };
                        data_copy[index] = new_content;
                        setAttributes({ flipboxArray: data_copy });
                      }}
                      allowedFormats={formattingControls}
                      
                    />
                  )}
                  {showFrontSubtitle && (
                    <RichText
                    key="front-subtitle"
                      tagName="p"
                      className="wp-block-responsive-block-editor-addons-flip-box__subtitle"
                      value={flipboxArray[index]["subtitle"]}
                      placeholder={flipboxArray[index]["subtitle"]}
                      onChange={(value) => {
                        var new_content = {
                          front_buttonURL: data_copy[index]["front_buttonURL"],
                          front_button: data_copy[index]["front_button"],
                          back_buttonURL: data_copy[index]["back_buttonURL"],
                          back_button: data_copy[index]["back_button"],
                          title: data_copy[index]["title"],
                          subtitle: value,
                          back_title: data_copy[index]["back_title"],
                          back_subtitle: data_copy[index]["back_subtitle"],
                          icon: data_copy[index]["icon"],
                          back_icon: data_copy[index]["back_icon"],
                        };
                        data_copy[index] = new_content;
                        setAttributes({ flipboxArray: data_copy });
                      }}
                      allowedFormats={formattingControls}
                      
                    />
                  )}
                </div>
                <div key={`flipbox-box-back-${index}`} className={classnames("flip-box-back", flipStyleSelected)}>
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
                    <RichText
                    key="backtitle"
                      tagName="p"
                      className="wp-block-responsive-block-editor-addons-flip-box__backtitle"
                      value={flipboxArray[index]["back_title"]}
                      placeholder={flipboxArray[index]["back_title"]}
                      onChange={(value) => {
                        var new_content = {
                          front_buttonURL: data_copy[index]["front_buttonURL"],
                          front_button: data_copy[index]["front_button"],
                          back_buttonURL: data_copy[index]["back_buttonURL"],
                          back_button: data_copy[index]["back_button"],
                          title: data_copy[index]["title"],
                          subtitle: data_copy[index]["subtitle"],
                          back_title: value,
                          back_subtitle: data_copy[index]["back_subtitle"],
                          icon: data_copy[index]["icon"],
                          back_icon: data_copy[index]["back_icon"],
                        };
                        data_copy[index] = new_content;
                        setAttributes({ flipboxArray: data_copy });
                      }}
                      allowedFormats={formattingControls}
                      
                    />
                  )}
                  {showBackSubtitle && (
                    <RichText
                      key="back-subtitle"
                      tagName="p"
                      className="wp-block-responsive-block-editor-addons-flip-box__backsubtitle"
                      value={flipboxArray[index]["back_subtitle"]}
                      placeholder={flipboxArray[index]["back_subtitle"]}
                      onChange={(value) => {
                        var new_content = {
                          front_buttonURL: data_copy[index]["front_buttonURL"],
                          front_button: data_copy[index]["front_button"],
                          back_buttonURL: data_copy[index]["back_buttonURL"],
                          back_button: data_copy[index]["back_button"],
                          title: data_copy[index]["title"],
                          subtitle: data_copy[index]["subtitle"],
                          back_title: data_copy[index]["back_title"],
                          back_subtitle: value,
                          icon: data_copy[index]["icon"],
                          back_icon: data_copy[index]["back_icon"],
                        };
                        data_copy[index] = new_content;
                        setAttributes({ flipboxArray: data_copy });
                      }}
                      allowedFormats={formattingControls}
                      
                    />
                  )}
                  {showBackButton && (
                    <Fragment>
                      <RichText
                      key="back-button"
                        tagName="p"
                        className={classnames(
                          "wp-block-responsive-block-editor-addons-flipbox-item__button res-button wp-block-button__link",
                          `background-type-${buttonbackgroundType}`,
                          `hover-background-type-${buttonHbackgroundType}`
                        )}
                        value={flipboxArray[index]["back_button"]}
                        placeholder={__(
                          "Button",
                          "responsive-block-editor-addons"
                        )}
                        onChange={(value) => {
                          var new_content = {
                            back_button: value,
                            back_buttonURL: data_copy[index]["back_buttonURL"],
                            front_buttonURL:
                              data_copy[index]["front_buttonURL"],
                            front_button: data_copy[index]["front_button"],
                            title: data_copy[index]["title"],
                            subtitle: data_copy[index]["subtitle"],
                            back_title: data_copy[index]["back_title"],
                            back_subtitle: data_copy[index]["back_subtitle"],
                            icon: data_copy[index]["icon"],
                            back_icon: data_copy[index]["back_icon"],
                          };
                          data_copy[index] = new_content;
                          setAttributes({ flipboxArray: data_copy });
                        }}
                        
                      />
                      <form
                        key="form-link"
                        className={`blocks-button__inline-link res-button-`}
                        onSubmit={(event) => event.preventDefault()}
                      >
                        <Dashicon icon={"admin-links"} />
                        <URLInput
                          key="url-input"
                          className="button-url"
                          value={flipboxArray[index]["back_buttonURL"]}
                          onChange={(value) => {
                            var new_content = {
                              back_buttonURL: value,
                              back_button: data_copy[index]["back_button"],
                              front_buttonURL:
                                data_copy[index]["front_buttonURL"],
                              front_button: data_copy[index]["front_button"],
                              title: data_copy[index]["title"],
                              subtitle: data_copy[index]["subtitle"],
                              back_title: data_copy[index]["back_title"],
                              back_subtitle: data_copy[index]["back_subtitle"],
                              icon: data_copy[index]["icon"],
                              back_icon: data_copy[index]["back_icon"],
                            };
                            data_copy[index] = new_content;
                            setAttributes({ flipboxArray: data_copy });
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
                    </Fragment>
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
