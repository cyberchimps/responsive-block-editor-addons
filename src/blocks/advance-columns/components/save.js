/**
 * Internal dependencies
 */
import classnames from "classnames";

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
      attributes: {
        columns,
        columnGap,
        contentWidth,
        stack,
        overlayType,
        gradientOverlayType,
        block_id,
        align,
        backgroundType,
      },
      setAttributes,
    } = this.props;

    return [
      <div
        className={classnames(
          this.props.className, 
          backgroundType == "image" ? "background-type-image" : "",
          `block-${block_id}`,
          "responsive-block-editor-addons-advanced-column-outer-wrap",
          `${align}`
        )}
      >
        <div
          className={classnames(
            "responsive-block-editor-addons-advanced-column",
            `align${align}`
          )}
        >
          <div
            className={classnames(
              "responsive-columns-wrap",
              "responsive-block-editor-addons-block-columns",
              `responsive-columns__gap-${columnGap}`,
              `responsive-columns__stack-${stack}`,
              `responsive-columns__content-width-${contentWidth}`,
              `overlay-type-${overlayType}`,
              `${gradientOverlayType}`
            )}
          >
            <div
              className={classnames(
                "responsive-columns-inner-wrap",
                `responsive-columns-columns-${columns}`
              )}
            >
              <InnerBlocks.Content />
            </div>
          </div>
        </div>
      </div>,
    ];
  }
}
