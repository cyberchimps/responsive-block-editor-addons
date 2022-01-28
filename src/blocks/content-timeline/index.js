/**
 * BLOCK: Responsive Blocks Content Timeline
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
const ITEM_COUNT = 5;

const items = [];
const date_arr = [];

for (var i = 1; i <= ITEM_COUNT; i++) {
  items.push({
    time_heading: __("Timeline Heading ", "responsive-block-editor-addons") + i,
    time_desc: __(
      "This is Timeline description, you can change me anytime click here ", "responsive-block-editor-addons"
    ),
  });
  var j = i - 1;
  var today = new Date("1/1/2019");
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear() - j;

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  today = mm + "/" + dd + "/" + yyyy;
  var p = { title: today };

  date_arr.push({
    title: today,
  });
}

// Register block
const { registerBlockType } = wp.blocks;

// Register the block
registerBlockType("responsive-block-editor-addons/content-timeline", {
  title: __("Content Timeline", "responsive-block-editor-addons"),
  description: __(
    "Design beautiful content timelines on your website",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.content_timeline,
  category: "responsive_block_editor_addons",
  keywords: [
    __("content", "responsive-block-editor-addons"),
    __("timeline", "responsive-block-editor-addons"),
    __("responsive", "responsive-block-editor-addons"),
  ],
  attributes: attributes,
    example: {
        attributes: {
            /* translators: example content timeline */
            timelineItems:[
                {
                    time_heading: __("Timeline Heading 1", "responsive-block-editor-addons"),
                    time_desc: __(
                        "This is Timeline description, you can change me anytime click here ", "responsive-block-editor-addons"
                    ),
                },
                {
                    time_heading: __("Timeline Heading 2", "responsive-block-editor-addons"),
                    time_desc: __(
                        "This is Timeline description, you can change me anytime click here ", "responsive-block-editor-addons"
                    ),
                },
                {
                    time_heading: __("Timeline Heading 3", "responsive-block-editor-addons"),
                    time_desc: __(
                        "This is Timeline description, you can change me anytime click here ", "responsive-block-editor-addons"
                    ),
                },
                {
                    time_heading: __("Timeline Heading 4", "responsive-block-editor-addons"),
                    time_desc: __(
                        "This is Timeline description, you can change me anytime click here ", "responsive-block-editor-addons"
                    ),
                },
                {
                    time_heading: __("Timeline Heading 5", "responsive-block-editor-addons"),
                    time_desc: __(
                        "This is Timeline description, you can change me anytime click here ", "responsive-block-editor-addons"
                    ),
                },

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
