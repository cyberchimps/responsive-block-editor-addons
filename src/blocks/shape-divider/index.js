/**
 * Internal dependencies
 */
import edit from "./components/edit";
import icon from "./icon";
import metadata from "./components/block.json";
import save from "./components/save";

/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Block constants
 */
const { name, category, attributes } = metadata;

import { registerBlockType } from "@wordpress/blocks";

registerBlockType("responsive-block-editor-addons/shape-divider", {
  /* translators: block name */
  title: __("Shape Divider", "responsive-block-editor-addons"),
  category: "responsive_block_editor_addons",
  /* translators: block description */
  description: __(
    "Add a shape divider to visually distinquish page sections.",
    "responsive-block-editor-addons"
  ),
  icon,
  keywords: [
    "responsive-block-editor-addons",
    "hr",
    "svg",
    /* translators: block keyword */
    __("separator", "responsive-block-editor-addons"),
  ],
  supports: {
    align: ["wide", "full"],
    responsiveBlocksSpacing: true,
  },
  styles: [
    {
      name: "wavy",
      /* translators: block style */
      label: __("Wavy", "responsive-block-editor-addons"),
      isDefault: true,
    },
    {
      name: "hills",
      /* translators: block style */
      label: __("Hills", "responsive-block-editor-addons"),
    },
    {
      name: "waves",
      /* translators: block style */
      label: __("Waves", "responsive-block-editor-addons"),
    },
    {
      name: "angled",
      /* translators: block style */
      label: __("Angled", "responsive-block-editor-addons"),
    },
    {
      name: "sloped",
      /* translators: block style */
      label: __("Sloped", "responsive-block-editor-addons"),
    },
    {
      name: "rounded",
      /* translators: block style */
      label: __("Rounded", "responsive-block-editor-addons"),
    },
    {
      name: "triangle",
      /* translators: block style */
      label: __("Triangle", "responsive-block-editor-addons"),
    },
    {
      name: "pointed",
      /* translators: block style */
      label: __("Pointed", "responsive-block-editor-addons"),
    },
  ],
  attributes,
  edit,
  save,
});
