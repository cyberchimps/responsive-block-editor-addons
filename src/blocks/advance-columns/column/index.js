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
    "Add and customize columns",
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
    },
    topPadding: {
      type: "number",
    },
    bottomPadding: {
      type: "number",
    },
    leftPadding: {
      type: "number",
    },
    rightPadding: {
      type: "number",
    },
    leftMargin: {
      type: "number",
    },
    rightMargin: {
      type: "number",
    },
    topMargin: {
      type: "number",
    },
    bottomMargin: {
      type: "number",
    },
    topPaddingTablet: {
      type: "number",
    },
    bottomPaddingTablet: {
      type: "number",
    },
    leftPaddingTablet: {
      type: "number",
    },
    rightPaddingTablet: {
      type: "number",
    },
    leftMarginTablet: {
      type: "number",
    },
    rightMarginTablet: {
      type: "number",
    },
    topMarginTablet: {
      type: "number",
    },
    bottomMarginTablet: {
      type: "number",
    },
    topPaddingMobile: {
      type: "number",
    },
    bottomPaddingMobile: {
      type: "number",
    },
    leftPaddingMobile: {
      type: "number",
    },
    rightPaddingMobile: {
      type: "number",
    },
    leftMarginMobile: {
      type: "number",
    },
    rightMarginMobile: {
      type: "number",
    },
    topMarginMobile: {
      type: "number",
    },
    bottomMarginMobile: {
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
      default: '',
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
    backgroundHoverImage: {
      type: "string",
    },
    backgroundImageHoverPosition: {
      type: "string",
    },
    backgroundImageHoverAttachment: {
      type: "string",
    },
    backgroundImageHoverSize: {
      type: "string",
    },
    backgroundImageHoverRepeat: {
      type: "string",
    },
    backgroundImageHoverRepeat: {
      type: "string",
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
      default: " ",
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
