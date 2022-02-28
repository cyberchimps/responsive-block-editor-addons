/**
 * BLOCK: Atomic Blocks Call-To-Action
 */

// Import block dependencies and components
import Edit from "./components/edit";
import Save from "./components/save";
import attributes from "./attributes";

//Import Block icon
import ResponsiveBlockEditorAddonsIcons from "../../block-icons";

// Components
const { __ } = wp.i18n;

// Extend component
const { Component } = wp.element;

// Register block
const { registerBlockType } = wp.blocks;

// Register editor components
const {
  AlignmentToolbar,
  URLInput,
  BlockControls,
  BlockAlignmentToolbar,
  RichText,
} = wp.blockEditor;

// Register components
const { Button, Dashicon, Icon } = wp.components;

// Register the block
registerBlockType(
  "responsive-block-editor-addons/responsive-block-editor-addons-cta",
  {
    title: __("Call To Action", "responsive-block-editor-addons"),
    description: __(
      "Add a call to action section with a title, text, and a button",
      "responsive-block-editor-addons"
    ),
    icon: ResponsiveBlockEditorAddonsIcons.call_to_action,
    category: "responsive_block_editor_addons",
    keywords: [
      __("call to action", "responsive-block-editor-addons"),
      __("cta", "responsive-block-editor-addons"),
      __("responsive", "responsive-block-editor-addons"),
    ],
      example: {
          attributes: {
              /* translators: example title */
              ctaTitle: __( 'Call-To-Action Title', 'responsive-block-editor-addons' ),
              /* translators: example biography */
              ctaText: __( 'Call To Action Text', 'responsive-block-editor-addons' ),
              /* translators: example button text */
              buttonText: __( 'Button text', 'responsive-block-editor-addons' ),
          },
      },

    attributes: attributes,

    responsive_block_editor_addons_settings_data: {
      responsive_block_editor_addons_cta_textOptions: {
        title: __("Text Options", "responsive-block-editor-addons"),
      },
      responsive_block_editor_addons_cta_backgroundOptions: {
        title: __("Background Options", "responsive-block-editor-addons"),
      },
      responsive_block_editor_addons_cta_buttonOptions: {
        title: __("Button Options", "responsive-block-editor-addons"),
      },
    },

    getEditWrapperProps({ ctaWidth }) {
      if ("left" === ctaWidth || "right" === ctaWidth || "full" === ctaWidth) {
        return { "data-align": ctaWidth };
      }
    },

    /* Render the block in the editor. */
    edit: (props) => {
      return <Edit {...props} />;
    },

    /* Save the block markup. */
    save: (props) => {
      return <Save {...props} />;
    },
  }
);
