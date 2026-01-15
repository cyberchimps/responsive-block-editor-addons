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
import BlockBorderHelperControl from "../../../settings-components/BlockBorderSettings";

import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";
import EditorStyles from "./editor-styles";
import ResponsiveNewPaddingControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl/index";
import ResponsiveNewMarginControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewMarginControl/index";
import RbeaRangeControl from "../../../utils/components/rbea-range-control";
import RbeaAngleRangeControl from "../../../utils/components/rbea-angle-range-control";
import RbeaColorControl from "../../../utils/components/rbea-color-control";
import RbeaTabRadioControl from "../../../utils/components/rbea-tab-radio-control";
import RbeaBorderStyleTabControl from "../../../utils/components/rbea-border-style-tab-control";
import RbeaBorderRadiusControl from "../../../settings-components/RbeaBorderRadiusControl";
import RbeaBackgroundTypeControl from "../../../utils/components/rbea-background-type-control";
import ColorBackgroundControl from "../../../settings-components/BlockBackgroundSettings/ColorBackgroundSettings";
import ResponsiveBorderWidthControl from "../../../settings-components/ResponsiveBorderWidthSettings";
import RbeaSupportControl from "../../../utils/components/rbea-support-control";
import PresetControl from "../../../settings-components/PresetSettings";
import { presets, resetPreset } from './presets';
import { GradientPicker } from "@wordpress/components";
import { hexToRgba } from "../../../utils/index.js";

