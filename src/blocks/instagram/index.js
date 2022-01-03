/**
 * BLOCK: Responsive Blocks Instagram
 */

// Import block dependencies and components
import Edit from "./components/edit";
import attributes from "./attributes";

import ResponsiveBlockEditorAddonsIcons from "../../block-icons";

// Import CSS
import "./styles/style.scss";

// Internationalization
const { __ } = wp.i18n;

// Register block
const { registerBlockType } = wp.blocks;

// Register the block
registerBlockType("responsive-block-editor-addons/instagram", {
  title: __("Instagram", "responsive-block-editor-addons"),
  description: __(
    "Stream Instagram content directly to your WordPress website",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.instagram,
  category: "responsive_block_editor_addons",
  keywords: [
    __("gutenberg", "responsive-block-editor-addons"),
    __("responsive", "responsive-block-editor-addons"),
    __("instagram", "responsive-block-editor-addons"),
  ],

  attributes: attributes,

  supports: {
    anchor: true,
  },

  /* Render the block in the editor. */
  edit: (props) => {
    return <Edit {...props} />;
  },

  /* Save the block markup. */
  save: () => null,
});
