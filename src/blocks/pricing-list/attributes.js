const { __ } = wp.i18n;

const ITEM_COUNT = 4;

const rest_menu_block = [];

for (var i = 1; i <= ITEM_COUNT; i++) {
  var desc_text = __(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "responsive-block-editor-addons"
  );
  var title_text = __("Menu Item " + i, "responsive-block-editor-addons");
  var price_text = __("$9", "responsive-block-editor-addons");
  rest_menu_block.push({
    description: desc_text,
    title: title_text,
    price: price_text,
    imageId: "",
    image: "",
    imageUrl: "",
  });
}

const attributes = {
  block_id: {
    type: "string",
  },
  pricingList: {
    type: "array",
    default: rest_menu_block,
  },
  blockTopPadding: {
    type: "number",
    default: 5,
  },
  blockBottomPadding: {
    type: "number",
    default: 5,
  },
  blockLeftPadding: {
    type: "number",
    default: 5,
  },
  blockRightPadding: {
    type: "number",
    default: 5,
  },
  blockTopPaddingMobile: {
    type: "number",
    default: 5,
  },
  blockBottomPaddingMobile: {
    type: "number",
    default: 5,
  },
  blockLeftPaddingMobile: {
    type: "number",
    default: 5,
  },
  blockRightPaddingMobile: {
    type: "number",
    default: 5,
  },
  blockTopPaddingTablet: {
    type: "number",
    default: 5,
  },
  blockBottomPaddingTablet: {
    type: "number",
    default: 5,
  },
  blockLeftPaddingTablet: {
    type: "number",
    default: 5,
  },
  blockRightPaddingTablet: {
    type: "number",
    default: 5,
  },
  rowGap: {
    type: "number",
    default: 10,
  },
  columnGap: {
    type: "number",
    default: 10,
  },
  titleSpace: {
    type: "number",
    default: 10,
  },
  rowGapMobile: {
    type: "number",
    default: 10,
  },
  columnGapMobile: {
    type: "number",
    default: 10,
  },
  titleSpaceMobile: {
    type: "number",
    default: 10,
  },
  rowGapTablet: {
    type: "number",
    default: 10,
  },
  columnGapTablet: {
    type: "number",
    default: 10,
  },
  titleSpaceTablet: {
    type: "number",
    default: 10,
  },
  titleFontFamily: {
    type: "string",
  },
  descriptionFontFamily: {
    type: "string",
  },
  priceFontFamily: {
    type: "string",
  },
  titleFontSize: {
    type: "number",
  },
  titleFontWeight: {
    type: "string",
  },
  titleLineHeight: {
    type: "number",
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
  priceFontSize: {
    type: "number",
  },
  priceFontWeight: {
    type: "string",
  },
  priceLineHeight: {
    type: "number",
  },
  seperatorStyle: {
    type: "string",
    default: "dashed",
  },
  seperatorWidth: {
    type: "number",
    default: 100,
  },
  seperatorThickness: {
    type: "number",
    default: 1,
  },
  seperatorColor: {
    type: "string",
  },
  titleColor: {
    type: "string",
  },
  descColor: {
    type: "string",
  },
  priceColor: {
    type: "string",
  },

  columns: {
    type: "number",
    default: 2,
  },
  count: {
    type: "number",
    default: ITEM_COUNT,
  },
  contentAlign: {
    type: "string",
    default: "left",
  },
  imagePosition: {
    type: "string",
    default: "top",
  },
  imageAlignment: {
    type: "string",
    default: "middle",
  },
  imageSize: {
    type: "string",
    default: "medium",
  },
  imageWidth: {
    type: "number",
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
  priceFontSizeMobile: {
	type: "number",
  },
  priceFontSizeTablet: {
	type: "number",
  },
  topPadding: {
	type: "number",
	default: 999,
  }, // For compatibility with v1.3.2.
  bottomPadding: {
	type: "number",
	default: 999,
  }, // For compatibility with v1.3.2.
  leftPadding: {
	type: "number",
	default: 999,
  }, // For compatibility with v1.3.2.
  rightPadding: {
	type: "number",
	default: 999,
  }, // For compatibility with v1.3.2.
  hideWidget: {
    type: "boolean",
    default: false,
  },
  hideWidgetTablet: {
    type: "boolean",
    default: false,
  },
  hideWidgetMobile: {
    type: "boolean",
    default: false,
  },
  z_index: {
    type: "number",
  },
  z_indexTablet: {
    type: "number",
  },
  z_indexMobile: {
    type: "number",
  },
};

export default attributes;
