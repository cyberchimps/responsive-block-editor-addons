import { useRbeaExtensionContext } from '../context/RbeaExtensionContext'
import { ToggleControl, SelectControl, PanelBody, CheckboxControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const RbeaDisplayConditions = () => {

    const { setAttributes, attributes } = useRbeaExtensionContext();
    
    const { RBEADisplayConditions, RBEALoggedIn, RBEALoggedOut, RBEASystem, RBEABrowser, RBEARole, RBEADay } = attributes;

    const userStateOptions = [
        { value: 'none', label: __( 'None', 'responsive-block-editor-addons' ) },
        { value: 'userstate', label: __( 'User State', 'responsive-block-editor-addons' ) },
        { value: 'userrole', label: __( 'User Role', 'responsive-block-editor-addons' ) },
        { value: 'browser', label: __( 'Browser', 'responsive-block-editor-addons' ) },
        { value: 'os', label: __( 'Operating System', 'responsive-block-editor-addons' ) },
        { value: 'day', label: __( 'Day', 'responsive-block-editor-addons' ) },
    ];

	const weekdays = [
		{ key: 'monday', label: __('Monday', 'responsive-block-editor-addons') },
		{ key: 'tuesday', label: __('Tuesday', 'responsive-block-editor-addons') },
		{ key: 'wednesday', label: __('Wednesday', 'responsive-block-editor-addons') },
		{ key: 'thursday', label: __('Thursday', 'responsive-block-editor-addons') },
		{ key: 'friday', label: __('Friday', 'responsive-block-editor-addons') },
		{ key: 'saturday', label: __('Saturday', 'responsive-block-editor-addons') },
		{ key: 'sunday', label: __('Sunday', 'responsive-block-editor-addons') },
	];

    const handleDayChange = ( dayKey, value ) => {
		if ( value && !RBEADay.includes(dayKey) ) {
			setAttributes( { RBEADay: [...RBEADay, dayKey] } );
		} else  if ( !value ) {
			setAttributes( { RBEADay: RBEADay.filter((day) => day !== dayKey) } );
		}
	}

    return (
        <PanelBody
            title={__("Display Conditions", "responsive-block-editor-addons")}
            initialOpen={false}
        >
            <label className="rbea-animations-label">{__("Display Conditions", "responsive-block-editor-addons")}</label>
            <SelectControl
                label={__("", "responsive-block-editor-addons")}
                value={RBEADisplayConditions}
                onChange={(selection) => setAttributes({ RBEADisplayConditions: selection })}
                __next40pxDefaultSize
                __nextHasNoMarginBottom
                options={userStateOptions}
            >
            </SelectControl>
            { RBEADisplayConditions === 'userstate' && (
                <>
                    <ToggleControl
						label={ __( 'Hide From Logged In Users', 'responsive-block-editor-addons' ) }
                        __nextHasNoMarginBottom
						checked={ RBEALoggedIn }
						onChange={ () =>
							setAttributes( {
								RBEALoggedIn: !RBEALoggedIn,
							} )
						}
					/>
                    <ToggleControl
						label={ __( 'Hide From Logged Out Users', 'responsive-block-editor-addons' ) }
                        __nextHasNoMarginBottom
						checked={ RBEALoggedOut }
						onChange={ () =>
							setAttributes( {
								RBEALoggedOut: !RBEALoggedOut,
							} )
						}
					/>
                </>
            )}
            { RBEADisplayConditions === 'os' && (
				<>
                    <label className="rbea-animations-label">{__("Hide on Operating System", "responsive-block-editor-addons")}</label>
					<SelectControl
                        __next40pxDefaultSize
                        __nextHasNoMarginBottom
						label={ __( '', 'responsive-block-editor-addons' ) }
						value={ RBEASystem }
						onChange={ ( value ) => setAttributes( { RBEASystem: value } ) }
						options={ [
							{ value: '', label: __( 'None', 'responsive-block-editor-addons' ) },
							{ value: 'iphone', label: __( 'iOS', 'responsive-block-editor-addons' ) },
							{ value: 'android', label: __( 'Android', 'responsive-block-editor-addons' ) },
							{ value: 'windows', label: __( 'Windows', 'responsive-block-editor-addons' ) },
							{ value: 'open_bsd', label: __( 'OpenBSD', 'responsive-block-editor-addons' ) },
							{ value: 'sun_os', label: __( 'SunOS', 'responsive-block-editor-addons' ) },
							{ value: 'linux', label: __( 'Linux', 'responsive-block-editor-addons' ) },
							{ value: 'mac_os', label: __( 'Mac OS', 'responsive-block-editor-addons' ) },
						] }
					/>
				</>
			)}
            { RBEADisplayConditions === 'browser' && (
				<>
                    <label className="rbea-animations-label">{__("Hide on Browser", "responsive-block-editor-addons")}</label>
					<SelectControl
                        __next40pxDefaultSize
                        __nextHasNoMarginBottom
						label={ __( '', 'responsive-block-editor-addons' ) }
						value={ RBEABrowser }
						onChange={ ( value ) => setAttributes( { RBEABrowser: value } ) }
						options={ [
							{ value: '', label: __( 'None', 'responsive-block-editor-addons' ) },
							{
								value: 'firefox',
								label: __( 'Mozilla Firefox', 'responsive-block-editor-addons' ),
							},
							{ value: 'chrome', label: __( 'Google Chrome', 'responsive-block-editor-addons' ) },
							{ value: 'opera_mini', label: __( 'Opera Mini', 'responsive-block-editor-addons' ) },
							{ value: 'opera', label: __( 'Opera', 'responsive-block-editor-addons' ) },
							{ value: 'safari', label: __( 'Safari', 'responsive-block-editor-addons' ) },
							{ value: 'edge', label: __( 'Microsoft Edge', 'responsive-block-editor-addons' ) },
						] }
					/>
				</>
			)}
            { RBEADisplayConditions === 'userrole' && (
				<>
                    <label className="rbea-animations-label">{__("Hide for User Role", "responsive-block-editor-addons")}</label>
					<SelectControl
                        __next40pxDefaultSize
                        __nextHasNoMarginBottom
						label={ __( '', 'responsive-block-editor-addons' ) }
						value={ RBEARole }
						onChange={ ( value ) => setAttributes( { RBEARole: value } ) }
						options={ responsive_globals?.user_roles }
					/>
				</>
			)}
            { RBEADisplayConditions === 'day' && (
                <>
					<p>{__('Select days you want to disable.', 'responsive-block-editor-addons')}</p>
                    <div className="rbea-flex-wrapper">
						{weekdays.map(({key, label}) => (
							<div className="rbea-flex-wrapper-items">
								<CheckboxControl
									key={key}
									__nextHasNoMarginBottom
									label={label}
									checked={ RBEADay.includes(key) }
									onChange={ (value) => handleDayChange( key, value ) }
								/>
							</div>
						))}
                    </div>
                </>
            )}
			<div className="components-base-control">
				<p>{__("Above setting will only take effect once you are on the live page, and not while you're editing.", "responsive-block-editor-addons")}</p>
			</div>
        </PanelBody>
    )
}

export default RbeaDisplayConditions