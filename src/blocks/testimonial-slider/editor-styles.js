/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../generateCSS";
import generateCSSUnit from "../../generateCSSUnit";
import { hexToRgba } from "../../utils/index";
import generateBackgroundImageEffect from "../../generateBackgroundImageEffect";

function EditorStyles(props) {
  const {
    classMigrate,
    headingAlign,
    headingAlignMobile,
    headingAlignTablet,
    companyColor,
    descColor,
    authorColor,
    nameFontSizeType,
    nameFontSize,
    nameFontSizeTablet,
    nameFontSizeMobile,
    nameFontFamily,
    nameFontWeight,
    nameLineHeightType,
    nameLineHeight,
    nameLineHeightTablet,
    nameLineHeightMobile,
    companyFontSizeType,
    companyFontSize,
    companyFontSizeTablet,
    companyFontSizeMobile,
    companyFontFamily,
    companyFontWeight,
    companyLineHeightType,
    companyLineHeight,
    companyLineHeightTablet,
    companyLineHeightMobile,
    descFontSizeType,
    descFontSize,
    descFontSizeTablet,
    descFontSizeMobile,
    descFontFamily,
    descFontWeight,
    descLineHeightType,
    descLineHeight,
    descLineHeightTablet,
    descLineHeightMobile,
    descSpace,
    descSpaceMobile,
    descSpaceTablet,
    nameSpace,
    nameSpaceMobile,
    nameSpaceTablet,
    imgVrPadding,
    imgVrPaddingMobile,
    imgVrPaddingTablet,
    imgHrPadding,
    imgHrPaddingMobile,
    imgHrPaddingTablet,
    imageWidth,
    rowGap,
    rowGapMobile,
    rowGapTablet,
    columnGap,
    columnGapMobile,
    columnGapTablet,
    contentPadding,
    contentPaddingMobile,
    contentPaddingTablet,
    backgroundColor,
    backgroundImage,
    backgroundImagePosition,
    backgroundImageSize,
    backgroundImageRepeat,
    backgroundImageColor,
    backgroundAttachment,
    overlayType,
    gradientOverlayColor1,
    gradientOverlayLocation1,
    gradientOverlayColor2,
    gradientOverlayLocation2,
    gradientOverlayType,
    gradientOverlayAngle,
    gradientOverlayPosition,
    opacity,
    backgroundOpacity,
	blockBorderStyle,
	blockBorderWidth,
	blockBorderRadius,
	blockBorderColor,
    arrowColor,
    test_item_count,
    columns,
    arrowDots,
    arrowSize,
    blockPadding,
    blockPaddingMobile,
    blockPaddingTablet,
	backgroundRepeat, // For compatibility with v1.3.2.
	backgroundSize, // For compatibility with v1.3.2.
	borderStyle, // For compatibility with v1.3.2.
	borderColor, // For compatibility with v1.3.2.
	borderWidth, // For compatibility with v1.3.2.
	borderRadius, // For compatibility with v1.3.2.
  hideWidget,
  hideWidgetTablet,
  hideWidgetMobile,
  } = props.attributes;

  var img_align = "center";

  if (headingAlign == "left") {
    img_align = "flex-start";
  } else if (headingAlign == "right") {
    img_align = "flex-end";
  }

  let updatedBackgroundImage = "";
  let backgroundImageEffect = "";
  let imgopacity = backgroundOpacity / 100;

  if (backgroundImage) {
    updatedBackgroundImage = `linear-gradient(${hexToRgba(
      backgroundImageColor || "#fff",
      imgopacity || 0
    )},${hexToRgba(
      backgroundImageColor || "#fff",
      imgopacity || 0
    )}),url(${backgroundImage})`;
    backgroundImageEffect = "";
    if (gradientOverlayType === "linear") {
      backgroundImageEffect = generateBackgroundImageEffect(
        `${hexToRgba(gradientOverlayColor1 || "#fff", imgopacity || 0)}`,
        `${hexToRgba(gradientOverlayColor2 || "#fff", imgopacity || 0)}`,
        gradientOverlayAngle,
        gradientOverlayLocation1,
        gradientOverlayLocation2
      );
    }
    else {
      backgroundImageEffect = `radial-gradient( at ${gradientOverlayPosition}, ${hexToRgba(
        gradientOverlayColor1 || "#fff",
        imgopacity || 0
      )} ${gradientOverlayLocation1}%, ${hexToRgba(
        gradientOverlayColor2 || "#fff",
        imgopacity || 0
      )} ${gradientOverlayLocation2}%)`;
    }
  }

  var position = backgroundImagePosition.replace("-", " ");

  var selectors = {
    " ": {
      "opacity": hideWidget? 0.2 : 1,
      "padding": generateCSSUnit(blockPadding, "px"),
    },
    " .slick-arrow svg": {
      "height": generateCSSUnit(arrowSize, "px"),
      "width": generateCSSUnit(arrowSize, "px"),
        "fill": arrowColor,
    },
    " .responsive-block-editor-addons-testimonial__wrap": {
      "padding-left": generateCSSUnit(columnGap / 2, "px"),
      "padding-right": generateCSSUnit(columnGap / 2, "px"),
      "margin-bottom": generateCSSUnit(rowGap, "px"),
    },
    " .responsive-block-editor-addons-testimonial__wrap .responsive-block-editor-addons-tm__image-content": {
      "padding-left": generateCSSUnit(imgHrPadding, "px"),
      "padding-right": generateCSSUnit(imgHrPadding, "px"),
      "padding-top": generateCSSUnit(imgVrPadding, "px"),
      "padding-bottom": generateCSSUnit(imgVrPadding, "px"),
    },
    " .responsive-block-editor-addons-tm__image-position-top .responsive-block-editor-addons-tm__image-content": {
      "justify-content": img_align,
    },
    // Image
    " .responsive-block-editor-addons-tm__image img": {
      width: generateCSSUnit(imageWidth, "px"),
      "max-width": generateCSSUnit(imageWidth, "px"),
    },
    " .responsive-block-editor-addons-tm__content": {
      "text-align": headingAlign,
      padding: generateCSSUnit(contentPadding, "px"),
    },
    // Prefix Style
    " .responsive-block-editor-addons-tm__author-name": {
      "font-size": generateCSSUnit(nameFontSize, "px"),
      "font-family": nameFontFamily,
      "font-weight": nameFontWeight,
      "line-height": generateCSSUnit(nameLineHeight, "px"),
      color: authorColor,
      "margin-bottom": generateCSSUnit(nameSpace, "px"),
    },
    // Title Style
    " .responsive-block-editor-addons-tm__company": {
      "font-size": generateCSSUnit(companyFontSize, "px"),
      "font-family": companyFontFamily,
      "font-weight": companyFontWeight,
      "line-height": generateCSSUnit(companyLineHeight, "px"),
      color: companyColor,
    },
    // Description Style
    " .responsive-block-editor-addons-tm__desc": {
      "font-size": generateCSSUnit(descFontSize, "px"),
      "font-family": descFontFamily,
      "font-weight": descFontWeight,
      "line-height": generateCSSUnit(descLineHeight, descLineHeightType),
      color: descColor,
      "margin-bottom": generateCSSUnit(descSpace, "px"),
    },
    " .responsive-block-editor-addons-testimonial__wrap.responsive-block-editor-addons-tm__bg-type-color .responsive-block-editor-addons-tm__content": {
      "background-color": backgroundColor,
    },
    " .responsive-block-editor-addons-testimonial__wrap.responsive-block-editor-addons-tm__bg-type-image .responsive-block-editor-addons-tm__content": {
      "background-image": updatedBackgroundImage,
      "background-position": backgroundImagePosition,
      "background-attachment": backgroundAttachment,
      "background-repeat": backgroundRepeat !== "empty" && backgroundImageRepeat === "no-repeat" ? backgroundRepeat : backgroundImageRepeat, // For compatibility with v1.3.2.
      "background-size": backgroundSize !== "empty" && backgroundImageSize === "cover" ? backgroundSize : backgroundImageSize, // For compatibility with v1.3.2.
    },
    " .responsive-block-editor-addons-testimonial__wrap.responsive-block-editor-addons-tm__bg-type-image .responsive-block-editor-addons-tm__overlay": {
      "background-color":
        overlayType == "color"
          ? `${hexToRgba(backgroundColor || "#fff", imgopacity || 0)}`
          : undefined,
      "background-image": backgroundImageEffect,
    },
  };

  if (test_item_count == columns) {
    selectors[".responsive-block-editor-addons-slick-carousel"] = {
      padding: "0",
    };
  }

  if (blockBorderStyle != "none" || borderStyle != "none") {  // For compatibility with v1.3.2.
    selectors[
      " .responsive-block-editor-addons-testimonial__wrap .responsive-block-editor-addons-tm__content"
    ] = {
      "border-style": borderStyle !== "empty" && blockBorderStyle === "none" ? borderStyle : blockBorderStyle, // For compatibility with v1.3.2.
      "border-color": borderColor !== "empty" && blockBorderColor === "" ? borderColor : blockBorderColor, // For compatibility with v1.3.2.
      "border-width": borderWidth !== 999 && blockBorderWidth === 1 ? generateCSSUnit(borderWidth, "px") : generateCSSUnit(blockBorderWidth, "px"), // For compatibility with v1.3.2.
      "border-radius": borderRadius !== 999 && blockBorderRadius === "" ? generateCSSUnit(borderRadius, "px") : generateCSSUnit(blockBorderRadius, "px"), // For compatibility with v1.3.2.
    };
  } else {
    selectors[
      " .responsive-block-editor-addons-testimonial__wrap .responsive-block-editor-addons-tm__content"
    ] = {
      "border-radius": generateCSSUnit(blockBorderRadius, "px"),
    };
  }

  if (arrowDots === "dots") {
    selectors[
      " .responsive-block-editor-addons-slick-carousel.responsive-block-editor-addons-tm__arrow-outside"
    ] = {
      padding: "0 0 35px 0",
    };
  }

  if (test_item_count === 1 || test_item_count === columns) {
    selectors[
      " .responsive-block-editor-addons-slick-carousel.responsive-block-editor-addons-tm__arrow-outside"
    ] = {
      padding: "0",
    };
  }

  var mobile_selectors = {
    " ": {
    "opacity": hideWidgetMobile? 0.2 : 1,
    "padding": generateCSSUnit(blockPaddingMobile, "px"),
  },
  " .responsive-block-editor-addons-testimonial__wrap": {
    "padding-left": generateCSSUnit(columnGapMobile / 2, "px"),
    "padding-right": generateCSSUnit(columnGapMobile / 2, "px"),
    "margin-bottom": generateCSSUnit(rowGapMobile, "px"),
  },
  " .responsive-block-editor-addons-testimonial__wrap .responsive-block-editor-addons-tm__image-content": {
    "padding-left": generateCSSUnit(imgHrPaddingMobile, "px"),
    "padding-right": generateCSSUnit(imgHrPaddingMobile, "px"),
    "padding-top": generateCSSUnit(imgVrPaddingMobile, "px"),
    "padding-bottom": generateCSSUnit(imgVrPaddingMobile, "px"),
  },
    " .responsive-block-editor-addons-tm__desc": {
      "font-size": generateCSSUnit(descFontSizeMobile, descFontSizeType) + "!important",
      "line-height": generateCSSUnit(descLineHeightMobile, descLineHeightType),
      "margin-bottom": generateCSSUnit(descSpaceMobile, "px"),
    },
    " .responsive-block-editor-addons-tm__company": {
      "font-size": generateCSSUnit(companyFontSizeMobile, companyFontSizeType)  + "!important",
      "line-height": generateCSSUnit(
        companyLineHeightMobile,
        companyLineHeightType
      ),
    },
    " .responsive-block-editor-addons-tm__author-name": {
      "font-size": generateCSSUnit(nameFontSizeMobile, nameFontSizeType)  + "!important",
      "line-height": generateCSSUnit(nameLineHeightMobile, nameLineHeightType),
      "margin-bottom": generateCSSUnit(nameSpaceMobile, "px"),
    },
    " .responsive-block-editor-addons-tm__content": {
      "text-align": headingAlignMobile,
      padding: generateCSSUnit(contentPaddingMobile, "px"),
    },
  };

  var tablet_selectors = {
    " ": {
      "opacity": hideWidgetTablet? 0.2 : 1,
      "padding": generateCSSUnit(blockPaddingTablet, "px"),
    },
    " .responsive-block-editor-addons-testimonial__wrap": {
      "padding-left": generateCSSUnit(columnGapTablet / 2, "px"),
      "padding-right": generateCSSUnit(columnGapTablet / 2, "px"),
      "margin-bottom": generateCSSUnit(rowGapTablet, "px"),
    },
    " .responsive-block-editor-addons-testimonial__wrap .responsive-block-editor-addons-tm__image-content": {
      "padding-left": generateCSSUnit(imgHrPaddingTablet, "px"),
      "padding-right": generateCSSUnit(imgHrPaddingTablet, "px"),
      "padding-top": generateCSSUnit(imgVrPaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(imgVrPaddingTablet, "px"),
    },
    " .responsive-block-editor-addons-tm__desc": {
      "font-size": generateCSSUnit(descFontSizeTablet, descFontSizeType)  + "!important",
      "line-height": generateCSSUnit(descLineHeightTablet, descLineHeightType),
      "margin-bottom": generateCSSUnit(descSpaceTablet, "px"),
    },
    " .responsive-block-editor-addons-tm__company": {
      "font-size": generateCSSUnit(companyFontSizeTablet, companyFontSizeType)  + "!important",
      "line-height": generateCSSUnit(
        companyLineHeightTablet,
        companyLineHeightType
      ),
    },
    " .responsive-block-editor-addons-tm__author-name": {
      "font-size": generateCSSUnit(nameFontSizeTablet, nameFontSizeType)  + "!important",
      "line-height": generateCSSUnit(nameLineHeightTablet, nameLineHeightType),
      "margin-bottom": generateCSSUnit(nameSpaceTablet, "px"),
    },
    " .responsive-block-editor-addons-tm__content": {
      padding: generateCSSUnit(contentPaddingTablet, "px"),
      "text-align": "center",
    },
    " .responsive-block-editor-addons-tm__content": {
      "text-align": headingAlignTablet,
    },
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-${props.clientId.substr(
    0,
    8
  )}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
