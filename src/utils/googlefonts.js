/**
 * WordPress dependencies
 */
import fonts from "./google-fonts.json";

const fontOptions = fonts.map((font) => {
  return { label: font.family, value: font.family };
});
export default fontOptions;
