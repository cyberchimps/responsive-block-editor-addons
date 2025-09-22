/**
 * EXTENSION: Animations Extension - List of animations available.
 */

import { __ } from '@wordpress/i18n';

export const AnimationList = [
	// None.
	{ value: '', label: __( 'None', 'responsive-block-editor-addons' ) },

	// Fade.
	{
		label: __( 'Fade', 'responsive-block-editor-addons' ),
		options: [
			{ value: 'fade', label: __( 'Fade', 'responsive-block-editor-addons' ) },
			{ value: 'fade-down', label: __( 'Fade Down', 'responsive-block-editor-addons' ) },
			{ value: 'fade-up', label: __( 'Fade Up', 'responsive-block-editor-addons' ) },
			{ value: 'fade-left', label: __( 'Fade Left', 'responsive-block-editor-addons' ) },
			{ value: 'fade-right', label: __( 'Fade Right', 'responsive-block-editor-addons' ) },
		],
	},

	// Flip.
	{
		label: __( 'Flip', 'responsive-block-editor-addons' ),
		options: [
			{ value: 'flip-down', label: __( 'Flip Down', 'responsive-block-editor-addons' ) },
			{ value: 'flip-up', label: __( 'Flip Up', 'responsive-block-editor-addons' ) },
			{ value: 'flip-left', label: __( 'Flip Left', 'responsive-block-editor-addons' ) },
			{ value: 'flip-right', label: __( 'Flip Right', 'responsive-block-editor-addons' ) },
		],
	},

	// Slide.
	{
		label: __( 'Slide', 'responsive-block-editor-addons' ),
		options: [
			{ value: 'slide-down', label: __( 'Slide Down', 'responsive-block-editor-addons' ) },
			{ value: 'slide-up', label: __( 'Slide Up', 'responsive-block-editor-addons' ) },
			{ value: 'slide-left', label: __( 'Slide Left', 'responsive-block-editor-addons' ) },
			{ value: 'slide-right', label: __( 'Slide Right', 'responsive-block-editor-addons' ) },
		],
	},

	// Zoom-In.
	{
		label: __( 'Zoom-In', 'responsive-block-editor-addons' ),
		options: [
			{ value: 'zoom-in', label: __( 'Zoom-In', 'responsive-block-editor-addons' ) },
			{ value: 'zoom-in-down', label: __( 'Zoom-In Down', 'responsive-block-editor-addons' ) },
			{ value: 'zoom-in-up', label: __( 'Zoom-In Up', 'responsive-block-editor-addons' ) },
			{ value: 'zoom-in-left', label: __( 'Zoom-In Left', 'responsive-block-editor-addons' ) },
			{ value: 'zoom-in-right', label: __( 'Zoom-In Right', 'responsive-block-editor-addons' ) },
		],
	},

	// Zoom-Out.
	{
		label: __( 'Zoom-Out', 'responsive-block-editor-addons' ),
		options: [
			{ value: 'zoom-out', label: __( 'Zoom-Out', 'responsive-block-editor-addons' ) },
			{ value: 'zoom-out-down', label: __( 'Zoom-Out Down', 'responsive-block-editor-addons' ) },
			{ value: 'zoom-out-up', label: __( 'Zoom-Out Up', 'responsive-block-editor-addons' ) },
			{ value: 'zoom-out-left', label: __( 'Zoom-Out Left', 'responsive-block-editor-addons' ) },
			{ value: 'zoom-out-right', label: __( 'Zoom-Out Right', 'responsive-block-editor-addons' ) },
		],
	},

];

export const AnimationEaseType = [
    { value: 'linear', label: __( 'Linear', 'responsive-block-editor-addons' ) },
    { value: 'ease', label: __( 'Ease', 'responsive-block-editor-addons' ) },
    { value: 'ease-in', label: __( 'Ease In', 'responsive-block-editor-addons' ) },
    { value: 'ease-out', label: __( 'Ease Out', 'responsive-block-editor-addons' ) },
    { value: 'ease-in-out', label: __( 'Ease In Out', 'responsive-block-editor-addons' ) },
];
