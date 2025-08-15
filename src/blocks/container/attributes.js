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
  },
  customWidthMobile: {
    type: "number",
  },
  customWidthTypeDesktop: {
    type: "string",
    default: "%",
  },
  customWidthTypeTablet: {
    type: "string",
  },
  customWidthTypeMobile: {
    type: "string",
  },
  rowGapDesktop: {
    type: "number",
    default: 20,
  },
  rowGapTablet: {
    type: "number",
    default: 20,
  },
  rowGapMobile: {
    type: "number",
    default: 20,
  },
  rowGapTypeDesktop: {
    type: "string",
    default: "px",
  },
  rowGapTypeTablet: {
    type: "string",
    default: "px",
  },
  rowGapTypeMobile: {
    type: "string",
    default: "px",
  },
  columnGapDesktop: {
    type: "number",
    default: 20,
  },
  columnGapTablet: {
    type: "number",
    default: 20,
  },
  columnGapMobile: {
    type: "number",
    default: 20,
  },
  columnGapTypeDesktop: {
    type: "string",
    default: "px",
  },
  columnGapTypeTablet: {
    type: "string",
    default: "px",
  },
  columnGapTypeMobile: {
    type: "string",
    default: "px",
  },
  minHeight: {
    type: "number",
  },
  minHeightTablet: {
    type: "number",
  },
  minHeightMobile: {
    type: "number",
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
  },
  linkTarget: {
    type: "boolean",
    default: false,
  },
  overflow: {
    type: "string",
    default: "visible",
  },
  directionDesktop: {
    type: "string",
    default: "column",
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
    type: "string",
    default: "center",
  },
  alignItemsTablet: {
    type: "string",
    default: "center",
  },
  alignItemsMobile: {
    type: "string",
    default: "center",
  },
  justifyContentDesktop: {
    type: "string",
    default: "center",
  },
  justifyContentTablet: {
    type: "string",
    default: "center",
  },
  justifyContentMobile: {
    type: "string",
    default: "center",
  },
  childrenWidthDesktop: {
    type: "string",
    default: "equal",
  },
  childrenWidthTablet: {
    type: "string",
    default: "equal",
  },
  childrenWidthMobile: {
    type: "string",
    default: "equal",
  },
  wrapDesktop: {
    type: "string",
    default: "nowrap",
  },
  wrapTablet: {
    type: "string",
    default: "nowrap",
  },
  wrapMobile: {
    type: "string",
    default: "nowrap",
  },
  alignContentDesktop: {
    type: "string",
    default: "",
  },
  alignContentTablet: {
    type: "string",
    default: "",
  },
  alignContentMobile: {
    type: "string",
    default: "",
  },
  backgroundType: {
    type: "string",
    default: "none",
  },
  opacity: {
    type: "number",
    default: 100,
  },
  backgroundColor: {
    type: "string",
  },
  backgroundImage: {
    type: "string",
  },
  backgroundVideo: {
    type: "object",
  },
  buttonColor: {
    type: "string",
  },
  textColor: {
    type: "string",
  },
  linkColor: {
    type: "string",
  },
  linkColorHover: {
    type: "string",
  },
  containerBorderStyle: {
    type: "string",
    default: "none",
  },
  containerBorderWidth: {
    type: "number",
    default: 1,
  },
  containerBorderRadius: {
    type: "number",
    default: 0,
  },
  containerTopRadius: {
    type: "number",
    default: 0,
  },
  containerRightRadius: {
    type: "number",
    default: 0,
  },
  containerBottomRadius: {
    type: "number",
    default: 0,
  },
  containerLeftRadius: {
    type: "number",
    default: 0,
  },
  containerTopRadiusTablet: {
    type: "number",
    default: 0,
  },
  containerRightRadiusTablet: {
    type: "number",
    default: 0,
  },
  containerBottomRadiusTablet: {
    type: "number",
    default: 0,
  },
  containerLeftRadiusTablet: {
    type: "number",
    default: 0,
  },
  containerTopRadiusMobile: {
    type: "number",
    default: 0,
  },
  containerRightRadiusMobile: {
    type: "number",
    default: 0,
  },
  containerBottomRadiusMobile: {
    type: "number",
    default: 0,
  },
  containerLeftRadiusMobile: {
    type: "number",
    default: 0,
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
    default: 0,
  },
  boxShadowSpread: {
    type: "number",
    default: 0,
  },
  boxShadowPosition: {
    type: "string",
    default: "outset",
  },
  hoverboxShadowColor: {
    type: "string",
  },
  hoverboxShadowHOffset: {
    type: "number",
    default: 0,
  },
  hoverboxShadowVOffset: {
    type: "number",
    default: 0,
  },
  hoverboxShadowBlur: {
    type: "number",
    default: 0,
  },
  hoverboxShadowSpread: {
    type: "number",
    default: 0,
  },
  hoverboxShadowPosition: {
    type: "string",
    default: "outset",
  },
  widthSetByUser: {
    type: "boolean",
    default: false,
  },
  variationSelected: {
    type: "boolean",
    default: false,
  },
  isBlockRootParent: {
		type: 'boolean',
		default: false,
	},
};

export default attributes;
