/**
 * BLOCK: Accordion - Schema - Child
 */

import ResponsiveBlocksIcon from "../../../ResponsiveBlocksIcon.json";
import edit from "./components/edit";
import save from "./components/save";
import icon from "../components/icon";
import attributes from "./attributes.js";

//Import Block icon
import ResponsiveBlockEditorAddonsIcons from "../../../block-icons";

// Import CSS
import "./styles/style.scss";
import "./styles/styles.editor.scss";

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

registerBlockType("responsive-block-editor-addons/accordion-item", {
  /* translators: block name */
  title: __("Accordion Item", "responsive-block-editor-addons"),
  category: "responsive_block_editor_addons",
  /* translators: block description */
  description: __(
    "Add collapsable accordion items",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.accordion_item,
  keywords: [
    "responsive-block-editor-addons",
    /* translators: block keyword */
    __("tabs", "responsive-block-editor-addons"),
    /* translators: block keyword (abbreviation for "frequently asked titles") */
    __("accordion", "responsive-block-editor-addons"),
  ],
  parent: ["responsive-block-editor-addons/accordion"],
  supports: {
    reusable: true,
    html: true,
    inserter: true,
  },
  attributes,
  edit,
  save,
});
