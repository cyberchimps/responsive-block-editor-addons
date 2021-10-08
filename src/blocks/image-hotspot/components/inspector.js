import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import ResponsiveBlocksIcon from "../../../ResponsiveBlocksIcon.json";
import renderSVG from "../../../renderIcon";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import { isEqual, unescape } from "lodash";

const { __ } = wp.i18n;

const { Component, Fragment } = wp.element;
const { InspectorControls, ColorPalette, MediaUpload } =
  wp.blockEditor || wp.editor;

let svg_icons = Object.keys(ResponsiveBlocksIcon);

const {
  PanelBody,
  BaseControl,
  RangeControl,
  SelectControl,
  TextareaControl,
  ToggleControl,
  TextControl,
  Button,
  Modal,
  ButtonGroup,
  RadioControl,
  Dashicon,
  TabPanel,
} = wp.components;
const { withSelect } = wp.data;
const { compose } = wp.compose;

class Inspector extends Component {
  constructor(props) {
    super(...arguments);
  }

  render() {
    const {
      attributes: {
        id,
        imageSize,
        imagePoints,
        pointBackgroundColor,
        iconColor,
        pointOpacity,
        dotIcon,
        dotSize,
        animationName,
        animationDirection,
        animationRepeat,
        animationDuration,
        animationDelay,
        animationCurve,
        pulseEffect,
        pointSpacing,
        tooltipTrigger,
        tooltipTheme,
        tooltipAnimation,
      },
      setAttributes,
      className,
      imgObj,
      onCancelPoint,
      updateArrValues,
      changeImageSize,
      changeState,
      getState,
      onSelectMedia,
    } = this.props;

    const showAnimationDirections = (animation) => {
      let directionOptions =
        animation === "rotate"
          ? [
              { value: "Left", label: "DownLeft" },
              { value: "DownRight", label: "DownRight" },
              { value: "UpLeft", label: "UpLeft" },
              { value: "UpRight", label: "UpRight" },
            ]
          : animation === "slide" ||
            animation === "flip" ||
            animation === "fold"
          ? [
              { value: "Left", label: "Left" },
              { value: "Right", label: "Right" },
              { value: "Up", label: "Up" },
              { value: "Down", label: "Down" },
            ]
          : [
              { value: "Left", label: "Left" },
              { value: "Right", label: "Right" },
              { value: "Center", label: "Center" },
              { value: "Up", label: "Up" },
              { value: "Down", label: "Down" },
            ];
      return directionOptions;
    };

    const imagePointsParsed = imagePoints != "" ? JSON.parse(imagePoints) : [];

    const renderPointSettingsPanel = (self) => {
      const { getState } = self.props;
      if (isEqual(getState("currentPoint"), null)) {
        return;
      }

      const { imagePoints } = self.props.attributes;
      const { updateArrValues, changeState } = self.props;

      const points = imagePoints ? JSON.parse(imagePoints) : [];
      const index = getState("currentPoint");

      return (
        <Fragment>
          <TextControl
            label={__("Hotspot Title", "responsive-block-editor-addons")}
            value={points[index].title}
            onChange={(value) => {
              updateArrValues({ title: value }, index);
              changeState("updatePoints", true);
            }}
          />
          <TextControl
            label={__("Hotspot URL", "responsive-block-editor-addons")}
            placeholder={__(
              "Enter Hotspot URL...",
              "responsive-block-editor-addons"
            )}
            value={points[index].link}
            onChange={(value) => {
              updateArrValues({ link: value }, index);
            }}
          />
          <ToggleControl
            label={__("Open in New Tab", "responsive-block-editor-addons")}
            checked={points[index].newTab}
            onChange={(value) => {
              updateArrValues({ newTab: value }, index);
            }}
          />
          <ToggleControl
            label={__("Opened by default", "responsive-block-editor-addons")}
            checked={points[index].popUpOpen}
            onChange={(value) => {
              updateArrValues({ popUpOpen: value }, index);
            }}
          />
          <TextareaControl
            label={__("Hotspot Description", "responsive-block-editor-addons")}
            rows="4"
            value={unescape(points[index].content)}
            onChange={(value) => {
              updateArrValues({ content: value }, index);
              changeState("updatePoints", true);
            }}
          />
          <RangeControl
            label={__("Horizontal Position", "responsive-block-editor-addons")}
            value={parseFloat(points[index].position.x)}
            onChange={(value) => {
              if (typeof value == "undefined") {
                value = 50;
              }
              updateArrValues(
                {
                  position: {
                    x: parseFloat(value) + "%",
                    y: points[index].position.y,
                  },
                },
                index
              );
              changeState("updatePoints", true);
            }}
            allowReset
            min={0}
            max={100}
            step={1}
          />
          <RangeControl
            label={__("Vertical Position", "responsive-block-editor-addons")}
            value={parseFloat(points[index].position.y)}
            onChange={(value) => {
              if (typeof value == "undefined") {
                value = 50;
              }
              updateArrValues(
                {
                  position: {
                    x: points[index].position.x,
                    y: parseFloat(value) + "%",
                  },
                },
                index
              );
              changeState("updatePoints", true);
            }}
            allowReset
            min={0}
            max={100}
            step={1}
          />
          <SelectControl
            label={__("Tooltip Position", "responsive-block-editor-addons")}
            value={points[index].placement}
            options={[
              {
                value: "top",
                label: __("Top", "responsive-block-editor-addons"),
              },
              {
                value: "right",
                label: __("Right", "responsive-block-editor-addons"),
              },
              {
                value: "bottom",
                label: __("Bottom", "responsive-block-editor-addons"),
              },
              {
                value: "left",
                label: __("Left", "responsive-block-editor-addons"),
              },
            ]}
            onChange={(value) => {
              updateArrValues({ placement: value }, index);
              changeState({
                updatePoints: true,
                highlightDot: true,
              });
            }}
          />
          <BaseControl
            label={__("Hotspot Icon", "responsive-block-editor-addons")}
          >
            <FontIconPicker
              icons={svg_icons}
              renderFunc={renderSVG}
              theme="default"
              value={imagePointsParsed[index].icon}
              onChange={(value) => {
                updateArrValues({ icon: value }, index);
                changeState({
                  updatePoints: true,
                  highlightDot: true,
                });
              }}
              isMulti={false}
              noSelectedPlaceholder={__(
                "Select Icon",
                "responsive-block-editor-addons"
              )}
            />
          </BaseControl>
          <p className="responsive-block-editor-addons-setting-label">
            {__("Hotspot Background", "responsive-block-editor-addons")}
            <span className="components-base-control__label">
              <span
                className="component-color-indicator"
                style={{
                  backgroundColor: points[index].backgroundColor,
                }}
              ></span>
            </span>
          </p>
          <ColorPalette
            value={points[index].backgroundColor}
            onChange={(value) => {
              updateArrValues({ backgroundColor: value }, index);
              changeState({
                updatePoints: true,
                highlightDot: true,
              });
            }}
            allowReset
          />
          <p className="responsive-block-editor-addons-setting-label">
            {__("Hotspot Icon Color", "responsive-block-editor-addons")}
            <span className="components-base-control__label">
              <span
                className="component-color-indicator"
                style={{ backgroundColor: points[index].color }}
              ></span>
            </span>
          </p>
          <ColorPalette
            value={points[index].color}
            onChange={(value) => {
              updateArrValues({ color: value }, index);
              changeState({
                updatePoints: true,
                highlightDot: true,
              });
            }}
            allowReset
          />
        </Fragment>
      );
    };

    const renderEditModal = (index) => {
      if (typeof imagePointsParsed[index] !== "undefined") {
        return (
          <Fragment>
            {(getState("action") == "edit" || getState("action") == "drop") &&
            getState("editModal") == true ? (
              <Modal
                className={`${className}__modal`}
                title={
                  getState("action") == "drop"
                    ? __("Add Hotspot", "responsive-block-editor-addons")
                    : __("Edit Hotspot", "responsive-block-editor-addons")
                }
                shouldCloseOnClickOutside={false}
                shouldCloseOnEsc={false}
                onRequestClose={() => {
                  changeState({
                    action: false,
                    editModal: false,
                  });

                  if (getState("action") == "drop") {
                    onCancelPoint();
                  }
                }}
              >
                <Fragment>
                  {renderPointsFields(index, true)}
                  <ButtonGroup>
                    <Button
                      isPrimary
                      onClick={() =>
                        changeState({
                          updatePoints: true,
                          editModal: false,
                          action: false,
                        })
                      }
                    >
                      {getState("action") == "drop"
                        ? __("Save", "responsive-block-editor-addons")
                        : __("Update", "responsive-block-editor-addons")}
                    </Button>

                    {getState("action") == "drop" && (
                      <Button
                        isDefault
                        onClick={() => {
                          changeState({
                            action: false,
                            editModal: false,
                          });
                          onCancelPoint();
                        }}
                      >
                        {__("Cancel", "responsive-block-editor-addons")}
                      </Button>
                    )}
                  </ButtonGroup>
                </Fragment>
              </Modal>
            ) : null}
          </Fragment>
        );
      }
    };

    const contentFields = (index, popup) => (
      <Fragment>
        <TextControl
          label={__("Title", "responsive-block-editor-addons")}
          value={imagePointsParsed[index].title}
          onChange={(value) => {
            updateArrValues({ title: value }, index);
          }}
        />
        <Fragment>
          <div
            className={`components-base-control responsive_block_addons___url-field`}
          >
            <Dashicon
              className={`responsive_block_addons___url-icon`}
              icon="admin-links"
            />
            <TextControl
              placeholder={__("Enter URL", "responsive-block-editor-addons")}
              value={imagePointsParsed[index].link}
              onChange={(value) => {
                updateArrValues({ link: value }, index);
              }}
            />
            <ToggleControl
              label={__("Open in New Tab", "responsive-block-editor-addons")}
              checked={imagePointsParsed[index].newTab}
              onChange={(value) => {
                updateArrValues({ newTab: value }, index);
              }}
            />
          </div>
        </Fragment>
        <TextareaControl
          label={__(
            "Popup Content. Plain Text or HTML.",
            "responsive-block-editor-addons"
          )}
          rows="5"
          value={unescape(imagePointsParsed[index].content)}
          onChange={(value) => {
            updateArrValues({ content: escape(value) }, index);
          }}
        />
        <ToggleControl
          label={__("Opened by default", "responsive-block-editor-addons")}
          checked={imagePointsParsed[index].popUpOpen}
          onChange={(value) => {
            updateArrValues({ popUpOpen: value }, index);
          }}
        />
      </Fragment>
    );

    const placementFields = (index, popup) => (
      <Fragment>
        <RangeControl
          label={__("Horizontal Position", "responsive-block-editor-addons")}
          value={parseFloat(imagePointsParsed[index].position.x)}
          onChange={(value) => {
            if (typeof value == "undefined") {
              value = 50;
            }
            updateArrValues(
              {
                position: {
                  x: parseFloat(value) + "%",
                  y: imagePointsParsed[index].position.y,
                },
              },
              index
            );
          }}
          allowReset
          min={0}
          max={100}
          step={0.5}
        />
        <RangeControl
          label={__("Vertical Position", "responsive-block-editor-addons")}
          value={parseFloat(imagePointsParsed[index].position.y)}
          onChange={(value) => {
            if (typeof value == "undefined") {
              value = 50;
            }

            updateArrValues(
              {
                position: {
                  x: imagePointsParsed[index].position.x,
                  y: parseFloat(value) + "%",
                },
              },
              index
            );
          }}
          allowReset
          min={0}
          max={100}
          step={0.5}
        />
        {popup ? (
          <SelectControl
            label={__("Tooltip Position", "responsive-block-editor-addons")}
            selected={imagePointsParsed[index].placement}
            options={[
              {
                value: "top",
                label: __("Top", "responsive-block-editor-addons"),
              },
              {
                value: "right",
                label: __("Right", "responsive-block-editor-addons"),
              },
              {
                value: "bottom",
                label: __("Bottom", "responsive-block-editor-addons"),
              },
              {
                value: "left",
                label: __("Left", "responsive-block-editor-addons"),
              },
            ]}
            onChange={(value) => {
              updateArrValues({ placement: value }, index);
              changeState({
                updatePoints: true,
                highlightDot: true,
              });
            }}
          />
        ) : (
          <RadioControl
            label={__("Tooltip Position", "responsive-block-editor-addons")}
            selected={imagePointsParsed[index].placement}
            options={[
              {
                value: "top",
                label: __("Top", "responsive-block-editor-addons"),
              },
              {
                value: "right",
                label: __("Right", "responsive-block-editor-addons"),
              },
              {
                value: "bottom",
                label: __("Bottom", "responsive-block-editor-addons"),
              },
              {
                value: "left",
                label: __("Left", "responsive-block-editor-addons"),
              },
            ]}
            onChange={(value) => {
              updateArrValues({ placement: value }, index);
              changeState({
                updatePoints: true,
                highlightDot: true,
              });
            }}
          />
        )}
      </Fragment>
    );

    const styleFields = (index, popup) => (
      <Fragment>
        <p className="responsive-block-editor-addons-setting-label">
          {__("Hotspot Background", "responsive-block-editor-addons")}
          <span className="components-base-control__label">
            <span
              className="component-color-indicator"
              style={{
                backgroundColor: imagePointsParsed[index].backgroundColor,
              }}
            ></span>
          </span>
        </p>
        <ColorPalette
          value={imagePointsParsed[index].backgroundColor}
          onChange={(value) => {
            updateArrValues({ backgroundColor: value }, index);
            changeState({
              updatePoints: true,
              highlightDot: true,
            });
          }}
          allowReset
        />
        <p className="responsive-block-editor-addons-setting-label">
          {__("Icon Color", "responsive-block-editor-addons")}
          <span className="components-base-control__label">
            <span
              className="component-color-indicator"
              style={{ backgroundColor: imagePointsParsed[index].color }}
            ></span>
          </span>
        </p>
        <ColorPalette
          value={imagePointsParsed[index].color}
          onChange={(value) => {
            updateArrValues({ color: value }, index);
            changeState({
              updatePoints: true,
              highlightDot: true,
            });
          }}
          allowReset
        />
      </Fragment>
    );

    const renderDotTabs = (self, tab, index, popup = false) => {
      switch (tab.name) {
        case "content": {
          return <Fragment>{contentFields(index, popup)}</Fragment>;
        }
        case "placement": {
          return <Fragment>{placementFields(index, popup)}</Fragment>;
        }
        case "style": {
          return <Fragment>{styleFields(index, popup)}</Fragment>;
        }
      }
    };

    const renderPointsFields = (index, popup = false) => {
      return (
        <Fragment>
          {popup ? (
            <TabPanel
              className="responsive-block-editor-addons-modal-editor-tabs"
              activeClass="is-active"
              tabs={[
                {
                  name: "content",
                  title: __("Content", "responsive-block-editor-addons"),
                  className: "components-button",
                },
                {
                  name: "placement",
                  title: __("Position", "responsive-block-editor-addons"),
                  className: "components-button",
                },
                {
                  name: "style",
                  title: __("Style", "responsive-block-editor-addons"),
                  className: "components-button",
                },
              ]}
            >
              {(tab) => renderDotTabs(self, tab, index, popup)}
            </TabPanel>
          ) : (
            <Fragment>
              <PanelBody
                title={__("Content", "responsive-block-editor-addons")}
                initialOpen={true}
              >
                {contentFields(index, popup)}
              </PanelBody>

              <PanelBody
                title={__("Position", "responsive-block-editor-addons")}
                initialOpen={true}
              >
                {placementFields(index, popup)}
              </PanelBody>

              <PanelBody
                title={__("Style", "responsive-block-editor-addons")}
                initialOpen={true}
              >
                {styleFields(index, popup)}
              </PanelBody>
            </Fragment>
          )}
        </Fragment>
      );
    };

    const onChangeImageSize = (imageSize) => {
      if (typeof imgObj != "undefined") {
        setAttributes({
          imageSize,
        });
        changeImageSize(imgObj, imageSize);
      }
    };

    return (
      <InspectorControls key="inspector">
        {renderEditModal(getState("currentPoint"))}
        {this.props.isSelectedPoint() && (
          <PanelBody
            title={__("Hotspot Settings", "responsive-block-editor-addons")}
            initialOpen={true}
          >
            {renderPointSettingsPanel(this)}
          </PanelBody>
        )}
        {!this.props.isSelectedPoint() && (
          <InspectorTabs>
            <InspectorTab key={"content"}>
              <PanelBody initialOpen={true}>
                <BaseControl
                  className="editor-bg-image-control"
                  label={__(
                    "Background Image",
                    "responsive-block-editor-addons"
                  )}
                >
                  <MediaUpload
                    title={__(
                      "Select Background Image",
                      "responsive-block-editor-addons"
                    )}
                    onSelect={onSelectMedia}
                    allowedTypes={["image"]}
                    value={id}
                    render={({ open }) => (
                      <Button isDefault onClick={open}>
                        {!id
                          ? __(
                              "Select Background Image",
                              "responsive-block-editor-addons"
                            )
                          : __(
                              "Replace image",
                              "responsive-block-editor-addons"
                            )}
                      </Button>
                    )}
                  />
                </BaseControl>
                <SelectControl
                  label={__("Image Size")}
                  value={imageSize}
                  onChange={onChangeImageSize}
                  options={[
                    { value: "full", label: __("Full Size") },
                    { value: "thumbnail", label: __("Thumbnail") },
                    { value: "medium", label: __("Medium") },
                  ]}
                />
                <SelectControl
                  label={__(
                    "Open Tooltip (Frontend)",
                    "responsive-block-editor-addons"
                  )}
                  value={tooltipTrigger}
                  options={[
                    {
                      value: "hover",
                      label: __("On Hover", "responsive-block-editor-addons"),
                    },
                    {
                      value: "click",
                      label: __("On Click", "responsive-block-editor-addons"),
                    },
                  ]}
                  onChange={(tooltipTrigger) =>
                    setAttributes({ tooltipTrigger })
                  }
                />
                <p className="components-base-control__label">
                  {__("Hotspot Icon")}
                </p>
                <FontIconPicker
                  icons={svg_icons}
                  renderFunc={renderSVG}
                  theme="default"
                  value={dotIcon}
                  onChange={(value) => setAttributes({ dotIcon: value })}
                  isMulti={false}
                  noSelectedPlaceholder={__(
                    "Select Icon",
                    "responsive-block-editor-addons"
                  )}
                />
                <RangeControl
                  label={__("Hotspot Size", "responsive-block-editor-addons")}
                  value={dotSize}
                  onChange={(value) =>
                    setAttributes({
                      dotSize: value,
                    })
                  }
                  min={1}
                  max={100}
                  allowReset
                />
                <RangeControl
                  label={__(
                    "Hotspot Spacing",
                    "responsive-block-editor-addons"
                  )}
                  value={pointSpacing}
                  onChange={(value) =>
                    setAttributes({
                      pointSpacing: value,
                    })
                  }
                  min={1}
                  max={100}
                  allowReset
                />
              </PanelBody>
            </InspectorTab>
            <InspectorTab key={"style"}>
              <PanelBody initialOpen={true}>
                <p className="responsive-block-editor-addons-setting-label">
                  {__("Hotspot Background", "responsive-block-editor-addons")}
                  <span className="components-base-control__label">
                    <span
                      className="component-color-indicator"
                      style={{ backgroundColor: pointBackgroundColor }}
                    ></span>
                  </span>
                </p>
                <ColorPalette
                  value={pointBackgroundColor}
                  onChange={(value) =>
                    setAttributes({ pointBackgroundColor: value })
                  }
                  allowReset
                />
                <p className="responsive-block-editor-addons-setting-label">
                  {__("Icon Color", "responsive-block-editor-addons")}
                  <span className="components-base-control__label">
                    <span
                      className="component-color-indicator"
                      style={{ backgroundColor: iconColor }}
                    ></span>
                  </span>
                </p>
                <ColorPalette
                  value={iconColor}
                  onChange={(value) => setAttributes({ iconColor: value })}
                  allowReset
                />
                <RangeControl
                  label={__(
                    "Hotspot Opacity",
                    "responsive-block-editor-addons"
                  )}
                  value={pointOpacity}
                  onChange={(value) =>
                    setAttributes({
                      pointOpacity: value,
                    })
                  }
                  min={0}
                  max={100}
                  allowReset
                />
              </PanelBody>
            </InspectorTab>
            <InspectorTab key={"advance"}>
              <PanelBody
                title={__("Tooltip Settings", "responsive-block-editor-addons")}
                initialOpen={false}
              >
                <SelectControl
                  label={__("Tooltip Theme", "responsive-block-editor-addons")}
                  value={tooltipTheme}
                  onChange={(tooltipTheme) => setAttributes({ tooltipTheme })}
                  options={[
                    {
                      value: "light",
                      label: __("Default", "responsive-block-editor-addons"),
                    },
                    {
                      value: "light-border",
                      label: __(
                        "Light Border",
                        "responsive-block-editor-addons"
                      ),
                    },
                    {
                      value: "dark",
                      label: __("Dark", "responsive-block-editor-addons"),
                    },
                    {
                      value: "material",
                      label: __("Material", "responsive-block-editor-addons"),
                    },
                    {
                      value: "translucent",
                      label: __(
                        "Translucent",
                        "responsive-block-editor-addons"
                      ),
                    },
                  ]}
                />
                <SelectControl
                  label={__('Tooltip Animation', 'responsive-block-editor-addons')}
                  value={tooltipAnimation}
                  onChange={tooltipAnimation => setAttributes({ tooltipAnimation })}
                  options={[
                    { value: 'shift-away'  , label: __( 'Shift Away', 'responsive-block-editor-addons' ) },
                    { value: 'shift-away-subtle'  , label: __( 'Shift Away Subtle', 'responsive-block-editor-addons' ) },
                    { value: 'shift-away-extreme'  , label: __( 'Shift Away Extreme', 'responsive-block-editor-addons' ) },
                    { value: 'shift-toward', label: __( 'Shift Toward', 'responsive-block-editor-addons' ) },
                    { value: 'shift-toward-subtle', label: __( 'Shift Toward Subtle', 'responsive-block-editor-addons' ) },
                    { value: 'shift-toward-extreme', label: __( 'Shift Toward Extreme', 'responsive-block-editor-addons' ) },
                    { value: 'scale'       , label: __( 'Scale', 'responsive-block-editor-addons' ) },
                    { value: 'scale-subtle'       , label: __( 'Scale Subtle', 'responsive-block-editor-addons' ) },
                    { value: 'scale-extreme'       , label: __( 'Scale Extreme', 'responsive-block-editor-addons' ) },
                    { value: 'perspective' , label: __( 'Perspective', 'responsive-block-editor-addons' ) },
                    { value: 'perspective-subtle' , label: __( 'Perspective Subtle', 'responsive-block-editor-addons' ) },
                    { value: 'perspective-extreme' , label: __( 'Perspective Extreme', 'responsive-block-editor-addons' ) },
                  ]}
                />
              </PanelBody>
              <PanelBody
                title={__(
                  "Hotspot Animation",
                  "responsive-block-editor-addons"
                )}
                initialOpen={false}
              >
                <ToggleControl
                  label={__("Pulse Effect")}
                  checked={pulseEffect}
                  onChange={(value) =>
                    setAttributes({ pulseEffect: !pulseEffect })
                  }
                />
                <SelectControl
                  label={__("Animation", "responsive-block-editor-addons")}
                  value={animationName}
                  onChange={(value) => setAttributes({ animationName: value })}
                  options={[
                    { value: "none", label: "None" },
                    { value: "fade", label: __("Fade") },
                    { value: "slide", label: __("Slide") },
                    { value: "bounce", label: __("Bounce") },
                    { value: "zoom", label: __("Zoom") },
                    { value: "flip", label: __("Flip") },
                    { value: "fold", label: __("Fold") },
                    { value: "rotate", label: "Rotate" },
                  ]}
                />
                {animationName !== "none" && (
                  <Fragment>
                    <SelectControl
                      label={__("Direction", "responsive-block-editor-addons")}
                      value={animationDirection}
                      onChange={(value) =>
                        setAttributes({ animationDirection: value })
                      }
                      options={showAnimationDirections(animationName)}
                    />
                    <SelectControl
                      label={__("Repeat", "responsive-block-editor-addons")}
                      value={animationRepeat}
                      onChange={(value) =>
                        setAttributes({ animationRepeat: value })
                      }
                      options={[
                        { value: "once", label: __("Once") },
                        { value: "loop", label: __("Loop") },
                      ]}
                    />
                    <RangeControl
                      label={__("Duration", "responsive-block-editor-addons")}
                      value={animationDuration}
                      min={0}
                      max={2000}
                      allowReset={true}
                      onChange={(value) =>
                        setAttributes({ animationDuration: value })
                      }
                    />
                    <RangeControl
                      label={__("Delay", "responsive-block-editor-addons")}
                      value={animationDelay}
                      min={0}
                      max={3000}
                      allowReset={true}
                      onChange={(value) =>
                        setAttributes({ animationDelay: value })
                      }
                    />
                    <SelectControl
                      label={__("Curve", "responsive-block-editor-addons")}
                      value={animationCurve}
                      onChange={(value) =>
                        setAttributes({ animationCurve: value })
                      }
                      options={[
                        { value: "ease-in-out", label: "ease-in-out" },
                        { value: "ease", label: "ease" },
                        { value: "ease-in", label: "ease-in" },
                        { value: "ease-out", label: "ease-out" },
                        { value: "linear", label: "linear" },
                      ]}
                    />
                  </Fragment>
                )}
              </PanelBody>
            </InspectorTab>
          </InspectorTabs>
        )}
      </InspectorControls>
    );
  }
}

export default compose([
  withSelect((select, props) => {
    const { getEditorSettings } = select("core/editor");
    return {
      getEditorSettings,
    };
  }),
])(Inspector);
