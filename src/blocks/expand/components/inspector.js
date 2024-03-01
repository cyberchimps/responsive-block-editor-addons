import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import ResponsiveSpacingControl from "../../../settings-components/ResponsiveSpacingSettings";
import TypographyHelperControl from "../../../settings-components/TypographySettings";

/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

// Import block components
const { InspectorControls, PanelColorSettings } = wp.blockEditor;

// Import Inspector components
const { PanelBody, RangeControl, SelectControl, ToggleControl, TabPanel, Dashicon } = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
  }

	render() {
		// Setup the attributes
		const {
			attributes: {
				showTitle,
				linkSpace,
				textSpace,
				titleSpace,
				linkSpaceMobile,
				textSpaceMobile,
				titleSpaceMobile,
				linkSpaceTablet,
				textSpaceTablet,
				titleSpaceTablet,
				titleFontFamily,
				titleFontSize,
				titleFontWeight,
				titleLineHeight,
				textFontFamily,
				textFontSize,
				textFontWeight,
				textLineHeight,
				linkFontFamily,
				linkFontSize,
				linkFontWeight,
				linkLineHeight,
				textColor,
				linkColor,
				titleColor,
				titleFontSizeMobile,
				titleFontSizeTablet,
				textFontSizeMobile,
				textFontSizeTablet,
				linkFontSizeMobile,
				linkFontSizeTablet,
        hideWidget,
        hideWidgetTablet,
        hideWidgetMobile,
        z_index,
        z_indexMobile,
        z_indexTablet,
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
    const onChangeTextColor = (value) => setAttributes({ textColor: value });
    const onChangeLinkColor = (value) => setAttributes({ linkColor: value });
    const onChangeTitleColor = (value) => setAttributes({ titleColor: value });

    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody
              title={__("General", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ToggleControl
                label={__("Title", "responsive-block-editor-addons")}
                checked={showTitle}
                onChange={() =>
                  this.props.setAttributes({
                    showTitle: !showTitle,
                  })
                }
              />
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
		  	<PanelBody
				title={__("Typography", "responsive-block-editor-addons")}
				initialOpen={false}
			>
				{showTitle && (
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
						}}
						showLetterSpacing = { false }
						showTextTransform = { false }
						setAttributes={ setAttributes }
						{...this.props}            
					/>
				)}
				<TypographyHelperControl
					title={__("Text Typography", "responsive-block-editor-addons")} 
					attrNameTemplate="text%s"
					values = {{
						family: textFontFamily, 
						size: textFontSize, 
						sizeMobile: textFontSizeMobile, 
						sizeTablet: textFontSizeTablet, 
						weight: textFontWeight, 
						height: textLineHeight,
					}}
					showLetterSpacing = { false }
					showTextTransform = { false }
					setAttributes={ setAttributes }
					{...this.props}            
				/>
				<TypographyHelperControl
					title={__("Link Typography", "responsive-block-editor-addons")} 
					attrNameTemplate="link%s"
					values = {{
						family: linkFontFamily, 
						size: linkFontSize, 
						sizeMobile: linkFontSizeMobile, 
						sizeTablet: linkFontSizeTablet, 
						weight: linkFontWeight, 
						height: linkLineHeight,
					}}
					showLetterSpacing = { false }
					showTextTransform = { false }
					setAttributes={ setAttributes }
					{...this.props}            
				/>
			</PanelBody>
            <PanelBody
              title={__("Spacing", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ResponsiveSpacingControl
                title={"Title - Margin Bottom"}
                attrNameTemplate="titleSpace%s"
                values={{
                  desktop: titleSpace,
                  tablet: titleSpaceTablet,
                  mobile: titleSpaceMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Text - Margin Bottom"}
                attrNameTemplate="textSpace%s"
                values={{
                  desktop: textSpace,
                  tablet: textSpaceTablet,
                  mobile: textSpaceMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Link - Margin Bottom"}
                attrNameTemplate="linkSpace%s"
                values={{
                  desktop: linkSpace,
                  tablet: linkSpaceTablet,
                  mobile: linkSpaceMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
            </PanelBody>
            <PanelColorSettings
              title={__("Color Setting", "responsive-block-editor-addons")}
              initialOpen={false}
              colorSettings={[
                {
                  value: textColor,
                  onChange: onChangeTextColor,
                  label: __("Text Color", "responsive-block-editor-addons"),
                },
                {
                  value: linkColor,
                  onChange: onChangeLinkColor,
                  label: __("Link Color", "responsive-block-editor-addons"),
                },
                {
                  value: titleColor,
                  onChange: onChangeTitleColor,
                  label: __("Title Color", "responsive-block-editor-addons"),
                },
              ]}
            ></PanelColorSettings>
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
    );
  }
}
