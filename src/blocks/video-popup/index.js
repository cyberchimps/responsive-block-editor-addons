/**
 * Internal dependencies
 */
import Edit from "./components/edit";
import Save from "./components/save";
import deprecated from "./components/deprecated";

//Import Block icon
import ResponsiveBlockEditorAddonsIcons from "../../block-icons";

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
            /* translators: example heading */
            videoLink:"https://www.youtube.com/watch?v=XHOmBV4js_E\u0026amp;feature=youtu.be",
            playButtonType:"outline",
            playButtonSize:100,
            vidwidth:550,
            vidwidthTablet:355.6,
            vidwidthMobile:323.2,
            vidheight:595,
            vidheightTablet:385.34,
            vidheightMobile:350.49,
            imgID:261,
            counterId:"843ea296-e254-432a-ade0-98f27df35802"
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
    deprecated,
});
