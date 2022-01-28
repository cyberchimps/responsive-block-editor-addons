/**
 * BLOCK: Responsive Blocks Buttons
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
registerBlockType("responsive-block-editor-addons/buttons", {
  title: __("Multi Buttons", "responsive-block-editor-addons"),
  description: __(
    "Design better call-to-actions with multiple designer buttons",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.buttons,
  category: "responsive_block_editor_addons",
  keywords: [
    __("buttons", "responsive-block-editor-addons"),
    __("multi buttons", "responsive-block-editor-addons"),
    __("responsive", "responsive-block-editor-addons"),
  ],
    
  attributes: attributes,

  responsive_block_editor_addons_settings_data: {
    responsive_block_editor_addons_button_buttonAlignment: {
      title: __("Alignment", "responsive-block-editor-addons"),
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
