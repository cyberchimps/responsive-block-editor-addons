/**
 * Internal dependencies
 */
import Edit from "./components/edit";
import Save from "./components/save";
import deprecated from "./components/deprecated";

//Import Block icon
import ResponsiveBlockEditorAddonsIcons from "../../block-icons";
import BlockPreview from "../../block-preview";

// Import CSS.
import "./styles/style.scss";
import "./styles/styles.editor.scss";
import attributes from "./attributes";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

// Register block
const { registerBlockType } = wp.blocks;
registerBlockType("responsive-block-editor-addons/video-popup", {
  /* translators: block name */
  title: __("Video Popup", "responsive-block-editor-addons"),
  category: "responsive_block_editor_addons",
  /* translators: block description */
  description: __("Embed a YouTube, Vimeo, or a self-hosted video with this block", "responsive-block-editor-addons"),
  icon: ResponsiveBlockEditorAddonsIcons.video_popup,
  keywords: [
    __("video", "responsive-block-editor-addons"),
    /* translators: block keyword */
    __("YouTube Vimeo mp4", "responsive-block-editor-addons"),
  ],
  supports: {
    align: ["center", "wide", "full"],
    html: false,
  },
  attributes: attributes,
  example: {
    attributes: {
      isPreview: true,
    }
  },
  /* Render the block in the editor. */
  edit: (props) => {
    return props.attributes.isPreview ? <BlockPreview image="video-popup" /> : <Edit {...props} />;
  },

  /* Save the block markup. */
  save: (props) => {
    return <Save {...props} />;
  },
    deprecated,
});
