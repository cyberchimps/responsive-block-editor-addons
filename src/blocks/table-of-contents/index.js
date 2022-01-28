/**
 * BLOCK: Responsive Blocks Table Of Contents
 */

// Import block dependencies and components
import Edit from "./components/edit";
import Save from "./components/save";

//Import Block icon
import ResponsiveBlockEditorAddonsIcons from "../../block-icons";

import attributes from "./attributes";
// Import CSS
import "./styles/style.scss";
import "./styles/styles.editor.scss";

import deprecated from "./components/deprecated";

// Internationalization
const { __ } = wp.i18n;

// Register block
const { registerBlockType } = wp.blocks;

// Register the block
registerBlockType("responsive-block-editor-addons/table-of-contents", {
  title: __("Table Of Contents", "responsive-block-editor-addons"),
  description: __(
    "Display an index that gives website visitors an overview of the content",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.table_of_contents,
  category: "responsive_block_editor_addons",
  keywords: [
    __("table of contents", "responsive-block-editor-addons"),
    __("RBEA", "responsive-block-editor-addons"),
    __("responsive", "responsive-block-editor-addons"),
  ],

  attributes: attributes,
    example: {
        attributes: {
            /* translators: example attributes */
            headingTitle: __("Table Of Contents", 'responsive-block-editor-addons' ),
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

  deprecated,
});
