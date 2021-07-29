/**
 * BLOCK: Responsive Blocks Expand/Show More
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
registerBlockType("responsive-block-editor-addons/expand", {
  title: __("Expand/Show More", "responsive-block-editor-addons"),
  description: __(
    "This block allows you to add expand/show more block in your webpage.",
    "responsive-block-editor-addons"
  ),
  icon: "editor-expand",
  category: "responsive_block_editor_addons",
  keywords: [
    __("expand", "responsive-block-editor-addons"),
    __("show more", "responsive-block-editor-addons"),
    __("responsive", "responsive-block-editor-addons"),
  ],
  supports: {
    align: ["wide", "full", "center", "left", "right"],
  },
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
