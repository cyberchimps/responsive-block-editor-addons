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
  customWidthDesktop: {
    type: "number",
    default: 100,
  },
  customWidthTablet: {
    type: "number",
    default: 100,
  },
  customWidthMobile: {
    type: "number",
    default: 100,
  },
  customWidthTypeDesktop: {
    type: "string",
    default: "%",
  },
  customWidthTypeTablet: {
    type: "string",
    default: "%",
  },
  customWidthTypeMobile: {
    type: "string",
    default: "%",
  },
  minHeight: {
    type: "number",
    default: 100,
  },
  minHeightTablet: {
    type: "number",
    default: 100,
  },
  minHeightMobile: {
    type: "number",
    default: 100,
  },
  equalHeight: {
    type: "boolean",
    default: false,
  },
  htmlTag: {
    type: "string",
    default: "div",
  },
  htmlTagLink: {
    type: "string",
    default: '',
  },
  linkTarget: {
    type: "boolean",
    default: false,
  },
  overflow: {
    type: "string",
    default: "visible",
  },
  direction: {
    type: "string",
    default: "row",
  },
  directionTablet: {
    type: "string",
    default: "row",
  },
  directionMobile: {
    type: "string",
    default: "row",
  },
  alignItemsDesktop: {
    type: 'string',
    default: 'center',
  },
  alignItemsTablet: {
    type: 'string',
    default: 'center',
  },
  alignItemsMobile: {
    type: 'string',
    default: 'center',
  },
  justifyContentDesktop: {
    type: 'string',
    default: 'flex-start',
  },
  justifyContentTablet: {
    type: 'string',
    default: 'flex-start',
  },
  justifyContentMobile: {
    type: 'string',
    default: 'flex-start',
  },
};

export default attributes;
