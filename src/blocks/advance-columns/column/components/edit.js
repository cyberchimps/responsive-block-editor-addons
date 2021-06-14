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
const { InnerBlocks } = wp.editor;

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
      attributes: { overlayType, gradientOverlayType },
      setAttributes,
    } = this.props;
    setAttributes({ block_id: this.props.clientId });

    return [
      // Show the block controls on focus

      <Inspector {...{ setAttributes, ...this.props }} />,
      <div
        className={classnames(
          "responsive-column-wrap",
          "responsive-block-editor-addons-block-column"
        )}
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
