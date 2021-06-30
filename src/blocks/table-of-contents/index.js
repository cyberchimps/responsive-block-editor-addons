/**
 * BLOCK: Responsive Blocks Table Of Contents
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
registerBlockType("responsive-block-editor-addons/table-of-contents", {
  title: __("Table Of Contents", "responsive-block-editor-addons"),
  description: __(
    "This block allows access to large contents of post/page through the heading of the contents.",
    "responsive-block-editor-addons"
  ),
  icon: "welcome-widgets-menus",
  category: "responsive_block_editor_addons",
  keywords: [
    __("table of contents", "responsive-block-editor-addons"),
    __("RBEA", "responsive-block-editor-addons"),
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
