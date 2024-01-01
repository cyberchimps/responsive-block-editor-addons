/**
 * Internal dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import { loadGoogleFont } from "../../../utils/font";
import ResponsiveBlockEditorAddonsIcons from "../../../block-icons"
import EditorStyles from "./editor-styles";
import variations from './variations';
/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { RichText, AlignmentToolbar, BlockControls, InnerBlocks } = wp.blockEditor;
import {
	__experimentalBlockVariationPicker as BlockVariationPicker,
} from '@wordpress/block-editor';

export default class Edit extends Component {
  constructor() {
    super(...arguments);
  }
  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-advanced-heading-style-" +
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
      "responsive-block-editor-addons-advanced-heading-style-" +
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
        block_id,
      },
      setAttributes,
      mergeBlocks,
      insertBlocksAfter,
      onReplace,
    } = this.props;

    const VariantSelector = () => {
      return (
        <BlockVariationPicker
					icon={ResponsiveBlockEditorAddonsIcons.form}
					label={__( 'Choose variation' )}
					instructions={__( 'Select a variation to start with.' )}
					onSelect={(variation) => {console.log(variation);setAttributes({ isFormVariantSelected: true, formVariant: variation && variation.key ? variation.key : 'skip' })}}
					variations={variations}
          allowSkip
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
        {isFormVariantSelected && formVariant === 'contact' && 
          <InnerBlocks
            templateLock={false}
            template={variations[0]?.innerBlocks}
          />
        }
        {/* {isFormVariantSelected && formVariant === 'subscribe'} */}
      </div>,
    ];
  }
}
