/**
 * Internal dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
const { Component } = wp.element;
const { InnerBlocks } = wp.blockEditor;

export default class Save extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      isPopupVariantSelected,
      popupVariant,
      block_id,
      anchor,
    } = this.props.attributes;

    return [
      <div
        id={anchor}
        className={classnames(
          this.props.className, 
          "responsive-block-editor-addons-block-popup",
          `block-${block_id}`
        )}
      >
        {isPopupVariantSelected && popupVariant !== null && <InnerBlocks.Content />}
      </div>,
    ];
  }
}
