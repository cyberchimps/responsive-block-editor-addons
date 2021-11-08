import { __ } from "@wordpress/i18n";

const attributes = {
  block_id: {
    type: "string",
  },
  layoutDesign: {
    type: "string",
    default: "layout1",
  },
  text1: {
    type: "string",
    default: __(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ullamcorper erat. Praesent luctus maximus nisl id placerat. Vestibulum rhoncus augue sed scelerisque tempor. Donec non libero quis massa aliquam consectetur et eget purus.",
      "responsive-block-editor-addons"
    ),
  },
  text2: {
    type: "string",
    default: __(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ullamcorper erat. Praesent luctus maximus nisl id placerat. Vestibulum rhoncus augue sed scelerisque tempor. Donec non libero quis massa aliquam consectetur et eget purus.",
      "responsive-block-editor-addons"
    ),
  },
  text3: {
    type: "string",
    default: __(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ullamcorper erat. Praesent luctus maximus nisl id placerat. Vestibulum rhoncus augue sed scelerisque tempor. Donec non libero quis massa aliquam consectetur et eget purus.",
      "responsive-block-editor-addons"
    ),
  },
  text4: {
    type: "string",
    default: __(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ullamcorper erat. Praesent luctus maximus nisl id placerat. Vestibulum rhoncus augue sed scelerisque tempor. Donec non libero quis massa aliquam consectetur et eget purus.",
      "responsive-block-editor-addons"
    ),
  },
  displayTitle: {
    type: "boolean",
    default: true,
  },
  displaySubtitle: {
    type: "boolean",
    default: true,
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
    default: __("Title", "responsive-block-editor-addons"),
  },
  blockSubtitle: {
    type: "string",
    default: __("Subtitle", "responsive-block-editor-addons"),
  },
  displayColumnSeparator: {
    type: "boolean",
    default: false,
  },
  contentAlign: {
    type: "string",
    default: "left",
  },
  //Atrributes in Style Panel
  columnDividerHeight: {
    type: "number",
    default: 100,
  },
  columnDividerHeightTablet: {
    type: "number",
  },
  columnDividerHeightMobile: {
    type: "number",
    default: 2,
  },
  columnDividerWidth: {
    type: "number",
    default: 2,
  },
  columnDividerWidthTablet: {
    type: "number",
  },
  columnDividerWidthMobile: {
    type: "number",
    default: 100,
  },
  dividerColor: {
    type: "string",
    default: "#ccc",
  },
  contentPadding: {
    type: "number",
  },
  contentPaddingTablet: {
    type: "number",
  },
  contentPaddingMobile: {
    type: "number",
  },
  titleBottomMargin: {
    type: "number",
    default: 10,
  },
  titleBottomMarginTablet: {
    type: "number",
  },
  titleBottomMarginMobile: {
    type: "number",
  },
  subtitleBottomMargin: {
    type: "number",
    default: 15,
  },
  subtitleBottomMarginTablet: {
    type: "number",
  },
  subtitleBottomMarginMobile: {
    type: "number",
  },
  textBottomMargin: {
    type: "number",
    default: 0,
  },
  textBottomMarginTablet: {
    type: "number",
  },
  textBottomMarginMobile: {
    type: "number",
  },
  textAlign: {
    type: "string",
    default: "",
  },
  subtitleAlign: {
    type: "string",
    default: "",
  },
  titleAlign: {
    type: "string",
    default: "",
  },
  textColor: {
    type: "string",
  },
  titleColor: {
    type: "string",
  },
  subtitleColor: {
    type: "string",
  },
  titleFontFamily: {
    type: "string",
  },
  titleFontSize: {
    type: "number",
  },
  titleFontSizeMobile: {
    type: "number",
  },
  titleFontSizeTablet: {
    type: "number",
  },
  titleFontWeight: {
    type: "string",
  },
  titleLineHeight: {
    type: "string",
  },
  subtitleFontFamily: {
    type: "string",
  },
  subtitleFontSize: {
    type: "number",
  },
  subtitleFontSizeMobile: {
    type: "number",
  },
  subtitleFontSizeTablet: {
    type: "number",
  },
  subtitleFontWeight: {
    type: "string",
  },
  subtitleLineHeight: {
    type: "string",
  },
  textFontFamily: {
    type: "string",
  },
  textFontSize: {
    type: "number",
  },
  textFontSizeMobile: {
    type: "number",
  },
  textFontSizeTablet: {
    type: "number",
  },
  textFontWeight: {
    type: "string",
  },
  textLineHeight: {
    type: "string",
  },
  titleLeftMargin: {
    type: "number",
  },
  titleLeftMarginTablet: {
    type: "number",
  },
  titleLeftMarginMobile: {
    type: "number",
  },
  titleRightMargin: {
    type: "number",
  },
  titleRightMarginTablet: {
    type: "number",
  },
  titleRightMarginMobile: {
    type: "number",
  },
  subtitleLeftMargin: {
    type: "number",
  },
  subtitleLeftMarginTablet: {
    type: "number",
  },
  subtitleLeftMarginMobile: {
    type: "number",
  },
  subtitleRightMargin: {
    type: "number",
  },
  subtitleRightMarginTablet: {
    type: "number",
  },
  subtitleRightMarginMobile: {
    type: "number",
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
