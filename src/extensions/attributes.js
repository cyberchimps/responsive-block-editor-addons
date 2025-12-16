import { addFilter } from '@wordpress/hooks';
import AnimationAttributes from './animations/attributes';
import DisplayConditionsAttributes from './display-conditions/attributes';
import ResponsiveConditionsAttributes from './responsive-conditions/attributes';
import CustomCSSAttributes from './custom-css/attributes';

function addAttributes( settings, name ) {

    if (!name.startsWith('responsive-block-editor-addons/')) {
        return settings;
    }

    if ( settings.attributes ) {
        settings.attributes = Object.assign( settings.attributes, {
            ...AnimationAttributes,
            ...DisplayConditionsAttributes,
            ...ResponsiveConditionsAttributes,
            ...CustomCSSAttributes,
        } );
    }

    return settings;
}

addFilter( 'blocks.registerBlockType', 'responsive-block-editor-addons/advanced-control-block', addAttributes );