const attributes = {
  block_id: {
    type: "string",
  },
  layout: {
    type: "string",
    default: "accordion",
  },
  inactiveOtherItems: {
    type: "boolean",
    default: true,
  },
  expandFirstItem: {
    type: "boolean",
    default: false,
  },
  enableSchemaSupport: {
    type: "boolean",
    default: false,
  },
  align: {
    type: "string",
    default: "left",
  },
  rowsGap: {
    type: "number",
    default: 10,
  },
  columnsGap: {
    type: "number",
    default: 10,
  },
  rowsGapMobile: {
    type: "number",
    default: 10,
  },
  columnsGapMobile: {
    type: "number",
    default: 10,
  },
  rowsGapTablet: {
    type: "number",
    default: 10,
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
  columnsGapTablet: {
    type: "number",
    default: 10,
  },
  boxPaddingTypeMobile: {
    type: "string",
    default: "px",
  },
  boxPaddingTypeTablet: {
    type: "string",
    default: "px",
  },
  boxPaddingTypeDesktop: {
    type: "string",
    default: "px",
  },
  vBoxPaddingMobile: {
    type: "number",
    default: 10,
  },
  hBoxPaddingMobile: {
    type: "number",
    default: 10,
  },
  vBoxPaddingTablet: {
    type: "number",
    default: 10,
  },
  hBoxPaddingTablet: {
    type: "number",
    default: 10,
  },
  vBoxPaddingDesktop: {
    type: "number",
    default: 10,
  },
  hBoxPaddingDesktop: {
    type: "number",
    default: 10,
  },
  titleTextColor: {
    type: "string",
    default: "#313131",
  },
  titleTextActiveColor: {
    type: "string",
    default: "#656565",
  },
  titlePaddingTypeDesktop: {
    type: "string",
    default: "px",
  },
  vtitlePaddingMobile: {
    type: "number",
    default: 10,
  },
  vtitlePaddingTablet: {
    type: "number",
    default: 10,
  },
  vtitlePaddingDesktop: {
    type: "number",
    default: 10,
  },
  htitlePaddingMobile: {
    type: "number",
    default: 10,
  },
  htitlePaddingTablet: {
    type: "number",
    default: 10,
  },
  htitlePaddingDesktop: {
    type: "number",
    default: 10,
  },
  contentTextColor: {
    type: "string",
    default: "#313131",
  },
  contentPaddingTypeDesktop: {
    type: "string",
    default: "px",
  },
  vcontentPaddingMobile: {
    type: "number",
    default: 10,
  },
  vcontentPaddingTablet: {
    type: "number",
    default: 10,
  },
  vcontentPaddingDesktop: {
    type: "number",
    default: 10,
  },
  hcontentPaddingMobile: {
    type: "number",
    default: 10,
  },
  hcontentPaddingTablet: {
    type: "number",
    default: 10,
  },
  hcontentPaddingDesktop: {
    type: "number",
    default: 10,
  },
  titleActiveTextColor: {
    type: "string",
  },
  titleActiveBackgroundColor: {
    type: "string",
  },
  iconColor: {
    type: "string",
  },
  iconActiveColor: {
    type: "string",
  },
  titleFontWeight: {
    type: "string",
  },
  titleFontSize: {
    type: "number",
  },
  titleLineHeight: {
    type: "number",
  },
  titleFontFamily: {
    type: "string",
  },
  contentFontFamily: {
    type: "string",
  },
  contentFontWeight: {
    type: "string",
  },
  contentFontSize: {
    type: "number",
  },
  contentLineHeight: {
    type: "number",
  },
  icon: {
    type: "string",
    default: "fas fa-plus",
  },
  iconActive: {
    type: "string",
    default: "fas fa-minus",
  },
  iconAlign: {
    type: "string",
    default: "row",
  },
  iconSize: {
    type: "number",
    default: 12,
  },
  iconSizeTablet: {
    type: "number",
    default: 12,
  },
  iconSizeMobile: {
    type: "number",
    default: 12,
  },
  iconSizeType: {
    type: "string",
    default: "px",
  },
  columns: {
    type: "number",
    default: 2,
  },
  schema: {
    type: "string",
    default: "",
  },
  enableToggle: {
    type: "boolean",
    default: true,
  },
  equalHeight: {
    type: "boolean",
    default: true,
  },
  titleLeftPaddingTablet: {
    type: "number",
    default: 10,
  },
  titleBottomPaddingTablet: {
    type: "number",
    default: 10,
  },
  titleLeftPaddingDesktop: {
    type: "number",
    default: 10,
  },
  titleBottomPaddingDesktop: {
    type: "number",
    default: 10,
  },
  titleLeftPaddingMobile: {
    type: "number",
    default: 10,
  },
  titleBottomPaddingMobile: {
    type: "number",
    default: 10,
  },
  headingTag: {
    type: "html",
    selector: "span,p,h1,h2,h3,h4,h5,h6",
    default: "span",
  },
  titleBackgroundColorOpacity: {
    type: "number",
    default: 100,
  },
  marginV: {
    type: "number",
  },
  marginH: {
    type: "number",
  },
  marginVMobile: {
    type: "number",
  },
  marginHMobile: {
    type: "number",
  },
  marginVTablet: {
    type: "number",
  },
  marginHTablet: {
    type: "number",
  },
  titleSecondaryBackgroundColor: {
    type: "string",
  },
  titleGradientDegree: {
    type: "number",
    default: 100,
  },
  titleBgGradient: {
    type: "boolean",
    default: false,
  },
  titleBackgroundColor: {
    type: "string",
    default: "#FFFFFF",
  },
  contentSecondaryBackgroundColor: {
    type: "string",
  },
  contentGradientDegree: {
    type: "number",
    default: 100,
  },
  contentBgGradient: {
    type: "boolean",
    default: false,
  },
  contentBackgroundColor: {
    type: "string",
    default: "#eeeeee",
  },
  contentBackgroundColorOpacity: {
    type: "number",
    default: 100,
  },
  titleFontSizeTablet: {
    type: "number",
  },
  titleFontSizeMobile: {
    type: "number",
  },
  contentFontSizeTablet: {
    type: "number",
  },
  contentFontSizeMobile: {
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
  parentBlockBorderStyle: {
    type: "string",
    default: "solid",
  },
  parentBlockBorderTopWidth: {
    type: "number",
    default: 1,
  },
    parentBlockBorderTopWidthMobile: {
      type: "number",
      default: 1,
    },
    parentBlockBorderTopWidthTablet: {
      type: "number",
      default: 1,
    },
    parentBlockBorderBottomWidth: {
      type: "number",
      default: 1,
    },
    parentBlockBorderBottomWidthMobile: {
      type: "number",
      default: 1,
    },
    parentBlockBorderBottomWidthTablet: {
      type: "number",
      default: 1,
    },
    parentBlockBorderLeftWidth: {
      type: "number",
      default: 1,
    },
    parentBlockBorderLeftWidthMobile: {
      type: "number",
      default: 1,
    },
    parentBlockBorderLeftWidthTablet: {
      type: "number",
      default: 1,
    },
    parentBlockBorderRightWidth: {
      type: "number",
      default: 1,
    },
    parentBlockBorderRightWidthTablet: {
      type: "number",
      default: 1,
    },
    parentBlockBorderRightWidthMobile: {
      type: "number",
      default: 1,
    },
  parentBlockBorderTopLeftRadius: {
    type: "number",
    default: 0,
  },
  parentBlockBorderTopLeftRadiusMobile: {
    type: "number",
    default: 0,
  },
  parentBlockBorderTopLeftRadiusTablet: {
    type: "number",
    default: 0,
  },
  parentBlockBorderTopRightRadius: {
    type: "number",
    default: 0,
  },
  parentBlockBorderTopRightRadiusMobile: {
    type: "number",
    default: 0,
  },
  parentBlockBorderTopRightRadiusTablet: {
    type: "number",
    default: 0,
  },
  parentBlockBorderBottomLeftRadius: {
    type: "number",
    default: 0,
  },
  parentBlockBorderBottomLeftRadiusMobile: {
    type: "number",
    default: 0,
  },
  parentBlockBorderBottomLeftRadiusTablet: {
    type: "number",
    default: 0,
  },
  parentBlockBorderBottomRightRadius: {
    type: "number",
    default: 0,
  },
  parentBlockBorderBottomRightRadiusMobile: {
    type: "number",
    default: 0,
  },
  parentBlockBorderBottomRightRadiusTablet: {
    type: "number",
    default: 0,
  },
  parentBlockBorderColor: {
    type: "string",
    default: 'black',
  },
  titleTopSpacing: {
    type: "number",
    default: 10,
  },
  titleTopSpacingMobile: {
    type: "number",
    default: 10,
  },
  titleTopSpacingTablet: {
    type: "number",
    default: 10,
  },
  titleBottomSpacing: {
    type: "number",
    default: 10,
  },
  titleBottomSpacingMobile: {
    type: "number",
    default: 10,
  },
  titleBottomSpacingTablet: {
    type: "number",
    default: 10,
  },
  titleLeftSpacing: {
    type: "number",
    default: 10,
  },
  titleLeftSpacingMobile: {
    type: "number",
    default: 10,
  },
  titleLeftSpacingTablet: {
    type: "number",
    default: 10,
  },
  titleRightSpacing: {
    type: "number",
    default: 10,
  },
  titleRightSpacingMobile: {
    type: "number",
    default: 10,
  },
  titleRightSpacingTablet: {
    type: "number",
    default: 10,
  },
  //Variables for content padding
contentTopSpacing: {
  type: "number",
  default: 10,
},
contentTopSpacingMobile: {
  type: "number",
  default: 10,
},
contentTopSpacingTablet: {
  type: "number",
  default: 10,
},
contentBottomSpacing: {
  type: "number",
  default: 10,
},
contentBottomSpacingMobile: {
  type: "number",
  default: 10,
},
contentBottomSpacingTablet: {
  type: "number",
  default: 10,
},
contentLeftSpacing: {
  type: "number",
  default: 10,
},
contentLeftSpacingMobile: {
  type: "number",
  default: 10,
},
contentLeftSpacingTablet: {
  type: "number",
  default: 10,
},
contentRightSpacing: {
  type: "number",
  default: 10,
},
contentRightSpacingMobile: {
  type: "number",
  default: 10,
},
contentRightSpacingTablet: {
  type: "number",
  default: 10,
},
};

export default attributes;
