const attributes = {
  block_id: {
    type: "string",
  },
  spacerHeight: {
    type: "number",
    default: 30,
  },
  spacerHeightMobile: {
    type: "number",
    default: '',
  },
  spacerHeightTablet: {
    type: "number",
    default: '',
  },
  spacerDivider: {
    type: "boolean",
    default: false,
  },
  spacerDividerStyle: {
    type: "string",
    default: "solid",
  },
  spacerDividerColor: {
    type: "string",
    default: "#000000",
  },
  spacerDividerHeight: {
    type: "number",
    default: 7,
  },
  spacerDividerWidth: {
    type: "number",
    default: 60,
  },
  spacerDividerAlignment: {
    type: "string",
    default: "center",
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
  blockTopMargin: {
    type: "number",
    default: 30,
  },
  blockTopMarginMobile: {
    type: "number",
    default: 30,
  },
  blockTopMarginTablet: {
    type: "number",
    default: 30,
  },
  blockBottomMargin: {
    type: "number",
    default: 30,
  },
  blockBottomMarginMobile: {
    type: "number",
    default: 30,
  },
  blockBottomMarginTablet: {
    type: "number",
    default: 30,
  },
  blockLeftMargin: {
    type: "number",
    default: 0,
  },
  blockLeftMarginMobile: {
    type: "number",
    default: 0,
  },
  blockLeftMarginTablet: {
    type: "number",
    default: 0,
  },
  blockRightMargin: {
    type: "number",
    default: 0,
  },
  blockRightMarginMobile: {
    type: "number",
    default: 0,
  },
  blockRightMarginTablet: {
    type: "number",
    default: 0,
  },
  blockNewSpacingValuesUpdated: {
    type: "boolean",
    default: false,
  }
};

export default attributes;
