/**
 * BLOCK: Accordion
 */

import classnames from "classnames";
import icons from "../../../utils/components/icons";
import renderSVG from "../../../renderIcon";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import times from "lodash/times";
import memoize from "memize";
import ResponsiveBlocksIcon from "../../../ResponsiveBlocksIcon.json";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import TypographyHelperControl from "../../../settings-components/TypographySettings";
import ResponsiveSpacingControl from "../../../settings-components/ResponsiveSpacingSettings";

import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";
import EditorStyles from "./editor-styles";

const { __ } = wp.i18n;
const { compose } = wp.compose;
const { select, withSelect } = wp.data;
const { Component, Fragment } = wp.element;

const {
  ColorPalette,
  InspectorControls,
  InnerBlocks,
  PanelColorSettings,
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

const ALLOWED_BLOCKS = ["responsive-block-editor-addons/accordion-item"];

const accordion = [];

let svg_icons = Object.keys(ResponsiveBlocksIcon);
class ResponsiveBlockEditorAddonsAccordionEdit extends Component {
  constructor() {
    super(...arguments);
    this.onchangeIcon = this.onchangeIcon.bind(this);
    this.onchangeActiveIcon = this.onchangeActiveIcon.bind(this);
    this.onchangeLayout = this.onchangeLayout.bind(this);
    this.onchangeTag = this.onchangeTag.bind(this);
  }

  componentDidMount() {
    const { attributes, setAttributes } = this.props;

    const {
      titleBottomPaddingDesktop,
      vtitlePaddingDesktop,
      titleLeftPaddingDesktop,
      htitlePaddingDesktop,
      titleBottomPaddingTablet,
      vtitlePaddingTablet,
      titleLeftPaddingTablet,
      htitlePaddingTablet,
      titleBottomPaddingMobile,
      vtitlePaddingMobile,
      titleLeftPaddingMobile,
      htitlePaddingMobile,
    } = attributes;

    // Assigning block_id in the attribute.
    setAttributes({ block_id: this.props.clientId });

    setAttributes({ schema: JSON.stringify(this.props.schemaJsonData) });
    // Pushing Style tag for this block css.
    const $style = document.createElement("style");
    $style.setAttribute(
      "id",
      "responsive-block-editor-addons-style-accordion-style-" +
        this.props.clientId
    );
    document.head.appendChild($style);

    for (var i = 1; i <= 2; i++) {
      accordion.push({
        title: "What is Accordion?",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      });
    }

    if (10 === titleBottomPaddingDesktop && 10 !== vtitlePaddingDesktop) {
      setAttributes({ titleBottomPaddingDesktop: vtitlePaddingDesktop });
    }
    if (10 === titleLeftPaddingDesktop && 10 !== htitlePaddingDesktop) {
      setAttributes({ titleLeftPaddingDesktop: htitlePaddingDesktop });
    }

    if (10 === titleBottomPaddingTablet && 10 !== vtitlePaddingTablet) {
      setAttributes({ titleBottomPaddingTablet: vtitlePaddingTablet });
    }
    if (10 === titleLeftPaddingTablet && 10 !== htitlePaddingTablet) {
      setAttributes({ titleLeftPaddingTablet: htitlePaddingTablet });
    }

    if (10 === titleBottomPaddingMobile && 10 !== vtitlePaddingMobile) {
      setAttributes({ titleBottomPaddingMobile: vtitlePaddingMobile });
    }
    if (10 === titleLeftPaddingMobile && 10 !== htitlePaddingMobile) {
      setAttributes({ titleLeftPaddingMobile: htitlePaddingMobile });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      JSON.stringify(this.props.schemaJsonData) !==
      JSON.stringify(prevProps.schemaJsonData)
    ) {
      this.props.setAttributes({
        schema: JSON.stringify(this.props.schemaJsonData),
      });
    }
    var element = document.getElementById(
      "responsive-block-editor-addons-style-accordion-style-" +
        this.props.clientId
    );

    if (null !== element && undefined !== element) {
      element.innerHTML = EditorStyles(this.props);
    }
  }
  onchangeIcon(value) {
    const { setAttributes } = this.props;
    let getChildBlocks = select("core/block-editor").getBlocks(
      this.props.clientId
    );
    getChildBlocks.forEach((accordionChild, key) => {
      accordionChild.attributes.icon = value;
    });

    setAttributes({ icon: value });
  }
  onchangeActiveIcon(value) {
    const { setAttributes } = this.props;
    const getChildBlocks = select("core/block-editor").getBlocks(
      this.props.clientId
    );

    getChildBlocks.forEach((accordionChild, key) => {
      accordionChild.attributes.iconActive = value;
    });

    setAttributes({ iconActive: value });
  }
  onchangeLayout(value) {
    const { setAttributes } = this.props;
    const getChildBlocks = select("core/block-editor").getBlocks(
      this.props.clientId
    );

    getChildBlocks.forEach((accordionChild, key) => {
      accordionChild.attributes.layout = value;
    });

    setAttributes({ layout: value });
  }
  onchangeTag(value) {
    const { setAttributes } = this.props;
    const getChildBlocks = select("core/block-editor").getBlocks(
      this.props.clientId
    );

    getChildBlocks.forEach((accordionChild, key) => {
      accordionChild.attributes.headingTag = value;
    });

    setAttributes({ headingTag: value });
  }

  render() {
    const { attributes, setAttributes } = this.props;
    const {
      block_id,
      layout,
      inactiveOtherItems,
      expandFirstItem,
      rowsGap,
      rowsGapMobile,
      rowsGapTablet,
      columnsGap,
      columnsGapMobile,
      columnsGapTablet,
      align,
      titleActiveTextColor,
      titleActiveBackgroundColor,
      titleTextColor,
      iconColor,
      iconActiveColor,
      titleFontWeight,
      titleFontFamily,
      titleFontSize,
      titleLineHeight,
      contentFontWeight,
      contentFontSize,
      contentFontFamily,
      contentLineHeight,
      icon,
      iconSizeType,
      iconActive,
      iconAlign,
      iconSizeMobile,
      iconSizeTablet,
      iconSize,
      columns,
      equalHeight,
      titleBackgroundColorOpacity,
      marginV,
      marginVMobile,
      marginVTablet,
      marginH,
      marginHMobile,
      marginHTablet,
      titleSecondaryBackgroundColor,
      titleGradientDegree,
      titleBgGradient,
      titleBackgroundColor,
      contentTextColor,
      contentSecondaryBackgroundColor,
      contentGradientDegree,
      contentBgGradient,
      contentBackgroundColor,
      contentBackgroundColorOpacity,
	  titleFontSizeMobile,
	  titleFontSizeTablet,
	  contentFontSizeMobile,
	  contentFontSizeTablet,
    } = attributes;

    const fontWeightOptions = [
      {
        value: "",
        label: __("Default", "responsive-block-editor-addons"),
      },
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
    const getAccordionItemTemplate = memoize((accordion_count, accordion) => {
      return times(accordion_count, (n) => [
        "responsive-block-editor-addons/accordion-item",
        accordion[n],
      ]);
    });

    const equalHeightClass = equalHeight
      ? "responsive-block-editor-addons-accordion-equal-height"
      : "";

    const accordionGeneralSettings = () => {
      return (
        <PanelBody
          title={__("General", "responsive-block-editor-addons")}
          initialOpen={true}
          className="responsive_block_editor_addons__url-panel-body"
        >
          <SelectControl
            label={__("Layout", "responsive-block-editor-addons")}
            value={layout}
            options={[
              { value: "accordion", label: __("Accordion", "responsive-block-editor-addons") },
              { value: "grid", label: __("Grid", "responsive-block-editor-addons") },
            ]}
            onChange={(value) => this.onchangeLayout(value)}
          />
          {"accordion" === layout && (
            <Fragment>
              <ToggleControl
                label={__("Collapse other items", "responsive-block-editor-addons")}
                checked={inactiveOtherItems}
                onChange={(value) =>
                  setAttributes({ inactiveOtherItems: !inactiveOtherItems })
                }
              />
              {true === inactiveOtherItems && (
                <ToggleControl
                  label={__("Expand First Item", "responsive-block-editor-addons")}
                  checked={expandFirstItem}
                  onChange={(value) =>
                    setAttributes({ expandFirstItem: !expandFirstItem })
                  }
                />
              )}
            </Fragment>
          )}

          <hr className="responsive-block-editor-addons-editor__separator" />
          {"grid" === layout && (
            <RangeControl
              label={__("Columns", "responsive-block-editor-addons")}
              value={columns}
              onChange={(value) => setAttributes({ columns: value })}
              min={0}
              max={4}
            />
          )}
          {"grid" === layout && (
            <Fragment>
              <h2> {__("Alignment", "responsive-block-editor-addons")}</h2>
              <Button
                key={"left"}
                icon="editor-alignleft"
                label="Left"
                onClick={() => setAttributes({ align: "left" })}
                aria-pressed={"left" === align}
                isPrimary={"left" === align}
              />
              <Button
                key={"center"}
                icon="editor-aligncenter"
                label="Right"
                onClick={() => setAttributes({ align: "center" })}
                aria-pressed={"center" === align}
                isPrimary={"center" === align}
              />
              <Button
                key={"right"}
                icon="editor-alignright"
                label="Right"
                onClick={() => setAttributes({ align: "right" })}
                aria-pressed={"right" === align}
                isPrimary={"right" === align}
              />
            </Fragment>
          )}
          {"accordion" === layout && accordionIconSettings()}
        </PanelBody>
      );
    };

    const accordionColorSettings = () => {
      return (
        <PanelBody
          title={__("Color", "responsive-block-editor-addons")}
          initialOpen={false}
          className="responsive_block_editor_addons__url-panel-body"
        >
          <PanelColorSettings
            title={__("Title", "responsive-block-editor-addons")}
            initialOpen={false}
            colorSettings={[
              {
                value: titleTextColor,
                onChange: (value) => setAttributes({ titleTextColor: value }),
                label: __("Text color", "responsive-block-editor-addons"),
              },
              {
                value: titleBackgroundColor,
                onChange: (value) =>
                  setAttributes({ titleBackgroundColor: value }),
                label: __("Background color", "responsive-block-editor-addons"),
              },
              {
                value: titleActiveTextColor,
                onChange: (value) =>
                  setAttributes({ titleActiveTextColor: value }),
                label: __(
                  "Active Text color",
                  "responsive-block-editor-addons"
                ),
              },
              {
                value: titleActiveBackgroundColor,
                onChange: (value) =>
                  setAttributes({ titleActiveBackgroundColor: value }),
                label: __(
                  "Active Background color",
                  "responsive-block-editor-addons"
                ),
              },
            ]}
          >
            <ToggleControl
              label={__("Gradient Background", "responsive-block-editor-addons")}
              checked={titleBgGradient}
              onChange={() =>
                this.props.setAttributes({
                  titleBgGradient: !titleBgGradient,
                })
              }
            />
            {titleBgGradient && (
              <PanelColorSettings
                title={__(
                  "Secondary Background Color",
                  "responsive-block-editor-addons"
                )}
                initialOpen={true}
                colorSettings={[
                  {
                    label: __(
                      "Secondary Background Color",
                      "responsive-block-editor-addons"
                    ),
                    value: titleSecondaryBackgroundColor,
                    onChange: (value) =>
                      setAttributes({ titleSecondaryBackgroundColor: value }),
                  },
                ]}
              ></PanelColorSettings>
            )}

            {titleBgGradient && (
              <RangeControl
                label={__("Gradient Degree", "responsive-block-editor-addons")}
                value={titleGradientDegree}
                onChange={(value) =>
                  setAttributes({
                    titleGradientDegree: value !== undefined ? value : 100,
                  })
                }
                min={0}
                max={360}
              />
            )}
            <RangeControl
              label={__(
                "Background Color Opacity",
                "responsive-block-editor-addons"
              )}
              value={titleBackgroundColorOpacity}
              onChange={(value) =>
                setAttributes({
                  titleBackgroundColorOpacity:
                    value !== undefined ? value : 100,
                })
              }
              min={0}
              max={100}
            />
          </PanelColorSettings>
          <PanelColorSettings
            title={__("Content", "responsive-block-editor-addons")}
            initialOpen={false}
            colorSettings={[
              {
                value: contentTextColor,
                onChange: (value) => setAttributes({ contentTextColor: value }),
                label: __("Text color", "responsive-block-editor-addons"),
              },
              {
                value: contentBackgroundColor,
                onChange: (value) =>
                  setAttributes({ contentBackgroundColor: value }),
                label: __("Background color", "responsive-block-editor-addons"),
              },
            ]}
          >
            <ToggleControl
              label="Gradient Background"
              checked={contentBgGradient}
              onChange={() =>
                this.props.setAttributes({
                  contentBgGradient: !contentBgGradient,
                })
              }
            />
            {contentBgGradient && [
              <PanelColorSettings
                title={__(
                  "Secondary Background Color",
                  "responsive-block-editor-addons"
                )}
                initialOpen={true}
                colorSettings={[
                  {
                    label: __(
                      "Secondary Background Color",
                      "responsive-block-editor-addons"
                    ),
                    value: contentSecondaryBackgroundColor,
                    onChange: (value) =>
                      setAttributes({ contentSecondaryBackgroundColor: value }),
                  },
                ]}
              ></PanelColorSettings>,
              <RangeControl
                label={__("Gradient Degree", "responsive-block-editor-addons")}
                value={contentGradientDegree}
                onChange={(value) =>
                  setAttributes({
                    contentGradientDegree: value !== undefined ? value : 100,
                  })
                }
                min={0}
                max={360}
              />,
            ]}
            <RangeControl
              label={__(
                "Background Color Opacity",
                "responsive-block-editor-addons"
              )}
              value={contentBackgroundColorOpacity}
              onChange={(value) =>
                setAttributes({
                  contentBackgroundColorOpacity:
                    value !== undefined ? value : 100,
                })
              }
              min={0}
              max={100}
            />
          </PanelColorSettings>
        </PanelBody>
      );
    };
    const accordionTypographySettings = () => {
      return (
        <PanelBody
          title={__("Typography", "responsive-block-editor-addons")}
          initialOpen={false}
          className="responsive_block_editor_addons__url-panel-body"
        >
			<TypographyHelperControl
				title={__("Title", "responsive-block-editor-addons")}
				attrNameTemplate="title%s"
				values = {{family: titleFontFamily, size: titleFontSize, sizeMobile: titleFontSizeMobile, sizeTablet: titleFontSizeTablet, weight: titleFontWeight, height: titleLineHeight}}
				showLetterSpacing = { false }
				showTextTransform = { false }
				setAttributes={ setAttributes }
				{...this.props}
        	/>
        	<TypographyHelperControl
				title={__("Content", "responsive-block-editor-addons")}
				attrNameTemplate="content%s"
				values = {{family: contentFontFamily, size: contentFontSize, sizeMobile: contentFontSizeMobile, sizeTablet: contentFontSizeTablet, weight: contentFontWeight, height: contentLineHeight}}
				showLetterSpacing = { false }
				showTextTransform = { false }
				setAttributes={ setAttributes }
				{...this.props}
        	/>
        </PanelBody>
      );
    };
    const accordionStylingSettings = () => {
      return (
        <PanelBody
          title={__("Spacing", "responsive-block-editor-addons")}
          initialOpen={false}
          className="responsive_block_editor_addons__url-panel-body"
        >
          <ResponsiveSpacingControl
            title={"Row Gap"}
            attrNameTemplate="rowsGap%s"
            values = {{desktop:rowsGap, tablet:rowsGapTablet, mobile:rowsGapMobile}}
            setAttributes={ setAttributes }
            {...this.props}
          />
          {"grid" === layout && (
            <Fragment>
              <ResponsiveSpacingControl
                title={"Columns Gap"}
                attrNameTemplate="columnsGap%s"
                values = {{desktop:columnsGap, tablet:columnsGapTablet, mobile:columnsGapMobile}}
                setAttributes={ setAttributes }
                {...this.props}
              />
              <ToggleControl
                label={__("Equal Height", "responsive-block-editor-addons")}
                checked={equalHeight}
                onChange={(value) =>
                  setAttributes({ equalHeight: !equalHeight })
                }
              />
            </Fragment>
          )}
          <ResponsiveSpacingControl
            title={"Vertical Margin"}
            attrNameTemplate="marginV%s"
            values = {{desktop:marginV, tablet:marginVTablet, mobile:marginVMobile}}
            setAttributes={ setAttributes }
            {...this.props}
          />
          <ResponsiveSpacingControl
            title={"Horizontal Margin"}
            attrNameTemplate="marginH%s"
            values = {{desktop:marginH, tablet:marginHTablet, mobile:marginHMobile}}
            setAttributes={ setAttributes }
            {...this.props}
          />
        </PanelBody>
      );
    };
    const accordionIconSettings = () => {
      return (
        <Fragment>
          <h2> {__("Icon", "responsive-block-editor-addons")} </h2>
          <p className="components-base-control__label">{__("Expand", "responsive-block-editor-addons")}</p>
          <FontIconPicker
            icons={svg_icons}
            renderFunc={renderSVG}
            theme="default"
            value={icon}
            onChange={(value) => this.onchangeIcon(value)}
            isMulti={false}
            noSelectedPlaceholder={__("Select Icon", "responsive-block-editor-addons")}
          />
          <p className="components-base-control__label">{__("Collapse", "responsive-block-editor-addons")}</p>
          <FontIconPicker
            icons={svg_icons}
            renderFunc={renderSVG}
            theme="default"
            value={iconActive}
            onChange={(value) => this.onchangeActiveIcon(value)}
            isMulti={false}
            noSelectedPlaceholder={__("Select Icon", "responsive-block-editor-addons")}
          />
          <h2> {__("Icon Alignment", "responsive-block-editor-addons")}</h2>
          <Button
            key={"row"}
            icon="editor-alignleft"
            label="Left"
            onClick={() => setAttributes({ iconAlign: "row" })}
            aria-pressed={"row" === iconAlign}
            isPrimary={"row" === iconAlign}
          />
          <Button
            key={"row-reverse"}
            icon="editor-alignright"
            label="Right"
            onClick={() => setAttributes({ iconAlign: "row-reverse" })}
            aria-pressed={"row-reverse" === iconAlign}
            isPrimary={"row-reverse" === iconAlign}
          />
          {"accordion" === layout && (
            <Fragment>
              <hr className="responsive-block-editor-addons-editor__separator" />
              <h2>{__("Icon Size")}</h2><TabPanel
              className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin"
              activeClass="active-tab"
              tabs={[
                  {
                      name: "desktop",
                      title: <Dashicon icon="desktop" />,
                  className:
                      " responsive-desktop-tab  responsive-responsive-tabs",
              },
              {
                  name: "tablet",
                  title: <Dashicon icon="tablet" />,
              className: " responsive-tablet-tab  responsive-responsive-tabs",
          },
              {
                  name: "mobile",
                      title: <Dashicon icon="smartphone" />,
                  className: " responsive-mobile-tab  responsive-responsive-tabs",
              },
          ]}
          >
              {(tab) => {
                  let tabout;

                  if ("mobile" === tab.name) {
                      tabout = (
                          <Fragment>
                          <ButtonGroup
                      className="responsive-block-editor-addons-size-type-field"
                      aria-label={__("Size Type")}
                  >
                  <Button
                      key={"px"}
                      className="responsive-block-editor-addons-size-btn"
                      isSmall
                      isPrimary={iconSizeType === "px"}
                      aria-pressed={iconSizeType === "px"}
                      onClick={() =>
                      setAttributes({ iconSizeType: "px" })
                  }
                  >
                      {"px"}
                  </Button>
                      <Button
                      key={"%"}
                      className="responsive-block-editor-addons-size-btn"
                      isSmall
                      isPrimary={iconSizeType === "%"}
                      aria-pressed={iconSizeType === "%"}
                      onClick={() => setAttributes({ iconSizeType: "%" })}
                  >
                      {"%"}
                  </Button>
                      </ButtonGroup>
                      <p>{__("")}</p>
                      <RangeControl
                      value={iconSizeMobile}
                      onChange={(value) =>
                      setAttributes({ iconSizeMobile: value })
                  }
                      min={0}
                      max={100}
                      allowReset
                      />
                      </Fragment>
                  );
                  } else if ("tablet" === tab.name) {
                      tabout = (
                          <Fragment>
                          <ButtonGroup
                      className="responsive-block-editor-addons-size-type-field"
                      aria-label={__("Size Type")}
                  >
                  <Button
                      key={"px"}
                      className="responsive-block-editor-addons-size-btn"
                      isSmall
                      isPrimary={iconSizeType === "px"}
                      aria-pressed={iconSizeType === "px"}
                      onClick={() =>
                      setAttributes({ iconSizeType: "px" })
                  }
                  >
                      {"px"}
                  </Button>
                      <Button
                      key={"%"}
                      className="responsive-block-editor-addons-size-btn"
                      isSmall
                      isPrimary={iconSizeType === "%"}
                      aria-pressed={iconSizeType === "%"}
                      onClick={() => setAttributes({ iconSizeType: "%" })}
                  >
                      {"%"}
                  </Button>
                      </ButtonGroup>
                      <p>{__("")}</p>
                      <RangeControl
                      value={iconSizeTablet}
                      onChange={(value) =>
                      setAttributes({ iconSizeTablet: value })
                  }
                      min={0}
                      max={100}
                      allowReset
                      />
                      </Fragment>
                  );
                  } else {
                      tabout = (
                          <Fragment>
                          <ButtonGroup
                      className="responsive-block-editor-addons-size-type-field"
                      aria-label={__("Size Type")}
                  >
                  <Button
                      key={"px"}
                      className="responsive-block-editor-addons-size-btn"
                      isSmall
                      isPrimary={iconSizeType === "px"}
                      aria-pressed={iconSizeType === "px"}
                      onClick={() =>
                      setAttributes({ iconSizeType: "px" })
                  }
                  >
                      {"px"}
                  </Button>
                      <Button
                      key={"%"}
                      className="responsive-block-editor-addons-size-btn"
                      isSmall
                      isPrimary={iconSizeType === "%"}
                      aria-pressed={iconSizeType === "%"}
                      onClick={() => setAttributes({ iconSizeType: "%" })}
                  >
                      {"%"}
                  </Button>
                      </ButtonGroup>
                      <p>{__("")}</p>
                      <RangeControl
                      value={iconSize}
                      onChange={(value) =>
                      setAttributes({ iconSize: value })
                  }
                      min={0}
                      max={100}
                      allowReset
                      />
                      </Fragment>
                  );
                  }

                  return <div>{tabout}</div>;
              }}
          </TabPanel>
          <hr className="responsive-block-editor-addons-editor__separator" />
              <p className="responsive-block-editor-addons-setting-label">
                {__("Icon Color")}
                <span className="components-base-control__label">
                  <span
                    className="component-color-indicator"
                    style={{ backgroundColor: iconColor }}
                  ></span>
                </span>
              </p>
              <ColorPalette
                value={iconColor}
                onChange={(value) => setAttributes({ iconColor: value })}
                allowReset
              />
              <p className="responsive-block-editor-addons-setting-label">
                {__("Icon Active Color")}
                <span className="components-base-control__label">
                  <span
                    className="component-color-indicator"
                    style={{ backgroundColor: iconActiveColor }}
                  ></span>
                </span>
              </p>
              <ColorPalette
                value={iconActiveColor}
                onChange={(value) => setAttributes({ iconActiveColor: value })}
                allowReset
              />
            </Fragment>
          )}
        </Fragment>
      );
    };
    return (
      <Fragment>
        <style id={`responsive-block-editor-addons-style-accordion-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>
        <InspectorControls>
          <InspectorTabs>
            <InspectorTab key={"content"}>
              {accordionGeneralSettings()}
            </InspectorTab>
            <InspectorTab key={"style"}>
              {accordionColorSettings()}
              {accordionStylingSettings()}
              {accordionTypographySettings()}
              {titleFontFamily && loadGoogleFont(titleFontFamily)}
              {contentFontFamily && loadGoogleFont(contentFontFamily)}
            </InspectorTab>
            <InspectorTab key={"advance"}>
            </InspectorTab>
          </InspectorTabs>
        </InspectorControls>
        <div
          className={classnames(
            "responsive-block-editor-addons-accordion__outer-wrap",
            `responsive-block-editor-addons-block-${block_id}`,
            `responsive-block-editor-addons-accordion-icon-${this.props.attributes.iconAlign}`,
            `responsive-block-editor-addons-accordion-layout-${this.props.attributes.layout}`,
            `responsive-block-editor-addons-accordion-expand-first-${this.props.attributes.expandFirstItem}`,
            `responsive-block-editor-addons-accordion-inactive-other-${this.props.attributes.inactiveOtherItems}`,
            equalHeightClass
          )}
      data-accordiontoggle = { true }
      role="tablist"
        >
          <InnerBlocks
            template={getAccordionItemTemplate(2, accordion)}
            templateLock={false}
            allowedBlocks={ALLOWED_BLOCKS}
            __experimentalMoverDirection={"vertical"}
          />
        </div>
      </Fragment>
    );
  }
}

export default compose(
  withSelect((select, ownProps) => {
    var accordion_data = {};
    var json_data = {
      "@context": "https://schema.org",
      "@type": "AccordionPage",
      mainEntity: [],
    };
    const accordionChildBlocks = select("core/block-editor").getBlocks(
      ownProps.clientId
    );

    accordionChildBlocks.forEach((accordionChild, key) => {
      accordion_data = {
        "@type": "Title",
        name: accordionChild.attributes.title,
        acceptedContent: {
          "@type": "Content",
          text: accordionChild.attributes.content,
        },
      };
      json_data["mainEntity"][key] = accordion_data;
    });

    return {
      schemaJsonData: json_data,
    };
  })
)(ResponsiveBlockEditorAddonsAccordionEdit);
