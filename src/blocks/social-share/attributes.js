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
  },
  blockBottomPadding: {
    type: "number",
  },
  blockLeftPadding: {
    type: "number",
  },
  blockRightPadding: {
    type: "number",
  },
  blockTopPaddingTablet: {
    type: "number",
  },
  blockBottomPaddingTablet: {
    type: "number",
  },
  blockLeftPaddingTablet: {
    type: "number",
  },
  blockRightPaddingTablet: {
    type: "number",
  },
  blockTopPaddingMobile: {
    type: "number",
  },
  blockBottomPaddingMobile: {
    type: "number",
  },
  blockLeftPaddingMobile: {
    type: "number",
  },
  blockRightPaddingMobile: {
    type: "number",
  },
  blockTopMargin: {
    type: "number",
  },
  blockBottomMargin: {
    type: "number",
  },
  blockLeftMargin: {
    type: "number",
  },
  blockRightMargin: {
    type: "number",
  },
  blockTopMarginMobile: {
    type: "number",
  },
  blockBottomMarginMobile: {
    type: "number",
  },
  blockLeftMarginMobile: {
    type: "number",
  },
  blockRightMarginMobile: {
    type: "number",
  },
  blockTopMarginTablet: {
    type: "number",
  },
  blockBottomMarginTablet: {
    type: "number",
  },
  blockLeftMarginTablet: {
    type: "number",
  },
  blockRightMarginTablet: {
    type: "number",
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
  }
};

export default attributes;
