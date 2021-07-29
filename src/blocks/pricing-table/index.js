/**
 * BLOCK: Responsive Blocks Pricing Table
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
const ITEM_COUNT = 2;

const pricingTable = [];

for (var i = 1; i <= ITEM_COUNT; i++) {
  pricingTable.push({
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
registerBlockType("responsive-block-editor-addons/pricing-table", {
  title: __("Pricing Table", "responsive-block-editor-addons"),
  description: __(
    "This block allows you to add pricing tables.",
    "responsive-block-editor-addons"
  ),
  icon: "welcome-widgets-menus",
  category: "responsive_block_editor_addons",
  keywords: [
    __("pricing", "responsive-block-editor-addons"),
    __("plans", "responsive-block-editor-addons"),
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
