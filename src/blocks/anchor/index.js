/**
 * BLOCK: Anchor
 */

// Import block dependencies and components
import Edit from "./components/edit";
import Save from "./components/save";
import attributes from "./attributes";
import icons from "../../utils/components/icons";
import renderSVG from "../../renderIcon";
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
registerBlockType("responsive-block-editor-addons/anchor", {
  title: __("Anchor", "responsive-block-editor-addons"),
  description: __(
    "Allows to create anchor links for performing quick jumps from one part of the page to another (internal links)",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.anchor,
  category: "responsive_block_editor_addons",
  keywords: [
    __("anchor", "responsive-block-editor-addons"),
    __("responsive", "responsive-block-editor-addons"),
  ],
  supports: {
    anchor: true,
  },
  attributes: attributes,
    example: {
        attributes: {
            /* translators: example attributes */
        },
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
