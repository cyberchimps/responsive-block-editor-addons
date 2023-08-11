/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";

import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import icons from "../../../utils/components/icons";
import renderSVG from "../../../renderIcon";
import ResponsiveBlocksIcon from "../../../ResponsiveBlocksIcon.json";
import TypographyHelperControl from "../../../settings-components/TypographySettings";
import ResponsiveSpacingControl from "../../../settings-components/ResponsiveSpacingSettings";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import ResponsivePaddingControl from "../../../settings-components/ResponsiveSpacingSettings/ResponsivePaddingControl";
import ResponsiveMarginControl from "../../../settings-components/ResponsiveSpacingSettings/ResponsiveMarginControl";

// Import block components
const {
  InspectorControls,
  PanelColorSettings,
  ColorPalette,
  AlignmentToolbar,
  InspectorAdvancedControls,
} = wp.blockEditor;

// Import Inspector components
const {
  PanelBody,
  RangeControl,
  SelectControl,
  ButtonGroup,
  Button,
  ToggleControl,
  TabPanel,
  Dashicon,
  BaseControl,
} = wp.components;

let svg_icons = Object.keys(ResponsiveBlocksIcon);

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
    this.update_cookie_id = this.update_cookie_id.bind(this)
  }

  update_cookie_id( value ) {
		const { getCurrentPostId } = wp.data.select("core/editor");
		const post_id = getCurrentPostId().toString();
		const timestamp = new Date().getTime();

    this.props.setAttributes( {cookies_id: post_id + '-' + timestamp } )
		this.props.setAttributes( { cookies: value } )
	}

  render() {
    // Font Weight Options
    const fontWeightOptions = [
      {
        value: "100",
        label: __("100", "responsive-block-editor-addons"),
      },
      {
        value: "200",
        label: __("200", "responsive-block-editor-addons"),
      },
      {
        value: "300",
        label: __("300", "responsive-block-editor-addons"),
      },
      {
        value: "400",
        label: __("400", "responsive-block-editor-addons"),
      },
      {
        value: "500",
        label: __("500", "responsive-block-editor-addons"),
      },
      {
        value: "600",
        label: __("600", "responsive-block-editor-addons"),
      },
      {
        value: "700",
        label: __("700", "responsive-block-editor-addons"),
      },
      {
        value: "800",
        label: __("800", "responsive-block-editor-addons"),
      },
      {
        value: "900",
        label: __("900", "responsive-block-editor-addons"),
      },
    ];

    // Setup the attributes
    const {
      attributes: {
        block_id,
        blockTopPadding,
        blockBottomPadding,
        blockLeftPadding,
        blockRightPadding,
        blockTopPaddingMobile,
        blockBottomPaddingMobile,
        blockLeftPaddingMobile,
        blockRightPaddingMobile,
        blockTopPaddingTablet,
        blockBottomPaddingTablet,
        blockLeftPaddingTablet,
        blockRightPaddingTablet,
        blockTopMargin,
        blockBottomMargin,
        blockLeftMargin,
        blockRightMargin,
        blockTopMarginMobile,
        blockBottomMarginMobile,
        blockLeftMarginMobile,
        blockRightMarginMobile,
        blockTopMarginTablet,
        blockBottomMarginTablet,
        blockLeftMarginTablet,
        blockRightMarginTablet,
        blockZIndex,
        contentBgColor,
        contentFontFamily,
        contentFontSize,
        contentFontSizeMobile,
        contentFontSizeTablet,
        contentFontWeight,
        contentLetterSpacing,
        contentLineHeight,
        contentPaddingHorizontal,
        contentPaddingVertical,
        contentPaddingHorizontalMobile,
        contentPaddingVerticalMobile,
        contentPaddingHorizontalTablet,
        contentPaddingVerticalTablet,
        contentColor,
        cookies,
        cookie_id,
        close_cookies_days,
        headingTag,
        icon,
        layout,
        noticeBoxColor,
        noticeDismiss,
        noticeType,
        titleColor,
        titleFontFamily,
        titleFontSize,
        titleFontSizeMobile,
        titleFontSizeTablet,
        titleFontWeight,
        titleLetterSpacing,
        titleLineHeight,
        titlePaddingHorizontal,
        titlePaddingVertical,
        titlePaddingHorizontalMobile,
        titlePaddingVerticalMobile,
        titlePaddingHorizontalTablet,
        titlePaddingVerticalTablet
      },
      setAttributes,
    } = this.props;

    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={'content'}>
          <PanelBody
            title={__("General", "responsive-block-editor-addons")}
            initialOpen={true}
          >
            <SelectControl
              label={__("Layout", "responsie-block-editor-addons")}
              value={layout}
              onChange={(value) => setAttributes({ layout: value })}
              options={[
                { value: "modern", label: __("Modern", "responsive-block-editor-addons") },
                { value: "simple", label: __("Default", "responsive-block-editor-addons") }
              ]}
            />
            <SelectControl
              label={__("Notification Type", "responsive-block-editor-addons")}
              value={noticeType}
              onChange={(value) => {
                setAttributes({noticeType: value})
              }}
              options={[
                {value: "default", label: __("Default", "responsive-block-editor-addons")},
                {value: "warning", label: __("Warning", "responsive-block-editor-addons")},
                {value: "error", label: __("Error", "responsive-block-editor-addons")},
                {value: "info", label: __("Information", "responsive-block-editor-addons")},
                {value: "notification", label: __("Notification", "responsive-block-editor-addons")}
              ]}
            />
            <SelectControl
              label={__("Primary Heading", "responsive-block-editor-addons")}
              value={headingTag}
              onChange={(value) => setAttributes({ headingTag: value })}
              options={[
                { value: "h1", label: __("H1", "responsive-block-editor-addons") },
                { value: "h2", label: __("H2", "responsive-block-editor-addons") },
                { value: "h3", label: __("H3", "responsive-block-editor-addons") },
                { value: "h4", label: __("H4", "responsive-block-editor-addons") },
              ]}
            />
            <SelectControl
              label={__("Notice Display", "responsive-block-editor-addons")}
              value={noticeDismiss}
              onChange={(value) => setAttributes({ noticeDismiss: value })}
              options={[
                { value: "yes", label: __("Always Dismiss", "responsive-block-editor-addons") },
                { value: "", label: __("Always Allow", "responsive-block-editor-addons") }
              ]}
            />
            {
              noticeDismiss &&
              <Fragment>
                <FontIconPicker
                  icons={svg_icons}
                  renderFunc={renderSVG}
                  theme="default"
                  value={icon}
                  onChange={(value) => setAttributes({ icon: value })}
                  isMulti={false}
                  noSelectedPlaceholder={__("Select Icon", "responsive-block-editor-addons")}
                />
                <ToggleControl
                  label={ __( "Enable Cookies", "responsive-block-editor-addons" ) }
                  checked={ cookies }
                  onChange={ this.update_cookie_id }
                />
                {cookies && (
                  <RangeControl
                    label={__("Show closed notice after (days)", "responsive-block-editor-addons")}
                    value={close_cookies_days}
                    min={0}
                    max={50}
                    allowReset={true}
                    onChange={(value) => setAttributes({ close_cookies_days: value })}
                  />
                )}
              </Fragment>
            }
          </PanelBody>
          </InspectorTab>
          <InspectorTab key={'style'}>
            <PanelBody
              title={__("Colors", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <Fragment>
                <p className="responsive-setting-label">
                  {__("Title Color", "responsive-block-editor-addons")}
                  <span className="components-base-control__label">
                    <span
                      className="component-color-indicator"
                      style={{ backgroundColor: titleColor }}
                    ></span>
                  </span>
                </p>
                <ColorPalette
                  value={titleColor}
                  onChange={(value) => setAttributes({ titleColor: value })}
                  allowReset
                />
              </Fragment>
              {
                "default" === noticeType && (
                  <Fragment>
                    <p className="responsive-setting-label">
                      {__("Highlight Color", "responsive-block-editor-addons")}
                      <span className="components-base-control__label">
                        <span
                          className="component-color-indicator"
                          style={{ backgroundColor: noticeBoxColor }}
                        ></span>
                      </span>
                    </p>
                    <ColorPalette
                      value={noticeBoxColor}
                      onChange={(value) => setAttributes({ noticeBoxColor: value })}
                      allowReset
                    />
                  </Fragment>
                )
              }
              <Fragment>
                <p className="responsive-setting-label">
                  {__("Content Color", "responsive-block-editor-addons")}
                  <span className="components-base-control__label">
                    <span
                      className="component-color-indicator"
                      style={{ backgroundColor: contentColor }}
                    ></span>
                  </span>
                </p>
                <ColorPalette
                  value={contentColor}
                  onChange={(value) => setAttributes({ contentColor: value })}
                  allowReset
                />
              </Fragment>
              <Fragment>
                <p className="responsive-setting-label">
                  {__("Content Background Color", "responsive-block-editor-addons")}
                  <span className="components-base-control__label">
                    <span
                      className="component-color-indicator"
                      style={{ backgroundColor: contentBgColor }}
                    ></span>
                  </span>
                </p>
                <ColorPalette
                  value={contentBgColor}
                  onChange={(value) => setAttributes({ contentBgColor: value })}
                  allowReset
                />
              </Fragment>
            </PanelBody>
            <PanelBody
              title={__("Typography", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <TypographyHelperControl
                title={__("Title Typography", "responsive-block-editor-addons")}
                attrNameTemplate="title%s"
                values={{
                  family: titleFontFamily,
                  size: titleFontSize,
                  sizeMobile: titleFontSizeMobile,
                  sizeTablet: titleFontSizeTablet,
                  weight: titleFontWeight,
                  height: titleLineHeight,
                  spacing: titleLetterSpacing,
                }}
                showLetterSpacing={true}
                showTextTransform={false}
                setAttributes={setAttributes}
                {...this.props}
              />
              <TypographyHelperControl
                title={__("Content Typography", "responsive-block-editor-addons")}
                attrNameTemplate="content%s"
                values={{
                  family: contentFontFamily,
                  size: contentFontSize,
                  sizeMobile: contentFontSizeMobile,
                  sizeTablet: contentFontSizeTablet,
                  weight: contentFontWeight,
                  height: contentLineHeight,
                  spacing: contentLetterSpacing,
                }}
                showLetterSpacing={true}
                showTextTransform={false}
                setAttributes={setAttributes}
                {...this.props}
              />
            </PanelBody>
            <PanelBody
              title={__("Padding", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <PanelBody
                title={__("Title Padding", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <ResponsiveSpacingControl
                  title={"Title Padding Horizontal"}
                  attrNameTemplate="titlePaddingHorizontal%s"
                  values={{ desktop: titlePaddingHorizontal, tablet: titlePaddingHorizontalTablet, mobile: titlePaddingHorizontalMobile }}
                  setAttributes={setAttributes}
                  {...this.props}
                />
                <ResponsiveSpacingControl
                  title={"Title Padding Vertical"}
                  attrNameTemplate="titlePaddingVertical%s"
                  values={{ desktop: titlePaddingVertical, tablet: titlePaddingVerticalTablet, mobile: titlePaddingVerticalMobile }}
                  setAttributes={setAttributes}
                  {...this.props}
                />
              </PanelBody>
              <PanelBody
                title={__("Content Padding", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <ResponsiveSpacingControl
                  title={"Content Padding Horizontal"}
                  attrNameTemplate="contentPaddingHorizontal%s"
                  values={{ desktop: contentPaddingHorizontal, tablet: contentPaddingHorizontalTablet, mobile: contentPaddingHorizontalMobile }}
                  setAttributes={setAttributes}
                  {...this.props}
                />
                <ResponsiveSpacingControl
                  title={"Content Padding Vertical"}
                  attrNameTemplate="contentPaddingVertical%s"
                  values={{ desktop: contentPaddingVertical, tablet: contentPaddingVerticalTablet, mobile: contentPaddingVerticalMobile }}
                  setAttributes={setAttributes}
                  {...this.props}
                />
              </PanelBody>
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={'advance'}>
                <InspectorAdvancedControls>
                  <RangeControl
                    label={__("Z-Index", "responsive-block-editor-addons")}
                    value={blockZIndex}
                    min={-10}
                    max={500}
                    allowReset={true}
                    onChange={(value) => setAttributes({ blockZIndex: value })}
                  />
                </InspectorAdvancedControls>
                <PanelBody
                  title={__("Block Padding", "responsive-block-editor-addons")}
                  initialOpen={false}
                >
                  <ResponsivePaddingControl
                    attrNameTemplate="block%s"
                    values = {{
                      desktopTop:blockTopPadding,
                      desktopBottom:blockBottomPadding,
                      desktopLeft:blockLeftPadding,
                      desktopRight:blockRightPadding,

                      tabletTop:blockTopPaddingTablet,
                      tabletBottom:blockBottomPaddingTablet,
                      tabletLeft:blockLeftPaddingTablet,
                      tabletRight:blockRightPaddingTablet,

                      mobileTop:blockTopPaddingMobile,
                      mobileBottom:blockBottomPaddingMobile,
                      mobileLeft:blockLeftPaddingMobile,
                      mobileRight:blockRightPaddingMobile,
                    }}
                    setAttributes={ setAttributes }
                    {...this.props}
                  />
                </PanelBody>
                <PanelBody
                  title={__("Block Margin", "responsive-block-editor-addons")}
                  initialOpen={false}
                >
                  <ResponsiveMarginControl
                    attrNameTemplate="block%s"
                    values = {{
                      desktopTop:blockTopMargin,
                      desktopBottom:blockBottomMargin,
                      desktopLeft:blockLeftMargin,
                      desktopRight:blockRightMargin,

                      tabletTop:blockTopMarginTablet,
                      tabletBottom:blockBottomMarginTablet,
                      tabletLeft:blockLeftMarginTablet,
                      tabletRight:blockRightMarginTablet,

                      mobileTop:blockTopMarginMobile,
                      mobileBottom:blockBottomMarginMobile,
                      mobileLeft:blockLeftMarginMobile,
                      mobileRight:blockRightMarginMobile,
                    }}
                    setAttributes={ setAttributes }
                    {...this.props}
                  />
                </PanelBody>
          </InspectorTab>
        </InspectorTabs>
      </InspectorControls>
    );
  }
}


