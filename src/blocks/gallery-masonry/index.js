/**
 * Internal dependencies
 */
import edit from "./components/edit";
import metadata from "./block.json";
import save from "./components/save";
import { GalleryAttributes } from "../../utils/components/block-gallery/shared";

//Import Block icon
import ResponsiveBlockEditorAddonsIcons from "../../block-icons";

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
    "Display multiple images in an organized masonry gallery",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.gallery_masonry,
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
          src:
            "./admin/images/box1.jpg",
        },
        { index: 1, src: "./admin/images/box1.jpg" },
        {
          index: 2,
          src:
		  "./admin/images/box1.jpg",
        },
        { index: 3, src: "./admin/images/box1.jpg" },
        {
          index: 4,
          src: "./admin/images/box1.jpg",
        },
      ],
    },
  },
  attributes,
  edit,
  save,
});
