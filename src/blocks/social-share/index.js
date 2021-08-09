/**
 * BLOCK: Responsive Blocks Social Share
 **/

// Import block dependencies and components
import attributes from "./attributes";
import Edit from "./components/edit";
import Save from "./components/save";

// Import CSS
import "./styles/style.scss";
import "./styles/styles.editor.scss";

// Internationalization
const { __ } = wp.i18n;

// Register block
const { registerBlockType } = wp.blocks;

// Register the block
registerBlockType("responsive-block-editor-addons/social-share", {
  title: __("Social Share", "responsive-block-editor-addons"),
  description: __(
    "This block allows you to display icons linking to your social media profiles or websites.",
    "responsive-block-editor-addons"
  ),
  icon: "share",
  category: "responsive_block_editor_addons",
  keywords: [
    __("Social Share", "responsive-block-editor-addons"),
    __("social icons", "responsive-block-editor-addons"),
    __("Responsive", "responsive-block-editor-addons"),
  ],

  attributes: attributes,

  /* Render the block in the editor. */
  edit: Edit,

  /* Save the block markup. */
  save: (props) => {
    return <Save {...props} />;
  },
});
