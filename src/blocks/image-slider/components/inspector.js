/**
 * Internal dependencies
 */
import SliderPanel from "../../../utils/components/slider-panel";
import ResponsiveTabsControl from "../../../utils/components/responsive-tabs-control";
import SizeControl from "../../../utils/components/size-control";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import BlockBorderHelperControl from "../../../settings-components/BlockBorderSettings";


/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { Component, Fragment } from "@wordpress/element";
import {
  InspectorControls,
  InspectorAdvancedControls,
  PanelColorSettings,
} from "@wordpress/block-editor";
import {
  PanelBody,
  RangeControl,
  ToggleControl,
  BaseControl,
  SelectControl,
  Dashicon,
  TabPanel,
} from "@wordpress/components";

/**
 * Inspector controls
 */
class Inspector extends Component {
  constructor() {
    super(...arguments);
    this.setSizeControl = this.setSizeControl.bind(this);
    this.setRadiusTo = this.setRadiusTo.bind(this);
    this.setHeightTo = this.setHeightTo.bind(this);
    this.state = {
      temporaryInput: null,
    };
  }

  setRadiusTo(value) {
    this.props.setAttributes({ radius: value });
  }

  setSizeControl(value) {
    this.props.setAttributes({ gridSize: value });
  }

  setHeightTo(value) {
    this.props.setAttributes({ height: value });
  }

  setTemporayInput(value) {
    this.setState({ temporaryInput: value });
  }

  getSmallImageNavigationHelp(checked) {
    return checked
      ? __(
          "Turn this OFF if you are using larger images.",
          "responsive-block-editor-addons"
        )
      : __(
          "Turn this ON if you are using smaller images.",
          "responsive-block-editor-addons"
        );
  }
  getThumbnailNavigationHelp(checked) {
    return checked
      ? __("Showing thumbnail navigation.", "responsive-block-editor-addons")
      : __("Toggle to show thumbnails.", "responsive-block-editor-addons");
  }

  getResponsiveHeightHelp(checked) {
    return checked
      ? __(
          "Percentage based height is activated.",
          "responsive-block-editor-addons"
        )
      : __(
          "Toggle for percentage based height.",
          "responsive-block-editor-addons"
        );
  }

  getLightboxHelp(checked) {
    return checked
      ? __("Image lightbox is enabled.", "responsive-block-editor-addons")
      : __(
          "Toggle to enable the image lightbox.",
          "responsive-block-editor-addons"
        );
  }

