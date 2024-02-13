/**
 * Internal dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import renderSVG from "../../../renderIcon";
import React from "react";
import EditorStyles from "./editor-styles";

/**
 * WordPress dependencies
 */
const { __, sprintf } = wp.i18n;
const { Component, Fragment } = wp.element;
const { Dashicon, Icon, Button } = wp.components;
const { RichText, URLInput, BlockControls, AlignmentToolbar } = wp.blockEditor;
import { loadGoogleFont } from "../../../utils/font";
export default class Edit extends Component {
  constructor() {
    super(...arguments);
  }

  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-card-style-" + this.props.clientId
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
      "responsive-block-editor-addons-card-style-" + this.props.clientId
    );
    document.head.appendChild($style);
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        block_id,
        cardsArray,
        contentAlignment,
        boxShadowPosition,
        stack,
        resshowImage,
        imageopacity,
        backgroundType,
        backgroundImage,
        imageSize,
        icon,
        iconPosition,
        buttonSize,
        subFontFamily,
        headingFontFamily,
        contentFontFamily,
        buttonTarget,
      },
      setAttributes,
    } = this.props;


    var data_copy = [...cardsArray];

    var boxShadowPositionCSS = boxShadowPosition;

    if ("outset" === boxShadowPosition) {
      boxShadowPositionCSS = "";
    }

    const formattingControls = ["core/bold", "core/italic", "core/strikethrough"];

    const dimRatioToClass = (ratio) => {
      return 0 === ratio || 50 === ratio
        ? null
        : "has-background-dim-" + 10 * Math.round(ratio / 10);
    };

    return [
      <style id={`responsive-block-editor-addons-card-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>,
      // Show the alignment toolbar on focus
      <BlockControls key="controls">
        <AlignmentToolbar key="align-tool-bar"
          value={contentAlignment}
          onChange={(value) => setAttributes({ contentAlignment: value })}
        />
      </BlockControls>,
      // Show the block controls on focus

      <Inspector key={`inspector-${block_id}`} {...{ setAttributes, ...this.props }} />,
      <div
        className={classnames(
          this.props.className,
          "responsive-block-editor-addons-block-card",
          `block-${block_id}`,
          `responsive-columns__stack-${stack}`
        )}
        key={`${block_id}`}
      >
        {" "}
        <div
          className={classnames(
            "wp-block-responsive-block-editor-addons-card__inner"
          )}
          key={`card__inner-${block_id}`}
        >
          {cardsArray.map((test, index) => (
            <div
              key={index}
              className={classnames(
                "wp-block-responsive-block-editor-addons-card-item"
              )}
            >
              {console.log("index=> "+index)}
              {"image" == backgroundType && backgroundImage && (
                <div className="responsive-block-editor-addons-card-background-image-wrap" key={`card-background-image-wrap-${index}`}>
                  <div
                    className={classnames(
                      "responsive-block-editor-addons-card-background-image",
                      dimRatioToClass(imageopacity),
                      {
                        "has-background-dim": 0 !== imageopacity,
                      }
                    )}
                    key={`card-background-image-${index}`}
                  ></div>
                </div>
              )}
              {resshowImage && (
                <div
                  className={classnames(
                    "responsive-block-editor-addons-card-avatar"
                  )}
                  key={`card-avatar-${index}`}
                >
                  <div
                    className={classnames(
                      "responsive-block-editor-addons-card-avatar-img",
                      `responsive-block-editor-addons-card-avatar-img-${index}`
                    )}
                    key={`card-avatar-img-${index}`}
                  >
                  </div>
                  <div className={`responsive-block-editor-addons-card-avatar-img responsive-block-editor-addons-card-avatar-img-dashicon-${index}`} key={`card-avatar-img-dashicon-${index}`}>
                      <Dashicon icon="format-image" />
                  </div>
                </div>
              )}
              <div className="card-content-wrap" key={`card-content-wrap-${index}`}>
                {headingFontFamily && loadGoogleFont(headingFontFamily)}
                {subFontFamily && loadGoogleFont(subFontFamily)}
                {contentFontFamily && loadGoogleFont(contentFontFamily)}
                <RichText
                  tagName="h4"
                  className="wp-block-responsive-block-editor-addons-card-item__title"
                  value={cardsArray[index]["title"]}
                  placeholder={cardsArray[index]["title"]}
                  onChange={(value) => {
                    var new_content = {
                      title: value,
                      content: data_copy[index]["content"],
                      subtitle: data_copy[index]["subtitle"],
                      image: data_copy[index]["image"],
                      button: data_copy[index]["button"],
                      buttonURL: data_copy[index]["buttonURL"],
                    };
                    data_copy[index] = new_content;
                    setAttributes({ cardsArray: data_copy });
                  }}
                  allowedFormats={formattingControls}
                  
                />
                <RichText
                  tagName="p"
                  className="wp-block-responsive-block-editor-addons-card-item__subtitle"
                  placeholder={__("99", "responsive-block-editor-addons")}
                  value={cardsArray[index]["subtitle"]}
                  onChange={(value) => {
                    var new_content = {
                      title: data_copy[index]["title"],
                      content: data_copy[index]["content"],
                      subtitle: value,
                      image: data_copy[index]["image"],
                      button: data_copy[index]["button"],
                      buttonURL: data_copy[index]["buttonURL"],
                    };
                    data_copy[index] = new_content;
                    setAttributes({ cardsArray: data_copy });
                  }}
                  allowedFormats={formattingControls}
                  
                />
                <div className="wp-block-responsive-block-editor-addons-card-item__price-wrapper" key={`card-item__price-wrapper-${index}`}>
                  <RichText
                    tagName="p"
                    className="wp-block-responsive-block-editor-addons-card-item__content"
                    value={cardsArray[index]["content"]}
                    placeholder={__("$", "responsive-block-editor-addons")}
                    onChange={(value) => {
                      var new_content = {
                        title: data_copy[index]["title"],
                        content: value,
                        subtitle: data_copy[index]["subtitle"],
                        image: data_copy[index]["image"],
                        button: data_copy[index]["button"],
                        buttonURL: data_copy[index]["buttonURL"],
                      };
                      data_copy[index] = new_content;
                      setAttributes({ cardsArray: data_copy });
                    }}
                    allowedFormats={formattingControls}
                    
                  />
                </div>

                <div className="wp-block-responsive-block-editor-addons-card-item__button-wrapper" key={`card-item__button-wrapper-${index}`}>
                  <div className="responsive-block-editor-addons-card-button-inner">
                    {"" !== icon && iconPosition == "before" && (
                      <span
                        className={classnames(
                          `responsive-block-editor-addons-button__icon`,
                          `responsive-block-editor-addons-button__icon-position-${iconPosition}`
                        )}
                      >
                        {renderSVG(icon)}
                      </span>
                    )}
                    <RichText
                      tagName="a"
                      className={classnames(
                        "wp-block-responsive-block-editor-addons-card-item__button res-button",
                        buttonSize
                      )}
                      value={cardsArray[index]["button"]}
                      placeholder={__("$", "responsive-block-editor-addons")}
                      onChange={(value) => {
                        var new_content = {
                          button: value,
                          buttonURL: data_copy[index]["buttonURL"],
                          title: data_copy[index]["title"],
                          content: data_copy[index]["content"],
                          subtitle: data_copy[index]["subtitle"],
                          image: data_copy[index]["image"],
                        };
                        data_copy[index] = new_content;
                        setAttributes({ cardsArray: data_copy });
                      }}
                      target={buttonTarget ? "_blank" : null}
                      rel={buttonTarget ? "noopener noreferrer" : null}
                      allowedFormats={formattingControls}
                      
                    />
                    {"" !== icon && iconPosition == "after" && (
                      <span
                        className={classnames(
                          `responsive-block-editor-addons-button__icon`,
                          `responsive-block-editor-addons-button__icon-position-${iconPosition}`
                        )}
                      >
                        {renderSVG(icon)}
                      </span>
                    )}
                  </div>
                </div>

                <form
                  key="form-link"
                  className={`blocks-button__inline-link res-button-`}
                  onSubmit={(event) => event.preventDefault()}
                >
                  <Dashicon icon={"admin-links"} />
                  <URLInput
                    className="button-url"
                    value={cardsArray[index]["buttonURL"]}
                    onChange={(value) => {
                      var new_content = {
                        buttonURL: value,
                        button: data_copy[index]["button"],
                        title: data_copy[index]["title"],
                        content: data_copy[index]["content"],
                        subtitle: data_copy[index]["subtitle"],
                        image: data_copy[index]["image"],
                      };
                      data_copy[index] = new_content;
                      setAttributes({ cardsArray: data_copy });
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
              </div>
            </div>
          ))}
        </div>
      </div>,
    ];
  }
}
