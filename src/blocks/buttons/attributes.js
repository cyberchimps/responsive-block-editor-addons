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
};

export default attributes;
