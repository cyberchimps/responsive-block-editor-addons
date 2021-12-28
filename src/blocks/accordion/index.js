/**
 * BLOCK: Accordion - Schema
 */

import ResponsiveBlocksIcon from "../../ResponsiveBlocksIcon.json";
import edit from "./components/edit";
import save from "./components/save";
import icon from "./components/icon";
import attributes from "./attributes";
import deprecated from "./components/deprecated";

//Import Icon Block
import ResponsiveBlockEditorAddonsIcons from "../../block-icons";

// Import CSS
import "./styles/style.scss";
import "./styles/styles.editor.scss";

const { addFilter } = wp.hooks;
const { __ } = wp.i18n;

const { Fragment } = wp.element;
const { withSelect } = wp.data;
const { compose, createHigherOrderComponent } = wp.compose;

const { registerBlockType } = wp.blocks;

/**
 * Override the default block element to add	wrapper props.
 *
 * @param  {Function} BlockListBlock Original component
 * @return {Function} Wrapped component
 */

const enhance = compose(
  withSelect((select) => {
    return {
      selected: select("core/block-editor").getSelectedBlock(),
    };
  })
);
/**
 * Add custom UAG attributes to selected blocks
 *
 * @param {Function} BlockEdit Original component.
 * @return {string} Wrapped component.
 */
const withAccordion = createHigherOrderComponent((BlockEdit) => {
  return enhance(({ ...props }) => {
    return (
      <Fragment>
        <BlockEdit {...props} />
      </Fragment>
    );
  });
}, "withAccordion");

registerBlockType("responsive-block-editor-addons/accordion", {
  /* translators: block name */
  title: __("Accordion", "responsive-block-editor-addons"),
  category: "responsive_block_editor_addons",
  /* translators: block description */
  description: __(
    "Add  customizable accordion dropdowns to your web pages",
    "responsive-block-editor-addons"
  ),
  icon: ResponsiveBlockEditorAddonsIcons.accordion,
  keywords: [
    "responsive-block-editor-addons",
    /* translators: block keyword */
    __("tabs", "responsive-block-editor-addons"),
    /* translators: block keyword (abbreviation for "frequently asked titles") */
    __("accordion", "responsive-block-editor-addons"),
  ],
  supports: {
    align: ["wide", "full"],
    html: false,
  },
  attributes,
    example:{
        innerBlocks: [
            {
                name: "responsive-block-editor-addons/accordion-item",
                innerBlocks: [
                    {
                        name: "responsive-block-editor-addons/accordion-item",
                        attributes: { title: __("What is Accordion?", "responsive-block-editor-addons" ), answer: __("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "responsive-block-editor-addons" ) },
                    },
                ],
            },
            {
                name: "responsive-block-editor-addons/accordion-item",
                innerBlocks: [
                    {
                        name: "responsive-block-editor-addons/accordion-item",
                        attributes: { title: __("What is Accordion?", "responsive-block-editor-addons" ), answer: __("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "responsive-block-editor-addons" ) },
                    },
                ],
            }
        ],
    },
  edit,
  supports: {
    anchor: true,
  },
  save,
  deprecated: deprecated,
});
