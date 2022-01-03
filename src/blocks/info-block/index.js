/**
 * BLOCK: Responsive Blocks Team
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
registerBlockType("responsive-block-editor-addons/info-block", {
  title: __("Info Block", "responsive-block-editor-addons"),
  description: __(
    "This block allows you to add icon or image along with heading and description",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.info_block,
  category: "responsive_block_editor_addons",
  keywords: [
    __("information", "responsive-block-editor-addons"),
    __("info", "responsive-block-editor-addons"),
    __("responsive", "responsive-block-editor-addons"),
  ],
  attributes: attributes,
    example: {
        attributes: {
            /* translators: example attributes */
            resinfoBlockTitle: __("Info Box", 'responsive-block-editor-addons' ),
            resprefixTitle: __( 'Prefix', 'responsive-block-editor-addons' ),
            resDescHeading: __("Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.", "responsive-block-editor-addons"),
            icon: "fa fa-star",
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
