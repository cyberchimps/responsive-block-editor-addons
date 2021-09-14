import Buttons from "./buttons";
import React from "react";
import classnames from "classnames";
import ResponsiveBlocksIcon from "../../../../ResponsiveBlocksIcon.json";
import renderSVG from "../../../../renderIcon";
import attributes from "../attributes";

const { RichText } = wp.blockEditor;

const deprecated = [
  {
    // attributes,
    attributes: attributes,
    save: function (props) {
      const {
        attributes: {
            block_id,
            counterId,
            label,
            target,
            link,
            opacity,
            icon,
            iconPosition,
            boxShadowPosition,
            hoverEffect,
            inheritFromTheme,
        },
        setAttributes,
      } = props;

      let imgopacity = opacity / 100;

      var boxShadowPositionCSS = boxShadowPosition;

      var classAfterInheritCheck = " not-inherited-from-theme";
      if(inheritFromTheme) {
          classAfterInheritCheck = " inherited-from-theme";
      }
      let updatedButtonTextClass = "responsive-block-editor-addons-button__link_child" + classAfterInheritCheck;
  
      if ("outset" === boxShadowPosition) {
          boxShadowPositionCSS = "";
      }

      return (
        <Buttons {...props}>
        <div
          className={classnames(
            `responsive-block-editor-addons-${counterId}`,
            "responsive-block-editor-addons-button__wrapper",
            `responsive-block-editor-addons-button__effect-${hoverEffect}`,
            inheritFromTheme ? "wp-block-button" : null
          )}
        >
          <div
            className={classnames(
              "responsive-block-editor-addons-buttons-repeater",
              "responsive-block-editor-addons-button__wrapper",
              inheritFromTheme ? "wp-block-button__link" : null
            )}
          >
            {"" !== icon && iconPosition == "before" && (
              <span
                className={classnames(
                  `responsive-block-editor-addons-button__icon`,
                  `responsive-block-editor-addons-button__icon-position-${iconPosition}`
                )}
              >
                {renderSVG(icon)}
              </span>
            )}
            <RichText.Content
              value={label}
              tagName="a"
              className={updatedButtonTextClass}
              href={link}
              hoverEffect={hoverEffect}
              rel={target ? "noopener noreferrer" : null}
              target={target ? "_blank" : null}
            />
            {"" !== icon && iconPosition == "after" && (
              <span
                className={classnames(
                  `responsive-block-editor-addons-button__icon`,
                  `responsive-block-editor-addons-button__icon-position-${iconPosition}`
                )}
              >
                {renderSVG(icon)}
              </span>
            )}
          </div>
        </div>
      </Buttons>
      );
    },
  },
  {
    // attributes,
    attributes: attributes,
    save: function (props) {
      const {
        block_id,
        counterId,
        label,
        target,
        link,
        opacity,
        icon,
        iconPosition,
        boxShadowPosition,
        hoverEffect,
        inheritFromTheme,
      } = props.attributes;

      let imgopacity = opacity / 100;

      var boxShadowPositionCSS = boxShadowPosition;    
      var classAfterInheritCheck = " not-inherited-from-theme";
      if(inheritFromTheme) {
        classAfterInheritCheck = " inherited-from-theme";
      }
      let updatedButtonTextClass = "responsive-block-editor-addons-button__link_child" + classAfterInheritCheck;   
      if ("outset" === boxShadowPosition) {
        boxShadowPositionCSS = "";
      }    
      return (
        <Buttons {...props}>
        <div
          className={classnames(
            `responsive-block-editor-addons-${counterId}`,
            "responsive-block-editor-addons-button__wrapper",
            `responsive-block-editor-addons-button__effect-${hoverEffect}`,
            inheritFromTheme ? "wp-block-button" : null
          )}
        >
          <a
            className={classnames(
              "responsive-block-editor-addons-buttons-repeater",
              "responsive-block-editor-addons-button__wrapper",
              inheritFromTheme ? "wp-block-button__link" : null
            )}
            href={link}
            rel={target ? "noopener noreferrer" : null}
            target={target ? "_blank" : null}
          >
            {"" !== icon && iconPosition == "before" && (
              <span
                className={classnames(
                  `responsive-block-editor-addons-button__icon`,
                  `responsive-block-editor-addons-button__icon-position-${iconPosition}`
                )}
              >
                {renderSVG(icon)}
              </span>
            )}
            <RichText.Content
              value={label}
              tagName="div"
              className={updatedButtonTextClass}
              hoverEffect={hoverEffect}
            />
            {"" !== icon && iconPosition == "after" && (
              <span
                className={classnames(
                  `responsive-block-editor-addons-button__icon`,
                  `responsive-block-editor-addons-button__icon-position-${iconPosition}`
                )}
              >
                {renderSVG(icon)}
              </span>
            )}
          </a>
        </div>
      </Buttons>
      );
    },
  },
];

export default deprecated;
