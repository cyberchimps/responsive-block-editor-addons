/**
 * WordPress dependencies
 */
import { Path, SVG, G } from "@wordpress/components";

/**
 * Custom icons
 */
const icons = {};

icons.open = (
  <SVG
    className="dashicon"
    role="img"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
  >
    <G stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <G
        transform="translate(7.000000, 3.000000)"
        fill="currentColor"
        fillRule="nonzero"
      >
        <polygon points="0 12.4144941 2.9165 12.4144941 0 9.24610888 2.5 9.24610888 2.5 4.7525778 0 4.7525778 2.9165 1.5841926 0 1.5841926 0 6.10622664e-16 7 6.10622664e-16 7 1.5841926 4.0835 1.5841926 7 4.7525778 4.5 4.7525778 4.5 9.24610888 7 9.24610888 4.0835 12.4144941 7 12.4144941 7 13.9986867 0 13.9986867" />
      </G>
    </G>
  </SVG>
);

export default icons;
