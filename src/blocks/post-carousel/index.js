/**
 * BLOCK: Responsive Blocks Post and Page Grid
 */

// Import block dependencies and components
import edit from "./components/edit";

//Import Block icon
import ResponsiveBlockEditorAddonsIcons from "../../block-icons";

// Import CSS
import "./styles/style.scss";
import "./styles/styles.editor.scss";

// Components
const { __ } = wp.i18n;

// Register block controls
const { registerBlockType } = wp.blocks;

// Register alignments
const validAlignments = ["center", "wide", "full"];

// Register the block
registerBlockType("responsive-block-editor-addons/post-carousel", {
  title: __("Post Carousel", "responsive-block-editor-addons"),
  description: __(
    "Display your blog posts in a beautiful slider or carousel format",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.post_carousel,
  category: "responsive_block_editor_addons",
  keywords: [
    __("slider", "responsive-block-editor-addons"),
    __("posts", "responsive-block-editor-addons"),
    __("blog", "responsive-block-editor-addons"),
    __("latest", "responsive-block-editor-addons"),
    __("carousel", "responsive-block-editor-addons"),
    __("responsive", "responsive-block-editor-addons"),
  ],
    example: {},

  getEditWrapperProps(attributes) {
    const { align } = attributes;
    if (-1 !== validAlignments.indexOf(align)) {
      return { "data-align": align };
    }
  },

  edit,

  // Render via PHP
  save() {
    return null;
  },
});
