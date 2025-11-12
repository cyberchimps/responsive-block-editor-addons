const attributes = {
  block_id: {
    type: "string",
  },
  token: {
    type: "string",
    default: "",
  },
  columns: {
    type: "number",
    default: 4,
  },
  columnsMobile: {
    type: "number",
  },
  columnsTablet: {
    type: "number",
  },
  numberOfItems: {
    type: "number",
    default: 4,
  },
  imagesGap: {
    type: "number",
  },
  instaPosts: {
    type: "array",
    default: [],
  },
  borderRadius: {
    type: "number",
    default: 0,
  },
  blockTopRadius: {
    type: "number",
    default: 0,
  },
  blockRightRadius: {
    type: "number",
    default: 0,
  },
  blockBottomRadius: {
    type: "number",
    default: 0,
  },
  blockLeftRadius: {
    type: "number",
    default: 0,
  },
  blockTopRadiusTablet: {
    type: "number",
    default: 0,
  },
  blockRightRadiusTablet: {
    type: "number",
    default: 0,
  },
  blockBottomRadiusTablet: {
    type: "number",
    default: 0,
  },
  blockLeftRadiusTablet: {
    type: "number",
    default: 0,
  },
  blockTopRadiusMobile: {
    type: "number",
    default: 0,
  },
  blockRightRadiusMobile: {
    type: "number",
    default: 0,
  },
  blockBottomRadiusMobile: {
    type: "number",
    default: 0,
  },
  blockLeftRadiusMobile: {
    type: "number",
    default: 0,
  },
  blockIsRadiusControlConnected: {
    type: "boolean",
    default: false,
  },
  blockIsRadiusValueUpdated: {
    type: "boolean",
    default: false,
  },
  hasEqualImages: {
    type: "boolean",
    default: false,
  },
  showCaptions: {
    type: "boolean",
    default: false,
  },
  instaTopPadding: {
    type: "number",
    default: 0,
  },
  instaBottomPadding: {
    type: "number",
    default: 0,
  },
  instaRightPadding: {
    type: "number",
    default: 0,
  },
  instaLeftPadding: {
    type: "number",
    default: 0,
  },
  instaTopPaddingMobile: {
    type: "number",
    default: '',
  },
  instaBottomPaddingMobile: {
    type: "number",
    default: '',
  },
  instaRightPaddingMobile: {
    type: "number",
    default: '',
  },
  instaLeftPaddingMobile: {
    type: "number",
    default: '',
  },
  instaTopPaddingTablet: {
    type: "number",
    default: '',
  },
  instaBottomPaddingTablet: {
    type: "number",
    default: '',
  },
  instaRightPaddingTablet: {
    type: "number",
    default: '',
  },
  instaLeftPaddingTablet: {
    type: "number",
    default: '',
  },
  instaTopMargin: {
    type: "number",
    default: 0,
  },
  instaBottomMargin: {
    type: "number",
    default: 0,
  },
  instaRightMargin: {
    type: "number",
    default: 0,
  },
  instaLeftMargin: {
    type: "number",
    default: 0,
  },
  instaTopMarginMobile: {
    type: "number",
    default: '',
  },
  instaBottomMarginMobile: {
    type: "number",
    default: '',
  },
  instaRightMarginMobile: {
    type: "number",
    default: '',
  },
  instaLeftMarginMobile: {
    type: "number",
    default: '',
  },
  instaTopMarginTablet: {
    type: "number",
    default: '',
  },
  instaBottomMarginTablet: {
    type: "number",
    default: '',
  },
  instaRightMarginTablet: {
    type: "number",
    default: '',
  },
  instaLeftMarginTablet: {
    type: "number",
    default: '',
  },
  gridSize: {
    type: "number",
    default: 700,
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
  instaIsMarginControlConnected: {
		type: "boolean",
		default: false,
	},
  instaIsPaddingControlConnected: {
		type: "boolean",
		default: false,
	},
  isPreview: {
    type: "boolean",
    default: false, 
  },
};
export default attributes;
