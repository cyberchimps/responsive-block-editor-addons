const attributes = {
  block_id: {
    type: "string",
  },
  address: {
    type: "string",
  },
  apiKey: {
    type: "string",
  },
  zoom: {
    type: "number",
    default: 12,
  },
  height: {
    type: "number",
    default: 400,
  },
  pinned: {
    type: "boolean",
    default: false,
  },
};

export default attributes;
