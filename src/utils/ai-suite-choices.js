/**
 * Shared Ai Suite / AI Write dropdown options (labels wrapped with __ at render time).
 *
 * @param {Function} __ @wordpress/i18n translate
 */

export function getAiSuitePostTypeOptions( __ ) {
	return [
		{
			label: __( 'All Post Types', 'responsive-block-editor-addons' ),
			value: 'all',
		},
		{
			label: __( 'Posts', 'responsive-block-editor-addons' ),
			value: 'post',
		},
		{
			label: __( 'Pages', 'responsive-block-editor-addons' ),
			value: 'page',
		},
	];
}

export function getAiSuiteUserRoleOptions( __ ) {
	return [
		{
			label: __( 'Admin', 'responsive-block-editor-addons' ),
			value: 'administrator',
		},
		{
			label: __( 'Editor', 'responsive-block-editor-addons' ),
			value: 'editor',
		},
	];
}

export function getAiSuiteToneOptions( __ ) {
	return [
		{
			label: __( 'Informative', 'responsive-block-editor-addons' ),
			value: 'informative',
		},
		{
			label: __( 'Casual', 'responsive-block-editor-addons' ),
			value: 'casual',
		},
		{
			label: __( 'Friendly', 'responsive-block-editor-addons' ),
			value: 'friendly',
		},
		{
			label: __( 'Professional', 'responsive-block-editor-addons' ),
			value: 'professional',
		},
		{
			label: __( 'Inspirational', 'responsive-block-editor-addons' ),
			value: 'inspirational',
		},
	];
}

export function getAiSuiteLengthOptions( __ ) {
	return [
		{
			label: __(
				'Short (5-15 words)',
				'responsive-block-editor-addons'
			),
			value: 'short',
		},
		{
			label: __(
				'Medium (20-30 words)',
				'responsive-block-editor-addons'
			),
			value: 'medium',
		},
		{
			label: __(
				'Large (40-60 words)',
				'responsive-block-editor-addons'
			),
			value: 'large',
		},
		{
			label: __( 'Big (80+ words)', 'responsive-block-editor-addons' ),
			value: 'big',
		},
	];
}

/** [ value, English name for translators ] — order: English first, then list order from product spec. */
const LANGUAGE_ROWS = [
	[ 'english', 'English' ],
	[ 'afrikaans', 'Afrikaans' ],
	[ 'amharic', 'Amharic' ],
	[ 'arabic', 'Arabic' ],
	[ 'azerbaijani', 'Azerbaijani' ],
	[ 'belarusian', 'Belarusian' ],
	[ 'bulgarian', 'Bulgarian' ],
	[ 'bengali', 'Bengali' ],
	[ 'bosnian', 'Bosnian' ],
	[ 'catalan', 'Catalan' ],
	[ 'cebuano', 'Cebuano' ],
	[ 'czech', 'Czech' ],
	[ 'welsh', 'Welsh' ],
	[ 'danish', 'Danish' ],
	[ 'german', 'German' ],
	[ 'greek', 'Greek' ],
	[ 'esperanto', 'Esperanto' ],
	[ 'spanish', 'Spanish' ],
	[ 'estonian', 'Estonian' ],
	[ 'basque', 'Basque' ],
	[ 'persian', 'Persian' ],
	[ 'finnish', 'Finnish' ],
	[ 'french', 'French' ],
	[ 'galician', 'Galician' ],
	[ 'gujarati', 'Gujarati' ],
	[ 'hebrew', 'Hebrew' ],
	[ 'hindi', 'Hindi' ],
	[ 'croatian', 'Croatian' ],
	[ 'hungarian', 'Hungarian' ],
	[ 'armenian', 'Armenian' ],
	[ 'indonesian', 'Indonesian' ],
	[ 'icelandic', 'Icelandic' ],
	[ 'italian', 'Italian' ],
	[ 'japanese', 'Japanese' ],
	[ 'javanese', 'Javanese' ],
	[ 'georgian', 'Georgian' ],
	[ 'kazakh', 'Kazakh' ],
	[ 'khmer', 'Khmer' ],
	[ 'kannada', 'Kannada' ],
	[ 'korean', 'Korean' ],
	[ 'kurdish', 'Kurdish' ],
	[ 'kyrgyz', 'Kyrgyz' ],
	[ 'lao', 'Lao' ],
	[ 'lithuanian', 'Lithuanian' ],
	[ 'latvian', 'Latvian' ],
	[ 'macedonian', 'Macedonian' ],
	[ 'malayalam', 'Malayalam' ],
	[ 'mongolian', 'Mongolian' ],
	[ 'marathi', 'Marathi' ],
	[ 'malay', 'Malay' ],
	[ 'burmese', 'Burmese' ],
	[ 'norwegian_bokmal', 'Norwegian Bokmål' ],
	[ 'nepali', 'Nepali' ],
	[ 'dutch', 'Dutch' ],
	[ 'norwegian_nynorsk', 'Norwegian Nynorsk' ],
	[ 'occitan', 'Occitan' ],
	[ 'punjabi', 'Punjabi' ],
	[ 'polish', 'Polish' ],
	[ 'portuguese', 'Portuguese' ],
	[ 'romanian', 'Romanian' ],
	[ 'russian', 'Russian' ],
	[ 'sakha_yakut', 'Sakha (Yakut)' ],
	[ 'sindhi', 'Sindhi' ],
	[ 'sinhala', 'Sinhala' ],
	[ 'slovak', 'Slovak' ],
	[ 'slovenian', 'Slovenian' ],
	[ 'albanian', 'Albanian' ],
	[ 'serbian', 'Serbian' ],
	[ 'swedish', 'Swedish' ],
	[ 'swahili', 'Swahili' ],
	[ 'tamil', 'Tamil' ],
	[ 'telugu', 'Telugu' ],
	[ 'thai', 'Thai' ],
	[ 'tagalog', 'Tagalog' ],
	[ 'turkish', 'Turkish' ],
	[ 'tatar', 'Tatar' ],
	[ 'uyghur', 'Uyghur' ],
	[ 'ukrainian', 'Ukrainian' ],
	[ 'urdu', 'Urdu' ],
	[ 'uzbek', 'Uzbek' ],
	[ 'vietnamese', 'Vietnamese' ],
	[ 'yoruba', 'Yoruba' ],
	[ 'chinese', 'Chinese' ],
];

export function getAiSuiteLanguageOptions( __ ) {
	return LANGUAGE_ROWS.map( ( [ value, name ] ) => ( {
		value,
		label: __( name, 'responsive-block-editor-addons' ),
	} ) );
}
