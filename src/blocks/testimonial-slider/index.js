/**
 * BLOCK: Testimonial
 */

import classnames from "classnames";
import edit from "./components/edit";
import save from "./components/save";
import attributes from "./attributes";
import "./styles/style.scss";
import "./styles/styles.editor.scss";
const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

registerBlockType("responsive-block-editor-addons/testimonial-slider", {
  title: __("Testimonial Slider", "responsive-block-editor-addons"),
  description: __(
    "Add a testimonial slider.",
    "responsive-block-editor-addons"
  ),
  icon: "format-quote",
  category: "responsive_block_editor_addons",
  keywords: [
    __("testimonial slider", "responsive-block-editor-addons"),
    __("testimonial", "responsive-block-editor-addons"),
    __("slider", "responsive-block-editor-addons"),
    __("responsive", "responsive-block-editor-addons"),
  ],
  supports: {
    anchor: true,
  },
  attributes: attributes,
  edit,
  save,
  example: {},
});
