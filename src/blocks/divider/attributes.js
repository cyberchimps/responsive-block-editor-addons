const attributes = {
  block_id: {
    type: "string",
  },
  spacerHeight: {
    type: "number",
    default: 30,
  },
  spacerHeightMobile: {
    type: "number",
    default: '',
  },
  spacerHeightTablet: {
    type: "number",
    default: '',
  },
  spacerDivider: {
    type: "boolean",
    default: false,
  },
  spacerDividerStyle: {
    type: "string",
    default: "solid",
  },
  spacerDividerColor: {
    type: "string",
    default: "#000000",
  },
  spacerDividerHeight: {
    type: "number",
    default: 7,
  },
  spacerDividerWidth: {
    type: "number",
    default: 60,
  },
  spacerDividerAlignment: {
    type: "string",
    default: "center",
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
};

export default attributes;
