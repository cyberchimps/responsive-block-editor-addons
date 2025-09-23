/**
 * BLOCK: Accordion - Item
 */

import classnames from "classnames";
import InspectorTab from "../../../../components/InspectorTab";
import InspectorTabs from "../../../../components/InspectorTabs";
import renderSVG from "../../../../renderIcon";
import BoxShadowControl from "../../../../utils/components/box-shadow";
import EditorStyles from "./editor-styles";
import BlockBorderHelperControl from "../../../../settings-components/BlockBorderSettings";
import ResponsiveSpacingControl from "../../../../settings-components/ResponsiveSpacingSettings";
import RbeaRangeControl from "../../../../utils/components/rbea-range-control";
import RbeaExtensions from "../../../../extensions/RbeaExtensions";
const { __ } = wp.i18n;

const { Component, Fragment } = wp.element;

const {
  ColorPalette,
  InspectorControls,
  InnerBlocks,
  PanelColorSettings,
  RichText,
} = wp.blockEditor;

const {
  PanelBody,
  SelectControl,
  RangeControl,
  TabPanel,
  ButtonGroup,
  Button,
  Dashicon,
  ToggleControl,
} = wp.components;

class ResponsiveBlockEditorAddonsAccordionItemEdit extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      isFocused: "false",
    };
  }

  componentDidMount() {
    // Assigning block_id in the attribute.
    this.props.setAttributes({ block_id: this.props.clientId });
    this.props.setAttributes({ classMigrate: true });

    // Pushing Style tag for this block css.
    const $style = document.createElement("style");
    $style.setAttribute(
      "id",
      "responsive-block-editor-addons-accordion-item-style-" +
        this.props.clientId
    );
    document.head.appendChild($style);
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      !this.props.isSelected &&
      prevProps.isSelected &&
      this.state.isFocused
    ) {
      this.setState({
        isFocused: "false",
      });
    }
    if (this.props.isSelected && !prevProps.isSelected) {
      this.setState({
        isFocused: true,
      });
    }

    var element = document.getElementById(
      "responsive-block-editor-addons-accordion-item-style-" +
        this.props.clientId
    );

    if (null !== element && undefined !== element) {
      element.innerHTML = EditorStyles(this.props);
    }
  }
  render() {
    const { attributes, setAttributes } = this.props;
    const {
      title,
      content,
      icon,
      iconActive,
      layout,
      headingTag,
      blockBorderStyle,
      blockBorderWidth,
      blockBorderRadius,
      blockBorderColor,
      boxShadowColor,
      boxShadowHOffset,
      boxShadowVOffset,
      boxShadowBlur,
      boxShadowSpread,
      boxShadowPosition,
      hoverboxShadowColor,
      hoverboxShadowHOffset,
      hoverboxShadowVOffset,
      hoverboxShadowBlur,
      hoverboxShadowSpread,
      hoverboxShadowPosition,
      titlePadding,
      titlePaddingMobile,
      titlePaddingTablet,
      contentPadding,
      contentPaddingMobile,
      contentPaddingTablet,
    } = attributes;

    var boxShadowPositionCSS = boxShadowPosition;

    if ("outset" === boxShadowPosition) {
      boxShadowPositionCSS = "";
    }

    const accordionRenderIcon = () => {
      return (
        <Fragment>
          <span className="responsive-block-editor-addons-icon responsive-block-editor-addons-accordion-icon-wrap">
            {renderSVG(icon)}
          </span>
          <span className="responsive-block-editor-addons-icon-active responsive-block-editor-addons-accordion-icon-wrap">
            {renderSVG(iconActive)}
          </span>
        </Fragment>
      );
    };
    const accordionChildControls = () => {
      return (
        <InspectorControls key="inspector">
          <InspectorTabs hasContent={false}>
            <InspectorTab key={"style"}>
              <PanelBody
                title={__("Box Shadow", "responsive-block-editor-addons")}
                initialOpen={false}
                className="responsive_block_editor_addons__url-panel-body"
              >
                <p className="responsive-block-editor-addons-settings-notice">
                  {__(
                    "For the styling options please select the Parent Block."
                  )}
                </p>
                <TabPanel
                    className="responsive-block-editor-addons-inspect-tabs 
                              responsive-block-editor-addons-inspect-tabs-col-2  
                              responsive-block-editor-addons-color-inspect-tabs"
                    activeClass="active-tab"
                    initialTabName="normal"
                    tabs={[
                      { name: "empty-1", title: "", className: "responsive-block-editor-addons-empty-tab" },
                      { name: "normal", title: __("Normal", "responsive-block-editor-addons"), className: "responsive-block-editor-addons-normal-tab" },
                      { name: "empty-2", title: "", className: "responsive-block-editor-addons-empty-tab-middle" },
                      { name: "hover", title: __("Hover", "responsive-block-editor-addons"), className: "responsive-block-editor-addons-hover-tab" },
                      { name: "empty-3", title: "", className: "responsive-block-editor-addons-empty-tab" },
                    ]}
                  >
                    {(tab) => {
                      const isHover = tab.name === "hover";
                      const mode = isHover ? "hoverboxShadow" : "boxShadow";

                      return (
                        <BoxShadowControl
                          controlKey={mode}
                          setAttributes={setAttributes}
                          label={isHover ? __("Box Shadow (Hover)", "responsive-block-editor-addons") : __("Box Shadow", "responsive-block-editor-addons")}
                          boxShadowColor={{
                            value: isHover ? hoverboxShadowColor : boxShadowColor,
                            label: isHover ? __("Color (Hover)", "responsive-block-editor-addons") : __("Color", "responsive-block-editor-addons"),
                          }}
                          boxShadowHOffset={{
                            value: isHover ? hoverboxShadowHOffset : boxShadowHOffset,
                            label: isHover ? __("Horizontal (Hover)", "responsive-block-editor-addons") : __("Horizontal", "responsive-block-editor-addons"),
                          }}
                          boxShadowVOffset={{
                            value: isHover ? hoverboxShadowVOffset : boxShadowVOffset,
                            label: isHover ? __("Vertical (Hover)", "responsive-block-editor-addons") : __("Vertical", "responsive-block-editor-addons"),
                          }}
                          boxShadowBlur={{
                            value: isHover ? hoverboxShadowBlur : boxShadowBlur,
                            label: isHover ? __("Blur (Hover)", "responsive-block-editor-addons") : __("Blur", "responsive-block-editor-addons"),
                          }}
                          boxShadowSpread={{
                            value: isHover ? hoverboxShadowSpread : boxShadowSpread,
                            label: isHover ? __("Spread (Hover)", "responsive-block-editor-addons") : __("Spread", "responsive-block-editor-addons"),
                          }}
                          boxShadowPosition={{
                            value: isHover ? hoverboxShadowPosition : boxShadowPosition,
                            label: isHover ? __("Position (Hover)", "responsive-block-editor-addons") : __("Position", "responsive-block-editor-addons"),
                          }}
                        />
                      );
                    }}
                  </TabPanel>
              </PanelBody>
            </InspectorTab>
            <InspectorTab key={"advance"}>
              <RbeaExtensions {...this.props} />
            </InspectorTab>
          </InspectorTabs>
        </InspectorControls>
      );
    };

    const accordionRenderHtml = () => {
      return (
        <div className="responsive-block-editor-addons-accordion-item__wrapper">
          <div
            className="responsive-block-editor-addons-accordion-item"
            role="tab"
          >
            <div className="responsive-block-editor-addons-accordion-titles-button responsive-block-editor-addons-accordion-titles">
              {"accordion" === layout && accordionRenderIcon()}
              <RichText
                tagName={"span" != headingTag ? headingTag : "div"}
                placeholder={__("Title", "responsive-block-editor-addons")}
                value={title}
                onChange={(value) => setAttributes({ title: value })}
                className="responsive-block-editor-addons-title"
                multiline={false}
                allowedFormats={[
                  "core/bold",
                  "core/italic",
                  "core/strikethrough",
                ]}
              />
            </div>
            <div className="responsive-block-editor-addons-accordion-content">
              <span>
                <RichText
                  tagName="p"
                  placeholder={__("Content", "responsive-block-editor-addons")}
                  value={content}
                  onChange={(value) => setAttributes({ content: value })}
                  multiline={false}
                  allowedFormats={[
                    "core/bold",
                    "core/italic",
                    "core/strikethrough",
                    "core/link",
                  ]}
                />
              </span>
            </div>
          </div>
        </div>
      );
    };
    return (
      <Fragment>
      <style id={`responsive-block-editor-addons-accordion-item-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>
        <InspectorControls>{accordionChildControls()}</InspectorControls>
        <div
          className={classnames(
            "responsive-block-editor-addons-accordion-item__outer-wrap",
            `responsive-block-editor-addons-block-${this.props.clientId}`,
            this.props.isSelected && false !== this.state.isFocused
              ? "responsive-block-editor-addons-accordion__active"
              : ""
          )}
        >
          {accordionRenderHtml()}
        </div>
      </Fragment>
    );
  }
}

export default ResponsiveBlockEditorAddonsAccordionItemEdit;