import {
  __experimentalToggleGroupControl as ToggleGroupControl,
  __experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';
import RbeaExtensions from "../../../extensions/RbeaExtensions";
import AutoRegisterCSSBlock from "../../../extensions/custom-css/AutoRegisterCSSBlock";

const { __ } = wp.i18n;
const { compose } = wp.compose;
const { select, withSelect } = wp.data;
const { Component, Fragment } = wp.element;

const {
  ColorPalette,
  InspectorControls,
  InnerBlocks,
  AlignmentToolbar,
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
  BaseControl,
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
      marginV,
      marginVMobile,
      marginVTablet,
      marginH,
      marginHMobile,
      marginHTablet,
      blockTopMargin,
      blockBottomMargin,
      blockLeftMargin,
      blockRightMargin,
      blockTopMarginTablet,
      blockBottomMarginTablet,
      blockLeftMarginTablet,
      blockRightMarginTablet,
      blockTopMarginMobile,
      blockBottomMarginMobile,
      blockLeftMarginMobile,
      blockRightMarginMobile,
      blockNewSpacingValuesUpdated,
      titleBgGradient,
      contentBgGradient,
    } = attributes;

    // Sync legacy gradient flags to new background type controls
    if (titleBgGradient) {
      setAttributes({ backgroundType: "gradient", titleBgGradient: false });
    }
    if (contentBgGradient) {
      setAttributes({ contentBackgroundType: "gradient", contentBgGradient: false });
    }

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
    // To populate new control values with existing padding margin control values for backward compatibility.
    if (!blockNewSpacingValuesUpdated) {
      this.props.setAttributes(
        {
          blockTopMargin:          marginV !== undefined ? marginV : blockTopMargin,
          blockBottomMargin:       marginV !== undefined ? marginV : blockBottomMargin,
          blockLeftMargin:         marginH !== undefined ? marginH : blockLeftMargin,
          blockRightMargin:        marginH !== undefined ? marginH : blockRightMargin,
          blockTopMarginTablet:    marginVTablet !== undefined ? marginVTablet : blockTopMarginTablet,
          blockBottomMarginTablet: marginVTablet !== undefined ? marginVTablet : blockBottomMarginTablet,
          blockRightMarginTablet:  marginHTablet !== undefined ? marginHTablet : blockRightMarginTablet,
          blockLeftMarginTablet:   marginHTablet !== undefined ? marginHTablet : blockLeftMarginTablet,
          blockTopMarginMobile:    marginVMobile !== undefined ? marginVMobile : blockTopMarginMobile,
          blockBottomMarginMobile: marginVMobile !== undefined ? marginVMobile : blockBottomMarginMobile,
          blockLeftMarginMobile:   marginHMobile !== undefined ? marginHMobile : blockLeftMarginMobile,
          blockRightMarginMobile:  marginHMobile !== undefined ? marginHMobile : blockRightMarginMobile,
        }
      )
    }
    this.props.setAttributes({blockNewSpacingValuesUpdated: true});
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
    // const { attributes, setAttributes } = this.props;
    const {
      attributes:{
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
    //Parent block border radius
    parentBlockBorderTopRadius,
    parentBlockBorderTopRadiusMobile,
    parentBlockBorderTopRadiusTablet,
    parentBlockBorderRightRadius,
    parentBlockBorderRightRadiusMobile,
    parentBlockBorderRightRadiusTablet,
    parentBlockBorderLeftRadius,
    parentBlockBorderLeftRadiusMobile,
    parentBlockBorderLeftRadiusTablet,
    parentBlockBorderBottomRadius,
    parentBlockBorderBottomRadiusMobile,
    parentBlockBorderBottomRadiusTablet,
    parentBlockBorderBottomIsRadiusValueUpdated,
    parentBlockBorderBottomIsRadiusControlConnected,
    //Parent block border width
    parentBlockBorderTopWidth,
    parentBlockBorderTopWidthMobile,
    parentBlockBorderTopWidthTablet,
    parentBlockBorderBottomWidth,
    parentBlockBorderBottomWidthMobile,
    parentBlockBorderBottomWidthTablet,
    parentBlockBorderLeftWidth,
    parentBlockBorderLeftWidthMobile,
    parentBlockBorderLeftWidthTablet,
    parentBlockBorderRightWidth,
    parentBlockBorderRightWidthTablet,
    parentBlockBorderRightWidthMobile,
    parentBlockBorderStyle,
    parentBlockBorderColor,

    titleTopSpacing,
    titleTopSpacingMobile,
    titleTopSpacingTablet,
    titleBottomSpacing,
    titleBottomSpacingMobile,
    titleBottomSpacingTablet,
    titleLeftSpacing,
    titleLeftSpacingMobile,
    titleLeftSpacingTablet,
    titleRightSpacing,
    titleRightSpacingMobile,
    titleRightSpacingTablet,

    contentTopSpacing,
    contentTopSpacingMobile,
    contentTopSpacingTablet,
    contentBottomSpacing,
    contentBottomSpacingMobile,
    contentBottomSpacingTablet,
    contentLeftSpacing,
    contentLeftSpacingMobile,
    contentLeftSpacingTablet,
    contentRightSpacing,
    contentRightSpacingMobile,
    contentRightSpacingTablet,
    blockTopMargin,
    blockBottomMargin,
    blockLeftMargin,
    blockRightMargin,
    blockTopMarginTablet,
    blockBottomMarginTablet,
    blockLeftMarginTablet,
    blockRightMarginTablet,
    blockTopMarginMobile,
    blockBottomMarginMobile,
    blockLeftMarginMobile,
    blockRightMarginMobile,
    blockTopPadding,
    blockTopPaddingMobile,
    blockTopPaddingTablet,
    blockBottomPadding,
    blockBottomPaddingMobile,
    blockBottomPaddingTablet,
    blockLeftPadding,
    blockLeftPaddingMobile,
    blockLeftPaddingTablet,
    blockRightPadding,
    blockRightPaddingMobile,
    blockRightPaddingTablet,
    blockIsMarginControlConnected,
    blockIsPaddingControlConnected,
    blockNewSpacingValuesUpdated,

    blockIsTypographyColorValueUpdated,
    contentTypographyColor,
    titleTypographyColor,
    blockTitleLeftPadding,
    blockTitleLeftPaddingTablet,
    blockTitleLeftPaddingMobile,
    blockTitleTopPadding,
    blockTitleTopPaddingTablet,
    blockTitleTopPaddingMobile,
    blockTitleBottomPadding,
    blockTitleBottomPaddingTablet,
    blockTitleBottomPaddingMobile,
    blockTitleRightPadding,
    blockTitleRightPaddingTablet,
    blockTitleRightPaddingMobile,
    
    contentLeftPadding,
    contentLeftPaddingTablet,
    contentLeftPaddingMobile,
    contentTopPadding,
    contentTopPaddingTablet,
    contentTopPaddingMobile,
    contentBottomPadding,
    contentBottomPaddingTablet,
    contentBottomPaddingMobile,
    contentRightPadding,
    contentRightPaddingTablet,
    contentRightPaddingMobile,
    titleContentIsPaddingControlConnected,
    titleTextTransform,
    titleFontStyle,
    contentTextTransform,
    contentFontStyle,
    z_index, 
    z_indexMobile,
    z_indexTablet,
    hideWidget,
    hideWidgetMobile,
    hideWidgetTablet,
    backgroundType,
    contentBackgroundType,
    gradient,
    contentGradient,
    contentTextDecoration,
    titleTextDecoration,
    },
      setAttributes,
    } = this.props;

    const blockPaddingResetValues = {
			paddingTop: 0,
			paddingRight: 0,
			paddingBottom: 0,
			paddingLeft: 0,
			paddingTabletTop: 0,
			paddingTabletRight: 0,
			paddingTabletBottom: 0,
			paddingTabletLeft: 0,
			paddingMobileTop: 0,
			paddingMobileRight: 0,
			paddingMobileBottom: 0,
			paddingMobileLeft: 0,
		}
    const parentBlockBorderWidthValues = {
			paddingTop: 1,
			paddingRight: 1,
			paddingBottom: 1,
			paddingLeft: 1,
			paddingTabletTop: 1,
			paddingTabletRight: 1,
			paddingTabletBottom: 1,
			paddingTabletLeft: 1,
			paddingMobileTop: 1,
			paddingMobileRight: 1,
			paddingMobileBottom: 1,
			paddingMobileLeft: 1,
		}
    const blockMarginResetValues = {
			marginTop: 0,
			marginRight: 0,
			marginBottom: 0,
			marginLeft: 0,
			marginTabletTop: 0,
			marginTabletRight: 0,
			marginTabletBottom: 0,
			marginTabletLeft: 0,
			marginMobileTop: 0,
			marginMobileRight: 0,
			marginMobileBottom: 0,
			marginMobileLeft: 0,
		}
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

    // Background Type Options
    const backgroundTypeOptions = [
      { value: "color", label: __("Color", "responsive-block-editor-addons") },
      {
        value: "gradient",
        label: __("Gradient", "responsive-block-editor-addons"),
      },
    ];

    // Gradient options for WordPress GradientPicker (same as container)
    const gradientOptions = [
      {
        name: 'JShine',
        gradient:
          'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
        slug: 'jshine',
      },
      {
        name: 'Moonlit Asteroid',
        gradient:
          'linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)',
        slug: 'moonlit-asteroid',
      },
      {
        name: 'Rastafarie',
        gradient:
          'linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)',
        slug: 'rastafari',
      },
    ];

    // Convert old gradient attributes to WordPress gradient format if needed
    const getGradientValue = () => {
      // If gradient already exists (WordPress format), use it
      if (gradient) {
        return gradient;
      }
      
      // Otherwise, convert from old attributes to WordPress format
      if (titleBackgroundColor || titleSecondaryBackgroundColor) {
        const imgopacity = titleBackgroundColorOpacity ? titleBackgroundColorOpacity / 100 : 1;
        const color1 = hexToRgba(titleBackgroundColor || "#fff", imgopacity);
        const color2 = hexToRgba(titleSecondaryBackgroundColor || "#fff", imgopacity);
        // const location1 = colorLocation1 !== undefined ? colorLocation1 : 0;
        // const location2 = colorLocation2 !== undefined ? colorLocation2 : 100;
        const direction = titleGradientDegree !== undefined ? titleGradientDegree : 90;
        
        return `linear-gradient(${direction}deg, ${color1} 0%, ${color2} 100%)`;
      }
      
      return undefined;
    };

    const getContentGradientValue = () => {
      // If gradient already exists (WordPress format), use it
      if (contentGradient) {
        return contentGradient;
      }
      
      // Otherwise, convert from old attributes to WordPress format
      if (contentBackgroundColor || contentSecondaryBackgroundColor) {
        const imgopacity = contentBackgroundColorOpacity ? contentBackgroundColorOpacity / 100 : 1;
        const color1 = hexToRgba(contentBackgroundColor || "#fff", imgopacity);
        const color2 = hexToRgba(contentSecondaryBackgroundColor || "#fff", imgopacity);
        // const location1 = colorLocation1 !== undefined ? colorLocation1 : 0;
        // const location2 = colorLocation2 !== undefined ? colorLocation2 : 100;
        const direction = contentGradientDegree !== undefined ? contentGradientDegree : 90;
        
        return `linear-gradient(${direction}deg, ${color1} 0%, ${color2} 100%)`;
      }
      
      return undefined;
    };

    // Handle gradient change - save to new format
    const onGradientChange = (value) => {
      setAttributes({ gradient: value });
    };

    const onContentGradientChange = (value) => {
      setAttributes({ contentGradient: value });
    };

    const getAccordionItemTemplate = memoize((accordion_count, accordion) => {
      return times(accordion_count, (n) => [
        "responsive-block-editor-addons/accordion-item",
        accordion[n],
      ]);
    });

    const equalHeightClass = equalHeight
      ? "responsive-block-editor-addons-accordion-equal-height"
      : "";

    const contentTitlePaddingResetValues = {
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 10,
      paddingLeft: 10,
      paddingTabletTop: 10,
      paddingTabletRight: 10,
      paddingTabletBottom: 10,
      paddingTabletLeft: 10,
      paddingMobileTop: 10,
      paddingMobileRight: 10,
      paddingMobileBottom: 10,
      paddingMobileLeft: 10,
    }

    if (!titleContentIsPaddingControlConnected) {
      this.props.setAttributes(
        {
          blockTitleLeftPadding:          titleLeftSpacing !== undefined ? titleLeftSpacing : blockTitleLeftPadding,
          blockTitleLeftPaddingTablet:    titleLeftSpacingTablet !== undefined ? titleLeftSpacingTablet : blockTitleLeftPaddingTablet,
          blockTitleLeftPaddingMobile:    titleLeftSpacingMobile !== undefined ? titleLeftSpacingMobile : blockTitleLeftPaddingMobile,
          blockTitleTopPadding:          titleTopSpacing !== undefined ? titleTopSpacing : blockTitleTopPadding,
          blockTitleTopPaddingTablet:    titleTopSpacingTablet !== undefined ? titleTopSpacingTablet : blockTitleTopPaddingTablet,
          blockTitleTopPaddingMobile:    titleTopSpacingMobile !== undefined ? titleTopSpacingMobile : blockTitleTopPaddingMobile,
          blockTitleBottomPadding:          titleBottomSpacing !== undefined ? titleBottomSpacing : blockTitleBottomPadding,
          blockTitleBottomPaddingTablet:    titleBottomSpacingTablet !== undefined ? titleBottomSpacingTablet : blockTitleBottomPaddingTablet,
          blockTitleBottomPaddingMobile:    titleBottomSpacingMobile !== undefined ? titleBottomSpacingMobile : blockTitleBottomPaddingMobile,
          blockTitleRightPadding:          titleRightSpacing !== undefined ? titleRightSpacing : blockTitleRightPadding,
          blockTitleRightPaddingTablet:    titleRightSpacingTablet !== undefined ? titleRightSpacingTablet : blockTitleRightPaddingTablet,
          blockTitleRightPaddingMobile:    titleRightSpacingMobile !== undefined ? titleRightSpacingMobile : blockTitleRightPaddingMobile,

          contentLeftPadding:          contentLeftSpacing !== undefined ? contentLeftSpacing : contentLeftPadding,
          contentLeftPaddingTablet:    contentLeftSpacingTablet !== undefined ? contentLeftSpacingTablet : contentLeftPaddingTablet,
          contentLeftPaddingMobile:    contentLeftSpacingMobile !== undefined ? contentLeftSpacingMobile : contentLeftPaddingMobile,
          contentTopPadding:          contentTopSpacing !== undefined ? contentTopSpacing : contentTopPadding,
          contentTopPaddingTablet:    contentTopSpacingTablet !== undefined ? contentTopSpacingTablet : contentTopPaddingTablet,
          contentTopPaddingMobile:    contentTopSpacingMobile !== undefined ? contentTopSpacingMobile : contentTopPaddingMobile,
          contentBottomPadding:          contentBottomSpacing !== undefined ? contentBottomSpacing : contentBottomPadding,
          contentBottomPaddingTablet:    contentBottomSpacingTablet !== undefined ? contentBottomSpacingTablet : contentBottomPaddingTablet,
          contentBottomPaddingMobile:    contentBottomSpacingMobile !== undefined ? contentBottomSpacingMobile : contentBottomPaddingMobile,
          contentRightPadding:          contentRightSpacing !== undefined ? contentRightSpacing : contentRightPadding,
          contentRightPaddingTablet:    contentRightSpacingTablet !== undefined ? contentRightSpacingTablet : contentRightPaddingTablet,
          contentRightPaddingMobile:    contentRightSpacingMobile !== undefined ? contentRightSpacingMobile : contentRightPaddingMobile,
        }
      )
      this.props.setAttributes({titleContentIsPaddingControlConnected: true});
    }

    const accordionGeneralSettings = () => {
      return (
        <>
        <PanelBody
          title={__("General", "responsive-block-editor-addons")}
          initialOpen={true}
        >
          <div className="responsive-block-editor-addons-grid-2-layout">
            <RbeaTabRadioControl
              label={__("Layout", "responsive-block-editor-addons")}
              value={layout}
              options={[
                { value: "accordion", label: __("Accordion", "responsive-block-editor-addons") },
                { value: "grid", label: __("Grid", "responsive-block-editor-addons") },
              ]}
              onChange={(value) => this.onchangeLayout(value)}
              defaultValue={"accordion"}
            />
          </div>
          {"accordion" === layout && (
            <Fragment>
              <ToggleControl
                label={__("Collapse other items", "responsive-block-editor-addons")}
                checked={inactiveOtherItems}
                onChange={(value) =>
                  setAttributes({ inactiveOtherItems: !inactiveOtherItems })
                }
                __nextHasNoMarginBottom
              />
              {true === inactiveOtherItems && (
                <ToggleControl
                  label={__("Expand First Item", "responsive-block-editor-addons")}
                  checked={expandFirstItem}
                  onChange={(value) =>
                    setAttributes({ expandFirstItem: !expandFirstItem })
                  }
                  __nextHasNoMarginBottom
                />
              )}
            </Fragment>
          )}

          <hr className="responsive-block-editor-addons-editor__separator" />
          {"grid" === layout && (
            <RbeaRangeControl
              label={__("Columns", "responsive-block-editor-addons")}
              value={columns}
              onChange={(value) => setAttributes({ columns: value })}
              min={0}
              max={4}
            />
          )}
          {"grid" === layout && (
            <Fragment>
              <BaseControl
                __nextHasNoMarginBottom
              >
                <p>
                  {__("Alignment", "responsive-block-editor-addons")}
                </p>
                <div className="responsive-block-editor-addons-alignment">
                  <AlignmentToolbar
                    value={align}
                    onChange={(value) =>
                      setAttributes({
                        align: value,
                      })
                    }
                    controls={["left", "center", "right"]}
                    isCollapsed={false}
                  />
                </div>
              </BaseControl>
            </Fragment>
          )}
          {"accordion" === layout && accordionIconSettings()}
        </PanelBody>
        <PanelBody
            title={__("Presets", "responsive-block-editor-addons")}
            initialOpen={false}
          >
          <PresetControl
            label={__('Select Preset', 'responsive-block-editor-addons')}
            presets={presets}
            onApply={(newAttrs) => setAttributes(newAttrs)}
            activeId={null}
            isResetAllowed={true}
            resetAttr={resetPreset}
            onResetApply={(newAttrs) => setAttributes(newAttrs)}
          />
        </PanelBody>
        </>
      );
    };

    const accordionColorSettings = () => {
      return (
        <PanelBody
          title={__("Color", "responsive-block-editor-addons")}
          initialOpen={false}
          className="responsive_block_editor_addons__url-panel-body"
        >
              <RbeaColorControl
									label = {__("Active Title Text color", "responsive-block-editor-addons")}
									colorValue={titleActiveTextColor} //titleActiveTextColor
									onChange={(colorValue) =>
										setAttributes({ titleActiveTextColor: colorValue })
									}
									resetColor={() => setAttributes({ titleActiveTextColor: "" })}
								/>
              <RbeaColorControl
									label = {__("Active Title Background Color", "responsive-block-editor-addons")}
									colorValue={titleActiveBackgroundColor}
									onChange={(colorValue) =>
										setAttributes({ titleActiveBackgroundColor: colorValue })
									}
									resetColor={() => setAttributes({ titleActiveBackgroundColor: "" })}
								/>
              <RbeaBackgroundTypeControl
                label={__("Title Background Type", "responsive-block-editor-addons")}
                value={backgroundType}
                onChange={(value) => setAttributes({ backgroundType: value })}
                options={backgroundTypeOptions}
              />
              {"color" == backgroundType && (
                <Fragment>
                  <RbeaColorControl
                    label = {__("Background Color", "responsive-block-editor-addons")}
                    colorValue={titleBackgroundColor} //titleBackgroundColor
                    onChange={(colorValue) =>
                      setAttributes({ titleBackgroundColor: colorValue })
                    }
                    resetColor={() => setAttributes({ titleBackgroundColor: "" })}
                  />
                </Fragment>
              )}
              {"gradient" == backgroundType && (
                <Fragment>
                  <GradientPicker
                    value={getGradientValue()}
                    onChange={onGradientChange}
                    gradients={gradientOptions}
                  />
                </Fragment>
              )}
              <RbeaBackgroundTypeControl
                label={__("Content Background Type", "responsive-block-editor-addons")}
                value={contentBackgroundType}
                onChange={(value) => setAttributes({ contentBackgroundType: value })}
                options={backgroundTypeOptions}
              />
              {"color" == contentBackgroundType && (
                <Fragment>
                  <RbeaColorControl
                    label = {__("Content Background Color", "responsive-block-editor-addons")}
                    colorValue={contentBackgroundColor}
                    onChange={(colorValue) =>
                      setAttributes({ contentBackgroundColor: colorValue })
                    }
                    resetColor={() => setAttributes({ contentBackgroundColor: "" })}
                  />
                </Fragment>
              )}
              {"gradient" == contentBackgroundType && (
                <Fragment>
                  <GradientPicker
                    value={getContentGradientValue()}
                    onChange={onContentGradientChange}
                    gradients={gradientOptions}
                  />
                </Fragment>
              )}
            
        </PanelBody>
      );
    };
    const accordionBorderSettings = () => {
      return (
        <PanelBody
        title={__("Border", "responsive-block-editor-addons")}
        initialOpen={false}
      >
        <RbeaBorderStyleTabControl
          selected={parentBlockBorderStyle}
          onChange={(value) =>
            setAttributes({ parentBlockBorderStyle: value })
          }
        />
        {"none" != parentBlockBorderStyle && (
          <Fragment>
          <ResponsiveBorderWidthControl
            attrNameTemplate="parentBlockBorder%s"
            resetValues={parentBlockBorderWidthValues}
            {...this.props}
          />
        </Fragment>
        )}
        <br></br>
        <RbeaBorderRadiusControl
          attrNameTemplate="parentBlockBorder%s"
          {...this.props}
        />
        {"none" != parentBlockBorderStyle && (
          <Fragment>
            <RbeaColorControl
              label = {__("Border Color", "responsive-block-editor-addons")}
              colorValue={parentBlockBorderColor}
              onChange={(colorValue) =>
                setAttributes({ parentBlockBorderColor: colorValue })
              }
              resetColor={() => setAttributes({ parentBlockBorderColor: "" })}
            />
          </Fragment>
        )}
      </PanelBody>
      );
    };
    const accordionTypographySettings = () => {
      return (
        <>
			    <TypographyHelperControl
			    	title={__("Title Typography", "responsive-block-editor-addons")}
			    	attrNameTemplate="title%s"
			    	values = {{
              family: titleFontFamily, 
              size: titleFontSize, 
              sizeMobile: titleFontSizeMobile, 
              sizeTablet: titleFontSizeTablet, 
              weight: titleFontWeight, 
              height: titleLineHeight, 
              color: titleTypographyColor,
              transform: titleTextTransform,
              fontstyle: titleFontStyle,
              textDecoration: titleTextDecoration,
            }}
			    	showLetterSpacing = { false }
            showColorControl={ true }
            showTextDecoration={true}
			    	setAttributes={ setAttributes }
			    	{...this.props}
          />
          <TypographyHelperControl
			    	title={__("Content Typography", "responsive-block-editor-addons")}
			    	attrNameTemplate="content%s"
			    	values = {{
              family: contentFontFamily, 
              size: contentFontSize, 
              sizeMobile: contentFontSizeMobile, 
              sizeTablet: contentFontSizeTablet, weight: 
              contentFontWeight, 
              height: contentLineHeight, 
              color: contentTypographyColor,
              transform: contentTextTransform,
              fontstyle: contentFontStyle,
              textDecoration: contentTextDecoration,
            }}
			    	showLetterSpacing = { false }
            showColorControl = { true }
            showTextDecoration = {true}
			    	setAttributes={ setAttributes }
			    	{...this.props}
          />
        </>
      );
    };
    const accordionStylingSettings = () => {
      return (
        <PanelBody
          title={__("Spacing", "responsive-block-editor-addons")}
          initialOpen={false}
          className="responsive_block_editor_addons__url-panel-body"
        >
          <ResponsiveNewPaddingControl
            attrNameTemplate="block%s"
            resetValues={blockPaddingResetValues}
            {...this.props}
          />
          <ResponsiveNewMarginControl
            attrNameTemplate="block%s"
            resetValues={blockMarginResetValues}
            {...this.props}
          />
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
                __nextHasNoMarginBottom
              />
            </Fragment>
          )}

          <div className="rbea-spacing-secondary-container">
            <h3 className="rbea-spacing-secondary-container-title">Title</h3>
            <ResponsiveNewPaddingControl
              attrNameTemplate="blockTitle%s"
              resetValues={contentTitlePaddingResetValues}
              {...this.props}
            />
          </div>

          <div className="rbea-spacing-secondary-container">
            <h3 className="rbea-spacing-secondary-container-title">Content</h3>
            <ResponsiveNewPaddingControl
              attrNameTemplate="content%s"
              resetValues={contentTitlePaddingResetValues}
              {...this.props}
            />
          </div>
          
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
          <div className="responsive-block-editor-addons-accordion-alignment-container">
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
          </div>
          {"accordion" === layout && (
            <Fragment>
              <hr className="responsive-block-editor-addons-editor__separator" />
              <TabPanel
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
                        <div className='responsive-block-editor-addons-icon-size-unit-container'>
                          <Fragment>
                            <ToggleGroupControl
                              className="responsive-block-editor-addons-size-type-field-accordion"
                              aria-label={ __("Size Type") }
                              value={ iconSizeType }
                              onChange={(val) => setAttributes({ iconSizeType: val })}
                              __next40pxDefaultSize
                              __nextHasNoMarginBottom
                            >
                              <ToggleGroupControlOption
                                className="responsive-block-editor-addons-size-btn-accordion"
                                value="px"
                                label="px"
                              />
                              <ToggleGroupControlOption
                                className="responsive-block-editor-addons-size-btn-accordion"
                                value="%"
                                label="%"
                              />
                            </ToggleGroupControl>
                      <p>{__("")}</p>
                      <RbeaRangeControl
                      label={"Icon Size (Mobile)"}
                      value={iconSizeMobile}
                      onChange={(value) =>
                      setAttributes({ iconSizeMobile: value })
                  }
                      min={0}
                      max={100}
                      allowReset
                      />
                      </Fragment>
                      </div>
                  );
                  } else if ("tablet" === tab.name) {
                      tabout = (
                        <div className='responsive-block-editor-addons-icon-size-unit-container'>
                          <Fragment>
                            <ToggleGroupControl
                              className="responsive-block-editor-addons-size-type-field-accordion"
                              aria-label={ __("Size Type") }
                              value={ iconSizeType }
                              onChange={(val) => setAttributes({ iconSizeType: val })}
                              __next40pxDefaultSize
                              __nextHasNoMarginBottom
                            >
                              <ToggleGroupControlOption
                                className="responsive-block-editor-addons-size-btn-accordion"
                                value="px"
                                label="px"
                              />
                              <ToggleGroupControlOption
                                className="responsive-block-editor-addons-size-btn-accordion"
                                value="%"
                                label="%"
                              />
                            </ToggleGroupControl>
                      <p>{__("")}</p>
                      <RbeaRangeControl
                      label={"Icon Size (Tablet)"}
                      value={iconSizeTablet}
                      onChange={(value) =>
                      setAttributes({ iconSizeTablet: value })
                  }
                      min={0}
                      max={100}
                      allowReset
                      />
                      </Fragment>
                      </div>
                  );
                  } else {
                      tabout = (
                        <div className='responsive-block-editor-addons-icon-size-unit-container'>
                          <Fragment>
                           <ToggleGroupControl
                              className="responsive-block-editor-addons-size-type-field-accordion"
                              aria-label={ __("Size Type") }
                              value={ iconSizeType }
                              onChange={(val) => setAttributes({ iconSizeType: val })}
                              __next40pxDefaultSize
                              __nextHasNoMarginBottom
                            >
                              <ToggleGroupControlOption
                                className="responsive-block-editor-addons-size-btn-accordion"
                                value="px"
                                label="px"
                              />
                              <ToggleGroupControlOption
                                className="responsive-block-editor-addons-size-btn-accordion"
                                value="%"
                                label="%"
                              />
                            </ToggleGroupControl>
                      <p>{__("")}</p>
                      <RbeaRangeControl
                      label={"Icon Size"}
                      value={iconSize}
                      onChange={(value) =>
                      setAttributes({ iconSize: value })
                  }
                      min={0}
                      max={100}
                      allowReset
                      />
                      </Fragment>
                      </div>
                  );
                  }

                  return <div>{tabout}</div>;
              }}
          </TabPanel>
          <hr className="responsive-block-editor-addons-editor__separator" />
            <RbeaColorControl
              label = {__("Icon Color", "responsive-block-editor-addons")}
              colorValue={iconColor}
              onChange={(colorValue) =>
                setAttributes({ iconColor: colorValue })
              }
              resetColor={() => setAttributes({ iconColor: "" })}
            />
            <RbeaColorControl
              label = {__("Icon Active Color", "responsive-block-editor-addons")}
              colorValue={iconActiveColor}
              onChange={(colorValue) =>
                setAttributes({ iconActiveColor: colorValue })
              }
              resetColor={() => setAttributes({ iconActiveColor: "" })}
            />
            </Fragment>
          )}
        </Fragment>
      );
    };

    // backward compatibility for typography color control
    if (!blockIsTypographyColorValueUpdated) {
      this.props.setAttributes(
        {
          contentTypographyColor:          contentTextColor !== undefined ? contentTextColor : contentTypographyColor,
          titleTypographyColor:         titleTextColor !== undefined ? titleTextColor : titleTypographyColor,
        }
      )
      this.props.setAttributes({blockIsTypographyColorValueUpdated: true});
    }
    return (
      <Fragment>
        <style id={`responsive-block-editor-addons-style-accordion-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>
        <AutoRegisterCSSBlock key="auto-register-css" {...this.props} />
        <InspectorControls>
          <InspectorTabs>
            <InspectorTab key={"content"}>
              {accordionGeneralSettings()}
              <RbeaSupportControl blockSlug={"accordion"} />
            </InspectorTab>
            <InspectorTab key={"style"}>
              {accordionColorSettings()}
              {accordionTypographySettings()}
              {titleFontFamily && loadGoogleFont(titleFontFamily)}
              {contentFontFamily && loadGoogleFont(contentFontFamily)}
              {accordionBorderSettings()}
              {accordionStylingSettings()}
              <RbeaSupportControl blockSlug={"accordion"} />
            </InspectorTab>
            <InspectorTab key={"advance"}>
              <RbeaExtensions {...this.props} />
              <PanelBody
                title={__("Z Index", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <TabPanel
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
                        className:
                          " responsive-tablet-tab  responsive-responsive-tabs",
                      },
                      {
                        name: "mobile",
                        title: <Dashicon icon="smartphone" />,
                        className:
                          " responsive-mobile-tab  responsive-responsive-tabs",
                      },
                    ]}
                  >
                    {(tab) => {
                      let tabout;

                      if ("mobile" === tab.name) {
                        tabout = (
                          <RbeaRangeControl
                          label={__("z-index (Mobile)", "responsive-block-editor-addons")}
                          min={-1}
                          max={99999}
                          allowReset={true}
                          resetFallbackValue={1}
                          value={z_indexMobile}
                          onChange={(value) =>
                            setAttributes({ z_indexMobile: value !== undefined ? value : 1 })
                          }
                        />
                        );
                      } else if ("tablet" === tab.name) {
                        tabout = (
                          <RbeaRangeControl
                          label={__("z-index (Tablet)", "responsive-block-editor-addons")}
                          min={-1}
                          max={99999}
                          allowReset={true}
                          resetFallbackValue={1}
                          value={z_indexTablet}
                          onChange={(value) =>
                            setAttributes({ z_indexTablet: value !== undefined ? value : 1 })
                          }
                        />
                        );
                      } else {
                        tabout = (
                          <RbeaRangeControl
                          label={__("z-index ", "responsive-block-editor-addons")}
                          min={-1}
                          max={99999}
                          allowReset={true}
                          resetFallbackValue={1}
                          value={z_index}
                          onChange={(value) =>
                            setAttributes({ z_index: value !== undefined ? value : 1 })
                          }
                        />
                        );
                      }

                      return <div>{tabout}</div>;
                    }}
                  </TabPanel>
              </PanelBody>
              <RbeaSupportControl blockSlug={"accordion"} />
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
            `responsive-block-editor-addons-block-accordion`,
            `block-${this.props.attributes.block_id}`,
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