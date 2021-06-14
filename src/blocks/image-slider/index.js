/**
 * Internal dependencies
 */
import edit from "./components/edit";
import metadata from "./block.json";
import save from "./components/save";

// Import CSS.
import "./styles/style.scss";
import "./styles/styles.editor.scss";

import { GalleryAttributes } from "../../utils/components/block-gallery/shared";

/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

const attributes = {
  ...GalleryAttributes,
  ...metadata.attributes,
};
import { registerBlockType } from "@wordpress/blocks";

registerBlockType("responsive-block-editor-addons/image-slider", {
  /* translators: block name */
  title: __("Image Slider", "responsive-block-editor-addons"),
  category: "responsive_block_editor_addons",
  /* translators: block description */
  description: __("Display multiple images.", "responsive-block-editor-addons"),
  attributes,
  icon: "slides",
  keywords: [
    "responsive-block-editor-addons",
    /* translators: block keyword */
    __("gallery", "responsive-block-editor-addons"),
    /* translators: block keyword */
    __("photos", "responsive-block-editor-addons"),
  ],
  supports: {
    align: ["wide", "full"],
    html: false,
  },
  example: {
    attributes: {
      gridSize: "lrg",
      gutter: 5,
      images: [
        {
          url:
            "https://s.w.org/images/core/5.3/Biologia_Centrali-Americana_-_Cantorchilus_semibadius_1902.jpg",
        },
        { url: "https://s.w.org/images/core/5.3/Glacial_lakes,_Bhutan.jpg" },
        { url: "https://s.w.org/images/core/5.3/MtBlanc1.jpg" },
      ],
    },
  },
  edit,
  save,
});
