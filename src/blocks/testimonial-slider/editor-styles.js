/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../generateCSS";
import generateCSSUnit from "../../generateCSSUnit";
import { hexToRgba } from "../../utils/index";
import generateBackgroundImageEffect from "../../generateBackgroundImageEffect";
import { getImagePostionCSS } from "../../getImagePosition";

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
    imageWidthTablet,
    imageWidthMobile,
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
    blockTopRadius,
    blockRightRadius,
    blockBottomRadius,
    blockLeftRadius,
    blockTopRadiusTablet,
    blockRightRadiusTablet,
    blockBottomRadiusTablet,
    blockLeftRadiusTablet,
    blockTopRadiusMobile,
    blockRightRadiusMobile,
    blockBottomRadiusMobile,
    blockLeftRadiusMobile,
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
  starTopMargin,
  starBottomMargin,
  starLeftMargin,
  starRightMargin,
  starTopMarginTablet,
  starBottomMarginTablet,
  starLeftMarginTablet,
  starRightMarginTablet,
  starTopMarginMobile,
  starBottomMarginMobile,
  starLeftMarginMobile,
  starRightMarginMobile,
  starTopPadding,
  starTopPaddingMobile,
  starTopPaddingTablet,
  starBottomPadding,
  starBottomPaddingMobile,
  starBottomPaddingTablet,
  starLeftPadding,
  starLeftPaddingMobile,
  starLeftPaddingTablet,
  starRightPadding,
  starRightPaddingMobile,
  starRightPaddingTablet,
  blockTopMargin,
  blockBottomMargin,
  blockLeftMargin,
  blockRightMargin,
  blockTopMarginTablet,
  blockBottomMarginTablet,
  blockLeftMarginTablet,
  blockRightMarginTablet,
  blockTopMarginMobile,
  blockBottomMarginMobile,
  blockLeftMarginMobile,
  blockRightMarginMobile,
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
  descTypographyColor,
  nameTypographyColor,
  companyTypographyColor,
  descBottomSpacing,
  descBottomSpacingMobile,
  descBottomSpacingTablet,
  nameBottomSpacing,
  nameBottomSpacingMobile,
  nameBottomSpacingTablet,
  backgroundPosition,
  backgroundPositionMobile,
  backgroundPositionTablet,
  backgroundPositionFocal,
  backgroundPositionFocalMobile,
  backgroundPositionFocalTablet,
  backgroundSizeTablet,
  backgroundSizeMobile,
  imagePositionTab,
  imageSizeTab,
  backgroundImageValueUpdated,

  backgroundType,
  backgroundColor1,
  gradientDirection,
  backgroundColor2,
  colorLocation1,
  colorLocation2,
  descTextTransform,
  descFontStyle,
  nameTextTransform,
  nameFontStyle,
  companyTextTransform,
  companyFontStyle,
  descTextDecoration,
  nameTextDecoration,
  companyTextDecoration,
  starRating,
  starRange,
  starAlignment,
  starColor,
  starUnmarkedColor,
  starSize,
  starGap,
  } = props.attributes;

  var img_align = "center";

  if (headingAlign == "left") {
    img_align = "flex-start";
  } else if (headingAlign == "right") {
    img_align = "flex-end";
  }

  // let updatedBackgroundImage = "";
  // let backgroundImageEffect = "";
  // let imgopacity = backgroundOpacity / 100;

  // if (backgroundImage) {
  //   updatedBackgroundImage = `linear-gradient(${hexToRgba(
  //     backgroundImageColor || "#fff",
  //     imgopacity || 0
  //   )},${hexToRgba(
  //     backgroundImageColor || "#fff",
  //     imgopacity || 0
  //   )}),url(${backgroundImage})`;
  //   backgroundImageEffect = "";
  //   if (gradientOverlayType === "linear") {
  //     backgroundImageEffect = generateBackgroundImageEffect(
  //       `${hexToRgba(gradientOverlayColor1 || "#fff", imgopacity || 0)}`,
  //       `${hexToRgba(gradientOverlayColor2 || "#fff", imgopacity || 0)}`,
  //       gradientOverlayAngle,
  //       gradientOverlayLocation1,
  //       gradientOverlayLocation2
  //     );
  //   }
  //   else {
  //     backgroundImageEffect = `radial-gradient( at ${gradientOverlayPosition}, ${hexToRgba(
  //       gradientOverlayColor1 || "#fff",
  //       imgopacity || 0
  //     )} ${gradientOverlayLocation1}%, ${hexToRgba(
  //       gradientOverlayColor2 || "#fff",
  //       imgopacity || 0
  //     )} ${gradientOverlayLocation2}%)`;
  //   }
  // }


  // New Background Image
  let imgopacity = opacity / 100;

  let updatedBackgroundImage = `url(${backgroundImage})`;
  let backgroundImageEffect = "";
  let colorType = "";
  if (overlayType === "color" || overlayType === "") {
    let colorType = `${hexToRgba(
      backgroundImageColor || "#fff",
      imgopacity || 0
    )}`;

    if(backgroundImage) {
      updatedBackgroundImage = `linear-gradient(${hexToRgba(
        backgroundImageColor || "#fff",
        imgopacity || 0
      )},${hexToRgba(
        backgroundImageColor || "#fff",
        imgopacity || 0
      )}),url(${backgroundImage})`;
    }
    backgroundImageEffect = "";
  }else {
    if (gradientOverlayType === "linear") {
      backgroundImageEffect = `linear-gradient(${gradientOverlayAngle}deg, ${hexToRgba(
        gradientOverlayColor1 || "#fff",
        imgopacity || 0
      )} ${gradientOverlayLocation1}%, ${hexToRgba(
        gradientOverlayColor2 || "#fff",
        imgopacity || 0
      )} ${gradientOverlayLocation2}%),url(${backgroundImage})`;
    }
    if (gradientOverlayType === "radial") {
      backgroundImageEffect = `radial-gradient( at ${gradientOverlayPosition}, ${hexToRgba(
        gradientOverlayColor1 || "#fff",
        imgopacity || 0
      )} ${gradientOverlayLocation1}%, ${hexToRgba(
        gradientOverlayColor2 || "#fff",
        imgopacity || 0
      )} ${gradientOverlayLocation2}%),url(${backgroundImage})`;
    }
  }

  var position = backgroundImagePosition.replace("-", " ");
  const isOn = responsive_globals?.is_responsive_conditions_on ?? 1;

  var selectors = {
    " ": {
      "opacity": hideWidget && isOn ? 0.2 : 1,
      // "padding": generateCSSUnit(blockPadding, "px"),
      'padding-top': generateCSSUnit(blockTopPadding, "px"),
			'padding-right': generateCSSUnit(blockRightPadding, "px"),
			'padding-bottom': generateCSSUnit(blockBottomPadding, "px"),
			'padding-left': generateCSSUnit(blockLeftPadding, "px"),
			'margin-top': generateCSSUnit(blockTopMargin, "px"),
			'margin-right': generateCSSUnit(blockRightMargin, "px"),
			'margin-bottom': generateCSSUnit(blockBottomMargin, "px"),
			'margin-left': generateCSSUnit(blockLeftMargin, "px"),
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
    " .responsive-block-editor-addons-star-rating": {
      "display": "flex",
      "align-items": "center",
      "flex-wrap": "wrap",
      "justify-content": starAlignment === "center" ? "center" : starAlignment === "right" ? "flex-end" : "flex-start",
      'padding-top': generateCSSUnit(starTopPadding, "px"),
			'padding-right': generateCSSUnit(starRightPadding, "px"),
			'padding-bottom': generateCSSUnit(starBottomPadding, "px"),
			'padding-left': generateCSSUnit(starLeftPadding, "px"),
			'margin-top': generateCSSUnit(starTopMargin, "px"),
			'margin-right': generateCSSUnit(starRightMargin, "px"),
			'margin-bottom': generateCSSUnit(starBottomMargin, "px"),
			'margin-left': generateCSSUnit(starLeftMargin, "px"),
    },
    " .responsive-block-editor-addons-star-rating-star": {
      "color": starUnmarkedColor || "#ccd6df",
      "font-size": generateCSSUnit(starSize || 18, "px"),
      "margin-right": generateCSSUnit(starGap || 2, "px"),
      "display": "inline-flex",
      "align-items": "center",
      "line-height": "1",
    },
    " .responsive-block-editor-addons-star-rating-star svg": {
      "width": "1em",
      "height": "1em",
    },
    " .responsive-block-editor-addons-star-rating-star:last-child": {
      "margin-right": "0",
    },
    " .responsive-block-editor-addons-star-rating-star.responsive-block-editor-addons-star-filled": {
      "color": starColor || "#f0ad4e",
    },
    " .responsive-block-editor-addons-star-rating-star.responsive-block-editor-addons-star-partial": {
      "position": "relative",
    },
    " .responsive-block-editor-addons-star-partial-fill": {
      "position": "absolute",
      "left": "0",
      "top": "0",
      "height": "100%",
      "display": "inline-flex",
      "align-items": "center",
      "overflow": "hidden",
      "color": starColor || "#f0ad4e",
    },
    // Prefix Style
    " .responsive-block-editor-addons-tm__author-name": {
      "font-size": generateCSSUnit(nameFontSize, "px"),
      "font-family": nameFontFamily,
      "font-weight": nameFontWeight,
      "line-height": generateCSSUnit(nameLineHeight, "px"),
      color: nameTypographyColor,
      "margin-bottom": generateCSSUnit(nameBottomSpacing, "px"),
      "text-transform": nameTextTransform,
      "text-decoration": nameTextDecoration,
      "font-style": nameFontStyle,
    },
    // Title Style
    " .responsive-block-editor-addons-tm__company": {
      "font-size": generateCSSUnit(companyFontSize, "px"),
      "font-family": companyFontFamily,
      "font-weight": companyFontWeight,
      "line-height": generateCSSUnit(companyLineHeight, "px"),
      color: companyTypographyColor,
      "text-transform": companyTextTransform,
      "text-decoration": companyTextDecoration,
      "font-style": companyFontStyle,
    },
    // Description Style
    " .responsive-block-editor-addons-tm__desc": {
      "font-size": generateCSSUnit(descFontSize, "px"),
      "font-family": descFontFamily,
      "font-weight": descFontWeight,
      "line-height": generateCSSUnit(descLineHeight, descLineHeightType),
      color: descTypographyColor,
      "margin-bottom": generateCSSUnit(descBottomSpacing, "px"),
      "text-transform": descTextTransform,
      "text-decoration": descTextDecoration,
      "font-style": descFontStyle,
    },
    " .responsive-block-editor-addons-testimonial__wrap.responsive-block-editor-addons-tm__bg-type-color .responsive-block-editor-addons-tm__overlay": {
      "background-color":
        backgroundType == "color" ? backgroundColor : undefined,
    },
    " .responsive-block-editor-addons-testimonial__wrap.responsive-block-editor-addons-tm__bg-type-image .responsive-block-editor-addons-tm__overlay": {
      "background-position": getImagePostionCSS(backgroundPositionFocal),
      "background-attachment": backgroundAttachment,
      "background-repeat": backgroundRepeat,
      "background-size": backgroundSize,
      "background-image": backgroundType === "image" && overlayType === "gradient"
        ? backgroundImageEffect
        : backgroundType === "gradient"
        ? generateBackgroundImageEffect(
            `${hexToRgba(backgroundColor1 || "#fff", imgopacity || 0)}`,
            `${hexToRgba(backgroundColor2 || "#fff", imgopacity || 0)}`,
            gradientDirection,
            colorLocation1,
            colorLocation2
          )
        : backgroundType === "image"
        ? updatedBackgroundImage
        : undefined,
      opacity: backgroundType === "image" ? imgopacity : '',
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
      "border-top-left-radius": generateCSSUnit(blockTopRadius, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadius, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadius, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadius, "px"),
    };
  } else {
    selectors[
      " .responsive-block-editor-addons-testimonial__wrap .responsive-block-editor-addons-tm__content"
    ] = {
      "border-top-left-radius": generateCSSUnit(blockTopRadius, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadius, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadius, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadius, "px"),
    };
    mobile_selectors[
      " .responsive-block-editor-addons-testimonial__wrap .responsive-block-editor-addons-tm__content"
    ] = {
      "border-top-left-radius": generateCSSUnit(blockTopRadiusMobile, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadiusMobile, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusMobile, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusMobile, "px"),
    };
    tablet_selectors[
      " .responsive-block-editor-addons-testimonial__wrap .responsive-block-editor-addons-tm__content"
    ] = {
      "border-top-left-radius": generateCSSUnit(blockTopRadiusTablet, "px"),
      "border-top-right-radius": generateCSSUnit(blockRightRadiusTablet, "px"),
      "border-bottom-right-radius": generateCSSUnit(blockBottomRadiusTablet, "px"),
      "border-bottom-left-radius": generateCSSUnit(blockLeftRadiusTablet, "px"),
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
    "opacity": hideWidgetMobile && isOn ? 0.2 : 1,
    // "padding": generateCSSUnit(blockPaddingMobile, "px"),
    'padding-top': generateCSSUnit(blockTopPaddingMobile, "px"),
    'padding-right': generateCSSUnit(blockRightPaddingMobile, "px"),
    'padding-bottom': generateCSSUnit(blockBottomPaddingMobile, "px"),
    'padding-left': generateCSSUnit(blockLeftPaddingMobile, "px"),
    'margin-top': generateCSSUnit(blockTopMarginMobile, "px"),
    'margin-right': generateCSSUnit(blockRightMarginMobile, "px"),
    'margin-bottom': generateCSSUnit(blockBottomMarginMobile, "px"),
    'margin-left': generateCSSUnit(blockLeftMarginMobile, "px"),
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
    " .responsive-block-editor-addons-testimonial__wrap .responsive-block-editor-addons-tm__image img": {
      "width": generateCSSUnit(imageWidthMobile, "px"),
      "max-width": generateCSSUnit(imageWidthMobile, "px"),
    },
    " .responsive-block-editor-addons-tm__desc": {
      "font-size": generateCSSUnit(descFontSizeMobile, descFontSizeType) + "!important",
      "line-height": generateCSSUnit(descLineHeightMobile, descLineHeightType),
      "margin-bottom": generateCSSUnit(descBottomSpacingMobile, "px"),
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
      "margin-bottom": generateCSSUnit(nameBottomSpacingMobile, "px"),
    },
    " .responsive-block-editor-addons-tm__content": {
      "text-align": headingAlignMobile,
      padding: generateCSSUnit(contentPaddingMobile, "px"),
    },
    " .responsive-block-editor-addons-testimonial__wrap.responsive-block-editor-addons-tm__bg-type-image .responsive-block-editor-addons-tm__overlay": {
      "background-position": getImagePostionCSS(backgroundPositionFocalMobile),
      "background-size": backgroundSizeMobile,
    },
    " .responsive-block-editor-addons-star-rating": {
      'padding-top': generateCSSUnit(starTopPaddingMobile, "px"),
			'padding-right': generateCSSUnit(starRightPaddingMobile, "px"),
			'padding-bottom': generateCSSUnit(starBottomPaddingMobile, "px"),
			'padding-left': generateCSSUnit(starLeftPaddingMobile, "px"),
			'margin-top': generateCSSUnit(starTopMarginMobile, "px"),
			'margin-right': generateCSSUnit(starRightMarginMobile, "px"),
			'margin-bottom': generateCSSUnit(starBottomMarginMobile, "px"),
			'margin-left': generateCSSUnit(starLeftMarginMobile, "px"),
    },
  };

  var tablet_selectors = {
    " ": {
      "opacity": hideWidgetTablet && isOn ? 0.2 : 1,
      // "padding": generateCSSUnit(blockPaddingTablet, "px"),
      'padding-top': generateCSSUnit(blockTopPaddingTablet, "px"),
      'padding-right': generateCSSUnit(blockRightPaddingTablet, "px"),
      'padding-bottom': generateCSSUnit(blockBottomPaddingTablet, "px"),
      'padding-left': generateCSSUnit(blockLeftPaddingTablet, "px"),
      'margin-top': generateCSSUnit(blockTopMarginTablet, "px"),
      'margin-right': generateCSSUnit(blockRightMarginTablet, "px"),
      'margin-bottom': generateCSSUnit(blockBottomMarginTablet, "px"),
      'margin-left': generateCSSUnit(blockLeftMarginTablet, "px"),
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
    " .responsive-block-editor-addons-testimonial__wrap .responsive-block-editor-addons-tm__image img": {
      "width": generateCSSUnit(imageWidthTablet, "px"),
      "max-width": generateCSSUnit(imageWidthTablet, "px"),
    },
    " .responsive-block-editor-addons-tm__desc": {
      "font-size": generateCSSUnit(descFontSizeTablet, descFontSizeType)  + "!important",
      "line-height": generateCSSUnit(descLineHeightTablet, descLineHeightType),
      "margin-bottom": generateCSSUnit(descBottomSpacingTablet, "px"),
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
      "margin-bottom": generateCSSUnit(nameBottomSpacingTablet, "px"),
    },
    " .responsive-block-editor-addons-tm__content": {
      padding: generateCSSUnit(contentPaddingTablet, "px"),
      "text-align": "center",
    },
    " .responsive-block-editor-addons-tm__content": {
      "text-align": headingAlignTablet,
    },
    " .responsive-block-editor-addons-testimonial__wrap.responsive-block-editor-addons-tm__bg-type-image .responsive-block-editor-addons-tm__overlay": {
      "background-position": getImagePostionCSS(backgroundPositionFocalTablet),
      "background-size": backgroundSizeTablet,
    },
    " .responsive-block-editor-addons-star-rating": {
      'padding-top': generateCSSUnit(starTopPaddingTablet, "px"),
			'padding-right': generateCSSUnit(starRightPaddingTablet, "px"),
			'padding-bottom': generateCSSUnit(starBottomPaddingTablet, "px"),
			'padding-left': generateCSSUnit(starLeftPaddingTablet, "px"),
			'margin-top': generateCSSUnit(starTopMarginTablet, "px"),
			'margin-right': generateCSSUnit(starRightMarginTablet, "px"),
			'margin-bottom': generateCSSUnit(starBottomMarginTablet, "px"),
			'margin-left': generateCSSUnit(starLeftMarginTablet, "px"),
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
