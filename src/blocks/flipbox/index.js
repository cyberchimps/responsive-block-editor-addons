/**
 * BLOCK: Responsive Blocks Pricing Table
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
registerBlockType("responsive-block-editor-addons/flipbox", {
  title: __("Flipbox", "responsive-block-editor-addons"),
  description: __(
    "This block allows you to add flipbox to your website.",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.flipbox,
  category: "responsive_block_editor_addons",
  keywords: [
    __("flipbox", "responsive-block-editor-addons"),
    __("features", "responsive-block-editor-addons"),
    __("responsive", "responsive-block-editor-addons"),
  ],
  supports: {
    align: ["wide", "full"],
  },

  attributes: attributes,
    example: {
        attributes: {
            /* translators: example pricing table */
            flipboxArray:[
                {
                    title: __("Front Title ", "responsive-block-editor-addons") ,
                    subtitle: __("Front Subtitle ", "responsive-block-editor-addons") ,
                    back_title: __("Back Title ", "responsive-block-editor-addons") ,
                    back_subtitle: __("Back Subtitle ", "responsive-block-editor-addons") ,
                    icon: "accusoft",
                    back_icon: "address-book",
                    front_button: __("Button", "responsive-block-editor-addons"),
                    front_buttonURL: "",
                    back_button: __("Button", "responsive-block-editor-addons") ,
                    back_buttonURL: "",
                },

            ],
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
