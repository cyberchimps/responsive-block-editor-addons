/**
 * Internal dependencies
 */
import classnames from "classnames";
import Style from "style-it";

/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;
const { RichText, InnerBlocks } = wp.blockEditor;

export default class Save extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      isFormVariantSelected,
      formVariant,
      formSubmitBtnLabel,
      formSuccessMessage,
      formErrorMessage,
      block_id,
      anchor,
    } = this.props.attributes;

    return [
      <div
        id={anchor}
        className={classnames(
          this.props.className, 
          "responsive-block-editor-addons-block-form",
          `block-${block_id}`
        )}
      >

        {isFormVariantSelected &&
        <form className="responsive-block-editor-addons-form__form">
          <InnerBlocks.Content />

          <div className="responsive-block-editor-addons-form-submit-button-container">
            <RichText.Content
              className="responsive-block-editor-addons-form-submit-button"
              value={ formSubmitBtnLabel }
              tagName="button"
              type="submit"
            />
          </div>
        </form>}
      </div>,
    ];
  }
}
