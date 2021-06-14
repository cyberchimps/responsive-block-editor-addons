/**
 * External dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { ColorPicker, Dropdown, Button } from "@wordpress/components";

export default function InlineColorPicker({
  disableCustomColors = false,
  value,
  onChange,
  className,
}) {
  const classes = classnames(
    "components-color-palette",
    "components-responsive-block-editor-addons-inline-color-picker",
    className
  );
  return (
    <div className={classes}>
      <div className="components-color-palette__custom-clear-wrapper">
        {!disableCustomColors && (
          <Dropdown
            className="components-color-palette__custom-color"
            contentClassName="components-color-palette__picker"
            renderToggle={({ isOpen, onToggle }) => (
              <Button
                aria-expanded={isOpen}
                onClick={onToggle}
                aria-label={__(
                  "Custom color picker",
                  "responsive-block-editor-addons"
                )}
                isLink
              >
                <span className="components-color-palette__custom-color-gradient"></span>
              </Button>
            )}
            renderContent={() => (
              <ColorPicker
                color={value}
                onChangeComplete={(color) => onChange(color.hex)}
                disableAlpha
              />
            )}
          />
        )}
      </div>
    </div>
  );
}
