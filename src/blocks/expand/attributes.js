    const attributes = {
  block_id: {
    type: "string",
  },
  blockTitle: {
    type: "string",
    default: "Title for this block",
  },
  expandLessText: {
    type: "string",
    default: "Some short text that can be expanded to show more details.",
  },
  expandMoreText: {
    type: "string",
    default:
      "Some short text that can be expanded to show more details. Description for this block. Use this space for describing your block. Any text will do. Description for this block. You can use this space for describing your block.",
  },
  moreLabel: {
    type: "string",
    default: "Show more",
  },
  lessLabel: {
    type: "string",
    default: "Show less",
  },
  showTitle: {
    type: "boolean",
    default: true,
  },
  expandAlignment: {
    type: "string",
  },
  textColor: {
    type: "string",
  },
  linkColor: {
    type: "string",
    default: "#0066cc"
  },
  titleColor: {
    type: "string",
  },
  titleSpace: {
    type: "number",
    default: 28,
  },
  textSpace: {
    type: "number",
    default: 20,
  },
  linkSpace: {
    type: "number",
    default: 18,
  },
  titleSpaceMobile: {
    type: "number",
  },
  textSpaceMobile: {
    type: "number",
  },
  linkSpaceMobile: {
    type: "number",
  },
  titleSpaceTablet: {
    type: "number",
  },
  textSpaceTablet: {
    type: "number",
  },
  linkSpaceTablet: {
    type: "number",
  },
  titleFontFamily: {
    type: "string",
  },
  textFontFamily: {
    type: "string",
  },
  linkFontFamily: {
    type: "string",
  },
  titleFontSize: {
    type: "number",
    default: 20,
  },
  titleFontWeight: {
    type: "number",
    default: 400,
  },
  titleLineHeight: {
    type: "number",
    default: 1,
  },
  textFontSize: {
    type: "number",
    default: 16,
  },
  textFontWeight: {
    type: "number",
    default: 400,
  },
  textLineHeight: {
    type: "number",
    default: 2,
  },
  linkFontSize: {
    type: "number",
    default: 16,
  },
  linkFontWeight: {
    type: "number",
    default: 400,
  },
  linkLineHeight: {
    type: "number",
    default: 1,
  },
  titleFontSizeMobile: {
	type: "number",
  },
  titleFontSizeTablet: {
	type: "number",
  },
  textFontSizeMobile: {
	type: "number",
  },
  textFontSizeTablet: {
	type: "number",
  },
  linkFontSizeMobile: {
	type: "number",
  },
  linkFontSizeTablet: {
	type: "number",
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
  blockIsPaddingControlConnected: {
		type: "boolean",
		default: false,
	},
  blockIsMarginControlConnected: {
		type: "boolean",
		default: false,
	},
  blockTopPadding: {
    type: "number",
    default: '',
  },
  blockTopPaddingMobile: {
    type: "number",
    default: '',
  },
  blockTopPaddingTablet: {
    type: "number",
    default: '',
  },
  blockBottomPadding: {
    type: "number",
    default: '',
  },
  blockBottomPaddingMobile: {
    type: "number",
    default: '',
  },
  blockBottomPaddingTablet: {
    type: "number",
    default: '',
  },
  blockLeftPadding: {
    type: "number",
    default: '',
  },
  blockLeftPaddingMobile: {
    type: "number",
    default: '',
  },
  blockLeftPaddingTablet: {
    type: "number",
    default: '',
  },
  blockRightPadding: {
    type: "number",
    default: '',
  },
  blockRightPaddingMobile: {
    type: "number",
    default: '',
  },
  blockRightPaddingTablet: {
    type: "number",
    default: '',
  },
  blockTopMargin: {
    type: "number",
    default: '',
  },
  blockTopMarginMobile: {
    type: "number",
    default: '',
  },
  blockTopMarginTablet: {
    type: "number",
    default: '',
  },
  blockBottomMargin: {
    type: "number",
    default: '',
  },
  blockBottomMarginMobile: {
    type: "number",
    default: '',
  },
  blockBottomMarginTablet: {
    type: "number",
    default: '',
  },
  blockLeftMargin: {
    type: "number",
    default: '',
  },
  blockLeftMarginMobile: {
    type: "number",
    default: '',
  },
  blockLeftMarginTablet: {
    type: "number",
    default: '',
  },
  blockRightMargin: {
    type: "number",
    default: '',
  },
  blockRightMarginMobile: {
    type: "number",
    default: '',
  },
  blockRightMarginTablet: {
    type: "number",
    default: '',
  },
};
export default attributes;
