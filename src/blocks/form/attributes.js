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
  },
  formEmailTo: {
    type: "string",
    default: "",
  },
  formEmailSubject: {
    type: "string",
    default: "",
  },
  formSuccessMessage: {
    type: "string",
    default: __( "Success", "responsive-block-editor-addons" ),
  },
  formErrorMessage: {
    type: "string",
    default: __( "Error. Please try again.", "responsive-block-editor-addons" ),
  },
  formLabelSize: {
    type: "string",
    default: "16px",
  },
  formLabelInputGap: {
    type: "number",
    default: 10,
  },
  formInputSize: {
    type: "string",
    default: "16px",
  },
  formFieldInputGap: {
    type: "number",
    default: 16,
  },
  inputFieldPadding: {
    type: "object",
    default: {
      top: '8px',
      left: '8px',
      right: '8px',
      bottom: '8px',
    }
  },
  inputFieldPaddingTablet: {
    type: "object",
    default: {
      top: '6px',
      left: '6px',
      right: '6px',
      bottom: '6px',
    }
  },
  inputFieldPaddingMobile: {
    type: "object",
    default: {
      top: '4px',
      left: '4px',
      right: '4px',
      bottom: '4px',
    }
  },
  formInputPaddingToggle: {
    type: "string",
    default: "desktop",
  },
  formButtonLabelColor:{
    type: "string",
    default: "#f9f9f9",
  },
  formButtonLabelBGColor:{
    type: "string",
    default: "#111111",
  },
  formButtonLabelHoverColor:{
    type: "string",
    default: "",
  },
  formButtonLabelHoverBGColor:{
    type: "string",
    default: "",
  },
  formButtonPadding: {
    type: "object",
    default: {
      top: '10px',
      left: '20px',
      right: '20px',
      bottom: '10px',
    }
  },
  formButtonPaddingTablet: {
    type: "object",
    default: {
      top: '8px',
      left: '16px',
      right: '16px',
      bottom: '8px',
    }
  },
  formButtonPaddingMobile: {
    type: "object",
    default: {
      top: '6px',
      left: '12px',
      right: '12px',
      bottom: '6px',
    }
  },
  formButtonBorderRadius: {
    type: "object",
    default: {
      top: '4px',
      left: '4px',
      right: '4px',
      bottom: '4px',
    }
  },
  formButtonPaddingToggle: {
    type: "string",
    default: "desktop",
  },
  formButtonAlign: {
    type: "string",
    default: "left",
  },
  formButtonAlignTablet: {
    type: "string",
    default: "left",
  },
  formButtonAlignMobile: {
    type: "string",
    default: "left",
  },
  formLabelColor: {
    type: "string",
    default: "",
  },
  formInputTextColor: {
    type: "string",
    default: "",
  },
  formInputBGColor: {
    type: "string",
    default: "",
  },
  formBorderColor: {
    type: "string",
    default: "",
  },
  formHelperLabelColor: {
    type: "string",
    default: "",
  },
  formRequiredLabelColor: {
    type: "string",
    default: "",
  },
  formSuccessMessageColor: {
    type: "string",
    default: "",
  },
  formErrorMessageColor: {
    type: "string",
    default: "",
  },
  formBorderRadius: {
    type: "object",
    default: {
      top: '4px',
      left: '4px',
      right: '4px',
      bottom: '4px',
    }
  },
  formBorderWidth: {
    type: "object",
    default: {
      top: '1px',
      left: '1px',
      right: '1px',
      bottom: '1px',
    }
  },
  formHelperTextSize: {
    type: "string",
    default: "14px",
  },
  formSuccessErrorMessageSize: {
    type: "string",
    default: "16px",
  },
  hideWidget: {
    type: "boolean",
    default: false,
  },
  hideWidgetTablet: {
    type: "boolean",
    default: false,
  },
  hideWidgetMobile: {
    type: "boolean",
    default: false,
  },
  z_index: {
    type: "number",
  },
  z_indexTablet: {
    type: "number",
  },
  z_indexMobile: {
    type: "number",
  },
};

export default attributes;
