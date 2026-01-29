/**
 * BLOCK: Responsive Blocks WP SEARCH
 */

// Import block dependencies and components
import Edit from "./components/edit";
import Save from "./components/save";
import attributes from "./attributes";
import deprecated from "./components/deprecated";
// Import CSS
import "./styles/style.scss";
import "./styles/styles.editor.scss";
//Import block icons
import ResponsiveBlockEditorAddonsIcons from "../../block-icons";
import BlockPreview from "../../block-preview";

// Internationalization
const { __ } = wp.i18n;

// Register block
const { registerBlockType } = wp.blocks;

// Register the block
registerBlockType("responsive-block-editor-addons/wp-search", {
  title: __("WP Search", "responsive-block-editor-addons"),
  description: __(
    "Display the WordPress search field anywhere on your page easily",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.wp_search,
  category: "responsive_block_editor_addons",
  keywords: [
    __("wp search", "responsive-block-editor-addons"),
    __("search", "responsive-block-editor-addons"),
    __("responsive", "responsive-block-editor-addons"),
  ],

  attributes: attributes,
  example: {
    attributes: {
      isPreview: true,
    }
  },
  /* Render the block in the editor. */
  edit: (props) => {
    return props.attributes.isPreview ? <BlockPreview image="wp-search" /> : <Edit {...props} />;
  },

  /* Save the block markup. */
  save: (props) => {
    return <Save {...props} />;
  },
  deprecated: deprecated,
});
