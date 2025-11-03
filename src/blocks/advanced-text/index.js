/**
 * BLOCK: Gutenberg Blocks Library's Advanced Text Block
 */
import Edit from "./components/edit";
import Save from "./components/save";
import attributes from "./attributes";
import ResponsiveBlockEditorAddonsIcons from "../../block-icons";
import BlockPreview from "../../block-preview";
import "./styles/style.scss";
import "./styles/styles.editor.scss";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType("responsive-block-editor-addons/advanced-text", {
  title: __("Advanced Text", "responsive-block-editor-addons"),
  description: __(
    "Highlight the most important text using special typography to draw the attention of visitors",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.advanced_text,
  category: "responsive_block_editor_addons",
  keywords: [
    __("text", "responsive-block-editor-addons"),
    __("advanced text", "responsive-block-editor-addons"),
    __("responsive", "responsive-block-editor-addons"),
  ],

  attributes: attributes,

  example: {
    attributes: {
      isPreview: true,
    }
  },

  supports: {
    anchor: true,
  },

  edit: (props) => {
    return props.attributes.isPreview ? <BlockPreview image="advanced-text" /> : <Edit {...props} />;
  },

  save: (props) => {
    return <Save {...props} />;
  },
});
