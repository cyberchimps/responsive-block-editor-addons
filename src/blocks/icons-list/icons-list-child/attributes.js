const attributes = {
  label: {
    selector: ".responsive-block-editor-addons-icon-list__label",
    default: "#Label",
  },
  image_icon: {
    type: "string",
    default: "icon",
  },
  hideLabel: {
    type: "boolean",
    default: false,
  },
  icon: {
    type: "string",
    default: "fab fa-arrow-circle-right",
  },
  image: {
    type: "object",
  },
  icon_color: {
    type: "string",
    default: "#3a3a3a",
  },
  label_color: {
    type: "string",
  },
  icon_hover_color: {
    type: "string",
  },
  label_hover_color: {
    type: "string",
  },
  icon_bg_color: {
    type: "string",
  },
  icon_bg_hover_color: {
    type: "string",
  },
  icon_border_color: {
    type: "string",
  },
  icon_border_hover_color: {
    type: "string",
  },
  link: {
    type: "string",
    default: "#",
  },
  target: {
    type: "boolean",
    default: false,
  },
  disableLink: {
    type: "boolean",
    default: true,
  },
  block_id: {
    type: "string",
    default: 1,
  },
  source_type: {
    type: "string",
    default: "icon",
  },
};

export default attributes;
