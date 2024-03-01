const attributes = {

  block_id: {
    type: "string",
  },
  formId: {
    type: "string",
    default: "-1",
  },
  formTitleTag: {
    type: "string",
    default: "h2",
  },
  formTitle: {
    source: "html",
    selector: "h1,h2,h3,h4,h5,h6",
    default: "Form Title",
  },
  formTitleId: {
    type: "string",
  },
  formDescription: {
    source: "html",
    selector: "h4",
    default: "Form Description",
  },
  isHtml: {
    type: 'boolean',
    default: false,
  },
  formJson: {
    type: 'string',
    default: null,
  },
  showFormTitle: {
    type: "boolean",
    default: false,
  },
  showFormDescription: {
    type: "boolean",
    default: false,
  },
  showLabels: {
    type: "boolean",
    default: true,
  },
  showErrorMsgs: {
    type: "boolean",
    default: true,
  },
  formAlignment: {
    type: "string",
    default: "left",
  },
  formAlignmentTablet: {
    type: "string",
    default: "left",
  },
  formAlignmentMobile: {
    type: "string",
    default: "left",
  },
  formWidth: {
    type: "number",
    default: 100,
  },
  formWidthTablet: {
    type: "number",
  },
  formWidthMobile: {
    type: "number",
  },

  //Background

  opacity: {
    type: "number",
    default: 20,
  },
  colorLocation1: {
    type: "number",
    default: 0,
  },
  colorLocation2: {
    type: "number",
    default: 100,
  },
  gradientDirection: {
    type: "number",
    default: 90,
  },
  hovercolorLocation1: {
    type: "number",
    default: 0,
  },
  hovercolorLocation2: {
    type: "number",
    default: 100,
  },
  hovergradientDirection: {
    type: "number",
    default: 90,
  },
  backgroundImage: {
    type: "string",
    default: '',
  },
  backgroundImagePosition: {
    type: "string",
    default: "center center",
  },
  backgroundImageSize: {
    type: "string",
    default: "cover",
  },
  backgroundImageRepeat: {
    type: "string",
    default: "no-repeat",
  },
  backgroundAttachment: {
    type: "string",
    default: "scroll",
  },
  backgroundHoverImage: {
    type: "string",
  },
  backgroundImageHoverPosition: {
    type: "string",
  },
  backgroundImageHoverAttachment: {
    type: "string",
  },
  backgroundImageHoverSize: {
    type: "string",
  },
  backgroundImageHoverRepeat: {
    type: "string",
  },
  backgroundImageHoverRepeat: {
    type: "string",
  },
  backgroundImageColor: {
    type: "string",
  },
  overlayType: {
    type: "string",
    default: "color",
  },
  gradientOverlayColor1: {
    type: "string",
  },
  gradientOverlayColor2: {
    type: "string",
  },
  gradientOverlayType: {
    type: "string",
    default: "linear",
  },
  gradientOverlayLocation1: {
    type: "number",
    default: 0,
  },
  gradientOverlayLocation2: {
    type: "number",
    default: 100,
  },
  gradientOverlayAngle: {
    type: "number",
    default: 0,
  },
  gradientOverlayPosition: {
    type: "string",
    default: "center center",
  },
  backgroundType: {
    type: "string",
  },
  backgroundColor: {
    type: "string",
  },
  backgroundColorHover: {
    type: "string",
    default: " ",
  },
  backgroundColor1: {
    type: "string",
  },
  backgroundColor2: {
    type: "string",
  },
  hoverbackgroundColor1: {
    type: "string",
    default: " ",
  },
  hoverbackgroundColor2: {
    type: "string",
    default: " ",
  },
  backgroundPosition: {
    type: "string",
    default: "empty",
  }, // For compatibility with v1.3.2.
  backgroundRepeat: {
    type: "string",
    default: "empty",
  }, // For compatibility with v1.3.2.
  backgroundSize: {
    type: "string",
    default: "empty",
  }, // For compatibility with v1.3.2.

  topMargin: {
    type: "number",
    default: 0,
  },
  bottomMargin: {
    type: "number",
    default: 0,
  },
  leftMargin: {
    type: "number",
    default: 0,
  },
  rightMargin: {
    type: "number",
    default: 0,
  },
  topMarginTablet: {
    type: "number",
    default: 0,
  },
  bottomMarginTablet: {
    type: "number",
    default: 0,
  },
  leftMarginTablet: {
    type: "number",
    default: 0,
  },
  rightMarginTablet: {
    type: "number",
    default: 0,
  },
  topMarginMobile: {
    type: "number",
    default: 0,
  },
  bottomMarginMobile: {
    type: "number",
    default: 0,
  },
  leftMarginMobile: {
    type: "number",
    default: 0,
  },
  rightMarginMobile: {
    type: "number",
    default: 0,
  },
  topPadding: {
    type: "number",
    default: 0,
  },
  bottomPadding: {
    type: "number",
    default: 0,
  },
  leftPadding: {
    type: "number",
    default: 0,
  },
  rightPadding: {
    type: "number",
    default: 0,
  },
  topPaddingMobile: {
    type: "number",
    default: 0,
  },
  bottomPaddingMobile: {
    type: "number",
    default: 0,
  },
  leftPaddingMobile: {
    type: "number",
    default: 0,
  },
  rightPaddingMobile: {
    type: "number",
    default: 0,
  },
  topPaddingTablet: {
    type: "number",
    default: 0,
  },
  bottomPaddingTablet: {
    type: "number",
    default: 0,
  },
  leftPaddingTablet: {
    type: "number",
    default: 0,
  },
  rightPaddingTablet: {
    type: "number",
    default: 0,
  },
  formBorderColor: {
    type: "string",
  },
  formBorderRadius: {
    type: "number",
    default: 0
  },
  formBorderStyle: {
    type: "string",
    default: "none"
  },
  formBorderWidth: {
    type: "number",
    default: 0
  },
  boxShadowColor: {
    type: "string",
  },
  boxShadowHOffset: {
    type: "number",
    default: 0,
  },
  boxShadowVOffset: {
    type: "number",
    default: 0,
  },
  boxShadowBlur: {
    type: "number",
    default: 0,
  },
  boxShadowSpread: {
    type: "number",
    default: 0,
  },
  boxShadowPosition: {
    type: "string",
    default: "outset",
  },
  hoverboxShadowColor: {
    type: "string",
  },
  hoverboxShadowHOffset: {
    type: "number",
    default: 0,
  },
  hoverboxShadowVOffset: {
    type: "number",
    default: 0,
  },
  hoverboxShadowBlur: {
    type: "number",
    default: 0,
  },
  hoverboxShadowSpread: {
    type: "number",
    default: 0,
  },
  hoverboxShadowPosition: {
    type: "string",
    default: "outset",
  },
  formTitleAlignment: {
    type: "string",
    default: "center",
  },
  formTitleAlignmentTablet: {
    type: "string",
    default: "center",
  },
  formTitleAlignmentMobile: {
    type: "string",
    default: "center",
  },
  formTitleFontFamily: {
    type: "string",
  },
  formTitleFontSize: {
    type: "number",
  },
  formTitleFontSizeMobile: {
    type: "number",
  },
  formTitleFontSizeTablet: {
    type: "number",
  },
  formTitleFontWeight: {
    type: "string",
    default: "600",
  },
  formTitleLineHeight: {
    type: "number",
    default: 1,
  },
  formTitleLetterSpacing: {
    type: "number",
    default: 0,
  },
  formTitleColor: {
    type: "string",
  },
  formDescriptionFontFamily: {
    type: "string",
  },
  formDescriptionFontSize: {
    type: "number",
  },
  formDescriptionFontSizeMobile: {
    type: "number",
  },
  formDescriptionFontSizeTablet: {
    type: "number",
  },
  formDescriptionFontWeight: {
    type: "string",
    default: "400",
  },
  formDescriptionLineHeight: {
    type: "number",
    default: 1,
  },
  formDescriptionLetterSpacing: {
    type: "number",
    default: 0,
  },
  formDescriptionColor: {
    type: "string",
  },
  //Input Box
  inputTextColor: {
    type: "string"
  },
  inputBackgroundColor: {
    type: "string",
    default: "#f7f7f7"
  },
  inputBorderStyle: {
    type: "string",
    default: "none",
  },
  inputBorderWidth: {
    type: "number",
    default: 1,
  },
  inputBorderRadius: {
    type: "number",
  },
  inputBorderColor: {
    type: "string",
  },
  inputBoxShadowColor: {
    type: "string",
  },
  inputBoxShadowHOffset: {
    type: "number",
    default: 0,
  },
  inputBoxShadowVOffset: {
    type: "number",
    default: 0,
  },
  inputBoxShadowBlur: {
    type: "number",
    default: 0,
  },
  inputBoxShadowSpread: {
    type: "number",
    default: 0,
  },
  inputBoxShadowPosition: {
    type: "string",
    default: "outset",
  },
  inputTopPadding: {
    type: "number",
    default: 10,
  },
  inputBottomPadding: {
    type: "number",
    default: 10,
  },
  inputLeftPadding: {
    type: "number",
    default: 10,
  },
  inputRightPadding: {
    type: "number",
    default: 10,
  },
  inputTopPaddingMobile: {
    type: "number",
    default: 10,
  },
  inputBottomPaddingMobile: {
    type: "number",
    default: 10,
  },
  inputLeftPaddingMobile: {
    type: "number",
    default: 10,
  },
  inputRightPaddingMobile: {
    type: "number",
    default: 10,
  },
  inputTopPaddingTablet: {
    type: "number",
    default: 10,
  },
  inputBottomPaddingTablet: {
    type: "number",
    default: 10,
  },
  inputLeftPaddingTablet: {
    type: "number",
    default: 10,
  },
  inputRightPaddingTablet: {
    type: "number",
    default: 10,
  },
  textIndent: {
    type: "number",
  },
  textIndentMobile: {
    type: "number",
  },
  textIndentTablet: {
    type: "number",
  },
  inputWidth: {
    type: "number",
    default: 100,
  },
  inputWidthMobile: {
    type: "number",
    default: 100,
  },
  inputWidthTablet: {
    type: "number",
    default: 100,
  },
  inputHeight: {
    type: "number",
  },
  inputHeightMobile: {
    type: "number",
  },
  inputHeightTablet: {
    type: "number",
  },
  textareaWidth: {
    type: "number",
    default: 100,
  },
  textareaWidthMobile: {
    type: "number",
    default: 100,
  },
  textareaWidthTablet: {
    type: "number",
    default: 100,
  },
  textareaHeight: {
    type: "number",
  },
  textareaHeightMobile: {
    type: "number",
  },
  textareaHeightTablet: {
    type: "number",
    // default: 0,
  },
  //Input Typography
  inputFontFamily: {
    type: "string"
  },
  inputFontSize: {
    type: "number",
    default: '14'
  },
  inputFontSizeMobile: {
    type: "number"
  },
  inputFontSizeTablet: {
    type: "number"
  },
  inputFontWeight: {
    type: "string",
    default: '400'
  },
  inputLineHeight: {
    type: "number",
    default: 1
  },
  inputLetterSpacing: {
    type: "number",
    default: 0
  },
  //Label Typography
  labelFontFamily: {
    type: "string"
  },
  labelFontSize: {
    type: "number"
  },
  labelFontSizeMobile: {
    type: "number"
  },
  labelFontSizeTablet: {
    type: "number"
  },
  labelFontWeight: {
    type: "string",
  },
  labelLineHeight: {
    type: "number",
    default: 1
  },
  labelLetterSpacing: {
    type: "number",
    default: 0
  },
  labelSpacing: {
    type: "number",
    default: 10
  },
  labelSpacingMobile: {
    type: "number",
    default: 10
  },
  labelSpacingTablet: {
    type: "number",
    default: 10
  },
  labelColor: {
    type: "string",
  },
  showPlaceholder: {
    type: "number",
    default: 1,
  },
  placeholderColor: {
    type: "string",
  },
  enableCustomStyles: {
    type: "boolean",
    default: false,
  },
  radioCheckboxSize: {
    type: "number",
    default: 20,
  },
  //Radio/Checkbox Typography
  radioCheckboxFontFamily: {
    type: "string"
  },
  radioCheckboxFontSize: {
    type: "number"
  },
  radioCheckboxFontSizeMobile: {
    type: "number"
  },
  radioCheckboxFontSizeTablet: {
    type: "number"
  },
  radioCheckboxFontWeight: {
    type: "string",
    default: '400'
  },
  radioCheckboxLineHeight: {
    type: "number",
    default: 1
  },
  radioCheckboxLetterSpacing: {
    type: "number",
    default: 0
  },
  radioCheckboxTextColor: {
    type: "string",
  },
  radioCheckboxColor: {
    type: "string",
  },
  hoverRadioCheckboxColor: {
    type: "string",
    default: "#0066cc",
  },
  radioCheckboxBorderWidth: {
    type: "number",
    default: 0
  },
  radioCheckboxBorderColor: {
    type: "string",
  },
  radioButtonBorderRadius: {
    type: "number",
    default: 500
  },
  checkboxBorderRadius: {
    type: "number",
    default: 0
  },
  //Submit Button Typography
  submitButtonFontFamily: {
    type: "string"
  },
  submitButtonFontSize: {
    type: "number"
  },
  submitButtonFontSizeMobile: {
    type: "number"
  },
  submitButtonFontSizeTablet: {
    type: "number"
  },
  submitButtonFontWeight: {
    type: "string",
    default: '400'
  },
  submitButtonLineHeight: {
    type: "number",
    default: 1
  },
  submitButtonLetterSpacing: {
    type: "number",
    default: 1
  },
  submitButtonWidth: {
    type: "number",
  },
  submitButtonWidthMobile: {
    type: "number",
  },
  submitButtonWidthTablet: {
    type: "number",
  },
  submitButtonHeight: {
    type: "number",
  },
  submitButtonHeightMobile: {
    type: "number",
  },
  submitButtonHeightTablet: {
    type: "number",
  },
  buttonopacity: {
    type: "number",
    default: 100,
  },
  ctaButtonAlignment: {
    type: "string",
    default: "center",
  },
  ctaButtonmarginleft: {
    type: "number",
    default: 0,
  },
  ctaButtonmarginright: {
    type: "number",
    default: 0,
  },
  ctaColor: {
    type: "string",
    default: "#ffffff",
  },
  ctaBackColor: {
    type: "string",
    default: "#ff6f61",
  },
  ctaHoverColor: {
    type: "string",
    default: "#ffffff",
  },
  ctaHoverBackColor: {
    type: "string",
    default: "#d64031",
  },
  ctaBorderColor: {
    type: "string",
  },
  ctaBorderStyle: {
    type: "string",
    default: "none",
  },
  ctaBorderRadius: {
    type: "number",
    default: 0,
  },
  ctaBorderWidth: {
    type: "number",
  },
  ctaHpadding: {
    type: "number",
    default: 30,
  },
  ctaHpaddingMobile: {
    type: "number",
    default: 30,
  },
  ctaHpaddingTablet: {
    type: "number",
    default: 30,
  },
  ctaVpadding: {
    type: "number",
    default: 15,
  },
  ctaVpaddingMobile: {
    type: "number",
    default: 15,
  },
  ctaVpaddingTablet: {
    type: "number",
    default: 15,
  },
  buttonbackgroundType: {
    type: "string",
    default: "color",
  },
  buttoncolorLocation1: {
    type: "number",
    default: 0,
  },
  buttoncolorLocation2: {
    type: "number",
    default: 100,
  },
  buttongradientDirection: {
    type: "number",
    default: 90,
  },
  buttonbackgroundColor1: {
    type: "string",
  },
  buttonbackgroundColor2: {
    type: "string",
    default: "#fff",
  },
  buttonHbackgroundType: {
    type: "string",
    default: "color",
  },
  buttonHcolorLocation1: {
    type: "number",
    default: 0,
  },
  buttonHcolorLocation2: {
    type: "number",
    default: 100,
  },
  buttonHgradientDirection: {
    type: "number",
    default: 90,
  },
  buttonHbackgroundColor1: {
    type: "string",
  },
  buttonHbackgroundColor2: {
    type: "string",
    default: "#fff",
  },
  ctaHoverBorderColor: {
    type: "string",
  },
  submitButtonBoxShadowColor: {
    type: "string",
  },
  submitButtonBoxShadowHOffset: {
    type: "number",
    default: 0,
  },
  submitButtonBoxShadowVOffset: {
    type: "number",
    default: 0,
  },
  submitButtonBoxShadowBlur: {
    type: "number",
    default: 0,
  },
  submitButtonBoxShadowSpread: {
    type: "number",
    default: 0,
  },
  submitButtonBoxShadowPosition: {
    type: "string",
    default: "outset",
  },

  //After Submit Typography
  messageFontFamily: {
    type: "string"
  },
  messageFontSize: {
    type: "number"
  },
  messageFontSizeMobile: {
    type: "number"
  },
  messageFontSizeTablet: {
    type: "number"
  },
  messageFontWeight: {
    type: "number",
    default: '400'
  },
  messageLineHeight: {
    type: "number",
    default: 1
  },
  messageLetterSpacing: {
    type: "number",
    default: 0
  },
  successMsgColor: {
    type: "string"
  },
  errorMsgColor: {
    type: "string"
  },
  afterSubmitFontFamily: {
    type: "string"
  },
  afterSubmitFontSize: {
    type: "number"
  },
  afterSubmitFontSizeMobile: {
    type: "number"
  },
  afterSubmitFontSizeTablet: {
    type: "number"
  },
  afterSubmitFontWeight: {
    type: "string",
    default: '400'
  },
  afterSubmitLineHeight: {
    type: "number",
    default: 1
  },
  afterSubmitLetterSpacing: {
    type: "number",
    default: 0
  },
  afterSubmitErrorMsgColor: {
    type: "string"
  },
  afterSubmitMsgbgColor: {
    type: "string"
  },
  //after submit feedback spacing
  afterSubmitTopMargin: {
    type: "number",
    default: 15,
  },
  afterSubmitBottomMargin: {
    type: "number",
    default: 15,
  },
  afterSubmitLeftMargin: {
    type: "number",
    default: 15,
  },
  afterSubmitRightMargin: {
    type: "number",
    default: 15,
  },
  afterSubmitTopMarginTablet: {
    type: "number",
    default: 15,
  },
  afterSubmitBottomMarginTablet: {
    type: "number",
    default: 15,
  },
  afterSubmitLeftMarginTablet: {
    type: "number",
    default: 15,
  },
  afterSubmitRightMarginTablet: {
    type: "number",
    default: 15,
  },
  afterSubmitTopMarginMobile: {
    type: "number",
    default: 15,
  },
  afterSubmitBottomMarginMobile: {
    type: "number",
    default: 15,
  },
  afterSubmitLeftMarginMobile: {
    type: "number",
    default: 15,
  },
  afterSubmitRightMarginMobile: {
    type: "number",
    default: 15,
  },
  afterSubmitTopPadding: {
    type: "number",
    default: 15,
  },
  afterSubmitBottomPadding: {
    type: "number",
    default: 15,
  },
  afterSubmitLeftPadding: {
    type: "number",
    default: 15,
  },
  afterSubmitRightPadding: {
    type: "number",
    default: 15,
  },
  afterSubmitTopPaddingMobile: {
    type: "number",
    default: 15,
  },
  afterSubmitBottomPaddingMobile: {
    type: "number",
    default: 15,
  },
  afterSubmitLeftPaddingMobile: {
    type: "number",
    default: 15,
  },
  afterSubmitRightPaddingMobile: {
    type: "number",
    default: 15,
  },
  afterSubmitTopPaddingTablet: {
    type: "number",
    default: 15,
  },
  afterSubmitBottomPaddingTablet: {
    type: "number",
    default: 15,
  },
  afterSubmitLeftPaddingTablet: {
    type: "number",
    default: 15,
  },
  afterSubmitRightPaddingTablet: {
    type: "number",
    default: 15,
  },
  afterSubmitBorderColor: {
    type: "string",
  },
  afterSubmitBorderRadius: {
    type: "number",
    default: 0
  },
  afterSubmitBorderStyle: {
    type: "string",
    default: "none"
  },
  afterSubmitBorderWidth: {
    type: "number",
    default: 1
  },
  afterSubmitBoxShadowColor: {
    type: "string",
  },
  afterSubmitBoxShadowHOffset: {
    type: "number",
    default: 0,
  },
  afterSubmitBoxShadowVOffset: {
    type: "number",
    default: 0,
  },
  afterSubmitBoxShadowBlur: {
    type: "number",
    default: 0,
  },
  afterSubmitBoxShadowSpread: {
    type: "number",
    default: 0,
  },
  afterSubmitBoxShadowPosition: {
    type: "string",
    default: "outset",
  },
  afterSubmitHoverboxShadowColor: {
    type: "string",
  },
  afterSubmitHoverboxShadowHOffset: {
    type: "number",
    default: 0,
  },
  afterSubmitHoverboxShadowVOffset: {
    type: "number",
    default: 0,
  },
  afterSubmitHoverboxShadowBlur: {
    type: "number",
    default: 0,
  },
  afterSubmitHoverboxShadowSpread: {
    type: "number",
    default: 0,
  },
  afterSubmitHoverboxShadowPosition: {
    type: "string",
    default: "outset",
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
