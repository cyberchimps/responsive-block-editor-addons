import { useRbeaExtensionContext } from '../context/RbeaExtensionContext'
import { ToggleControl, PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const RbeaResponsiveConditions = () => {

    const { setAttributes, attributes } = useRbeaExtensionContext();
    
    const { hideWidget, hideWidgetTablet, hideWidgetMobile } = attributes;

    return (
        <PanelBody
            title={__("Responsive Conditions", "responsive-block-editor-addons")}
            initialOpen={false}
        >
            <ToggleControl
                label={__('Hide on Desktop', 'responsive-block-editor-addons')}
                checked={hideWidget}
                onChange={() =>
                    setAttributes({
                        hideWidget: !hideWidget,
                    })
                }
                __nextHasNoMarginBottom
            />
            <ToggleControl
                label={__('Hide on Tablet', 'responsive-block-editor-addons')}
                checked={hideWidgetTablet}
                onChange={() =>
                    setAttributes({
                        hideWidgetTablet: !hideWidgetTablet,
                    })
                }
                __nextHasNoMarginBottom
            />
            <ToggleControl
                label={__('Hide on Mobile', 'responsive-block-editor-addons')}
                checked={hideWidgetMobile}
                onChange={() =>
                    setAttributes({
                        hideWidgetMobile: !hideWidgetMobile,
                    })
                }
                __nextHasNoMarginBottom
            />
        </PanelBody>
    )
}

export default RbeaResponsiveConditions


