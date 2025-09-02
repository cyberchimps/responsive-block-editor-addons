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
    default: 1340,
  },
  innerContentCustomWidthTablet: {
    type: "number",
    default: 1024,
  },
  innerContentCustomWidthMobile: {
    type: "number",
    default: 767,
  },
  innerContentBoxWidthTypeDesktop: {
    type: "string",
    default: "px",
  },
  innerContentBoxWidthTypeTablet: {
    type: "string",
    default: "px",
  },
  innerContentBoxWidthTypeMobile: {
    type: "string",
    default: "px",
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
  rowGapDesktop: {
    type: "number",
    default: 20,
  },
  rowGapTablet: {
    type: "number",
  },
  rowGapMobile: {
    type: "number",
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
  },
  columnGapMobile: {
    type: "number",
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
    type: "object",
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
  },
  directionMobile: {
    type: "string",
  },
  alignItemsDesktop: {
    type: "string",
    default: "center",
  },
  alignItemsTablet: {
    type: "string",
  },
  alignItemsMobile: {
    type: "string",
  },
  justifyContentDesktop: {
    type: "string",
    default: "center",
  },
  justifyContentTablet: {
    type: "string",
  },
  justifyContentMobile: {
    type: "string",
  },
  childrenWidthDesktop: {
    type: "string",
    default: "equal",
  },
  childrenWidthTablet: {
    type: "string",
  },
  childrenWidthMobile: {
    type: "string",
  },
  wrapDesktop: {
    type: "string",
    default: "nowrap",
  },
  wrapTablet: {
    type: "string",
  },
  wrapMobile: {
    type: "string",
    default: "wrap",
  },
  alignContentDesktop: {
    type: "string",
    default: "",
  },
  alignContentTablet: {
    type: "string",
  },
  alignContentMobile: {
    type: "string",
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
  gradient: {
    type: "string",
  },
  backgroundImage: {
    type: "string",
  },
  backgroundPosition: {
    type: "object",
    default: { "x": 0.5, "y": 0.5 }
  },
  backgroundPositionMobile: {
    type: 'object',
  },
  backgroundPositionTablet: {
    type: 'object',
  },
  repeatTab: {
    type: "string",
    default: "desktop",
  },
  backgroundRepeat: {
    type: 'string',
    default: "no-repeat",
  },
  backgroundRepeatTablet: {
    type: 'string',
    default: "no-repeat",
  },
  backgroundRepeatMobile: {
    type: 'string',
    default: "no-repeat",
  },
  blendModeTab: {
    type: "string",
    default: "desktop",
  },
  blendMode: {
    type: 'string',
    default: "normal",
  },
  blendModeDesktopTablet: {
    type: 'string',
    default: "normal",
  },
  blendModeDesktopMobile: {
    type: 'string',
    default: "normal",
  },
  backgroundAttachment: {
    type: "string",
    default: "scroll",
  },
  backgroundAttachmentTablet: {
    type: "string",
    default: "scroll",
  },
  backgroundAttachmentMobile: {
    type: "string",
    default: "scroll",
  },
  attachmentTab: {
    type: "string",
    default: "desktop",
  },
  overlayType: {
    type: "string",
  },
  overlayColor: {
    type: "string",
  },
  overlayImage: {
    type: "string",
  },
  overlayImagePositionTab: {
    type: "string",
    default: "desktop",
  },
  overlayImagePositionTab: {
    type: "string",
    default: "desktop",
  },
  overlayImagePosition: {
    type: 'string',
    default: "center center",
  },
  overlayImagePositionTablet: {
    type: 'string',
    default: "center center",
  },
  overlayImagePositionMobile: {
    type: 'string',
    default: "center center",
  },
  overlayAttachmentTab: {
    type: "string",
    default: "desktop",
  },
  overlayAttachment: {
    type: "string",
    default: "scroll",
  },
  overlayAttachmentTablet: {
    type: "string",
    default: "scroll",
  },
  overlayAttachmentMobile: {
    type: "string",
    default: "scroll",
  },
  overlayRepeatTab: {
    type: "string",
    default: "no-repeat",
  },
  overlayRepeat: {
    type: "string",
    default: "no-repeat",
  },
  overlayRepeatTablet: {
    type: "string",
    default: "no-repeat",
  },
  overlayRepeatMobile: {
    type: "string",
    default: "no-repeat",
  },
  overlayImageSizeTab: {
    type: "string",
    default: "desktop",
  },
  overlayImageSize: {
    type: 'string',
    default: "cover",
  },
  overlayImageSizeTablet: {
    type: 'string',
    default: "cover",
  },
  overlayImageSizeMobile: {
    type: 'string',
    default: "cover",
  },
  backgroundSize: {
    type: 'string',
    default: "cover",
  },
  backgroundSizeTablet: {
    type: 'string',
  },
  backgroundSizeMobile: {
    type: 'string',
  },
  backgroundVideo: {
    type: "object",
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
  containerBorderRadius: {
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
  imagePositionTab: {
    type: "string",
    default: "desktop",
  },
  imageSizeTab: {
    type: "string",
    default: "desktop",
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
  containerBorderStyle: {
    type: "string",
  },
  containerBorderWidth: {
    type: "number",
  },
  containerBorderColor: {
    type: "string",
  },
  containerTopPadding: {
    type: "number",
    default: 10,
  },
  containerBottomPadding: {
    type: "number",
    default: 10,
  },
  containerLeftPadding: {
    type: "number",
    default: 10,
  },
  containerRightPadding: {
    type: "number",
    default: 10,
  },
  containerTopPaddingTablet: {
    type: "number",
  },
  containerBottomPaddingTablet: {
    type: "number",
  },
  containerLeftPaddingTablet: {
    type: "number",
  },
  containerRightPaddingTablet: {
    type: "number",
  },
  containerTopPaddingMobile: {
    type: "number",
  },
  containerBottomPaddingMobile: {
    type: "number",
  },
  containerLeftPaddingMobile: {
    type: "number",
  },
  containerRightPaddingMobile: {
    type: "number",
  },
  containerTopMargin: {
    type: "number",
  },
  containerBottomMargin: {
    type: "number",
  },
  containerLeftMargin: {
    type: "number",
  },
  containerRightMargin: {
    type: "number",
  },
  containerTopMarginTablet: {
    type: "number",
  },
  containerBottomMarginTablet: {
    type: "number",
  },
  containerLeftMarginTablet: {
    type: "number",
  },
  containerRightMarginTablet: {
    type: "number",
  },
  containerTopMarginMobile: {
    type: "number",
  },
  containerBottomMarginMobile: {
    type: "number",
  },
  containerLeftMarginMobile: {
    type: "number",
  },
  containerRightMarginMobile: {
    type: "number",
  },
};

export default attributes;
