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
      popupToggleCloseBtn,
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
            {popupToggleCloseBtn && 
            <div className="responsive-block-editor-addons-popup-modal-header">
              <button type="button"><span class="dashicons dashicons-no"></span></button>
            </div>}
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
