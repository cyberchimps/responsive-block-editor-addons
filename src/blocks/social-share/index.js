/**
 * BLOCK: Responsive Blocks Social Icons
 **/

// Import block dependencies and components
import attributes from "./attributes";
import Edit from "./components/edit";
import Save from "./components/save";

// Import CSS
import "./styles/style.scss";
import "./styles/styles.editor.scss";

//Import block icons
import ResponsiveBlockEditorAddonsIcons from "../../block-icons";
import BlockPreview from "../../block-preview";

// Internationalization
const { __ } = wp.i18n;

// Register block
const { registerBlockType } = wp.blocks;

// Register the block
registerBlockType("responsive-block-editor-addons/social-icons", {
  title: __("Social Icons", "responsive-block-editor-addons"),
  description: __(
    "This block allows you to display icons linking to your social media profiles or websites",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.social_icons,
  category: "responsive_block_editor_addons",
  keywords: [
    __("Social Icons", "responsive-block-editor-addons"),
    __("social icons", "responsive-block-editor-addons"),
    __("Responsive", "responsive-block-editor-addons"),
  ],

  attributes: attributes,
  example: {
    attributes: {
      isPreview: true,
    }
  },
  /* Render the block in the editor. */
  edit: (props) => {
    return props.attributes.isPreview ? <BlockPreview image="social-icons" /> : <Edit {...props} />;
  },
  /* Save the block markup. */
  save: (props) => {
    return <Save {...props} />;
  },
});
