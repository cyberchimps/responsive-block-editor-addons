/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Link options.
 */
const linkOptions = [
  { value: "none", label: __("None", "responsive-block-editor-addons") },
  { value: "media", label: __("Media file", "responsive-block-editor-addons") },
  {
    value: "attachment",
    label: __("Attachment page", "responsive-block-editor-addons"),
  },
  {
    value: "custom",
    label: __("Custom URL", "responsive-block-editor-addons"),
  },
];

export default linkOptions;
