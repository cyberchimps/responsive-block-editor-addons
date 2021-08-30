import attributes from "../attributes";
import classnames from "classnames";
import TableOfContent from "./TableOfContents";
import TableOfContents from "../deprecated/TableOfContents";
import renderSVG from "../../../renderIcon";

const { Fragment } = wp.element;

const deprecated = [
  {
    // attributes,
    attributes: attributes,
    save: function (props) {
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
        },
        setAttributes,
        className,
        } = props;
    
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
            <span className="responsive-block-editor-addons-toc__collapsible-wrap">
            {renderSVG("angle-down")}
            </span>
        );
        }
    
        return (
        <Fragment>
            <CustomTag
                className={classnames(
                className,
                `wp-block-responsive-block-editor-addons-table-of-contents`,
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
                <div className="responsive-block-editor-addons-toc__wrap">
                <div className="responsive-block-editor-addons-toc__title-wrap">
                    <div class="responsive-block-editor-addons-toc__title">
                    {headingTitle}
                    </div>
                    {icon_html}
                </div>
                <TableOfContents
                    headers={
                    headerLinks && JSON.parse(headerLinks.replace(/u0022/g, '"'))
                    }
                    mappingHeaders={allowedAnchors}
                    blockProp={props}
                    tableType={tableType}
                    orderListType={orderListType}
                    frontend
                />
                </div>
            </CustomTag>
        </Fragment>
        );
    }
  },
  {
    // attributes,
    attributes: attributes,
    save: function (props) {
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
            } = props;
        
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
                <span className="responsive-block-editor-addons-toc__collapsible-wrap">
                {renderSVG("angle-down")}
                </span>
            );
            }
        
            return (
            <Fragment>
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
                        {icon_html}
                    </div>
                    <TableOfContent
                        headers={
                        headerLinks && JSON.parse(headerLinks.replace(/u0022/g, '"'))
                        }
                        mappingHeaders={allowedAnchors}
                        blockProp={props}
                        tableType={tableType}
                        orderListType={orderListType}
                        frontend
                    />
                    </div>
                </CustomTag>
            </Fragment>
            );
        }
    },
];

export default deprecated;
