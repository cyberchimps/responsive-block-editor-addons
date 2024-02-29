/**
 * Internal dependencies
 */
import classnames from "classnames";
import TableOfContents from "./TableOfContents";
import renderSVG from "../../../renderIcon";
/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;

export default class Save extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      attributes: {
        block_id,
        align,
        isCollapsible,
        initialCollapse,
        icon,
        tColumnsDesktop,
        headingTitle,
        tableType,
        backgroundVideo,
        backgroundType,
        sectionHtmlTag,
        headerLinks,
        allowedAnchors,
        orderListType,
        scrollOffset,
      },
      setAttributes,
      className,
    } = this.props;

    let CustomTag = "div";
    if (sectionHtmlTag === "footer") {
      CustomTag = "footer";
    } else if (sectionHtmlTag === "section") {
      CustomTag = "section";
    } else {
      CustomTag = "div";
    }

    let icon_html = "";
    if (isCollapsible && icon) {
      icon_html = (
        <span className="responsive-block-editor-addons-toc__collapsible-icon">
          {renderSVG(icon)}
        </span>
      );
    }

    return [
      <CustomTag
        className={classnames(
          className,
          `responsive-block-editor-addons-toc__align-${align}`,
          `responsive-block-editor-addons-toc__columns-${tColumnsDesktop}`,
          initialCollapse ? `responsive-block-editor-addons-toc__collapse` : "",
          "responsive-block-editor-addons-block-table-of-contents",
          `block-${block_id}`
        )}
      >
        {"video" == backgroundType && (
          <div className="responsive-block-editor-addons-toc__video-wrap">
            {backgroundVideo && (
              <video autoplay loop muted playsinline>
                <source src={backgroundVideo.url} type="video/mp4" />
              </video>
            )}
          </div>
        )}
        <div className="responsive-block-editor-addons-toc__wrap" data-scroll-offset={scrollOffset}>
          <div className="responsive-block-editor-addons-toc__title-wrap">
            <div class="responsive-block-editor-addons-toc__title">
              {headingTitle}
            </div>
            <span className="responsive-block-editor-addons-toc__collapsible-wrap">
              {icon_html}
            </span>
          </div>
          <TableOfContents
            headers={
              headerLinks && JSON.parse(headerLinks.replace(/u0022/g, '"'))
            }
            mappingHeaders={allowedAnchors}
            blockProp={this.props}
            tableType={tableType}
            orderListType={orderListType}
            frontend
          />
        </div>
      </CustomTag>,
    ];
  }
}
