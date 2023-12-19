/**
 * BLOCK: Responsive Blocks Popup
 */

// Import block dependencies and components
import Edit from "./components/edit";
import Save from "./components/save";
import attributes from "./attributes";

//Import Block Icon
import ResponsiveBlockEditorAddonsIcons from "../../block-icons";

// Import CSS
import "./styles/style.scss";
import "./styles/styles.editor.scss";

// Internationalization
const { __ } = wp.i18n;

// Register block
const { registerBlockType } = wp.blocks;

// Register the block
registerBlockType("responsive-block-editor-addons/popup", {
  title: __("Popup", "responsive-block-editor-addons"),
  description: __(
    "The Popup block helps you built beautiful popups.",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.popup,
  category: "responsive_block_editor_addons",
  keywords: [
    __("modal", "responsive-block-editor-addons"),
    __("popup", "responsive-block-editor-addons"),
    __("responsive", "responsive-block-editor-addons"),
  ],

  attributes: attributes,
  example: {},
  supports: {
		anchor: true
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
