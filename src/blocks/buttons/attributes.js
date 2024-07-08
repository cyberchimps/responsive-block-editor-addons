const buttons = [];

for (var i = 1; i <= 2; i++) {
  var label = "#Click Here";
  var link = "#";
  buttons.push({
    label: label,
    link: link,
    size: "",
    vPadding: 10,
    hPadding: 14,
    borderWidth: 1,
    borderRadius: 2,
    borderStyle: "solid",
    borderColor: "",
    borderHColor: "",
    color: "",
    background: "",
    hColor: "",
    hBackground: "",
    sizeType: "px",
    sizeMobile: "",
    sizeTablet: "",
    lineHeight: "",
    lineHeightType: "em",
    lineHeightMobile: "",
    lineHeightTablet: "",
  });
}

const attributes = {
  block_id: {
    type: "string",
  },
  buttonAlignment: {
    type: "string",
    default: "center",
  },
  buttonAlignmentTablet: {
    type: "string",
    default: "center",
  },
  buttonAlignmentMobile: {
    type: "string",
    default: "center",
  },
  buttons: {
    type: "array",
    default: buttons,
  },
  gap: {
    type: "number",
    default: 10,
  },
  stack: {
    type: "string",
    default: "none",
  },
  btn_count: {
    type: "number",
    default: 2,
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
    default: 0,
  },
  blockBottomMarginTablet: {
    type: "number",
    default: 0,
  },
  blockLeftMarginTablet: {
    type: "number",
    default: 0,
  },
  blockRightMarginTablet: {
    type: "number",
    default: 0,
  },
  blockTopMarginMobile: {
    type: "number",
    default: 0,
  },
  blockBottomMarginMobile: {
    type: "number",
    default: 0,
  },
  blockLeftMarginMobile: {
    type: "number",
    default: 0,
  },
  blockRightMarginMobile: {
    type: "number",
    default: 0,
  },
  blockIsMarginControlConnected: {
    type: "boolean",
    default: false,
  },
  blockIsPaddingControlConnected: {
    type: "boolean",
    default: false,
  },
  blockTopPadding: {
    type: "number",
    default: 0,
  },
  blockTopPaddingMobile: {
    type: "number",
    default: 0,
  },
  blockTopPaddingTablet: {
    type: "number",
    default: 0,
  },
  blockBottomPadding: {
    type: "number",
    default: 0,
  },
  blockBottomPaddingMobile: {
    type: "number",
    default: 0,
  },
  blockBottomPaddingTablet: {
    type: "number",
    default: 0,
  },
  blockLeftPadding: {
    type: "number",
    default: 0,
  },
  blockLeftPaddingMobile: {
    type: "number",
    default: 0,
  },
  blockLeftPaddingTablet: {
    type: "number",
    default: 0,
  },
  blockRightPadding: {
    type: "number",
    default: 0,
  },
  blockRightPaddingMobile: {
    type: "number",
    default: 0,
  },
  blockRightPaddingTablet: {
    type: "number",
    default: 0,
  },
};

export default attributes;
