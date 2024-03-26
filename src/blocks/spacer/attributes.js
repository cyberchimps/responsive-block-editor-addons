const attributes = {
  block_id: {
    type: "string"
  },
  height: {
    type: "number",
    default: 100,
  },
  heightTablet: {
    type: "number",
  },
  heightMobile: {
    type: "number",
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
    default: 1,
  },
  z_indexTablet: {
    type: "number",
    default: 1,
  },
  z_indexMobile: {
    type: "number",
    default: 1,
  },
};
export default attributes;
