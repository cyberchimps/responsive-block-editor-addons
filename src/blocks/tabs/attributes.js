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
  },
  tabsBottomPadding: {
    type: "number",
  },
  tabsLeftPadding: {
    type: "number",
  },
  tabsRightPadding: {
    type: "number",
  },
  tabsTopPaddingTablet: {
    type: "number",
  },
  tabsBottomPaddingTablet: {
    type: "number",
  },
  tabsLeftPaddingTablet: {
    type: "number",
  },
  tabsRightPaddingTablet: {
    type: "number",
  },
  tabsTopPaddingMobile: {
    type: "number",
  },
  tabsBottomPaddingMobile: {
    type: "number",
  },
  tabsLeftPaddingMobile: {
    type: "number",
  },
  tabsRightPaddingMobile: {
    type: "number",
  },
  tabsTopMargin: {
    type: "number",
  },
  tabsBottomMargin: {
    type: "number",
  },
  tabsLeftMargin: {
    type: "number",
  },
  tabsRightMargin: {
    type: "number",
  },
  tabsTopMarginTablet: {
    type: "number",
  },
  tabsBottomMarginTablet: {
    type: "number",
  },
  tabsLeftMarginTablet: {
    type: "number",
  },
  tabsRightMarginTablet: {
    type: "number",
  },
  tabsTopMarginMobile: {
    type: "number",
  },
  tabsBottomMarginMobile: {
    type: "number",
  },
  tabsLeftMarginMobile: {
    type: "number",
  },
  tabsRightMarginMobile: {
    type: "number",
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
};

export default attributes;
