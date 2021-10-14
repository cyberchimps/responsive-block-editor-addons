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

    const imageHotspotsParsed = imagePoints != "" ? JSON.parse(imagePoints) : [];

  

    const imageHTML = url ? (
      <img
        src={url}
        alt={typeof alt != "undefined" ? alt : null}
        className={
          `responsive_block_addons__image ` + (id ? `wp-image-${id}` : "")
        }
      />
    ) : null;

    const renderHotspots = (index) => {
      if (typeof imageHotspotsParsed[index] !== "undefined") {
        const dotClass = classnames(`responsive_block_addons__dot`);

        const dotStyle = {
          padding: hotspotPadding && hotspotPadding != 6 ? hotspotPadding : undefined,
          opacity:
            hotspotOpacity && hotspotOpacity != 100 ? hotspotOpacity / 100 : undefined,
          left: imageHotspotsParsed[index].position.x
            ? imageHotspotsParsed[index].position.x
            : undefined,
          top: imageHotspotsParsed[index].position.y
            ? imageHotspotsParsed[index].position.y
            : undefined,

          backgroundColor: imageHotspotsParsed[index].backgroundColor
            ? imageHotspotsParsed[index].backgroundColor
            : hotspotBackground
            ? hotspotBackground
            : undefined,
        };

        const innerDotStyle = {
          fill: imageHotspotsParsed[index].color
            ? imageHotspotsParsed[index].color
            : hotspotColor
            ? hotspotColor
            : undefined,
          fontSize: hotspotSize && hotspotSize != 16 ? hotspotSize : undefined,
        };

        var link_HTML = "";
        const link_attr = {
          target: imageHotspotsParsed[index].newTab ? "_blank" : undefined,
          rel: imageHotspotsParsed[index].newTab
            ? "noopener noreferrer"
            : undefined,
        };

        var icon = imageHotspotsParsed[index].icon
          ? imageHotspotsParsed[index].icon
          : hotspotIcon
          ? hotspotIcon
          : undefined;

        if (imageHotspotsParsed[index].link != "") {
          link_HTML = (
            <a href={imageHotspotsParsed[index].link} {...link_attr}>
              {imageHotspotsParsed[index].title}
            </a>
          );
        } else {
          link_HTML = imageHotspotsParsed[index].title;
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

    const containerClasses = {
      className: classnames(
        className,
        `responsive-block-editor-addons-block-image-hotspot`,
        `block-${block_id}`
      ),
    }

    const innerContainerClasses = {
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
      <div {...containerClasses} {...imagePointsArr} {...tooltipOptions}>
        <div {...innerContainerClasses}>
          {imageHTML}
          {imageHotspotsParsed.length != 0 && (
            <Fragment>
              {times(imageHotspotsParsed.length, (hotspot) => renderHotspots(hotspot))}
            </Fragment>
          )}
        </div>
      </div>
    );
  }
}
