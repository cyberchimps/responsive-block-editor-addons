/**
 * Internal dependencies
 */
import classnames from "classnames";
import generateCSSUnit from "../../../../generateCSSUnit";
import generateBackgroundImageEffect from "../../../../generateBackgroundImageEffect";
import Style from "style-it";
import { hexToRgba } from "../../../../utils";

/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;
const { InnerBlocks } = wp.blockEditor;

export default class Save extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    // Setup the attributes
    const {
      attributes: { overlayType, gradientOverlayType, block_id },
      setAttributes,
    } = this.props;

    return [
      <div
        className={classnames(
          this.props.className, 
          "responsive-block-editor-addons-advanced-column-child",
          `block-${block_id}`
        )}
      >
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
            <InnerBlocks.Content />
          </div>
        </div>
      </div>,
    ];
  }
}
