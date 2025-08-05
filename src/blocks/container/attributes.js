const attributes = {
  block_id: {
    type: "string",
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
  contentWidth: {
    type: "string",
    default: "alignfull",
  },
  innerContentWidth: {
    type: "string",
    default: "alignwide",
  },
  innerContentCustomWidthDesktop: {
    type: "number",
    default: 100,
  },
  innerContentCustomWidthTablet: {
    type: "number",
    default: 100,
  },
  innerContentCustomWidthMobile: {
    type: "number",
    default: 100,
  },
  innerContentBoxWidthTypeDesktop: {
    type: "string",
    default: "%",
  },
  innerContentBoxWidthTypeTablet: {
    type: "string",
    default: "%",
  },
  innerContentBoxWidthTypeMobile: {
    type: "string",
    default: "%",
  },
};

export default attributes;
