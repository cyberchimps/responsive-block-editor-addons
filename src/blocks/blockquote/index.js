/**
 * BLOCK: Responsive Blocks Quote
 */

// Import block dependencies and components
import Edit from "./components/edit";
import Save from "./components/save";
import attributes from "./attributes";
import Deprecated from "./components/deprecated";

//Import block icon
import ResponsiveBlockEditorAddonsIcons from "../../block-icons";
import BlockPreview from "../../block-preview";

// Import CSS
import "./styles/style.scss";
import "./styles/styles.editor.scss";

// Internationalization
const { __ } = wp.i18n;

// Register block
const { registerBlockType } = wp.blocks;

// Register the block
registerBlockType("responsive-block-editor-addons/blockquote", {
  title: __("Blockquote", "responsive-block-editor-addons"),
  description: __(
    "Embed and highlight statements with the Gutenberg Blockquote Block",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.blockquote,
  category: "responsive_block_editor_addons",
  keywords: [
    __("quote", "responsive-block-editor-addons"),
    __("blockquote", "responsive-block-editor-addons"),
    __("responsive", "responsive-block-editor-addons"),
  ],
  example: {
    attributes: {
      isPreview: true,
    }
  },
  attributes: attributes,

  /* Render the block in the editor. */
  edit: (props) => {
    return props.attributes.isPreview ? <BlockPreview image="blockquote" /> : <Edit {...props} />;
  },

  /* Save the block markup. */
  save: (props) => {
    return <Save {...props} />;
  },

    /* Deprecated versions */
  deprecated: Deprecated,
});
