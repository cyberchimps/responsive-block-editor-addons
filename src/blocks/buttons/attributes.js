const buttons = [];

for (var i = 1; i <= 2; i++) {
  var label = "Add Text";
  var link = "#";
  buttons.push({
    label: label,
    link: link,
    size: "",
    vPadding: 10,
    hPadding: 14,
    borderWidth: 0,
    borderRadius: 0,
    borderStyle: "none",
    borderColor: "",
    borderHColor: "",
    color: "white",
    background: "#007cba",
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
    default: "left",
  },
  buttonAlignmentTablet: {
    type: "string",
    default: "left",
  },
  buttonAlignmentMobile: {
    type: "string",
    default: "left",
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
    default: 1,
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
    default: '',
  },
  blockBottomMargin: {
    type: "number",
    default: '',
  },
  blockLeftMargin: {
    type: "number",
    default: '',
  },
  blockRightMargin: {
    type: "number",
    default: '',
  },
  blockTopMarginTablet: {
    type: "number",
    default: '',
  },
  blockBottomMarginTablet: {
    type: "number",
    default: '',
  },
  blockLeftMarginTablet: {
    type: "number",
    default: '',
  },
  blockRightMarginTablet: {
    type: "number",
    default: '',
  },
  blockTopMarginMobile: {
    type: "number",
    default: '',
  },
  blockBottomMarginMobile: {
    type: "number",
    default: '',
  },
  blockLeftMarginMobile: {
    type: "number",
    default: '',
  },
  blockRightMarginMobile: {
    type: "number",
    default: '',
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
  z_index: {
    type: "number",
  },
  z_indexTablet: {
    type: "number",
  },
  z_indexMobile: {
    type: "number",
  },
  buttonSize: {
    type: "string",
    default: "Default",
  },
  buttonSizeTablet: {
    type: "string",
    default: "Default",
  },
  buttonSizeMobile: {
    type: "string",
    default: "Default",
  },
  isPreview: {
		type: 'boolean',
		default: false,
	},
};

export default attributes;
