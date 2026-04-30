const attributes = {
  block_id: {
    type: "string",
  },
  columnGap: {
    type: "number",
    default: 0
  },
  columnGapTablet: {
    type: "number",
    default: 0
  },
  columnGapMobile: {
    type: "number",
    default: 0
  },
  rowGap: {
    type: "number",
    default: ""
  },
  rowGapTablet: {
    type: "number",
    default: ""
  },
  rowGapMobile: {
    type: "number",
    default: ""
  },
  blockBorderWidth: {
    type: "number",
    default: "0"
  },
  blockBorderRadius: {
    type: "number",
    default: "0"
  },
  blockBorderStyle: {
    type: "string",
    default: "none"
  },
  blockBorderColor: {
    type: "string",
    default: "#333"
  },
  overlayTextAlign: {
    type: "string",
    default: "center"
  },
  overlayTextVerticalAlign: {
    type: "string",
    default: "center"
  },
  horizontalSpacing: {
    type: "number",
    default: 10
  },
  verticalSpacing: {
    type: "number",
    default: 15
  },
  overlayBackgroundColor: {
    type: "string",
    default: "#ff6f61"
  },
  overlayTextColor: {
    type: "string",
    default: "#fff"
  },
  overlayOpacity: {
    type: "number",
    default: 100
  },
  overlayTextFontFamily: {
    type: "string",
    default: ""
  },
  overlayTextFontSize: {
    type: "number",
    default: ""
  },
  overlayTextLineHeight: {
    type: "number",
    default: ""
  },
  overlayTextFontWeight: {
    type: "string",
    default: ""
  },
  overlayTextTextTransform: {
    type: "string",
    default: ""
  },
  postTitleTag: {
    type: "string",
    default: "h3"
  },
  itemRatio: {
    type: "number",
    default: 0.66
  },
  categories: {
    type: "string"
  },
  postsToShow: {
    type: "number",
    default: 6
  },
  displayPostTitle: {
    type: "boolean",
    default: true
  },
  displaySectionTitle: {
    type: "boolean",
    default: false
  },
  postLayout: {
    type: "string",
    default: "grid"
  },
  columns: {
    type: "number",
    default: 3
  },
  order: {
    type: "string",
    default: "desc"
  },
  orderBy: {
    type: "string",
    default: "date"
  },
  offset: {
    type: "number",
    default: 0
  },
  postType: {
    type: "string",
    default: "post"
  },
  postTaxonomy: {
    type: "string",
    default: "category"
  },
  taxonomyType: {
    type: "string",
    default: "category"
  },
  sectionTag: {
    type: "string",
    default: "section"
  },
  sectionTitle: {
    type: "string"
  },
  sectionTitleTag: {
    type: "string",
    default: "h2"
  },
  imageSize: {
    type: "string",
    default: "full"
  },
  id: {
    type: "number",
    default: ""
  },
  layout: {
    type: "string",
    default: "boxed"
  },
  contentPadding: {
    type: "number",
    default: 0
  },
  contentPaddingMobile: {
    type: "number",
    default: ""
  },
  mobileContentPadding: {
    type: "number",
    default: 999
  },
  contentPaddingTablet: {
    type: "number",
    default: ""
  },
  hideWidget: {
    type: "boolean",
    default: false
  },
  hideWidgetMobile: {
    type: "boolean",
    default: false
  },
  hideWidgetTablet: {
    type: "boolean",
    default: false
  },
  z_index: {
    type: "number",
    default: 1
  },
  z_indexMobile: {
    type: "number",
    default: 1
  },
  z_indexTablet: {
    type: "number",
    default: 1
  },
  blockTopMargin: {
    type: "number",
    default: ""
  },
  blockBottomMargin: {
    type: "number",
    default: ""
  },
  blockLeftMargin: {
    type: "number",
    default: ""
  },
  blockRightMargin: {
    type: "number",
    default: ""
  },
  blockTopMarginTablet: {
    type: "number",
    default: ""
  },
  blockBottomMarginTablet: {
    type: "number",
    default: ""
  },
  blockLeftMarginTablet: {
    type: "number",
    default: ""
  },
  blockRightMarginTablet: {
    type: "number",
    default: ""
  },
  blockTopMarginMobile: {
    type: "number",
    default: ""
  },
  blockBottomMarginMobile: {
    type: "number",
    default: ""
  },
  blockLeftMarginMobile: {
    type: "number",
    default: ""
  },
  blockRightMarginMobile: {
    type: "number",
    default: ""
  },
  blockIsMarginControlConnected: {
    type: "boolean",
    default: false
  },
  blockIsPaddingControlConnected: {
    type: "boolean",
    default: false
  },
  blockTopPadding: {
    type: "number",
    default: ""
  },
  blockTopPaddingMobile: {
    type: "number",
    default: ""
  },
  blockTopPaddingTablet: {
    type: "number",
    default: ""
  },
  blockBottomPadding: {
    type: "number",
    default: ""
  },
  blockBottomPaddingMobile: {
    type: "number",
    default: ""
  },
  blockBottomPaddingTablet: {
    type: "number",
    default: ""
  },
  blockLeftPadding: {
    type: "number",
    default: ""
  },
  blockLeftPaddingMobile: {
    type: "number",
    default: ""
  },
  blockLeftPaddingTablet: {
    type: "number",
    default: ""
  },
  blockRightPadding: {
    type: "number",
    default: ""
  },
  blockRightPaddingMobile: {
    type: "number",
    default: ""
  },
  blockRightPaddingTablet: {
    type: "number",
    default: ""
  },
  blockTopRadius: {
    type: "number",
    default: "0"
  },
  blockRightRadius: {
    type: "number",
    default: "0"
  },
  blockBottomRadius: {
    type: "number",
    default: "0"
  },
  blockLeftRadius: {
    type: "number",
    default: "0"
  },
  blockTopRadiusTablet: {
    type: "number",
    default: "0"
  },
  blockRightRadiusTablet: {
    type: "number",
    default: "0"
  },
  blockBottomRadiusTablet: {
    type: "number",
    default: "0"
  },
  blockLeftRadiusTablet: {
    type: "number",
    default: "0"
  },
  blockTopRadiusMobile: {
    type: "number",
    default: "0"
  },
  blockRightRadiusMobile: {
    type: "number",
    default: "0"
  },
  blockBottomRadiusMobile: {
    type: "number",
    default: "0"
  },
  blockLeftRadiusMobile: {
    type: "number",
    default: "0"
  },
  blockIsRadiusControlConnected: {
    type: "boolean",
    default: false
  },
  blockIsRadiusValueUpdated: {
    type: "boolean",
    default: false
  },
  blockIsTypographyColorValueUpdated: {
    type: "boolean",
    default: false
  },
  overlayTextTypographyColor: {
    type: "string",
    default: "#fff"
  },
  overlayTextTextDecoration: {
    type: "string",
    default: "",
  },
  overlayTextFontStyle: {
    type: "string",
    default: ""
  },
  excludeCurrentPost: {
    type: "boolean",
    default: true,
  },
  isPreview: {
    type: "boolean",
    default: false, 
  },
};

export default attributes;