import classnames from "classnames";
const { Component, Fragment } = wp.element;
const { jQuery: $ } = window;
import { times, escape } from "lodash";
import renderSVG from "../../../renderIcon";
export default class Save extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      block_id,
      id,
      url,
      alt,
      hoverAnimation,
      imagePoints,
      tooltipTrigger,
      tooltipTheme,
      tooltipArrow,
      tooltipAnimation,
      dotIcon,
      dotSize,
      dotPaddings,
      dotColor,
      dotBackground,
      dotOpacity,
      dotPulse,
      dotAppearanceAnimation,
      className,
    } = this.props.attributes;

    const imagePointsParsed = imagePoints != "" ? JSON.parse(imagePoints) : [];

    const wrapperProps = {
      className: classnames(
        className,
        `responsive-block-editor-addons-block-image-hotspot`,
        `block-${block_id}`
      ),
      "data-animation": hoverAnimation ? hoverAnimation : undefined,
      "data-appearance-animation": dotAppearanceAnimation
        ? dotAppearanceAnimation
        : undefined,
    };

    const imageHTML = url ? (
      <img
        src={url}
        alt={typeof alt != "undefined" ? alt : null}
        className={
          `responsive_block_addons__image ` + (id ? `wp-image-${id}` : "")
        }
      />
    ) : null;

    const renderPoints = (index) => {
      if (typeof imagePointsParsed[index] !== "undefined") {
        const dotClass = classnames(`responsive_block_addons__dot`, {
          [`has-animation-${dotPulse}`]: dotPulse != "none",
        });

        const dotStyle = {
          padding: dotPaddings && dotPaddings != 6 ? dotPaddings : undefined,
          opacity:
            dotOpacity && dotOpacity != 100 ? dotOpacity / 100 : undefined,
          left: imagePointsParsed[index].position.x
            ? imagePointsParsed[index].position.x
            : undefined,
          top: imagePointsParsed[index].position.y
            ? imagePointsParsed[index].position.y
            : undefined,

          backgroundColor: imagePointsParsed[index].backgroundColor
            ? imagePointsParsed[index].backgroundColor
            : dotBackground
            ? dotBackground
            : undefined,
        };

        const innerDotStyle = {
          fill: imagePointsParsed[index].color
            ? imagePointsParsed[index].color
            : dotColor
            ? dotColor
            : undefined,
          fontSize: dotSize && dotSize != 16 ? dotSize : undefined,
        };

        var link_HTML = "";
        const link_attr = {
          target: imagePointsParsed[index].newTab ? "_blank" : undefined,
          rel: imagePointsParsed[index].newTab
            ? "noopener noreferrer"
            : undefined,
        };

        var icon = imagePointsParsed[index].icon
          ? imagePointsParsed[index].icon
          : dotIcon
          ? dotIcon
          : undefined;

        if (imagePointsParsed[index].link != "") {
          link_HTML = (
            <a href={imagePointsParsed[index].link} {...link_attr}>
              {imagePointsParsed[index].title}
            </a>
          );
        } else {
          link_HTML = imagePointsParsed[index].title;
        }

        return (
          <Fragment>
            <div data-point-id={index} className={dotClass} style={dotStyle}>
              <div className={`responsive_block_addons__dot-wrapper`}>
                <div
                  style={innerDotStyle}
                  className={`responsive_block_addons__dot-content`}
                >
                  {renderSVG(icon)}
                </div>
              </div>
              <div className={`responsive_block_addons__dot-description`}>
                <div className={`responsive_block_addons___dot-title`}>
                  {link_HTML}
                </div>
              </div>
            </div>
          </Fragment>
        );
      }
    };

    const innerWrapperProps = {
      className: classnames(`responsive_block_addons__wrapper`),
    };

    const imagePointsArr = {
      "data-image-points": escape(imagePoints),
    };

    const tooltipOptions = {
      "data-trigger": tooltipTrigger,
      "data-theme": tooltipTheme,
      "data-tooltip-animation": tooltipAnimation,
      "data-arrow": tooltipArrow,
    };

    return (
      <div {...wrapperProps} {...imagePointsArr} {...tooltipOptions}>
        <div {...innerWrapperProps}>
          {imageHTML}
          {imagePointsParsed.length != 0 && (
            <Fragment>
              {times(imagePointsParsed.length, (n) => renderPoints(n))}
            </Fragment>
          )}
        </div>
      </div>
    );
  }
}
