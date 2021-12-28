/**
 * BLOCK: Responsive Blocks How To
 */

// Import block dependencies and components
import Edit from "./components/edit";
import Save from "./components/save";
import attributes from "./attributes";
// Import CSS
import "./styles/style.scss";
import "./styles/styles.editor.scss";

// Internationalization
const { __ } = wp.i18n;

// Register block
const { registerBlockType } = wp.blocks;

// Register the block
registerBlockType("responsive-block-editor-addons/how-to", {
    title: __("How to Schema", "responsive-block-editor-addons"),
    description: __(
        "This block helps you add a step by step 'how-to' guide with images, description and call to action for each step",
        "responsive-block-editor-addons"
    ),
    icon: "book",
    category: "responsive_block_editor_addons",
    keywords: [
        __("how", "responsive-block-editor-addons"),
        __("how to schema", "responsive-block-editor-addons"),
        __("schema", "responsive-block-editor-addons"),
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
