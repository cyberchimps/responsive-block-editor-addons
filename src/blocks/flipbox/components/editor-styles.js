/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";
import { hexToRgba } from "../../../utils/index.js";

function EditorStyles(props) {
  const {
    block_id,
    flipboxArray,
    count,
    gutter,
    contentAlign,
    frontTextColor,
    backTextColor,
    backBackgroundColor,
    frontBackgroundColor,
    transitionSpeed,
    colorButtonSelected,
    frontTitle,
    frontContent,
    iconSize,
    iconColor,
    flipStyleSelected,
    blockBorderStyle,
    blockBorderWidth,
    blockBorderRadius,
    blockBorderColor,
    borderStyle, // For compatibility with v1.3.2.
    borderWidth, // For compatibility with v1.3.2.
    borderRadius, // For compatibility with v1.3.2.
    borderColor, // For compatibility with v1.3.2.
    boxShadowColor,
    boxShadowHOffset,
    boxShadowVOffset,
    boxShadowBlur,
    boxShadowSpread,
    boxShadowPosition,
    height,
    topMargin,
    bottomMargin,
    frontTopPadding,
    frontBottomPadding,
    frontLeftPadding,
    frontRightPadding,
    topPadding, // For compatibility with v1.3.2.
    bottomPadding, // For compatibility with v1.3.2.
    leftPadding, // For compatibility with v1.3.2.
    rightPadding, // For compatibility with v1.3.2.
    backTopPadding,
    backBottomPadding,
    backLeftPadding,
    backRightPadding,
    backtopPadding, // For compatibility with v1.3.2.
    backbottomPadding, // For compatibility with v1.3.2.
    backleftPadding, // For compatibility with v1.3.2.
    backrightPadding, // For compatibility with v1.3.2.
    topMarginMobile,
    bottomMarginMobile,
    frontTopPaddingMobile,
    frontBottomPaddingMobile,
    frontLeftPaddingMobile,
    frontRightPaddingMobile,
    backTopPaddingMobile,
    backBottomPaddingMobile,
    backLeftPaddingMobile,
    backRightPaddingMobile,
    topMarginTablet,
    bottomMarginTablet,
    frontTopPaddingTablet,
    frontBottomPaddingTablet,
    frontLeftPaddingTablet,
    frontRightPaddingTablet,
    backTopPaddingTablet,
    backBottomPaddingTablet,
    backLeftPaddingTablet,
    backRightPaddingTablet,
    backIconColor,
    backIconSize,
    showFrontIcon,
    showFrontTitle,
    showFrontSubtitle,
    showBackIcon,
    showBackTitle,
    showBackSubtitle,
    showBackButton,
    backgroundImage,
    backgroundPosition,
    backgroundAttachment,
    backgroundRepeat,
    backgroundSize,
    colorOpacity,
    imageOpacity,
    backImageOpacity,
    backBackgroundImage,
    backBackgroundPosition,
    backBackgroundAttachment,
    backBackgroundRepeat,
    backBackgroundSize,
    backColorOpacity,
    buttonColor,
    buttonTextColor,
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
    flipBoxGutterGap,
    stack,
    frontTitleFontSize,
    frontTitleFontSizeMobile,
    frontTitleFontSizeTablet,
    frontTitleFontWeight,
    frontTitleLineHeight,
    frontTitleFontFamily,
    frontSubtitleFontFamily,
    frontSubtitleFontSize,
    frontSubtitleFontSizeMobile,
    frontSubtitleFontSizeTablet,
    frontSubtitleFontWeight,
    frontSubtitleLineHeight,
    backTitleFontSize,
    backTitleFontSizeMobile,
    backTitleFontSizeTablet,
    backTitleFontWeight,
    backTitleLineHeight,
    backTitleFontFamily,
    backSubtitleFontFamily,
    backSubtitleFontSize,
    backSubtitleFontSizeMobile,
    backSubtitleFontSizeTablet,
    backSubtitleFontWeight,
    backSubtitleLineHeight,
    backButtonFontSize,
    backButtonFontSizeMobile,
    backButtonFontSizeTablet,
    backButtonFontWeight,
    backButtonLineHeight,
    backButtonFontFamily,
    ctaVpadding,
    buttonVPadding, // For compatibility with v1.3.2.
    ctaVpaddingTablet,
    ctaVpaddingMobile,
    ctaHpadding,
    buttonHPadding, // For compatibility with v1.3.2.
    ctaHpaddingTablet,
    ctaHpaddingMobile,
    ctaBorderStyle,
    ctaBorderWidth,
    ctaBorderRadius,
    ctaHoverColor,
    ctaHoverBorderColor,
    ctaHoverBackColor,
    ctaColor,
    ctaBorderColor,
    ctaBackColor,
    hideWidget,
    hideWidgetTablet,
    hideWidgetMobile,
  } = props.attributes;

  var boxShadowPositionCSS = boxShadowPosition;

  if ("outset" === boxShadowPosition) {
    boxShadowPositionCSS = "";
  }

  let flipStyle = "rotateY(0deg)";
  let flipStyleBack, flipClass;

  if (colorButtonSelected == "back_selected") {
    flipClass = "backSelected";
    if (flipStyleSelected == "LTR") {
      flipStyle = "rotateY(180deg)";
      flipStyleBack = "rotateY(180deg)";
    }
    if (flipStyleSelected == "RTL") {
      flipStyle = "rotateY(-180deg)";
      flipStyleBack = "rotateY(-180deg)";
    }
    if (flipStyleSelected == "BTT") {
      flipStyle = "rotateX(180deg)";
      flipStyleBack = "rotateX(180deg)";
    }
    if (flipStyleSelected == "TTB") {
      flipStyle = "rotateX(-180deg)";
      flipStyleBack = "rotateX(-180deg)";
    }
  } else {
    flipClass = "frontSelected";
    if (flipStyleSelected == "LTR") {
      flipStyle = "rotateY(0deg)";
      flipStyleBack = "rotateY(180deg)";
    }
    if (flipStyleSelected == "RTL") {
      flipStyle = "rotateY(0deg)";
      flipStyleBack = "rotateY(-180deg)";
    }
    if (flipStyleSelected == "BTT") {
      flipStyle = "rotateX(0deg)";
      flipStyleBack = "rotateX(180deg)";
    }
    if (flipStyleSelected == "TTB") {
      flipStyle = "rotateX(0deg)";
      flipStyleBack = "rotateX(-180deg)";
    }
  }

  const formattingControls = ["core/bold", "core/italic", "core/strikethrough"];
  const transitionSpeedSec = transitionSpeed / 10;

  const flipboxTransition =
    transitionSpeed < 10
      ? "transform 0." + transitionSpeed + "s"
      : "transform " + transitionSpeedSec + "s";

  let coloropacity = colorOpacity / 100;
  let backcoloropacity = backColorOpacity / 100;
  let imageopacity = imageOpacity / 100;
  let backimageopacity = backImageOpacity / 100;

  let backgroundFront = "";
  let backgroundBack = "";
  if (backgroundImage) {
    backgroundFront = `linear-gradient(${hexToRgba(
      frontBackgroundColor || "#ffffff",
      coloropacity || 0
    )}, ${hexToRgba(
      frontBackgroundColor || "#ffffff",
      coloropacity || 0
    )}),url(${backgroundImage});`;
  }
  if (backBackgroundImage) {
    backgroundBack = `linear-gradient(${hexToRgba(
      backBackgroundColor || "#ffffff",
      backcoloropacity || 0
    )}, ${hexToRgba(
      backBackgroundColor || "#ffffff",
      backcoloropacity || 0
    )}),url(${backBackgroundImage});`;
  }

  let backgroundImageGradient = "";
  let btnColor = ctaBackColor;
  let btnOpacity = buttonopacity;
  if (buttonbackgroundType == "gradient") {
    backgroundImageGradient = `linear-gradient(${buttongradientDirection}deg, ${buttonbackgroundColor1} ${buttoncolorLocation1}%, ${buttonbackgroundColor2} ${buttoncolorLocation2}%)`;
  } else if (buttonbackgroundType == "color") {
    btnColor = ctaBackColor;
    btnOpacity = buttonopacity;
  }

  let backgroundHoverImageGradient = "";
  let btnHColor = ctaHoverBackColor;
  let btnHOpacity = buttonHopacity;
  if (buttonHbackgroundType == "gradient") {
    backgroundHoverImageGradient = `linear-gradient(${buttonHgradientDirection}deg, ${buttonHbackgroundColor1} ${buttonHcolorLocation1}%, ${buttonHbackgroundColor2} ${buttonHcolorLocation2}%)`;
  } else if (buttonHbackgroundType == "color") {
    btnHColor = ctaHoverBackColor;
    btnHOpacity = buttonHopacity;
  }

  var selectors = {
    " ": {
      "opacity": hideWidget ? 0.2 : 1,
      "margin-bottom": generateCSSUnit(bottomMargin, "px"),
      "margin-top": generateCSSUnit(topMargin, "px"),
    },
    " .wp-block-responsive-block-editor-addons-flip-box": {
      height: generateCSSUnit(height, "px"),
    },
    " .wp-block-responsive-block-editor-addons-flip-box .flip-box-inner": {
      transition: flipboxTransition,
      transform: flipStyle,
    },
    " .wp-block-responsive-block-editor-addons-flip-box .flip-box-front": {
      "background-image": backgroundFront,
      "background-position": backgroundPosition,
      "background-attachment": backgroundAttachment,
      "background-repeat": backgroundRepeat,
      "background-size": backgroundSize,
      "background-color": `${hexToRgba(
        frontBackgroundColor || "#ffffff",
        coloropacity
      )}`,
      color: frontTextColor,
      "border-color": borderColor !== 'empty' && blockBorderColor === '' ? borderColor : blockBorderColor, // For compatibility with v1.3.2.
      "border-style": borderStyle !== 'empty' && blockBorderStyle === 'none' ? borderStyle : blockBorderStyle, // For compatibility with v1.3.2.
      "border-width": borderWidth !== 999 && blockBorderWidth === 2 ? generateCSSUnit(borderWidth, "px") : generateCSSUnit(blockBorderWidth, "px"), // For compatibility with v1.3.2.
      "border-radius": borderRadius !== 999 && !blockBorderRadius ? generateCSSUnit(borderRadius, "px") : generateCSSUnit(blockBorderRadius, "px"), // For compatibility with v1.3.2.
      "box-shadow":
        generateCSSUnit(boxShadowHOffset, "px") +
        " " +
        generateCSSUnit(boxShadowVOffset, "px") +
        " " +
        generateCSSUnit(boxShadowBlur, "px") +
        " " +
        generateCSSUnit(boxShadowSpread, "px") +
        " " +
        boxShadowColor +
        " " +
        boxShadowPositionCSS,
      height: generateCSSUnit(height, "px"),
      "padding-top": topPadding !== 999 && frontTopPadding === 0 ? generateCSSUnit(topPadding, "px") : generateCSSUnit(frontTopPadding, "px"), // For compatibility with v1.3.2.
      "padding-bottom": bottomPadding !== 999 && frontBottomPadding === 0 ? generateCSSUnit(bottomPadding, "px") : generateCSSUnit(frontBottomPadding, "px"), // For compatibility with v1.3.2.
      "padding-left": leftPadding !== 999 && frontLeftPadding === 0 ? generateCSSUnit(leftPadding, "px") : generateCSSUnit(frontLeftPadding, "px"), // For compatibility with v1.3.2.
      "padding-right": rightPadding !== 999 && frontRightPadding === 0 ? generateCSSUnit(rightPadding, "px") : generateCSSUnit(frontRightPadding, "px"), // For compatibility with v1.3.2.
    },
    " .wp-block-responsive-block-editor-addons-flip-box__title": {
      color: frontTextColor,
      "font-family": frontTitleFontFamily,
      "font-size": generateCSSUnit(frontTitleFontSize, "px"),
      "font-weight": frontTitleFontWeight,
      "line-height": frontTitleLineHeight,
    },
    " .wp-block-responsive-block-editor-addons-flip-box__subtitle": {
      color: frontTextColor,
      "font-family": frontSubtitleFontFamily,
      "font-size": generateCSSUnit(frontSubtitleFontSize, "px"),
      "font-weight": frontSubtitleFontWeight,
      "line-height": frontSubtitleLineHeight,
    },
    " .wp-block-responsive-block-editor-addons-flip-box .flip-box-inner .flip-box-back": {
      "background-image": backgroundBack,
      "background-position": backBackgroundPosition,
      "background-attachment": backBackgroundAttachment,
      "background-repeat": backBackgroundRepeat,
      "background-size": backBackgroundSize,
      "background-color": `${hexToRgba(
        backBackgroundColor || "#ffffff",
        backcoloropacity
      )}`,
      color: backTextColor,
      transform: flipStyleBack,
      "border-color": borderColor !== 'empty' && blockBorderColor === '' ? borderColor : blockBorderColor, // For compatibility with v1.3.2.
      "border-style": borderStyle !== 'empty' && blockBorderStyle === 'none' ? borderStyle : blockBorderStyle, // For compatibility with v1.3.2.
      "border-width": borderWidth !== 999 && blockBorderWidth === 2 ? generateCSSUnit(borderWidth, "px") : generateCSSUnit(blockBorderWidth, "px"), // For compatibility with v1.3.2.
      "border-radius": borderRadius !== 999 && !blockBorderRadius ? generateCSSUnit(borderRadius, "px") : generateCSSUnit(blockBorderRadius, "px"), // For compatibility with v1.3.2.
      "box-shadow":
        generateCSSUnit(boxShadowHOffset, "px") +
        " " +
        generateCSSUnit(boxShadowVOffset, "px") +
        " " +
        generateCSSUnit(boxShadowBlur, "px") +
        " " +
        generateCSSUnit(boxShadowSpread, "px") +
        " " +
        boxShadowColor +
        " " +
        boxShadowPositionCSS,
      height: generateCSSUnit(height, "px"),
      "padding-top": backtopPadding !== 999 && backTopPadding === 0 ? generateCSSUnit(backtopPadding, "px") : generateCSSUnit(backTopPadding, "px"), // For compatibility with v1.3.2.
      "padding-bottom": backbottomPadding !== 999 && backBottomPadding === 0 ? generateCSSUnit(backbottomPadding, "px") : generateCSSUnit(backBottomPadding, "px"), // For compatibility with v1.3.2.
      "padding-left": backleftPadding !== 999 && backLeftPadding === 0 ? generateCSSUnit(backleftPadding, "px") : generateCSSUnit(backLeftPadding, "px"), // For compatibility with v1.3.2.
      "padding-right": backrightPadding !== 999 && backRightPadding === 0 ? generateCSSUnit(backrightPadding, "px") : generateCSSUnit(backRightPadding, "px"), // For compatibility with v1.3.2.
    },
    " .wp-block-responsive-block-editor-addons-flip-box__backtitle": {
      color: backTextColor,
      "font-family": backTitleFontFamily,
      "font-size": generateCSSUnit(backTitleFontSize, "px"),
      "font-weight": backTitleFontWeight,
      "line-height": backTitleLineHeight,
    },
    " .wp-block-responsive-block-editor-addons-flip-box__backsubtitle": {
      color: backTextColor,
      "font-family": backSubtitleFontFamily,
      "font-size": generateCSSUnit(backSubtitleFontSize, "px"),
      "font-weight": backSubtitleFontWeight,
      "line-height": backSubtitleLineHeight,
    },
    " .wp-block-responsive-block-editor-addons-flip-box-dashicon-fronticon-wrap": {
      "font-size": generateCSSUnit(iconSize, "px"),
    },
    " .wp-block-responsive-block-editor-addons-flip-box-dashicon-fronticon-wrap svg": {
      "font-size": generateCSSUnit(iconSize, "px"),
      "fill": iconColor,
      "height": generateCSSUnit(iconSize, "px"),
      "width" : generateCSSUnit(iconSize, "px"),
    },
    " .wp-block-responsive-block-editor-addons-flip-box-dashicon-backicon-wrap": {
      "font-size": generateCSSUnit(backIconSize, "px"),
    },
    " .wp-block-responsive-block-editor-addons-flip-box-dashicon-backicon-wrap svg": {
      "font-size": generateCSSUnit(backIconSize, "px"),
       "fill": backIconColor,
       "height": generateCSSUnit(backIconSize, "px"),
       "width" : generateCSSUnit(backIconSize, "px"),
    },
    " .dashicons": {
      width: `auto !important`,
      height: `auto !important`,
    },
    " .wp-block-responsive-block-editor-addons-flipbox-item__button.wp-block-button__link": {
      "border-style": ctaBorderStyle,
      "border-width": generateCSSUnit(ctaBorderWidth, "px"),
      "border-radius": generateCSSUnit(ctaBorderRadius, "px"),
      "border-color": ctaBorderColor,
      "padding-left": buttonHPadding !== 999 && ctaHpadding === 20 ? generateCSSUnit(buttonHPadding, "px") : generateCSSUnit(ctaHpadding, "px"), // For compatibility with v1.3.2.
      "padding-right": buttonHPadding !== 999 && ctaHpadding === 20 ? generateCSSUnit(buttonHPadding, "px") : generateCSSUnit(ctaHpadding, "px"), // For compatibility with v1.3.2.
      "padding-top": buttonVPadding !== 999 && ctaVpadding === 10 ? generateCSSUnit(buttonVPadding, "px") : generateCSSUnit(ctaVpadding, "px"), // For compatibility with v1.3.2.
      "padding-bottom": buttonVPadding !== 999 && ctaVpadding === 10 ? generateCSSUnit(buttonVPadding, "px") : generateCSSUnit(ctaVpadding, "px"), // For compatibility with v1.3.2.
      "background-image": backgroundImageGradient,
      "background-color": btnColor + "!important",
      opacity: btnOpacity / 100,
      color: ctaColor + "!important",
      "font-family": backButtonFontFamily,
      "font-size": generateCSSUnit(backButtonFontSize, "px"),
      "font-weight": backButtonFontWeight,
      "line-height": backButtonLineHeight,
    },
    " .wp-block-responsive-block-editor-addons-flipbox-item__button.wp-block-button__link:hover": {
      "background-image": buttonHbackgroundType == 'color' ? 'none' : backgroundHoverImageGradient,
      "background-color": btnHColor + "!important",
      "border-color": ctaHoverBorderColor,
      opacity: btnHOpacity / 100,
      color: ctaHoverColor + "!important",
    },
    " .has-medium-gutter.has-2-columns > *:not(.block-editor-inner-blocks)": {
      "max-width": "calc(100% / 2 - " + flipBoxGutterGap + "px)",
    },
    " .has-medium-gutter.has-3-columns > *:not(.block-editor-inner-blocks)": {
      "max-width": "calc(100% / 3 - " + flipBoxGutterGap + "px)",
    },
    " .has-medium-gutter.has-4-columns > *:not(.block-editor-inner-blocks)": {
      "max-width": "calc(100% / 4 - " + flipBoxGutterGap + "px)",
    },
  };

  var mobile_selectors = {
    " .has-medium-gutter.responsive-flipbox-columns__stack-mobile > *:not(.block-editor-inner-blocks)": {
      "min-width": "100%",
      "max-width": "100%",
    },
	" .has-medium-gutter.responsive-flipbox-columns__stack-mobile > .wp-block-responsive-block-editor-addons-flip-box:not(:last-child)": {
		"margin-bottom": generateCSSUnit(flipBoxGutterGap, "px"),
	},
    " ": {
      "margin-bottom": generateCSSUnit(bottomMarginMobile, "px"),
      "margin-top": generateCSSUnit(topMarginMobile, "px"),
      "opacity": hideWidgetMobile ? 0.2 : 1,
    },
    " .wp-block-responsive-block-editor-addons-flip-box .flip-box-front": {
      "padding-top": generateCSSUnit(frontTopPaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(frontBottomPaddingMobile, "px"),
      "padding-left": generateCSSUnit(frontLeftPaddingMobile, "px"),
      "padding-right": generateCSSUnit(frontRightPaddingMobile, "px"),
    },
    " .wp-block-responsive-block-editor-addons-flip-box .flip-box-inner .flip-box-back": {
      "padding-top": generateCSSUnit(backTopPaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(backBottomPaddingMobile, "px"),
      "padding-left": generateCSSUnit(backLeftPaddingMobile, "px"),
      "padding-right": generateCSSUnit(backRightPaddingMobile, "px"),
    },
    " .wp-block-responsive-block-editor-addons-flip-box__title": {
      "font-size": generateCSSUnit(frontTitleFontSizeMobile, "px"),
    },
    " .wp-block-responsive-block-editor-addons-flip-box__subtitle": {
      "font-size": generateCSSUnit(frontSubtitleFontSizeMobile, "px"),
    },
    " .wp-block-responsive-block-editor-addons-flip-box__backtitle": {
      "font-size": generateCSSUnit(backTitleFontSizeMobile, "px"),
    },
    " .wp-block-responsive-block-editor-addons-flip-box__backsubtitle": {
      "font-size": generateCSSUnit(backSubtitleFontSizeMobile, "px"),
    },
    " .wp-block-responsive-block-editor-addons-flipbox-item__button.wp-block-button__link": {
      "font-size": generateCSSUnit(backButtonFontSizeMobile, "px"),
      "padding-left": generateCSSUnit(ctaHpaddingMobile, "px"),
      "padding-right": generateCSSUnit(ctaHpaddingMobile, "px"),
      "padding-top": generateCSSUnit(ctaVpaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(ctaVpaddingMobile, "px"),
    },
  };

  var tablet_selectors = {
    " .has-medium-gutter.responsive-flipbox-columns__stack-tablet > *:not(.block-editor-inner-blocks)": {
      "min-width": "100%",
      "max-width": "100%",
    },
	" .has-medium-gutter.responsive-flipbox-columns__stack-tablet > .wp-block-responsive-block-editor-addons-flip-box:not(:last-child)": {
		"margin-bottom": generateCSSUnit(flipBoxGutterGap, "px"),
	},
    " ": {
      "margin-bottom": generateCSSUnit(bottomMarginTablet, "px"),
      "margin-top": generateCSSUnit(topMarginTablet, "px"),
      "opacity": hideWidgetTablet ? 0.2 : 1,
    },
    " .wp-block-responsive-block-editor-addons-flip-box .flip-box-front": {
      "padding-top": generateCSSUnit(frontTopPaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(frontBottomPaddingTablet, "px"),
      "padding-left": generateCSSUnit(frontLeftPaddingTablet, "px"),
      "padding-right": generateCSSUnit(frontRightPaddingTablet, "px"),
    },
    " .wp-block-responsive-block-editor-addons-flip-box .flip-box-inner .flip-box-back": {
      "padding-top": generateCSSUnit(backTopPaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(backBottomPaddingTablet, "px"),
      "padding-left": generateCSSUnit(backLeftPaddingTablet, "px"),
      "padding-right": generateCSSUnit(backRightPaddingTablet, "px"),
    },
    " .wp-block-responsive-block-editor-addons-flip-box__title": {
      "font-size": generateCSSUnit(frontTitleFontSizeTablet, "px"),
    },
    " .wp-block-responsive-block-editor-addons-flip-box__subtitle": {
      "font-size": generateCSSUnit(frontSubtitleFontSizeTablet, "px"),
    },
    " .wp-block-responsive-block-editor-addons-flip-box__backtitle": {
      "font-size": generateCSSUnit(backTitleFontSizeTablet, "px"),
    },
    " .wp-block-responsive-block-editor-addons-flip-box__backsubtitle": {
      "font-size": generateCSSUnit(backSubtitleFontSizeTablet, "px"),
    },
    " .wp-block-responsive-block-editor-addons-flipbox-item__button.wp-block-button__link": {
      "font-size": generateCSSUnit(backButtonFontSizeTablet, "px"),
      "padding-left": generateCSSUnit(ctaHpaddingTablet, "px"),
      "padding-right": generateCSSUnit(ctaHpaddingTablet, "px"),
      "padding-top": generateCSSUnit(ctaVpaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(ctaVpaddingTablet, "px"),
    },
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-flipbox.block-${props.clientId}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
