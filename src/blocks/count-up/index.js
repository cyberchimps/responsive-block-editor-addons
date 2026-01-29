/**
 * BLOCK: Responsive Blocks Count Up
 */

// Import block dependencies and components
import Edit from "./components/edit";
import Save from "./components/save";

//Import Block icon
import ResponsiveBlockEditorAddonsIcons from "../../block-icons";
import BlockPreview from "../../block-preview";

// Import CSS
import "./styles/style.scss";
import "./styles/styles.editor.scss";
import attributes from "./attributes";
import deprecated from "./components/deprecated";

// Internationalization
const { __ } = wp.i18n;

// Register block
const { registerBlockType } = wp.blocks;

// Register the block
registerBlockType("responsive-block-editor-addons/count-up", {
  title: __("Count Up", "responsive-block-editor-addons"),
  description: __(
    "Showcase interesting and notable stats on your page",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.count_up,
  category: "responsive_block_editor_addons",
  keywords: [
    __("Statistics", "responsive-block-editor-addons"),
    __("Count Up", "responsive-block-editor-addons"),
    __("Responsive", "responsive-block-editor-addons"),
  ],

  attributes: attributes,
  example: {
    attributes: {
      isPreview: true,
    }
  },
  /* Render the block in the editor. */
  edit: (props) => {
    return props.attributes.isPreview ? <BlockPreview image="count-up" /> : <Edit {...props} />;
  },

  /* Save the block markup. */
  save: (props) => {
    return <Save {...props} />;
  },
  deprecated: deprecated,
});
