/**
 * Internal dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import Buttons from "./buttons";
import icons from "./../../../../utils/components/icons";
import React from "react";
import ResponsiveBlocksIcon from "../../../../ResponsiveBlocksIcon.json";
import renderSVG from "../../../../renderIcon";
import { loadGoogleFont } from "../../../../utils/font";
import EditorStyles from "./editor-styles";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const {
  RichText,
  AlignmentToolbar,
  BlockControls,
  InnerBlocks,
  InspectorControls,
  URLInput,
} = wp.blockEditor;
const {
  Button,
  Icon,
  Dashicon,
  BaseControl,
  PanelBody,
  RangeControl,
  SelectControl,
  ToolbarButton,
  ToolbarGroup,
  ToggleControl,
} = wp.components;

const ALLOWED_BLOCKS = ["responsive-block-editor-addons/buttons"];

let svg_icons = Object.keys(ResponsiveBlocksIcon);

export default class Edit extends Component {
  constructor() {
    super(...arguments);
  }

  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-buttons-child-style-" +
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
      "responsive-block-editor-addons-buttons-child-style-" +
        this.props.clientId
    );
    document.head.appendChild($style);
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        block_id,
        counterId,
        label,
        link,
        target,
        opacity,
        icon,
        iconPosition,
        buttonFontFamily,
        boxShadowPosition,
        hoverEffect,
        inheritFromTheme,
        buttonPreset,
        borderRadius,
        borderStyle,
        borderWidth,
        borderColor,
        blockTopRadius,
      },
      isSelected,
      setAttributes,
    } = this.props;

  // Apply preset styles by modifying existing attribute values
  let presetBackground = '#007cba';
  let presetColor = 'white';
  let presetBorderRadius = borderRadius;
  let presetBorderStyle = borderStyle;
  let presetBorderWidth = '1px';
  let presetBorderColor = 'black';


  //     if (buttonPreset) {
  //   switch (buttonPreset) {
  //     case 'preset1':
  //       this.props.setAttributes({blockTopRadius: 0});
  //       console.log('preset 1');
  //       break;
  //     case 'preset2':
  //       // presetBorderRadius = 3;
  //       this.props.setAttributes({blockTopRadius: 3});
  //       console.log('preset 2');
  //       break;
  //     case 'preset3':
  //       console.log('preset 3');
  //       presetBackground = '#007cba';
  //       presetColor = '#fff';
  //       this.props.setAttributes({blockTopRadius: 20});
  //       break;
  //     case 'preset4':
  //       console.log('preset 4');
  //       this.props.setAttributes({blockTopRadius: 3});
  //       break;
  //     case 'preset5':
  //       console.log('preset 5');
  //       presetBackground = 'white';
  //       presetColor = 'black';
  //       this.props.setAttributes({blockTopRadius: 0});
  //       presetBorderStyle = 'solid';
  //       break;
  //     case 'preset6':
  //       console.log('preset 6');  
  //       presetBackground = 'white';
  //       presetColor = 'black';
  //       this.props.setAttributes({blockTopRadius: 3});
  //       presetBorderStyle = 'solid';
  //       break;
  //     case 'preset7':
  //       console.log('preset 7');
  //       presetBackground = 'white';
  //       presetColor = 'black';
  //       this.props.setAttributes({blockTopRadius: 20});
  //       presetBorderStyle = 'solid';
  //       break;
  //     case 'preset8':
  //       console.log('preset 8');
  //       presetBackground = 'white';
  //       presetColor = 'black';
  //       this.props.setAttributes({blockTopRadius: 3});
  //       presetBorderStyle = 'solid';
  //       break;
  //   }
  // }

    var element = document.getElementById(
      "responsive-block-editor-addons-style-button-child-" + this.props.clientId
    );

    let imgopacity = opacity / 100;

    var boxShadowPositionCSS = boxShadowPosition;

    var classAfterInheritCheck = " not-inherited-from-theme";
    if(inheritFromTheme) {
      classAfterInheritCheck = " inherited-from-theme";
    }
    let updatedButtonTextClass = "responsive-block-editor-addons-button__link" + classAfterInheritCheck;

    if ("outset" === boxShadowPosition) {
      boxShadowPositionCSS = "";
    }

    return (
      <Fragment>
      <style id={`responsive-block-editor-addons-buttons-child-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>
        {buttonFontFamily && loadGoogleFont(buttonFontFamily)}
        <Inspector key={`inspector-${block_id}`} {...{ setAttributes, ...this.props }} />

        <Buttons {...this.props}>
          <div
            className={classnames(
              `responsive-block-editor-addons-${counterId}`,
              "responsive-block-editor-addons-button__wrapper",
              `responsive-block-editor-addons-button__effect-${hoverEffect}`,
              inheritFromTheme ? "wp-block-button" : null
            )}
            key={`${block_id}`}
          >
            <a
              className={classnames(
                "responsive-block-editor-addons-buttons-repeater",
                "responsive-block-editor-addons-button__wrapper",
                inheritFromTheme ? "wp-block-button__link" : null
              )}
              rel={target ? "noopener noreferrer" : null}
              target={target ? "_blank" : null}
            >
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
                placeholder={__("Add text…", "responsive-block-editor-addons")}
                value={label}
                tagName="div"
                onChange={(value) => {
                  setAttributes({ label: value });
                }}
                allowedFormats={["bold", "italic", "strikethrough"]}
                className={updatedButtonTextClass}
                
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
            </a>
          </div>
          {isSelected && (
            <form
              key="form-link"
              className={`blocks-button__inline-link ab-button`}
              onSubmit={(event) => event.preventDefault()}
            >
              <Dashicon icon={"admin-links"} />
              <URLInput
                className="button-url"
                value={link}
                onChange={(value) => setAttributes({ link: value })}
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
        </Buttons>
      </Fragment>
    );
  }
}
