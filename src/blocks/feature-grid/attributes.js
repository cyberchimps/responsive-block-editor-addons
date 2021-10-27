const ITEM_COUNT = 2;

const { __ } = wp.i18n;

const featureList = [];

for (var i = 1; i <= ITEM_COUNT; i++) {
  featureList.push({
    featureName: __("John Doe", "responsive-block-editor-addons"),
    featureDescription: __(
      "Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      "responsive-block-editor-addons"
    ),
    featureImgURL: "",
    featureImgId: "",
  });
}

const attributes = {
  block_id: {
    type: "string",
  },
  featureList: {
    type: "array",
    default: featureList,
  },
  counterId: {
    type: "string",
    default: 1,
  },
  count: {
    type: "number",
    default: ITEM_COUNT,
  },
  gutter: {
    type: "string",
    default: "medium",
  },
  descriptionColor: {
    type: "string",
  },
  socialIconColor: {
    type: "string",
    default: "#0066CC",
  },
  titleColor: {
    type: "string",
  },
  titleFontWeight: {
    type: "string",
  },
  descriptionFontWeight: {
    type: "string",
  },
  titleLineHeight: {
    type: "number",
  },
  descriptionLineHeight: {
    type: "number",
  },
  imageSize: {
    type: "string",
    default: "full",
  },
  titleFontFamily: {
    type: "string",
  },
  descriptionFontFamily: {
    type: "string",
  },
  titleFontSize: {
    type: "number",
    default: 23,
  },
  descriptionFontSize: {
    type: "number",
    default: 15,
  },
  socialIconFontSize: {
    type: "number",
    default: 23,
  },
  imageMarginTop: {
    type: "number",
  },
  imageMarginBottom: {
    type: "number",
  },
  imageMarginTopMobile: {
    type: "number",
  },
  imageMarginBottomMobile: {
    type: "number",
  },
  imageMarginTopTablet: {
    type: "number",
  },
  imageMarginBottomTablet: {
    type: "number",
  },
  iconSize: {
    type: "string",
  },
  titleSpacing: {
    type: "number",
  },
  descriptionSpacing: {
    type: "number",
  },
  socialIconSpacing: {
    type: "number",
  },
  titleSpacingMobile: {
    type: "number",
  },
  descriptionSpacingMobile: {
    type: "number",
  },
  socialIconSpacingMobile: {
    type: "number",
  },
  titleSpacingTablet: {
    type: "number",
  },
  descriptionSpacingTablet: {
    type: "number",
  },
  socialIconSpacingTablet: {
    type: "number",
  },
  imageStyle: {
    type: "number",
    default: "0%",
  },
  imageWidth: {
    type: "number",
    default: 120,
  },
  imageWidthTablet: {
    type: "number",
  },
  imageWidthMobile: {
    type: "number",
  },
  backgroundColor: {
    type: "string",
  },
  borderColor: {
    type: "string",
  },
  borderWidth: {
    type: "number",
    default: 2,
  },
  borderRadius: {
    type: "number",
    default: 2,
  },
  padding: {
    type: "number",
    default: 2,
  },
  alignment: {
    type: "string",
    default: "center",
  },
  imageShape: {
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
  opacity: {
    type: "number",
    default: 50,
  },
  backgroundColor2: {
    type: "string",
  },
  gradientDirection: {
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
  bgGradient: {
    type: "bool",
  },
  backgroundImage: {
    type: "string",
  },
  backgroundImagePosition: {
    type: "string",
    default: "center-center",
  },
  backgroundImageRepeat: {
    type: "string",
    default: "no-repeat",
  },
  backgroundImageSize: {
    type: "string",
    default: "cover",
  },
  backgroundAttachment: {
    type: "string",
    default: "scroll",
  },
  showImage: {
    type: "bool",
    default: true,
  },
  showName: {
    type: "bool",
    default: true,
  },
  showDescription: {
    type: "bool",
    default: true,
  },
  showSocialIcons: {
    type: "bool",
    default: true,
  },
  facebook: {
    type: "bool",
  },
  twitter: {
    type: "bool",
  },
  linkedin: {
    type: "bool",
  },
  instagram: {
    type: "bool",
  },
  email: {
    type: "bool",
  },
  youtube: {
    type: "bool",
  },
  pinterest: {
    type: "bool",
  },
  stack: {
    type: "string",
    default: "mobile",
  },
  titleFontSizeMobile: {
	  type: "number",
  },
  titleFontSizeTablet: {
	  type: "number",
  },
  descriptionFontSizeMobile: {
	  type: "number",
  },
  descriptionFontSizeTablet: {
	  type: "number",
  },
  socialIconBorderColor: {
    type: "string",
  },
  socialIconHoverColor: {
    type: "string",
  },
  socialIconBackgroundHoverColor: {
    type: "string",
  },
  socialIconBackgroundColor: {
    type: "string",
  },
  socialIconBorderHoverColor: {
    type: "string",
  },
  iconBackgroundSize: {
    type: "number",
  },
  iconBorderSize: {
    type: "number",
    default: 0
  },
  iconBorderRadius: {
    type: "number",
  },
};
export default attributes;
