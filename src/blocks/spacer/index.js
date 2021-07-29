/**
 * BLOCK: Responsive Blocks Quote
 */

// Import block dependencies and components
import Edit from "./components/edit";
import Save from "./components/save";
import attributes from "./attributes";

// Import CSS
import "./styles/style.scss";
import "./styles/styles.editor.scss";

// Internationalization
const { __ } = wp.i18n;

// Register block
const { registerBlockType } = wp.blocks;

// Register the block
registerBlockType("responsive-block-editor-addons/spacer", {
  title: __("Spacer", "responsive-block-editor-addons"),
  description: __(
    "This block allows you to add white space between blocks and customize its height.",
    "responsive-block-editor-addons"
  ),
  icon: "editor-expand",
  category: "responsive_block_editor_addons",
  keywords: [
    __("spacer", "responsive-block-editor-addons"),
    __("responsive", "responsive-block-editor-addons"),
  ],
  attributes: attributes,

  /* Render the block in the editor. */
  edit: (props) => {
    return <Edit {...props} />;
  },

  /* Save the block markup. */
  save: (props) => {
    return <Save {...props} />;
  },
});
