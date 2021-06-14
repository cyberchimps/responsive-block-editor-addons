/**
 * Internal dependencies
 */
import edit from "./components/edit";
import metadata from "./block.json";
import save from "./components/save";
import { GalleryAttributes } from "../../utils/components/block-gallery/shared";

/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Block constants
 */
const { name, category } = metadata;

const attributes = {
  ...GalleryAttributes,
  ...metadata.attributes,
};

import { registerBlockType } from "@wordpress/blocks";

registerBlockType("responsive-block-editor-addons/gallery-masonry", {
  /* translators: block name */
  title: __("Masonry", "responsive-block-editor-addons"),
  category: "responsive_block_editor_addons",
  /* translators: block description */
  description: __(
    "Display multiple images in an organized masonry gallery.",
    "responsive-block-editor-addons"
  ),
  icon: "slides",
  keywords: [
    "responsive-block-editor-addons",
    /* translators: block keyword */
    __("gallery", "responsive-block-editor-addons"),
    /* translators: block keyword */
    __("photos", "responsive-block-editor-addons"),
    /* translators: block keyword */
    __("lightbox", "responsive-block-editor-addons"),
  ],
  supports: {
    align: ["wide", "full"],
    html: false,
    responsiveBlocksSpacing: true,
  },
  example: {
    attributes: {
      gridSize: "lrg",
      gutter: 5,
      images: [
        {
          index: 0,
          url:
            "https://s.w.org/images/core/5.3/Sediment_off_the_Yucatan_Peninsula.jpg",
        },
        { index: 1, url: "https://s.w.org/images/core/5.3/Windbuchencom.jpg" },
        {
          index: 2,
          url:
            "https://s.w.org/images/core/5.3/Biologia_Centrali-Americana_-_Cantorchilus_semibadius_1902.jpg",
        },
        { index: 3, url: "https://s.w.org/images/core/5.3/MtBlanc1.jpg" },
        {
          index: 4,
          url: "https://s.w.org/images/core/5.3/Glacial_lakes,_Bhutan.jpg",
        },
      ],
    },
  },
  attributes,
  edit,
  save,
});
