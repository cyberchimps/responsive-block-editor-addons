const ITEM_COUNT = 2;

const { __ } = wp.i18n;
const countUp = [];
for (var i = 1; i <= ITEM_COUNT; i++) {
  countUp.push({
    icon: "lightbulb",
    title: __("Title ", "responsive-block-editor-addons") + i,
    amount: "1234",
    features: "",
  });
}

const attributes = {
  block_id: {
    type: "string",
  },
  countUp: {
    type: "array",
    default: countUp,
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
  itemBackgroundColor: {
    type: "string",
  },
  contentFontFamily: {
    type: "string",
  },
  headingFontFamily: {
    type: "string",
  },
  dateFontFamily: {
    type: "string",
  },
  dateLineHeight: {
    type: "number",
    default: 1,
  },
  dateFontWeight: {
    type: "string",
    default: "400",
  },
  dateFontSize: {
    type: "number",
    default: 40,
  },
  dateFontSizeMobile: {
    type: "number",
  },
  dateFontSizeTablet: {
    type: "number",
  },
  headingLineHeight: {
    type: "number",
    default: 1.8,
  },
  headingFontSize: {
    type: "number",
    default: 16,
  },
  headingFontSizeTablet: {
    type: "number",
  },
  headingFontSizeMobile: {
    type: "number",
  },
  contentLineHeight: {
    type: "number",
    default: 1.75,
  },
  contentFontWeight: {
    type: "string",
    default: "400",
  },
  contentFontSize: {
    type: "number",
    default: 16,
  },
  contentFontSizeMobile: {
    type: "number",
  },
  contentFontSizeTablet: {
    type: "number",
  },
  icon: {
    type: "string",
    default: "welcome-add-page",
  },
  resshowIcon: {
    type: "boolean",
    default: false,
  },
  resshowTitle: {
    type: "boolean",
    default: true,
  },
  resshowDesc: {
    type: "boolean",
    default: true,
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
  },
  blockBorderColor: {
    type: "string",
  },
  opacity: {
    type: "number",
    default: 10,
  },
  icon_color: {
    type: "string",
    default: "#3a3a3a",
  },
  counterId: {
    type: "string",
    default: 1,
  },
  iconsize: {
    type: "number",
    default: 16,
  },
  resshowNum: {
    type: "boolean",
    default: true,
  },
  numColor: {
    type: "string",
  },
  titleColor: {
    type: "string",
  },
  titleSpace: {
    type: "number",
    default: 20,
  },
  contentSpace: {
    type: "number",
    default: 30,
  },
  contentSpaceTablet: {
	  type: "number",
  },
  contentSpaceMobile: {
	  type: "number",
  },
  numSpace: {
    type: "number",
    default: 20,
  },
  numSpaceTablet: {
	  type: "number",
  },
  numSpaceMobile: {
	  type: "number",
  },
  iconStyle: {
    type: "string",
    default: "none",
  },
  shapeBorderRadius: {
    type: "number",
    default: 100,
  },
  shapePadding: {
    type: "number",
    default: 20,
  },
  shapeBorder: {
    type: "number",
    default: 2,
  },
  iconShapeColor: {
    type: "string",
    default: "#add5ef",
  },
  contentSpacing: {
    type: "number",
    default: '',
  },
  contentSpacingTablet: {
	  type: "number",
    default: '',
  },
  contentSpacingMobile: {
	  type: "number",
    default: '',
  },
  iconSpacing: {
    type: "number",
    default: 16,
  },
  iconSpacingTablet: {
	  type: "number",
  },
  iconSpacingMobile: {
	  type: "number",
  },
  titleSpacing: {
    type: "number",
  },
  titleSpaceTablet: {
	  type: "number",
  },
  titleSpaceMobile: {
	  type: "number",
  },
  numberSpacing: {
    type: "number",
  },
  descriptionSpacing: {
    type: "number",
  },
  headingFontWeight: {
	type: "string",
	default: "900",
  },
  titleFontWeight: {   //For compatibility with v1.3.2
    type: "string",
    default: "empty",
  },
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
  blockIsPaddingControlConnected: {
		type: "boolean",
		default: false,
	},
  blockIsMarginControlConnected: {
		type: "boolean",
		default: false,
	},
  blockTopPadding: {
    type: "number",
    default: '',
  },
  blockTopPaddingMobile: {
    type: "number",
    default: '',
  },
  blockTopPaddingTablet: {
    type: "number",
    default: '',
  },
  blockBottomPadding: {
    type: "number",
    default: '',
  },
  blockBottomPaddingMobile: {
    type: "number",
    default: '',
  },
  blockBottomPaddingTablet: {
    type: "number",
    default: '',
  },
  blockLeftPadding: {
    type: "number",
    default: '',
  },
  blockLeftPaddingMobile: {
    type: "number",
    default: '',
  },
  blockLeftPaddingTablet: {
    type: "number",
    default: '',
  },
  blockRightPadding: {
    type: "number",
    default: '',
  },
  blockRightPaddingMobile: {
    type: "number",
    default: '',
  },
  blockRightPaddingTablet: {
    type: "number",
    default: '',
  },
  blockTopMargin: {
    type: "number",
    default: '',
  },
  blockTopMarginMobile: {
    type: "number",
    default: '',
  },
  blockTopMarginTablet: {
    type: "number",
    default: '',
  },
  blockBottomMargin: {
    type: "number",
    default: '',
  },
  blockBottomMarginMobile: {
    type: "number",
    default: '',
  },
  blockBottomMarginTablet: {
    type: "number",
    default: '',
  },
  blockLeftMargin: {
    type: "number",
    default: '',
  },
  blockLeftMarginMobile: {
    type: "number",
    default: '',
  },
  blockLeftMarginTablet: {
    type: "number",
    default: '',
  },
  blockRightMargin: {
    type: "number",
    default: '',
  },
  blockRightMarginMobile: {
    type: "number",
    default: '',
  },
  blockRightMarginTablet: {
    type: "number",
    default: '',
  },
  blockNewSpacingValuesUpdated: {
    type: "boolean",
    default: false,
  }
};
export default attributes;
