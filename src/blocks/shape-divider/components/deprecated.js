import metadata from "./block.json";
import {getColorClassName} from "@wordpress/block-editor";
import classnames from "classnames";
import { getDividerFromStyle } from "./utils";

const { name, category, attributes } = metadata;
const deprecated = [
  {
    // attributes,
    attributes: {
        "block_id": {
            "type": "string"
        },
        "align": {
            "type": "string",
            "default": "full"
        },
        "height": {
            "type": "number",
            "default": 100
        },
        "heightTablet": {
            "type": "number"
        },
        "heightMobile": {
            "type": "number"
        },
        "shapeHeight": {
            "type": "number",
            "default": 100
        },
        "shapeHeightTablet": {
            "type": "number"
        },
        "shapeHeightMobile": {
            "type": "number"
        },
        "backgroundHeight": {
            "type": "number",
            "default": 50
        },
        "backgroundHeightTablet": {
            "type": "number"
        },
        "backgroundHeightMobile": {
            "type": "number"
        },
        "syncHeight": {
            "type": "boolean",
            "default": true
        },
        "syncHeightAlt": {
            "type": "boolean",
            "default": true
        },
        "verticalFlip": {
            "type": "boolean",
            "default": false
        },
        "horizontalFlip": {
            "type": "boolean",
            "default": false
        },
        "color": {
            "type": "string"
        },
        "customColor": {
            "type": "string"
        },
        "backgroundColor": {
            "type": "string",
            "default": "#fff"
        },
        "customBackgroundColor": {
            "type": "string",
            "default": "#fff"
        },
        "noBottomMargin": {
            "type": "boolean",
            "default": true
        },
        "noTopMargin": {
            "type": "boolean",
            "default": true
        },
        "justAdded": {
            "type": "boolean",
            "default": true
        },
        "colorLocation1": {
            "type": "number",
            "default": 0
        },
        "colorLocation2": {
            "type": "number",
            "default": 100
        },
        "gradientDirection": {
            "type": "number",
            "default": 90
        },
        "backgroundColor1": {
            "type": "string",
            "default": "#fff"
        },
        "backgroundColor2": {
            "type": "string",
            "default": "#fff"
        },
        "backgroundType": {
            "type": "string",
            "default": "none"
        }
    },
    save: function (props) {
      const {
        attributes: {
            block_id,
            backgroundColor,
            responsive_block_editor_addons,
            color,
            horizontalFlip,
            verticalFlip,
            align,
        },
        setAttributes,
          className,
      } = props;

        const shapeClass = getColorClassName("color", color);
        const backgroundClass = getColorClassName(
            "background-color",
            backgroundColor
        );

        let classes = classnames(
            className,
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
            {getDividerFromStyle(attributes.className)}
    </div>
        <div className="wp-block-responsive-block-editor-addons-shape-divider__alt-wrapper"></div>
            </div>
      );
    },
  },
    {
        // attributes,
        attributes: attributes,
        save: function (props) {
            const {
                attributes: {
                    block_id,
                    backgroundColor,
                    responsive_block_editor_addons,
                    color,
                    horizontalFlip,
                    verticalFlip,
                    align,
                    design,
                },
                setAttributes,
                className,
            } = props;

            const shapeClass = getColorClassName("color", color);
            const backgroundClass = getColorClassName(
                "background-color",
                backgroundColor
            );

            let classes = classnames(
                className,
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
                {getDividerFromStyle(classes)}
                </div>
                <div className="wp-block-responsive-block-editor-addons-shape-divider__alt-wrapper"></div>
                </div>
        );
        },
    },
    {
        // attributes,
        attributes: attributes,
        save: function (props) {
            const {
                attributes: {
                    block_id,
                    backgroundColor,
                    responsive_block_editor_addons,
                    color,
                    horizontalFlip,
                    verticalFlip,
                    align,
                    design,
                },
                setAttributes,
                className,
            } = props;

            const shapeClass = getColorClassName("color", color);
            const backgroundClass = getColorClassName(
                "background-color",
                backgroundColor
            );

            let classes = classnames(
                className,
                "responsive-block-editor-addons-block-shape-divider",
                `block-${block_id}`,
                `is-rbea-separator-style-${design}`,
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
                {getDividerFromStyle(classes)}
                </div>
                <div className="wp-block-responsive-block-editor-addons-shape-divider__alt-wrapper"></div>
                </div>
            );
        },
    },
];

export default deprecated;
