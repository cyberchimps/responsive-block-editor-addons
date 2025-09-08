import { ToggleControl, Button, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { addFilter, applyFilters } from '@wordpress/hooks';

const RbeaAnimations = ( props ) => {
	
	const {
		clientId,
		name,
		attributes: { RBEAAnimationType, RBEAAnimationTime, RBEAAnimationDelay, RBEAAnimationEasing },
		setAttributes,
	} = props;

	return (
		<>
            <SelectControl
				label=''
				value={'Tyrannosaurus'}
				onChange={ ( selection ) => { console.log(selection) } }
				__next40pxDefaultSize
				__nextHasNoMarginBottom
			>
				<optgroup label="Theropods">
					<option value="Tyrannosaurus">Tyrannosaurus</option>
					<option value="Velociraptor">Velociraptor</option>
					<option value="Deinonychus">Deinonychus</option>
				</optgroup>
				<optgroup label="Sauropods">
					<option value="Diplodocus">Diplodocus</option>
					<option value="Saltasaurus">Saltasaurus</option>
					<option value="Apatosaurus">Apatosaurus</option>
				</optgroup>
			</SelectControl>
			
		</>
	);
};

export default RbeaAnimations;
