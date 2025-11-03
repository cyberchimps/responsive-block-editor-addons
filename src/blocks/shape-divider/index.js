/**
 * Internal dependencies
 */
import Edit from "./components/edit";
import icon from "./icon";
import metadata from "./components/block.json";
import save from "./components/save";

//Import Block icon
import ResponsiveBlockEditorAddonsIcons from "../../block-icons";
import BlockPreview from "../../block-preview";

/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Block constants
 */
const { name, category, attributes } = metadata;

import { registerBlockType } from "@wordpress/blocks";
import dividers from "./components/dividers";

registerBlockType("responsive-block-editor-addons/shape-divider", {
  /* translators: block name */
  title: __("Shape Divider", "responsive-block-editor-addons"),
  category: "responsive_block_editor_addons",
  /* translators: block description */
  description: __(
    "Create customizable section dividers in your blocks",
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
  example: {
    attributes: {
      isPreview: true,
    }
  },
  edit: (props) => {
    return props.attributes.isPreview ? <BlockPreview image="shape-divider" /> : <Edit {...props} />;
  },
  save,
});
