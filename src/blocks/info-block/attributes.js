const attributes = {
  block_id: {
    type: "string",
  },
  inheritFromTheme: {
    type: "boolean",
    default: false,
  },
  resprefixTitle: {
    source: "html",
    selector: "span.responsive-block-editor-addons-ifb-title-prefix",
    default: "Prefix",
  },
  classMigrate: {
    type: "boolean",
    default: false,
  },
  resinfoBlockTitle: {
    source: "html",
    selector: "h1,h2,h3,h4,h5,h6",
    default: "Info Box",
  },
  resDescHeading: {
    source: "html",
    selector: "p",
    default:
      "Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  resheadingAlign: {
    type: "string",
    default: "center",
  },
  alignment: {
    type: "string",
    default: "center",
  },
  resheadingColor: {
    type: "string",
  },
  ressubheadingColor: {
    type: "string",
  },
  resprefixColor: {
    type: "string",
  },
  icon: {
    type: "string",
    default: "fa fa-star",
  },
  imgiconPosition: {
    type: "string",
    default: "above-title",
  },
  resIconSize: {
    type: "number",
    default: 40,
  },
  iconColor: {
    type: "string",
    default: "#333",
  },
  resprefixFontSize: {
    type: "number",
  },
  resprefixFontWeight: {
    type: "string",
  },
  resprefixLineHeight: {
    type: "number",
  },
  resheadingTag: {
    type: "string",
    default: "h3",
  },
  resheadFontFamily: {
    type: "string",
  },
  ressubHeadFontFamily: {
    type: "string",
  },
  resheadFontSize: {
    type: "number",
  },
  resheadFontSizeMobile: {
    type: "number",
  },
  resheadFontSizeTablet: {
    type: "number",
  },
  resheadFontWeight: {
    type: "string",
    default: "700",
  },
  resheadLineHeight: {
    type: "number",
  },
  ressubHeadFontSize: {
    type: "number",
  },
  ressubHeadFontSizeTablet: {
    type: "number",
  },
  ressubHeadFontSizeMobile: {
    type: "number",
  },
  ressubHeadFontWeight: {
    type: "string",
    default: "100",
  },
  ressubHeadLineHeight: {
    type: "number",
  },
  resheadSpace: {
    type: "number",
    default: 10,
  },
  ressubHeadSpace: {
    type: "number",
    default: 10,
  },
  resseperatorSpace: {
    type: "number",
    default: 10,
  },
  source_type: {
    type: "string",
    default: "icon",
  },
  ressourceAlign: {
    type: "string",
    default: "top",
  },
  ressourceAlignMobile: {
    type: "string",
    default: "top",
  },
  ressourceAlignTablet: {
    type: "string",
    default: "top",
  },
  resctaTarget: {
    type: "boolean",
    default: false,
  },
  ctaIcon: {
    type: "string",
    default: "",
  },
  resseperatorPosition: {
    type: "string",
    default: "after_title",
  },
  resseperatorStyle: {
    type: "string",
    default: "solid",
  },
  resseperatorColor: {
    type: "string",
  },
  resseperatorWidth: {
    type: "number",
    default: 30,
  },
  resseparatorWidthType: {
    type: "string",
    default: "%",
  },
  resseperatorThickness: {
    type: "number",
    default: 2,
  },
  resctaType: {
    type: "string",
    default: "none",
  },
  resctaText: {
    type: "string",
    default: "Read More",
  },
  resctaLink: {
    type: "string",
    default: "#",
  },
  resctaLinkColor: {
    type: "string",
    default: "#333",
  },
  resctaFontSize: {
    type: "number",
  },
  resctaFontWeight: {
    type: "string",
  },
  resctaBtnLinkColor: {
    type: "string",
    default: "#333",
  },
  resctaBgColor: {
    type: "string",
    default: "transparent",
  },
  resctaBorderColor: {
    type: "string",
    default: "#333",
  },
  resctaBorderStyle: {
    type: "string",
    default: "solid",
  },
  ctaBtnVertPadding: {
    type: "number",
    default: 10,
  },
  ctaBtnHrPadding: {
    type: "number",
    default: 14,
  },
  resctaBorderWidth: {
    type: "number",
    default: 1,
  },
  resctaBorderRadius: {
    type: "number",
    default: 0,
  },
  resprefixSpace: {
    type: "number",
    default: 5,
  },
  iconLeftMargin: {
    type: "number",
    default: 0,
  },
  iconRightMargin: {
    type: "number",
    default: 0,
  },
  iconTopMargin: {
    type: "number",
    default: 5,
  },
  iconBottomMargin: {
    type: "number",
    default: 5,
  },
  iconImage: {
    type: "object",
    default: {
      url: "",
      alt: "InfoBlock placeholder img",
    },
  },
  imageSize: {
    type: "string",
    default: "thumbnail",
  },
  imageWidth: {
    type: "number",
    default: 120,
  },
  imageWidthTablet: {
    type: "number",
  },
  imageWidthMobile: {
    type: "number",
  },
  imageWidthType: {
    type: "boolean",
    default: true,
  },
  stack: {
    type: "string",
    default: "tablet",
  },
  resshowPrefix: {
    type: "boolean",
    default: true,
  },
  resshowTitle: {
    type: "boolean",
    default: true,
  },
  resshowDesc: {
    type: "boolean",
    default: true,
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
  imageBoxShadowColor: {
    type: "string",
  },
  imageBoxShadowHOffset: {
    type: "number",
    default: 0,
  },
  imageBoxShadowVOffset: {
    type: "number",
    default: 0,
  },
  imageBoxShadowBlur: {
    type: "number",
  },
  imageBoxShadowSpread: {
    type: "number",
  },
  imageBoxShadowPosition: {
    type: "string",
    default: "outset",
  },
  counterId: {
    type: "string",
    default: 1,
  },
  boxBackgroundColor: {
    type: "string",
    default: "#ffffff",
  },
  contentPadding: {
    type: "number",
    default: 0,
  },
  opacity: {
    type: "number",
    default: 100,
  },
  imageopacity: {
    type: "number",
    default: 100,
  },
  imgURL: {
    type: "string",
  },
  imgID: {
    type: "number",
  },
  imgAlt: {
    type: "string",
    source: "attribute",
    attribute: "alt",
    selector: "img",
  },
  dimRatio: {
    type: "number",
    default: 50,
  },
  hoverctaBtnLinkColor: {
    type: "string",
    default: "#333",
  },
  hoverctaBgColor: {
    type: "string",
    default: "transparent",
  },
  hoverctaBorderColor: {
    type: "string",
    default: "#333",
  },
  imagePosition: {
    type: "string",
    default: "center center",
  },
  imageRepeat: {
    type: "string",
    default: "no-repeat",
  },
  thumbsize: {
    type: "string",
    default: "cover",
  },
  backgroundAttachment: {
    type: "string",
    default: "scroll",
  },
  sepSpace: {
    type: "number",
    default: 10,
  },
  icon_color: {
    type: "string",
    default: "#3a3a3a",
  },
  icon_hcolor: {
    type: "string",
    default: "#3a3a3a",
  },
  resImageBorderColor: {
    type: "string",
    default: "#333",
  },
  resImageBorderStyle: {
    type: "string",
    default: "none",
  },
  resImageBorderRadius: {
    type: "number",
    default: 0,
  },
  resImageBorderWidth: {
    type: "number",
    default: 2,
  },
};
export default attributes;
