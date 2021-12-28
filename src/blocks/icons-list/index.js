/**
 * BLOCK: Responsive Blocks Icon List
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
registerBlockType("responsive-block-editor-addons/icons-list", {
  title: __("Icons List", "responsive-block-editor-addons"),
  description: __("Place an image or icon in a list format", "responsive-block-editor-addons"),
  icon: ResponsiveBlockEditorAddonsIcons.icons_list,
  category: "responsive_block_editor_addons",
  keywords: [
    __("icons", "responsive-block-editor-addons"),
    __("list", "responsive-block-editor-addons"),
    __("responsive", "responsive-block-editor-addons"),
  ],
  attributes: attributes,

    responsive_block_editor_addons_settings_data: {
    responsive_block_editor_addons_icon_icon_layout: {
      title: __("Layout", "responsive-block-editor-addons"),
    },
    responsive_block_editor_addons_icon_iconPosition: {
      title: __("Icon Alignment", "responsive-block-editor-addons"),
    },
    responsive_block_editor_addons_icon_size: {
      title: __("Icon Size", "responsive-block-editor-addons"),
    },
    responsive_block_editor_addons_icon_gap: {
      title: __("Gap between Items", "responsive-block-editor-addons"),
    },
    responsive_block_editor_addons_icon_inner_gap: {
      title: __("Gap between Icon and Label", "responsive-block-editor-addons"),
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
