const ITEM_COUNT = 1;

const icons = [];

for (var i = 1; i <= 2; i++) {
  icons.push({
    label: "#Label",
    image_icon: "icon",
    icon: "fab fa-arrow-circle-right",
    image: "",
    icon_color: "#3a3a3a",
    label_color: "",
    icon_hover_color: "",
    label_hover_color: "",
    icon_bg_color: "",
    icon_bg_hover_color: "",
    icon_border_color: "",
    icon_border_hover_color: "",
    link: "#",
    target: false,
    disableLink: true,
    hideLabel: false,
  });
}
const attributes = {
  align: {
    type: "string",
    default: "left",
  },
  icon_count: {
    type: "number",
    default: ITEM_COUNT,
  },
  icons: {
    type: "array",
    default: icons,
  },
  gap: {
    type: "number",
    default: 10,
  },
  inner_gap: {
    type: "number",
    default: 15,
  },
  iconPosition: {
    type: "string",
    default: "middle",
  },
  size: {
    type: "number",
    default: 16,
  },
  bgSize: {
    type: "number",
    default: 0,
  },
  border: {
    type: "number",
    default: 0,
  },
  borderRadius: {
    type: "number",
    default: 0,
  },
  hideLabel: {
    type: "boolean",
    default: false,
  },
  labelFontFamily: {
    type: "string",
  },
  labelFontWeight: {
    type: "string",
  },
  labelFontSize: {
    type: "number",
  },
  labelFontSizeTablet: {
    type: "number",
  },
  labelFontSizeMobile: {
    type: "number",
  },
  labelLineHeight: {
    type: "number",
    default: 1,
  },
  icon_layout: {
    type: "string",
    default: "vertical",
  },
  fontSizeType: {
    type: "string",
    default: "px",
  },
  block_id: {
    type: "string",
    default: 1,
  },
};

export default attributes;
