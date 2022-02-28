/**
 * BLOCK: Responsive Blocks Googlemap
 */

// Import block dependencies and components
import attributes from "./attributes";
import Edit from "./components/edit";
import Save from "./components/save";

// Import CSS
import "./styles/style.scss";
import "./styles/styles.editor.scss";

//Import Block icon
import ResponsiveBlockEditorAddonsIcons from "../../block-icons";

// Internationalization
const { __ } = wp.i18n;

// Register block
const { registerBlockType } = wp.blocks;

// Register the block
registerBlockType("responsive-block-editor-addons/googlemap", {
  title: __("Google Map", "responsive-block-editor-addons"),
  description: __(
    "Add an address or location to drop a pin on a Google map",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.googlemap,
  category: "responsive_block_editor_addons",
  keywords: [
    __("address", "responsive-block-editor-addons"),
    __("map", "responsive-block-editor-addons"),
    __("google", "responsive-block-editor-addons"),
    __("directions", "responsive-block-editor-addons"),
    __("responsive", "responsive-block-editor-addons"),
  ],
  attributes: attributes,
    example: {
        attributes: {
            /* translators: example attributes */
            address: "India",
            pinned: true
        },
    },
  responsive_block_editor_addons_settings_data: {
    responsive_block_editor_addons_map_zoom: {
      title: __("Zoom", "responsive-block-editor-addons"),
    },
    responsive_block_editor_addons_map_height: {
      title: __("Height in pixels", "responsive-block-editor-addons"),
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
