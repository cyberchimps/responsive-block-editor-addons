import { ToggleControl, Button, SelectControl, PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { addFilter, applyFilters } from '@wordpress/hooks';
import { useRbeaExtensionContext } from '../context/RbeaExtensionContext';
import { AnimationList, AnimationEaseType } from './animation-list'
import RbeaRangeControl from '../../utils/components/rbea-range-control';

const RbeaAnimations = ( props ) => {
	
	const { clientId, name, setAttributes, attributes } = useRbeaExtensionContext();

	const { RBEAAnimationType, RBEAAnimationTime, RBEAAnimationDelay, RBEAAnimationEasing, RBEAAnimationRepeat } = attributes;

	console.log('RBEAAnimationType -> ', RBEAAnimationType, typeof RBEAAnimationType )

	return (
		<>
			<PanelBody
              title={__("Animations", "responsive-block-editor-addons")}
              initialOpen={false}
            >
				<SelectControl
					label=''
					value={RBEAAnimationType}
					onChange={ ( selection ) => setAttributes({ RBEAAnimationType: selection }) }
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
							onChange={(value) => setAttributes({ RBEAAnimationTime: value }) }
							min={0}
							max={3000}
							allowReset
							resetFallbackValue={400}
							initialPosition={400}
						/>
						<RbeaRangeControl
							label={__("Animation Delay", "responsive-block-editor-addons")}
							value={RBEAAnimationDelay}
							onChange={(value) => setAttributes({ RBEAAnimationDelay: value }) }
							min={0}
							max={3000}
							allowReset
							resetFallbackValue={0}
							initialPosition={0}
						/>
						<label className="rbea-animations-label">{__("Animation Easing", "responsive-block-editor-addons")}</label>
						<SelectControl
							label={__("", "responsive-block-editor-addons")}
							value={RBEAAnimationEasing}
							onChange={ ( selection ) => setAttributes({ RBEAAnimationEasing: selection }) }
							__next40pxDefaultSize
							__nextHasNoMarginBottom
							options={AnimationEaseType}
							help={__("Easing can help provide a natural feel to the animation by affecting it's speed at a specific interval.", "responsive-block-editor-addons")}
						>
						</SelectControl>
						<ToggleControl
							label={__("Play Repeatedly on Scroll", "responsive-block-editor-addons")}
							checked={RBEAAnimationRepeat}
							onChange={() => setAttributes({ RBEAAnimationRepeat: !RBEAAnimationRepeat,}) }
						/>
						<Button
							variant="tertiary"
							onClick={ () => console.log('clicked') }
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
