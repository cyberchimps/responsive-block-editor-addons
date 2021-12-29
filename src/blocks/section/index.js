/**
 * BLOCK: Responsive Blocks Column
 */

// Import block dependencies and components
import Edit from "./components/edit";
import Save from "./components/save";
import attributes from "./attributes";

//Import Block icon
import ResponsiveBlockEditorAddonsIcons from "../../block-icons";

// Import CSS
import "./styles/style.scss";
import "./styles/styles.editor.scss";

// Internationalization
const { __ } = wp.i18n;

// Register block
const { registerBlockType } = wp.blocks;

// Register the block
registerBlockType("responsive-block-editor-addons/section", {
  title: __("Section", "responsive-block-editor-addons"),
  description: __(
    "Add a section block that allows you to customize your page sections",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.section,
  category: "responsive_block_editor_addons",
  keywords: [
    __("section", "responsive-block-editor-addons"),
    __("responsive", "responsive-block-editor-addons"),
  ],
  supports: {
    align: ["wide", "full"],
    anchor: true,
  },
  attributes: attributes,
    example: {
        attributes: {
            /* translators: example attributes */
            width: 900,
            blockTopPadding: 30,
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
