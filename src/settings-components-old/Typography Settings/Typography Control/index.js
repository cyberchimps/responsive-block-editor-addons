import {startCase, camelCase} from "lodash";
import {sprintf} from "@wordpress/i18n";

/**
 * Box-Shadow reusable component.
 *
 */
const { __ } = wp.i18n;

const { ColorPalette } = wp.blockEditor;

const { SelectControl, RangeControl, PanelBody } = wp.components;

// Extend component
const { Component, Fragment } = wp.element;

class TypographyControl extends Component {
  constructor() {
    super(...arguments);
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
      const textTransformOptions = [
          {
              value: "",
              label: __("Default", "responsive-block-editor-addons"),
          },
          {
              value: "uppercase",
              label: __("Uppercase", "responsive-block-editor-addons"),
          },
          {
              value: "lowercase",
              label: __("Lowercase", "responsive-block-editor-addons"),
          },
          {
              value: "capitalize",
              label: __("Capitalize", "responsive-block-editor-addons"),
          },
      ];

    var advancedControls;
      advancedControls = (
          <PanelBody
              title={ this.props.title}
              initialOpen={false}
          >
          <Fragment>
              <RangeControl
                  label={__("Font Size", "responsive-block-editor-addons")}
                  value={this.props.fontSize}
                  onChange={ this.props.onChangeFontSize }
                  min={0}
                  max={100}
                  step={1}
              />
              <SelectControl
                  label={__("Font Weight", "responsive-block-editor-addons")}
                  options={fontWeightOptions}
                  value={this.props.fontWeight}
                  onChange={ this.props.onChangeFontWeight }
              />
              <RangeControl
                  label={__("Line Height", "responsive-block-editor-addons")}
                  value={this.props.lineHeight}
                  onChange={ this.props.onChangeLineHeight }
                  min={0}
                  max={100}
                  step={1}
                  allowReset
              />
              { this.props.showLetterSpacing== true && (
                  <RangeControl
                      label={__("Letter Spacing", "responsive-block-editor-addons")}
                      value={ this.props.letterSpacing }
                      onChange={ this.props.onChangeLetterSpacing }
                      min={1}
                      max={10}
                      step={0.1}
                  />
                  )
              }
              { this.props.showTextTransform== true && (
                  <SelectControl
                      label={__("Text Transform", "responsive-block-editor-addons")}
                      options={textTransformOptions}
                      value={this.props.textTransform}
                      onChange={this.props.onChangeTextTransform}
                  />
                  )
              }
    </Fragment>
          </PanelBody>
      );


    return (
      <div className="responsive-block-editor-addons-typography-settings">
        {advancedControls}
      </div>
    );
  }
}

export default TypographyControl;
