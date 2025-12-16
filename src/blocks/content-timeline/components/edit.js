/**
 * Internal dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import AlignClass from "./align-classes";
import DayAlignClass from "./day-align-classes";
import ContentTmClasses from "./classes";
import React from "react";
import EditorStyles from "./editor-styles";
import moment from "moment";
import AutoRegisterCSSBlock from "../../../extensions/custom-css/AutoRegisterCSSBlock";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { Dashicon } = wp.components;
const { RichText } = wp.blockEditor;
import renderSVG from "../../../renderIcon";
const { dateI18n, __experimentalGetSettings } = wp.date;
import * as JQuery from "jquery";
import { loadGoogleFont } from "../../../utils/font";
const $ = JQuery.default;

export default class Edit extends Component {
  constructor() {
    super(...arguments);
  }
  componentDidMount() {
    //Store client id.
    this.props.setAttributes({ block_id: this.props.clientId });
    this.props.setAttributes({ classMigrate: true });

    var id = this.props.clientId;
    window.addEventListener("load", responsiveTimelineInit);
    window.addEventListener("resize", responsiveTimelineInit);
    const responsiveTimelines = document.querySelectorAll('.interface-interface-skeleton__content');
    responsiveTimelines.forEach((timeline) => {
        timeline.addEventListener('scroll', responsiveTimelineInit);
    });
    $(".edit-post-layout__content").on( 'scroll', function (event) {
      responsiveTimelineInit;
    });

    // Pushing Style tag for this block css.
    const $style = document.createElement("style");
    $style.setAttribute(
      "id",
      "responsive-block-editor-addons-content-timeline-style-" +
        this.props.clientId
    );
    document.head.appendChild($style);
  }

  componentDidUpdate(prevProps, prevState) {
    var id = this.props.clientId;
    var element = document.getElementById(
      "responsive-block-editor-addons-content-timeline-style-" +
        this.props.clientId
    );
    if (null !== element && undefined !== element) {
      element.innerHTML = EditorStyles(this.props);
    }
    window.addEventListener("load", responsiveTimelineInit);
    window.addEventListener("resize", responsiveTimelineInit);
    const responsiveTimelines = document.querySelectorAll('.interface-interface-skeleton__content');
    responsiveTimelines.forEach((timeline) => {
        timeline.addEventListener('scroll', responsiveTimelineInit);
    });
    var time = this;
    $(".edit-post-layout__content").on( 'scroll', function (event) {
      responsiveTimelineInit;
    });
  }
  render() {
    // Setup the attributes
    const {
      attributes: {
        block_id,
        timelinAlignment,
        timelineItems,
        dateFormat,
        t_date,
        displayPostDate,
        dateFontFamily,
        headingFontFamily,
        contentFontFamily,
        headingTag,
        backgroundColor,
        opacity,
        icon,
        stack,
      },
      setAttributes,
      mergeBlocks,
      insertBlocksAfter,
    } = this.props;


    var data_copy = [...timelineItems];
    var content_align_class = AlignClass(this.props.attributes, 0); // Get classname for layout alignment
    var day_align_class = DayAlignClass(this.props.attributes, 0); // Get classname for day alignment.
    var display_inner_date = false;
    var isCenter = "";
    var stackedDate = "";
    var border_with_color = "13px solid" + backgroundColor;

    let imgopacity = opacity / 100;

    return [
      <style id={`responsive-block-editor-addons-content-timeline-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>,
      <AutoRegisterCSSBlock key="auto-register-css" {...this.props} />,
      // Show the block controls on focus
      <Inspector key="inspector" {...{ setAttributes, ...this.props }} />,
      <div key={`${block_id}`}
        className={classnames(
          `wp-block-responsive-content-timeline-${block_id}`,
          "responsive-timeline__outer-wrap",
          "responsive-block-editor-addons-block-content-timeline",
          `block-${block_id}`
        )}
      >
        <div
        key={`timeline-content-wrapper-${block_id}`}
          className={classnames(
            "responsive-timeline__content-wrap",
            ...ContentTmClasses(this.props.attributes)
          )}
        >
          <div key={`timeline-wrapper-${block_id}`} className="responsive-timeline-wrapper">
            <div key={`timeline-main-${block_id}`} className="responsive-timeline__main">
              <div key={`timeline-days-${block_id}`} className="responsive-timeline__days">
                {timelineItems.map((post, index) => {
                  isCenter = dateI18n(dateFormat, moment( t_date[index].title, 'MM/DD/YYYY' ).format("YYYY-MM-DD"));
                  if (timelinAlignment == "center") {
                    display_inner_date = true;
                    content_align_class = AlignClass(
                      this.props.attributes,
                      index
                    );
                    day_align_class = DayAlignClass(
                      this.props.attributes,
                      index
                    );
                    if (stack != "none") {
                      stackedDate = isCenter;
                    }
                    isCenter = "";
                  }

                  var post_date = t_date[index].title;
                  if ("custom" !== dateFormat) {
                    post_date = dateI18n(dateFormat, moment( t_date[index].title, 'MM/DD/YYYY' ).format("YYYY-MM-DD"));
                    if (post_date === "Invalid date") {
                      post_date = t_date[index].title;
                    }
                  } else {
                    post_date = t_date[index].title;
                    isCenter = post_date;
                  }

                  return (
                    <article
                      className="responsive-timeline__field responsive-timeline__field-wrap"
                      key={`timeline-item-${index}`}
                    >
                      <div key={`Align-${block_id}`} className={content_align_class}>
                        <div className="responsive-timeline__marker responsive-timeline__out-view-icon">
                          <span>
                            {" "}
                            <div key={`icon-wrap-${block_id}`} className="responsive-block-editor-addons-ifb-icon-wrap">
                              <span className="responsive-block-editor-addons-ifb-icon">
                                {renderSVG(icon)}
                              </span>
                            </div>{" "}
                          </span>
                        </div>

                        <div key={`day-align-${block_id}`} className={day_align_class}>
                          <div key={`events-new-${block_id}`} className="responsive-timeline__events-new">
                            <div key={`inner-new-${block_id}`} className="responsive-timeline__events-inner-new">
                              {dateFontFamily && loadGoogleFont(dateFontFamily)}
                              {headingFontFamily &&
                                loadGoogleFont(headingFontFamily)}
                              {contentFontFamily &&
                                loadGoogleFont(contentFontFamily)}
                              <div key={`timeline-date-${block_id}`} className="responsive-timeline__date-hide responsive-timeline__date-inner">
                                {displayPostDate && t_date[index].title && (
                                  <div key={`post-date-${block_id}`}
                                    className={
                                      "responsive-timeline__inner-date-new"
                                    }
                                  >
                                    <span
                                      className={`responsive-timeline__inner-date-new--${stack}`}
                                    >
                                      {stackedDate}
                                    </span>
                                    {isCenter}
                                  </div>
                                )}
                              </div>

                              <div key={`responsive-content-${block_id}`} className="responsive-content">
                                <div key={`heading-text-${block_id}`} className="responsive-timeline__heading-text">
                                  <RichText key={`heading-${block_id}`}
                                    tagName={headingTag}
                                    value={post.time_heading}
                                    placeholder={__(
                                      "Write a Heading",
                                      "responsive-block-editor-addons"
                                    )}
                                    className="responsive-timeline__heading"
                                    onChange={(value) => {
                                      var p = {
                                        time_heading: value,
                                        time_desc:
                                          data_copy[index]["time_desc"],
                                      };
                                      data_copy[index] = p;
                                      setAttributes({
                                        timelineItems: data_copy,
                                      });
                                    }}
                                    onMerge={mergeBlocks}
                                    onSplit={
                                      insertBlocksAfter
                                        ? (before, after, ...blocks) => {
                                            setAttributes({ content: before });
                                            insertBlocksAfter([
                                              ...blocks,
                                              createBlock("core/paragraph", {
                                                content: after,
                                              }),
                                            ]);
                                          }
                                        : undefined
                                    }
                                    onRemove={() => onReplace([])}
                                  />
                                </div>

                                <RichText key={`desc-${block_id}`}
                                  tagName="p"
                                  value={post.time_desc}
                                  placeholder={__(
                                    "Write a Description",
                                    "responsive-block-editor-addons"
                                  )}
                                  className="responsive-timeline-desc-content"
                                  onChange={(value) => {
                                    var p = {
                                      time_heading:
                                        data_copy[index]["time_heading"],
                                      time_desc: value,
                                    };
                                    data_copy[index] = p;
                                    setAttributes({ timelineItems: data_copy });
                                  }}
                                  onMerge={mergeBlocks}
                                  onSplit={this.splitBlock}
                                  onRemove={() => onReplace([])}
                                />

                                <div key={`timeline-arrow-${block_id}`} className="responsive-timeline__arrow">
                                  {" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {display_inner_date && (
                          <div key={`timeline-date-new-${block_id}`} className="responsive-timeline__date-new">
                            {displayPostDate && t_date[index].title && (
                              <div key={`timeline-date-newer-${block_id}`} className={"responsive-timeline__date-new"}>
                                {post_date}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
              <div key={`timeline-line-${block_id}`} className="responsive-timeline__line">
                <div key={`timeline-inner-${block_id}`} className="responsive-timeline__line__inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>,
    ];
  }
}
