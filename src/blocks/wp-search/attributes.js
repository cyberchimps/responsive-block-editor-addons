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
    }
  };
  
  export default attributes;
  