/**
 * BLOCK: Responsive Blocks Column
 */

// Import block dependencies and components
import Edit from "./components/edit";
import Save from "./components/save";

// Import CSS
import "./styles/style.scss";
import "./styles/styles.editor.scss";

// Internationalization
const { __ } = wp.i18n;

// Register block
const { registerBlockType } = wp.blocks;

// Register the block
registerBlockType("responsive-block-editor-addons/column", {
  title: __("Column", "responsive-block-editor-addons"),
  description: __(
    "This block is an immediate child of Advanced Columns.",
    "responsive-block-editor-addons"
  ),
  icon: "layout",
  category: "responsive_block_editor_addons",
  parent: ["responsive-block-editor-addons/advance-columns"],
  keywords: [
    __("calendar", "responsive-block-editor-addons"),
    __("date", "responsive-block-editor-addons"),
    __("responsive", "responsive-block-editor-addons"),
  ],
  attributes: {
    width: {
      type: "number",
      default: 50,
    },
    blockTopPadding: {
      type: "number",
    },
    blockBottomPadding: {
      type: "number",
    },
    blockLeftPadding: {
      type: "number",
    },
    blockRightPadding: {
      type: "number",
    },
    blockLeftMargin: {
      type: "number",
    },
    blockRightMargin: {
      type: "number",
    },
    blockTopMargin: {
      type: "number",
    },
    blockBottomMargin: {
      type: "number",
    },
    blockTopPaddingTablet: {
      type: "number",
    },
    blockBottomPaddingTablet: {
      type: "number",
    },
    blockLeftPaddingTablet: {
      type: "number",
    },
    blockRightPaddingTablet: {
      type: "number",
    },
    blockLeftMarginTablet: {
      type: "number",
    },
    blockRightMarginTablet: {
      type: "number",
    },
    blockTopMarginTablet: {
      type: "number",
    },
    blockBottomMarginTablet: {
      type: "number",
    },
    blockTopPaddingMobile: {
      type: "number",
    },
    blockBottomPaddingMobile: {
      type: "number",
    },
    blockLeftPaddingMobile: {
      type: "number",
    },
    blockRightPaddingMobile: {
      type: "number",
    },
    blockLeftMarginMobile: {
      type: "number",
    },
    blockRightMarginMobile: {
      type: "number",
    },
    blockTopMarginMobile: {
      type: "number",
    },
    blockBottomMarginMobile: {
      type: "number",
    },
    block_id: {
      type: "string",
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
      default: "#cccccc",
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
      default: 6,
    },
    hoverboxShadowSpread: {
      type: "number",
      default: 1,
    },
    hoverboxShadowPosition: {
      type: "string",
      default: "outset",
    },
    opacity: {
      type: "number",
      default: 20,
    },
    colorLocation1: {
      type: "number",
      default: 0,
    },
    colorLocation2: {
      type: "number",
      default: 100,
    },
    gradientDirection: {
      type: "number",
      default: 90,
    },
    hovercolorLocation1: {
      type: "number",
      default: 0,
    },
    hovercolorLocation2: {
      type: "number",
      default: 100,
    },
    hovergradientDirection: {
      type: "number",
      default: 90,
    },
    backgroundImage: {
      type: "string",
    },
    backgroundImagePosition: {
      type: "string",
      default: "center center",
    },
    backgroundImageSize: {
      type: "string",
      default: "cover",
    },
    backgroundImageRepeat: {
      type: "string",
      default: "no-repeat",
    },
    backgroundAttachment: {
      type: "string",
      default: "scroll",
    },
    backgroundImageColor: {
      type: "string",
    },
    overlayType: {
      type: "string",
      default: "color",
    },
    gradientOverlayColor1: {
      type: "string",
    },
    gradientOverlayColor2: {
      type: "string",
    },
    gradientOverlayType: {
      type: "string",
      default: "linear",
    },
    gradientOverlayLocation1: {
      type: "number",
      default: 0,
    },
    gradientOverlayLocation2: {
      type: "number",
      default: 100,
    },
    gradientOverlayAngle: {
      type: "number",
      default: 0,
    },
    gradientOverlayPosition: {
      type: "string",
      default: "center center",
    },
    backgroundType: {
      type: "string",
    },
    backgroundColor: {
      type: "string",
    },
    backgroundColor1: {
      type: "string",
    },
    backgroundColor2: {
      type: "string",
      default: "#fff",
    },
    hoverbackgroundColor1: {
      type: "string",
    },
    hoverbackgroundColor2: {
      type: "string",
      default: "#fff",
    },
  },

  /* Render the block in the editor. */
  edit: (props) => {
    return <Edit {...props} />;
  },

  /* Save the block markup. */
  save: (props) => {
    return <Save {...props} />;
  },
});
