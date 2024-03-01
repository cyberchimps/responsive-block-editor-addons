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
};
export default attributes;
