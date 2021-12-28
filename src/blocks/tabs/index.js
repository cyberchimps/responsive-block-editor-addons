/**
 * BLOCK: Responsive Blocks Tabs
 */

// Import block dependencies and components
import Edit from "./components/edit";
import Save from "./components/save";
import attributes from "./attributes";
// Import CSS
import "./styles/style.scss";
import "./styles/styles.editor.scss";

//Import block icons
import ResponsiveBlockEditorAddonsIcons from "../../block-icons";

// Internationalization
const { __ } = wp.i18n;

// Register block
const { registerBlockType } = wp.blocks;

// Register the block
registerBlockType("responsive-block-editor-addons/tabs", {
  title: __("Tabs", "responsive-block-editor-addons"),
  description: __(
    "This block allows you to structure information the way that is more readable and user-friendly",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.tabs ,
  category: "responsive_block_editor_addons",
  keywords: [
    __("tabs", "responsive-block-editor-addons"),
    __("tab", "responsive-block-editor-addons"),
    __("responsive", "responsive-block-editor-addons"),
  ],
  supports: {
    anchor: true,
  },

  attributes: attributes,
    example: {
        attributes: {
            /* translators: example attributes */

            innerBlocks: [
                {
                    name: 'responsive-block-editor-addons/tabs-child',
                    innerBlocks: [
                        {
                            name: 'responsive-block-editor-addons/tabs-child',
                            attributes: {},

                        },
                    ],
                },
                {
                    name: 'responsive-block-editor-addons/tabs-child',
                    innerBlocks: [
                        {
                            name: 'responsive-block-editor-addons/tabs-child',
                            attributes: { },
                        },
                    ],
                }
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
