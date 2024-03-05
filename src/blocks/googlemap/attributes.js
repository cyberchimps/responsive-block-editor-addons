const attributes = {
  block_id: {
    type: "string",
  },
  address: {
    type: "string",
    default: "New York",
  },
  zoom: {
    type: "number",
    default: 12,
  },
  height: {
    type: "number",
    default: 400,
  },
    heightTablet: {
    type: "number",
  },
    heightMobile: {
    type: "number",
  },
  pinned: {
    type: "boolean",
    default: false,
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
