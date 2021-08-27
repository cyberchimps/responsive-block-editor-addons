const { __ } = wp.i18n;

const ITEM_COUNT = 2;

const imageboxesBlock = [];

for (var i = 1; i <= ITEM_COUNT; i++) {
  imageboxesBlock.push({
    title: __("Image Box Title", "responsive-block-editor-addons") + i,
    hover_description:
      __(
        "Description - This space for describing this imagebox block",
        "responsive-block-editor-addons"
      ) + i,
    img_url: "",
    img_id: "",
    cta_url: "",
  });
}

const attributes = {
  block_id: {
    type: "string",
  },
  imageboxesBlock: {
    type: "array",
    default: imageboxesBlock,
  },
  counterId: {
    type: "string",
    default: 1,
  },
  count: {
    type: "number",
    default: ITEM_COUNT,
  },
  titleHeadingTag: {
    type: "string",
    default: "h3",
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
  itemBackgroundColor: {
    type: "string",
  },
  hoverTextColor: {
    type: "string",
  },
  verticalAlignment: {
    type: "string",
    default: "center",
  },
  itemHoverBackgroundColor: {
    type: "string",
  },
  hoverBorderColor: {
    type: "string",
  },
  titleSpacing: {
    type: "number",
  },
  descriptionSpacing: {
    type: "number",
  },
  titleSpacingMobile: {
    type: "number",
  },
  descriptionSpacingMobile: {
    type: "number",
  },
  titleSpacingTablet: {
    type: "number",
  },
  descriptionSpacingTablet: {
    type: "number",
  },
  blockBorderRadius: {
    type: "number",
  },
  blockBorderColor: {
    type: "string",
	default: "#1E1E1E"
  },
  blockBorderStyle: {
    type: "string",
    default: "solid",
  },
  blockBorderWidth: {
    type: "number",
    default: 2,
  },
  boxPaddingLeft: {
    type: "number",
    default: 15,
  },
  boxPaddingRight: {
    type: "number",
    default: 15,
  },
  boxPaddingBottom: {
    type: "number",
    default: 15,
  },
  boxPaddingTop: {
    type: "number",
    default: 15,
  },
  boxHeight: {
    type: "number",
  },
  hasArrow: {
    type: "boolean",
  },
  hasArrow: {
    type: "boolean",
  },
  arrowColor: {
    type: "string",
  },
  arrowSize: {
    type: "number",
  },
  boxShadowColor: {
    type: "string",
  },
  boxShadowHOffset: {
    type: "number",
    default: 9,
  },
  boxShadowVOffset: {
    type: "number",
    default: 9,
  },
  boxShadowBlur: {
    type: "number",
    default: 9,
  },
  opacity: {
    type: "number",
    default: 70,
  },
  hoverOpacity: {
    type: "number",
    default: 70,
  },
  boxShadowSpread: {
    type: "number",
    default: 9,
  },
  boxShadowPosition: {
    type: "string",
    default: "outset",
  },
  backgroundPosition: {
    type: "string",
  },
  backgroundSize: {
    type: "string",
  },
  backgroundRepeat: {
    type: "string",
  },
  imageHoverEffect: {
    type: "string",
  },
  bggradient: {
    type: "string",
  },
  secondaryBackgroundColor: {
    type: "string",
  },
  hoverSecondaryBackgroundColor: {
    type: "string",
  },
  gradientDegree: {
    type: "number",
    default: 180,
  },
  bgGradient: {
    type: "boolean",
    default: false,
  },
  hoverGradientDegree: {
    type: "number",
    default: 180,
  },
  hoverBgGradient: {
    type: "boolean",
    default: false,
  },
  titleFontFamily: {
    type: "string",
  },
  descriptionFontFamily: {
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
  imageSize: {
    type: "string",
    default: "full",
  },
  titleLineHeight: {
    type: "number",
  },
  titleColor: {
    type: "string",
	default: "#1E1E1E"
  },
  descriptionFontSize: {
    type: "number",
  },
  descriptionFontWeight: {
    type: "string",
  },
  descriptionLineHeight: {
    type: "number",
  },
  descriptionColor: {
    type: "string",
	default: "#1E1E1E"
  },
  backgroundImageOne: {
    type: "string",
    default: "",
  },
  backgroundImageTwo: {
    type: "string",
    default: "",
  },
  backgroundImageThree: {
    type: "string",
    default: "",
  },
  backgroundImageFour: {
    type: "string",
    default: "",
  },
  gutter: {
    type: "string",
    default: "medium",
  },
  showDescription: {
    type: "boolean",
    default: true,
  },
  showTitle: {
    type: "boolean",
    default: true,
  },
  descriptionFontSizeMobile: {
	  type: "number",
  },
  descriptionFontSizeTablet: {
	  type: "number",
  },
  boxRadius: {
	type: "number",
	default: 999,
  },//For compatibility with v1.3.2
};

export default attributes;
