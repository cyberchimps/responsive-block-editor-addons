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
  example: {
    attributes: {
      block_id: "example-preview",
      count: 3,
      contentAlign: "center",
      textColor: "#333333",
      itemBackgroundColor: "#f9f9f9",
      hoverTextColor: "#ffffff",
      itemHoverBackgroundColor: "#0073aa",
      hoverBorderColor: "#005177",
      verticalAlignment: "center",
      titleHeadingTag: "h3",
      gutter: "medium",
      blockBorderRadius: 12,
      imageboxesBlock: [
        {
          title: "Box 1",
          hover_description: "This is box 1",
          img_url: "https://images.unsplash.com/photo-1603415526960-f7e0328d06f0?auto=format&fit=crop&w=600&q=80",
          img_id: "",
          cta_url: "#",
        },
        {
          title: "Box 2",
          hover_description: "This is box 2",
          img_url: "https://images.unsplash.com/photo-1508923567004-3a6b8004f3d3?auto=format&fit=crop&w=600&q=80",
          img_id: "",
          cta_url: "#",
        },
        {
          title: "Box 3",
          hover_description: "This is  box 3",
          img_url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=600&q=80",
          img_id: "",
          cta_url: "#",
        },
      ],
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
