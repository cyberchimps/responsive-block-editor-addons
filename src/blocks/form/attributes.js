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
    default: __( "Success", "responsive-block-editpr-addons" ),
  },
  formErrorMessage: {
    type: "string",
    default: __( "Error. Please try again.", "responsive-block-editor-addons" ),
  },
  formLabelSize: {
    type: "string",
    default: "",
  },
  formLabelInputGap: {
    type: "number",
    default: 10,
  },
  formInputSize: {
    type: "string",
    default: "",
  },
  formFieldInputGap: {
    type: "number",
    default: 16,
  },
  inputFieldPaddingTop: {
    type: "number",
    default: 8,
  },
  inputFieldPaddingTopTablet: {
    type: "number",
    default: 8,
  },
  inputFieldPaddingTopMobile: {
    type: "number",
    default: 8,
  },
  inputFieldPaddingBottom: {
    type: "number",
    default: 8,
  },
  inputFieldPaddingBottomTablet: {
    type: "number",
    default: 8,
  },
  inputFieldPaddingBottomMobile: {
    type: "number",
    default: 8,
  },
  inputFieldPaddingLeft: {
    type: "number",
    default: 8,
  },
  inputFieldPaddingLeftTablet: {
    type: "number",
    default: 8,
  },
  inputFieldPaddingLeftMobile: {
    type: "number",
    default: 8,
  },
  inputFieldPaddingRight: {
    type: "number",
    default: 8,
  },
  inputFieldPaddingRightTablet: {
    type: "number",
    default: 8,
  },
  inputFieldPaddingRightMobile: {
    type: "number",
    default: 8,
  },
  formButtonLabelColor:{
    type: "string",
    default: "",
  },
  formButtonLabelBGColor:{
    type: "string",
    default: "",
  },
  formButtonLabelHoverColor:{
    type: "string",
    default: "",
  },
  formButtonLabelHoverBGColor:{
    type: "string",
    default: "",
  },
  formButtonPaddingTop: {
    type: "number",
    default: 8,
  },
  formButtonPaddingTopTablet: {
    type: "number",
    default: 8,
  },
  formButtonPaddingTopMobile: {
    type: "number",
    default: 8,
  },
  formButtonPaddingBottom: {
    type: "number",
    default: 8,
  },
  formButtonPaddingBottomTablet: {
    type: "number",
    default: 8,
  },
  formButtonPaddingBottomMobile: {
    type: "number",
    default: 8,
  },
  formButtonPaddingLeft: {
    type: "number",
    default: 8,
  },
  formButtonPaddingLeftTablet: {
    type: "number",
    default: 8,
  },
  formButtonPaddingLeftMobile: {
    type: "number",
    default: 8,
  },
  formButtonPaddingRight: {
    type: "number",
    default: 8,
  },
  formButtonPaddingRightTablet: {
    type: "number",
    default: 8,
  },
  formButtonPaddingRightMobile: {
    type: "number",
    default: 8,
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
    default: "16px",
  },
  formsSuccessErrorMessageSize: {
    type: "string",
    default: "16px",
  },
};

export default attributes;
