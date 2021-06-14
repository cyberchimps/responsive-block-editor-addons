/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Link options.
 */
const captionOptions = [
  {
    value: "dark",
    /* translators: visual style option */
    label: __("Dark", "responsive-block-editor-addons"),
  },
  {
    value: "light",
    /* translators: visual style option */
    label: __("Light", "responsive-block-editor-addons"),
  },
  {
    value: "none",
    /* translators: visual style option */
    label: __("None", "responsive-block-editor-addons"),
  },
];

export default captionOptions;
