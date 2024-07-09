const attributes = {
    block_id: {
      type: "string",
    },
    //General **********************
    layout: {
      type: "string",
      default: "classic"
    },
    placeholder: {
      type: "string",
      default: "Type & Hit Enter"
    },
    inputWidth: {
      type: "number",
      default: 100
    },
    inputWidthType: {
      type: "string",
      default: "%"
    },
    //Typography *********************
    //Input Box
    inputTextColor: {
      type: "string"
    },
    inputBackgroundColor: {
      type: "string",
      default: "#eceeef"
    },
    //Border
    blockBorderColor: {
      type: "string",
    },
    blockBorderRadius: {
      type: "number",
      default: 0
    },
    blockBorderStyle: {
      type: "string",
      default: "none"
    },
    blockBorderWidth: {
      type: "number",
      default: 0
    },
    //Padding
    inputTopPadding: {
      type: "number",
      default: 15
    },
    inputRightPadding: {
      type: "number",
      default: 15
    },
    inputBottomPadding: {
      type: "number",
      default: 15
    },
    inputLeftPadding: {
      type: "number",
      default: 15
    },
    inputTopPaddingMobile: {
      type: "number",
      default: 15
    },
    inputRightPaddingMobile: {
      type: "number",
      default: 15
    },
    inputBottomPaddingMobile: {
      type: "number",
      default: 15
    },
    inputLeftPaddingMobile: {
      type: "number",
      default: 15
    },
    inputTopPaddingTablet: {
      type: "number",
      default: 15
    },
    inputRightPaddingTablet: {
      type: "number",
      default: 15
    },
    inputBottomPaddingTablet: {
      type: "number",
      default: 15
    },
    inputLeftPaddingTablet: {
      type: "number",
      default: 15
    },
    //Typography
    inputFontFamily: {
      type: "string"
    },
    inputFontSize: {
      type: "number"
    },
    inputFontSizeMobile: {
      type: "number"
    },
    inputFontSizeTablet: {
      type: "number"
    },
    inputFontWeight: {
      type: "string",
      default: '100'
    },
    inputLineHeight: {
      type: "number",
      default: 1
    },
    //Button
    buttonType: {
      type: "string",
      default: "button"
    },
    buttonText: {
      type: "string",
      default: "Search"
    },
    buttonWidth: {
      type: "number",
      default: 0
    },
    buttonBackgroundColor: {
      type: "string",
      default: "#ff6f61"
    },
    buttonBackgroundHoverColor: {
      type: "string"
    },
    buttonTextColor: {
      type: "string",
      default: "#313131"
    },
    buttonTextHoverColor: {
      type: "string",
    },
    //Button Text Typography
    buttonFontFamily: {
      type: "string"
    },
    buttonFontSize: {
      type: "number",
      default: 16
    },
    buttonFontSizeMobile: {
      type: "number",
      default: 16
    },
    buttonFontSizeTablet: {
      type: "number",
      default: 16
    },
    buttonFontWeight: {
      type: "string",
      default: "100"
    },
    buttonLineHeight: {
      type: "number",
      default: 1
    },
    //Box Shadow
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
    },
    boxShadowSpread: {
      type: "number",
    },
    boxShadowPosition: {
      type: "string",
      default: "outset",
    },
    //Icon (Minimal Layout)
    iconSize: {
      type: "number",
      default: 16
    },
    iconColor: {
      type: "string",
      default: ""
    },
    iconHoverColor: {
      type: "string"
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
      default: 1,
    },
    z_indexTablet: {
      type: "number",
      default: 1,
    },
    z_indexMobile: {
      type: "number",
      default: 1,
    },
    inputIsPaddingControlConnected: {
      type: "boolean",
      default: false,
    },
    blockTopMargin: {
      type: "number",
      default: 0,
    },
    blockBottomMargin: {
      type: "number",
      default: 0,
    },
    blockLeftMargin: {
      type: "number",
      default: 0,
    },
    blockRightMargin: {
      type: "number",
      default: 0,
    },
    blockTopMarginTablet: {
      type: "number",
      default: 0,
    },
    blockBottomMarginTablet: {
      type: "number",
      default: 0,
    },
    blockLeftMarginTablet: {
      type: "number",
      default: 0,
    },
    blockRightMarginTablet: {
      type: "number",
      default: 0,
    },
    blockTopMarginMobile: {
      type: "number",
      default: 0,
    },
    blockBottomMarginMobile: {
      type: "number",
      default: 0,
    },
    blockLeftMarginMobile: {
      type: "number",
      default: 0,
    },
    blockRightMarginMobile: {
      type: "number",
      default: 0,
    },
    blockIsMarginControlConnected: {
      type: "boolean",
      default: false,
    },
    blockIsPaddingControlConnected: {
      type: "boolean",
      default: false,
    },
    blockTopPadding: {
      type: "number",
      default: 0,
    },
    blockTopPaddingMobile: {
      type: "number",
      default: 0,
    },
    blockTopPaddingTablet: {
      type: "number",
      default: 0,
    },
    blockBottomPadding: {
      type: "number",
      default: 0,
    },
    blockBottomPaddingMobile: {
      type: "number",
      default: 0,
    },
    blockBottomPaddingTablet: {
      type: "number",
      default: 0,
    },
    blockLeftPadding: {
      type: "number",
      default: 0,
    },
    blockLeftPaddingMobile: {
      type: "number",
      default: 0,
    },
    blockLeftPaddingTablet: {
      type: "number",
      default: 0,
    },
    blockRightPadding: {
      type: "number",
      default: 0,
    },
    blockRightPaddingMobile: {
      type: "number",
      default: 0,
    },
    blockRightPaddingTablet: {
      type: "number",
      default: 0,
    },
  };
  
  export default attributes;
  