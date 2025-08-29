import { __ } from '@wordpress/i18n';
import { RangeControl, ButtonGroup, Button, } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { Icon, rotateLeft } from '@wordpress/icons';
import {
  __experimentalToggleGroupControl as ToggleGroupControl,
  __experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';

import './styles/editor.scss';


const RbeaWidthRangeControl = ( props ) => {
    const { value, onChange, min = 0, max = 100, label = '', initialPosition = 0 ,resetFallbackValue = 0 ,
        allowReset = true, extraControls = false, widthType, setAttributes, ...restProps} = props;

    const [currentValue, setCurrentValue] = useState(value !== undefined ? value : initialPosition);

    const handleOnReset = () => {
        setCurrentValue(resetFallbackValue);
        onChange(resetFallbackValue);
    };

    
    return (
        <div className="rbea-range-control">
             <div className="rbea-control__header">
                <div className="uag-responsive-label-wrap">
                    <span className="uag-control-label">{__(`${label}`, 'responsive-block-editor-addons')}</span>
                </div>
                <div className='rbea-control__header-controls-container'>
                    {extraControls && 
                        <ToggleGroupControl
                            className="responsive-block-editor-addons-size-type-field"
                            label={ __("Size Type", "responsive-block-editor-addons") }
                            aria-label={ __("Size Type", "responsive-block-editor-addons") }
                            value={ widthType }
                            onChange={(val) => setAttributes({ widthType: val })}
                            __next40pxDefaultSize
                            __nextHasNoMarginBottom
                            >
                            <ToggleGroupControlOption
                                className="responsive-block-editor-addons-size-btn"
                                value="px"
                                label="px"
                            />
                            <ToggleGroupControlOption
                                className="responsive-block-editor-addons-size-btn"
                                value="%"
                                label="%"
                            />
                        </ToggleGroupControl>

                    }
                    {allowReset &&
                        <div className="rbea-control__actions">
                            <div tabIndex="0">
                                <button type="button" className="components-button rbea-reset is-secondary is-small" disabled="" onClick={handleOnReset}>
                                    <span className="dashicon dashicons dashicons-image-rotate"></span>
                                </button>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div className="rbea-range-control__inputs">
                <RangeControl
                    value={ value }
                    onChange={( newValue ) => {
                        setCurrentValue(newValue);
                        onChange(newValue);
                    }}
                    min={min}
                    max={max}
                    allowReset = {false}
                    __next40pxDefaultSize={true}
                    __nextHasNoMarginBottom
                    {...restProps}
                />
            </div>
        </div>
    );
};

export default RbeaWidthRangeControl;