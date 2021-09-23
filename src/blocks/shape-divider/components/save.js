/**
 * External dependencies
 */
import classnames from "classnames";

/**
 * Internal dependencies
 */
import { getDividerFromStyle } from "./utils";

/**
 * WordPress dependencies
 */
import { getColorClassName } from "@wordpress/block-editor";

const save = ({ attributes, className }) => {
  const {
    block_id,
    backgroundColor,
    responsive_block_editor_addons,
    color,
    horizontalFlip,
    verticalFlip,
    align,
    design
  } = attributes;

  const shapeClass = getColorClassName("color", color);
  const backgroundClass = getColorClassName(
    "background-color",
    backgroundColor
  );

  let classes = classnames(
    attributes.className && design==='empty'? attributes.className :`is-style-${design}`,
    "responsive-block-editor-addons-block-shape-divider",
    `block-${block_id}`,
    {
      "is-vertically-flipped": verticalFlip,
      "is-horizontally-flipped": horizontalFlip,
      [shapeClass]: shapeClass,
      [backgroundClass]: backgroundClass,
    }
  );

  if (
    responsive_block_editor_addons &&
    typeof responsive_block_editor_addons.id !== "undefined"
  ) {
    classes = classnames(
      classes,
      `responsive-block-editor-addons-shape-divider-${responsive_block_editor_addons.id}`,
      `align${align}`
    );
  }

  return (
    <div className={classes} aria-hidden="true">
      <div className="wp-block-responsive-block-editor-addons-shape-divider__svg-wrapper">
        {
          attributes.className && design==='empty'? getDividerFromStyle(attributes.className) : 
          getDividerFromStyle(`is-style-${design}`)
        }
      </div>
      <div className="wp-block-responsive-block-editor-addons-shape-divider__alt-wrapper"></div>
    </div>
  );
};

export default save;
