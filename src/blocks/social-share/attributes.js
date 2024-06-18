const attributes = {
  block_id: {
    type: "string",
  },
  socialMediaIcons: {
    type: "array",
    default: [
      {
        icon: "facebook",
        label: "Facebook",
        id: "facebook",
        url: "https://facebook.com/",
        newTab: false,
      },
      {
        icon: "twitter",
        label: "Twitter",
        id: "twitter",
        url: "https://twitter.com/",
        newTab: false,
      },
      {
        icon: "linkedin",
        label: "LinkedIn",
        id: "linkedin",
        url: "https://linkedin.com/",
        newTab: false,
      },
      {
        icon: "youtube",
        label: "YouTube",
        id: "youtube",
        url: "https://youtube.com/user/",
        newTab: false,
      },
    ],
  },
  iconShape: {
    type: "string",
    default: "square",
  },
  iconColorType: {
    type: "string",
    default: "official",
  },
  iconPrimaryColor: {
    type: "string",
    default: "#0112ff",
  },
  iconSecondaryColor: {
    type: "string",
    default: "#e4f3ff"
  },
  iconSize: {
    type: "number",
    default: 30,
  },
  iconColumns: {
    type: "string",
    default: "auto",
  },
  iconColumnsMobile: {
    type: "string",
    default: "2",
  },
  iconColumnsTablet: {
    type: "string",
    default: "auto",
  },
  iconColumnsGap: {
    type: "number",
    default: 15,
  },
  iconRowsGap: {
    type: "number",
    default: 10,
  },
  iconsAlign: {
    type: "string",
    default: "left",
  },
  iconContainerHeight: {
    type: "number",
    default: 5,
  },
  iconContainerSize: {
    type: "number",
    default: 5,
  },
  socialZindex: {
    type: "number",
  },
  blockTopPadding: {
    type: "number",
    default: 0,
  },
  blockBottomPadding: {
    type: "number",
    default: 0,
  },
  blockLeftPadding: {
    type: "number",
    default: 0,
  },
  blockRightPadding: {
    type: "number",
    default: 0,
  },
  blockTopPaddingTablet: {
    type: "number",
    default: 0,
  },
  blockBottomPaddingTablet: {
    type: "number",
    default: 0,
  },
  blockLeftPaddingTablet: {
    type: "number",
    default: 0,
  },
  blockRightPaddingTablet: {
    type: "number",
    default: 0,
  },
  blockTopPaddingMobile: {
    type: "number",
    default: 0,
  },
  blockBottomPaddingMobile: {
    type: "number",
    default: 0,
  },
  blockLeftPaddingMobile: {
    type: "number",
    default: 0,
  },
  blockRightPaddingMobile: {
    type: "number",
    default: 0,
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
  labelFontFamily: {
    type: "string",
  },
  labelFontSize: {
    type: "number",
    default: "Default",
  },
  labelFontSizeMobile: {
    type: "number",
  },
  labelFontSizeTablet: {
    type: "number",
  },
  labelFontWeight: {
    type: "string",
    default: "500",
  },
  labelLineHeight: {
    type: "number",
    default: 1,
  },
  iconLabelGap: {
    type: "number",
    default: 5,
  },
  labelColor: {
    type: "string",
    default: '#333',
  },
  viewOption: {
    type: "string",
    default: "icontext",
  },
  skin: {
    type: "string",
    default: "default",
  },
  blockBorderStyle: {
    type: "string",
    default: "none",
  },
  blockBorderWidth: {
    type: "number",
    default: 2,
  },
  blockBorderRadius: {
    type: "number",
  },
  blockBorderColor: {
    type: "string",
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
  backgroundColor: {
    type: "string",
  },
  opacity: {
    type: "number",
    default: 100,
  },
  currentColumnTab: {
    type: "string",
    default: "desktop",
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
  blockIsMarginControlConnected: {
		type: "boolean",
		default: false,
	},
  blockIsPaddingControlConnected: {
		type: "boolean",
		default: false,
	},
};

export default attributes;
