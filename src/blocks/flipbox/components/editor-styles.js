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
    buttonBorderRadius,
    buttonHpadding,
    buttonVpadding,
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
    stack
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
  let btnColor = buttonColor;
  let btnOpacity = buttonopacity;
  if (buttonbackgroundType == "gradient") {
    backgroundImageGradient = `linear-gradient(${buttongradientDirection}deg, ${buttonbackgroundColor1} ${buttoncolorLocation1}%, ${buttonbackgroundColor2} ${buttoncolorLocation2}%)`;
  } else if (buttonbackgroundType == "color") {
    btnColor = buttonColor;
    btnOpacity = buttonopacity;
  }

  let backgroundHoverImageGradient = "";
  let btnHColor = buttonHColor;
  let btnHOpacity = buttonHopacity;
  if (buttonHbackgroundType == "gradient") {
    backgroundHoverImageGradient = `linear-gradient(${buttonHgradientDirection}deg, ${buttonHbackgroundColor1} ${buttonHcolorLocation1}%, ${buttonHbackgroundColor2} ${buttonHcolorLocation2}%)`;
  } else if (buttonHbackgroundType == "color") {
    btnHColor = buttonHColor;
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
      "border-color": borderColor,
      "border-style": borderStyle,
      "border-width": generateCSSUnit(borderWidth, "px"),
      "border-radius": generateCSSUnit(borderRadius, "px"),
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
      "padding-top": generateCSSUnit(topPadding, "px"),
      "padding-bottom": generateCSSUnit(bottomPadding, "px"),
      "padding-left": generateCSSUnit(leftPadding, "px"),
      "padding-right": generateCSSUnit(rightPadding, "px"),
    },
    " .wp-block-responsive-block-editor-addons-flip-box__title": {
      color: frontTextColor,
    },
    " .wp-block-responsive-block-editor-addons-flip-box__subtitle": {
      color: frontTextColor,
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
      "border-color": borderColor,
      "border-style": borderStyle,
      "border-width": generateCSSUnit(borderWidth, "px"),
      "border-radius": generateCSSUnit(borderRadius, "px"),
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
      "padding-top": generateCSSUnit(backtopPadding, "px"),
      "padding-bottom": generateCSSUnit(backbottomPadding, "px"),
      "padding-left": generateCSSUnit(backleftPadding, "px"),
      "padding-right": generateCSSUnit(backrightPadding, "px"),
    },
    " .wp-block-responsive-block-editor-addons-flip-box__backtitle": {
      color: backTextColor,
    },
    " .wp-block-responsive-block-editor-addons-flip-box__backsubtitle": {
      color: backTextColor,
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
      "border-radius": generateCSSUnit(buttonBorderRadius, "px"),
      "padding-left": generateCSSUnit(buttonHpadding, "px"),
      "padding-right": generateCSSUnit(buttonHpadding, "px"),
      "padding-top": generateCSSUnit(buttonVpadding, "px"),
      "padding-bottom": generateCSSUnit(buttonVpadding, "px"),
      "background-image": backgroundImageGradient,
      "background-color": btnColor + "!important",
      opacity: btnOpacity / 100,
      color: buttonTextColor + "!important",
    },
    " .wp-block-responsive-block-editor-addons-flipbox-item__button.wp-block-button__link:hover": {
      "background-image": backgroundHoverImageGradient,
      "background-color": btnHColor + "!important",
      opacity: btnHOpacity / 100,
      color: buttonHTextColor + "!important",
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
    }
  };

  var tablet_selectors = {
    " .has-medium-gutter.responsive-flipbox-columns__stack-tablet > *:not(.block-editor-inner-blocks)": {
      "min-width": "100%",
      "max-width": "100%",
    }
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-flipbox.block-${props.clientId}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
