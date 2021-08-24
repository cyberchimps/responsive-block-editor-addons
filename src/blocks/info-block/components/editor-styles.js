/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";
import { hexToRgba } from "../../../utils/index.js";

function EditorStyles(props) {
  const {
    block_id,
    resheadingAlign,
    resheadingColor,
    ressubheadingColor,
    resprefixColor,
    resprefixFontSize,
    resprefixFontWeight,
    resprefixLineHeight,
    resheadFontFamily,
    resheadFontSize,
    resheadFontSizeTablet,
    resheadFontSizeMobile,
    resheadFontWeight,
    resheadLineHeight,
    ressubHeadFontFamily,
    ressubHeadFontSize,
    ressubHeadFontSizeTablet,
    ressubHeadFontSizeMobile,
    ressubHeadFontWeight,
    ressubHeadLineHeight,
    resseparatorWidthType,
    resheadSpace,
    resheadSpaceMobile,
    resheadSpaceTablet,
    ressubHeadSpace,
    ressubHeadSpaceMobile,
    ressubHeadSpaceTablet,
    resIconSize,
    resseperatorStyle,
    resseperatorWidth,
    resseperatorColor,
    resseperatorThickness,
    resctaLinkColor,
    resctaFontSize,
    resctaFontWeight,
    ctaColor,
    ctaBackColor,
    ctaVpadding,
    ctaHpadding,
    ctaBorderStyle,
    ctaBorderColor,
    ctaBorderWidth,
    ctaBorderRadius,
    resprefixSpace,
    resprefixSpaceMobile,
    resprefixSpaceTablet,
    iconLeftMargin,
    iconRightMargin,
    iconTopMargin,
    iconBottomMargin,
    iconLeftMarginMobile,
    iconRightMarginMobile,
    iconTopMarginMobile,
    iconBottomMarginMobile,
    iconLeftMarginTablet,
    iconRightMarginTablet,
    iconTopMarginTablet,
    iconBottomMarginTablet,
    imageWidth,
    imageWidthTablet,
    imageWidthMobile,
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
    opacity,
    imgURL,
    ctaHoverColor,
    ctaHoverBackColor,
    ctaHoverBorderColor,
    imagePosition,
    imageRepeat,
    thumbsize,
    backgroundAttachment,
    sepSpace,
    sepSpaceMobile,
    sepSpaceTablet,
    icon_color,
    icon_hcolor,
    resImageBorderColor,
    resImageBorderRadius,
    resImageBorderWidth,
    resImageBorderStyle,
    imageBoxShadowColor,
    imageBoxShadowHOffset,
    imageBoxShadowVOffset,
    imageBoxShadowBlur,
    imageBoxShadowSpread,
    imageBoxShadowPosition,
    alignment,
    imageopacity,
    backgroundColor,
    contentPadding,
    contentPaddingMobile,
    contentPaddingTablet,
    imgiconPosition,
    ctaTextFontFamily,
    ctaTextFontSize,
    ctaTextFontSizeMobile,
    ctaTextFontSizeTablet,
    ctaTextFontWeight,
    ctaTextLineHeight,
    ctaBottomMargin,
    ctaBottomMarginMobile,
    ctaBottomMarginTablet,
    hoverboxShadowColor,
    hoverboxShadowHOffset,
    hoverboxShadowVOffset,
    hoverboxShadowBlur,
    hoverboxShadowSpread,
    hoverboxShadowPosition,
    iconBackgroundColor,
    iconBackgroundHoverColor,
    iconBackgroundType,
    iconBorderRadius,
    iconBorderWidth,
    iconPadding,
    backgroundImage,
    backgroundImagePosition,
    backgroundImageRepeat,
    backgroundImageSize,
    ctaHpaddingTablet,
    ctaHpaddingMobile,
    ctaVpaddingTablet,
    ctaVpaddingMobile,
    buttonbackgroundColor1,
    buttonbackgroundColor2,
    buttoncolorLocation1,
    buttoncolorLocation2,
    buttongradientDirection,
    buttonbackgroundType,
    buttonHbackgroundType,
    zIndex,
  } = props.attributes;

  var boxShadowPositionCSS = boxShadowPosition;
  if ("outset" === boxShadowPosition) {
    boxShadowPositionCSS = "";
  }

  let newopacity = opacity / 100;

  let imgopacity = imageopacity / 100;

  var imageBoxShadowPositionCSS = imageBoxShadowPosition;
  let updatedButtonBackgroundhColor = "";

  if ("outset" === imageBoxShadowPosition) {
    imageBoxShadowPositionCSS = "";
  }
 
  var hoverboxShadowPositionCSS = hoverboxShadowPosition;
  if ("outset" === hoverboxShadowPosition) {
    hoverboxShadowPositionCSS = "";
  }

  let iconBgColor = '';
  if("solid" === iconBackgroundType) {
    iconBgColor = iconBackgroundColor;
  }

  let iconBgHoverColor = '';
  if("solid" === iconBackgroundType) {
    iconBgHoverColor = iconBackgroundHoverColor;
  }

  let iconBgPadding = 0;
  if("none" !== iconBackgroundType) {
    iconBgPadding = generateCSSUnit(iconPadding, "px");
  }

  let iconBorder = 'none';
  if("outline" === iconBackgroundType) {
    iconBorder = `${generateCSSUnit(iconBorderWidth, "px")} solid ${iconBackgroundColor}`;
  }

  let iconHoverBorder = 'none';
  if("outline" === iconBackgroundType) {
    iconHoverBorder = `${generateCSSUnit(iconBorderWidth, "px")} solid ${iconBackgroundHoverColor}`;
  }

  let backgroundImageGradient = '';
  let buttonColor = '';
  if (buttonbackgroundType == "gradient") {
    backgroundImageGradient = `linear-gradient(${buttongradientDirection}deg, ${buttonbackgroundColor1} ${buttoncolorLocation1}%, ${buttonbackgroundColor2} ${buttoncolorLocation2}%)`;
  } else if (buttonbackgroundType == 'color') {
    backgroundImageGradient = '';
    buttonColor = ctaBackColor
  }
  if (buttonHbackgroundType == "color") {
    updatedButtonBackgroundhColor = ctaHoverBackColor;
  } else {
    updatedButtonBackgroundhColor = '';
  }


  var selectors = {
    " ": {
      "z-index": zIndex,
      "border-width": generateCSSUnit(blockBorderWidth, "px"),
      "background-color": `${hexToRgba(
        backgroundColor || "#ffffff",
        newopacity || 0
      )}`,
      padding: generateCSSUnit(contentPadding, "px"),
      "border-color": blockBorderColor,
      "border-style": blockBorderStyle,
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
    },

    ":hover": {
        "box-shadow": `${hoverboxShadowHOffset}px ${hoverboxShadowVOffset}px ${hoverboxShadowBlur}px ${hoverboxShadowSpread}px ${hoverboxShadowColor} ${hoverboxShadowPositionCSS}`,
      },

    " .responsive-block-editor-addons-ifb-image-icon-content.responsive-block-editor-addons-ifb-imgicon-wrap": {
      "margin-bottom": generateCSSUnit(iconBottomMargin, "px"),
      "margin-top": generateCSSUnit(iconTopMargin, "px"),
      "margin-left": generateCSSUnit(iconLeftMargin, "px"),
      "margin-right": generateCSSUnit(iconRightMargin, "px"),
    },

    " .responsive-block-editor-addons-ifb-icon": {
      "width": generateCSSUnit(resIconSize, "px"),
      "height": generateCSSUnit(resIconSize, "px"),
      "padding": iconBgPadding,
      "background-color": iconBgColor,
      "border-radius": generateCSSUnit(iconBorderRadius, "px"),
      "border": iconBorder,
    },

    " .responsive-block-editor-addons-ifb-icon:hover": {
      "background-color": iconBgHoverColor,
      "border": iconHoverBorder,
    },
    
    " .responsive-block-editor-addons-ifb-image-content > img": {
      "border-color": resImageBorderColor,
      "border-radius": generateCSSUnit(resImageBorderRadius, "px"),
      "border-width": generateCSSUnit(resImageBorderWidth, "px"),
      "border-style": resImageBorderStyle,
      "box-shadow":
        generateCSSUnit(imageBoxShadowHOffset, "px") +
        " " +
        generateCSSUnit(imageBoxShadowVOffset, "px") +
        " " +
        generateCSSUnit(imageBoxShadowBlur, "px") +
        " " +
        generateCSSUnit(imageBoxShadowSpread, "px") +
        " " +
        imageBoxShadowColor +
        " " +
        imageBoxShadowPositionCSS,
      opacity: imgopacity,
    },

    " .responsive-block-editor-addons-ifb-separator": {
      "border-width": generateCSSUnit(resseperatorThickness, "px"),
      "border-color": resseperatorColor,
      "border-top-style": resseperatorStyle,
      "width": generateCSSUnit(resseperatorWidth, resseparatorWidthType),
      "margin-bottom": generateCSSUnit(sepSpace, "px"),
    },

    " .responsive-block-editor-addons-ifb-cta-button": {
      "background-color": buttonColor,
      "background-image": backgroundImageGradient,
      "border-color": ctaBorderColor,
    },

    " .responsive-block-editor-addons-ifb-cta-button .responsive-block-editor-addons-inline-editing": {
      "color": ctaColor,
    },

    " .responsive-block-editor-addons-ifb-cta-button:hover": {
      "background-color": updatedButtonBackgroundhColor,
      "border-color": ctaHoverBorderColor,
      "background-image": buttonHbackgroundType == 'color' ? 'none' : backgroundImageGradient,
    },

    " .responsive-block-editor-addons-ifb-cta-button:hover .responsive-block-editor-addons-inline-editing": {
      "color": ctaHoverColor,
    },

    " .responsive-block-editor-addons-ifb-icon svg": {
      "fill": icon_color,
    },

    " .responsive-block-editor-addons-ifb-icon:hover svg": {
      "fill": icon_hcolor,
    },

    " .responsive-block-editor-addons-infobox__content-wrap": {
      "text-align": (imgiconPosition == 'above-title' || imgiconPosition == 'below-title') ?resheadingAlign:'',
    },

    " .responsive-block-editor-addons-infobox__content-wrap .responsive-block-editor-addons-ifb-title": {
      "font-size": generateCSSUnit(resheadFontSize, "px !important"),
    },

    " .responsive-block-editor-addons-infobox__content-wrap .responsive-block-editor-addons-ifb-desc": {
      "font-size": generateCSSUnit(ressubHeadFontSize, "px !important"),
    },

    " .responsive-block-editor-addons-ifb-image-content img": {
      "width": generateCSSUnit(imageWidth, "px"),
      "max-width": generateCSSUnit(imageWidth, "px"),
    },

    " .responsive-block-editor-addons-cta-image": {
      "background-image": `url(${backgroundImage})`,
      "background-position": backgroundImagePosition,
      "background-repeat": backgroundImageRepeat,
      "background-size": backgroundImageSize,
      "background-attachment": backgroundAttachment,
    },

    " .responsive-block-editor-addons-ifb-title-prefix": {
      "color": resprefixColor,
      "font-size": generateCSSUnit(resprefixFontSize, "px"),
      "font-weight": resprefixFontWeight,
      "line-height": resprefixLineHeight,
      "margin-bottom": generateCSSUnit(resprefixSpace, "px"),
    },

    " .responsive-block-editor-addons-ifb-title": {
      "color": resheadingColor,
      "font-family": resheadFontFamily,
      "font-weight": resheadFontWeight,
      "line-height": resheadLineHeight,
      "margin-bottom": generateCSSUnit(resheadSpace, "px"),
    },

    " .responsive-block-editor-addons-ifb-desc": {
      "color": ressubheadingColor,
      "font-family": ressubHeadFontFamily,
      "font-weight": ressubHeadFontWeight,
      "line-height": ressubHeadLineHeight,
      "margin-bottom": generateCSSUnit(ressubHeadSpace, "px"),
    },

    " .responsive-block-editor-addons-infobox-cta-link": {
      "color": resctaLinkColor,
      "padding-top": generateCSSUnit(ctaVpadding, "px"),
      "padding-bottom": generateCSSUnit(ctaVpadding, "px"),
      "padding-left": generateCSSUnit(ctaHpadding, "px"),
      "padding-right": generateCSSUnit(ctaHpadding, "px"),
      "font-size": generateCSSUnit(ctaTextFontSize, "px"),
      "font-weight": ctaTextFontWeight,
      "font-family": ctaTextFontFamily,
      "line-height": ctaTextLineHeight
    },

    " .responsive-block-editor-addons-inline-editing ": {
      "color": resctaLinkColor,
      "font-size": generateCSSUnit(resctaFontSize, "px"),
    },

    " .responsive-block-editor-addons-infobox-cta-link.responsive-block-editor-addons-ifb-cta-button": {
      "border-width": generateCSSUnit(ctaBorderWidth, "px"),
      "border-style": ctaBorderStyle,
      "border-radius": generateCSSUnit(ctaBorderRadius, "px"),
      "padding-top": generateCSSUnit(ctaVpadding, "px"),
      "padding-bottom": generateCSSUnit(ctaVpadding, "px"),
      "padding-left": generateCSSUnit(ctaHpadding, "px"),
      "padding-right": generateCSSUnit(ctaHpadding, "px"),
      "font-size": generateCSSUnit(resctaFontSize, "px"),
      "font-weight": resctaFontWeight,
    },
    " .responsive-block-editor-addons-ifb-cta": {
      "margin-bottom": generateCSSUnit(ctaBottomMargin, "px"),
    }
  };

  var mobile_selectors = {
    " ": {
      padding: generateCSSUnit(contentPaddingMobile, "px"),
    },
    " .responsive-block-editor-addons-infobox__content-wrap.responsive-block-editor-addons-infobox-stacked-mobile .responsive-block-editor-addons-ifb-content": {
      "text-align": alignment,
    },

    " .responsive-block-editor-addons-infobox__content-wrap .responsive-block-editor-addons-ifb-title": {
      "font-size": generateCSSUnit(resheadFontSizeMobile, "px"),
    },

    " .responsive-block-editor-addons-infobox__content-wrap .responsive-block-editor-addons-ifb-desc": {
      "font-size": generateCSSUnit(ressubHeadFontSizeMobile, "px !important"),
    },

    " .responsive-block-editor-addons-ifb-image-content img": {
      "width": generateCSSUnit(imageWidthMobile, "px"),
      "max-width": generateCSSUnit(imageWidthMobile, "px"),
    },
    " .responsive-block-editor-addons-infobox-cta-link": {
      "font-size": generateCSSUnit(ctaTextFontSizeMobile, "px"),
    },
    " .responsive-block-editor-addons-ifb-image-icon-content.responsive-block-editor-addons-ifb-imgicon-wrap": {
      "margin-bottom": generateCSSUnit(iconBottomMarginMobile, "px"),
      "margin-top": generateCSSUnit(iconTopMarginMobile, "px"),
      "margin-left": generateCSSUnit(iconLeftMarginMobile, "px"),
      "margin-right": generateCSSUnit(iconRightMarginMobile, "px"),
    },
    " .responsive-block-editor-addons-ifb-title-prefix": {
      "margin-bottom": generateCSSUnit(resprefixSpaceMobile, "px"),
    },
    " .responsive-block-editor-addons-ifb-title": {
      "margin-bottom": generateCSSUnit(resheadSpaceMobile, "px"),
    },
    " .responsive-block-editor-addons-ifb-separator": {
      "margin-bottom": generateCSSUnit(sepSpaceMobile, "px"),
    },
    " .responsive-block-editor-addons-ifb-desc": {
      "margin-bottom": generateCSSUnit(ressubHeadSpaceMobile, "px"),
    },
    " .responsive-block-editor-addons-ifb-cta": {
      "margin-bottom": generateCSSUnit(ctaBottomMarginMobile, "px"),
    },
    " .responsive-block-editor-addons-infobox-cta-link.responsive-block-editor-addons-ifb-cta-button": {
      "padding-top": generateCSSUnit(ctaVpaddingMobile, "px"),
      "padding-bottom": generateCSSUnit(ctaVpaddingMobile, "px"),
      "padding-left": generateCSSUnit(ctaHpaddingMobile, "px"),
      "padding-right": generateCSSUnit(ctaHpaddingMobile, "px"),
    },
  };

  var tablet_selectors = {
    " ": {
      padding: generateCSSUnit(contentPaddingTablet, "px"),
    },
    " .responsive-block-editor-addons-infobox__content-wrap.responsive-block-editor-addons-infobox-stacked-tablet .responsive-block-editor-addons-ifb-content": {
      "text-align": alignment,
    },

    " .responsive-block-editor-addons-infobox__content-wrap .responsive-block-editor-addons-ifb-title": {
      "font-size": generateCSSUnit(resheadFontSizeTablet, "px"),
    },

    " .responsive-block-editor-addons-infobox__content-wrap .responsive-block-editor-addons-ifb-desc": {
      "font-size": generateCSSUnit(ressubHeadFontSizeTablet, "px !important"),
    },

    " .responsive-block-editor-addons-ifb-image-content img": {
      "width": generateCSSUnit(imageWidthTablet, "px"),
      "max-width": generateCSSUnit(imageWidthTablet, "px"),
    },
    " .responsive-block-editor-addons-infobox-cta-link": {
      "font-size": generateCSSUnit(ctaTextFontSizeTablet, "px"),
    },
    " .responsive-block-editor-addons-ifb-image-icon-content.responsive-block-editor-addons-ifb-imgicon-wrap": {
      "margin-bottom": generateCSSUnit(iconBottomMarginTablet, "px"),
      "margin-top": generateCSSUnit(iconTopMarginTablet, "px"),
      "margin-left": generateCSSUnit(iconLeftMarginTablet, "px"),
      "margin-right": generateCSSUnit(iconRightMarginTablet, "px"),
    },
    " .responsive-block-editor-addons-ifb-title-prefix": {
      "margin-bottom": generateCSSUnit(resprefixSpaceTablet, "px"),
    },
    " .responsive-block-editor-addons-ifb-title": {
      "margin-bottom": generateCSSUnit(resheadSpaceTablet, "px"),
    },
    " .responsive-block-editor-addons-ifb-separator": {
      "margin-bottom": generateCSSUnit(sepSpaceTablet, "px"),
    },
    " .responsive-block-editor-addons-ifb-desc": {
      "margin-bottom": generateCSSUnit(ressubHeadSpaceTablet, "px"),
    },
    " .responsive-block-editor-addons-ifb-cta": {
      "margin-bottom": generateCSSUnit(ctaBottomMarginTablet, "px"),
    },
    " .responsive-block-editor-addons-infobox-cta-link.responsive-block-editor-addons-ifb-cta-button": {
      "padding-top": generateCSSUnit(ctaVpaddingTablet, "px"),
      "padding-bottom": generateCSSUnit(ctaVpaddingTablet, "px"),
      "padding-left": generateCSSUnit(ctaHpaddingTablet, "px"),
      "padding-right": generateCSSUnit(ctaHpaddingTablet, "px"),
    },
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-info-block.block-${block_id}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
