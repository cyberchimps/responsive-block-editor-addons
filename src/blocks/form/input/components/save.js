/**
 * Internal dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;
const { RichText } = wp.blockEditor;

export default class Save extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      formInputFieldLabel,
      formInputRequired,
      formInputHelpText,
      formInputFieldType,
      formInputPlaceholder,
      formInputHideLabel,
      formInputDefaultValue,
      formCheckBoxOptions,
      block_id,
      anchor,
    } = this.props.attributes;

    const CheckBox = () => {
      return (
        <>
        {formCheckBoxOptions.map((current, index) => {
          return (
            <div key={index} className="responsive-block-editor-addons-form-input-checkbox-container">
              <input type="checkbox" name={`rba-form-input-${block_id}`} id={`rba-form-input-${block_id}`} checked={current.checkboxValue} value={current.label} />
              <label>
                <RichText.Content
                  value={current.label}
                  tagName="div"
                />
              </label>
            </div>
          );
        })}
        </>
      )
    }

    return [
      <div
        id={anchor}
        className={classnames(
          this.props.className, 
          "responsive-block-editor-addons-block-form-input",
          `block-${block_id}`
        )}
      >
        <div className="responsive-block-editor-addons-form-input">
          {!formInputHideLabel &&
          <label htmlFor={`rba-form-input-${block_id}`} className="responsive-block-editor-addons-form-input-label">
            <RichText.Content
              className="responsive-block-editor-addons-form-input__label"
              value={ formInputFieldLabel }
              tagName="span"
            />

              { formInputRequired && <span className="responsive-block-editor-addons-form-input__required">*</span> }

          </label>}

          {(formInputFieldType !== 'checkbox' && formInputFieldType !== 'textarea') &&
            <input 
              className="responsive-block-editor-addons-form-input__input responsive-block-editor-addons-form-input__text"
              type={formInputFieldType}
              name={`rba-form-input-${block_id}`}
              id={`rba-form-input-${block_id}`}
              placeholder={formInputPlaceholder}
              required={formInputRequired}
              value={formInputDefaultValue}
            />}

          {formInputFieldType === 'checkbox' && <div className="responsive-block-editor-addons-form-input-checkbox-wrapper">{CheckBox()}</div>}

          {formInputFieldType === 'textarea' &&
            <textarea
              rows={10}
              className="responsive-block-editor-addons-form-input__input responsive-block-editor-addons-form-input__textarea"
              type={formInputFieldType}
              name={`rba-form-input-${block_id}`}
              id={`rba-form-input-${block_id}`}
              placeholder={formInputPlaceholder}
              required={formInputRequired}
              defaultValue={formInputDefaultValue}
            ></textarea>}

          {formInputHelpText && <span className="responsive-block-editor-addons-form-input__helper">{formInputHelpText}</span>}

        </div>
      </div>,
    ];
  }
}
