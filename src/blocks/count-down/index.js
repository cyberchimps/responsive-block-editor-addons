/**
 * BLOCK: Responsive Blocks Count Down
**/

// Import block dependencies and components
import attributes from "./attributes";
import Edit from "./components/edit";
import Save from "./components/save";
import deprecated from "./components/deprecated";

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
registerBlockType("responsive-block-editor-addons/count-down", {
  title: __("Count Down", "responsive-block-editor-addons"),
  description: __(
    "Notify your visitors about the upcoming events or big days using a Countdown block",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.count_down,
  category: "responsive_block_editor_addons",
  keywords: [
    __("Statistics", "responsive-block-editor-addons"),
    __("Count Down", "responsive-block-editor-addons"),
    __("Responsive", "responsive-block-editor-addons"),
  ],

  attributes: attributes,
    example: {
        attributes: {
            /* translators: example attributes */
            days: __("29", 'responsive-block-editor-addons' ),
            hours: __("23", 'responsive-block-editor-addons' ),
            minutes: __("59", 'responsive-block-editor-addons' ),
            seconds: __("59", 'responsive-block-editor-addons' ),
        },
    },
  /* Render the block in the editor. */
  edit: Edit,

  /* Save the block markup. */
  save: Save,

  deprecated,
});
