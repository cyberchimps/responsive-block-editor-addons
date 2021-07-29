/**
 * BLOCK: Responsive Blocks Advance Columns
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
registerBlockType("responsive-block-editor-addons/advance-columns", {
  title: __("Advanced Columns", "responsive-block-editor-addons"),
  description: __(
    "This block gives you advanced options to insert a number of columns within a single row.",
    "responsive-block-editor-addons"
  ),
  icon: "layout",
  category: "responsive_block_editor_addons",
  keywords: [
    __("calendar", "responsive-block-editor-addons"),
    __("date", "responsive-block-editor-addons"),
    __("responsive", "responsive-block-editor-addons"),
  ],
  supports: {
    align: ["wide", "full"],
  },
  attributes: {
    columns: {
      type: "number",
      default: 2,
    },
    columnGap: {
      type: "string",
      default: "default",
    },
    width: {
      type: "number",
      default: 900,
    },
    widthType: {
      type: "string",
      default: "px",
    },
    contentWidth: {
      type: "string",
      default: "theme",
    },
    stack: {
      type: "string",
      default: "mobile",
    },
    blockTopPadding: {
      type: "number",
      default: 10,
    },
    blockBottomPadding: {
      type: "number",
      default: 10,
    },
    blockLeftPadding: {
      type: "number",
      default: 10,
    },
    blockRightPadding: {
      type: "number",
      default: 10,
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
    blockTopMargin: {
      type: "number",
      default: 0,
    },
    blockBottomMargin: {
      type: "number",
      default: 0,
    },
    blockLeftMargin: {
      type: "number",
      default: 0,
    },
    blockRightMargin: {
      type: "number",
      default: 0,
    },
    blockTopMarginTablet: {
      type: "number",
    },
    blockBottomMarginTablet: {
      type: "number",
    },
    blockLeftMarginTablet: {
      type: "number",
    },
    blockRightMarginTablet: {
      type: "number",
    },
    blockTopMarginMobile: {
      type: "number",
    },
    blockBottomMarginMobile: {
      type: "number",
    },
    blockLeftMarginMobile: {
      type: "number",
    },
    blockRightMarginMobile: {
      type: "number",
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
    backgroundImage: {
      type: "string",
    },
    backgroundImagePosition: {
      type: "string",
      default: "center-center",
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
    blockAlign: {
      type: "string",
      default: "left",
    },
    verticalAlign: {
      type: "string",
      default: "flex-start",
    },
    block_id: {
      type: "string",
    },
    height: {
      type: "string",
      default: "normal",
    },
    customHeight: {
      type: "number",
      default: 50,
    },
    z_index: {
      type: "number",
      default: 1,
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
