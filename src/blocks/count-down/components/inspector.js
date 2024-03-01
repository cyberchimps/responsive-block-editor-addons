/**
 * External dependencies
 */
import moment from "moment";
import DateTime from "react-datetime";
import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";
import BoxShadowControl from "../../../utils/components/box-shadow";
import ResponsiveSpacingControl from "../../../settings-components/ResponsiveSpacingSettings";
import ResponsivePaddingControl from "../../../settings-components/ResponsiveSpacingSettings/ResponsivePaddingControl";
import ResponsiveMarginControl from "../../../settings-components/ResponsiveSpacingSettings/ResponsiveMarginControl";
import ColorBackgroundControl from "../../../settings-components/BlockBackgroundSettings/ColorBackgroundSettings";
import TypographyHelperControl from "../../../settings-components/TypographySettings";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";

// Setup the block
const { __ } = wp.i18n;
const { Fragment, Component } = wp.element;

// Import block components
const { InspectorControls, ColorPalette, AlignmentToolbar } = wp.blockEditor;

// Import Inspector components
const {
  PanelBody,
  BaseControl,
  TextControl,
  ToggleControl,
  SelectControl,
  RangeControl,
  TabPanel,
  Dashicon,
} = wp.components;

export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
  }
  render() {
    const {
      attributes: {
        id,
        date,
        days,
        hours,
        minutes,
        seconds,
        digitDaysLabel,
        digitHoursLabel,
        digitMinutesLabel,
        digitSecondsLabel,
        showDigitLabels,
        showDaysBox,
        showHoursBox,
        showMinutesBox,
        showSecondsBox,
        digitFontFamily,
        digitFontSize,
        digitFontSizeMobile,
        digitFontSizeTablet,
        digitFontWeight,
        digitLetterSpacing,
        digitLineHeight,
        digitColor,
        labelFontFamily,
        labelFontSize,
        labelFontSizeMobile,
        labelFontSizeTablet,
        labelColor,
        labelLineHeight,
        labelFontWeight,
        labelLeftPadding,
        labelLetterSpacing,
        boxItemMarginTop,
        boxItemMarginRight,
        boxItemMarginBottom,
        boxItemMarginLeft,
        boxItemMarginTopTablet,
        boxItemMarginRightTablet,
        boxItemMarginBottomTablet,
        boxItemMarginLeftTablet,
        boxItemMarginTopMobile,
        boxItemMarginRightMobile,
        boxItemMarginBottomMobile,
        boxItemMarginLeftMobile,
        boxItemTextAlign,
        boxHeight,
        boxWidth,
        boxMargin,
        boxHeightMobile,
        boxWidthMobile,
        boxMarginMobile,
        boxHeightTablet,
        boxWidthTablet,
        boxMarginTablet,
        boxTopPadding,
        boxRightPadding,
        boxBottomPadding,
        boxLeftPadding,
        boxTopPaddingMobile,
        boxRightPaddingMobile,
        boxBottomPaddingMobile,
        boxLeftPaddingMobile,
        boxTopPaddingTablet,
        boxRightPaddingTablet,
        boxBottomPaddingTablet,
        boxLeftPaddingTablet,
        boxBorderSize,
        boxBorderStyle,
        boxBorderColor,
        borderRadiusTopLeft,
        borderRadiusTopRight,
        borderRadiusBottomLeft,
        borderRadiusBottomRight,
        boxShadowPosition,
        boxShadowHOffset,
        boxShadowVOffset,
        boxShadowBlur,
        boxShadowSpread,
        backgroundColor,
        boxShadowColor,
        containerTopPadding,
        containerBottomPadding,
        containerLeftPadding,
        containerRightPadding,
        containerTopPaddingTablet,
        containerBottomPaddingTablet,
        containerLeftPaddingTablet,
        containerRightPaddingTablet,
        containerTopPaddingMobile,
        containerBottomPaddingMobile,
        containerLeftPaddingMobile,
        containerRightPaddingMobile,
        containerTopMargin,
        containerBottomMargin,
        containerLeftMargin,
        containerRightMargin,
        containerTopMarginTablet,
        containerBottomMarginTablet,
        containerLeftMarginTablet,
        containerRightMarginTablet,
        containerTopMarginMobile,
        containerBottomMarginMobile,
        containerLeftMarginMobile,
        containerRightMarginMobile,
        justifyItems,
        displayInline,
        stackOnMobile,
        containerPaddingTop,
        containerPaddingBottom,
        containerPaddingLeft,
        containerPaddingRight,
        containerPaddingTopTablet,
        containerPaddingBottomTablet,
        containerPaddingLeftTablet,
        containerPaddingRightTablet,
        containerPaddingTopMobile,
        containerPaddingBottomMobile,
        containerPaddingLeftMobile,
        containerPaddingRightMobile,
        containerMarginTop,
        containerMarginBottom,
        containerMarginLeft,
        containerMarginRight,
        containerMarginTopTablet,
        containerMarginBottomTablet,
        containerMarginLeftTablet,
        containerMarginRightTablet,
        containerMarginTopMobile,
        containerMarginBottomMobile,
        containerMarginLeftMobile,
        containerMarginRightMobile,
        boxPaddingTop,
        boxPaddingBottom,
        boxPaddingLeft,
        boxPaddingRight,
        boxPaddingTopTablet,
        boxPaddingBottomTablet,
        boxPaddingLeftTablet,
        boxPaddingRightTablet,
        boxPaddingTopMobile,
        boxPaddingBottomMobile,
        boxPaddingLeftMobile,
        boxPaddingRightMobile,
        hideWidget,
        hideWidgetTablet,
        hideWidgetMobile,
        z_index,
        z_indexTablet,
        z_indexMobile,
      },
      setAttributes,
    } = this.props;

    let dateDefault = new Date();
    dateDefault.setDate(dateDefault.getDate() + 30);

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

    const onDateTimeChange = (momentObj) => {
      let date = momentObj._d;

      // ignore invalid date
      if (!date) return;

      let time = date.getTime();

      const counter = () => {
        let now = new Date().getTime();
        let currentUtcOffset = moment(date).utcOffset() * 60 * 1000;

        let timer = new Date(time - now - currentUtcOffset);

        if (time < now) {
          setAttributes({ days: "0", hours: "0", minutes: "0", seconds: "0" });
          return;
        }

        // Calculate days, hours, minutes and seconds
        let oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * miliseconds
        let days = Math.floor((time - now) / oneDay).toString();
        let hours = timer.getHours().toString();
        let minutes = timer.getMinutes().toString();
        let seconds = timer.getSeconds().toString();

        setAttributes({ date, days, hours, minutes, seconds });
      };

      // Clear interval if countdown already exists
      if (window[id]) {
        clearInterval(window[id]);
      }

      if (id) {
        window[id] = setInterval(counter, 1000);
      }
    };

    const yesterday = moment().subtract(1, "day");

    const valid = (current) => current.isAfter(yesterday);

    return (
      <InspectorControls key="controls">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody
              title={__("Countdown", "responsive-block-editor-addons")}
              initialOpen={true}
            >
              <BaseControl
                id="responsive-block-editor-addons-countdown-due-date"
                label={__("Due Date", "responsive-block-editor-addons")}
              >
                <DateTime
                  value={date}
                  dateFormat="YYYY-MM-DD-A"
                  timeFormat="h:mm A"
                  onChange={(momentObj) => onDateTimeChange(momentObj)}
                  isValidDate={valid}
                  initialValue={dateDefault}
                />
              </BaseControl>
            </PanelBody>

            <PanelBody
              title={__("Display", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <BaseControl>
                <BaseControl.VisualLabel>
                  {__("Text Alignment", "responsive-block-editor-addons")}
                </BaseControl.VisualLabel>
                <br></br>
                <br></br>
                <AlignmentToolbar
                  value={boxItemTextAlign}
                  onChange={(value) =>
                    setAttributes({
                      boxItemTextAlign: value,
                    })
                  }
                  controls={["left", "center", "right"]}
                  isCollapsed={false}
                />
              </BaseControl>
              <ToggleControl
                label={__("Inline", "responsive-block-editor-addons")}
                checked={displayInline}
                onChange={() =>
                  setAttributes({ displayInline: !displayInline })
                }
              />
              <ToggleControl
                label={__("Stack on Mobile", "responsive-block-editor-addons")}
                checked={stackOnMobile}
                onChange={() =>
                  setAttributes({ stackOnMobile: !stackOnMobile })
                }
              />
              <ToggleControl
                label={__("Labels", "responsive-block-editor-addons")}
                checked={showDigitLabels}
                onChange={() =>
                  setAttributes({ showDigitLabels: !showDigitLabels })
                }
              />

              <ToggleControl
                label={__("Days", "responsive-block-editor-addons")}
                checked={showDaysBox}
                onChange={() => setAttributes({ showDaysBox: !showDaysBox })}
              />

              <ToggleControl
                label={__("Hours", "responsive-block-editor-addons")}
                checked={showHoursBox}
                onChange={() => setAttributes({ showHoursBox: !showHoursBox })}
              />

              <ToggleControl
                label={__("Minutes", "responsive-block-editor-addons")}
                checked={showMinutesBox}
                onChange={() =>
                  setAttributes({ showMinutesBox: !showMinutesBox })
                }
              />

              <ToggleControl
                label={__("Seconds", "responsive-block-editor-addons")}
                checked={showSecondsBox}
                onChange={() =>
                  setAttributes({ showSecondsBox: !showSecondsBox })
                }
              />
            </PanelBody>

            <PanelBody
              title={__("Custom Labels", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <TextControl
                label={__("Days", "responsive-block-editor-addons")}
                value={digitDaysLabel}
                onChange={(newValue) =>
                  setAttributes({ digitDaysLabel: newValue })
                }
              />
              <TextControl
                label={__("Hours", "responsive-block-editor-addons")}
                value={digitHoursLabel}
                onChange={(newValue) =>
                  setAttributes({ digitHoursLabel: newValue })
                }
              />
              <TextControl
                label={__("Minutes", "responsive-block-editor-addons")}
                value={digitMinutesLabel}
                onChange={(newValue) =>
                  setAttributes({ digitMinutesLabel: newValue })
                }
              />
              <TextControl
                label={__("Seconds", "responsive-block-editor-addons")}
                value={digitSecondsLabel}
                onChange={(newValue) =>
                  setAttributes({ digitSecondsLabel: newValue })
                }
              />
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
            <PanelBody
              title={__("Box Style", "responsive-block-editor-addons")}
              initialOpen={false}
            >
             <ResponsiveSpacingControl
                title={"Box Spacing"}
                attrNameTemplate="boxMargin%s"
                values = {{desktop:boxMargin, tablet:boxMarginTablet, mobile:boxMarginMobile}}
                setAttributes={ setAttributes }
                {...this.props}
              />
              {displayInline && showDigitLabels && (
                <RangeControl
                  label={__(
                    "Space Between Digit and Label",
                    "responsive-block-editor-addons"
                  )}
                  value={labelLeftPadding}
                  onChange={(value) =>
                    setAttributes({ labelLeftPadding: value })
                  }
                  min={0}
                  max={100}
                />
              )}
              <ResponsivePaddingControl
                attrNameTemplate="box%s"
                values={{
                  desktopTop: boxTopPadding === 0 && boxPaddingTop !== 999 ?  boxPaddingTop : boxTopPadding,
                  desktopBottom: boxBottomPadding == 10 && boxPaddingBottom !== 999 ? boxPaddingBottom : boxBottomPadding,
                  desktopLeft: boxLeftPadding == 0 && boxPaddingLeft !== 999 ? boxPaddingLeft : boxLeftPadding,
                  desktopRight: boxRightPadding == 0 && boxPaddingRight !== 999 ? boxPaddingRight : boxRightPadding,

                  tabletTop: boxTopPaddingTablet === '' && boxPaddingTopTablet !== 999 ? boxPaddingTopTablet : boxTopPaddingTablet,
                  tabletBottom: boxBottomPaddingTablet === '' && boxPaddingBottomTablet !== 999 ? boxPaddingBottomTablet : boxBottomPaddingTablet,
                  tabletLeft: boxLeftPaddingTablet === '' && boxPaddingLeftTablet !== 999 ?  boxPaddingLeftTablet : boxLeftPaddingTablet,
                  tabletRight: boxRightPaddingTablet === '' && boxPaddingRightTablet !== 999 ?  boxPaddingRightTablet : boxRightPaddingTablet,

                  mobileTop: boxTopPaddingMobile === '' && boxPaddingTopMobile !== 999 ? boxPaddingTopMobile : boxTopPaddingMobile,
                  mobileBottom: boxBottomPaddingMobile === '' && boxPaddingTopMobile !== 999 ? boxPaddingBottomMobile : boxBottomPaddingMobile,
                  mobileLeft: boxLeftPaddingMobile === '' && boxPaddingLeftMobile !== 999 ? boxPaddingLeftMobile : boxLeftPaddingMobile,
                  mobileRight: boxRightPaddingMobile === '' && boxPaddingRightMobile !== 999 ? boxPaddingRightMobile : boxRightPaddingMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <PanelBody
                title={__("Border", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <SelectControl
                  label={__("Border Style", "responsive-block-editor-addons")}
                  value={boxBorderStyle}
                  onChange={(value) => setAttributes({ boxBorderStyle: value })}
                  options={[
                    {
                      value: "none",
                      label: __("None", "responsive-block-editor-addons"),
                    },
                    {
                      value: "solid",
                      label: __("Solid", "responsive-block-editor-addons"),
                    },
                    {
                      value: "dotted",
                      label: __("Dotted", "responsive-block-editor-addons"),
                    },
                    {
                      value: "dashed",
                      label: __("Dashed", "responsive-block-editor-addons"),
                    },
                    {
                      value: "double",
                      label: __("Double", "responsive-block-editor-addons"),
                    },
                    {
                      value: "groove",
                      label: __("Groove", "responsive-block-editor-addons"),
                    },
                    {
                      value: "inset",
                      label: __("Inset", "responsive-block-editor-addons"),
                    },
                    {
                      value: "outset",
                      label: __("Outset", "responsive-block-editor-addons"),
                    },
                    {
                      value: "ridge",
                      label: __("Ridge", "responsive-block-editor-addons"),
                    },
                  ]}
                />
                {"none" != boxBorderStyle && (
                  <Fragment>
                    <RangeControl
                      label={__(
                        "Border Width",
                        "responsive-block-editor-addons"
                      )}
                      value={boxBorderSize}
                      onChange={(value) =>
                        setAttributes({
                          boxBorderSize: value !== undefined ? value : 1,
                        })
                      }
                      min={0}
                      max={150}
                      allowReset
                    />
                    <RangeControl
                      label={__(
                        "Border Radius Top Left",
                        "responsive-block-editor-addons"
                      )}
                      value={borderRadiusTopLeft}
                      onChange={(value) => {
                        setAttributes({ borderRadiusTopLeft: value });
                      }}
                      min={0}
                      max={100}
                    />
                    <RangeControl
                      label={__(
                        "Border Radius Top Right",
                        "responsive-block-editor-addons"
                      )}
                      value={borderRadiusTopRight}
                      onChange={(value) => {
                        setAttributes({ borderRadiusTopRight: value });
                      }}
                      min={0}
                      max={100}
                    />
                    <RangeControl
                      label={__(
                        "Border Radius Bottom Right",
                        "responsive-block-editor-addons"
                      )}
                      value={borderRadiusBottomRight}
                      onChange={(value) => {
                        setAttributes({ borderRadiusBottomRight: value });
                      }}
                      min={0}
                      max={100}
                    />
                    <RangeControl
                      label={__(
                        "Border Radius Bottom Left",
                        "responsive-block-editor-addons"
                      )}
                      value={borderRadiusBottomLeft}
                      onChange={(value) => {
                        setAttributes({ borderRadiusBottomLeft: value });
                      }}
                      min={0}
                      max={100}
                    />
                  </Fragment>
                )}
                {"none" != boxBorderStyle && (
                  <Fragment>
                    <p className="responsive-block-editor-addons-setting-label">
                      {__("Color", "responsive-block-editor-addons")}
                      <span className="components-base-control__label">
                        <span
                          className="component-color-indicator"
                          style={{ backgroundColor: boxBorderColor }}
                        ></span>
                      </span>
                    </p>
                    <ColorPalette
                      value={boxBorderColor}
                      onChange={(colorValue) =>
                        setAttributes({ boxBorderColor: colorValue })
                      }
                      allowReset
                    />
                  </Fragment>
                )}
              </PanelBody>
              <PanelBody
                title={__("Box Shadow", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <BoxShadowControl
                  setAttributes={setAttributes}
                  label={__("Box Shadow", "responsive-block-editor-addons")}
                  boxShadowColor={{ value: boxShadowColor, label: __("Color", "responsive-block-editor-addons") }}
                  boxShadowHOffset={{
                    value: boxShadowHOffset,
                    label: __("Horizontal", "responsive-block-editor-addons"),
                  }}
                  boxShadowVOffset={{
                    value: boxShadowVOffset,
                    label: __("Vertical", "responsive-block-editor-addons"),
                  }}
                  boxShadowBlur={{ value: boxShadowBlur, label: __("Blur", "responsive-block-editor-addons") }}
                  boxShadowSpread={{
                    value: boxShadowSpread,
                    label: __("Spread", "responsive-block-editor-addons"),
                  }}
                  boxShadowPosition={{
                    value: boxShadowPosition,
                    label: __("Position", "responsive-block-editor-addons"),
                  }}
                />
              </PanelBody>
              <ColorBackgroundControl {...this.props} />
              <p className="responsive-block-editor-addons-setting-label">
                    {__("Digit Color", "responsive-block-editor-addons")}
                    <span className="components-base-control__label">
                      <span
                        className="component-color-indicator"
                        style={{ backgroundColor: digitColor }}
                      ></span>
                    </span>
                  </p>
                  <ColorPalette
                    value={digitColor}
                    onChange={(colorValue) =>
                      setAttributes({ digitColor: colorValue })
                    }
                    allowReset
                  />
                <p className="responsive-block-editor-addons-setting-label">
                  {__("Label Color", "responsive-block-editor-addons")}
                  <span className="components-base-control__label">
                    <span
                      className="component-color-indicator"
                      style={{ backgroundColor: labelColor }}
                    ></span>
                  </span>
                </p>
                <ColorPalette
                  value={labelColor}
                  onChange={(colorValue) =>
                    setAttributes({ labelColor: colorValue })
                  }
                  allowReset
                />
            </PanelBody>
            <PanelBody
              title={__("Container Spacing", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <PanelBody
                title={__("Padding", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <ResponsivePaddingControl
                  attrNameTemplate="container%s"
                  values={{
                    desktopTop: containerTopPadding,
                    desktopBottom: containerBottomPadding,
                    desktopLeft: containerLeftPadding,
                    desktopRight: containerRightPadding,

                    tabletTop: containerTopPaddingTablet,
                    tabletBottom: containerBottomPaddingTablet,
                    tabletLeft: containerLeftPaddingTablet,
                    tabletRight: containerRightPaddingTablet,

                    mobileTop: containerTopPaddingMobile,
                    mobileBottom: containerBottomPaddingMobile,
                    mobileLeft: containerLeftPaddingMobile,
                    mobileRight: containerRightPaddingMobile,
                  }}
                  setAttributes={setAttributes}
                  {...this.props}
                />
              </PanelBody>
              <PanelBody
                title={__("Margin", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <ResponsiveMarginControl
                  attrNameTemplate="container%s"
                  values={{
                    desktopTop: containerTopMargin,
                    desktopBottom: containerBottomMargin,
                    desktopLeft: containerLeftMargin,
                    desktopRight: containerRightMargin,

                    tabletTop: containerTopMarginTablet,
                    tabletBottom: containerBottomMarginTablet,
                    tabletLeft: containerLeftMarginTablet,
                    tabletRight: containerRightMarginTablet,

                    mobileTop: containerTopMarginMobile,
                    mobileBottom: containerBottomMarginMobile,
                    mobileLeft: containerLeftMarginMobile,
                    mobileRight: containerRightMarginMobile,
                  }}
                  setAttributes={setAttributes}
                  {...this.props}
                />
              </PanelBody>
            </PanelBody>
            <PanelBody
              title={__("Typography", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <TypographyHelperControl
                title={__("Digit Typography", "responsive-block-editor-addons")}
                attrNameTemplate="digit%s"
                values = {{
                family: digitFontFamily,
                size: digitFontSize,
                sizeMobile: digitFontSizeMobile,
                sizeTablet: digitFontSizeTablet,
                weight: digitFontWeight,
                height: digitLineHeight,
                spacing: digitLetterSpacing
                }}
                showLetterSpacing = { true }
                showTextTransform = { false }
                setAttributes={ setAttributes }
                {...this.props}
              />
              <TypographyHelperControl
                title={__("Label Typography", "responsive-block-editor-addons")}
                attrNameTemplate="label%s"
                values = {{
                family: labelFontFamily,
                size: labelFontSize,
                sizeMobile: labelFontSizeMobile,
                sizeTablet: labelFontSizeTablet,
                weight: labelFontWeight,
                height: labelLineHeight,
                spacing: labelLetterSpacing
                }}
                showLetterSpacing = { true }
                showTextTransform = { false }
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
    );
  }
}
