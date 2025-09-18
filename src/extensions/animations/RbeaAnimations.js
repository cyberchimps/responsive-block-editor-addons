import { ToggleControl, Button, SelectControl, PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useRbeaExtensionContext } from '../context/RbeaExtensionContext';
import { AnimationList, AnimationEaseType } from './animation-list'
import RbeaRangeControl from '../../utils/components/rbea-range-control';

const RbeaAnimations = () => {
	
	const { clientId, name, setAttributes, attributes } = useRbeaExtensionContext();

	const { RBEAAnimationType, RBEAAnimationTime, RBEAAnimationDelay, RBEAAnimationEasing, RBEAAnimationRepeat } = attributes;

	const rbeaPlayAnimation = ( rbeaAnimationType = RBEAAnimationType ) => {
		// For responsive preview.
		const editorIframe = document.querySelector( 'iframe[name="editor-canvas"]' );
		const innerDoc = editorIframe?.contentDocument || editorIframe?.contentWindow.document;

		// Get block and the setTimeout code to clear from previous usage. Also check responsive preview.
		const rbeaAnimatedBlock = editorIframe
			? innerDoc.getElementById( 'block-' + clientId )
			: document.getElementById( 'block-' + clientId );

		const rbeaAOSWaitPreviousCode = parseInt( localStorage.getItem( `rbeaAOSWaitTimeoutCode-${ clientId }` ) );
		const rbeaAOSRemoveClassesTimeoutPreviousCode = parseInt(
			localStorage.getItem( `rbeaAOSRemoveClassesTimeoutCode-${ clientId }` )
		);

		// If the animation is played previously, remove the AOS class and attribute first.
		// We ensure that the AOS class and attribute is removed in case the user repeated taps the play button.
		if ( rbeaAOSWaitPreviousCode ) {
			rbeaAnimatedBlock.removeAttribute( 'data-aos' );
			rbeaAnimatedBlock.classList.remove( 'aos-animate' );
		}

		// transition duration is set to 0s, cause the block first goes to the last frame (animated in reverse) when the AOS attribute is added and this should be instantaneous.
		rbeaAnimatedBlock.style.transitionDuration = '0s';
		// Add back the AOS attribute.
		rbeaAnimatedBlock.setAttribute( 'data-aos', rbeaAnimationType );

		// Due to CSS conflicts across themes in the editor, we set the easing using JS.
		// Also we only provide default 'ease' in the free version, so if the easing function list is empty then use the default 'ease' function.
		
		rbeaAnimatedBlock.style.transitionTimingFunction = RBEAAnimationEasing || 'cubic-bezier(.250, .100, .250, 1)';

		// Clear previous timeouts.
		clearTimeout( rbeaAOSWaitPreviousCode );
		clearTimeout( rbeaAOSRemoveClassesTimeoutPreviousCode );

		// Add the aos-animate class to play the animation with the given duration.
		const rbeaAOSWait = setTimeout( () => {
			// Responsive theme (or even other themes may) overrides the transition duration to a fixed value.
			// Hence we do the calculation on the next line.
			rbeaAnimatedBlock.style.transitionDuration = RBEAAnimationTime / 1000 + 's';
			rbeaAnimatedBlock.classList.add( 'aos-animate' );
		}, RBEAAnimationDelay );

		// Remove the classes and attributes after the animation has played.
		// Keeping the classes and attributes after the animation has played can lead to buggy behavior in the editor.
		const rbeaAOSRemoveClasses = setTimeout( () => {
			rbeaAnimatedBlock.removeAttribute( 'data-aos' );
			rbeaAnimatedBlock.classList.remove( 'aos-animate' );
			rbeaAnimatedBlock.style.transitionDuration = '';
			rbeaAnimatedBlock.style.transitionTimingFunction = '';
		}, RBEAAnimationDelay + RBEAAnimationTime );

		// Set local storage so we can fetch the value during later usage to clear the intervals.
		localStorage.setItem( `aosWaitTimeoutCode-${ clientId }`, rbeaAOSWait );
		localStorage.setItem( `aosRemoveClassesTimeoutCode-${ clientId }`, rbeaAOSRemoveClasses );

	};

	return (
		<>
			<PanelBody
              title={__("Animations", "responsive-block-editor-addons")}
              initialOpen={false}
            >
				<SelectControl
					label=''
					value={RBEAAnimationType}
					onChange={ ( selection ) =>  {
						setAttributes({ RBEAAnimationType: selection });
						rbeaPlayAnimation(selection);
					}}
					__next40pxDefaultSize
					__nextHasNoMarginBottom
				>
					{AnimationList.map((item) => {
						if (item.options) {
							return (
								<optgroup key={item.label} label={item.label}>
									{item.options.map((option) => (
										<option key={option.value} value={option.value}>
											{option.label}
										</option>
									))}
								</optgroup>
							);
						} else {
							return (
								<option key={item.value} value={item.value}>
									{item.label}
								</option>
							);
						}
					})}
				</SelectControl>

				{ RBEAAnimationType !== '' && (
					<>
						<RbeaRangeControl
							label={__("Animation Duration", "responsive-block-editor-addons")}
							value={RBEAAnimationTime}
							onChange={(value) => {
								const sanitizedValue = value ? Math.floor(value / 50) * 50 : 0;
								setAttributes({ RBEAAnimationTime: sanitizedValue });
							}}
							min={0}
							max={3000}
							allowReset
							resetFallbackValue={400}
							initialPosition={400}
							step={50}
							help={__("Duration defines the runtime of the animation in milliseconds.", "responsive-block-editor-addons")}
						/>
						<RbeaRangeControl
							label={__("Animation Delay", "responsive-block-editor-addons")}
							value={RBEAAnimationDelay}
							onChange={(value) => {
								const sanitizedValue = value ? Math.floor(value / 50) * 50 : 0;
								setAttributes({ RBEAAnimationDelay: sanitizedValue });
							}}
							min={0}
							max={3000}
							allowReset
							resetFallbackValue={0}
							initialPosition={0}
							step={50}
							help={__("Delay sets the wait time before the animation begins, in milliseconds.", "responsive-block-editor-addons")}
						/>
						<label className="rbea-animations-label">{__("Animation Easing", "responsive-block-editor-addons")}</label>
						<SelectControl
							label={__("", "responsive-block-editor-addons")}
							value={RBEAAnimationEasing}
							onChange={ ( selection ) => setAttributes({ RBEAAnimationEasing: selection }) }
							__next40pxDefaultSize
							__nextHasNoMarginBottom
							options={AnimationEaseType}
							help={__("Easing provides a more natural feel to the animation by controlling its speed at different intervals.", "responsive-block-editor-addons")}
						>
						</SelectControl>
						<ToggleControl
							__nextHasNoMarginBottom
							label={__("Play Repeatedly on Scroll", "responsive-block-editor-addons")}
							checked={RBEAAnimationRepeat}
							onChange={() => setAttributes({ RBEAAnimationRepeat: !RBEAAnimationRepeat,}) }
						/>
						<Button
							variant="tertiary"
							onClick={ () => rbeaPlayAnimation(RBEAAnimationType) }
							__next40pxdefaultsize
							className="rbea-animations-preview-button"
						>
							{__("Preview", "responsive-block-editor-addons")}
						</Button>
					</>
				) }
			</PanelBody>			
		</>
	);
};

export default RbeaAnimations;
