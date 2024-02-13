/**
 * Internal dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import ResponsiveBlockEditorAddonsIcons from "../../../block-icons"
import EditorStyles from "./editor-styles";
import variations from './variations';
/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { RichText, BlockControls, InnerBlocks } = wp.blockEditor;
import {
	__experimentalBlockVariationPicker as BlockVariationPicker,
} from '@wordpress/block-editor';

export default class Edit extends Component {
  constructor() {
    super(...arguments);
  }
  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-form-style-" +
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
      "responsive-block-editor-addons-form-style-" +
        this.props.clientId
    );
    document.head.appendChild($style);
  }
  render() {
    // Setup the attributes
    const {
      attributes: {
        isFormVariantSelected,
        formVariant,
        formSubmitBtnLabel,
        formSuccessMessage,
        formErrorMessage,
        formEmailTo,
        formEmailSubject,
        block_id,
      },
      setAttributes,
      isSelected,
    } = this.props;

    const VariantSelector = () => {
      return (
        <BlockVariationPicker
					icon={ResponsiveBlockEditorAddonsIcons.form}
					label={__( 'Choose variation' )}
					instructions={__( 'Select a variation to start with.' )}
					onSelect={(variation) => {
            setAttributes({
              isFormVariantSelected: true,
              formVariant: variation && variation.key ? variation.key : 'skip'
            })
          }}
					variations={variations}
				/>
      )
    }

    return [
      <BlockControls key="controls">
      </BlockControls>,
      // Show the block controls on focus
      <Inspector key={`inspector-${block_id}`} {...{ setAttributes, ...this.props }} />,

      // Show the block markup in the editor
      <div
        className={classnames(
          this.props.className, 
          "responsive-block-editor-addons-block-form",
          `block-${block_id}`
        )}
        key={`mainDiv-${block_id}`}
        >
        {!isFormVariantSelected && VariantSelector()}
        {isFormVariantSelected && 
        <>
          <form className="responsive-block-editor-addons-form__form" id={`rba-form-${block_id}`} data-email-to={formEmailTo} data-subject={formEmailSubject}>
            <InnerBlocks
              templateLock={false}
              template={formVariant === 'contact' ? variations[0]?.innerBlocks : variations[1]?.innerBlocks}
            />

            <div className="responsive-block-editor-addons-form-submit-button-container">
              <RichText
                className="responsive-block-editor-addons-form-submit-button"
                data-form-submit={`rba-form-submit-${block_id}`}
                placeholder={ __( "Submit", "responsive-block-editor-addons" ) }
                value={ formSubmitBtnLabel }
                onChange={ (value) => setAttributes({ formSubmitBtnLabel: value }) }
                tagName="button"
                type="submit"
                onClick={ (e) => e.preventDefault() }
              />
            </div>
          </form>

          {isSelected &&
            <div className="responsive-block-editor-addons-form-submit-message-wrapper">
              <div className="responsive-block-editor-addons-form-submit-success-message">{formSuccessMessage}</div>
              <div className="responsive-block-editor-addons-form-submit-error-message">{formErrorMessage}</div>
            </div>
          }
        </>
        }

      </div>,
    ];
  }
}
