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

const pricingTable = [];

for (var i = 1; i <= ITEM_COUNT; i++) {
    pricingTable.push({
        title: __("Plan " + i, "responsive-block-editor-addons"),
        amount: __("99", "responsive-block-editor-addons"),
        currency: __("$", "responsive-block-editor-addons"),
        price_suffix: __(".00", "responsive-block-editor-addons"),
        sub_price: __("SUB PRICE", "responsive-block-editor-addons"),
        features: [__("Add features", "responsive-block-editor-addons")],
        img_url: "",
        img_id: "",
        img_width: "",
        img_height: "",
        button: __("Button" + i, "responsive-block-editor-addons"),
        buttonURL: "#",
    });
}

// Register block
const { registerBlockType } = wp.blocks;

// Register the block
registerBlockType("responsive-block-editor-addons/pricing-table", {
  title: __("Pricing Table", "responsive-block-editor-addons"),
  description: __(
    "Showcase responsive pricing tables  with a comparison of features and more",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.pricing_table,
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
