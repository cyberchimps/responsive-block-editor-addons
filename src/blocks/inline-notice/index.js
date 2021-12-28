/**
 * BLOCK: Responsive Blocks Inline Notice
 */

// Import block dependencies and components
import Edit from "./components/edit";
import Save from "./components/save";
import attributes from "./attributes";
// Import CSS
import "./styles/style.scss";
import "./styles/styles.editor.scss";
//Import Block Icon
import ResponsiveBlockEditorAddonsIcons from "../../block-icons";
// Internationalization
const { __ } = wp.i18n;

// Register block
const { registerBlockType } = wp.blocks;

// Register the block
registerBlockType("responsive-block-editor-addons/inline-notice", {
  title: __("Inline Notice", "responsive-block-editor-addons"),
  description: __(
    "Adds a notice block with a combination of title and text",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.inline_notice,
  category: "responsive_block_editor_addons",
  keywords: [
    __("notice", "responsive-block-editor-addons"),
    __("inline notice", "responsive-block-editor-addons"),
    __("responsive", "responsive-block-editor-addons"),
  ],

  attributes: attributes,
    example: {},
  /* Render the block in the editor. */
  edit: (props) => {
    return <Edit {...props} />;
  },

  /* Save the block markup. */
  save: (props) => {
    return <Save {...props} />;
  },
});
