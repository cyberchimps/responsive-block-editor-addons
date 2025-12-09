/**
 * Internal dependencies
 */
import applyWithColors from "./colors";
import ResponsiveBaseControl from "../../../utils/components/responsive-base-control";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import dividers from "./dividers";
import ResponsiveNewPaddingControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewPaddingControl/index";
import ResponsiveNewMarginControl from "../../../settings-components/ResponsiveNewSpacingSettings/ResponsiveNewMarginControl/index";
import RbeaRangeControl from "../../../utils/components/rbea-range-control";
import RbeaColorControl from "../../../utils/components/rbea-color-control";
import RbeaBackgroundTypeControl from "../../../utils/components/rbea-background-type-control";
import RbeaSupportControl from "../../../utils/components/rbea-support-control";
import RbeaExtensions from "../../../extensions/RbeaExtensions";
import GradientBackgroundControl from "../../../settings-components/BlockBackgroundSettings/GradientBackgroundSettings";
/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { Component, Fragment } from "@wordpress/element";
import { compose } from "@wordpress/compose";
import {
  InspectorControls,
  PanelColorSettings,
  ColorPalette,
} from "@wordpress/block-editor";
import { PanelBody, RangeControl, SelectControl, RadioControl, ToggleControl, TabPanel, Dashicon } from "@wordpress/components";

/**
 * Inspector controls
 */
class Inspector extends Component {
  constructor() {
    super(...arguments);

    this.setSizeControl = this.setSizeControl.bind(this);
  }

  setSizeControl(value) {
    this.props.setAttributes({ horizontalFlip: value });
  }

  render() {
    const {
      attributes,
      setAttributes,
      setColor,
      color,
      setBackgroundColor,
      className,
    } = this.props;

    const {
      backgroundColor,
      shapeHeight,
      shapeHeightTablet,
      shapeHeightMobile,
      backgroundHeight,
      backgroundHeightMobile,
      backgroundHeightTablet,
      syncHeight,
      backgroundColor1,
      backgroundColor2,
      colorLocation1,
      colorLocation2,
      gradientDirection,
      backgroundType,
      design,
      hideWidget,
      hideWidgetTablet,
      hideWidgetMobile,
      z_index,
      z_indexTablet,
      z_indexMobile,
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
    } = attributes;

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

    // Background Type Options
    const backgroundTypeOptions = [
      { value: "color", label: __("Color", "responsive-block-editor-addons") },
      {
        value: "gradient",
        label: __("Gradient", "responsive-block-editor-addons"),
      },
    ];

    const _options = [
      { label: dividers.wavy, title: "Wavy", value: "wavy" },
      { label: dividers.hills, title: "Hills", value: "hills" },
      { label: dividers.waves, title: "Waves", value: "waves" },
      { label: dividers.angled, title: "Angled", value: "angled" },
      { label: dividers.sloped, title: "Sloped", value: "sloped" },
      { label: dividers.rounded, title: "Rounded", value: "rounded" },
      { label: dividers.triangle, title: "Triangle", value: "triangle" },
      { label: dividers.pointed, title: "Pointed", value: "pointed" },
    ];

    const fixedOptions = _options.map((option) => {
      return {
        label: (
          <div className="responsive-blocks-editor-addons-design-panel-item">
            <div className="responsive-blocks-editor-addons-design-panel-item__svg">
              {" "}
              {option.label}{" "}
            </div>
            <span className="design-label">{option.title}</span>
          </div>
        ),
        value: option.value,
      };
    });

    return (
      <Fragment>
        <InspectorControls>
          <InspectorTabs>
            <InspectorTab key="content">
              <PanelBody>
                <ResponsiveBaseControl
                  {...this.props}
                  label={__(
                    "Shape height in pixels",
                    "responsive-block-editor-addons"
                  )}
                  height={shapeHeight}
                  heightTablet={shapeHeightTablet}
                  heightMobile={shapeHeightMobile}
                  onChange={(event) => {
                    setAttributes({
                      shapeHeight: parseInt(event.target.value, 10),
                    });
                  }}
                  onChangeTablet={(event) => {
                    setAttributes({
                      shapeHeightTablet: parseInt(event.target.value, 10),
                    });
                  }}
                  onChangeMobile={(event) => {
                    setAttributes({
                      shapeHeightMobile: parseInt(event.target.value, 10),
                    });
                  }}
                  sync={syncHeight}
                  type="shapeHeight"
                  min="40"
                />
                <ResponsiveBaseControl
                  {...this.props}
                  label={__(
                    "Background height in pixels",
                    "responsive-block-editor-addons"
                  )}
                  height={backgroundHeight}
                  heightTablet={backgroundHeightTablet}
                  heightMobile={backgroundHeightMobile}
                  onChange={(event) => {
                    setAttributes({
                      backgroundHeight: parseInt(event.target.value, 10),
                    });
                  }}
                  onChangeTablet={(event) => {
                    setAttributes({
                      backgroundHeightTablet: parseInt(event.target.value, 10),
                    });
                  }}
                  onChangeMobile={(event) => {
                    setAttributes({
                      backgroundHeightMobile: parseInt(event.target.value, 10),
                    });
                  }}
                  sync={syncHeight}
                  type="backgroundHeight"
                  min="20"
                />
              </PanelBody>
              <RbeaSupportControl blockSlug={"shape-divider"} />
            </InspectorTab>
            <InspectorTab key="style">
              <PanelBody
                title={__("Shape Styles", "responsive-block-editor-addons")}
              >
                <div className="rbea-shape-divider-control-container">
                  <RadioControl
                    selected={design}
                    options={fixedOptions}
                    onChange={(value) => setAttributes({ design: value })}
                  />
                </div>
              </PanelBody>
              <PanelBody
                title={__("Shape Color", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                 <RbeaColorControl
									label = {__("Shape color", "responsive-block-editor-addons")}
									colorValue={color.color}
									onChange={setColor}
									resetColor={()=>{setColor("")}}
								/>
              </PanelBody>
              <PanelBody
                title={__("Background", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <RbeaBackgroundTypeControl
                  label={__(
                    "Type",
                    "responsive-block-editor-addons"
                  )}
                  value={backgroundType}
                  onChange={(value) => setAttributes({ backgroundType: value })}
                  options={backgroundTypeOptions}
                />
                {"color" == backgroundType && (
                  <Fragment>
                    <RbeaColorControl
                      label = {__("Background Color", "responsive-block-editor-addons")}
                      colorValue={backgroundColor}
                      onChange={(colorValue) => setAttributes({ backgroundColor: colorValue })}
                      resetColor={() => setAttributes({ backgroundColor: "" })}
                    />
                  </Fragment>
                )}
                {"gradient" == backgroundType && (
                  <Fragment>
                    <GradientBackgroundControl
                      {...this.props}
                      showHoverGradient = {false}
                    />
                  </Fragment>
                )}
              </PanelBody>
              <PanelBody
              title={__("Spacing", "responsive-block-editor-addons")}
              initialOpen={false}
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
						  </PanelBody>
              <RbeaSupportControl blockSlug={"shape-divider"} />
            </InspectorTab>
            <InspectorTab key="advance">

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
            <RbeaSupportControl blockSlug={"shape-divider"} />
            </InspectorTab>
          </InspectorTabs>
        </InspectorControls>
      </Fragment>
    );
  }
}

export default compose([applyWithColors])(Inspector);
