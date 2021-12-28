/**
 * BLOCK: Responsive Blocks Image Boxes Block
 */

// Import block dependencies and components
import React from "react";
import Style from "style-it";
import attributes from "./attributes";

//Import Block icon
import ResponsiveBlockEditorAddonsIcons from "../../block-icons";

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
registerBlockType("responsive-block-editor-addons/image-boxes-block", {
  title: __("Image Boxes", "responsive-block-editor-addons"),
  description: __(
    "Add an image box with title, image, and description",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.image_boxes,
  category: "responsive_block_editor_addons",
  keywords: [
    __("imagebox", "responsive-block-editor-addons"),
    __("titles", "responsive-block-editor-addons"),
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
