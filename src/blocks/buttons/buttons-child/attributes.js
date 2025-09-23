const attributes = {
  block_id: {
    type: "string",
  },
  buttonAlignment: {
    type: "string",
    default: "center",
  },
  fontFamily: {
    type: "string",
    default: "Default",
  },
  fontWeight: {
    type: "string",
  },
  fontSubset: {
    type: "string",
  },
  label: {
    type: "string",
    default: "#Click Here",
  },
  link: {
    type: "string",
    default: "",
  },
  target: {
    type: "boolean",
    default: true,
  },
  iconsize: {
    type: "number",
    default: 16,
  },
  counterId: {
    type: "string",
    default: 1,
  },
  vPadding: {
    type: "number",
    default: 10,
  },
  hPadding: {
    type: "number",
    default: 14,
  },
  vPaddingTablet: {
    type: "number",
  },
  hPaddingTablet: {
    type: "number",
  },
  vPaddingMobile: {
    type: "number",
  },
  hPaddingMobile: {
    type: "number",
  },
  vMargin: {
    type: "number",
    default: 10,
  },
  vMarginTablet: {
    type: "number",
  },
  vMarginMobile: {
    type: "number",
  },
  hMargin: {
    type: "number",
    default: 14,
  },
  hMarginTablet: {
    type: "number",
  },
  hMarginMobile: {
    type: "number",
  },
  borderWidth: {
    type: "number",
    default: 0,
  },
  borderRadius: {
    type: "number",
    default: 0,
  },
  borderStyle: {
    type: "string",
    default: "none",
  },
  borderColor: {
    type: "string",
    default: "#000",
  },
  borderHColor: {
    type: "string",
  },
  color: {
    type: "string",
    default: "white",
  },
  background: {
    type: "string",
    default: "#007cba",
  },
  hColor: {
    type: "string",
    // default: "red",
  },
  sizeType: {
    type: "string",
    default: "px",
  },
  sizeMobile: {
    type: "number",
    default: "",
  },
  sizeTablet: {
    type: "number",
    default: "",
  },
  lineHeight: {
    type: "number",
    default: "",
  },
  lineHeightType: {
    type: "string",
    default: "em",
  },
  lineHeightMobile: {
    type: "number",
    default: "",
  },
  lineHeightTablet: {
    type: "number",
    default: "",
  },
  opensInNewTab: {
    type: "boolean",
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
  backgroundColor1: {
    type: "string",
  },
  backgroundColor2: {
    type: "string",
  },
  opacity: {
    type: "number",
    default: 100,
  },
  icon: {
    type: "string",
    default: "",
  },
  iconPosition: {
    type: "string",
    default: "after",
  },
  buttonFontFamily: {
    type: "string",
  },
  buttonFontSize: {
    type: "number",
  },
  buttonFontSizeTablet: {
    type: "number",
  },
  buttonFontSizeMobile: {
    type: "number",
  },
  buttonLineHeight: {
    type: "number",
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
  hoverboxShadowColor: {
    type: 'string',
  },
  hoverboxShadowHOffset: {
    type: 'number',
    default: 0
  },
  hoverboxShadowVOffset: {
    type: 'number',
    default: 0
  },
  hoverboxShadowBlur: {
    type: 'number',
    default: 0
  },
  hoverboxShadowSpread: {
    type: 'number',
    default: 0
  },
  hoverboxShadowPosition: {
    type: 'string',
    default: 'outset'
  },
  icon_color: {
    type: "string",
    // default: "#3a3a3a",
  },
  icon_hover_color: {
    type: "string",
  },
  hbackground: {
    type: "string",
  },
  iconSpace: {
    type: "number",
    default: 8,
  },
  buttonFontWeight: {
    type: "string",
    default: "400",
  },
  inheritFromTheme: {
    type: "boolean",
    default: false,
  },
  hoverEffect: {
    type: "string",
  },
  backgroundType: {
    type: "string",
    default: "color",
  },
  z_index: {
    type: "number",
    default: 1,
  },
  z_indexMobile: {
    type: "number",
    default: 1,
  },
  z_indexTablet: {
    type: "number",
    default: 1,
  },
  blockTopPadding: {
    type: "number",
    default: 10,
  },
  blockTopPaddingMobile: {
    type: "number",
  },
  blockTopPaddingTablet: {
    type: "number",
  },
  blockBottomPadding: {
    type: "number",
    default: 10,
  },
  blockBottomPaddingMobile: {
    type: "number",
  },
  blockBottomPaddingTablet: {
    type: "number",
  },
  blockLeftPadding: {
    type: "number",
    default: 14,
  },
  blockLeftPaddingMobile: {
    type: "number",
  },
  blockLeftPaddingTablet: {
    type: "number",
  },
  blockRightPadding: {
    type: "number",
    default: 14,
  },
  blockRightPaddingMobile: {
    type: "number",
  },
  blockRightPaddingTablet: {
    type: "number",
  },
  blockTopMargin: {
    type: "number",
    default: 10,
  },
  blockBottomMargin: {
    type: "number",
    default: 10,
  },
  blockLeftMargin: {
    type: "number",
    default: 14,
  },
  blockRightMargin: {
    type: "number",
    default: 14,
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
  blockIsMarginValueUpdated : {
    type: "boolean",
    default: false,
  },
  blockIsPaddingValueUpdated: {
    type: "boolean",
    default: false,
  },
  blockTopRadius : {
    type: "number",
    default: 2,
  },
	blockRightRadius : {
    type: "number",
    default: 2,
  },
	blockBottomRadius : {
    type: "number",
    default: 2,
  },
	blockLeftRadius : {
    type: "number",
    default: 2,
  },
  blockTopRadiusMobile: {
    type: "number",
    default: 2,
  },
	blockRightRadiusMobile: {
    type: "number",
    default: 2,
  },
	blockBottomRadiusMobile: {
    type: "number",
    default: 2,
  },
	blockLeftRadiusMobile: {
    type: "number",
    default: 2,
  },
  blockTopRadiusTablet: {
    type: "number",
    default: 2,
  },
	blockRightRadiusTablet: {
    type: "number",
    default: 2,
  },
	blockBottomRadiusTablet: {
    type: "number",
    default: 2,
  },
	blockLeftRadiusTablet: {
    type: "number",
    default: 2,
  },
  typographyOpacity: {
    type: "number",
    default: 100,
  },
  borderOpacity: {
    type: "number",
    default: 100,
  },
  buttonTextTransform: {
    type: "string",
    default: "",
  },
  buttonFontStyle: {
    type: "string",
    default: "",
  },
  buttonPreset: {
    type: "string",
    default: "preset1",
  },
  noFollow: {
    type: "boolean",
    default: false,
  },
};

export default attributes;
