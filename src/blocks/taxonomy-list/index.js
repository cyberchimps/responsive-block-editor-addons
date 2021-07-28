/**
 * BLOCK: Responsive Block Taxonomy List
 */

// Import block dependencies and components
import edit from "./components/edit";

// Import CSS
import "./styles/style.scss";
import "./styles/styles.editor.scss";

// Components
const { __ } = wp.i18n;

// Register block controls
const { registerBlockType } = wp.blocks;

// Register the block
registerBlockType("responsive-block-editor-addons/taxonomy-list", {
    title: __("Taxonomy List", "responsive-block-editor-addons"),
    description: __(
        "Displays content categorization for various post types",
        "responsive-block-editor-addons"
    ),
    icon: "list-view",
    category: "responsive_block_editor_addons",
    keywords: [
        __("taxonomy", "responsive-block-editor-addons"),
        __("list", "responsive-block-editor-addons"),
        __("taxonomy list", "responsive-block-editor-addons"),
        __("responsive", "responsive-block-editor-addons"),
    ],

    edit,

    // Render via PHP
    save() {
        return null;
    },
});
