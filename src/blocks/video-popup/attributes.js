const attributes = {
  block_id: {
    type: "string",
  },
  align: {
    type: "string",
  },
  videoLink: {
    type: "string",
  },
  videoID: {
    type: "string",
    source: "attribute",
    selector: "[data-video]",
    attribute: "data-video",
  },
  borderRadius: {
    type: "number",
    default: "",
  },
  shadow: {
    type: "number",
    default: "",
  },
  playButtonType: {
    type: "string",
    default: "normal",
  },
  playButtonColor: {
    type: "string",
  },
  playButtonSize: {
    type: "number",
    default: 30,
  },
  vidwidth: {
    type: "number",
  },
  vidwidthTablet: {
    type: "number",
  },
  vidwidthMobile: {
    type: "number",
  },
  vidheight: {
    type: "number",
  },
  vidheightTablet: {
    type: "number",
  },
  vidheightMobile: {
    type: "number",
  },
  opacity: {
    type: "number",
    default: 80,
  },
  imgURL: {
    type: "string",
	default: "empty",
  }, // For compatibility with v1.3.2.
  imgID: {
    type: "number",
  },
  imgAlt: {
    type: "string",
    source: "attribute",
    attribute: "alt",
    selector: "img",
  },
  counterId: {
    type: "string",
    default: 1,
  },
  butopacity: {
    type: "number",
    default: 100,
  },
  blockBorderStyle: {
    type: "string",
    default: "none",
  },
  blockBorderWidth: {
    type: "number",
    default: 1,
  },
  blockBorderRadius: {
    type: "number",
  },
  blockBorderColor: {
    type: "string",
  },
  boxShadowColor: {
    type: "string",
  },
  boxShadowHOffset: {
    type: "number",
    default: 0,
  },
  boxShadowVOffset: {
    type: "number",
    default: 0,
  },
  boxShadowBlur: {
    type: "number",
  },
  boxShadowSpread: {
    type: "number",
  },
  boxShadowPosition: {
    type: "string",
    default: "outset",
  },
  previewBackgroundColor: {
    type: "string",
    default: "#000000",
  },

  hoverEffect: {
    type: "string",
    default: "",
  },
  backgroundImage: {
    type: "string",
    default: ''
  },
  vidBackgroundColor: {
	type: "string",
	default: "#000000",
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
  blockTopMargin: {
		type: "number",
		default: 0,
	},
	blockBottomMargin: {
		type: "number",
		default: 0,
	},
	blockLeftMargin: {
		type: "number",
		default: 0,
	},
	blockRightMargin: {
		type: "number",
		default: 0,
	},
	blockTopMarginTablet: {
		type: "number",
		default: 0,
	},
	blockBottomMarginTablet: {
		type: "number",
		default: 0,
	},
	blockLeftMarginTablet: {
		type: "number",
		default: 0,
	},
	blockRightMarginTablet: {
		type: "number",
		default: 0,
	},
	blockTopMarginMobile: {
		type: "number",
		default: 0,
	},
	blockBottomMarginMobile: {
		type: "number",
		default: 0,
	},
	blockLeftMarginMobile: {
		type: "number",
		default: 0,
	},
	blockRightMarginMobile: {
		type: "number",
		default: 0,
	},
	blockIsMarginControlConnected: {
		type: "boolean",
		default: false,
	},
	blockIsPaddingControlConnected: {
		type: "boolean",
		default: false,
	},
	blockTopPadding: {
		type: "number",
		default: 0,
	},
	blockTopPaddingMobile: {
		type: "number",
		default: 0,
	},
	blockTopPaddingTablet: {
		type: "number",
		default: 0,
	},
	blockBottomPadding: {
		type: "number",
		default: 0,
	},
	blockBottomPaddingMobile: {
		type: "number",
		default: 0,
	},
	blockBottomPaddingTablet: {
		type: "number",
		default: 0,
	},
	blockLeftPadding: {
		type: "number",
		default: 0,
	},
	blockLeftPaddingMobile: {
		type: "number",
		default: 0,
	},
	blockLeftPaddingTablet: {
		type: "number",
		default: 0,
	},
	blockRightPadding: {
		type: "number",
		default: 0,
	},
	blockRightPaddingMobile: {
		type: "number",
		default: 0,
	},
	blockRightPaddingTablet: {
		type: "number",
		default: 0,
	},
};
export default attributes;
