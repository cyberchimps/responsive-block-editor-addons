/**
 * BLOCK: Featured Product Block
 */

//Import block dependencies and components
import Edit from "./components/edit";
import Save from "./components/save";
import attributes from "./attributes";

//Import Block Icon
import ResponsiveBlockEditorAddonsIcons from "../../block-icons";

//Import CSS
import "./styles/style.scss"
import "./styles/styles.editor.scss"

// Internationalization
const { __ } = wp.i18n;

//Register block
const { registerBlockType } = wp.blocks;


//Register the block
registerBlockType("responsive-block-editor-addons/featured-product", {
    title: __("Featured Product",
    "responsive-block-editor-addons"),
    description:__(
        "Visually highlight a product or variation and encourage prompt action.",
        "responsive-block-editor-addons"
    ),
    icon: ResponsiveBlockEditorAddonsIcons.advanced_heading,
    category: "responsive_block_editor_addons",
    keywords: [
        __("feature","responsive-block-editor-addons"),
        __("featured-product","responsive-block-editor-addons"),
        __("responsive", "responsive-block-editor-addons"),
    ],

    attributes: attributes,
    // example: {
    //     attributes: {
    //         /* translators: example heading */
    //         headingTitle: __( 'Write a Heading', 'responsive-block-editor-addons' ),
    //         /* translators: example description */
    //         headingDesc: __( 'Write some text', 'responsive-block-editor-addons' ),
    //     },
    // },

    supports: {
        anchor: true,
        align: true,
        
    },

    /* Render the block in the editor. */
    edit: (props) => {
        return <Edit {...props} />;
    },

    /* Save the block markup. */
    save: (props) => {
        return <Save {...props}/>;
    },
}); 