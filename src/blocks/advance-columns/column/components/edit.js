/**
 * Internal dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import generateCSSUnit from "../../../../generateCSSUnit";
import generateBackgroundImageEffect from "../../../../generateBackgroundImageEffect";
import Style from "style-it";
import { hexToRgba } from "../../../../utils";
import EditorStyles from "./editor-styles";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { InnerBlocks } = wp.blockEditor;

export default class Edit extends Component {
  constructor() {
    super(...arguments);
  }
  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-advanced-columns-child-style-" +
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
      "responsive-block-editor-addons-advanced-columns-child-style-" +
        this.props.clientId
    );
    document.head.appendChild($style);
  }

  render() {
    // Setup the attributes
    const {
      attributes: { overlayType, gradientOverlayType, block_id },
      setAttributes,
    } = this.props;

    return [
      // Show the block controls on focus
      <style id={`responsive-block-editor-addons-advanced-columns-child-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>,
      <Inspector key = {`ac-col-inspector-${block_id}`} {...{ setAttributes, ...this.props }} />,
      <div
        className={classnames(
          this.props.className, 
          "responsive-column-wrap",
          "responsive-block-editor-addons-block-column"
        )}
        key = {`ac-col-wrap-${block_id}`}
      >
        <div
          className={classnames(
            "responsive-column-inner-wrap",
            `overlay-type-${overlayType}`,
            `${gradientOverlayType}`
          )}
        >
          <InnerBlocks templateLock={false} />
        </div>
      </div>,
    ];
  }
}
