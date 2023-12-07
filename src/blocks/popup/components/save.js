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
        <div className="responsive-block-editor-addons-popup-modal-wrap responsive-block-editor-popup-modal-hide">
          <div role="presentation" className="responsive-block-editor-addons-popup-modal-wrap-overlay"></div>
          <div className="responsive-block-editor-addons-popup-modal-content">
            <div className="responsive-block-editor-addons-popup-modal-header"></div>
            <div className="responsive-block-editor-addons-popup-modal-body">
              <div className="responsive-block-editor-addons-popup-innerblock">
                <InnerBlocks.Content />
              </div>
            </div>
          </div>
        </div>
        
      </div>,
    ];
  }
}
