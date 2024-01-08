const { __ } = wp.i18n;

const formInnerBlocks = []

const attributes = {
  block_id: {
    type: "string",
  },
  isFormVariantSelected: {
    type: "boolean",
    default: false,
  },
  formVariant: {
    type: "string",
  },
  formSubmitBtnLabel: {
    type: "string",
    default: __( "Submit", "responsive-block-editor-addons" ),
  },
  formInnerBlocks: {
    type: "array",
    default: formInnerBlocks,
  }
};

export default attributes;
