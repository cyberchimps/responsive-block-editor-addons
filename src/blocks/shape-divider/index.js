/**
 * Internal dependencies
 */
import edit from "./components/edit";
import icon from "./icon";
import metadata from "./components/block.json";
import save from "./components/save";
import deprecated from "./components/deprecated";


//Import Block icon
import ResponsiveBlockEditorAddonsIcons from "../../block-icons";

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
  icon: ResponsiveBlockEditorAddonsIcons.shape_divider,
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
  attributes,
  edit,
  save,
    deprecated,
});
