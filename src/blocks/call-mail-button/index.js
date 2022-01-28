/**
 * BLOCK: Responsive Blocks Call/Mail Button
 */

// Import block dependencies and components
import Edit from "./components/edit";
import Save from "./components/save";
import attributes from "./attributes";
// Import CSS
import "./styles/style.scss";
import "./styles/styles.editor.scss";
//Import Block Icons
import ResponsiveBlockEditorAddonsIcons from "../../block-icons";

// Internationalization
const { __ } = wp.i18n;

// Register block
const { registerBlockType } = wp.blocks;

// Register the block
registerBlockType("responsive-block-editor-addons/call-mail-button", {
  title: __("Call/Mail Button", "responsive-block-editor-addons"),
  description: __(
    "This block allows you to add a button that will automatically make a call or send an email",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.call_mail_button,
  category: "responsive_block_editor_addons",
  keywords: [
    __("call", "responsive-block-editor-addons"),
    __("mail", "responsive-block-editor-addons"),
    __("call mail button", "responsive-block-editor-addons"),
    __("responsive", "responsive-block-editor-addons"),
  ],

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
