/**
 * Internal dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import { loadGoogleFont } from "../../../utils/font";
import EditorStyles from "./editor-styles";
import TableOfContents from "./TableOfContents";
import renderSVG from "../../../renderIcon";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { RichText } = wp.blockEditor;
class Edit extends Component {
  constructor() {
    super(...arguments);
  }
  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-table-of-contents-style-" +
        this.props.clientId
    );

    if (null !== element && undefined !== element) {
      element.innerHTML = EditorStyles(this.props);
    }
  }

  componentDidMount() {
    // Assigning block_id in the attribute.
    this.props.setAttributes({ block_id: this.props.clientId });

    this.props.setAttributes({ classMigrate: true });

    // Pushing Style tag for this block css.
    const $style = document.createElement("style");
    $style.setAttribute(
      "id",
      "responsive-block-editor-addons-table-of-contents-style-" +
        this.props.clientId
    );
    document.head.appendChild($style);
  }
  render() {
    // Setup the attributes
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
		headingFontFamily,
		contentFontFamily
      },
      setAttributes,
      className,
    } = this.props;

    let icon_html = "";

    if (isCollapsible && icon) {
      icon_html = (
        <span className="responsive-block-editor-addons-toc__collapsible-wrap">
          {renderSVG("angle-down")}
        </span>
      );
    }

    let CustomTag = "div";
    if (sectionHtmlTag === "footer") {
      CustomTag = "footer";
    } else if (sectionHtmlTag === "section") {
      CustomTag = "section";
    } else {
      CustomTag = "div";
    }

    return [
      <style id={`responsive-block-editor-addons-table-of-contents-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>,
      <Inspector key={"toc-inspector"} {...{ setAttributes, ...this.props }} />,

      <CustomTag
        key={'toc-content'}
        className={classnames(
          className,
          `responsive-block-editor-addons-toc__align-${align}`,
          `responsive-block-editor-addons-toc__columns-${tColumnsDesktop}`,
          initialCollapse ? `responsive-block-editor-addons-toc__collapse` : "",
          "responsive-block-editor-addons-block-table-of-contents",
          `block-${block_id}`
        )}
      >
		{headingFontFamily && loadGoogleFont(headingFontFamily)}
		{contentFontFamily && loadGoogleFont(contentFontFamily)}
        {"video" == backgroundType && (
          <div className="responsive-block-editor-addons-toc__video-wrap">
            {backgroundVideo && (
              <video autoplay loop muted playsinline>
                <source src={backgroundVideo.url} type="video/mp4" />
              </video>
            )}
          </div>
        )}
        <div className="responsive-block-editor-addons-toc__wrap">
          <div className="responsive-block-editor-addons-toc__title-wrap">
            <RichText
              tagName={"div"}
              placeholder={__(
                "Table Of Contents",
                "responsive-block-editor-addons"
              )}
              value={headingTitle}
              className="responsive-block-editor-addons-toc__title"
              onChange={(value) => setAttributes({ headingTitle: value })}
              multiline={false}
              onRemove={() => props.onReplace([])}
            />
            {icon_html}
          </div>
          <TableOfContents
            headers={
              headerLinks && JSON.parse(headerLinks.replace(/u0022/g, '"'))
            }
            mappingHeaders={allowedAnchors}
            blockProp={this.props}
            tableType={tableType}
            orderListType={orderListType}
          />
        </div>
      </CustomTag>,
    ];
  }
}

export default Edit;
