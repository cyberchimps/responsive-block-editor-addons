const ITEM_COUNT = 1;

const flipboxArray = [];
const defaultIcons = ["accusoft", "acquisitions-incorporated", "ad"];
const defaultBackIcons = ["address-book", "address-card", "adjust"];
for (var i = 1; i <= ITEM_COUNT; i++) {
  flipboxArray.push({
    title: "Front Title " + i,
    subtitle: "Front Subtitle " + i,
    back_title: "Back Title " + i,
    back_subtitle: "Back Subtitle " + i,
    icon: defaultIcons[i - 1],
    back_icon: defaultBackIcons[i - 1],
    front_button: "Button" + i,
    front_buttonURL: "",
    back_button: "Button" + i,
    back_buttonURL: "",
  });
}

const attributes = {
  block_id: {
    type: "string",
  },
  flipboxArray: {
    type: "array",
    default: flipboxArray,
  },
  count: {
    type: "number",
    default: ITEM_COUNT,
  },
  height: {
    type: "number",
    default: 420,
  },
  iconSize: {
    type: "number",
    default: 50,
  },
  backIconSize: {
    type: "number",
    default: 50,
  },
  transitionSpeed: {
    type: "number",
    default: 8,
  },
  backgroundImage: {
    type: "string",
  },
  backgroundPosition: {
    type: "string",
    default: "center center",
  },
  backgroundAttachment: {
    type: "string",
    default: "scroll",
  },
  backgroundRepeat: {
    type: "string",
    default: "no-repeat",
  },
  backgroundSize: {
    type: "string",
    default: "cover",
  },
  backBackgroundImage: {
    type: "string",
  },
  backBackgroundPosition: {
    type: "string",
    default: "center center",
  },
  backBackgroundAttachment: {
    type: "string",
    default: "scroll",
  },
  backBackgroundRepeat: {
    type: "string",
    default: "no-repeat",
  },
  backBackgroundSize: {
    type: "string",
    default: "cover",
  },
  colorOpacity: {
    type: "number",
    default: 30,
  },
  backColorOpacity: {
    type: "number",
    default: 30,
  },
  imageOpacity: {
    type: "number",
    default: 30,
  },
  backImageOpacity: {
    type: "number",
    default: 30,
  },
  buttonbackgroundType: {
    type: "string",
    default: "none",
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
    default: "#fff",
  },
  ctaHoverColor: {
    type: "string",
  },
  ctaHoverBackColor: {
    type: "string",
  },
  buttonopacity: {
    type: "number",
    default: 100,
  },
  buttonHopacity: {
    type: "number",
    default: 100,
  },
  buttonHbackgroundType: {
    type: "string",
    default: "none",
  },
  buttonHcolorLocation1: {
    type: "number",
    default: 0,
  },
  buttonHcolorLocation2: {
    type: "number",
    default: 100,
  },
  buttonHgradientDirection: {
    type: "number",
    default: 90,
  },
  buttonHbackgroundColor1: {
    type: "string",
  },
  buttonHbackgroundColor2: {
    type: "string",
    default: "#fff",
  },
  ctaHpadding: {
    type: "number",
    default: 20,
  },
  ctaVpadding: {
    type: "number",
    default: 10,
  },
  ctaVpaddingTablet: {
    type: "number",
    default: 10,
  },
  ctaVpaddingMobile: {
    type: "number",
    default: 10,
  },
  ctaHpaddingTablet: {
    type: "number",
    default: 20,
  },
  ctaHpaddingMobile: {
    type: "number",
    default: 20,
  },
  iconSelected: {
    type: "string",
    default: "editor-textcolor",
  },
  flipStyleSelected: {
    type: "string",
    default: "LTR",
  },
  align: {
    type: "string",
    default: "wide",
  },
  gutter: {
    type: "string",
    default: "medium",
  },
  contentAlign: {
    type: "string",
    default: "center",
  },
  frontTextColor: {
    type: "string",
  },
  frontBackgroundColor: {
    type: "string",
  },
  backTextColor: {
    type: "string",
  },
  backBackgroundColor: {
    type: "string",
  },
  ctaBackColor: {
    type: "string",
  },
  ctaColor: {
    type: "string",
  },
  iconColor: {
    type: "string",
  },
  backIconColor: {
    type: "string",
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
  showFrontIcon: {
    type: "boolean",
    default: "true",
  },
  showFrontTitle: {
    type: "boolean",
    default: "true",
  },
  showFrontSubtitle: {
    type: "boolean",
    default: "true",
  },
  showBackIcon: {
    type: "boolean",
    default: "true",
  },
  showBackTitle: {
    type: "boolean",
    default: "true",
  },
  showBackSubtitle: {
    type: "boolean",
    default: "true",
  },
  showBackButton: {
    type: "boolean",
    default: "true",
  },
  colorButtonSelected: {
    type: "string",
  },
  topMargin: {
    type: "number",
    default: 0,
  },
  topMarginMobile: {
    type: "number",
    default: 0,
  },
  topMarginTablet: {
    type: "number",
    default: 0,
  },
  bottomMargin: {
    type: "number",
    default: 0,
  },
  bottomMarginMobile: {
    type: "number",
    default: 0,
  },
  bottomMarginTablet: {
    type: "number",
    default: 0,
  },
  frontTopPadding: {
    type: "number",
    default: 0,
  },
  frontTopPaddingMobile: {
    type: "number",
    default: 0,
  },
  frontTopPaddingTablet: {
    type: "number",
    default: 0,
  },
  frontBottomPadding: {
    type: "number",
    default: 0,
  },
  frontBottomPaddingMobile: {
    type: "number",
    default: 0,
  },
  frontBottomPaddingTablet: {
    type: "number",
    default: 0,
  },
  frontLeftPadding: {
    type: "number",
    default: 0,
  },
  frontLeftPaddingTablet: {
    type: "number",
    default: 0,
  },
  frontLeftPaddingMobile: {
    type: "number",
    default: 0,
  },
  frontRightPadding: {
    type: "number",
    default: 0,
  },
  frontRightPaddingMobile: {
    type: "number",
    default: 0,
  },
  frontRightPaddingTablet: {
    type: "number",
    default: 0,
  },
  backTopPadding: {
    type: "number",
    default: 0,
  },
  backTopPaddingMobile: {
    type: "number",
    default: 0,
  },
  backTopPaddingTablet: {
    type: "number",
    default: 0,
  },
  backBottomPadding: {
    type: "number",
    default: 0,
  },
  backBottomPaddingMobile: {
    type: "number",
    default: 0,
  },
  backBottomPaddingTablet: {
    type: "number",
    default: 0,
  },
  backLeftPadding: {
    type: "number",
    default: 0,
  },
  backLeftPaddingMobile: {
    type: "number",
    default: 0,
  },
  backLeftPaddingTablet: {
    type: "number",
    default: 0,
  },
  backRightPadding: {
    type: "number",
    default: 0,
  },
  backRightPaddingMobile: {
    type: "number",
    default: 0,
  },
  backRightPaddingTablet: {
    type: "number",
    default: 0,
  },
  ctaBorderStyle: {
    type: "string",
  },
  ctaBorderWidth: {
    type: "number",
    default: 0,
  },
  ctaBorderRadius: {
    type: "number",
    default: 0,
  },
  ctaBorderColor: {
    type: "string",
    default: "#0066cc",
  },
  ctaHoverBorderColor: {
    type: "string",
    default: "#0066cc",
  },
  ctaTextOpacity: {
    type: "number",
    default: 100,
  },
  flipBoxGutterGap: {
    type: "number",
    default: 10,
  },
  stack: {
    type: "string",
    default: "mobile",
  }
};

export default attributes;
