import classnames from "classnames";
import attributes from "../attributes";

const { InnerBlocks } = wp.blockEditor;

const deprecated = [
  {
    // attributes,
    attributes: attributes,
    save: function (props) {
      const {
        attributes: { block_id, equalHeight },
        className,
        setAttributes,
      } = props;

      const equalHeightClass = equalHeight
        ? "responsive-block-editor-addons-accordion-equal-height"
        : "";

      return (
        <div
          className={classnames(
            className,
            "responsive-block-editor-addons-accordion__outer-wrap",
            `responsive-block-editor-addons-block-${block_id}`,
            `responsive-block-editor-addons-accordion-icon-${props.attributes.iconAlign}`,
            `responsive-block-editor-addons-accordion-layout-${props.attributes.layout}`,
            `responsive-block-editor-addons-accordion-expand-first-${props.attributes.expandFirstItem}`,
            `responsive-block-editor-addons-accordion-inactive-other-${props.attributes.inactiveOtherItems}`,
            equalHeightClass
          )}
        >
          <div className="responsive-block-editor-addons-accordion__wrap responsive-block-editor-addons-buttons-layout-wrap">
            <InnerBlocks.Content />
          </div>
        </div>
      );
    },
  },
  {
    // attributes,
    attributes: attributes,
    save: function (props) {
      const {
        attributes: { block_id, equalHeight },
        className,
        setAttributes,
      } = props;

      const equalHeightClass = equalHeight
        ? "responsive-block-editor-addons-accordion-equal-height"
        : "";

      return (
        <div
          className={classnames(
            className,
            "responsive-block-editor-addons-accordion__outer-wrap",
            `responsive-block-editor-addons-block-${block_id}`,
            `responsive-block-editor-addons-accordion-icon-${props.attributes.iconAlign}`,
            `responsive-block-editor-addons-accordion-layout-${props.attributes.layout}`,
            `responsive-block-editor-addons-accordion-expand-first-${props.attributes.expandFirstItem}`,
            `responsive-block-editor-addons-accordion-inactive-other-${props.attributes.inactiveOtherItems}`,
            equalHeightClass
          )}
          data-accordiontoggle={true}
        >
          <div className="responsive-block-editor-addons-accordion__wrap responsive-block-editor-addons-buttons-layout-wrap">
            <InnerBlocks.Content />
          </div>
        </div>
      );
    },
  },
];

export default deprecated;
