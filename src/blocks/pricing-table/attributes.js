const ITEM_COUNT = 2;

const pricingTable = [];

for (var i = 1; i <= ITEM_COUNT; i++) {
  pricingTable.push({
    title: "Plan " + i,
    amount: "",
    currency: "$",
    price_suffix: ".00",
    sub_price: "SUB PRICE",
    features: [],
    img_url: "",
    img_id: "",
    img_width: "",
    img_height: "",
    button: "Button" + i,
    buttonURL: "#",
  });
}

const attributes = {
  block_id: {
    type: "string",
  },
  pricingTable: {
    type: "array",
    default: pricingTable,
  },
  blockId: {
    type: "string",
  },
  count: {
    type: "number",
    default: ITEM_COUNT,
  },
  gutter: {
    type: "string",
    default: "medium",
  },
  contentAlign: {
    type: "string",
    default: "center",
  },
  textColor: {
    type: "string",
  },
  titleColor: {
    type: "string",
  },
  prefixColor: {
    type: "string",
  },
  priceColor: {
    type: "string",
  },
  suffixColor: {
    type: "string",
  },
  subpriceColor: {
    type: "string",
  },
  featuresColor: {
    type: "string",
  },
  itemBackgroundColor: {
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
    default: 0,
  },
  blockBorderColor: {
    type: "string",
  },
  sectionTag: {
    type: "string",
    default: "section",
  },
  opacity: {
    type: "number",
    default: 30,
  },
  blockBackColorOpacity: {
    type: "number",
    default: 100,
  },
  columnBackColorOpacity: {
    type: "number",
    default: 100,
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
  backgroundImage: {
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
    default: "#fff",
  },
  backgroundType: {
    type: "string",
    default: "none",
  },
  blockopacity: {
    type: "number",
    default: 30,
  },
  blockcolorLocation1: {
    type: "number",
    default: 0,
  },
  blockcolorLocation2: {
    type: "number",
    default: 100,
  },
  blockgradientDirection: {
    type: "number",
    default: 90,
  },
  blockbackgroundImage: {
    type: "string",
  },
  blockbackgroundColor: {
    type: "string",
  },
  blockbackgroundColor1: {
    type: "string",
  },
  blockbackgroundColor2: {
    type: "string",
    default: "#fff",
  },
  blockbackgroundType: {
    type: "string",
    default: "none",
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
  buttonBoxShadowColor: {
    type: "string",
  },
  buttonBoxShadowHOffset: {
    type: "number",
    default: 0,
  },
  buttonBoxShadowVOffset: {
    type: "number",
    default: 0,
  },
  buttonBoxShadowBlur: {
    type: "number",
    default: 0,
  },
  buttonBoxShadowSpread: {
    type: "number",
    default: 0,
  },
  buttonBoxShadowPosition: {
    type: "string",
    default: "outset",
  },
  ctaColor: {
    type: "string",
    default: "#ffffff",
  },
  ctaBackColor: {
    type: "string",
    default: "#3f46ae",
  },
  ctaHoverColor: {
    type: "string",
    default: "#ffffff",
  },
  ctaHoverBackColor: {
    type: "string",
    default: "#3f46ae",
  },
  ctaBorderColor: {
    type: "string",
    default: "#333",
  },
  ctaHoverBorderColor: {
    type: "string",
    defaulr: "#333",
  },
  ctaBorderStyle: {
    type: "string",
    default: "none",
  },
  ctaBorderRadius: {
    type: "number",
    default: 0,
  },
  ctaBorderWidth: {
    type: "number",
    default: 2,
  },
  ctaHpadding: {
    type: "number",
    default: 30,
  },
  ctaVpadding: {
    type: "number",
    default: 15,
  },
  buttonbackgroundType: {
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
    default: "#fff",
  },
  buttonHbackgroundType: {
    type: "string",
    default: "color",
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
  titleFontFamily: {
    type: "string",
  },
  amountFontFamily: {
    type: "string",
  },
  prefixFontFamily: {
    type: "string",
  },
  suffixFontFamily: {
    type: "string",
  },
  subpriceFontFamily: {
    type: "string",
  },
  featuresFontFamily: {
    type: "string",
  },
  ctaFontFamily: {
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
    type: "number",
  },
  amountFontSize: {
    type: "number",
  },
  amountFontSizeMobile: {
    type: "number",
  },
  amountFontSizeTablet: {
    type: "number",
  },
  amountFontWeight: {
    type: "string",
  },
  amountLineHeight: {
    type: "number",
  },
  subpriceFontSize: {
    type: "number",
  },
  subpriceFontSizeMobile: {
    type: "number",
  },
  subpriceFontSizeTablet: {
    type: "number",
  },
  subpriceFontWeight: {
    type: "string",
  },
  subpriceLineHeight: {
    type: "number",
  },
  subpriceTextTransform: {
    type: "string",
    default: "uppercase",
  },
  prefixFontSize: {
    type: "number",
  },
  prefixFontSizeMobile: {
    type: "number",
  },
  prefixFontSizeTablet: {
    type: "number",
  },
  prefixFontWeight: {
    type: "string",
  },
  prefixLineHeight: {
    type: "number",
  },
  suffixFontSize: {
    type: "number",
  },
  suffixFontSizeMobile: {
    type: "number",
  },
  suffixFontSizeTablet: {
    type: "number",
  },
  suffixFontWeight: {
    type: "string",
  },
  suffixLineHeight: {
    type: "number",
  },
  featuresFontSize: {
    type: "number",
  },
  featuresFontSizeMobile: {
    type: "number",
  },
  featuresFontSizeTablet: {
    type: "number",
  },
  featuresFontWeight: {
    type: "string",
  },
  featuresLineHeight: {
    type: "number",
  },
  ctaFontSize: {
    type: "number",
  },
  ctaFontSizeMobile: {
    type: "number",
  },
  ctaFontSizeTablet: {
    type: "number",
  },
  ctaFontWeight: {
    type: "string",
  },
  ctaLineHeight: {
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
  columnTopPadding: {
    type: "number",
    default: 64,
  },
  columnBottomPadding: {
    type: "number",
    default: 64,
  },
  columnLeftPadding: {
    type: "number",
    default: 24,
  },
  columnRightPadding: {
    type: "number",
    default: 24,
  },
  showImage: {
    type: "boolean",
    default: true,
  },
  showTitle: {
    type: "boolean",
    default: true,
  },
  showPrefix: {
    type: "boolean",
    default: true,
  },
  showPrice: {
    type: "boolean",
    default: true,
  },
  showSuffix: {
    type: "boolean",
    default: true,
  },
  showSubprice: {
    type: "boolean",
    default: true,
  },
  showFeatures: {
    type: "boolean",
    default: true,
  },
  showButton: {
    type: "boolean",
    default: true,
  },
  buttonTarget: {
    type: "boolean",
    default: false,
  },
  titleSpace: {
    type: "number",
  },
  priceSpace: {
    type: "number",
  },
  subpriceSpace: {
    type: "number",
    default: 0,
  },
  buttonSpace: {
    type: "number",
  },
  featuresSpace: {
    type: "number",
  },
  blockAlign: {
    type: "string",
    default: "center",
  },
  imageWidth: {
    type: "number",
  },
  imageSize: {
    type: "string",
    default: "full",
  },
  imageShape: {
    type: "string",
  },
  ctaHpaddingTablet: {
    type: "number",
    default: 30,
  },
  ctaHpaddingMobile: {
    type: "number",
    default: 30,
  },
  ctaVpaddingTablet: {
    type: "number",
    default: 15,
  },
  ctaVpaddingMobile: {
    type: "number",
    default: 15,
  },
  columnTopPaddingTablet: {
    type: "number",
    default: 64,
  },
  columnBottomPaddingTablet: {
    type: "number",
    default: 64,
  },
  columnLeftPaddingTablet: {
    type: "number",
    default: 24,
  },
  columnRightPaddingTablet: {
    type: "number",
    default: 24,
  },
  columnTopPaddingMobile: {
    type: "number",
    default: 64,
  },
  columnBottomPaddingMobile: {
    type: "number",
    default: 64,
  },
  columnLeftPaddingMobile: {
    type: "number",
    default: 24,
  },
  columnRightPaddingMobile: {
    type: "number",
    default: 24,
  },
};
export default attributes;
