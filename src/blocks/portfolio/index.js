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
registerBlockType(
  "responsive-block-editor-addons/portfolio",
  {
    title: __(
      "Portfolio",
      "responsive-block-editor-addons"
    ),
    description: __(
      "Add a grid or list of customizable posts or pages.",
      "responsive-block-editor-addons"
    ),
    icon: ResponsiveBlockEditorAddonsIcons.post_grid,
    category: "responsive_block_editor_addons",
    keywords: [
      __("portfolio", "responsive-block-editor-addons"),
    ],
      example: {},

    getEditWrapperProps(attributes) {
      const { align } = attributes;
      if (-1 !== validAlignments.indexOf(align)) {
        return { "data-align": align };
      }
    },

    edit,

    responsive_block_editor_addons_settings_data: {
      responsive_block_editor_addons_postgrid_postType: {
        title: __("Content Type", "responsive-block-editor-addons"),
      },
      responsive_block_editor_addons_postgrid_queryControls: {
        title: __("Query Controls", "responsive-block-editor-addons"),
      },
      responsive_block_editor_addons_postgrid_offset: {
        title: __("Post Offset", "responsive-block-editor-addons"),
      },
      responsive_block_editor_addons_postgrid_columns: {
        title: __("Columns", "responsive-block-editor-addons"),
      },
      responsive_block_editor_addons_postgrid_displaySectionTitle: {
        title: __("Display Section Title", "responsive-block-editor-addons"),
      },
      responsive_block_editor_addons_postgrid_sectionTitle: {
        title: __("Section Title", "responsive-block-editor-addons"),
      },
      responsive_block_editor_addons_postgrid_displayPostImage: {
        title: __("Display Featured Image", "responsive-block-editor-addons"),
      },
      responsive_block_editor_addons_postgrid_imageSizeValue: {
        title: __("Image Size", "responsive-block-editor-addons"),
      },
      responsive_block_editor_addons_postgrid_displayPostTitle: {
        title: __("Display Post Title", "responsive-block-editor-addons"),
      },
      responsive_block_editor_addons_postgrid_displayPostAuthor: {
        title: __("Display Post Author", "responsive-block-editor-addons"),
      },
      responsive_block_editor_addons_postgrid_displayPostDate: {
        title: __("Display Post Date", "responsive-block-editor-addons"),
      },
      responsive_block_editor_addons_postgrid_displayPostExcerpt: {
        title: __("Display Post Excerpt", "responsive-block-editor-addons"),
      },
      responsive_block_editor_addons_postgrid_excerptLength: {
        title: __("Excerpt Length", "responsive-block-editor-addons"),
      },
      responsive_block_editor_addons_postgrid_displayPostLink: {
        title: __(
          "Display Continue Reading Link",
          "responsive-block-editor-addons"
        ),
      },
      responsive_block_editor_addons_postgrid_readMoreText: {
        title: __("Read More Text", "responsive-block-editor-addons"),
      },
      responsive_block_editor_addons_postgrid_sectionTag: {
        title: __("Post Grid Section Tag", "responsive-block-editor-addons"),
      },
      responsive_block_editor_addons_postgrid_sectionTitleTag: {
        title: __(
          "Section Title Heading Tag",
          "responsive-block-editor-addons"
        ),
      },
      responsive_block_editor_addons_postgrid_postTitleTag: {
        title: __("Post Title Heading Tag", "responsive-block-editor-addons"),
      },
    },

    // Render via PHP
    save() {
      return null;
    },
  }
);
