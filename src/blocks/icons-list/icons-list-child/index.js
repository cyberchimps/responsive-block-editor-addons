/**
 * BLOCK: Responsive Blocks Buttons
 */

// Import block dependencies and components
import Edit from "./components/edit";
import Save from "./components/save";
import attributes from "./attributes";
import deprecated from "./components/deprecated";

//Import Block icon
import ResponsiveBlockEditorAddonsIcons from "../../../block-icons";

// Import CSS
import "./styles/style.scss";

// Internationalization
const { __ } = wp.i18n;

// Register block
const { registerBlockType } = wp.blocks;

// Register the block
registerBlockType("responsive-block-editor-addons/icons-list-child", {
  title: __("Icons List Child", "responsive-block-editor-addons"),
  description: __("Add icons or images", "responsive-block-editor-addons"),
  icon: ResponsiveBlockEditorAddonsIcons.icons_list_child,
  category: "responsive_block_editor_addons",
  parent: ["responsive-block-editor-addons/icons-list"],
  keywords: [
    __("icons", "responsive-block-editor-addons"),
    __("list", "responsive-block-editor-addons"),
    __("responsive", "responsive-block-editor-addons"),
  ],
  attributes: attributes,
  responsive_block_editor_addons_settings_data: {
    responsive_block_editor_addons_icon_icon: {
      title: __("Icon", "responsive-block-editor-addons"),
    },
    responsive_block_editor_addons_icon_label_color: {
      title: __("Text Color", "responsive-block-editor-addons"),
    },
    responsive_block_editor_addons_icon_icon_color: {
      title: __("Icon Color", "responsive-block-editor-addons"),
    },
    responsive_block_editor_addons_icon_icon_bg_color: {
      title: __("Icon Background Color", "responsive-block-editor-addons"),
    },
    responsive_block_editor_addons_icon_icon_border_color: {
      title: __("Icon Border Color", "responsive-block-editor-addons"),
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

  deprecated: deprecated,
});
