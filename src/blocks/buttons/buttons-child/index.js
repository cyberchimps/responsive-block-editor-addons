/**
 * BLOCK: Responsive Blocks Buttons
 */

// Import block dependencies and components
import Edit from "./components/edit";
import Save from "./components/save";
import attributes from "./attributes";
import deprecated from "./components/deprecated";

// Import Block icon
import ResponsiveBlockEditorAddonsIcons from "../../../block-icons";

// Import CSS
import "./styles/style.scss";

// Internationalization
const { __ } = wp.i18n;

// Register block
const { registerBlockType } = wp.blocks;

// Register the block
registerBlockType("responsive-block-editor-addons/buttons-child", {
  title: __("Buttons Child", "responsive-block-editor-addons"),
  description: __(
    "Add and customize individual buttons",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.buttons_child,
  parent: ["responsive-block-editor-addons/buttons"],
  category: "responsive_block_editor_addons",
  keywords: [
    __("buttons", "responsive-block-editor-addons"),
    __("multiple buttons", "responsive-block-editor-addons"),
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

  deprecated: deprecated,
});
