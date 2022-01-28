/**
 * BLOCK: Responsive Blocks Team
 */

// Import block dependencies and components
import Edit from "./components/edit";
import Save from "./components/save";
import attributes from "./attributes";
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

const ITEM_COUNT = 2;

const teamBlock = [];

for (var i = 1; i <= ITEM_COUNT; i++) {
  teamBlock.push({
    teamName: __("John Doe", "responsive-block-editor-addons"),
    teamDesignation: __("Designation", "responsive-block-editor-addons"),
    teamDescription: __(
      "Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      "responsive-block-editor-addons"
    ),
    teamImgURL: "",
    teamImgId: "",
    twitterUrl: "",
    facebookUrl: "",
    linkedinUrl: "",
    instagramUrl: "",
    youtubeUrl: "",
    pinterestUrl: "",
    emailAddress: "",
  });
}

// Register the block
registerBlockType("responsive-block-editor-addons/team", {
  title: __("Team", "responsive-block-editor-addons"),
  description: __(
    "Display the details about your team members  by adding a profile picture, name, and links to their social profiles",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.team,
  category: "responsive_block_editor_addons",
  keywords: [
    __("team", "responsive-block-editor-addons"),
    __("members", "responsive-block-editor-addons"),
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

  deprecated: deprecated,
});
