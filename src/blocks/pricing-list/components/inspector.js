/**
 * Inspector Controls
 */

import times from "lodash/times";
import BoxShadowControl from "../../../utils/components/box-shadow";
import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";
import ResponsiveSpacingControl from "../../../settings-components/Responsive Spacing Settings";
import TypographyHelperControl from "../../../settings-components/Typography Settings";
import ResponsivePaddingControl from "../../../settings-components/Responsive Spacing Settings/Responsive Padding Control";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

// Import block components
const { InspectorControls, ColorPalette, MediaUpload } = wp.editor;

// Import Inspector components
const {
  PanelBody,
  RangeControl,
  SelectControl,
  BaseControl,
  Button,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
    this.getImageName = this.getImageName.bind(this);
    this.onRemoveTestImage = this.onRemoveTestImage.bind(this);
    this.onSelectTestImage = this.onSelectTestImage.bind(this);
  }
  /*
   * Event to set Image as while adding.
   */
  onSelectTestImage(media, index) {
    const { pricingList } = this.props.attributes;
    const { setAttributes } = this.props;

    let imag_url = null;
    if (!media || !media.url) {
      imag_url = null;
    } else {
      imag_url = media;
    }

    if (!media.type || "image" !== media.type) {
      imag_url = null;
    }

    const newItems = pricingList.map((item, thisIndex) => {
      if (index === thisIndex) {
        (item["image"] = imag_url), (item["imageUrl"] = imag_url);
      }
      return item;
    });

    setAttributes({
      pricingList: newItems,
    });
  }

  /*
   * Event to set Image selectot label.
   */
  getImageName(image) {
    const { pricingList } = this.props.attributes;

    let image_name = __("Select Image");
    if (image) {
      if (image.url == null || image.url == "") {
        image_name = __("Select Image");
      } else {
        image_name = __("Replace Image");
      }
    }
    return image_name;
  }
  /*
   * Event to set Image as null while removing.
   */
  onRemoveTestImage(index) {
    const { pricingList } = this.props.attributes;
    const { setAttributes } = this.props;

    const newItems = pricingList.map((item, thisIndex) => {
      if (index === thisIndex) {
        item["image"] = null;
      }
      return item;
    });

    setAttributes({
      pricingList: newItems,
    });
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        pricingList,
        priceColor,
        descColor,
        titleColor,
        titleFontFamily,
        titleFontSize,
        titleFontSizeMobile,
        titleFontSizeTablet,
        titleFontWeight,
        titleLineHeight,
        descriptionFontFamily,
        descriptionFontSize,
        descriptionFontSizeMobile,
        descriptionFontSizeTablet,
        descriptionFontWeight,
        descriptionLineHeight,
        priceFontFamily,
        priceFontSize,
        priceFontSizeMobile,
        priceFontSizeTablet,
        priceFontWeight,
        priceLineHeight,
        titleSpace,
        titleSpaceMobile,
        titleSpaceTablet,
        columns,
        rowGap,
        rowGapMobile,
        rowGapTablet,
        columnGap,
        columnGapMobile,
        columnGapTablet,
        contentAlign,
        blockTopPadding,
        blockTopPaddingMobile,
        blockTopPaddingTablet,
        blockBottomPadding,
        blockBottomPaddingMobile,
        blockBottomPaddingTablet,
        blockLeftPadding,
        blockLeftPaddingMobile,
        blockLeftPaddingTablet,
        blockRightPadding,
        blockRightPaddingMobile,
        blockRightPaddingTablet,
        seperatorStyle,
        seperatorWidth,
        seperatorThickness,
        seperatorColor,
        count,
        imagePosition,
        imageSize,
        imageWidth,
      },
      setAttributes,
    } = this.props;
    const tmControls = (index) => {
      let image_val = null;
      if (pricingList[index] && typeof pricingList[index] !== "undefined") {
        image_val = pricingList[index]["image"];
      }
      return (
        <PanelBody
          key={index}
          title={__("Image") + " " + (index + 1) + " " + __("Settings")}
          initialOpen={true}
          className={"responsive-repeater-panel"}
        >
          <BaseControl className="editor-bg-image-control" label={__("")}>
            <MediaUpload
              title={__("Select Image" + (index + 1))}
              onSelect={(media) => {
                this.onSelectTestImage(media, index);
              }}
              allowedTypes={["image"]}
              value={image_val}
              render={({ open }) => (
                <Button isDefault onClick={open}>
                  {this.getImageName(pricingList[index]["image"])}
                </Button>
              )}
            />
            {image_val &&
              pricingList[index]["image"].url !== null &&
              pricingList[index]["image"].url !== "" && (
                <Button
                  className="responsive-rm-btn"
                  key={index}
                  onClick={(value) => {
                    this.onRemoveTestImage(index);
                  }}
                  isLink
                  isDestructive
                >
                  {__("Remove Image")}
                </Button>
              )}
          </BaseControl>
        </PanelBody>
      );
    };

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
    let cnt = 0;
    pricingList.map((item, thisIndex) => {
      let image_arr = pricingList[thisIndex];
      if (image_arr && typeof image_arr !== "undefined") {
        const image = image_arr["image"];
        if (typeof image !== "undefined" && image !== null && image !== "") {
          cnt++;
        }
      }
    });

    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody
              title={__("General", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <RangeControl
                label={__("Number of Items", "responsive-block-editor-addons")}
                value={count}
                onChange={(newCount) => {
                  let cloneTest_block = [...pricingList];
                  if (cloneTest_block.length < newCount) {
                    const inc_description = Math.abs(
                      newCount - cloneTest_block.length
                    );
                    var desc_text = __(
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    );
                    {
                      times(inc_description, (n) => {
                        cloneTest_block.push({
                          title: "Menu Item " + newCount,
                          description: desc_text,
                          price: "$9",
                          imageId: "",
                          image: "",
                          imageUrl: "",
                        });
                      });
                    }
                    setAttributes({ pricingList: cloneTest_block });
                  } else {
                    const inc_description = Math.abs(
                      newCount - cloneTest_block.length
                    );
                    let data_new = cloneTest_block;
                    for (var i = 0; i < inc_description; i++) {
                      data_new.pop();
                    }
                    setAttributes({ pricingList: data_new });
                  }
                  setAttributes({ count: newCount });
                }}
                min={1}
                max={20}
                step={1}
              />
              <RangeControl
                label={__("Columns")}
                value={columns}
                onChange={(value) =>
                  setAttributes({ columns: value !== undefined ? value : 2 })
                }
                min={1}
                max={3}
              />
            </PanelBody>
            <PanelBody
              title={__("Image", "responsive-blocks")}
              initialOpen={false}
            >
              {times(count, (n) => tmControls(n))}
              {cnt > 0 && (
                <Fragment>
                  <hr className="uagb-editor__separator" />
                  <SelectControl
                    label={__("Image Position")}
                    value={imagePosition}
                    onChange={(value) =>
                      setAttributes({ imagePosition: value })
                    }
                    options={[
                      { value: "top", label: __("Top") },
                      { value: "left", label: __("Left") },
                      { value: "right", label: __("Right") },
                    ]}
                  />

                  <SelectControl
                    label={__("Image Size")}
                    options={[
                      { value: "full", label: __("Full") },
                      { value: "thumbnail", label: __("Thumbnail") },
                      { value: "medium", label: __("Medium") },
                      { value: "large", label: __("Large") },
                    ]}
                    value={imageSize}
                    onChange={(value) => setAttributes({ imageSize: value })}
                  />
                  <RangeControl
                    label={__("Width")}
                    value={imageWidth}
                    onChange={(value) => setAttributes({ imageWidth: value })}
                    min={0}
                    max={500}
                    allowReset
                  />
                </Fragment>
              )}
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
            <PanelBody title={__("Separator")} initialOpen={false}>
              <SelectControl
                label={__("Separator Style")}
                value={seperatorStyle}
                onChange={(value) => setAttributes({ seperatorStyle: value })}
                options={[
                  { value: "none", label: __("None") },
                  { value: "solid", label: __("Solid") },
                  { value: "dotted", label: __("Dotted") },
                  { value: "dashed", label: __("Dashed") },
                  { value: "double", label: __("Double") },
                  { value: "groove", label: __("Groove") },
                  { value: "inset", label: __("Inset") },
                  { value: "outset", label: __("Outset") },
                  { value: "ridge", label: __("Ridge") },
                ]}
              />
              {"none" != seperatorStyle && (
                <Fragment>
                  <RangeControl
                    label={__("Separator Width (%)")}
                    value={seperatorWidth}
                    onChange={(value) =>
                      setAttributes({
                        seperatorWidth: value !== undefined ? value : 100,
                      })
                    }
                    min={0}
                    max={100}
                    allowReset
                  />
                  <RangeControl
                    label={__("Separator Thickness")}
                    value={seperatorThickness}
                    onChange={(value) =>
                      setAttributes({
                        seperatorThickness: value !== undefined ? value : 1,
                      })
                    }
                    min={0}
                    max={20}
                    allowReset
                  />
                  <Fragment>
                    <p className="responsive-setting-label">
                      {__("Separator Color")}
                      <span className="components-base-control__label">
                        <span
                          className="component-color-indicator"
                          style={{ backgroundColor: seperatorColor }}
                        ></span>
                      </span>
                    </p>
                    <ColorPalette
                      value={seperatorColor}
                      onChange={(colorValue) =>
                        setAttributes({ seperatorColor: colorValue })
                      }
                      allowReset
                    />
                  </Fragment>
                </Fragment>
              )}
            </PanelBody>
            <PanelBody
              title={__("Color Settings", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <p className="responsive-setting-label">
                {__("Title Color")}
                <span className="components-base-control__label">
                  <span
                    className="component-color-indicator"
                    style={{
                      backgroundColor: titleColor,
                    }}
                  ></span>
                </span>
              </p>
              <ColorPalette
                value={titleColor}
                onChange={(value) =>
                  this.props.setAttributes({
                    titleColor: value,
                  })
                }
                allowReset
              />
              <p className="responsive-setting-label">
                {__("Content Color")}
                <span className="components-base-control__label">
                  <span
                    className="component-color-indicator"
                    style={{
                      backgroundColor: descColor,
                    }}
                  ></span>
                </span>
              </p>
              <ColorPalette
                value={descColor}
                onChange={(value) =>
                  this.props.setAttributes({
                    descColor: value,
                  })
                }
                allowReset
              />
              <p className="responsive-setting-label">
                {__("Price Color")}
                <span className="components-base-control__label">
                  <span
                    className="component-color-indicator"
                    style={{
                      backgroundColor: priceColor,
                    }}
                  ></span>
                </span>
              </p>
              <ColorPalette
                value={priceColor}
                onChange={(value) =>
                  this.props.setAttributes({
                    priceColor: value,
                  })
                }
                allowReset
              />
            </PanelBody>
            <PanelBody
              title={__("Spacing", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ResponsiveSpacingControl
                title={"Row Gap"}
                attrNameTemplate="rowGap%s"
                values={{
                  desktop: rowGap,
                  tablet: rowGapTablet,
                  mobile: rowGapMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Column Gap"}
                attrNameTemplate="columnGap%s"
                values={{
                  desktop: columnGap,
                  tablet: columnGapTablet,
                  mobile: columnGapMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsiveSpacingControl
                title={"Title Bottom Margin"}
                attrNameTemplate="titleSpace%s"
                values={{
                  desktop: titleSpace,
                  tablet: titleSpaceTablet,
                  mobile: titleSpaceMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
              <ResponsivePaddingControl
                attrNameTemplate="block%s"
                values={{
                  desktopTop: blockTopPadding,
                  desktopBottom: blockBottomPadding,
                  desktopLeft: blockLeftPadding,
                  desktopRight: blockRightPadding,

                  tabletTop: blockTopPaddingTablet,
                  tabletBottom: blockBottomPaddingTablet,
                  tabletLeft: blockLeftPaddingTablet,
                  tabletRight: blockRightPaddingTablet,

                  mobileTop: blockTopPaddingMobile,
                  mobileBottom: blockBottomPaddingMobile,
                  mobileLeft: blockLeftPaddingMobile,
                  mobileRight: blockRightPaddingMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
            </PanelBody>

            <PanelBody
              title={__("Typography", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <TypographyHelperControl
                title={__("Title Typography", "responsive-block-editor-addons")}
                attrNameTemplate="title%s"
                values={{
                  family: titleFontFamily,
                  size: titleFontSize,
                  sizeMobile: titleFontSizeMobile,
                  sizeTablet: titleFontSizeTablet,
                  weight: titleFontWeight,
                  height: titleLineHeight,
                }}
                showLetterSpacing={false}
                showTextTransform={false}
                setAttributes={setAttributes}
                {...this.props}
              />
              <TypographyHelperControl
                title={__(
                  "Description Typography",
                  "responsive-block-editor-addons"
                )}
                attrNameTemplate="description%s"
                values={{
                  family: descriptionFontFamily,
                  size: descriptionFontSize,
                  sizeMobile: descriptionFontSizeMobile,
                  sizeTablet: descriptionFontSizeTablet,
                  weight: descriptionFontWeight,
                  height: descriptionLineHeight,
                }}
                showLetterSpacing={false}
                showTextTransform={false}
                setAttributes={setAttributes}
                {...this.props}
              />
              <TypographyHelperControl
                title={__("Price Typography", "responsive-block-editor-addons")}
                attrNameTemplate="price%s"
                values={{
                  family: priceFontFamily,
                  size: priceFontSize,
                  sizeMobile: priceFontSizeMobile,
                  sizeTablet: priceFontSizeTablet,
                  weight: priceFontWeight,
                  height: priceLineHeight,
                }}
                showLetterSpacing={false}
                showTextTransform={false}
                setAttributes={setAttributes}
                {...this.props}
              />
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"advance"}></InspectorTab>
        </InspectorTabs>
      </InspectorControls>
    );
  }
}
