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
      imagePoints,
      tooltipTrigger,
      tooltipTheme,
      tooltipArrow,
      tooltipAnimation,
      hotspotIcon,
      hotspotSize,
      hotspotPadding,
      hotspotColor,
      hotspotBackground,
      hotspotOpacity,
      className,
    } = this.props.attributes;

    const imagePointsParsed = imagePoints != "" ? JSON.parse(imagePoints) : [];

    const wrapperProps = {
      className: classnames(
        className,
        `responsive-block-editor-addons-block-image-hotspot`,
        `block-${block_id}`
      ),
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
        const dotClass = classnames(`responsive_block_addons__dot`);

        const dotStyle = {
          padding: hotspotPadding && hotspotPadding != 6 ? hotspotPadding : undefined,
          opacity:
            hotspotOpacity && hotspotOpacity != 100 ? hotspotOpacity / 100 : undefined,
          left: imagePointsParsed[index].position.x
            ? imagePointsParsed[index].position.x
            : undefined,
          top: imagePointsParsed[index].position.y
            ? imagePointsParsed[index].position.y
            : undefined,

          backgroundColor: imagePointsParsed[index].backgroundColor
            ? imagePointsParsed[index].backgroundColor
            : hotspotBackground
            ? hotspotBackground
            : undefined,
        };

        const innerDotStyle = {
          fill: imagePointsParsed[index].color
            ? imagePointsParsed[index].color
            : hotspotColor
            ? hotspotColor
            : undefined,
          fontSize: hotspotSize && hotspotSize != 16 ? hotspotSize : undefined,
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
          : hotspotIcon
          ? hotspotIcon
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
