/**
 * BLOCK: Responsive Blocks Team
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
registerBlockType("responsive-block-editor-addons/info-block", {
  title: __("Info Block", "responsive-block-editor-addons"),
  description: __(
    "This block allows you to add icon or image along with heading and description.",
    "responsive-block-editor-addons"
  ),
  icon: "align-left",
  category: "responsive_block_editor_addons",
  keywords: [
    __("information", "responsive-block-editor-addons"),
    __("info", "responsive-block-editor-addons"),
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
