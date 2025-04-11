/**
 * BLOCK: Responsive Blocks Advance Columns
 */

// Import block dependencies and components
import Edit from "./components/edit";
import Save from "./components/save";
import attributes from "./attributes";

//Import Block icons
import ResponsiveBlockEditorAddonsIcons from "../../block-icons";

// Import CSS
import "./styles/style.scss";
import "./styles/styles.editor.scss";
import deprecated from "./components/deprecated";

// Internationalization
const { __ } = wp.i18n;

// Register block
const { registerBlockType } = wp.blocks;

// Register the block
registerBlockType("responsive-block-editor-addons/advance-columns", {
  title: __("Advanced Columns", "responsive-block-editor-addons"),
  description: __(
    "Create attractive rows by adding a number of customizable columns in a single row",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.advance_columns,
  category: "responsive_block_editor_addons",
  keywords: [
    __("calendar", "responsive-block-editor-addons"),
    __("date", "responsive-block-editor-addons"),
    __("responsive", "responsive-block-editor-addons"),
  ],
  supports: {
    align: ["wide", "full"],
  },
  
  attributes,
  
  example:{
        columns: 2,
    },

  /* Render the block in the editor. */
  edit: (props) => {
    return <Edit {...props} />;
  },

  /* Save the block markup. */
  save: (props) => {
    return <Save {...props} />;
  },
  deprecated: deprecated,
});
