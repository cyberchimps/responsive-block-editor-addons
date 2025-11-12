import autoBlockRecovery from './autoBlockRecovery';
import initGlobalInheritFromTheme from './globalInheritFromTheme';
import { convertTruthyFalsyValue } from './helper';

// Initialize Auto Block Recovery - Only if enabled in settings
export const initAutoBlockRecovery = () => {
	// Check if auto block recovery is enabled
	const isAutoRecoveryEnabled = convertTruthyFalsyValue( responsive_globals?.auto_block_recovery );
	
	if ( isAutoRecoveryEnabled && window._wpLoadBlockEditor ) {
		window._wpLoadBlockEditor.then( () => {
			autoBlockRecovery();
		} );
	}
};

// Initialize Global Inherit From Theme functionality
export const initGlobalInheritFromThemeSystem = () => {
	if (window._wpLoadBlockEditor) {
		window._wpLoadBlockEditor.then(() => {
			initGlobalInheritFromTheme();
		});
	}
};