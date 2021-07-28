import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";
import TypographyHelperControl from "../../../settings-components/Typography Settings";
import InspectorTab from "../../../components/InspectorTab"
import InspectorTabs from "../../../components/InspectorTabs"

/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { select } = wp.data;

const { Component, Fragment } = wp.element;

// Import block components
const {
  InspectorControls,
  PanelColorSettings,
  AlignmentToolbar,
  BlockControls,
  InnerBlocks,
} = wp.editor;

// Import Inspector components
const {
  PanelBody,
  RangeControl,
  SelectControl,
  BaseControl,
  ToggleControl,
  TabPanel,
  Dashicon,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
  }

  componentDidMount() {
    // Pushing Style tag for this block css.
    const $style = document.createElement("style");
    $style.setAttribute(
      "id",
      "responsive-block-editor-addons-style-icon-list-" + this.props.clientId
    );
    document.head.appendChild($style);

    this.changeChildAttr(this.props.attributes.hideLabel);
  }

  changeChildAttr(value) {
    const { setAttributes } = this.props;
    const getChildBlocks = select("core/block-editor").getBlocks(
      this.props.clientId
    );

    getChildBlocks.forEach((iconChild, key) => {
      iconChild.attributes.hideLabel = value;
    });
    setAttributes({ hideLabel: value });
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        align,
        icon_count,
        icons,
        gap,
        inner_gap,
        icon_layout,
        iconPosition,
        size,
        hideLabel,
        borderRadius,
        bgSize,
        border,
        fontSize,
        labelFontFamily,
        labelFontWeight,
        labelLineHeight,
        labelFontSize,
        labelFontSizeTablet,
        labelFontSizeMobile,
      },
      setAttributes,
    } = this.props;

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

    const labelClass = hideLabel
      ? "responsive-block-editor-addons-icon-list__no-label"
      : "";

    return (
      <Fragment>
        <InspectorControls key="inspector">
          <InspectorTabs>
            <InspectorTab key={'content'}>
              <PanelBody
                title={__("General", "responsive-block-editor-addons")}
                initialOpen={true}
              >
                <SelectControl
                  label={__("Layout")}
                  value={icon_layout}
                  options={[
                    {
                      value: "horizontal",
                      label: __("Horizontal", "responsive-block-editor-addons"),
                    },
                    {
                      value: "vertical",
                      label: __("Vertical", "responsive-block-editor-addons"),
                    },
                  ]}
                  onChange={(value) => setAttributes({ icon_layout: value })}
                />

                <ToggleControl
                  label={__("Hide Labels", "responsive-block-editor-addons")}
                  checked={hideLabel}
                  onChange={(value) => this.changeChildAttr(value)}
                />
                <hr className="responsive-block-editor-addons-editor__separator" />
                <RangeControl
                  label={__("Gap between Items", "responsive-block-editor-addons")}
                  value={gap}
                  onChange={(value) => setAttributes({ gap: value })}
                  help={__(
                    "Note: For better editing experience, the gap between items might look larger than applied.  Viewing in frontend will show the actual results."
                  )}
                  min={0}
                  max={100}
                />
                {!hideLabel && (
                  <RangeControl
                    label={__("Gap between Icon and Label")}
                    value={inner_gap}
                    onChange={(value) => setAttributes({ inner_gap: value })}
                    min={0}
                    max={100}
                  />
                )}
                <hr className="responsive-block-editor-addons-editor__separator" />
                <SelectControl
                  label={__("Icon Alignment")}
                  value={iconPosition}
                  options={[
                    { value: "top", label: __("Top") },
                    { value: "middle", label: __("Middle") },
                  ]}
                  onChange={(value) => setAttributes({ iconPosition: value })}
                />
                <hr className="responsive-block-editor-addons-editor__separator" />
                <RangeControl
                  label={__("Icon Size", "responsive-block-editor-addons")}
                  value={size}
                  onChange={(value) =>
                    setAttributes({ size: value !== undefined ? value : 16 })
                  }
                  min={0}
                  max={500}
                  allowReset
                />
                <hr className="responsive-block-editor-addons-editor__separator" />
                <RangeControl
                  label={__("Background Size", "responsive-block-editor-addons")}
                  value={bgSize}
                  onChange={(value) => setAttributes({ bgSize: value })}
                  help={__(
                    "Note: Background Size option is useful when one adds background color to the icons."
                  )}
                  min={0}
                  max={500}
                />
                <RangeControl
                  label={__("Border", "responsive-block-editor-addons")}
                  value={border}
                  onChange={(value) => setAttributes({ border: value })}
                  help={__(
                    "Note: Border option is useful when one adds border color to the icons."
                  )}
                  min={0}
                  max={10}
                />
                <RangeControl
                  label={__("Border Radius", "responsive-block-editor-addons")}
                  value={borderRadius}
                  onChange={(value) => setAttributes({ borderRadius: value })}
                  help={__(
                    "Note: Border Radius option is useful when one adds background color to the icons."
                  )}
                  min={0}
                  max={500}
                />
              </PanelBody>
            </InspectorTab>
            <InspectorTab key={'style'}>
              {!hideLabel && (
                <TypographyHelperControl
                  title={__("Label Typography", "responsive-block-editor-addons")}
                  attrNameTemplate="label%s"
                  values={{
                    family: labelFontFamily,
                    size: labelFontSize,
                    sizeMobile: labelFontSizeMobile,
                    sizeTablet: labelFontSizeTablet,
                    weight: labelFontWeight,
                    height: labelLineHeight,
                  }}
                  showLetterSpacing={false}
                  showTextTransform={false}
                  setAttributes={setAttributes}
                  {...this.props}
                />
              )}
            </InspectorTab>
            <InspectorTab key={'advance'}>

            </InspectorTab>
          </InspectorTabs>
        </InspectorControls>
      </Fragment>
    );
  }
}
