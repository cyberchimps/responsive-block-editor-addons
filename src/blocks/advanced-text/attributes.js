const attributes = {
  block_id: {
    type: "string",
  },
  text1: {
    type: "string",
  },
  text2: {
    type: "string",
  },
  text3: {
    type: "string",
  },
  text4: {
    type: "string",
  },
  displayTitle: {
    type: "boolean",
    default: false,
  },
  displaySubtitle: {
    type: "string",
  },
  columnsCount: {
    type: "number",
    default: 1,
  },
  tagTitle: {
    type: "string",
  },
  blockTitle: {
    type: "string",
  },
  blockSubtitle: {
    type: "string",
  },
  displayColumnSeparator: {
    type: "boolean",
    default: false,
  },
  textAlign: {
    type: "string",
    default: "left",
  },
  contentAlign: {
    type: "string",
    default: "left",
  },
  //Attributes in Advanced Settings Panel
  blockTag: {
    type: "string",
    default: "div",
  },
  blockOpacity: {
    type: "number",
    default: 100,
  },
  zIndex: {
    type: "number",
  },
  containerWidth: {
    type: "number",
  },
  containerWidthTablet: {
    type: "number",
  },
  containerWidthMobile: {
    type: "number",
  },
  containerTopPadding: {
    type: "number",
  },
  containerBottomPadding: {
    type: "number",
  },
  containerLeftPadding: {
    type: "number",
  },
  containerRightPadding: {
    type: "number",
  },
  containerTopPaddingTablet: {
    type: "number",
  },
  containerBottomPaddingTablet: {
    type: "number",
  },
  containerLeftPaddingTablet: {
    type: "number",
  },
  containerRightPaddingTablet: {
    type: "number",
  },
  containerTopPaddingMobile: {
    type: "number",
  },
  containerBottomPaddingMobile: {
    type: "number",
  },
  containerLeftPaddingMobile: {
    type: "number",
  },
  containerRightPaddingMobile: {
    type: "number",
  },
  containerTopMargin: {
    type: "number",
  },
  containerBottomMargin: {
    type: "number",
  },
  containerLeftMargin: {
    type: "number",
  },
  containerRightMargin: {
    type: "number",
  },
  containerTopMarginTablet: {
    type: "number",
  },
  containerBottomMarginTablet: {
    type: "number",
  },
  containerLeftMarginTablet: {
    type: "number",
  },
  containerRightMarginTablet: {
    type: "number",
  },
  containerTopMarginMobile: {
    type: "number",
  },
  containerBottomMarginMobile: {
    type: "number",
  },
  containerLeftMarginMobile: {
    type: "number",
  },
  containerRightMarginMobile: {
    type: "number",
  },
};

export default attributes;
