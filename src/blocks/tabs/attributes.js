const { __ } = wp.i18n;

const attributes = {
  block_id: {
    type: "string",
  },
  tabHeaderOptions: {
    type: "array",
    default: [
      __("Tab 1", "responsive-block-editor-addons"),
      __("Tab 2", "responsive-block-editor-addons"),
      __("Tab 3", "responsive-block-editor-addons"),
    ],
  },
  activeTab: {
    type: "number",
    default: 0,
  },
  tabActiveFrontend: {
    type: "number",
    default: 0,
  },
  alignTabs: {
    type: "string",
    default: "left",
  },
  alignTabsVertical: {
    type: 'string',
    default: "left",
  },
  tabsStyleD: {
    type: "string",
    default: "hstyle3",
  },
  tabsStyleT: {
    type: "string",
    default: "hstyle3",
  },
  tabsStyleM: {
    type: "string",
    default: "hstyle3",
  },
  tabBorderWidth: {
    type: "number",
    default: 1,
  },
  tabBorderColor: {
    type: "string",
    default: "#e0e0e0",
  },
  tabBackgroundColor: {
    type: "string",
  },
  tabTitleColor: {
    type: "string",
    default: "#007cba",
  },
  tabTitleActiveColor: {
    type: "string",
    default: "#000",
  },
  tabTitleFontFamily: {
    type: "string",
  },
  tabTitleFontSize: {
    type: "number",
  },
  tabTitleFontSizeMobile: {
    type: "number",
  },
  tabTitleFontSizeTablet: {
    type: "number",
  },
  tabTitleFontWeight: {
    type: "string",
  },
  tabTitleLineHeight: {
    type: "number",
  },
  tabContentColor: {
    type: "string",
    default: "000",
  },
  tabContentFontFamily: {
    type: "string",
  },
  tabContentFontSize: {
    type: "number",
  },
  tabContentFontSizeMobile: {
    type: "number",
  },
  tabContentFontSizeTablet: {
    type: "number",
  },
  tabContentFontWeight: {
    type: "string",
  },
  tabContentLineHeight: {
    type: "number",
  },
  tabsZindex: {
    type: "number",
  },
  tabsTopPadding: {
    type: "number",
    default: 0,
  },
  tabsBottomPadding: {
    type: "number",
    default: 0,
  },
  tabsLeftPadding: {
    type: "number",
    default: 0,
  },
  tabsRightPadding: {
    type: "number",
    default: 0,
  },
  tabsTopPaddingTablet: {
    type: "number",
    default: 0,
  },
  tabsBottomPaddingTablet: {
    type: "number",
    default: 0,
  },
  tabsLeftPaddingTablet: {
    type: "number",
    default: 0,
  },
  tabsRightPaddingTablet: {
    type: "number",
    default: 0,
  },
  tabsTopPaddingMobile: {
    type: "number",
    default: 0,
  },
  tabsBottomPaddingMobile: {
    type: "number",
    default: 0,
  },
  tabsLeftPaddingMobile: {
    type: "number",
    default: 0,
  },
  tabsRightPaddingMobile: {
    type: "number",
    default: 0,
  },
  tabsTopMargin: {
    type: "number",
    default: 0,
  },
  tabsBottomMargin: {
    type: "number",
    default: 0,
  },
  tabsLeftMargin: {
    type: "number",
    default: 0,
  },
  tabsRightMargin: {
    type: "number",
    default: 0,
  },
  tabsTopMarginTablet: {
    type: "number",
    default: 0,
  },
  tabsBottomMarginTablet: {
    type: "number",
    default: 0,
  },
  tabsLeftMarginTablet: {
    type: "number",
    default: 0,
  },
  tabsRightMarginTablet: {
    type: "number",
    default: 0,
  },
  tabsTopMarginMobile: {
    type: "number",
    default: 0,
  },
  tabsBottomMarginMobile: {
    type: "number",
    default: 0,
  },
  tabsLeftMarginMobile: {
    type: "number",
    default: 0,
  },
  tabsRightMarginMobile: {
    type: "number",
    default: 0,
  },
  backgroundType: {
    type: "string",
  },
  backgroundColor: {
    type: "string",
  },
  backgroundColor1: {
    type: "string",
  },
  backgroundColor2: {
    type: "string",
  },
  colorLocation1: {
    type: "number",
    default: 0,
  },
  colorLocation2: {
    type: "number",
    default: 100,
  },
  gradientDirection: {
    type: "number",
    default: 90,
  },
  hoverbackgroundColor1: {
    type: "string",
  },
  hoverbackgroundColor2: {
    type: "string",
  },
  hovercolorLocation1: {
    type: "number",
    default: 0,
  },
  hovercolorLocation2: {
    type: "number",
    default: 100,
  },
  hovergradientDirection: {
    type: "number",
    default: 90,
  },
  opacity: {
    type: "number",
    default: 20,
  },
  backgroundHoverColor: {
    type: "string",
  },
  animationName: {
    type: "string",
    default: "none",
  },
  animationDirection: {
    type: "string",
    default: 'Left',
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
  blockBorderStyle: {
    type: "string",
    default: "none",
  },
  blockBorderWidth: {
    type: "number",
    default: 1,
  },
  blockBorderRadius: {
    type: "number",
  },
  blockBorderColor: {
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
  boxShadowPosition: {
    type: "string",
    default: "outset",
  },
  boxShadowSpread: {
    type: "number",
    default: 0,
  },
  boxShadowColor: {
    type: "string",
    default: "#000",
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
  tabsIsMarginControlConnected: {
		type: "boolean",
		default: false,
	},
  tabsIsPaddingControlConnected: {
		type: "boolean",
		default: false,
	},
};

export default attributes;
