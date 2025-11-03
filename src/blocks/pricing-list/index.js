/**
 * BLOCK: Responsive Blocks Pricing Table
 */

// Import block dependencies and components
import attributes from "./attributes";
import Edit from "./components/edit";
import Save from "./components/save";

import deprecated from "./components/deprecated";

//Import Block icon
import ResponsiveBlockEditorAddonsIcons from "../../block-icons";
import BlockPreview from "../../block-preview";

// Import CSS
import "./styles/style.scss";
import "./styles/styles.editor.scss";

// Internationalization
const { __ } = wp.i18n;

// Register block
const { registerBlockType } = wp.blocks;
var desc_text = __(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "responsive-block-editor-addons"
);

// Register the block
registerBlockType("responsive-block-editor-addons/pricing-list", {
  title: __("Pricing List", "responsive-block-editor-addons"),
  description: __(
    "Display a customizable pricing list of your services or products anywhere on your website",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.pricing_list,
  category: "responsive_block_editor_addons",
  keywords: [
    __("pricing", "responsive-block-editor-addons"),
    __("list", "responsive-block-editor-addons"),
    __("responsive", "responsive-block-editor-addons"),
  ],
  attributes: attributes,
  example: {
    attributes: {
      isPreview: true,
    }
  },
  /* Render the block in the editor. */
  edit: (props) => {
    return props.attributes.isPreview ? <BlockPreview image="pricing-list" /> : <Edit {...props} />;
  },

  /* Save the block markup. */
  save: (props) => {
    return <Save {...props} />;
  },

  deprecated,
});
