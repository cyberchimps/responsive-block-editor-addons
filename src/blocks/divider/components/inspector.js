/**
 * Inspector Controls
 */
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import ResponsiveSpacingControl from "../../../settings-components/ResponsiveSpacingSettings/index";

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

// Import block components
const { InspectorControls, PanelColorSettings } = wp.blockEditor;

// Import Inspector components
const { PanelBody, RangeControl, ToggleControl, SelectControl } = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  render() {
    // Setup the attributes
    const {
      attributes: {
        spacerHeight,
        spacerHeightMobile,
        spacerHeightTablet,
        spacerDivider,
        spacerDividerStyle,
        spacerDividerColor,
        spacerDividerHeight,
        spacerDividerWidth,
      },
      setAttributes,
    } = this.props;

    // Button size values
    const spacerStyleOptions = [
      {
        value: "bars",
        label: __("Bar", "responsive-block-editor-addons"),
      },
      {
        value: "dots",
        label: __("Dots", "responsive-block-editor-addons"),
      },
      {
        value: "asterisks",
        label: __("Asterisks", "responsive-block-editor-addons"),
      },
      {
        value: "basic",
        label: __("Basic", "responsive-block-editor-addons"),
      },
    ];

    // Divider color
    const dividerColor = [
      { color: "#ddd", name: "white" },
      { color: "#333", name: "black" },
      { color: "#3373dc", name: "royal blue" },
      { color: "#22d25f", name: "green" },
      { color: "#ffdd57", name: "yellow" },
      { color: "#ff3860", name: "pink" },
      { color: "#7941b6", name: "purple" },
    ];

    // Update color values
    const onChangeDividerColor = (value) =>
      setAttributes({ spacerDividerColor: value });

    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody>
              <ResponsiveSpacingControl
                title={"Vertical Margin"}
                attrNameTemplate="spacerHeight%s"
                values={{
                  desktop: spacerHeight,
                  tablet: spacerHeightTablet,
                  mobile: spacerHeightMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
            </PanelBody>
            <PanelBody>
              <SelectControl
                label={__("Divider Style", "responsive-block-editor-addons")}
                value={spacerDividerStyle}
                options={spacerStyleOptions.map(({ value, label }) => ({
                  value,
                  label,
                }))}
                onChange={(value) => {
                  this.props.setAttributes({
                    spacerDividerStyle: value,
                  });
                }}
              />
              <RangeControl
                label={__("Divider Height", "responsive-block-editor-addons")}
                value={spacerDividerHeight || ""}
                onChange={(value) =>
                  this.props.setAttributes({
                    spacerDividerHeight: value,
                  })
                }
                min={1}
                max={100}
              />
              <RangeControl
                label={__("Divider Width", "responsive-block-editor-addons")}
                value={spacerDividerWidth || ""}
                onChange={(value) =>
                  this.props.setAttributes({
                    spacerDividerWidth: value,
                  })
                }
                min={0}
                max={100}
              />
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
            <PanelColorSettings
              title={__("Divider Color", "responsive-block-editor-addons")}
              initialOpen={false}
              colorSettings={[
                {
                  colors: dividerColor,
                  value: spacerDividerColor,
                  onChange: onChangeDividerColor,
                  label: __("Divider Color", "responsive-block-editor-addons"),
                },
              ]}
            ></PanelColorSettings>
          </InspectorTab>
          <InspectorTab key={"advance"}></InspectorTab>
        </InspectorTabs>
      </InspectorControls>
    );
  }
}
