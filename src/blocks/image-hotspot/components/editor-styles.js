import generateCSS from "../../../generateCSS";
import generateCSSUnit from "../../../generateCSSUnit";

function EditorStyles(props) {
  const {
    block_id,
    pointBackgroundColor,
    iconColor,
    pointOpacity,
    hotspotSize,
    animationName,
    animationDirection,
    animationRepeat,
    animationDuration,
    animationDelay,
    animationCurve,
    pulseEffect,
    pointSpacing,
    imageSize,
    hideWidget,
    hideWidgetTablet,
    hideWidgetMobile,
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
  } = props.attributes;

  let updatedPointOpacity = pointOpacity / 100;

  var selectors = {
    " ": {
      "opacity": hideWidget ? 0.2 : 1,
      display: "flex",
      "justify-content": "center",
      'padding-top': generateCSSUnit(blockTopPadding, "px"),
      'padding-right': generateCSSUnit(blockRightPadding, "px"),
      'padding-bottom': generateCSSUnit(blockBottomPadding, "px"),
      'padding-left': generateCSSUnit(blockLeftPadding, "px"),
      'margin-top': generateCSSUnit(blockTopMargin, "px"),
      'margin-right': generateCSSUnit(blockRightMargin, "px"),
      'margin-bottom': generateCSSUnit(blockBottomMargin, "px"),
      'margin-left': generateCSSUnit(blockLeftMargin, "px"),
    },
    " .responsive_block_addons___image": {
      display: "block",
    },
    " .responsive_block_addons___dot": {
      left: 0,
      top: 0,
      opacity: updatedPointOpacity,
      outline: "none",
      cursor: "pointer",
      position: "absolute",
      "border-radius": "50%",
      "background-color": pointBackgroundColor,
      padding: generateCSSUnit(pointSpacing, "px"),
      "animation-name": `${animationName}${animationDirection}`,
      "animation-timing-function": animationCurve,
      "animation-duration": animationDuration + "ms",
      "animation-delay": animationDelay + "ms",
      "animation-iteration-count": animationRepeat === "once" ? 1 : "infinite",
    },
    " .responsive_block_addons___dot::before": {
      display: pulseEffect ? "block" : "none",
      animation: pulseEffect ? "" : "none",
    },
    " .responsive_block_addons__dot-content svg": {
      "font-size": generateCSSUnit(hotspotSize, "px"),
    },
    " .responsive_block_addons__dot-content": {
      fill: iconColor,
    },
    " .responsive_block_addons___wrapper": {
      position: "relative",
    },
    " .responsive_block_addons___wrapper img": {
      width: imageSize,
    },
  };

  var mobile_selectors = {
    " ": {
      "opacity": hideWidgetMobile ? 0.2 : 1,
      'padding-top': generateCSSUnit(blockTopPaddingMobile, "px"),
      'padding-right': generateCSSUnit(blockRightPaddingMobile, "px"),
      'padding-bottom': generateCSSUnit(blockBottomPaddingMobile, "px"),
      'padding-left': generateCSSUnit(blockLeftPaddingMobile, "px"),
      'margin-top': generateCSSUnit(blockTopMarginMobile, "px"),
      'margin-right': generateCSSUnit(blockRightMarginMobile, "px"),
      'margin-bottom': generateCSSUnit(blockBottomMarginMobile, "px"),
      'margin-left': generateCSSUnit(blockLeftMarginMobile, "px"),
    },
  };

  var tablet_selectors = {
    " ": {
      "opacity": hideWidgetTablet ? 0.2 : 1,
      'padding-top': generateCSSUnit(blockTopPaddingTablet, "px"),
      'padding-right': generateCSSUnit(blockRightPaddingTablet, "px"),
      'padding-bottom': generateCSSUnit(blockBottomPaddingTablet, "px"),
      'padding-left': generateCSSUnit(blockLeftPaddingTablet, "px"),
      'margin-top': generateCSSUnit(blockTopMarginTablet, "px"),
      'margin-right': generateCSSUnit(blockRightMarginTablet, "px"),
      'margin-bottom': generateCSSUnit(blockBottomMarginTablet, "px"),
      'margin-left': generateCSSUnit(blockLeftMarginTablet, "px"),
    },
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-image-hotspot.block-${block_id}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
