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
  attributes,
  edit,
  save,
});
