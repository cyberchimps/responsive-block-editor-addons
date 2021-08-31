/**
 * BLOCK: Responsive Blocks Column
 */

// Import block dependencies and components
import Edit from "./components/edit";
import Save from "./components/save";

//Import Block icons
import ResponsiveBlockEditorAddonsIcons from "../../../block-icons";

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
  icon: ResponsiveBlockEditorAddonsIcons.column,
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
    columnTopPadding: {
      type: "number",
    },
    columnBottomPadding: {
      type: "number",
    },
    columnLeftPadding: {
      type: "number",
    },
    columnRightPadding: {
      type: "number",
    },
    columnLeftMargin: {
      type: "number",
    },
    columnRightMargin: {
      type: "number",
    },
    columnTopMargin: {
      type: "number",
    },
    columnBottomMargin: {
      type: "number",
    },
    columnTopPaddingTablet: {
      type: "number",
    },
    columnBottomPaddingTablet: {
      type: "number",
    },
    columnLeftPaddingTablet: {
      type: "number",
    },
    columnRightPaddingTablet: {
      type: "number",
    },
    columnLeftMarginTablet: {
      type: "number",
    },
    columnRightMarginTablet: {
      type: "number",
    },
    columnTopMarginTablet: {
      type: "number",
    },
    columnBottomMarginTablet: {
      type: "number",
    },
    columnTopPaddingMobile: {
      type: "number",
    },
    columnBottomPaddingMobile: {
      type: "number",
    },
    columnLeftPaddingMobile: {
      type: "number",
    },
    columnRightPaddingMobile: {
      type: "number",
    },
    columnLeftMarginMobile: {
      type: "number",
    },
    columnRightMarginMobile: {
      type: "number",
    },
    columnTopMarginMobile: {
      type: "number",
    },
    columnBottomMarginMobile: {
      type: "number",
    },
    topPadding: { //For compatibility with v1.3.2.
      type: "number",
      default: 999,
    },
    bottomPadding: { //For compatibility with v1.3.2.
      type: "number",
      default: 999,
    },
    leftPadding: { //For compatibility with v1.3.2.
      type: "number",
      default: 999,
    },
    rightPadding: { //For compatibility with v1.3.2.
      type: "number",
      default: 999,
    },
    leftMargin: { //For compatibility with v1.3.2.
      type: "number",
      default: 999,
    },
    rightMargin: { //For compatibility with v1.3.2.
      type: "number",
      default: 999,
    },
    topMargin: { //For compatibility with v1.3.2.
      type: "number",
      default: 999,
    },
    bottomMargin: { //For compatibility with v1.3.2.
      type: "number",
      default: 999,
    },
    topPaddingTablet: { //For compatibility with v1.3.2.
      type: "number",
      default: 999,
    },
    bottomPaddingTablet: { //For compatibility with v1.3.2.
      type: "number",
      default: 999,
    },
    leftPaddingTablet: { //For compatibility with v1.3.2.
      type: "number",
      default: 999,
    },
    rightPaddingTablet: { //For compatibility with v1.3.2.
      type: "number",
      default: 999,
    },
    leftMarginTablet: { //For compatibility with v1.3.2.
      type: "number",
      default: 999,
    },
    rightMarginTablet: { //For compatibility with v1.3.2.
      type: "number",
      default: 999,
    },
    topMarginTablet: { //For compatibility with v1.3.2.
      type: "number",
      default: 999,
    },
    bottomMarginTablet: { //For compatibility with v1.3.2.
      type: "number",
      default: 999,
    },
    topPaddingMobile: { //For compatibility with v1.3.2.
      type: "number",
      default: 999,
    },
    bottomPaddingMobile: { //For compatibility with v1.3.2.
      type: "number",
      default: 999,
    },
    leftPaddingMobile: { //For compatibility with v1.3.2.
      type: "number",
      default: 999,
    },
    rightPaddingMobile: { //For compatibility with v1.3.2.
      type: "number",
      default: 999,
    },
    leftMarginMobile: { //For compatibility with v1.3.2.
      type: "number",
      default: 999,
    },
    rightMarginMobile: { //For compatibility with v1.3.2.
      type: "number",
      default: 999,
    },
    topMarginMobile: { //For compatibility with v1.3.2.
      type: "number",
      default: 999,
    },
    bottomMarginMobile: { //For compatibility with v1.3.2.
      type: "number",
      default: 999,
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
    backgroundColorHover: {
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
	backgroundPosition: {
	  type: "string",
	  default: "empty",
	}, // For compatibility with v1.3.2.
	backgroundRepeat: {
	  type: "string",
	  default: "empty",
	}, // For compatibility with v1.3.2.
	backgroundSize: {
	  type: "string",
	  default: "empty",
	}, // For compatibility with v1.3.2.
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
