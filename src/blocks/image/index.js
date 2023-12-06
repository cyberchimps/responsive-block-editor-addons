import Edit from "./components/edit";
import Save from "./components/save";
import attributes from "./attributes";

import ResponsiveBlockEditorAddonsIcons from "../../block-icons";

// Internationalization
const { __ } = wp.i18n;

// Register block
const { registerBlockType } = wp.blocks;

// Register the block
registerBlockType("responsive-block-editor-addons/image", {
  title: __("Image", "responsive-block-editor-addons"),
  description: __(
    "Modify or enhance the image design",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.image_block,
  category: "responsive_block_editor_addons",
  keywords: [
    __("image", "responsive-block-editor-addons"),
    __("Image", "responsive-block-editor-addons"),
    __("responsive", "responsive-block-editor-addons"),
  ],

  attributes: attributes,

  edit: (props) => {
    return <Edit {...props} />;
  },

  save: (props) => {
    return <Save {...props} />;
  },
});
