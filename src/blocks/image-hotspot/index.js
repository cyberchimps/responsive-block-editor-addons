//Responsive Gutenberg Blocks Library's Image Hotspot Block

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import "./styles/style.scss";
import "./styles/styles.editor.scss";
import Edit from "./components/edit";
import Save from "./components/save";
import attributes from "./attributes";
import ResponsiveBlockEditorAddonsIcons from "../../block-icons";

registerBlockType("responsive-block-editor-addons/image-hotspot", {
  title: __("Image Hotspot", "responsive-block-editor-addons"),
  description: __(
    "Highlight specific parts of the image with animated pointers to make images more interactive and digestible",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.image_hotspot,
  category: "responsive_block_editor_addons",
  keywords: [
    __("Image", "responsive-block-editor-addons"),
    __("Responsive", "responsive-block-editor-addons"),
    __("Image Hotspot", "responsive-block-editor-addons"),
  ],

  attributes: attributes,

  edit: (props) => {
    return <Edit {...props} />;
  },

  save: (props) => {
    return <Save {...props} />;
  },
});
