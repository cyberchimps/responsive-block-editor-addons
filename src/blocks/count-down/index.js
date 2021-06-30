/**
 * BLOCK: Responsive Blocks Count Down
**/

// Import block dependencies and components
import attributes from "./attributes";
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
registerBlockType("responsive-block-editor-addons/count-down", {
  title: __("Count Down", "responsive-block-editor-addons"),
  description: __(
    "This block allows you to add count down blocks.",
    "responsive-block-editor-addons"
  ),
  icon: "welcome-widgets-menus",
  category: "responsive_block_editor_addons",
  keywords: [
    __("Statistics", "responsive-block-editor-addons"),
    __("Count Down", "responsive-block-editor-addons"),
    __("Responsive", "responsive-block-editor-addons"),
  ],
  
  attributes: attributes,

  /* Render the block in the editor. */
  edit: Edit,

  /* Save the block markup. */
  save: Save,
});