  render() {
    const { attributes, isSelected, setAttributes } = this.props;

    const {
      align,
      gridSize,
      gutter,
      height,
      radius,
      thumbnails,
      isSmallImage,
      responsiveHeight,
      lightbox,
      blockBorderWidth,
      blockBorderColor,
      blockBorderStyle,
      blockBorderRadius,
      iconBackgroundColor,
      iconColor,
      iconBackgroundRadius,
      iconBackgroundOpacity,
      width,
      customWidth,
      hideWidget,
      hideWidgetTablet,
      hideWidgetMobile,
      z_index,
      z_indexMobile,
      z_indexTablet,
    } = attributes;

    const { temporaryInput } = this.state;

    return (
      isSelected && (
        <Fragment>
          <InspectorControls>
            <InspectorTabs>
              <InspectorTab key={"content"}>
                <PanelBody
                  title={__("Image Carousel", "responsive-block-editor-addons")}
                  initialOpen={false}
                >
                  <SizeControl
                    {...this.props}
                    type={"grid"}
                    label={__("Size", "responsive-block-editor-addons")}
                    onChange={this.setSizeControl}
                    value={gridSize}
                    resetValue={"xlrg"}
                  />
                  {gridSize !== null &&
                    (align === "wide" || align === "full") && (
                      <ResponsiveTabsControl
                        {...this.props}
                        label={__("Gutter", "responsive-block-editor-addons")}
                        max={20}
                      />
                    )}
                  {gridSize !== "xlrg" && !align && (
                    <ResponsiveTabsControl
                      {...this.props}
                      label={__("Gutter", "responsive-block-editor-addons")}
                      max={50}
                    />
                  )}
                  {gutter > 0 && (
                    <RangeControl
                      label={__("Radius", "responsive-block-editor-addons")}
                      value={radius}
                      onChange={this.setRadiusTo}
                      min={0}
                      max={50}
                      step={1}
                    />
                  )}
                  <ToggleControl
                    label={__("Custom Width", "responsive-block-editor-addons")}
                    checked={!!customWidth}
                    onChange={() =>
                      setAttributes({ customWidth: !customWidth })
                    }
                  />
                  {!!customWidth && (
                    <RangeControl
                      label={__(
                        "Width in pixels",
                        "responsive-block-editor-addons"
                      )}
                      value={width}
                      onChange={(value) =>
                        setAttributes({
                          width: value,
                        })
                      }
                      min={0}
                      max={1000}
                      step={1}
                    />
                  )}
                  {!responsiveHeight && (
                    <BaseControl
                      label={__(
                        "Height in pixels",
                        "responsive-block-editor-addons"
                      )}
                      className={"block-height-control"}
                    >
                      <input
                        type="number"
                        className={"block-height-control__input"}
                        onChange={(event) => {
                          const unprocessedValue = event.target.value;
                          const inputValue =
                            unprocessedValue !== ""
                              ? parseInt(event.target.value, 10)
                              : undefined;
                          if (inputValue < 0 && inputValue !== undefined) {
                            this.setTemporayInput(inputValue);
                            this.setHeightTo(0);
                            return;
                          }
                          this.setTemporayInput(null);
                          this.setHeightTo(inputValue);
                        }}
                        value={temporaryInput || height}
                        min={0}
                        step="10"
                      />
                    </BaseControl>
                  )}
                  <ToggleControl
                    label={__("Small Images", "responsive-block-editor-addons")}
                    checked={!!isSmallImage}
                    onChange={() =>
                      setAttributes({ isSmallImage: !isSmallImage })
                    }
                    help={this.getSmallImageNavigationHelp}
                  />
                  <ToggleControl
                    label={__("Thumbnails", "responsive-block-editor-addons")}
                    checked={!!thumbnails}
                    onChange={() => setAttributes({ thumbnails: !thumbnails })}
                    help={this.getThumbnailNavigationHelp}
                  />
                  <ToggleControl
                    label={__("Lightbox", "responsive-block-editor-addons")}
                    checked={!!lightbox}
                    onChange={() => setAttributes({ lightbox: !lightbox })}
                    help={this.getLightboxHelp}
                  />
                </PanelBody>
                <SliderPanel {...this.props} />
              </InspectorTab>
              <InspectorTab key={"style"}>
                <PanelColorSettings
                  title={__("Arrow", "responsive-block-editor-addons")}
                  initialOpen={false}
                  colorSettings={[
                    {
                      value: iconColor,
                      onChange: (newIconColor) =>
                        setAttributes({ iconColor: newIconColor }),
                      label: __("Color", "responsive-block-editor-addons"),
                    },
                    {
                      value: iconBackgroundColor,
                      onChange: (newiconBackgroundColor) =>
                        setAttributes({
                          iconBackgroundColor: newiconBackgroundColor,
                        }),
                      label: __(
                        "Background Color",
                        "responsive-block-editor-addons"
                      ),
                    },
                  ]}
                >
                  <RangeControl
                    label={__(
                      "Background Opacity",
                      "responsive-block-editor-addons"
                    )}
                    value={iconBackgroundOpacity}
                    onChange={(newiconBackgroundOpacity) =>
                      setAttributes({
                        iconBackgroundOpacity: newiconBackgroundOpacity,
                      })
                    }
                    min={0}
                    max={100}
                    step={1}
                  />
                  <RangeControl
                    label={__(
                      "Background Radius",
                      "responsive-block-editor-addons"
                    )}
                    value={iconBackgroundRadius}
                    onChange={(newiconBackgroundradius) =>
                      setAttributes({
                        iconBackgroundRadius: newiconBackgroundradius,
                      })
                    }
                    min={0}
                    max={50}
                    step={1}
                  />
                </PanelColorSettings>

                  <PanelBody
                      title={__("Border", "responsive-block-editor-addons")}
                      initialOpen={false}
                  >
                      <BlockBorderHelperControl
                          attrNameTemplate="block%s"
                          values = {{radius: blockBorderRadius, style: blockBorderStyle, width: blockBorderWidth, color: blockBorderColor}}
                          setAttributes={ setAttributes }
                          {...this.props}
                      />
                  </PanelBody>
              </InspectorTab>
              <InspectorTab key={"advance"}>
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
          <InspectorAdvancedControls>
            <ToggleControl
              label={__("Responsive height", "responsive-block-editor-addons")}
              checked={!!responsiveHeight}
              onChange={() =>
                setAttributes({ responsiveHeight: !responsiveHeight })
              }
              help={this.getResponsiveHeightHelp}
            />
          </InspectorAdvancedControls>
        </Fragment>
      )
    );
  }
}

export default Inspector;
