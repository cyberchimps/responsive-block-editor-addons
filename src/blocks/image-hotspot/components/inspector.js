import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import ResponsiveBlocksIcon from "../../../ResponsiveBlocksIcon.json";
import renderSVG from "../../../renderIcon";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import { isEqual, unescape, escape } from "lodash";
import rbeaControls from "./controlOptions";

const { __ } = wp.i18n;

const { Component, Fragment } = wp.element;
const { InspectorControls, ColorPalette, MediaUpload } =
  wp.blockEditor;

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
        hotspotIcon,
        hotspotSize,
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
      handleCancel,
      handleUpdateData,
      changeImageSize,
      handleStateChange,
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

    const displayHotspotSettings = (self) => {
      const { getState } = self.props;
      if (isEqual(getState("currentHotspot"), null)) {
        return;
      }

      const { imagePoints } = self.props.attributes;
      const { handleUpdateData, handleStateChange } = self.props;

      const points = imagePoints ? JSON.parse(imagePoints) : [];
      const index = getState("currentHotspot");

      return (
        <Fragment>
          <TextControl
            label={__("Hotspot Title", "responsive-block-editor-addons")}
            value={points[index].title}
            onChange={(value) => {
              handleUpdateData({ title: value }, index);
              handleStateChange("updateHotspot", true);
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
              handleUpdateData({ link: value }, index);
            }}
          />
          <ToggleControl
            label={__("Open in New Tab", "responsive-block-editor-addons")}
            checked={points[index].newTab}
            onChange={(value) => {
              handleUpdateData({ newTab: value }, index);
            }}
          />
          <ToggleControl
            label={__("Opened by default", "responsive-block-editor-addons")}
            checked={points[index].popUpOpen}
            onChange={(value) => {
              handleUpdateData({ popUpOpen: value }, index);
            }}
          />
          <TextareaControl
            label={__("Hotspot Description", "responsive-block-editor-addons")}
            rows="4"
            value={unescape(points[index].content)}
            onChange={(value) => {
              handleUpdateData({ content: escape(value) }, index);
              handleStateChange("updateHotspot", true);
            }}
          />
          <RangeControl
            label={__("Horizontal Position", "responsive-block-editor-addons")}
            value={parseFloat(points[index].position.x)}
            onChange={(value) => {
              if (typeof value == "undefined") {
                value = 50;
              }
              handleUpdateData(
                {
                  position: {
                    x: parseFloat(value) + "%",
                    y: points[index].position.y,
                  },
                },
                index
              );
              handleStateChange("updateHotspot", true);
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
              handleUpdateData(
                {
                  position: {
                    x: points[index].position.x,
                    y: parseFloat(value) + "%",
                  },
                },
                index
              );
              handleStateChange("updateHotspot", true);
            }}
            allowReset
            min={0}
            max={100}
            step={1}
          />
          <SelectControl
            label={__("Tooltip Position", "responsive-block-editor-addons")}
            value={points[index].placement}
            options={rbeaControls.tooltipPositions}
            onChange={(value) => {
              handleUpdateData({ placement: value }, index);
              handleStateChange({
                updateHotspot: true,
                activeHotspot: true,
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
                handleUpdateData({ icon: value }, index);
                handleStateChange({
                  updateHotspot: true,
                  activeHotspot: true,
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
              handleUpdateData({ backgroundColor: value }, index);
              handleStateChange({
                updateHotspot: true,
                activeHotspot: true,
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
              handleUpdateData({ color: value }, index);
              handleStateChange({
                updateHotspot: true,
                activeHotspot: true,
              });
            }}
            allowReset
          />
        </Fragment>
      );
    };

    const displayModal = (index) => {
      if (typeof imagePointsParsed[index] !== "undefined") {
        return (
          <Fragment>
            {(getState("currentStatus") == "edit" || getState("currentStatus") == "drop") &&
            getState("editModal") == true ? (
              <Modal
                className={`${className}__modal`}
                title={
                  getState("currentStatus") == "drop"
                    ? __("Add Hotspot", "responsive-block-editor-addons")
                    : __("Edit Hotspot", "responsive-block-editor-addons")
                }
                shouldCloseOnClickOutside={false}
                shouldCloseOnEsc={false}
                onRequestClose={() => {
                  handleStateChange({
                    currentStatus: false,
                    editModal: false,
                  });

                  if (getState("currentStatus") == "drop") {
                    handleCancel();
                  }
                }}
              >
                <Fragment>
                  {displayModalContent(index, true)}
                  <ButtonGroup>
                    <Button
                      isPrimary
                      onClick={() =>
                        handleStateChange({
                          updateHotspot: true,
                          editModal: false,
                          currentStatus: false,
                        })
                      }
                    >
                      {getState("currentStatus") == "drop"
                        ? __("Save", "responsive-block-editor-addons")
                        : __("Update", "responsive-block-editor-addons")}
                    </Button>

                    {getState("currentStatus") == "drop" && (
                      <Button
                        variant="secondary"
                        onClick={() => {
                          handleStateChange({
                            currentStatus: false,
                            editModal: false,
                          });
                          handleCancel();
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

    const modalContentSettings = (index, popup) => (
      <Fragment>
        <TextControl
          label={__("Hotspot Title", "responsive-block-editor-addons")}
          value={imagePointsParsed[index].title}
          onChange={(value) => {
            handleUpdateData({ title: value }, index);
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
              label={__("Hotspot URL", "responsive-block-editor-addons")}
              placeholder={__("Enter URL", "responsive-block-editor-addons")}
              value={imagePointsParsed[index].link}
              onChange={(value) => {
                handleUpdateData({ link: value }, index);
              }}
            />
            <ToggleControl
              label={__("Open in New Tab", "responsive-block-editor-addons")}
              checked={imagePointsParsed[index].newTab}
              onChange={(value) => {
                handleUpdateData({ newTab: value }, index);
              }}
            />
            <ToggleControl
              label={__("Opened by default", "responsive-block-editor-addons")}
              checked={imagePointsParsed[index].popUpOpen}
              onChange={(value) => {
                handleUpdateData({ popUpOpen: value }, index);
              }}
            />
          </div>
        </Fragment>
        <TextareaControl
          label={__(
            "Hotspot Description",
            "responsive-block-editor-addons"
          )}
          rows="5"
          value={unescape(imagePointsParsed[index].content)}
          onChange={(value) => {
            handleUpdateData({ content: escape(value) }, index);
          }}
        />
      </Fragment>
    );

    const modalAdvanceSettings = (index, popup) => (
      <Fragment>
        <RangeControl
          label={__("Horizontal Position", "responsive-block-editor-addons")}
          value={parseFloat(imagePointsParsed[index].position.x)}
          onChange={(value) => {
            if (typeof value == "undefined") {
              value = 50;
            }
            handleUpdateData(
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

            handleUpdateData(
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
        <SelectControl
          label={__("Tooltip Position", "responsive-block-editor-addons")}
          value={imagePointsParsed[index].placement}
          options={rbeaControls.tooltipPositions}
          onChange={(value) => {
            handleUpdateData({ placement: value }, index);
            handleStateChange({
              updateHotspot: true,
              activeHotspot: true,
            });
          }}
        />
      </Fragment>
    );

    const modalStyleSettings = (index, popup) => (
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
            handleUpdateData({ backgroundColor: value }, index);
            handleStateChange({
              updateHotspot: true,
              activeHotspot: true,
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
            handleUpdateData({ color: value }, index);
            handleStateChange({
              updateHotspot: true,
              activeHotspot: true,
            });
          }}
          allowReset
        />
      </Fragment>
    );

    const showModalTabs = (self, tab, index, popup = false) => {
      switch (tab.name) {
        case "content": {
          return <Fragment>{modalContentSettings(index, popup)}</Fragment>;
        }
        case "style": {
          return <Fragment>{modalStyleSettings(index, popup)}</Fragment>;
        }
        case "advance": {
          return <Fragment>{modalAdvanceSettings(index, popup)}</Fragment>;
        } 
      }
    };

    const displayModalContent = (index, popup = false) => {
      return (
        <Fragment>
          {popup ? (
            <TabPanel
              className="responsive-block-editor-addons-modal-editor-tabs"
              activeClass="is-active"
              tabs={rbeaControls.modalTabNames}
            >
              {(tab) => showModalTabs(self, tab, index, popup)}
            </TabPanel>
          ) : (
            <Fragment>
              <PanelBody
                title={__("Content", "responsive-block-editor-addons")}
                initialOpen={true}
              >
                {modalContentSettings(index, popup)}
              </PanelBody>
              <PanelBody
                title={__("Style", "responsive-block-editor-addons")}
                initialOpen={true}
              >
                {modalStyleSettings(index, popup)}
              </PanelBody>
              <PanelBody
                title={__("Advanced", "responsive-block-editor-addons")}
                initialOpen={true}
              >
                {modalAdvanceSettings(index, popup)}
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
        {displayModal(getState("currentHotspot"))}
        {this.props.handleCurrentHotspot() && (
          <PanelBody
            title={__("Hotspot Settings", "responsive-block-editor-addons")}
            initialOpen={true}
          >
            {displayHotspotSettings(this)}
          </PanelBody>
        )}
        {!this.props.handleCurrentHotspot() && (
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
                      <Button variant="secondary" onClick={open}>
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
                  label={__("Image Size", "responsive-block-editor-addons")}
                  value={imageSize}
                  onChange={onChangeImageSize}
                  options={rbeaControls.imageSize}
                />
                <SelectControl
                  label={__(
                    "Open Tooltip (Frontend)",
                    "responsive-block-editor-addons"
                  )}
                  value={tooltipTrigger}
                  options={rbeaControls.openTooltip}
                  onChange={(tooltipTrigger) =>
                    setAttributes({ tooltipTrigger })
                  }
                />
                <p className="components-base-control__label">
                  {__("Hotspot Icon", "responsive-block-editor-addons")}
                </p>
                <FontIconPicker
                  icons={svg_icons}
                  renderFunc={renderSVG}
                  theme="default"
                  value={hotspotIcon}
                  onChange={(value) => setAttributes({ hotspotIcon: value })}
                  isMulti={false}
                  noSelectedPlaceholder={__(
                    "Select Icon",
                    "responsive-block-editor-addons"
                  )}
                />
                <RangeControl
                  label={__("Hotspot Size", "responsive-block-editor-addons")}
                  value={hotspotSize}
                  onChange={(value) =>
                    setAttributes({
                      hotspotSize: value,
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
                  options={rbeaControls.tooltipTheme}
                />
                <SelectControl
                  label={__('Tooltip Animation', 'responsive-block-editor-addons')}
                  value={tooltipAnimation}
                  onChange={tooltipAnimation => setAttributes({ tooltipAnimation })}
                  options={rbeaControls.tooltipAnimation}
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
                  label={__("Pulse Effect", "responsive-block-editor-addons")}
                  checked={pulseEffect}
                  onChange={(value) =>
                    setAttributes({ pulseEffect: !pulseEffect })
                  }
                />
                <SelectControl
                  label={__("Animation", "responsive-block-editor-addons")}
                  value={animationName}
                  onChange={(value) => setAttributes({ animationName: value })}
                  options={rbeaControls.rbeaAnimation}
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
                        { value: "once", label: __("Once", "responsive-block-editor-addons") },
                        { value: "loop", label: __("Loop", "responsive-block-editor-addons") },
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
                      options={rbeaControls.rbeaAnimationCurve}
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
