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
    imageSize
  } = props.attributes;

  let updatedPointOpacity = pointOpacity / 100;

  var selectors = {
    " ": {
      display: "flex",
      "justify-content": "center",
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

  var mobile_selectors = {};

  var tablet_selectors = {};

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-image-hotspot.block-${block_id}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
