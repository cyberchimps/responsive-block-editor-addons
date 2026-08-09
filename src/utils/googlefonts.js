/**
 * WordPress dependencies
 */
import fontFamilies from "./google-fonts.json";

const fontOptions = fontFamilies.map((family) => {
  return { label: family, value: family };
});
export default fontOptions;
