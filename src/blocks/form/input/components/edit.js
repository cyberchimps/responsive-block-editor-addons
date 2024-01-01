/**
 * Internal dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import EditorStyles from "./editor-styles";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { RichText, AlignmentToolbar, BlockControls, InnerBlocks } = wp.blockEditor;

export default class Edit extends Component {
  constructor() {
    super(...arguments);
  }
  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-form-input-style-" +
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
      "responsive-block-editor-addons-form-input-style-" +
        this.props.clientId
    );
    document.head.appendChild($style);
  }
  render() {
    // Setup the attributes
    const {
      attributes: {
        block_id,
        formInputFieldLabel,
        formInputRequired,
        formInputHelpText,
        formInputFieldType,
        formInputPlaceholder,
        formInputHideLabel,
        formInputDefaultValue,
      },
      setAttributes,
      mergeBlocks,
      insertBlocksAfter,
      onReplace,
    } = this.props;

    return [
      <BlockControls key="controls">
      </BlockControls>,
      // Show the block controls on focus
      <Inspector key={`inspector-${block_id}`} {...{ setAttributes, ...this.props }} />,

      // Show the block markup in the editor
      <div
        className={classnames(
          this.props.className, 
          "responsive-block-editor-addons-block-form-input",
          `block-${block_id}`
        )}
        key={`mainDiv-${block_id}`}
        >
        <div className="responsive-block-editor-addons-form-input">
          {!formInputHideLabel &&
          <label htmlFor={`rba-form-input-${block_id}`} className="responsive-block-editor-addons-form-input-label">
            <RichText
              placeholder={ __( 'Enter Label...', 'responsive-block-editor-addons' ) }
              className="responsive-block-editor-addons-form-input__label"
              value={ formInputFieldLabel }
              onChange={ value => setAttributes({ formInputFieldLabel: value }) }
              tagName="span"
            />

              { formInputRequired && <span className="responsive-block-editor-addons-form-input__required">*</span> }

          </label>}

          {(formInputFieldType !== 'checkbox' && formInputFieldType !== 'textarea') &&
            <input 
              className="responsive-block-editor-addons-form-input__input"
              type={formInputFieldType}
              name={`rba-form-input-${block_id}`}
              id={`rba-form-input-${block_id}`}
              placeholder={formInputPlaceholder}
              value={formInputDefaultValue}
              disabled
            />}

          {formInputFieldType === 'textarea' &&
            <textarea
              rows={10}
              className="responsive-block-editor-addons-form-input__input"
              type={formInputFieldType}
              name={`rba-form-input-${block_id}`}
              id={`rba-form-input-${block_id}`}
              placeholder={formInputPlaceholder}
              defaultValue={formInputDefaultValue}
              disabled
            ></textarea>}

          {formInputHelpText && <span className="responsive-block-editor-addons-form-input__helper">{formInputHelpText}</span>}

        </div>
      </div>,
    ];
  }
}
