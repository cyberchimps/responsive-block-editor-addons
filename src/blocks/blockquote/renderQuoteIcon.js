/**
 * Set inline CSS class.
 * @param {object} props - The block object.
 * @return {array} The inline CSS class.
 */

import ResponsiveBlocksQuote_SVG_Icon from "./ResponsiveBlocksQuoteIcon";
import ResponsiveBlocks_SVG_Icon from "../../ResponsiveBlocksIcon";
import parseSVG from "../../parseIcon";

export default function renderSVG(svg) {
  svg = parseSVG(svg);

  // Prefer blockquote-specific quote icons; fallback to the shared icon pack.
  var fontAwesome =
    ResponsiveBlocksQuote_SVG_Icon[svg] || ResponsiveBlocks_SVG_Icon[svg];

  if ("undefined" != typeof fontAwesome) {
    var svgData = fontAwesome["svg"] || {};

    // Keep existing behavior (brands -> solid), but also support regular icons.
    var variant = svgData.hasOwnProperty("brands")
      ? "brands"
      : svgData.hasOwnProperty("solid")
        ? "solid"
        : svgData.hasOwnProperty("regular")
          ? "regular"
          : null;

    if (!variant) {
      return null;
    }

    var viewbox_array = svgData[variant]["viewBox"];
    var path = svgData[variant]["path"];
    var viewBox = Array.isArray(viewbox_array)
      ? viewbox_array.join(" ")
      : viewbox_array;

    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}>
        <path d={path}></path>
      </svg>
    );
  }
}
