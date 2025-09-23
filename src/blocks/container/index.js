/**
 * BLOCK: Responsive Blocks Advanced Heading
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
import { __ } from '@wordpress/i18n';

// Register block
import { registerBlockType } from "@wordpress/blocks";

// Register the block
registerBlockType("responsive-block-editor-addons/container", {
  apiVersion: 2,
  title: __("Container", "responsive-block-editor-addons"),
  description: __("Flexbox Container", "responsive-block-editor-addons"),
  icon: ResponsiveBlockEditorAddonsIcons.container,
  category: "responsive_block_editor_addons",
  keywords: [
    __("container", "responsive-block-editor-addons"),
    __("flex", "responsive-block-editor-addons"),
    __("flexbox", "responsive-block-editor-addons"),
  ],

  attributes: attributes,
  example: {},

  supports: {
    html: false,
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
