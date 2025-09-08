import { addFilter } from '@wordpress/hooks';
import AnimationAttributes from './animations/attributes';

function addAttributes( settings ) {

    if ( settings.attributes ) {
        settings.attributes = Object.assign( settings.attributes, {
            ...AnimationAttributes,
        } );
    }

	return settings;
}

addFilter( 'blocks.registerBlockType', 'responsive-block-editor-addons/advanced-control-block', addAttributes );