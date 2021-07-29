const ITEM_COUNT = 2;

const testimonialBlock = [];

for (var i = 1; i <= ITEM_COUNT; i++) {
  testimonialBlock.push({
    testimonialName: "",
    testimonialTitle: "",
    testimonialContent: "",
    testimonialImgURL: "",
    testimonialImgID: "",
  });
}

const attributes = {
  block_id: {
    type: "string",
  },
  testimonialBlock: {
    type: "array",
    default: testimonialBlock,
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
  testimonialAlignment: {
    type: "string",
  },
  backgroundColor: {
    type: "string",
    default: "#f2f2f2",
  },
  testimonialTextColor: {
    type: "string",
  },
  testimonialNameColor: {
    type: "string",
  },
  testimonialTitleColor: {
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
  titleLineHeight: {
    type: "number",
  },
  titleFontWeight: {
    type: "string",
  },
  titleTextTransform: {
    type: "string",
  },
  nameFontSize: {
    type: "number",
  },
  nameFontSizeMobile: {
    type: "number",
  },
  nameFontSizeTablet: {
    type: "number",
  },
  nameLineHeight: {
    type: "number",
  },
  imageWidth: {
    type: "number",
  },
  nameFontFamily: {
    type: "string",
  },
  titleFontFamily: {
    type: "string",
  },
  contentFontFamily: {
    type: "string",
  },
  nameFontWeight: {
    type: "string",
  },
  nameTextTransform: {
    type: "string",
  },
  contentFontSize: {
    type: "number",
  },
  contentFontSizeMobile: {
    type: "number",
  },
  contentFontSizeTablet: {
    type: "number",
  },
  contentLineHeight: {
    type: "number",
    default: 1.6,
  },
  contentFontWeight: {
    type: "string",
  },
  contentTextTransform: {
    type: "string",
  },
  testimonialCiteAlign: {
    type: "string",
    default: "left-aligned",
  },
  backgroundColor: {
    type: "string",
    default: "#f2f2f2",
  },
  blockBorderStyle: {
    type: "string",
    default: "none",
  },
  blockBorderWidth: {
    type: "number",
    default: 1,
  },
  blockBorderColor: {
    type: "string",
  },
  blockBorderRadius: {
    type: "number",
    default: 2,
  },
  padding: {
    type: "number",
    default: 20,
  },
  paddingTablet: {
    type: "number",
    default: 20,
  },
  paddingMobile: {
    type: "number",
    default: 20,
  },
  contentSpacing: {
    type: "number",
    default: 8,
  },
  contentSpacingTablet: {
    type: "number",
    default: 8,
  },
  contentSpacingMobile: {
    type: "number",
    default: 8,
  },
  titleSpacing: {
    type: "number",
  },
  nameSpacing: {
    type: "number",
    default: -5,
  },
  imageSpacing: {
    type: "number",
  },
  alignment: {
    type: "string",
    default: "center",
  },
  imageShape: {
    type: "string",
  },
  imageSize: {
    type: "string",
    default: "full",
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
    type: "string",
    default: "#cccccc",
  },
  hoverboxShadowHOffset: {
    type: "number",
    default: 0,
  },
  hoverboxShadowVOffset: {
    type: "number",
    default: 0,
  },
  hoverboxShadowBlur: {
    type: "number",
    default: 6,
  },
  hoverboxShadowSpread: {
    type: "number",
    default: 1,
  },
  hoverboxShadowPosition: {
    type: "string",
    default: "outset",
  },
  opacity: {
    type: "number",
    default: 0.7,
  },
  gradientDirection: {
    type: "number",
    default: 180,
  },
  bgGradient: {
    type: "boolean",
    default: false,
  },
  backgroundImage: {
    type: "string",
  },
  backgroundImagePosition: {
    type: "string",
  },
  backgroundImageSize: {
    type: "string",
  },
  backgroundImageRepeat: {
    type: "string",
  },
  imageHoverEffect: {
    type: "string",
  },
  bggradient: {
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
};

export default attributes;
