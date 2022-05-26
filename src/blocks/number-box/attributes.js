const attributes = {
  headingTitle: {
    source: "html",
    selector: "h1,h2,h3,h4,h5,h6",
    default: "Write a Heading For Number Box",
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



  numberText: {
    type: "string",
    default: '101'
  },
  showBackground: {
    type: "boolean",
    default: false,
  },
  numberBoxAlignment: {
    type: "string",
    default: "flex-start"
  },
  numberBoxOpacity: {
    type: "number",
    default: 100,
  },
  numberBoxBackgroundImage: {
    type: "string",
    default: "",
  },
  verticalAlign: {
    type: "string",
    default: "flex-start",
  },
  maxContentWidth: {
    type: "number",
  },
  contentAlign: {
    type: "string",
    default: "center",
  },
  numberBoxTopMargin: {
    type: "number",
  },
  numberBoxBottomMargin: {
    type: "number",
  },
  numberBoxLeftMargin: {
    type: "number",
  },
  numberBoxRightMargin: {
    type: "number",
  },
  numberBoxTopMarginTablet: {
    type: "number",
  },
  numberBoxBottomMarginTablet: {
    type: "number",
  },
  numberBoxLeftMarginTablet: {
    type: "number",
  },
  numberBoxRightMarginTablet: {
    type: "number",
  },
  numberBoxTopMarginMobile: {
    type: "number",
  },
  numberBoxBottomMarginMobile: {
    type: "number",
  },
  numberBoxLeftMarginMobile: {
    type: "number",
  },
  numberBoxRightMarginMobile: {
    type: "number",
  },
  numberBoxBorder: {
    type: "string",
    default: "solid",
  },
  numberBoxBorderRadius: {
    type: "number",
    default: 12,
  },
  numberBoxShadow: {
    type: "number",
    default: 0,
  },
  showShape: {
    type: "boolean",
    default: false,
  },
  shapeBorderWidth: {
    type: "number",
    default: 0,
  },
  shapeBorderRadius: {
    type: "number",
    default: 12,
  },
  shapeShadow: {
    type: "number",
    default: 0,
  },
  contentFontFamily: {
    type: "string",
  },
  contentFontSize: {
    type: "number",
    default: 16,
  },
  contentFontWeight: {
    type: "string",
    default: "400",
  },
  contentLineHeight: {
    type: "number",
    default: 2,
  },
  contentFontSizeMobile: {
    type: "number",
  },
  contentFontSizeTablet: {
    type: "number",
  },
  showGradient: {
    type: "boolean",
    default: false,
  },
  blockTag: {
    type: "string",
    default: "div",
  },
  zIndex: {
    type: "number",
  },
};

export default attributes;
