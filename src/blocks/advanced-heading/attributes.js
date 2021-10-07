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
};

export default attributes;
