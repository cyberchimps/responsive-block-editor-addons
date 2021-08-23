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
    backTopPadding,
    backBottomPadding,
    backLeftPadding,
    backRightPadding,
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
    ctaVpaddingTablet,
    ctaVpaddingMobile,
    ctaHpadding,
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

  const formattingControls = ["bold", "italic", "strikethrough"];
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
      "border-color": blockBorderColor,
      "border-style": blockBorderStyle,
      "border-width": generateCSSUnit(blockBorderWidth, "px"),
      "border-radius": generateCSSUnit(blockBorderRadius, "px"),
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
      "padding-top": generateCSSUnit(frontTopPadding, "px"),
      "padding-bottom": generateCSSUnit(frontBottomPadding, "px"),
      "padding-left": generateCSSUnit(frontLeftPadding, "px"),
      "padding-right": generateCSSUnit(frontRightPadding, "px"),
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
      "border-color": blockBorderColor,
      "border-style": blockBorderStyle,
      "border-width": generateCSSUnit(blockBorderWidth, "px"),
      "border-radius": generateCSSUnit(blockBorderRadius, "px"),
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
      "padding-top": generateCSSUnit(backTopPadding, "px"),
      "padding-bottom": generateCSSUnit(backBottomPadding, "px"),
      "padding-left": generateCSSUnit(backLeftPadding, "px"),
      "padding-right": generateCSSUnit(backRightPadding, "px"),
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
      "padding-left": generateCSSUnit(ctaHpadding, "px"),
      "padding-right": generateCSSUnit(ctaHpadding, "px"),
      "padding-top": generateCSSUnit(ctaVpadding, "px"),
      "padding-bottom": generateCSSUnit(ctaVpadding, "px"),
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
