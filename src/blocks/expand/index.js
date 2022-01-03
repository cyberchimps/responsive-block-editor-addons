/**
 * BLOCK: Responsive Blocks Expand/Show More
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
registerBlockType("responsive-block-editor-addons/expand", {
  title: __("Expand/Show More", "responsive-block-editor-addons"),
  description: __(
    "Display small snippets of text to your visitors before displaying the entire information",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.expand,
  category: "responsive_block_editor_addons",
  keywords: [
    __("expand", "responsive-block-editor-addons"),
    __("show more", "responsive-block-editor-addons"),
    __("responsive", "responsive-block-editor-addons"),
  ],
  supports: {
    align: ["wide", "full", "center", "left", "right"],
  },
  attributes: attributes,
    example: {
        attributes: {
            /* translators: example title */
            blockTitle: __( 'Title for this block', 'responsive-block-editor-addons' ),
            /* translators: example description */
            expandLessText: __( 'Some short text that can be expanded to show more details.', 'responsive-block-editor-addons' ),
            /* translators: example label */
            moreLabel: __( 'Show more', 'responsive-block-editor-addons' ),
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
