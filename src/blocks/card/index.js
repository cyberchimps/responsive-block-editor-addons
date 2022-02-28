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
const ITEM_COUNT = 2;

const cardsArray = [];

for (var i = 1; i <= ITEM_COUNT; i++) {
    cardsArray.push({
        title: __("Title", "responsive-block-editor-addons"),
        subtitle: __("Subtitle", "responsive-block-editor-addons"),
        button: __("Button" + i, "responsive-block-editor-addons"),
        buttonURL: "",
        image: "",
        content:
            __("Description for this block. Use this space for describing your block. Any text will do. Description for this block. You can use this space for describing your block.", "responsive-block-editor-addons"),
    });
}

// Register block
const { registerBlockType } = wp.blocks;

// Register the block
registerBlockType("responsive-block-editor-addons/card", {
  title: __("Card", "responsive-block-editor-addons"),
  description: __(
    "This block allows you to add cards to describe your product, service or a person",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.card,
  category: "responsive_block_editor_addons",
  keywords: [
    __("card", "responsive-block-editor-addons"),
    __("responsive", "responsive-block-editor-addons"),
  ],
  attributes: attributes,
    
  /* Render the block in the editor. */
  edit: (props) => {
    return <Edit {...props} />;
  },

  /* Save the block markup. */
  save: (props) => {
    return <Save {...props} />;
  },
});
