/**
 * Internal dependencies
 */
import applyWithColors from "./colors";
import ResponsiveBaseControl from "../../../utils/components/responsive-base-control";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import dividers from "./dividers";

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
    } = attributes;

    // Background Type Options
    const backgroundTypeOptions = [
      { value: "none", label: __("None", "responsive-block-editor-addons") },
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
              <PanelBody
                title={__("Divider settings", "responsive-block-editor-addons")}
              >
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
            </InspectorTab>
            <InspectorTab key="style">
              <PanelBody
                title={__("Shape Styles", "responsive-block-editor-addons")}
              >
                <RadioControl
                  selected={design}
                  options={fixedOptions}
                  onChange={(value) => setAttributes({ design: value })}
                />
              </PanelBody>
              <PanelColorSettings
                title={__("Shape Color", "responsive-block-editor-addons")}
                initialOpen={false}
                colorSettings={[
                  {
                    value: color.color,
                    onChange: setColor,
                    label: __("Shape color", "responsive-block-editor-addons"),
                  },
                ]}
              ></PanelColorSettings>
              <PanelBody
                title={__("Background", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <SelectControl
                  label={__(
                    "Background Type",
                    "responsive-block-editor-addons"
                  )}
                  value={backgroundType}
                  onChange={(value) => setAttributes({ backgroundType: value })}
                  options={backgroundTypeOptions}
                />
                {"color" == backgroundType && (
                  <Fragment>
                    <p className="responsive-setting-label">
                      {__("Background Color", "responsive-block-editor-addons")}
                      <span className="components-base-control__label">
                        <span
                          className="component-color-indicator"
                          style={{ backgroundColor: backgroundColor }}
                        ></span>
                      </span>
                    </p>
                    <ColorPalette
                      value={backgroundColor}
                      onChange={(colorValue) =>
                        setAttributes({ backgroundColor: colorValue })
                      }
                      allowReset
                    />
                  </Fragment>
                )}
                {"gradient" == backgroundType && (
                  <Fragment>
                    <p className="responsive-setting-label">
                      {__("Color 1", "responsive-block-editor-addons")}
                      <span className="components-base-control__label">
                        <span
                          className="component-color-indicator"
                          style={{ backgroundColor: backgroundColor1 }}
                        ></span>
                      </span>
                    </p>
                    <ColorPalette
                      value={backgroundColor1}
                      onChange={(colorValue) =>
                        setAttributes({ backgroundColor1: colorValue })
                      }
                      allowReset
                    />

                    <p className="responsive-setting-label">
                      {__("Color 2", "responsive-block-editor-addons")}
                      <span className="components-base-control__label">
                        <span
                          className="component-color-indicator"
                          style={{ backgroundColor: backgroundColor2 }}
                        ></span>
                      </span>
                    </p>
                    <ColorPalette
                      value={backgroundColor2}
                      onChange={(colorValue) =>
                        setAttributes({ backgroundColor2: colorValue })
                      }
                      allowReset
                    />
                    <RangeControl
                      label={__(
                        "Color Location 1",
                        "responsive-block-editor-addons"
                      )}
                      value={colorLocation1}
                      min={0}
                      max={100}
                      onChange={(value) =>
                        setAttributes({ colorLocation1: value })
                      }
                    />
                    <RangeControl
                      label={__(
                        "Color Location 2",
                        "responsive-block-editor-addons"
                      )}
                      value={colorLocation2}
                      min={0}
                      max={100}
                      onChange={(value) =>
                        setAttributes({ colorLocation2: value })
                      }
                    />
                    <RangeControl
                      label={__(
                        "Gradient Direction",
                        "responsive-block-editor-addons"
                      )}
                      value={gradientDirection}
                      min={0}
                      max={100}
                      onChange={(value) =>
                        setAttributes({ gradientDirection: value })
                      }
                    />
                  </Fragment>
                )}
              </PanelBody>
            </InspectorTab>
            <InspectorTab key="advance">
              <PanelBody
                title={__("Responsive Conditions", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <ToggleControl
                  label={__(
                  "Hide on Desktop",
                  "responsive-block-editor-addons"
                  )}
                  checked={hideWidget}
                  onChange={(value) =>
                  setAttributes({ hideWidget: !hideWidget })
                  }
                />
                <ToggleControl
                  label={__(
                  "Hide on Tablet",
                  "responsive-block-editor-addons"
                  )}
                  checked={hideWidgetTablet}
                  onChange={(value) =>
                  setAttributes({ hideWidgetTablet: !hideWidgetTablet })
                  }
                />
                <ToggleControl
                  label={__(
                  "Hide on Mobile",
                  "responsive-block-editor-addons"
                  )}
                  checked={hideWidgetMobile}
                  onChange={(value) =>
                  setAttributes({ hideWidgetMobile: !hideWidgetMobile })
                  }
                />
              </PanelBody>
            
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
                        <RangeControl
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
                        <RangeControl
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
                        <RangeControl
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
            </InspectorTab>
          </InspectorTabs>
        </InspectorControls>
      </Fragment>
    );
  }
}

export default compose([applyWithColors])(Inspector);
