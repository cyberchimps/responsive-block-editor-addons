import {
  TabPanel,
  Dashicon,
  FocalPointPicker,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import RbeaMediaUploadControl from "../../../utils/components/rbea-media-upload-control";
import RbeaTabRadioControl from "../../../utils/components/rbea-tab-radio-control";
const BackgroundImageControls = ({
  attributes,
  setAttributes,
  // Make these props more generic by using a prefix pattern
  imageAttr = "backgroundImage",
  positionAttr = "backgroundPosition",
  positionTabletAttr = "backgroundPositionTablet",
  positionMobileAttr = "backgroundPositionMobile",
  attachmentAttr = "backgroundAttachment",
  attachmentTabletAttr = "backgroundAttachmentTablet",
  attachmentMobileAttr = "backgroundAttachmentMobile",
  blendModeAttr = "blendMode",
  blendModeTabletAttr = "blendModeTablet",
  blendModeMobileAttr = "blendModeMobile",
  repeatAttr = "backgroundRepeat",
  repeatTabletAttr = "backgroundRepeatTablet",
  repeatMobileAttr = "backgroundRepeatMobile",
  sizeAttr = "backgroundSize",
  sizeTabletAttr = "backgroundSizeTablet",
  sizeMobileAttr = "backgroundSizeMobile",
  attachmentTabAttr = "attachmentTab",
  blendModeTabAttr = "blendModeTab",
  repeatTabAttr = "repeatTab",
  imageSizeTabAttr = "imageSizeTab",
  // Options
  attachmentOptions,
  blendModeOptions,
  repeatOptions,
  backgroundSizeOptions,
  allowBlendMode = false,
}) => {
  // Dynamically get values from attributes using the provided attribute names
  const backgroundImage = attributes[imageAttr];
  const background_image_url = backgroundImage;

  return (
    <>
      <RbeaMediaUploadControl
        label={__("Image", "responsive-block-editor-addons")}
        value={{
          url: backgroundImage || "",
        }}
        onChange={(newValue) => {
          setAttributes({
            [imageAttr]: newValue.url,
          });
        }}
        mediaType={"image"}
      />
      {backgroundImage && (
        <BackgroundImageSettings
          attributes={attributes}
          setAttributes={setAttributes}
          backgroundImage={backgroundImage}
          background_image_url={background_image_url}
          // Pass the attribute names as props
          imageAttr={imageAttr}
          positionAttr={positionAttr}
          positionTabletAttr={positionTabletAttr}
          positionMobileAttr={positionMobileAttr}
          attachmentAttr={attachmentAttr}
          attachmentTabletAttr={attachmentTabletAttr}
          attachmentMobileAttr={attachmentMobileAttr}
          blendModeAttr={blendModeAttr}
          blendModeTabletAttr={blendModeTabletAttr}
          blendModeMobileAttr={blendModeMobileAttr}
          repeatAttr={repeatAttr}
          repeatTabletAttr={repeatTabletAttr}
          repeatMobileAttr={repeatMobileAttr}
          sizeAttr={sizeAttr}
          sizeTabletAttr={sizeTabletAttr}
          sizeMobileAttr={sizeMobileAttr}
          attachmentTabAttr={attachmentTabAttr}
          blendModeTabAttr={blendModeTabAttr}
          repeatTabAttr={repeatTabAttr}
          imageSizeTabAttr={imageSizeTabAttr}
          attachmentOptions={attachmentOptions}
          blendModeOptions={blendModeOptions}
          repeatOptions={repeatOptions}
          backgroundSizeOptions={backgroundSizeOptions}
          allowBlendMode={allowBlendMode}
        />
      )}
    </>
  );
};

const BackgroundImageSettings = ({
  attributes,
  setAttributes,
  backgroundImage,
  background_image_url,
  // Receive the attribute name props
  imageAttr,
  positionAttr,
  positionTabletAttr,
  positionMobileAttr,
  attachmentAttr,
  attachmentTabletAttr,
  attachmentMobileAttr,
  blendModeAttr,
  blendModeTabletAttr,
  blendModeMobileAttr,
  repeatAttr,
  repeatTabletAttr,
  repeatMobileAttr,
  sizeAttr,
  sizeTabletAttr,
  sizeMobileAttr,
  attachmentTabAttr,
  blendModeTabAttr,
  repeatTabAttr,
  imageSizeTabAttr,
  attachmentOptions,
  blendModeOptions,
  repeatOptions,
  backgroundSizeOptions,
  allowBlendMode,
}) => {
  // Get the current tab states from attributes
  const attachmentTab = attributes[attachmentTabAttr];
  const blendModeTab = attributes[blendModeTabAttr];
  const repeatTab = attributes[repeatTabAttr];
  const imageSizeTab = attributes[imageSizeTabAttr];

  return (
    <>
      {/* Position */}
      <BackgroundImageControlTab
        label={__("Image Position", "responsive-block-editor-addons")}
        tabState={attachmentTab}
        onTabChange={(tab) => setAttributes({ [attachmentTabAttr]: tab.name })}
        renderContent={(tab) => {
          const valueMap = {
            desktop: attributes[positionAttr],
            tablet: attributes[positionTabletAttr],
            mobile: attributes[positionMobileAttr],
          };

          const attrMap = {
            desktop: positionAttr,
            tablet: positionTabletAttr,
            mobile: positionMobileAttr,
          };

          return (
            <FocalPointPicker
              __nextHasNoMarginBottom
              __next40pxDefaultSize
              url={background_image_url}
              value={valueMap[tab.name]}
              onChange={(newFocalPoint) =>
                setAttributes({ [attrMap[tab.name]]: newFocalPoint })
              }
            />
          );
        }}
      />

      {/* Attachment */}
      <BackgroundImageControlTab
        label={__(`Attachment`, "responsive-block-editor-addons")}
        tabState={attachmentTab}
        onTabChange={(tab) => setAttributes({ [attachmentTabAttr]: tab.name })}
        renderContent={(tab) => {
          const attachmentValues = {
            desktop: {
              value: attributes[attachmentAttr],
              attr: attachmentAttr,
            },
            tablet: {
              value: attributes[attachmentTabletAttr],
              attr: attachmentTabletAttr,
            },
            mobile: {
              value: attributes[attachmentMobileAttr],
              attr: attachmentMobileAttr,
            },
          };

          const current = attachmentValues[tab.name];
          if (!current) return null;

          return (
            <RbeaTabRadioControl
              label=""
              value={current.value}
              onChange={(value) =>
                setAttributes({ [current.attr]: value })
              }
              options={attachmentOptions}
              defaultValue="scroll"
            />
          );
        }}
      />

      {/* Blend Mode */}
      {allowBlendMode &&
      <BackgroundImageControlTab
        label={__(`Blend Mode`, "responsive-block-editor-addons")}
        tabState={blendModeTab}
        onTabChange={(tab) => setAttributes({ [blendModeTabAttr]: tab.name })}
        renderContent={(tab) => {
          const blendModeValues = {
            desktop: {
              value: attributes[blendModeAttr],
              attr: blendModeAttr,
            },
            tablet: {
              value: attributes[blendModeTabletAttr],
              attr: blendModeTabletAttr,
            },
            mobile: {
              value: attributes[blendModeMobileAttr],
              attr: blendModeMobileAttr,
            },
          };

          const current = blendModeValues[tab.name];
          if (!current) return null;

          return (
            <div className="rbea-repeat-selector-wrapper">
              <RbeaTabRadioControl
                label=""
                value={current.value}
                onChange={(value) =>
                  setAttributes({ [current.attr]: value })
                }
                options={blendModeOptions}
                defaultValue="normal"
              />
            </div>
          );
        }}
      />
      }

      {/* Repeat */}
      <BackgroundImageControlTab
        label={__(`Repeat`, "responsive-block-editor-addons")}
        tabState={repeatTab}
        onTabChange={(tab) => setAttributes({ [repeatTabAttr]: tab.name })}
        renderContent={(tab) => {
          const repeatValues = {
            desktop: {
              value: attributes[repeatAttr],
              attr: repeatAttr,
            },
            tablet: {
              value: attributes[repeatTabletAttr],
              attr: repeatTabletAttr,
            },
            mobile: {
              value: attributes[repeatMobileAttr],
              attr: repeatMobileAttr,
            },
          };

          const current = repeatValues[tab.name];
          if (!current) return null;

          return (
            <div className="rbea-repeat-selector-wrapper">
              <RbeaTabRadioControl
                label=""
                value={current.value}
                onChange={(value) =>
                  setAttributes({ [current.attr]: value })
                }
                options={repeatOptions}
                defaultValue="no-repeat"
              />
            </div>
          );
        }}
      />

      {/* Size */}
      <BackgroundImageControlTab
        label={__(`Size`, "responsive-block-editor-addons")}
        tabState={imageSizeTab}
        onTabChange={(tab) => setAttributes({ [imageSizeTabAttr]: tab.name })}
        renderContent={(tab) => {
          const sizeValues = {
            desktop: {
              value: attributes[sizeAttr],
              attr: sizeAttr,
            },
            tablet: {
              value: attributes[sizeTabletAttr],
              attr: sizeTabletAttr,
            },
            mobile: {
              value: attributes[sizeMobileAttr],
              attr: sizeMobileAttr,
            },
          };

          const current = sizeValues[tab.name];
          if (!current) return null;

          return (
            <RbeaTabRadioControl
              label=""
              value={current.value}
              onChange={(value) =>
                setAttributes({ [current.attr]: value })
              }
              options={backgroundSizeOptions}
              defaultValue="cover"
            />
          );
        }}
      />
    </>
  );
};

const BackgroundImageControlTab = ({ label, tabState, onTabChange, renderContent }) => {
  return (
    <div className="rbea-tab-selector-label-wrapper">
      <TabPanel
        className="responsive-size-type-field-tabs responsive-size-type-field__common-tabs responsive-inline-margin rbea-tab-selector-full-width rbea-tab-selector-zero-margin-bottom"
        activeClass="active-tab"
        tabs={[
          {
            name: "desktop",
            title: <Dashicon icon="desktop" />,
            className: "responsive-desktop-tab responsive-responsive-tabs",
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
        {(tab) => {
          return (
            <>
              <label>{label} ({tab.name})</label>
              {renderContent(tab)}
            </>
          );
        }}
      </TabPanel>
    </div>
  );
};

export default BackgroundImageControls;