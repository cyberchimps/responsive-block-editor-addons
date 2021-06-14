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
   * values from the :root selector.
   */
  if (hexColor.indexOf("var(") > -1) {
    hexColor =
      window
        .getComputedStyle(document.documentElement)
        .getPropertyValue(hexColor.replace("var(", "").replace(")", "")) ||
      "#fff";
  }

  hex = hexColor.replace(/#/, "");

  if (hex.length <= 4) {
    hex = hex.replace(/#?(.)(.)(.)/, "$1$1$2$2$3$3");
  }
  const newColor = rgba(`#${hex}ff`);
  newColor[3] = opacity !== null ? opacity : 1;
  return `rgba(${newColor.join(", ")})`;
};
