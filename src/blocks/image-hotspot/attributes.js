const attributes = {
  block_id: {
    type: "string",
  },
  imagePoints: {
    type: "string",
    default: "",
  },
  pointBackgroundColor: {
    type: "string",
    default: "#333",
  },
  iconColor: {
    type: "string",
    default: "#fff",
  },
  pointOpacity: {
    type: "number",
    default: 100,
  },
  pointSpacing: {
    type: "number",
    default: 6,
  },
  imageSize: {
    type: "string",
    default: "full",
  },
  animationName: {
    type: "string",
    default: "none",
  },
  animationDirection: {
    type: "string",
    default: "Left",
  },
  animationRepeat: {
    type: "string",
    default: "once",
  },
  animationDuration: {
    type: "number",
    default: 1000,
  },
  animationDelay: {
    type: "number",
    default: 0,
  },
  animationCurve: {
    type: "string",
  },
  pulseEffect: {
    type: "boolean",
    default: true,
  },
  id: {
    type: "number",
  },
  url: {
    type: "string",
  },
  hotspotIcon: {
    type: "string",
    default: "fas fa-plus",
  },
  hotspotSize: {
    type: "number",
    default: 16,
  },
  alt: {
    type: "string",
    attribute: "alt",
  },
  tooltipTrigger: {
    type: "string",
    default: "click",
  },
  tooltipTheme: {
    type: "string",
    default: "light",
  },
  tooltipArrow: {
    type: "boolean",
    default: true,
  },
  tooltipAnimation: {
    type: "string",
    default: "shift-toward",
  },
  hotspotPadding: {
    type: "number",
    default: 6,
  },
  hotspotColor: {
    type: "string",
  },
  hotspotBackground: {
    type: "string",
  },
  hotspotOpacity: {
    type: "number",
    default: 100,
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
};

export default attributes;
