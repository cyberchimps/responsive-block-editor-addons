const { __ } = wp.i18n;
const { Dashicon } = wp.components;
import { useState, useCallback } from "@wordpress/element";

const PresetControl = ({ label = '', presets = [], onApply, activeId = null, isResetAllowed = false, resetAttr = {}, onResetApply }) => {

    const [selected, setSelected] = useState(activeId);

    const handleClick = useCallback(
		(preset) => {
			setSelected(preset.id);
			if ( typeof onApply === 'function' ) {
				onApply(preset.attributes, preset.id);
			}
		},
		[onApply]
	);

    const resetPreset = () => {
        setSelected(null);
        onResetApply(resetAttr);
    }

    return (
        <div className="rbea-preset-wrapper">
            <div className="rbea-preset-header">
                <label>{label}</label>
                {isResetAllowed && <Dashicon className={selected !== null ? 'preset-active' : ''} onClick={() => resetPreset()} icon="image-rotate" />}
            </div>
            <div className="rbea-preset-body">
                {presets.map((preset) => (
                    <div key={preset?.id} onClick={() => handleClick(preset)} className={'rbea-preset-card ' + (selected === preset.id ? 'rbea-preset-active-card': '')} title={preset?.label}>
                        <span dangerouslySetInnerHTML={{ __html: preset.icon }}></span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PresetControl;