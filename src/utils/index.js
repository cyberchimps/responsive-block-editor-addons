/**
 *
 * Combines hex & opacity to rgba.
 *
 * @param {string} hexColor Color
 * @param {number} opacity Opacity
 *
 * @return {string} Rgba color.
 */

import rgba from "color-rgba";

export const hexToRgba = (hexColor, opacity = null) => {
  let hex = null;

  /**
   * Detect CSS variables in form of var(--color) and get their current
   * values from the :root selector. This works in browser (editor & frontend).
   */
  if (hexColor && hexColor.indexOf("var(") > -1) {
    if (typeof window !== 'undefined' && window.getComputedStyle) {
      // Extract variable name: var(--wp--preset--color--primary) -> --wp--preset--color--primary
      const varName = hexColor.replace(/var\(|\)/g, '').trim();
      const resolvedColor = window
        .getComputedStyle(document.documentElement)
        .getPropertyValue(varName)
        .trim();
      
      if (resolvedColor) {
        // If resolved color is rgb/rgba, extract rgb values and apply opacity
        if (resolvedColor.startsWith('rgb')) {
          const rgbMatch = resolvedColor.match(/\d+/g);
          if (rgbMatch && rgbMatch.length >= 3) {
            const r = parseInt(rgbMatch[0], 10);
            const g = parseInt(rgbMatch[1], 10);
            const b = parseInt(rgbMatch[2], 10);
            // Return rgba with the specified opacity
            return `rgba(${r}, ${g}, ${b}, ${opacity !== null ? opacity : 1})`;
          }
        }
        // If resolved color is hex, use it
        hexColor = resolvedColor;
      } else {
        hexColor = "#fff"; // Fallback if variable not found
      }
    } else {
      hexColor = "#fff"; // Fallback if window doesn't exist
    }
  }

  hex = hexColor.replace(/#/, "");

  if (hex.length <= 4) {
    hex = hex.replace(/#?(.)(.)(.)/, "$1$1$2$2$3$3");
  }
  const newColor = rgba(`#${hex}ff`);
  newColor[3] = opacity !== null ? opacity : 1;
  return `rgba(${newColor.join(", ")})`;
};
