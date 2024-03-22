/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";

function EditorStyles(props) {
  const {
    formLabelSize,
    formLabelInputGap,
    formInputSize,
    formFieldInputGap,
    inputFieldPadding,
    inputFieldPaddingTablet,
    inputFieldPaddingMobile,
    formButtonLabelColor,
    formButtonLabelBGColor,
    formButtonLabelHoverColor,
    formButtonLabelHoverBGColor,
    formButtonPadding,
    formButtonPaddingTablet,
    formButtonPaddingMobile,
    formButtonBorderRadius,
    formButtonAlign,
    formButtonAlignTablet,
    formButtonAlignMobile,
    formLabelColor,
    formInputTextColor,
    formInputBGColor,
    formBorderColor,
    formHelperLabelColor,
    formRequiredLabelColor,
    formSuccessMessageColor,
    formErrorMessageColor,
    formBorderRadius,
    formBorderWidth,
    formHelperTextSize,
    formSuccessErrorMessageSize,
    block_id,
    hideWidget,
    hideWidgetTablet,
    hideWidgetMobile,
  } = props.attributes;

  var selectors = {
    "": {
      "opacity": hideWidget ? 0.2 : 1,
    },
    " .responsive-block-editor-addons-form-input": {
      "margin-bottom": generateCSSUnit(formFieldInputGap, "px"),
    },
    " .responsive-block-editor-addons-form-input-label": {
      "font-size": formLabelSize,
      "margin-bottom": generateCSSUnit(formLabelInputGap, "px"),
    },
    " .responsive-block-editor-addons-form-input__label": {
      "color": formLabelColor,
    },
    " .responsive-block-editor-addons-form-input__required": {
      "color": formRequiredLabelColor === undefined || formRequiredLabelColor === '' ? '#ff0000' : formRequiredLabelColor,
    },
    " .responsive-block-editor-addons-form-input__input": {
      "font-size": formInputSize,
      "color": formInputTextColor,
      "background-color": formInputBGColor,
      "border-color": formBorderColor === undefined || formBorderColor === '' ? '#111111': formBorderColor,
      "border-top-left-radius": formBorderRadius.top,
      "border-top-right-radius": formBorderRadius.right,
      "border-bottom-left-radius": formBorderRadius.left,
      "border-bottom-right-radius": formBorderRadius.right,
      "border-top-width": formBorderWidth.top,
      "border-bottom-width": formBorderWidth.bottom,
      "border-left-width": formBorderWidth.left,
      "border-right-width": formBorderWidth.right,
    },
    " .responsive-block-editor-addons-form-input__text": {
      "padding-top": inputFieldPadding.top,
      "padding-bottom": inputFieldPadding.bottom,
      "padding-left": inputFieldPadding.left,
      "padding-right": inputFieldPadding.right,
    },
    " .responsive-block-editor-addons-form-input__helper": {
      "color": formHelperLabelColor,
      "font-size": formHelperTextSize,
    },
    " .responsive-block-editor-addons-form-submit-button-container": {
      "justify-content": formButtonAlign,
      "margin-top": generateCSSUnit(formFieldInputGap, "px"),
    },
    " .responsive-block-editor-addons-form-submit-button": {
      "color": formButtonLabelColor,
      "background-color": formButtonLabelBGColor,
      "padding-top": formButtonPadding.top,
      "padding-bottom": formButtonPadding.bottom,
      "padding-left": formButtonPadding.left,
      "padding-right": formButtonPadding.right,
      "border-top-left-radius": formButtonBorderRadius.top,
      "border-top-right-radius": formButtonBorderRadius.right,
      "border-bottom-left-radius": formButtonBorderRadius.left,
      "border-bottom-right-radius": formButtonBorderRadius.right,
    },
    " .responsive-block-editor-addons-form-submit-button:hover": {
      "color": formButtonLabelHoverColor,
      "background-color": formButtonLabelHoverBGColor,
    },
    " .responsive-block-editor-addons-form-submit-success-message": {
      "color": formSuccessMessageColor === undefined || formSuccessMessageColor === '' ? '#008000' : formSuccessMessageColor,
      "font-size": formSuccessErrorMessageSize,
    },
    " .responsive-block-editor-addons-form-submit-error-message": {
      "color": formErrorMessageColor === undefined || formErrorMessageColor === '' ? '#FF0000' : formErrorMessageColor,
      "font-size": formSuccessErrorMessageSize,
    },
  };

  var mobile_selectors = {
    "": {
      "opacity": hideWidgetMobile ? 0.2 : 1,
    },
    " .responsive-block-editor-addons-form-input__text": {
      "padding-top": inputFieldPaddingMobile.top,
      "padding-bottom": inputFieldPaddingMobile.bottom,
      "padding-left": inputFieldPaddingMobile.left,
      "padding-right": inputFieldPaddingMobile.right,
    },
    " .responsive-block-editor-addons-form-submit-button-container": {
      "justify-content": formButtonAlignMobile,
    },
    " .responsive-block-editor-addons-form-submit-button": {
      "padding-top": formButtonPaddingMobile.top,
      "padding-bottom": formButtonPaddingMobile.bottom,
      "padding-left": formButtonPaddingMobile.left,
      "padding-right": formButtonPaddingMobile.right,
    },
  };

  var tablet_selectors = {
    "": {
      "opacity": hideWidgetTablet ? 0.2 : 1,
    },
    " .responsive-block-editor-addons-form-input__text": {
      "padding-top": inputFieldPaddingTablet.top,
      "padding-bottom": inputFieldPaddingTablet.bottom,
      "padding-left": inputFieldPaddingTablet.left,
      "padding-right": inputFieldPaddingTablet.right,
    },
    " .responsive-block-editor-addons-form-submit-button-container": {
      "justify-content": formButtonAlignTablet,
    },
    " .responsive-block-editor-addons-form-submit-button": {
      "padding-top": formButtonPaddingTablet.top,
      "padding-bottom": formButtonPaddingTablet.bottom,
      "padding-left": formButtonPaddingTablet.left,
      "padding-right": formButtonPaddingTablet.right,
    },
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-form.block-${block_id}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
