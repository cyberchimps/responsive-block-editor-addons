/**
 * BLOCK: Responsive Blocks Column
 */

// Import block dependencies and components
import Edit from "./components/edit";
import Save from "./components/save";

//Import Block icons
import ResponsiveBlockEditorAddonsIcons from "../../../block-icons";

// Import CSS
import "./styles/style.scss";
import "./styles/styles.editor.scss";
import deprecated from "./components/deprecated";
import attributes from "./attributes";

// Internationalization
const { __ } = wp.i18n;

// Register block
const { registerBlockType } = wp.blocks;

// Register the block
registerBlockType("responsive-block-editor-addons/column", {
  title: __("Column", "responsive-block-editor-addons"),
  description: __(
    "Add and customize columns",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.column,
  category: "responsive_block_editor_addons",
  parent: ["responsive-block-editor-addons/advance-columns"],
  keywords: [
    __("calendar", "responsive-block-editor-addons"),
    __("date", "responsive-block-editor-addons"),
    __("responsive", "responsive-block-editor-addons"),
  ],

  attributes,
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
