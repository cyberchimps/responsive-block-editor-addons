/**
 * BLOCK: Responsive Blocks Pricing Table
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
const ITEM_COUNT = 2;

const featureGrid = [];

for (var i = 1; i <= ITEM_COUNT; i++) {
  featureGrid.push({
    title: "Plan " + i,
    amount: "",
    currency: "$",
    price_suffix: ".00",
    sub_price: "SUB PRICE",
    features: [],
    img_url: "",
    img_id: "",
    img_width: "",
    img_height: "",
    button: "Button" + i,
    buttonURL: "#",
  });
}

// Register block
const { registerBlockType } = wp.blocks;

// Register the block
registerBlockType("responsive-block-editor-addons/feature-grid1", {
  title: __("Feature Grid 1", "responsive-block-editor-addons"),
  description: __(
    "This block allows you to add pricing tables.",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.feature_grid,
  category: "responsive_block_editor_addons",
  keywords: [
    __("feature", "responsive-block-editor-addons"),
    __("grid", "responsive-block-editor-addons"),
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
