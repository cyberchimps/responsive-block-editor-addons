const attributes = {
    block_id: {
        type: "string"
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
    isPreview: {
		type: 'boolean',
		default: false,
	},
};
  
export default attributes;
  