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
};

export default attributes;
