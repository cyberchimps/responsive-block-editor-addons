import { __ } from '@wordpress/i18n';
import { RangeControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { Icon, rotateLeft } from '@wordpress/icons';

const RbeaRangeControl = ( props ) => {
    const { value, onChange, min = 0, max = 100, label = '', initialValue = 0 ,resetFallbackValue = 0} = props;

    const [currentValue, setCurrentValue] = useState(value !== undefined ? value : initialValue);

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
                <div className="rbea-control__actions">
                    <div tabIndex="0">
                        <button type="button" className="components-button rbea-reset is-secondary is-small" disabled="" onClick={handleOnReset}>
                            <span className="dashicon dashicons dashicons-image-rotate"></span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="rbea-range-control__inputs">
                <RangeControl
                    value={ currentValue }
                    onChange={( newValue ) => {
                        setCurrentValue(newValue);
                        onChange(newValue);
                    }}
                    min={min}
                    max={max}
                />
            </div>
        </div>
    );
};

export default RbeaRangeControl;