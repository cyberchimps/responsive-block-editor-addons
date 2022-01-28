/**
 * BLOCK: Responsive Blocks Advanced Heading
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
registerBlockType("responsive-block-editor-addons/progress-bar", {
	title: __("Progress Bar", "responsive-block-editor-addons"),
	description: __(
		"Showcase progress of any activity by means of animated indicators",
		"responsive-block-editor-addons"
	),
	icon: ResponsiveBlockEditorAddonsIcons.progress_bar,
	category: "responsive_block_editor_addons",
	keywords: [
		__("progress", "responsive-block-editor-addons"),
		__("progress bar", "responsive-block-editor-addons"),
		__("responsive", "responsive-block-editor-addons"),
	],

	attributes: attributes,
    example: {
        attributes: {
            /* translators: example attributes */
            progressBarStyle: "horizontal",
        },
    },
	supports: {
		anchor: true
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
