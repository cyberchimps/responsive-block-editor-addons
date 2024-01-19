/**
 * Internal dependencies
 */
import classnames from "classnames";

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
      formSubmitBtnLabel,
      formSuccessMessage,
      formErrorMessage,
      formEmailTo,
      formEmailSubject,
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
        <form className="responsive-block-editor-addons-form__form" id={`rba-form-${block_id}`} data-email-to={formEmailTo} data-subject={formEmailSubject}>
          <InnerBlocks.Content />

          <div className="responsive-block-editor-addons-form-submit-button-container">
            <RichText.Content
              className="responsive-block-editor-addons-form-submit-button"
              data-form-submit={`rba-form-submit-${block_id}`}
              value={ formSubmitBtnLabel }
              tagName="button"
              type="submit"
            />
          </div>
        </form>}

        <div className="responsive-block-editor-addons-form-submit-message-wrapper">
          <div className="responsive-block-editor-addons-form-submit-success-message">{formSuccessMessage}</div>
          <div className="responsive-block-editor-addons-form-submit-error-message">{formErrorMessage}</div>
        </div>
      </div>,
    ];
  }
}
