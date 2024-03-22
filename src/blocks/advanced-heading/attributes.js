const attributes = {
  headingTitle: {
    source: "html",
    selector: "h1,h2,h3,h4,h5,h6",
      default:"Write a Heading",
  },
  block_id: {
    type: "string",
  },
  headingId: {
    type: "string",
  },
  headingDesc: {
    source: "html",
    selector: "p",
    default: "Write some text",
  },
  showHeading: {
    type: "boolean",
    default: "true",
  },
  showSubHeading: {
    type: "boolean",
    default: "true",
  },
  showSeparator: {
    type: "boolean",
    default: "true",
  },
  seperatorStyle: {
    type: "string",
    default: "solid",
  },
  seperatorPosition: {
    type: "string",
    default: "belowTitle",
  },
  separatorHeight: {
    type: "number",
    default: 3,
  },
  separatorWidth: {
    type: "number",
    default: 20,
  },
  separatorWidthType: {
    type: "string",
    default: "%",
  },
  separatorColor: {
    type: "string",
  },
  headSpacing: {
    type: "number",
    default: 15,
  },
  subheadSpacing: {
    type: "number",
    default: 15,
  },
  separatorSpacing: {
    type: "number",
    default: 15,
  },
  headSpacingTablet: {
    type: "number",
    default: 15,
  },
  subheadSpacingTablet: {
    type: "number",
    default: 15,
  },
  separatorSpacingTablet: {
    type: "number",
    default: 15,
  },
  headSpacingMobile: {
    type: "number",
    default: 15,
  },
  subheadSpacingMobile: {
    type: "number",
    default: 15,
  },
  separatorSpacingMobile: {
    type: "number",
    default: 15,
  },
  headingTitleFontFamily: {
    type: "string",
  },
  headingTitleFontSize: {
    type: "number",
  },
  headingTitleFontSizeMobile: {
    type: "number",
  },
  headingTitleFontSizeTablet: {
    type: "number",
  },
  headingTitleFontWeight: {
    type: "string",
    default: "600",
  },
  headingTitleLineHeight: {
    type: "number",
    default: 1,
  },
  headingTitleLetterSpacing: {
    type: "number",
    default: 0,
  },
  headingTitleColor: {
    type: "string",
  },
  subHeadingTitleFontFamily: {
    type: "string",
  },
  subHeadingTitleFontSize: {
    type: "number",
  },
  subHeadingTitleFontSizeMobile: {
    type: "number",
  },
  subHeadingTitleFontSizeTablet: {
    type: "number",
  },
  subHeadingTitleFontWeight: {
    type: "string",
    default: "400",
  },
  subHeadingTitleLineHeight: {
    type: "number",
    default: 1,
  },
  subHeadingTitleLetterSpacing: {
    type: "number",
    default: 0,
  },
  subHeadingTitleColor: {
    type: "string",
  },
  headingTag: {
    type: "string",
    default: "h2",
  },
  level: {
    type: "number",
    default: 2,
  },
  headingAlignment: {
    type: "string",
    default: "center",
  },
  headingAlignmentTablet: {
    type: "string",
    default: "center",
  },
  headingAlignmentMobile: {
    type: "string",
    default: "center",
  },
  textDecoration: {
    type: "string",
    default: "none"
  },
  textDecorationSubHeading: {
    type: "string",
    default: "none"
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
    default: 10,
  },
  blockLeftPaddingMobile: {
    type: "number",
  },
  blockLeftPaddingTablet: {
    type: "number",
  },
  blockRightPadding: {
    type: "number",
    default: 10,
  },
  blockRightPaddingMobile: {
    type: "number",
  },
  blockRightPaddingTablet: {
    type: "number",
  },
  blockTopMargin: {
    type: "number",
    default: 0,
  },
  blockBottomMargin: {
    type: "number",
    default: 0,
  },
  blockLeftMargin: {
    type: "number",
    default: 0,
  },
  blockRightMargin: {
    type: "number",
    default: 0,
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
  topMargin: {
	  type: "number",
	  default: 999,
  },
  bottomMargin: {
	type: "number",
	default: 999,
  },
  leftMargin: {
	type: "number",
	default: 999,
  },
  rightMargin: {
	type: "number",
	default: 999,
  },
  topPadding: {
	type: "number",
	default: 999,
  },
  bottomPadding: {
    type: "number",
    default: 999,
  },
  leftPadding: {
    type: "number",
    default: 999,
  },
  rightPadding: {
    type: "number",
    default: 999,
  },
  topMarginMobile: {
	type: "number",
	default: 999,
  },
  bottomMarginMobile: {
    type: "number",
    default: 999,
  },
  leftMarginMobile: {
    type: "number",
    default: 999,
  },
  rightMarginMobile: {
    type: "number",
    default: 999,
  },
  topPaddingMobile: {
    type: "number",
    default: 999,
  },
  bottomPaddingMobile: {
    type: "number",
    default: 999,
  },
  leftPaddingMobile: {
    type: "number",
    default: 999,
  },
  rightPaddingMobile: {
    type: "number",
    default: 999,
  },
  topMarginTablet: {
	type: "number",
	default: 999,
  },
  bottomMarginTablet: {
	type: "number",
	default: 999,
  },
  leftMarginTablet: {
	type: "number",
	default: 999,
  },
  rightMarginTablet: {
	type: "number",
	default: 999,
  },
  topPaddingTablet: {
	type: "number",
	default: 999,
  },
  bottomPaddingTablet: {
	type: "number",
	default: 999,
  },
  leftPaddingTablet: {
	type: "number",
	default: 999,
  },
  rightPaddingTablet: {
	type: "number",
	default: 999,
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
};

export default attributes;
