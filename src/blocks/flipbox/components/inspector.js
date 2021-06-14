/**
 * Inspector Controls
 */
import classnames from "classnames";
import times from "lodash/times";
import BoxShadowControl from "../../../utils/components/box-shadow";
import ResponsiveBlocksIcon from "../../../ResponsiveBlocksIcon.json";
import renderSVG from "../../../renderIcon";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { MediaUpload } = wp.blockEditor;

// Import block components
const { InspectorControls, PanelColorSettings, ColorPalette } = wp.editor;


let svg_icons = Object.keys(ResponsiveBlocksIcon);

// Import Inspector components
const {
  PanelBody,
  RangeControl,
  TextControl,
  ButtonGroup,
  Button,
  Dashicon,
  SelectControl,
  ToggleControl,
  BaseControl,
  TabPanel,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
    this.onRemoveImage = this.onRemoveImage.bind(this);
    this.onSelectImage = this.onSelectImage.bind(this);
    this.onRemoveBackImage = this.onRemoveBackImage.bind(this);
    this.onSelectBackImage = this.onSelectBackImage.bind(this);
  }
  /*
   * Event to set Image as null while removing.
   */
  onRemoveImage() {
    const { setAttributes } = this.props;

    setAttributes({ backgroundImage: null });
  }

  /*
   * Event to set Image as while adding.
   */
  onSelectImage(media) {
    const { setAttributes } = this.props;
    const { backgroundImage } = this.props.attributes;

    if (!media || !media.url) {
      setAttributes({ backgroundImage: null });
      return;
    }

    if (!media.type || "image" != media.type) {
      return;
    }

    setAttributes({ backgroundImage: media.url });
  }
  /*
   * Event to set Image as null while removing.
   */
  onRemoveBackImage() {
    const { setAttributes } = this.props;

    setAttributes({ backBackgroundImage: null });
  }

  /*
   * Event to set Image as while adding.
   */
  onSelectBackImage(media) {
    const { setAttributes } = this.props;
    const { backBackgroundImage } = this.props.attributes;

    if (!media || !media.url) {
      setAttributes({ backBackgroundImage: null });
      return;
    }

    if (!media.type || "image" != media.type) {
      return;
    }

    setAttributes({ backBackgroundImage: media.url });
  }

  render() {
    // Background Type Options
    const backgroundTypeOptions = [
      { value: "none", label: __("None", "responsive-block-editor-addons") },
      { value: "color", label: __("Color", "responsive-block-editor-addons") },
      {
        value: "gradient",
        label: __("Gradient", "responsive-block-editor-addons"),
      },
      { value: "image", label: __("Image", "responsive-block-editor-addons") },
    ];

    // Background Type Options
    const buttonbackgroundTypeOptions = [
      { value: "none", label: __("None", "responsive-block-editor-addons") },
      { value: "color", label: __("Color", "responsive-block-editor-addons") },
      {
        value: "gradient",
        label: __("Gradient", "responsive-block-editor-addons"),
      },
    ];

    // Flip Style Options
    const flipStyleOptions = [
      {
        value: "LTR",
        label: __("Left To Right", "responsive-block-editor-addons"),
      },
      {
        value: "BTT",
        label: __("Bottom To Top", "responsive-block-editor-addons"),
      },
      {
        value: "RTL",
        label: __("Right To Left", "responsive-block-editor-addons"),
      },
      {
        value: "TTB",
        label: __("Top To Bottom", "responsive-block-editor-addons"),
      },
    ];

    // Setup the attributes
    const {
      attributes: {
        count,
        flipboxArray,
        frontTextColor,
        frontBackgroundColor,
        transitionSpeed,
        colorButtonSelected,
        backTextColor,
        backBackgroundColor,
        iconSize,
        iconColor,
        flipStyleSelected,
        borderStyle,
        borderWidth,
        borderRadius,
        borderColor,
        boxShadowColor,
        boxShadowHOffset,
        boxShadowVOffset,
        boxShadowBlur,
        boxShadowSpread,
        boxShadowPosition,
        height,
        topMargin,
        bottomMargin,
        topPadding,
        bottomPadding,
        leftPadding,
        rightPadding,
        backtopPadding,
        backbottomPadding,
        backleftPadding,
        backrightPadding,
        backIconColor,
        backIconSize,
        showFrontIcon,
        showFrontTitle,
        showFrontSubtitle,
        showBackIcon,
        showBackTitle,
        showBackSubtitle,
        showBackButton,
        backgroundType,
        backgroundImage,
        colorOpacity,
        backBackgroundImage,
        backColorOpacity,
        buttonTextColor,
        buttonColor,
        buttonBorderRadius,
        buttonHpadding,
        buttonVpadding,
        blockAlign,
        buttonHTextColor,
        buttonHColor,
        buttonbackgroundType,
        buttongradientDirection,
        buttoncolorLocation1,
        buttoncolorLocation2,
        buttonbackgroundColor1,
        buttonbackgroundColor2,
        buttonHbackgroundType,
        buttonHgradientDirection,
        buttonHcolorLocation1,
        buttonHcolorLocation2,
        buttonHbackgroundColor1,
        buttonHbackgroundColor2,
        buttonopacity,
        buttonHopacity,
      },
      setAttributes,
    } = this.props;
    var data_copy = [...flipboxArray];

    // Update color value
    const onChangeFrontTextColor = (value) =>
      setAttributes({ frontTextColor: value });
    const onChangeFrontBackgroundColor = (value) =>
      setAttributes({ frontBackgroundColor: value });
    const onChangeBackTextColor = (value) =>
      setAttributes({ backTextColor: value });
    const onChangeBackBackgroundColor = (value) =>
      setAttributes({ backBackgroundColor: value });

    let frontColorButtonClass = "is-primary";
    let backColorButtonClass = "is-default";
    let isFrontSelected;
    let isBackSelected;
    if (colorButtonSelected == "back_selected") {
      frontColorButtonClass = "is-default";
      backColorButtonClass = "is-primary";
      isBackSelected = true;
    } else {
      frontColorButtonClass = "is-primary";
      backColorButtonClass = "is-default";
      isFrontSelected = true;
    }

    const frontControls = (index) => {
      return (
        <PanelBody
          key={index}
          title={
            __("Flip Box ", "responsive-block-editor-addons") +
            " " +
            (index + 1) +
            " " +
            __("Settings")
          }
          initialOpen={false}
          className={"rbea-repeater-panel"}
        >
          <TextControl
            label={__("Title", "responsive-block-editor-addons")}
            type="text"
            value={flipboxArray[index]["title"]}
            onChange={(value) => {
              var new_content = {
                title: value,
                subtitle: data_copy[index]["subtitle"],
                back_title: data_copy[index]["back_title"],
                back_subtitle: data_copy[index]["back_subtitle"],
                icon: data_copy[index]["icon"],
                back_icon: data_copy[index]["back_icon"],
                back_button: data_copy[index]["back_button"],
                back_buttonURL: data_copy[index]["back_buttonURL"],
              };
              data_copy[index] = new_content;
              setAttributes({ flipboxArray: data_copy });
            }}
          />
          <TextControl
            label={__("Content", "responsive-block-editor-addons")}
            type="text"
            value={flipboxArray[index]["subtitle"]}
            onChange={(value) => {
              var new_content = {
                title: data_copy[index]["title"],
                subtitle: value,
                back_title: data_copy[index]["back_title"],
                back_subtitle: data_copy[index]["back_subtitle"],
                icon: data_copy[index]["icon"],
                back_icon: data_copy[index]["back_icon"],
                back_button: data_copy[index]["back_button"],
                back_buttonURL: data_copy[index]["back_buttonURL"],
              };
              data_copy[index] = new_content;
              setAttributes({ flipboxArray: data_copy });
            }}
          />
        </PanelBody>
      );
    };
    const frontIconControls = (index) => {
      const icons = svg_icons;
      return (
        <PanelBody
          key={index}
          title={
            __("Flip Box ", "responsive-block-editor-addons") +
            " " +
            (index + 1)
          }
          initialOpen={false}
          className={"rbea-repeater-panel"}
        >
          <p>
            {__("Select Icon", "responsive-block-editor-addons")}
            <span className="components-base-control__label"></span>
          </p>
              <FontIconPicker
              icons={svg_icons}
              renderFunc={renderSVG}
              theme="default"
              value={flipboxArray[index]["icon"]}
              onChange={(value) =>{ 
                var new_content = {
                  icon: value,
                  back_icon: data_copy[index]["back_icon"],
                  back_button: data_copy[index]["back_button"],
                  back_buttonURL: data_copy[index]["back_buttonURL"],
                  title: data_copy[index]["title"],
                  subtitle: data_copy[index]["subtitle"],
                  back_title: data_copy[index]["back_title"],
                  back_subtitle: data_copy[index]["back_subtitle"],
                };
                data_copy[index] = new_content
                setAttributes({ flipboxArray: data_copy }) 
              }}
              isMulti={false}
              noSelectedPlaceholder={__("Select Icon")}
              />
        </PanelBody>
      );
    };
    const backIconControls = (index) => {
      const icons = svg_icons;

      return (
        <PanelBody
          key={index}
          title={
            __("Flip Box ", "responsive-block-editor-addons") +
            " " +
            (index + 1)
          }
          initialOpen={false}
          className={"rbea-repeater-panel"}
        >
          <p>
            {__("Select Icon", "responsive-block-editor-addons")}
            <span className="components-base-control__label"></span>
          </p>
          <FontIconPicker
              icons={svg_icons}
              renderFunc={renderSVG}
              theme="default"
              value={flipboxArray[index]["back_icon"]}
              onChange={(value) =>{ 
                var new_content = {
                  icon: data_copy[index]["icon"],
                  back_icon: value,
                  back_button: data_copy[index]["back_button"],
                  back_buttonURL: data_copy[index]["back_buttonURL"],
                  title: data_copy[index]["title"],
                  subtitle: data_copy[index]["subtitle"],
                  back_title: data_copy[index]["back_title"],
                  back_subtitle: data_copy[index]["back_subtitle"],
                };
                data_copy[index] = new_content
                setAttributes({ flipboxArray: data_copy }) 
              }}
              isMulti={false}
              noSelectedPlaceholder={__("Select Icon")}
              />
        </PanelBody>
      );
    };

    const backControls = (index) => {
      return (
        <PanelBody
          key={index}
          title={
            __("Flip Box ", "responsive-block-editor-addons") +
            " " +
            (index + 1) +
            " " +
            __("Settings", "responsive-block-editor-addons")
          }
          initialOpen={false}
          className={"rbea-repeater-panel"}
        >
          <TextControl
            label={__("Title", "responsive-block-editor-addons")}
            type="text"
            value={flipboxArray[index]["back_title"]}
            onChange={(value) => {
              var new_content = {
                title: data_copy[index]["title"],
                subtitle: data_copy[index]["subtitle"],
                back_title: value,
                back_subtitle: data_copy[index]["back_subtitle"],
                icon: data_copy[index]["icon"],
                back_icon: data_copy[index]["back_icon"],
                back_button: data_copy[index]["back_button"],
                back_buttonURL: data_copy[index]["back_buttonURL"],
              };
              data_copy[index] = new_content;
              setAttributes({ flipboxArray: data_copy });
            }}
          />
          <TextControl
            label={__("Content", "responsive-block-editor-addons")}
            type="text"
            value={flipboxArray[index]["back_subtitle"]}
            onChange={(value) => {
              var new_content = {
                title: data_copy[index]["title"],
                subtitle: data_copy[index]["subtitle"],
                back_title: data_copy[index]["back_title"],
                back_subtitle: value,
                icon: data_copy[index]["icon"],
                back_icon: data_copy[index]["back_icon"],
                back_button: data_copy[index]["back_button"],
                back_buttonURL: data_copy[index]["back_buttonURL"],
              };
              data_copy[index] = new_content;
              setAttributes({ flipboxArray: data_copy });
            }}
          />
        </PanelBody>
      );
    };

    return (
      <InspectorControls key="inspector">
        <PanelBody
          title={__("General", "responsive-block-editor-addons")}
          initialOpen={false}
        >
          <RangeControl
            label={__("Number of Flip Boxes", "responsive-block-editor-addons")}
            value={count}
            onChange={(newCount) => {
              let cloneTest_block = [...flipboxArray];
              if (cloneTest_block.length < newCount) {
                const incAmount = Math.abs(newCount - cloneTest_block.length);

                {
                  times(incAmount, (n) => {
                    cloneTest_block.push({
                      title: "Front Title " + newCount,
                      back_title: "Back Title " + newCount,
                      subtitle: "Front Subtitle " + newCount,
                      back_subtitle: "Back Subtitle " + newCount,
                      back_Button: "Button " + newCount,
                      icon: "shield",
                      back_icon: "shield",
                    });
                  });
                }
                setAttributes({ flipboxArray: cloneTest_block });
              } else {
                const incAmount = Math.abs(newCount - cloneTest_block.length);
                let data_new = cloneTest_block;
                for (var i = 0; i < incAmount; i++) {
                  data_new.pop();
                }
                setAttributes({ flipboxArray: data_new });
              }
              setAttributes({ count: newCount });
            }}
            min={1}
            max={4}
            step={1}
          />
          <RangeControl
            label={__("Height", "responsive-block-editor-addons")}
            value={height}
            onChange={(value) =>
              setAttributes({ height: value !== undefined ? value : 420 })
            }
            min={300}
            max={1000}
            allowReset
          />
          <SelectControl
            label={__("Flip Style", "responsive-block-editor-addons")}
            options={flipStyleOptions}
            value={flipStyleSelected}
            onChange={(value) =>
              this.props.setAttributes({
                flipStyleSelected: value,
              })
            }
          />

          <RangeControl
            label={__(
              "Transition Speed (ms)",
              "responsive-block-editor-addons"
            )}
            value={transitionSpeed}
            onChange={(value) =>
              setAttributes({
                transitionSpeed: value !== undefined ? value : 8,
              })
            }
            min={0}
            max={20}
            allowReset
          />
        </PanelBody>

        <ButtonGroup
          className="flipbox_buttongroup"
          text={__("Selected Site", "responsive-block-editor-addons")}
        >
          <Button
            className={classnames("flipbox_button", frontColorButtonClass)}
            onClick={() =>
              setAttributes({ colorButtonSelected: "front_selected" })
            }
          >
            {__("Front", "responsive-block-editor-addons")}
          </Button>
          <Button
            className={classnames("flipbox_button", backColorButtonClass)}
            onClick={() =>
              setAttributes({ colorButtonSelected: "back_selected" })
            }
          >
            {__("Back", "responsive-block-editor-addons")}
          </Button>
        </ButtonGroup>
        <PanelBody initialOpen={true}>
          {isFrontSelected && (
            <Fragment>
              <ToggleControl
                label={__("Front Icon", "responsive-block-editor-addons")}
                checked={showFrontIcon}
                onChange={() =>
                  this.props.setAttributes({
                    showFrontIcon: !showFrontIcon,
                  })
                }
              />
              <ToggleControl
                label={__("Front Title", "responsive-block-editor-addons")}
                checked={showFrontTitle}
                onChange={() =>
                  this.props.setAttributes({
                    showFrontTitle: !showFrontTitle,
                  })
                }
              />
              <ToggleControl
                label={__("Front Subtitle", "responsive-block-editor-addons")}
                checked={showFrontSubtitle}
                onChange={() =>
                  this.props.setAttributes({
                    showFrontSubtitle: !showFrontSubtitle,
                  })
                }
              />
            </Fragment>
          )}
          {isBackSelected && (
            <Fragment>
              <ToggleControl
                label={__("Back Icon", "responsive-block-editor-addons")}
                checked={showBackIcon}
                onChange={() =>
                  this.props.setAttributes({
                    showBackIcon: !showBackIcon,
                  })
                }
              />
              <ToggleControl
                label={__("Back Title", "responsive-block-editor-addons")}
                checked={showBackTitle}
                onChange={() =>
                  this.props.setAttributes({
                    showBackTitle: !showBackTitle,
                  })
                }
              />
              <ToggleControl
                label={__("Back Subtitle", "responsive-block-editor-addons")}
                checked={showBackSubtitle}
                onChange={() =>
                  this.props.setAttributes({
                    showBackSubtitle: !showBackSubtitle,
                  })
                }
              />
              <ToggleControl
                label={__("Back Button", "responsive-block-editor-addons")}
                checked={showBackButton}
                onChange={() =>
                  this.props.setAttributes({
                    showBackButton: !showBackButton,
                  })
                }
              />
            </Fragment>
          )}
        </PanelBody>
        {isFrontSelected && (
          <PanelBody
            title={__(
              "Front Content Settings",
              "responsive-block-editor-addons"
            )}
            initialOpen={false}
          >
            {times(count, (n) => frontControls(n))}
          </PanelBody>
        )}
        {isBackSelected && (
          <PanelBody
            title={__(
              "Back Content Settings",
              "responsive-block-editor-addons"
            )}
            initialOpen={false}
          >
            {times(count, (n) => backControls(n))}
          </PanelBody>
        )}
        {isFrontSelected && (
          <PanelBody
            title={__("Front Icon Settings", "responsive-block-editor-addons")}
            initialOpen={false}
          >
            {times(count, (n) => frontIconControls(n))}

            <RangeControl
              label={__("Icon Size", "responsive-block-editor-addons")}
              value={iconSize}
              onChange={(value) =>
                setAttributes({ iconSize: value !== undefined ? value : 50 })
              }
              min={20}
              max={200}
              allowReset
            />

            <p>
              {__("Icon Color", "responsive-block-editor-addons")}
              <span className="components-base-control__label">
                <span
                  className="component-color-indicator"
                  style={{ backgroundColor: iconColor }}
                ></span>
              </span>
            </p>

            <ColorPalette
              title={__("Color", "responsive-block-editor-addons")}
              value={iconColor}
              onChange={(colorValue) =>
                setAttributes({ iconColor: colorValue })
              }
              allowReset
            />
          </PanelBody>
        )}
        {isBackSelected && (
          <PanelBody
            title={__("Back Icon Settings", "responsive-block-editor-addons")}
            initialOpen={false}
          >
            {times(count, (n) => backIconControls(n))}

            <RangeControl
              label={__("Icon Size", "responsive-block-editor-addons")}
              value={backIconSize}
              onChange={(value) =>
                setAttributes({
                  backIconSize: value !== undefined ? value : 50,
                })
              }
              min={20}
              max={200}
              allowReset
            />

            <p>
              {__("Icon Color", "responsive-block-editor-addons")}
              <span className="components-base-control__label">
                <span
                  className="component-color-indicator"
                  style={{ backgroundColor: backIconColor }}
                ></span>
              </span>
            </p>

            <ColorPalette
              title={__("Color", "responsive-block-editor-addons")}
              value={backIconColor}
              onChange={(colorValue) =>
                setAttributes({ backIconColor: colorValue })
              }
              allowReset
            />
          </PanelBody>
        )}
        {isBackSelected && (
          <PanelBody
            title={__("Back Button Settings", "responsive-block-editor-addons")}
            initialOpen={false}
          >
            <RangeControl
              label={__("Border Radius", "responsive-block-editor-addons")}
              value={buttonBorderRadius}
              onChange={(value) =>
                setAttributes({
                  buttonBorderRadius: value !== undefined ? value : 0,
                })
              }
              min={0}
              max={50}
              allowReset
            />

            <RangeControl
              label={__("Horizontal Padding", "responsive-block-editor-addons")}
              value={buttonHpadding}
              onChange={(value) =>
                setAttributes({
                  buttonHpadding: value !== undefined ? value : 20,
                })
              }
              min={0}
              max={100}
              allowReset
            />
            <RangeControl
              label={__("Vertical Padding", "responsive-block-editor-addons")}
              value={buttonVpadding}
              onChange={(value) =>
                setAttributes({
                  buttonVpadding: value !== undefined ? value : 10,
                })
              }
              min={0}
              max={100}
              allowReset
            />
            <TabPanel
              className="rbea-inspect-tabs rbea-inspect-tabs-col-2"
              activeClass="active-tab"
              tabs={[
                {
                  name: "normal",
                  title: __("Normal"),
                  className: "rbea-normal-tab",
                },
                {
                  name: "hover",
                  title: __("Hover"),
                  className: "rbea-focus-tab",
                },
              ]}
            >
              {(tabName) => {
                let tabout;
                if ("hover" === tabName.name) {
                  tabout = (
                    <Fragment>
                      <Fragment>
                        <p>
                          {__("Text Color", "responsive-block-editor-addons")}
                          <span className="components-base-control__label">
                            <span
                              className="component-color-indicator"
                              style={{ backgroundColor: buttonHTextColor }}
                            ></span>
                          </span>
                        </p>
                        <ColorPalette
                          value={buttonHTextColor}
                          onChange={(colorValue) =>
                            setAttributes({ buttonHTextColor: colorValue })
                          }
                          allowReset
                        />
                      </Fragment>
                      <SelectControl
                        label={__(
                          "Background Type",
                          "responsive-block-editor-addons"
                        )}
                        value={buttonHbackgroundType}
                        onChange={(value) =>
                          setAttributes({ buttonHbackgroundType: value })
                        }
                        options={buttonbackgroundTypeOptions}
                      />
                      {"color" == buttonHbackgroundType && (
                        <Fragment>
                          <p>
                            {__(
                              "Background Color",
                              "responsive-block-editor-addons"
                            )}
                            <span className="components-base-control__label">
                              <span
                                className="component-color-indicator"
                                style={{ backgroundColor: buttonHColor }}
                              ></span>
                            </span>
                          </p>
                          <ColorPalette
                            value={buttonHColor}
                            onChange={(colorValue) =>
                              setAttributes({ buttonHColor: colorValue })
                            }
                            allowReset
                          />
                          <RangeControl
                            label={__(
                              "Opacity",
                              "responsive-block-editor-addons"
                            )}
                            value={buttonHopacity}
                            onChange={(value) =>
                              setAttributes({
                                buttonHopacity:
                                  value !== undefined ? value : 20,
                              })
                            }
                            min={0}
                            max={100}
                            allowReset
                          />
                        </Fragment>
                      )}
                      {"gradient" == buttonHbackgroundType && (
                        <Fragment>
                          <p className="responsive-setting-label">
                            {__("Color 1", "responsive-block-editor-addons")}
                            <span className="components-base-control__label">
                              <span
                                className="component-color-indicator"
                                style={{
                                  backgroundColor: buttonHbackgroundColor1,
                                }}
                              ></span>
                            </span>
                          </p>
                          <ColorPalette
                            value={buttonHbackgroundColor1}
                            onChange={(colorValue) =>
                              setAttributes({
                                buttonHbackgroundColor1: colorValue,
                              })
                            }
                            allowReset
                          />

                          <p className="responsive-setting-label">
                            {__("Color 2", "responsive-block-editor-addons")}
                            <span className="components-base-control__label">
                              <span
                                className="component-color-indicator"
                                style={{
                                  backgroundColor: buttonHbackgroundColor2,
                                }}
                              ></span>
                            </span>
                          </p>
                          <ColorPalette
                            value={buttonHbackgroundColor2}
                            onChange={(colorValue) =>
                              setAttributes({
                                buttonHbackgroundColor2: colorValue,
                              })
                            }
                            allowReset
                          />
                          <RangeControl
                            label={__(
                              "Color Location 1",
                              "responsive-block-editor-addons"
                            )}
                            value={buttonHcolorLocation1}
                            min={0}
                            max={100}
                            onChange={(value) =>
                              setAttributes({ buttonHcolorLocation1: value })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Color Location 2",
                              "responsive-block-editor-addons"
                            )}
                            value={buttonHcolorLocation2}
                            min={0}
                            max={100}
                            onChange={(value) =>
                              setAttributes({ buttonHcolorLocation2: value })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Gradient Direction",
                              "responsive-block-editor-addons"
                            )}
                            value={buttonHgradientDirection}
                            min={0}
                            max={100}
                            onChange={(value) =>
                              setAttributes({ buttonHgradientDirection: value })
                            }
                          />
                        </Fragment>
                      )}
                    </Fragment>
                  );
                } else {
                  tabout = (
                    <Fragment>
                      <Fragment>
                        <p>
                          {__("Text Color", "responsive-block-editor-addons")}
                          <span className="components-base-control__label">
                            <span
                              className="component-color-indicator"
                              style={{ backgroundColor: buttonTextColor }}
                            ></span>
                          </span>
                        </p>
                        <ColorPalette
                          value={buttonTextColor}
                          onChange={(colorValue) =>
                            setAttributes({ buttonTextColor: colorValue })
                          }
                          allowReset
                        />
                      </Fragment>
                      <SelectControl
                        label={__(
                          "Background Type",
                          "responsive-block-editor-addons"
                        )}
                        value={buttonbackgroundType}
                        onChange={(value) =>
                          setAttributes({ buttonbackgroundType: value })
                        }
                        options={buttonbackgroundTypeOptions}
                      />
                      {"color" == buttonbackgroundType && (
                        <Fragment>
                          <p>
                            {__(
                              "Background Color",
                              "responsive-block-editor-addons"
                            )}
                            <span className="components-base-control__label">
                              <span
                                className="component-color-indicator"
                                style={{ backgroundColor: buttonColor }}
                              ></span>
                            </span>
                          </p>
                          <ColorPalette
                            value={buttonColor}
                            onChange={(colorValue) =>
                              setAttributes({ buttonColor: colorValue })
                            }
                            allowReset
                          />
                          <RangeControl
                            label={__(
                              "Opacity",
                              "responsive-block-editor-addons"
                            )}
                            value={buttonopacity}
                            onChange={(value) =>
                              setAttributes({
                                buttonopacity: value !== undefined ? value : 20,
                              })
                            }
                            min={0}
                            max={100}
                            allowReset
                          />
                        </Fragment>
                      )}
                      {"gradient" == buttonbackgroundType && (
                        <Fragment>
                          <p className="responsive-setting-label">
                            {__("Color 1", "responsive-block-editor-addons")}
                            <span className="components-base-control__label">
                              <span
                                className="component-color-indicator"
                                style={{
                                  backgroundColor: buttonbackgroundColor1,
                                }}
                              ></span>
                            </span>
                          </p>
                          <ColorPalette
                            value={buttonbackgroundColor1}
                            onChange={(colorValue) =>
                              setAttributes({
                                buttonbackgroundColor1: colorValue,
                              })
                            }
                            allowReset
                          />

                          <p className="responsive-setting-label">
                            {__("Color 2", "responsive-block-editor-addons")}
                            <span className="components-base-control__label">
                              <span
                                className="component-color-indicator"
                                style={{
                                  backgroundColor: buttonbackgroundColor2,
                                }}
                              ></span>
                            </span>
                          </p>
                          <ColorPalette
                            value={buttonbackgroundColor2}
                            onChange={(colorValue) =>
                              setAttributes({
                                buttonbackgroundColor2: colorValue,
                              })
                            }
                            allowReset
                          />
                          <RangeControl
                            label={__(
                              "Color Location 1",
                              "responsive-block-editor-addons"
                            )}
                            value={buttoncolorLocation1}
                            min={0}
                            max={100}
                            onChange={(value) =>
                              setAttributes({ buttoncolorLocation1: value })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Color Location 2",
                              "responsive-block-editor-addons"
                            )}
                            value={buttoncolorLocation2}
                            min={0}
                            max={100}
                            onChange={(value) =>
                              setAttributes({ buttoncolorLocation2: value })
                            }
                          />
                          <RangeControl
                            label={__(
                              "Gradient Direction",
                              "responsive-block-editor-addons"
                            )}
                            value={buttongradientDirection}
                            min={0}
                            max={100}
                            onChange={(value) =>
                              setAttributes({ buttongradientDirection: value })
                            }
                          />
                        </Fragment>
                      )}
                    </Fragment>
                  );
                }
                return <div>{tabout}</div>;
              }}
            </TabPanel>
          </PanelBody>
        )}

        <PanelBody
          title={__("Background Image", "responsive-block-editor-addons")}
          initialOpen={false}
        >
          {isFrontSelected && (
            <Fragment>
              <BaseControl
                className="editor-bg-image-control"
                label={__(
                  "Front Background Image",
                  "responsive-block-editor-addons"
                )}
              >
                <MediaUpload
                  title={__(
                    "Select Background Image",
                    "responsive-block-editor-addons"
                  )}
                  onSelect={this.onSelectImage}
                  allowedTypes={["image"]}
                  value={backgroundImage}
                  render={({ open }) => (
                    <Button isDefault onClick={open}>
                      {!backgroundImage
                        ? __(
                            "Select Background Image",
                            "responsive-block-editor-addons"
                          )
                        : __("Replace image", "responsive-block-editor-addons")}
                    </Button>
                  )}
                />
                {backgroundImage && (
                  <Button
                    className="rbea-rm-btn"
                    onClick={this.onRemoveImage}
                    isLink
                    isDestructive
                  >
                    {__("Remove Image", "responsive-block-editor-addons")}
                  </Button>
                )}
              </BaseControl>
              <RangeControl
                label={__("Opacity", "responsive-block-editor-addons")}
                value={colorOpacity}
                onChange={(value) =>
                  setAttributes({
                    colorOpacity: value !== undefined ? value : 30,
                  })
                }
                min={0}
                max={100}
                allowReset
              />
            </Fragment>
          )}
          {isBackSelected && (
            <Fragment>
              <BaseControl
                className="editor-bg-image-control"
                label={__(
                  "Back Background Image",
                  "responsive-block-editor-addons"
                )}
              >
                <MediaUpload
                  title={__(
                    "Select Background Image",
                    "responsive-block-editor-addons"
                  )}
                  onSelect={this.onSelectBackImage}
                  allowedTypes={["image"]}
                  value={backBackgroundImage}
                  render={({ open }) => (
                    <Button isDefault onClick={open}>
                      {!backBackgroundImage
                        ? __(
                            "Select Background Image",
                            "responsive-block-editor-addons"
                          )
                        : __("Replace image", "responsive-block-editor-addons")}
                    </Button>
                  )}
                />
                {backBackgroundImage && (
                  <Button
                    className="rbea-rm-btn"
                    onClick={this.onRemoveBackImage}
                    isLink
                    isDestructive
                  >
                    {__("Remove Image", "responsive-block-editor-addons")}
                  </Button>
                )}
              </BaseControl>
              <RangeControl
                label={__("Opacity", "responsive-block-editor-addons")}
                value={backColorOpacity}
                onChange={(value) =>
                  setAttributes({
                    backColorOpacity: value !== undefined ? value : 30,
                  })
                }
                min={0}
                max={100}
                allowReset
              />
            </Fragment>
          )}
        </PanelBody>

        {isFrontSelected && (
          <PanelColorSettings
            title={__("Front Color Settings", "responsive-block-editor-addons")}
            initialOpen={false}
            colorSettings={[
              {
                value: frontTextColor,
                onChange: onChangeFrontTextColor,
                label: __("Text Color", "responsive-block-editor-addons"),
              },
              {
                value: frontBackgroundColor,
                onChange: onChangeFrontBackgroundColor,
                label: __("Background Color", "responsive-block-editor-addons"),
              },
            ]}
          >
            <RangeControl
              label={__("Opacity", "responsive-block-editor-addons")}
              value={colorOpacity}
              onChange={(value) =>
                setAttributes({
                  colorOpacity: value !== undefined ? value : 100,
                })
              }
              min={0}
              max={100}
              allowReset
            />
          </PanelColorSettings>
        )}
        {isBackSelected && (
          <PanelColorSettings
            title={__("Back Color Settings", "responsive-block-editor-addons")}
            initialOpen={false}
            colorSettings={[
              {
                value: backTextColor,
                onChange: onChangeBackTextColor,
                label: __("Text Color", "responsive-block-editor-addons"),
              },
              {
                value: backBackgroundColor,
                onChange: onChangeBackBackgroundColor,
                label: __("Background Color", "responsive-block-editor-addons"),
              },
            ]}
          >
            <RangeControl
              label={__("Opacity", "responsive-block-editor-addons")}
              value={backColorOpacity}
              onChange={(value) =>
                setAttributes({
                  backColorOpacity: value !== undefined ? value : 100,
                })
              }
              min={0}
              max={100}
              allowReset
            />
          </PanelColorSettings>
        )}
        <PanelBody
          title={__("Spacing", "responsive-block-editor-addons")}
          initialOpen={false}
        >
          <h2>{__("Margin")}</h2>
          <RangeControl
            label={__("Top Margin", "responsive-block-editor-addons")}
            value={topMargin}
            onChange={(value) =>
              setAttributes({ topMargin: value !== undefined ? value : 0 })
            }
            min={-2000}
            max={2000}
            allowReset
          />
          <RangeControl
            label={__("Bottom Margin", "responsive-block-editor-addons")}
            value={bottomMargin}
            onChange={(value) =>
              setAttributes({ bottomMargin: value !== undefined ? value : 0 })
            }
            min={-2000}
            max={2000}
            allowReset
          />

          <h2>{__("Padding")}</h2>
          <TabPanel
            className="rbea-inspect-tabs rbea-inspect-tabs-col-2"
            activeClass="active-tab"
            tabs={[
              {
                name: "front",
                title: __("Front"),
                className: "rbea-normal-tab",
              },
              {
                name: "back",
                title: __("Back"),
                className: "rbea-focus-tab",
              },
            ]}
          >
            {(tabName) => {
              let tabout;
              if ("back" === tabName.name) {
                tabout = (
                  <Fragment>
                    <RangeControl
                      label={__(
                        "Top Padding",
                        "responsive-block-editor-addons"
                      )}
                      value={backtopPadding}
                      onChange={(value) =>
                        setAttributes({
                          backtopPadding: value !== undefined ? value : 0,
                        })
                      }
                      min={0}
                      max={50}
                      allowReset
                    />
                    <RangeControl
                      label={__(
                        "Bottom Padding",
                        "responsive-block-editor-addons"
                      )}
                      value={backbottomPadding}
                      onChange={(value) =>
                        setAttributes({
                          backbottomPadding: value !== undefined ? value : 0,
                        })
                      }
                      min={0}
                      max={50}
                      allowReset
                    />
                    <RangeControl
                      label={__(
                        "Left Padding",
                        "responsive-block-editor-addons"
                      )}
                      value={backleftPadding}
                      onChange={(value) =>
                        setAttributes({
                          backleftPadding: value !== undefined ? value : 0,
                        })
                      }
                      min={0}
                      max={50}
                      allowReset
                    />
                    <RangeControl
                      label={__(
                        "Right Padding",
                        "responsive-block-editor-addons"
                      )}
                      value={backrightPadding}
                      onChange={(value) =>
                        setAttributes({
                          backrightPadding: value !== undefined ? value : 0,
                        })
                      }
                      min={0}
                      max={50}
                      allowReset
                    />
                  </Fragment>
                );
              } else {
                tabout = (
                  <Fragment>
                    <RangeControl
                      label={__(
                        "Top Padding",
                        "responsive-block-editor-addons"
                      )}
                      value={topPadding}
                      onChange={(value) =>
                        setAttributes({
                          topPadding: value !== undefined ? value : 0,
                        })
                      }
                      min={0}
                      max={50}
                      allowReset
                    />
                    <RangeControl
                      label={__(
                        "Bottom Padding",
                        "responsive-block-editor-addons"
                      )}
                      value={bottomPadding}
                      onChange={(value) =>
                        setAttributes({
                          bottomPadding: value !== undefined ? value : 0,
                        })
                      }
                      min={0}
                      max={50}
                      allowReset
                    />
                    <RangeControl
                      label={__(
                        "Left Padding",
                        "responsive-block-editor-addons"
                      )}
                      value={leftPadding}
                      onChange={(value) =>
                        setAttributes({
                          leftPadding: value !== undefined ? value : 0,
                        })
                      }
                      min={0}
                      max={50}
                      allowReset
                    />
                    <RangeControl
                      label={__(
                        "Right Padding",
                        "responsive-block-editor-addons"
                      )}
                      value={rightPadding}
                      onChange={(value) =>
                        setAttributes({
                          rightPadding: value !== undefined ? value : 0,
                        })
                      }
                      min={0}
                      max={50}
                      allowReset
                    />
                  </Fragment>
                );
              }
              return <div>{tabout}</div>;
            }}
          </TabPanel>
        </PanelBody>
        <PanelBody
          title={__("Border Settings", "responsive-block-editor-addons")}
          initialOpen={false}
        >
          <SelectControl
            label={__("Border Style", "responsive-block-editor-addons")}
            value={borderStyle}
            onChange={(value) => setAttributes({ borderStyle: value })}
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
          {"none" != borderStyle && (
            <Fragment>
              <RangeControl
                label={__("Border Width", "responsive-block-editor-addons")}
                value={borderWidth}
                onChange={(value) =>
                  setAttributes({
                    borderWidth: value !== undefined ? value : 2,
                  })
                }
                min={0}
                max={50}
                allowReset
              />
              <Fragment>
                <p>
                  {__("Border Color", "responsive-block-editor-addons")}
                  <span className="components-base-control__label">
                    <span
                      className="component-color-indicator"
                      style={{ backgroundColor: borderColor }}
                    ></span>
                  </span>
                </p>
                <ColorPalette
                  value={borderColor}
                  onChange={(colorValue) =>
                    setAttributes({
                      borderColor:
                        colorValue !== undefined ? colorValue : "#000",
                    })
                  }
                  allowReset
                />
              </Fragment>
            </Fragment>
          )}
          <RangeControl
            label={__("Border Radius", "responsive-block-editor-addons")}
            value={borderRadius}
            onChange={(value) =>
              setAttributes({
                borderRadius: value !== undefined ? value : null,
              })
            }
            min={0}
            max={100}
            allowReset
          />
          <BoxShadowControl
            setAttributes={setAttributes}
            label={__("Box Shadow")}
            boxShadowColor={{ value: boxShadowColor, label: __("Color") }}
            boxShadowHOffset={{
              value: boxShadowHOffset,
              label: __("Horizontal"),
            }}
            boxShadowVOffset={{
              value: boxShadowVOffset,
              label: __("Vertical"),
            }}
            boxShadowBlur={{ value: boxShadowBlur, label: __("Blur") }}
            boxShadowSpread={{ value: boxShadowSpread, label: __("Spread") }}
            boxShadowPosition={{
              value: boxShadowPosition,
              label: __("Position"),
            }}
          />
        </PanelBody>
      </InspectorControls>
    );
  }
}
