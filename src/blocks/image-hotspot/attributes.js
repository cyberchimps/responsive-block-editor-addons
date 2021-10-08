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
  dotIcon: {
    type: "string",
    default: "fas fa-plus",
  },
  dotSize: {
    type: "number",
    default: 16,
  },

  alt: {
    type: "string",
    source: "attribute",
    selector: ".responsive_block_addons__wrapper img",
    attribute: "alt",
  },
  tooltipTrigger: {
    type: "string",
    source: "attribute",
    selector: ".responsive_block_addons",
    attribute: "data-trigger",
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
  dotPaddings: {
    type: "number",
    default: 6,
  },
  dotColor: {
    type: "string",
  },
  dotBackground: {
    type: "string",
  },
  dotOpacity: {
    type: "number",
    default: 100,
  },
  dotPulse: {
    type: "string",
    default: "pulse",
  },
  dotAppearanceAnimation: {
    type: "string",
    source: "attribute",
    selector: ".responsive_block_addons",
    attribute: "data-appearance-animation",
    default: "none",
  },
  align: {
    type: "string",
  },
  hoverAnimation: {
    type: "string",
    source: "attribute",
    selector: ".responsive_block_addons",
    attribute: "data-animation",
    default: "",
  },
};

export default attributes;
