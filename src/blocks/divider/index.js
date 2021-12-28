/**
 * BLOCK: Responsive Blocks Space Divider
 */

// Import block dependencies and components
import classnames from "classnames";
import attributes from "./attributes";
import Edit from "./components/edit";
import Save from "./components/save";

//Import Block icon
import ResponsiveBlockEditorAddonsIcons from "../../block-icons";

// Components
const { __ } = wp.i18n;

// Register block
const { registerBlockType } = wp.blocks;

// Register the block
registerBlockType("responsive-block-editor-addons/divider", {
  title: __("Divider", "responsive-block-editor-addons"),
  description: __(
    "Add a divider between blocks to make them more distinguishable",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.divider,
  category: "responsive_block_editor_addons",
  keywords: [
    __("divider", "responsive-block-editor-addons"),
    __("spacer", "responsive-block-editor-addons"),
    __("responsive", "responsive-block-editor-addons"),
  ],
  attributes: attributes,
    example: {
        attributes: {
            /* translators: example heading */
            spacerDividerStyle: "solid",
        },
    },
  responsive_block_editor_addons_settings_data: {
    responsive_block_editor_addons_spacer_spacerHeight: {
      title: __("Vertical Margin", "responsive-block-editor-addons"),
    },
    responsive_block_editor_addons_spacer_spacerDivider: {
      title: __("Add Divider", "responsive-block-editor-addons"),
    },
    responsive_block_editor_addons_spacer_spacerDividerStyle: {
      title: __("Divider Style", "responsive-block-editor-addons"),
    },
    responsive_block_editor_addons_spacer_spacerDividerHeight: {
      title: __("Divider Height", "responsive-block-editor-addons"),
    },
    responsive_block_editor_addons_spacer_spacerDividerWidth: {
      title: __("Divider Width", "responsive-block-editor-addons"),
    },
    responsive_block_editor_addons_spacer_dividerColor: {
      title: __("Divider Color", "responsive-block-editor-addons"),
    },
  },

  supports: { align: ["wide", "full", "center"] },

  /* Render the block in the editor. */
  edit: (props) => {
    return <Edit {...props} />;
  },

  /* Save the block markup. */
  save: (props) => {
    return <Save {...props} />;
  },
});
