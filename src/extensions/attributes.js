import { addFilter } from '@wordpress/hooks';
import AnimationAttributes from './animations/attributes';
import DisplayConditionsAttributes from './display-conditions/attributes';
import ResponsiveConditionsAttributes from './responsive-conditions/attributes';

function addAttributes( settings ) {

    if ( settings.attributes ) {
        settings.attributes = Object.assign( settings.attributes, {
            ...AnimationAttributes,
            ...DisplayConditionsAttributes,
            ...ResponsiveConditionsAttributes,
        } );
    }

	return settings;
}

addFilter( 'blocks.registerBlockType', 'responsive-block-editor-addons/advanced-control-block', addAttributes );