import { __ } from "@wordpress/i18n";
import { TabPanel, SelectControl, ToggleControl, Dashicon } from "@wordpress/components";
import RbeaColorControl from "../../../utils/components/rbea-color-control";
import RbeaRangeControl from "../../../utils/components/rbea-range-control";
import { useState } from "@wordpress/element";

const ShapeDividers = ({ attributes, setAttributes }) => {

  const {
    topType,
    topColor,
    topWidth,
    topHeight,
    topHeightTablet,
    topHeightMobile,
    topFlip,
    topInvert,
    topContentAboveShape,
    bottomType,
    bottomColor,
    bottomWidth,
    bottomHeight,
    bottomHeightTablet,
    bottomHeightMobile,
    bottomFlip,
    bottomInvert,
    bottomContentAboveShape,
  } = attributes

  const [topHeightTab, setTopHeightTab] = useState("desktop");
  const [bottomHeightTab, setBottomHeightTab] = useState("desktop");

  const dividers = [
    {
      value: 'none',
      label: __('None', 'responsive-block-editor-addons'),
    },
    {
      value: 'tilt',
      label: __('Tilt', 'responsive-block-editor-addons'),
    },
    {
      value: 'mountains',
      label: __('Mountains', 'responsive-block-editor-addons'),
    },
    {
      value: 'wave_brush',
      label: __('Wave Brush', 'responsive-block-editor-addons'),
    },
    {
      value: 'waves',
      label: __('Waves', 'responsive-block-editor-addons'),
    },
    {
      value: 'wave_pattern',
      label: __('Waves Pattern', 'responsive-block-editor-addons'),
    },
    {
      value: 'triangle',
      label: __('Triangle', 'responsive-block-editor-addons'),
    },
    {
      value: 'drops',
      label: __('Drops', 'responsive-block-editor-addons'),
    },
    {
      value: 'clouds',
      label: __('Clouds', 'responsive-block-editor-addons'),
    },
    {
      value: 'zigzag',
      label: __('ZigZag', 'responsive-block-editor-addons'),
    },
    {
      value: 'pyramids',
      label: __('Pyramids', 'responsive-block-editor-addons'),
    },
    {
      value: 'triangle_asymmetrical',
      label: __('Triangle Asymmetrical', 'responsive-block-editor-addons'),
    },
    {
      value: 'tilt_opacity',
      label: __('Tilt Opacity', 'responsive-block-editor-addons'),
    },
    {
      value: 'fan_opacity',
      label: __('Fan Opacity', 'responsive-block-editor-addons'),
    },
    {
      value: 'curve',
      label: __('Curve', 'responsive-block-editor-addons'),
    },
    {
      value: 'curve_asymmetrical',
      label: __('Curve Asymmetrical', 'responsive-block-editor-addons'),
    },
    {
      value: 'curve_reverse',
      label: __('Curve Reverse', 'responsive-block-editor-addons'),
    },
    {
      value: 'curve_asym_reverse',
      label: __('Curve Asymmetrical Reverse', 'responsive-block-editor-addons'),
    },
    {
      value: 'arrow',
      label: __('Arrow', 'responsive-block-editor-addons'),
    },
    {
      value: 'arrow_split',
      label: __('Arrow Split', 'responsive-block-editor-addons'),
    },
    {
      value: 'book',
      label: __('Book', 'responsive-block-editor-addons'),
    },
  ];

  return (
    <>
      <TabPanel
        className="responsive-block-editor-addons-inspect-tabs 
                responsive-block-editor-addons-inspect-tabs-col-2  
                responsive-block-editor-addons-color-inspect-tabs"
        activeClass="active-tab"
        initialTabName="top" // Set the default active tab here
        tabs={[
          {
            name: "empty-1",
            title: __("", "responsive-block-editor-addons"),
            className: "responsive-block-editor-addons-empty-tab",
          },
          {
            name: "top",
            title: __("Top", "responsive-block-editor-addons"),
            className: "responsive-block-editor-addons-normal-tab",
          },
          {
            name: "empty-2",
            title: __("", "responsive-block-editor-addons"),
            className: "responsive-block-editor-addons-empty-tab-middle",
          },
          {
            name: "bottom",
            title: __("Bottom", "responsive-block-editor-addons"),
            className: "responsive-block-editor-addons-hover-tab",
          },
          {
            name: "empty-3",
            title: __("", "responsive-block-editor-addons"),
            className: "responsive-block-editor-addons-empty-tab",
          },
        ]}
      >
        {(topShapeTabName) => {
          let shapeTab;
          if ("top" === topShapeTabName.name) {
            shapeTab = (
              <>
                <div className="rbea-container-select-control">
                  <SelectControl
                    label={__("Type", "responsive-block-editor-addons")}
                    value={topType}
                    options={dividers}
                    onChange={(value) => setAttributes({ topType: value })}
                    __next40pxDefaultSize
                    __nextHasNoMarginBottom
                  />
                </div>
                {topType !== 'none' && (
                  <>
                    <RbeaColorControl
                      label={__("Color", "responsive-block-editor-addons")}
                      colorValue={topColor}
                      onChange={(colorValue) => setAttributes({ topColor: colorValue })}
                      resetColor={() => setAttributes({ topColor: "" })}
                    />
                    <RbeaRangeControl
                      label={__("Width (%)", "responsive-block-editor-addons")}
                      min={0}
                      max={100}
                      allowReset={true}
                      resetFallbackValue={100}
                      value={topWidth}
                      onChange={(value) => setAttributes({ topWidth: value })}
                    />
                    <TabPanel
                      className="responsive-size-type-field-tabs responsive-size-type-field__common-tabs responsive-inline-margin"
                      activeClass="active-tab"
                      onSelect={(topTabName) => setTopHeightTab(topTabName)}
                      tabs={[
                        {
                          name: "desktop",
                          title: <Dashicon icon="desktop" />,
                          className:
                            "responsive-desktop-tab responsive-responsive-tabs",
                        },
                        {
                          name: "tablet",
                          title: <Dashicon icon="tablet" />,
                          className: "responsive-tablet-tab responsive-responsive-tabs",
                        },
                        {
                          name: "mobile",
                          title: <Dashicon icon="smartphone" />,
                          className: "responsive-mobile-tab responsive-responsive-tabs",
                        },
                      ]}
                    >
                      {() => {
                        const topTabSettings = {
                          desktop: {
                            label: __(
                              "Height (Desktop)",
                              "responsive-block-editor-addons"
                            ),
                            value: topHeight,
                            attributeKey: "topHeight",
                          },
                          tablet: {
                            label: __(
                              "Height (Tablet)",
                              "responsive-block-editor-addons"
                            ),
                            value: topHeightTablet,
                            attributeKey: "topHeightTablet",
                          },
                          mobile: {
                            label: __(
                              "Height (Mobile)",
                              "responsive-block-editor-addons"
                            ),
                            value: topHeightMobile,
                            attributeKey: "topHeightMobile",
                          },
                        };

                        const { label, value, attributeKey } =
                          topTabSettings[topHeightTab] || topTabSettings.desktop;

                        return (
                          <div className="rbea-container-custom-radio-control">
                            <RbeaRangeControl
                              label={label}
                              min={0}
                              max={500}
                              allowReset={true}
                              value={value}
                              onChange={(val) => setAttributes({ [attributeKey]: val }) }
                            />
                          </div>
                        );
                      }}
                    </TabPanel>
                    <ToggleControl
                      __nextHasNoMarginBottom
                      label={__("Flip", "responsive-block-editor-addons")}
                      checked={topFlip}
                      onChange={(value) => setAttributes({ topFlip: value })}
                    />
                    <ToggleControl
                      __nextHasNoMarginBottom
                      label={__("Invert", "responsive-block-editor-addons")}
                      checked={topInvert}
                      onChange={(value) => setAttributes({ topInvert: value })}
                    />
                    <ToggleControl
                      __nextHasNoMarginBottom
                      label={__("Bring to Front", "responsive-block-editor-addons")}
                      checked={topContentAboveShape}
                      onChange={(value) => setAttributes({ topContentAboveShape: value })}
                    />
                  </>
                )}
              </>
            );
          } else {
            shapeTab = (
              <>
                <div className="rbea-container-select-control">
                  <SelectControl
                    label={__("Type", "responsive-block-editor-addons")}
                    value={bottomType}
                    options={dividers}
                    onChange={(value) => setAttributes({ bottomType: value })}
                    __next40pxDefaultSize
                    __nextHasNoMarginBottom
                  />
                </div>
                {bottomType !== 'none' && (
                  <>
                    <RbeaColorControl
                      label={__("Color", "responsive-block-editor-addons")}
                      colorValue={bottomColor}
                      onChange={(colorValue) => setAttributes({ bottomColor: colorValue })}
                      resetColor={() => setAttributes({ bottomColor: "" })}
                    />
                    <RbeaRangeControl
                      label={__("Width (%)", "responsive-block-editor-addons")}
                      min={0}
                      max={100}
                      allowReset={true}
                      resetFallbackValue={100}
                      value={bottomWidth}
                      onChange={(value) => setAttributes({ bottomWidth: value })}
                    />
                    <TabPanel
                      className="responsive-size-type-field-tabs responsive-size-type-field__common-tabs responsive-inline-margin"
                      activeClass="active-tab"
                      onSelect={(bottomTabName) => setBottomHeightTab(bottomTabName)}
                      tabs={[
                        {
                          name: "desktop",
                          title: <Dashicon icon="desktop" />,
                          className:
                            "responsive-desktop-tab responsive-responsive-tabs",
                        },
                        {
                          name: "tablet",
                          title: <Dashicon icon="tablet" />,
                          className: "responsive-tablet-tab responsive-responsive-tabs",
                        },
                        {
                          name: "mobile",
                          title: <Dashicon icon="smartphone" />,
                          className: "responsive-mobile-tab responsive-responsive-tabs",
                        },
                      ]}
                    >
                      {() => {
                        const bottomTabSettings = {
                          desktop: {
                            label: __(
                              "Height (Desktop)",
                              "responsive-block-editor-addons"
                            ),
                            value: bottomHeight,
                            attributeKey: "bottomHeight",
                          },
                          tablet: {
                            label: __(
                              "Height (Tablet)",
                              "responsive-block-editor-addons"
                            ),
                            value: bottomHeightTablet,
                            attributeKey: "bottomHeightTablet",
                          },
                          mobile: {
                            label: __(
                              "Height (Mobile)",
                              "responsive-block-editor-addons"
                            ),
                            value: bottomHeightMobile,
                            attributeKey: "bottomHeightMobile",
                          },
                        };

                        const { label, value, attributeKey } =
                          bottomTabSettings[bottomHeightTab] || bottomTabSettings.desktop;

                        return (
                          <div className="rbea-container-custom-radio-control">
                            <RbeaRangeControl
                              label={label}
                              min={0}
                              max={500}
                              allowReset={true}
                              value={value}
                              onChange={(val) => setAttributes({ [attributeKey]: val }) }
                            />
                          </div>
                        );
                      }}
                    </TabPanel>
                    <ToggleControl
                      __nextHasNoMarginBottom
                      label={__("Flip", "responsive-block-editor-addons")}
                      checked={bottomFlip}
                      onChange={(value) => setAttributes({ bottomFlip: value })}
                    />
                    <ToggleControl
                      __nextHasNoMarginBottom
                      label={__("Invert", "responsive-block-editor-addons")}
                      checked={bottomInvert}
                      onChange={(value) => setAttributes({ bottomInvert: value })}
                    />
                    <ToggleControl
                      __nextHasNoMarginBottom
                      label={__("Bring to Front", "responsive-block-editor-addons")}
                      checked={bottomContentAboveShape}
                      onChange={(value) => setAttributes({ bottomContentAboveShape: value })}
                    />
                  </>
                )}
              </>
            );
          }
          return <div>{shapeTab}</div>;
        }}
      </TabPanel>
    </>
  );

}

export default ShapeDividers;