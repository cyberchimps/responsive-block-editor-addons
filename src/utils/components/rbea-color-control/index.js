import { __ } from '@wordpress/i18n';
import { ColorPicker, ColorPalette } from '@wordpress/components';
import { IconButton } from '@wordpress/components';
import { useState, useEffect, useRef } from '@wordpress/element';
import { useSetting } from '@wordpress/block-editor';

const RbeaColorControl = ({ colorValue, onChange, label, resetColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);
  const popupSizeRef = useRef(null);
  const [popupHeight, setPopupHeight] = useState(0);
  
  // Get theme colors from WordPress settings
  const colors = useSetting('color.palette') || [];

  // Resolve CSS variable to hex ONLY for ColorPicker display 
  const getDisplayColor = (color) => {
    if (!color || !color.includes('var(')) {
      return color; // Already hex or empty
    }
    
    // Extract variable name and resolve it for display only
    const varName = color.replace(/var\(|\)/g, '').trim();
    const resolvedColor = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue(varName)
      .trim();
    
    return resolvedColor || color; // Return resolved hex for display
  };

    
  useEffect(() => {
    if (!isOpen || !popupSizeRef.current) return;

    const timeout = setTimeout(() => {
      const observer = new ResizeObserver(([entry]) => {
        const height = entry.contentRect.height;
        setPopupHeight(height);
      });

      observer.observe(popupSizeRef.current);

      return () => observer.disconnect();
    }, 50);

    return () => clearTimeout(timeout);
  }, [isOpen]);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    
    <div className="rbea-color-control"
      style = {{
        marginBottom: isOpen ? `${popupHeight + 10}px` : "24px", 
      }}
    >
      
  
      <p className="rbea-color-control__label">
        {label}
      </p>

      <div className="rbea-color-control__wrapper" ref={popupRef}>
       
        <span
          className="rbea-color-control__indicator"
          onClick={() => setIsOpen(true)}
          style={{
            backgroundColor: colorValue ? colorValue : "transparent",
            backgroundImage: colorValue ? 'none' : 'linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc), linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc)',
          }}
        ></span>

        
        <div className="rbea-control__actions">
            <div tabIndex="0">
                <button type="button" className="components-button rbea-reset is-secondary is-small" disabled="" onClick={resetColor}>
                    <span className="dashicon dashicons dashicons-image-rotate"></span>
                </button>
            </div>
        </div>

        {isOpen && (
            <div className="rbea-color-control__popup">
              <div ref={popupSizeRef}>
                <ColorPicker
                  color={getDisplayColor(colorValue)}
                  onChangeComplete={(newColor) => {
                    onChange(newColor.hex);
                  }}
                />
                
                {colors.length > 0 && (
                  <div className="rbea-color-palette-wrapper">
                    <h4 className="rbea-color-palette-heading">
                      {__('Theme Color Palette', 'responsive-block-editor-addons')}
                    </h4>
                    <ColorPalette
                      colors={colors}
                      value={colorValue}
                      onChange={(newColor) => {
                        onChange(newColor);
                      }}
                      disableCustomColors={true}
                    />
                  </div>
                )}
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default RbeaColorControl;
