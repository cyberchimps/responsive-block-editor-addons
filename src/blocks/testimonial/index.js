/**
 * BLOCK: Responsive Blocks Testimonial
 */

// Import block dependencies and components
import Edit from "./components/edit";
import Save from "./components/save";
import attributes from "./attributes";

//Import Block icon
import ResponsiveBlockEditorAddonsIcons from "../../block-icons";

// Import CSS
import "./styles/style.scss";
import "./styles/styles.editor.scss";

// Internationalization
const { __ } = wp.i18n;

// Register block
const { registerBlockType } = wp.blocks;

// Register the block
registerBlockType("responsive-block-editor-addons/testimonial", {
  title: __("Testimonial", "responsive-block-editor-addons"),
  description: __(
    "Add a user testimonial with a name and title",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.testimonial,
  category: "responsive_block_editor_addons",
  keywords: [
    __("testimonial", "responsive-block-editor-addons"),
    __("quote", "responsive-block-editor-addons"),
    __("responsive", "responsive-block-editor-addons"),
  ],
  attributes: attributes,

  responsive_block_editor_addons_settings_data: {
    responsive_block_editor_addons_testimonial_testimonialFontSize: {
      title: __("Font Size", "responsive-block-editor-addons"),
    },
    responsive_block_editor_addons_testimonial_testimonialCiteAlign: {
      title: __("Cite Alignment", "responsive-block-editor-addons"),
    },
    responsive_block_editor_addons_testimonial_testimonialBackgroundColor: {
      title: __("Background Color", "responsive-block-editor-addons"),
    },
    responsive_block_editor_addons_testimonial_testimonialTextColor: {
      title: __("Text Color", "responsive-block-editor-addons"),
    },
  },

  /* Render the block in the editor. */
  edit: (props) => {
    return <Edit {...props} />;
  },

  /* Save the block markup. */
  save: (props) => {
    return <Save {...props} />;
  },
});
