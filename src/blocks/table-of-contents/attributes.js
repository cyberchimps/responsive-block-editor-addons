const { __ } = wp.i18n;

const attributes = {
  block_id: {
    type: "string",
  },
  classMigrate: {
    type: "boolean",
    default: false,
  },
  isCollapsible: {
    type: "boolean",
    default: false,
  },
  icon: {
    type: "string",
    default: "fa-angle-down",
  },
  heading: {
    source: "html",
    selector: ".rbea-toc__title",
    default: __("Table Of Contents", "responsive-block-editor-addons"),
  },
  headingTitle: {
    type: "string",
    default: __("Table Of Contents", "responsive-block-editor-addons"),
  },
  tColumnsDesktop: {
    type: "number",
    default: 1,
  },
  borderStyle: {
    type: "string",
    default: "solid",
  },
  borderWidth: {
    type: "number",
    default: 1,
  },
  borderRadius: {
    type: "number",
  },
  borderColor: {
    type: "string",
    default: "#333",
  },
  blockTopPadding: {
    type: "number",
  },
  blockTopPaddingMobile: {
    type: "number",
  },
  blockTopPaddingTablet: {
    type: "number",
  },
  blockBottomPadding: {
    type: "number",
  },
  blockBottomPaddingTablet: {
    type: "number",
  },
  blockBottomPaddingMobile: {
    type: "number",
  },
  blockRightPadding: {
    type: "number",
  },
  blockRightPaddingMobile: {
    type: "number",
  },
  blockRightPaddingTablet: {
    type: "number",
  },
  blockLeftPadding: {
    type: "number",
  },
  blockLeftPaddingTablet: {
    type: "number",
  },
  blockLeftPaddingMobile: {
    type: "number",
  },
  blockTopMargin: {
    type: "number",
  },
  blockTopMarginMobile: {
    type: "number",
  },
  blockTopMarginTablet: {
    type: "number",
  },
  blockBottomMargin: {
    type: "number",
  },
  blockBottomMarginTablet: {
    type: "number",
  },
  blockBottomMarginMobile: {
    type: "number",
  },
  blockRightMargin: {
    type: "number",
  },
  blockRightMarginMobile: {
    type: "number",
  },
  blockRightMarginTablet: {
    type: "number",
  },
  blockLeftMargin: {
    type: "number",
  },
  blockLeftMarginTablet: {
    type: "number",
  },
  blockLeftMarginMobile: {
    type: "number",
  },
  zIndex: {
    type: "number",
  },
  contentFontFamily: {
    type: "string",
    default: "",
  },
  contentFontWeight: {
    type: "string",
    default: "500",
  },
  contentFontSize: {
    type: "number",
  },
  contentFontSizeTablet: {
    type: "number",
  },
  contentFontSizeMobile: {
    type: "number",
  },
  contentLineHeight: {
    type: "number",
    default: 1.8,
  },
  headingFontFamily: {
    type: "string",
    default: "",
  },
  headingFontWeight: {
    type: "string",
    default: "500",
  },
  headingFontSize: {
    type: "number",
  },
  headingFontSizeTablet: {
    type: "number",
  },
  headingFontSizeMobile: {
    type: "number",
  },
  headingLineHeight: {
    type: "number",
  },
  align: {
    type: "string",
    default: "left",
  },
  headingColor: {
    type: "string",
    default: "#fff",
  },
  headingBgColor: {
    type: "string",
    default: "#0984ff",
  },
  headingColorHover: {
    type: "string",
  },
  headingBgColorHover: {
    type: "string",
  },
  bodyColor: {
    type: "string",
  },
  bodyBgColor: {
    type: "string",
    default: "#fff",
  },
  bodyColorHover: {
    type: "string",
  },
  bodyBgColorHover: {
    type: "string",
  },
  headingTopPadding: {
    type: "number",
    default: 15,
  },
  headingTopPaddingMobile: {
    type: "number",
    default: 15,
  },
  headingTopPaddingTablet: {
    type: "number",
    default: 15,
  },
  headingBottomPadding: {
    type: "number",
    default: 15,
  },
  headingBottomPaddingTablet: {
    type: "number",
    default: 15,
  },
  headingBottomPaddingMobile: {
    type: "number",
    default: 15,
  },
  headingRightPadding: {
    type: "number",
    default: 20,
  },
  headingRightPaddingMobile: {
    type: "number",
    default: 20,
  },
  headingRightPaddingTablet: {
    type: "number",
    default: 20,
  },
  headingLeftPadding: {
    type: "number",
    default: 20,
  },
  headingLeftPaddingTablet: {
    type: "number",
    default: 20,
  },
  headingLeftPaddingMobile: {
    type: "number",
    default: 20,
  },
  headingTopMargin: {
    type: "number",
  },
  headingTopMarginMobile: {
    type: "number",
  },
  headingTopMarginTablet: {
    type: "number",
  },
  headingBottomMargin: {
    type: "number",
  },
  headingBottomMarginTablet: {
    type: "number",
  },
  headingBottomMarginMobile: {
    type: "number",
  },
  headingRightMargin: {
    type: "number",
  },
  headingRightMarginMobile: {
    type: "number",
  },
  headingRightMarginTablet: {
    type: "number",
  },
  headingLeftMargin: {
    type: "number",
  },
  headingLeftMarginTablet: {
    type: "number",
  },
  headingLeftMarginMobile: {
    type: "number",
  },
  contentTopPadding: {
    type: "number",
    default: 15,
  },
  contentTopPaddingMobile: {
    type: "number",
    default: 15,
  },
  contentTopPaddingTablet: {
    type: "number",
    default: 15,
  },
  contentBottomPadding: {
    type: "number",
    default: 15,
  },
  contentBottomPaddingTablet: {
    type: "number",
    default: 15,
  },
  contentBottomPaddingMobile: {
    type: "number",
    default: 15,
  },
  contentRightPadding: {
    type: "number",
    default: 20,
  },
  contentRightPaddingMobile: {
    type: "number",
    default: 20,
  },
  contentRightPaddingTablet: {
    type: "number",
    default: 20,
  },
  contentLeftPadding: {
    type: "number",
    default: 20,
  },
  contentLeftPaddingTablet: {
    type: "number",
    default: 20,
  },
  contentLeftPaddingMobile: {
    type: "number",
    default: 20,
  },
  contentTopMargin: {
    type: "number",
  },
  contentTopMarginMobile: {
    type: "number",
  },
  contentTopMarginTablet: {
    type: "number",
  },
  contentBottomMargin: {
    type: "number",
  },
  contentBottomMarginTablet: {
    type: "number",
  },
  contentBottomMarginMobile: {
    type: "number",
  },
  contentRightMargin: {
    type: "number",
  },
  contentRightMarginMobile: {
    type: "number",
  },
  contentRightMarginTablet: {
    type: "number",
  },
  contentLeftMargin: {
    type: "number",
  },
  contentLeftMarginTablet: {
    type: "number",
  },
  contentLeftMarginMobile: {
    type: "number",
  },
  blockWidth: {
    type: "number",
    default: 100,
  },
  blockBorderStyle: {
    type: "string",
    default: "solid",
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
    default: "#0984ff",
  },
  headingBorderStyle: {
    type: "string",
  },
  headingBorderWidth: {
    type: "number",
    default: 1,
  },
  headingBorderRadius: {
    type: "number",
  },
  headingBorderColor: {
    type: "string",
  },
  bodyBorderStyle: {
    type: "string",
  },
  bodyBorderWidth: {
    type: "number",
    default: 1,
  },
  bodyBorderRadius: {
    type: "number",
  },
  bodyBorderColor: {
    type: "string",
  },
  tableType: {
    type: "string",
    default: "unordered",
  },
  orderListType: {
    type: "string",
    default: "number",
  },
  headerLayout: {
    type: "string",
    default: "fill",
  },
  backgroundImage: {
    type: "string",
  },
  backgroundPosition: {
    type: "string",
    default: "center-center",
  },
  backgroundSize: {
    type: "string",
    default: "cover",
  },
  backgroundRepeat: {
    type: "string",
    default: "no-repeat",
  },
  backgroundColor: {
    type: "string",
  },
  backgroundVideo: {
    type: "object",
  },
  backgroundType: {
    type: "string",
    default: "none",
  },
  sectionHtmlTag: {
    type: "string",
    default: "div",
  },
  headerLinks: {
    type: "string",
    default: "",
  },
  allowedAnchors: {
    type: "object",
    default: {
      h1: true,
      h2: true,
      h3: true,
      h4: true,
      h5: true,
      h6: true,
    },
  },
  smoothScroll: {
    type: 'boolean',
    default: true
  },
  scrollOffset: {
      type: 'number',
      default: 30
  },
};

export default attributes;
