/**
 * BLOCK: Accordion - Item - Save Block
 */

import classnames from "classnames";
import renderSVG from "../../../../renderIcon";
import generateCSSUnit from "../../../../generateCSSUnit";

const { Fragment } = wp.element;

const { RichText } = wp.blockEditor;

export default function save(props) {
  const { className } = props;
  const {
    block_id,
    title,
    content,
    layout,
    headingTag,
    boxShadowPosition,
      icon,
      iconActive
  } = props.attributes;

  const accordionRenderIcon = () => {
    return (
      <Fragment>
        <span className="responsive-block-editor-addons-icon responsive-block-editor-addons-accordion-icon-wrap">
          {renderSVG(icon)}
        </span>
        <span className="responsive-block-editor-addons-icon-active responsive-block-editor-addons-accordion-icon-wrap">
          {renderSVG(iconActive)}
        </span>
      </Fragment>
    );
  };
  const accordionRenderAccordion = () => {
    return (
      <div className="responsive-block-editor-addons-accordion-item__wrapper">
        <div
          className="responsive-block-editor-addons-accordion-item"
          role="tab"
        >
          <div className="responsive-block-editor-addons-accordion-titles-button responsive-block-editor-addons-accordion-titles">
            {"accordion" === layout && accordionRenderIcon()}
            <RichText.Content
              tagName={headingTag}
              value={title}
              className="responsive-block-editor-addons-title"
            />
          </div>
          <div className="responsive-block-editor-addons-accordion-content">
            <span>
              <RichText.Content tagName="p" value={content} />
            </span>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div
      className={classnames(
        className,
        "responsive-block-editor-addons-accordion-item__outer-wrap",
        `responsive-block-editor-addons-block-${block_id}`
      )}
    >
      {accordionRenderAccordion()}
    </div>
  );
}
