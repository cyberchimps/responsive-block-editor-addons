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
};

export default attributes;
