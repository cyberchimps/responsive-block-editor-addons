const attributes = {
  block_id: {
    type: "string",
  },
  imagePoints: {
    type: "string",
    default: "",
  },
  pointBackgroundColor: {
    type: "string",
    default: "#333",
  },
  iconColor: {
    type: "string",
    default: "#fff",
  },
  pointOpacity: {
    type: "number",
    default: 100,
  },
  pointSpacing: {
    type: "number",
    default: 6,
  },
  imageSize: {
    type: "string",
    default: "full",
  },
  animationName: {
    type: "string",
    default: "none",
  },
  animationDirection: {
    type: "string",
    default: "Left",
  },
  animationRepeat: {
    type: "string",
    default: "once",
  },
  animationDuration: {
    type: "number",
    default: 1000,
  },
  animationDelay: {
    type: "number",
    default: 0,
  },
  animationCurve: {
    type: "string",
  },
  pulseEffect: {
    type: "boolean",
    default: true,
  },
  id: {
    type: "number",
  },
  url: {
    type: "string",
  },
  hotspotIcon: {
    type: "string",
    default: "fas fa-plus",
  },
  hotspotSize: {
    type: "number",
    default: 16,
  },
  alt: {
    type: "string",
    attribute: "alt",
  },
  tooltipTrigger: {
    type: "string",
    default: "click",
  },
  tooltipTheme: {
    type: "string",
    default: "light",
  },
  tooltipArrow: {
    type: "boolean",
    default: true,
  },
  tooltipAnimation: {
    type: "string",
    default: "shift-toward",
  },
  hotspotPadding: {
    type: "number",
    default: 6,
  },
  hotspotColor: {
    type: "string",
  },
  hotspotBackground: {
    type: "string",
  },
  hotspotOpacity: {
    type: "number",
    default: 100,
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
  blockTopMargin: {
    type: "number",
    default: '',
  },
  blockBottomMargin: {
    type: "number",
    default: '',
  },
  blockLeftMargin: {
    type: "number",
    default: '',
  },
  blockRightMargin: {
    type: "number",
    default: '',
  },
  blockTopMarginTablet: {
    type: "number",
    default: '',
  },
  blockBottomMarginTablet: {
    type: "number",
    default: '',
  },
  blockLeftMarginTablet: {
    type: "number",
    default: '',
  },
  blockRightMarginTablet: {
    type: "number",
    default: '',
  },
  blockTopMarginMobile: {
    type: "number",
    default: '',
  },
  blockBottomMarginMobile: {
    type: "number",
    default: '',
  },
  blockLeftMarginMobile: {
    type: "number",
    default: '',
  },
  blockRightMarginMobile: {
    type: "number",
    default: '',
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
};

export default attributes;
