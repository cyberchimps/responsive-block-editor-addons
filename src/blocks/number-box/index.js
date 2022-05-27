/**
 * BLOCK: Responsive Blocks Number Box
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
const { __ } = wp.i18n;

// Register block
const { registerBlockType } = wp.blocks;

// Register the block
registerBlockType("responsive-block-editor-addons/number-box", {
  title: __("Number Box", "responsive-block-editor-addons"),
  description: __(
    "Add an attractive style to number(s), which can be used to represent steps, process, highlights, services, procedures, etc.",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.advanced_heading,
  category: "responsive_block_editor_addons",
  keywords: [
    __("number", "responsive-block-editor-addons"),
    __("number box", "responsive-block-editor-addons"),
    __("responsive", "responsive-block-editor-addons"),
  ],

  attributes: attributes,

  supports: {
		anchor: true
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
