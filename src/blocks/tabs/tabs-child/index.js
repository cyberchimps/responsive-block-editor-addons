/**
 * BLOCK: Responsive Blocks Tabs
 */

// Import block dependencies and components
import Edit from "./components/edit";
import Save from "./components/save";
import attributes from "./attributes";
// Import CSS
import "./styles/style.scss";
import "./styles/styles.editor.scss";

// Internationalization
const { __ } = wp.i18n;

// Register block
const { registerBlockType } = wp.blocks;

// Register the block
registerBlockType("responsive-block-editor-addons/tabs-child", {
  title: __("Tabs Child", "responsive-block-editor-addons"),
  description: __(
    "Add tab content",
    "responsive-block-editor-addons"
  ),
  icon: "category",
  category: "responsive_block_editor_addons",
  keywords: [
    __("tabs", "responsive-block-editor-addons"),
    __("tabs child", "responsive-block-editor-addons"),
    __("responsive", "responsive-block-editor-addons"),
  ],
  parent: ["responsive-block-editor-addons/tabs"],

  supports: {
		anchor: true,
	},
  
  attributes: attributes,

  /* Render the block in the editor. */
  edit: (props) => {
    return <Edit {...props} />;
  },

  /* Save the block markup. */
  save: (props) => {
    return <Save {...props} />;
  },
});
