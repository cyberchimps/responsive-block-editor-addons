import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";
import {hexToRgba} from "../../../utils";
import generateBackgroundImageEffect from "../../../generateBackgroundImageEffect";
import ResponsiveBlockEditorAddonsIcons from "../../../block-icons";

function EditorStyles(props) {
  const {
    imageAlignment,
    imageAlignmentTablet,
    imageAlignmentMobile,
    captionimageAlignment,
    captionimageAlignmentTablet,
    captionimageAlignmentMobile,
    captionFontFamily,
    captionFontSize,
    captionFontSizeMobile,
    captionFontSizeTablet,
    captionFontWeight,
    captionLineHeight,
    captionLetterSpacing,
    captionTextTransform,
    captionColor,
    captiontopmargin,
    captionbottommargin,
    captionleftmargin,
    captionrightmargin,
    captiontopmarginTablet,
    captionbottommarginTablet,
    captionleftmarginTablet,
    captionrightmarginTablet,
    captiontopmarginMobile,
    captionbottommarginMobile,
    captionleftmarginMobile,
    captionrightmarginMobile,
    block_id,
    imageBorderColor,
    imageBorderRadius,
    imageBorderStyle,
    imageBorderWidth,
    imageboxShadowHOffset,
    imageboxShadowVOffset,
    imageboxShadowBlur,
    imageboxShadowSpread,
    imageboxShadowColor,
    imageboxShadowPosition,
    imagetopmargin,
    imagebottommargin,
    imageleftmargin,
    imagerightmargin,
    imagetopmarginTablet,
    imagebottommarginTablet,
    imageleftmarginTablet,
    imagerightmarginTablet,
    imagetopmarginMobile,
    imagebottommarginMobile,
    imageleftmarginMobile,
    imagerightmarginMobile,
    imageboxShadowHoverColor,
    imageboxShadowHoverHOffset,
    imageboxShadowHoverVOffset,
    imageboxShadowHoverBlur,
    imageboxShadowHoverSpread,
    MaskShape,
    MaskSize,
    MaskPosition,
    MaskRepeat,
    imageObjectFit,
    imageWidth,
    imageHeight,
    imageWidthTablet,
    imageHeightTablet,
    imageWidthMobile,
    imageHeightMobile,
    imageOnHoverImage
  } = props.attributes;
  var base_url = window.location.origin;
  
  var filtervalue =  imageOnHoverImage === "grayscale" ? "grayscale(100%)" : imageOnHoverImage === "blur" ? "blur(5px)" : null;
  var zoomintransition = imageOnHoverImage === "zoomin" || "slide" ? "transform .35s ease-in-out" : null;
  var zoomintransform = imageOnHoverImage === "zoomin" ? "scale(1.1)" : imageOnHoverImage === "slide" ? "translate3d(0px, 0, 0)" : null;
  var slidetranform = imageOnHoverImage === "slide" ? "translate3d(-40px, 0, 0)" : null;
  
  var selectors = {
    
    " .img-main-block": {  
      "text-align": imageAlignment,
    },
    "  .responsive-blocks-image-block": {
      "width":generateCSSUnit(imageWidth, "px"),
      "height":generateCSSUnit(imageHeight, "px"),
      "border-color": imageBorderColor,
      "border-width": generateCSSUnit(imageBorderWidth, "px"),
      "border-radius": generateCSSUnit(imageBorderRadius, "px"),
      "border-style": imageBorderStyle,
      "box-shadow":
        generateCSSUnit(imageboxShadowHOffset, "px") +
        " " +
        generateCSSUnit(imageboxShadowVOffset, "px") +
        " " +
        generateCSSUnit(imageboxShadowBlur, "px") +
        " " +
        generateCSSUnit(imageboxShadowSpread, "px") +
        " " +
        imageboxShadowColor,
      "object-fit":imageObjectFit,  
      "margin-top": generateCSSUnit(imagetopmargin, "px"),
      "margin-bottom": generateCSSUnit(imagebottommargin, "px"),
      "margin-left": generateCSSUnit(imageleftmargin, "px"),
      "margin-right": generateCSSUnit(imagerightmargin, "px"),
      
      "-webkit-mask-image": MaskShape === "none" ? "" : `url("${base_url}/${MaskShape}")`,
      "mask-image": MaskShape === "none" ? "" : `url("${base_url}/${MaskShape}")`,
      "-webkit-mask-position":MaskPosition,
      "mask-position":MaskPosition,
      "-webkit-mask-repeat":MaskRepeat,
      "mask-repeat":MaskRepeat,
      "-webkit-mask-size":MaskSize,
      "mask-size":MaskSize,
      "transform": slidetranform
    },

    " .responsive-img-caption ": {
      "text-align": captionimageAlignment,
      "font-family": captionFontFamily,
      "font-size": generateCSSUnit(captionFontSize, "px"),
      "font-weight": captionFontWeight,
      "line-height": captionLineHeight,
      "letter-spacing": generateCSSUnit(captionLetterSpacing, "px"),
      "text-transform": captionTextTransform,
      "color": captionColor,
      "margin-top": generateCSSUnit(captiontopmargin, "px"),
      "margin-bottom": generateCSSUnit(captionbottommargin, "px"),
      "margin-left": generateCSSUnit(captionleftmargin, "px"),
      "margin-right": generateCSSUnit(captionrightmargin, "px"),
    },
    "  .responsive-blocks-image-block:hover": {
      "box-shadow":
        generateCSSUnit(imageboxShadowHoverHOffset, "px") +
        " " +
        generateCSSUnit(imageboxShadowHoverVOffset, "px") +
        " " +
        generateCSSUnit(imageboxShadowHoverBlur, "px") +
        " " +
        generateCSSUnit(imageboxShadowHoverSpread, "px") +
        " " +
        imageboxShadowHoverColor,
        "filter": filtervalue,
        "transition": zoomintransition,
        "transform": zoomintransform,
    },
    
  };
  var tablet_selectors = {
    " .img-block": {
      "text-align": imageAlignmentTablet,
    },
    "  .responsive-blocks-image-block": {
      "width":generateCSSUnit(imageWidthTablet, "px"),
      "height":generateCSSUnit(imageHeightTablet, "px"),
      "border-color": imageBorderColor,
      "border-width": generateCSSUnit(imageBorderWidth, "px"),
      "border-radius": generateCSSUnit(imageBorderRadius, "px"),
      "border-style": imageBorderStyle,
      "box-shadow":
        generateCSSUnit(imageboxShadowHOffset, "px") +
        " " +
        generateCSSUnit(imageboxShadowVOffset, "px") +
        " " +
        generateCSSUnit(imageboxShadowBlur, "px") +
        " " +
        generateCSSUnit(imageboxShadowSpread, "px") +
        " " +
        imageboxShadowColor +
        " " +
        "!important",
      "margin-top": generateCSSUnit(imagetopmarginTablet, "px"),
      "margin-bottom": generateCSSUnit(imagebottommarginTablet, "px"),
      "margin-left": generateCSSUnit(imageleftmarginTablet, "px"),
      "margin-right": generateCSSUnit(imagerightmarginTablet, "px"),
    },
    " .responsive-img-caption ": {
      "text-align": captionimageAlignmentTablet,
      "font-size": captionFontSizeTablet,
      "margin-top": generateCSSUnit(captiontopmarginTablet, "px"),
      "margin-bottom": generateCSSUnit(captionbottommarginTablet, "px"),
      "margin-left": generateCSSUnit(captionleftmarginTablet, "px"),
      "margin-right": generateCSSUnit(captionrightmarginTablet, "px"),
    },
  };
  
  var mobile_selectors = {
    " .img-block": {
      "text-align": imageAlignmentMobile,
    },
    "  .responsive-blocks-image-block": {
      "width":generateCSSUnit(imageWidthMobile, "px"),
      "height":generateCSSUnit(imageHeightMobile, "px"),
      "border-color": imageBorderColor,
      "border-width": generateCSSUnit(imageBorderWidth, "px"),
      "border-radius": generateCSSUnit(imageBorderRadius, "px"),
      "border-style": imageBorderStyle,
      "box-shadow":
        generateCSSUnit(imageboxShadowHOffset, "px") +
        " " +
        generateCSSUnit(imageboxShadowVOffset, "px") +
        " " +
        generateCSSUnit(imageboxShadowBlur, "px") +
        " " +
        generateCSSUnit(imageboxShadowSpread, "px") +
        " " +
        imageboxShadowColor +
        " " +
        "!important",
      "margin-top": generateCSSUnit(imagetopmarginMobile, "px"),
      "margin-bottom": generateCSSUnit(imagebottommarginMobile, "px"),
      "margin-left": generateCSSUnit(imageleftmarginMobile, "px"),
      "margin-right": generateCSSUnit(imagerightmarginMobile, "px"),
    },
    " .responsive-img-caption ": {
      "text-align": captionimageAlignmentMobile,
      "font-size": captionFontSizeMobile,
      "margin-top": generateCSSUnit(captiontopmarginMobile, "px"),
      "margin-bottom": generateCSSUnit(captionbottommarginMobile, "px"),
      "margin-left": generateCSSUnit(captionleftmarginMobile, "px"),
      "margin-right": generateCSSUnit(captionrightmarginMobile, "px"),
    },
  };
  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-image.block-${block_id}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}
export default EditorStyles;
