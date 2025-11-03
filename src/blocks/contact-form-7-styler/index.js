/**
 * BLOCK: Responsive Blocks Contact Form 7 Styler
 */

// Import block dependencies and components
import Edit from "./components/edit";
import Save from "./components/save";
import attributes from "./attributes";

//Import Block Icon
import ResponsiveBlockEditorAddonsIcons from "../../block-icons";
import BlockPreview from "../../block-preview";

// Import CSS
import "./styles/style.scss";
import "./styles/styles.editor.scss";

// Internationalization
const { __ } = wp.i18n;

// Register block
const { registerBlockType } = wp.blocks;

// Register the block
registerBlockType("responsive-block-editor-addons/contact-form-7-styler", {
  title: __("Contact Form 7 Styler", "responsive-block-editor-addons"),
  description: __(
    "Modify or enhance the contact form 7 design",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.contact_form_7_styler,
  category: "responsive_block_editor_addons",
  keywords: [
    __("contact-form-7-styler", "responsive-block-editor-addons"),
    __("Contact Form 7 Styler", "responsive-block-editor-addons"),
    __("responsive", "responsive-block-editor-addons"),
  ],

  attributes: attributes,
  example: {
    attributes: {
      isPreview: true,
    }
  },

  supports: {
		anchor: true
	},

  /* Render the block in the editor. */
  edit: (props) => {
    return props.attributes.isPreview ? <BlockPreview image="contact-form-7-styler" /> : <Edit {...props} />;
  },

  /* Save the block markup. */
  save: (props) => {
    return <Save {...props} />;
  },
});
