const attributes = {
  block_id: {
    type: "string",
  },
  buttonText: {
    type: "string",
  },
  buttonTextFontFamily: {
    type: "string"
  },
  buttonTextFontSize: {
    type: "number",
    default: 18
  },
  buttonTextFontSizeMobile: {
    type: "number",
    default: 16
  },
  buttonTextFontSizeTablet: {
    type: "number",
    default: 16
  },
  buttonTextLineHeight: {
    type: "number",
    default: 1
  },
  buttonTextFontWeight: {
    type: "string",
    default: "400"
  },
  buttonUrl: {
    type: "string",
    source: "attribute",
    selector: "a",
    attribute: "href",
  },
  buttonAlignment: {
    type: "string",
    default: "center",
  },
  ctaBackColor: {
    type: "string",
    default: "#2091e1",
  },
  ctaColor: {
    type: "string",
    default: "#fff",
  },
  buttonSize: {
    type: "string",
    default: "responsive-block-editor-addons-cta-button-size-medium",
  },
  buttonShape: {
    type: "string",
    default: "responsive-block-editor-addons-cta-button-shape-rounded",
  },
  buttonTarget: {
    type: "boolean",
    default: false,
  },
  ctaTitle: {
    type: "array",
    selector: ".responsive-block-editor-addons-cta-title",
    source: "children",
  },
  ctaTitleFontFamily: {
    type: "string",
  },
  ctaTextFontFamily: {
    type: "string",
  },
  ctaTitleFontSize: {
    type: "number",
    default: "22",
  },
  ctaTitleFontSizeMobile: {
    type: "number",
    default: "22",
  },
  ctaTitleFontSizeTablet: {
    type: "number",
    default: "22",
  },
  ctaTextFontSize: {
    type: "number",
    default: "16",
  },
  ctaTextFontSizeMobile: {
    type: "number",
    default: "16",
  },
  ctaTextFontSizeTablet: {
    type: "number",
    default: "16",
  },
  ctaText: {
    type: "array",
    selector: ".responsive-block-editor-addons-cta-text",
    source: "children",
  },
  ctaWidth: {
    type: "string",
  },
  backgroundColor: {
    type: "string",
    default: "#f2f2f2",
  },
  ctaTextColor: {
    type: "string",
  },
  backgroundImage: {
    type: "string",
  },
  imgID: {
    type: "number",
  },
  imgAlt: {
    type: "string",
    source: "attribute",
    attribute: "alt",
    selector: "img",
  },
  dimRatio: {
    type: "number",
    default: 50,
  },
  opacity: {
    type: "number",
    default: 100,
  },
  ctaTitleLineHeight: {
    type: "number",
    default: 1.8,
  },
  ctaTitleFontWeight: {
    type: "string",
    default: "400",
  },
  ctaTextLineHeight: {
    type: "number",
    default: 1.75,
  },
  ctaTextFontWeight: {
    type: "string",
    default: "400",
  },
  ctaVpadding: {
    type: "number",
    default: 10,
  },
  ctaHpadding: {
    type: "number",
    default: 14,
  },
  ctaVpaddingMobile: {
    type: "number",
    default: 14,
  },
  ctaVpaddingTablet: {
    type: "number",
    default: 14,
  },
  ctaHpaddingMobile: {
    type: "number",
    default: 14,
  },
  ctaHpaddingTablet: {
    type: "number",
    default: 14,
  },
  ctaBorderWidth: {
    type: "number",
    default: 1,
  },
  ctaBorderStyle: {
    type: "string",
    default: "solid",
  },
  ctaBorderRadius: {
    type: "string",
    default: 0,
  },
  icon: {
    type: "string",
    default: "",
  },
  iconPosition: {
    type: "string",
    default: "after",
  },
  counterId: {
    type: "string",
    default: 1,
  },
  ctaHoverBackColor: {
    type: "string",
  },
  ctaHoverColor: {
    type: "string",
    default: "#e6f2ff",
  },
  ctaBorderColor: {
    type: "string",
  },
  ctaHoverBorderColor: {
    type: "string",
  },
  resctaType: {
    type: "string",
    default: "button",
  },
  ctalinkText: {
    type: "string",
  },
  titleSpace: {
    type: "number",
    default: 25,
  },
  titleSpaceMobile: {
    type: "number",
    default: 25,
  },
  titleSpaceTablet: {
    type: "number",
    default: 25,
  },
  subtitleSpace: {
    type: "number",
    default: 28,
  },
  subtitleSpaceMobile: {
    type: "number",
    default: 28,
  },
  subtitleSpaceTablet: {
    type: "number",
    default: 28,
  },
  iconSpace: {
    type: "number",
    default: 8,
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
  backgroundType: {
    type: "string",
    default: "color",
  },
  buttoncolorLocation1: {
    type: "number",
    default: 0,
  },
  buttoncolorLocation2: {
    type: "number",
    default: 100,
  },
  buttongradientDirection: {
    type: "number",
    default: 90,
  },
  buttonbackgroundColor1: {
    type: "string",
  },
  buttonbackgroundColor2: {
    type: "string",
  },
  buttonbackgroundType: {
    type: "string",
    default: "color",
  },
  boxShadowColor: {
    type: "string",
  },
  boxShadowHOffset: {
    type: "number",
    default: 0,
  },
  ctaTextOpacity: {
    type: "number",
    default: 100,
  },
  boxShadowVOffset: {
    type: "number",
    default: 0,
  },
  boxShadowBlur: {
    type: "number",
  },
  boxShadowSpread: {
    type: "number",
  },
  boxShadowPosition: {
    type: "string",
    default: "outset",
  },
  icon_color: {
    type: "string",
    default: "#3a3a3a",
  },
  bTopPadding: {
    type: "number",
    default: 20,
  },
  bTopPaddingMobile: {
    type: "number",
    default: 20,
  },
  bTopPaddingTablet: {
    type: "number",
    default: 20,
  },
  bBottomPadding: {
    type: "number",
    default: 20,
  },
  bBottomPaddingMobile: {
    type: "number",
    default: 20,
  },
  bBottomPaddingTablet: {
    type: "number",
    default: 20,
  },
  bLeftPadding: {
    type: "number",
    default: 20,
  },
  bLeftPaddingMobile: {
    type: "number",
    default: 20,
  },
  bLeftPaddingTablet: {
    type: "number",
    default: 20,
  },
  bRightPadding: {
    type: "number",
    default: 20,
  },
  bRightPaddingMobile: {
    type: "number",
    default: 20,
  },
  bRightPaddingTablet: {
    type: "number",
    default: 20,
  },
  backgroundImagePosition: {
    type: "string",
    default: "center center",
  },
  backgroundImageRepeat: {
    type: "string",
    default: "no-repeat",
  },
  backgroundImageSize: {
    type: "string",
    default: "cover",
  },
  buttonSpace: {
    type: "number",
    default: 28,
  },
  buttonSpaceMobile: {
    type: "number",
    default: 28,
  },
  buttonSpaceTablet: {
    type: "number",
    default: 28,
  },
  borderRadius: {
    type: "number",
    default: 12,
  },
};
export default attributes;
