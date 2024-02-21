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
};
export default attributes;
