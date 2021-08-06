/**
 * BLOCK: Responsive Blocks WP SEARCH
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
registerBlockType("responsive-block-editor-addons/wp-search", {
  title: __("WP Search", "responsive-block-editor-addons"),
  description: __(
    "Helps to search for the required information easily.",
    "responsive-block-editor-addons"
  ),
  icon: "search",
  category: "responsive_block_editor_addons",
  keywords: [
    __("wp search", "responsive-block-editor-addons"),
    __("search", "responsive-block-editor-addons"),
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
