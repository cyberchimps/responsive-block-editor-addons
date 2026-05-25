/**
 * AI Write — gradient pill in the block contextual toolbar.
 *
 */
import { Fragment, useState, useRef } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';
import { useSelect } from '@wordpress/data';
import { BlockControls } from '@wordpress/block-editor';
import { create, insert, registerFormatType } from '@wordpress/rich-text';
import {
	Button,
	Popover,
	SelectControl,
	TextareaControl,
	ToolbarButton,
} from '@wordpress/components';
import { useDispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import {
	getAiSuiteLanguageOptions,
	getAiSuiteLengthOptions,
	getAiSuiteToneOptions,
} from '../../utils/ai-suite-choices.js';

const SUGGESTED_PROMPTS = [
	'Write a product description for...',
	'Create a blog post for...',
	'Craft an about us section for...',
	'Offer a few sentences to invite visitors to...',
	'Write microcopy for a submission form that includes...',
];

const REWRITE_OPTIONS = [
	{
		label: 'Simplify language',
		Icon: SimplifyLanguageIcon,
	},
	{
		label: 'Make it longer',
		Icon: MakeItLongerIcon,
	},
	{
		label: 'Make it shorter',
		Icon: MakeItShorterIcon,
	},
	{
		label: 'Fix spelling & grammar',
		Icon: FixSpellingGrammarIcon,
	},
];

/**
 * Ai Suite + post context: whether the AI Write toolbar may render.
 *
 * @param {string} postType Current editor post type from `core/editor` (empty if unavailable).
 * @return {boolean}
 */
function isAiWriteToolbarAllowedForPostType( postType ) {
	const aiSuite =
		( typeof window !== 'undefined' &&
			window.responsive_globals &&
			window.responsive_globals.ai_suite ) ||
		{};

	let allowed = true;
	if ( ! aiSuite.enable_ai_writer ) {
		allowed = false;
	}
	if ( allowed && ! aiSuite.ai_write_role_allowed ) {
		allowed = false;
	}
	const scope = aiSuite.post_types || 'all';
	if ( allowed && ! postType ) {
		allowed = false;
	}
	if ( allowed && 'all' === scope ) {
		allowed = true;
	} else if ( allowed && 'post' === scope ) {
		allowed = 'post' === postType;
	} else if ( allowed && 'page' === scope ) {
		allowed = 'page' === postType;
	} else if ( allowed ) {
		allowed = false;
	}

	return applyFilters( 'rbea_ai_write_toolbar_enabled', allowed, postType );
}

function AiWriteIcon() {
	return (
		<span className="rbea-ai-write-toolbar-button__icon">
			<svg
				width="14"
				height="14"
				viewBox="0 0 14 14"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
				focusable="false"
			>
				<path
					d="M5.797 9.04165C5.74492 8.83977 5.63969 8.65554 5.49227 8.50812C5.34485 8.3607 5.16062 8.25548 4.95875 8.2034L1.38 7.28057C1.31894 7.26324 1.2652 7.22646 1.22694 7.17583C1.18867 7.12519 1.16797 7.06345 1.16797 6.99998C1.16797 6.93651 1.18867 6.87478 1.22694 6.82414C1.2652 6.7735 1.31894 6.73673 1.38 6.7194L4.95875 5.79598C5.16055 5.74395 5.34473 5.63882 5.49215 5.49151C5.63956 5.34419 5.74483 5.16008 5.797 4.95832L6.71983 1.37957C6.73698 1.31827 6.77372 1.26427 6.82443 1.2258C6.87515 1.18733 6.93705 1.1665 7.0007 1.1665C7.06436 1.1665 7.12626 1.18733 7.17698 1.2258C7.22769 1.26427 7.26442 1.31827 7.28158 1.37957L8.20383 4.95832C8.25591 5.16019 8.36113 5.34442 8.50855 5.49184C8.65597 5.63926 8.8402 5.74449 9.04208 5.79657L12.6208 6.71882C12.6824 6.73579 12.7366 6.77249 12.7753 6.82328C12.814 6.87407 12.8349 6.93614 12.8349 6.99998C12.8349 7.06382 12.814 7.1259 12.7753 7.17669C12.7366 7.22748 12.6824 7.26417 12.6208 7.28115L9.04208 8.2034C8.8402 8.25548 8.65597 8.3607 8.50855 8.50812C8.36113 8.65554 8.25591 8.83977 8.20383 9.04165L7.281 12.6204C7.26384 12.6817 7.22711 12.7357 7.17639 12.7742C7.12568 12.8126 7.06377 12.8335 7.00012 12.8335C6.93647 12.8335 6.87456 12.8126 6.82385 12.7742C6.77314 12.7357 6.7364 12.6817 6.71925 12.6204L5.797 9.04165Z"
					stroke="currentColor"
					strokeWidth="1.16667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M11.666 1.75V4.08333"
					stroke="currentColor"
					strokeWidth="1.16667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M12.8333 2.9165H10.5"
					stroke="currentColor"
					strokeWidth="1.16667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M2.33398 9.9165V11.0832"
					stroke="currentColor"
					strokeWidth="1.16667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M2.91667 10.5H1.75"
					stroke="currentColor"
					strokeWidth="1.16667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</span>
	);
}

function AiWriteHeaderIcon() {
	return (
		<span className="rbea-ai-write-popover__title-icon">
			<svg
				width="18"
				height="18"
				viewBox="0 0 18 18"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
				focusable="false"
			>
				<path
					d="M7.45356 11.6252C7.3866 11.3656 7.25131 11.1288 7.06177 10.9392C6.87223 10.7497 6.63536 10.6144 6.37581 10.5474L1.77456 9.36094C1.69606 9.33866 1.62697 9.29138 1.57777 9.22627C1.52857 9.16117 1.50195 9.08179 1.50195 9.00019C1.50195 8.91858 1.52857 8.83921 1.57777 8.7741C1.62697 8.709 1.69606 8.66172 1.77456 8.63944L6.37581 7.45219C6.63527 7.38529 6.87208 7.25012 7.06161 7.06072C7.25114 6.87132 7.38648 6.6346 7.45356 6.37519L8.64006 1.77394C8.66212 1.69513 8.70935 1.62569 8.77455 1.57623C8.83975 1.52677 8.91934 1.5 9.00118 1.5C9.08302 1.5 9.16262 1.52677 9.22782 1.57623C9.29302 1.62569 9.34025 1.69513 9.36231 1.77394L10.5481 6.37519C10.615 6.63474 10.7503 6.87161 10.9398 7.06115C11.1294 7.25069 11.3663 7.38598 11.6258 7.45294L16.2271 8.63869C16.3062 8.66051 16.376 8.70769 16.4257 8.77299C16.4754 8.83829 16.5023 8.91811 16.5023 9.00019C16.5023 9.08227 16.4754 9.16208 16.4257 9.22738C16.376 9.29268 16.3062 9.33986 16.2271 9.36169L11.6258 10.5474C11.3663 10.6144 11.1294 10.7497 10.9398 10.9392C10.7503 11.1288 10.615 11.3656 10.5481 11.6252L9.36156 16.2264C9.3395 16.3052 9.29227 16.3747 9.22707 16.4241C9.16187 16.4736 9.08227 16.5004 9.00043 16.5004C8.9186 16.5004 8.839 16.4736 8.7738 16.4241C8.7086 16.3747 8.66136 16.3052 8.63931 16.2264L7.45356 11.6252Z"
					stroke="#3800FF"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path d="M15 2.25V5.25" stroke="#3800FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M16.5 3.75H13.5" stroke="#3800FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M3 12.75V14.25" stroke="#3800FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M3.75 13.5H2.25" stroke="#3800FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		</span>
	);
}

function CloseIcon() {
	return (
		<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" focusable="false">
			<path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
		</svg>
	);
}

function CopyIcon() {
	return (
		<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
			<path
				d="M16.666 6H8.33268C7.41221 6 6.66602 6.67157 6.66602 7.5V15C6.66602 15.8284 7.41221 16.5 8.33268 16.5H16.666C17.5865 16.5 18.3327 15.8284 18.3327 15V7.5C18.3327 6.67157 17.5865 6 16.666 6Z"
				stroke="#475569"
				strokeWidth="1.16667"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M3.33268 12C2.41602 12 1.66602 11.325 1.66602 10.5V3C1.66602 2.175 2.41602 1.5 3.33268 1.5H11.666C12.5827 1.5 13.3327 2.175 13.3327 3"
				stroke="#475569"
				strokeWidth="1.16667"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function RegenerateIcon() {
	return (
		<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
			<path d="M1.5 6C1.5 4.80653 1.97411 3.66193 2.81802 2.81802C3.66193 1.97411 4.80653 1.5 6 1.5C7.25802 1.50473 8.46552 1.99561 9.37 2.87L10.5 4" stroke="#9810FA" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M10.5 1.5V4H8" stroke="#9810FA" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M10.5 6C10.5 7.19347 10.0259 8.33807 9.18198 9.18198C8.33807 10.0259 7.19347 10.5 6 10.5C4.74198 10.4953 3.53448 10.0044 2.63 9.13L1.5 8" stroke="#9810FA" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M4 8H1.5V10.5" stroke="#9810FA" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}

function SimplifyLanguageIcon() {
	return (
		<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" focusable="false">
			<path
				d="M4 10.5L2 12V3.75C2 3.41848 2.1317 3.10054 2.36612 2.86612C2.60054 2.6317 2.91848 2.5 3.25 2.5H10.75C11.0815 2.5 11.3995 2.6317 11.6339 2.86612C11.8683 3.10054 12 3.41848 12 3.75V9.25C12 9.58152 11.8683 9.89946 11.6339 10.1339C11.3995 10.3683 11.0815 10.5 10.75 10.5H4Z"
				stroke="currentColor"
				strokeWidth="1.2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function MakeItLongerIcon() {
	return (
		<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" focusable="false">
			<path
				d="M5 7H9"
				stroke="currentColor"
				strokeWidth="1.2"
				strokeLinecap="round"
			/>
			<path
				d="M3.5 5.5L2 7L3.5 8.5"
				stroke="currentColor"
				strokeWidth="1.2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M10.5 5.5L12 7L10.5 8.5"
				stroke="currentColor"
				strokeWidth="1.2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function MakeItShorterIcon() {
	return (
		<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" focusable="false">
			<path
				d="M5 7H9"
				stroke="currentColor"
				strokeWidth="1.2"
				strokeLinecap="round"
			/>
			<path
				d="M4.5 5.5L6 7L4.5 8.5"
				stroke="currentColor"
				strokeWidth="1.2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M9.5 5.5L8 7L9.5 8.5"
				stroke="currentColor"
				strokeWidth="1.2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function FixSpellingGrammarIcon() {
	return (
		<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" focusable="false">
			<path
				d="M7 2.2L7.6 4.1L9.5 4.7L7.6 5.3L7 7.2L6.4 5.3L4.5 4.7L6.4 4.1L7 2.2Z"
				stroke="currentColor"
				strokeWidth="1.1"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M3 8.5L3.35 9.65L4.5 10L3.35 10.35L3 11.5L2.65 10.35L1.5 10L2.65 9.65L3 8.5Z"
				stroke="currentColor"
				strokeWidth="1.1"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M10.5 8.1L10.85 9.25L12 9.6L10.85 9.95L10.5 11.1L10.15 9.95L9 9.6L10.15 9.25L10.5 8.1Z"
				stroke="currentColor"
				strokeWidth="1.1"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function AiWritePopoverContent( {
	onClose,
	richTextValue,
	richTextOnChange,
} ) {
	const { createSuccessNotice, createErrorNotice } = useDispatch(
		'core/notices'
	);

	const aiSuite =
		( typeof window !== 'undefined' &&
			window.responsive_globals &&
			window.responsive_globals.ai_suite ) ||
		{};
	const ajaxUrl =
		( typeof window !== 'undefined' &&
			window.responsive_globals &&
			window.responsive_globals.ajax_url ) ||
		'';
	const ajaxNonce =
		( typeof window !== 'undefined' &&
			window.responsive_globals &&
			window.responsive_globals.responsive_block_editor_ajax_nonce ) ||
		'';

	const hasApiKey = !! aiSuite.has_api_key;
	const settingsUrl = aiSuite.settings_url || '#';

	const [ popupMode, setPopupMode ] = useState( 'rewrite' );
	const [ rewriteText, setRewriteText ] = useState(
		( richTextValue && richTextValue.text ) || ''
	);
	const [ changeTone, setChangeTone ] = useState( '' );
	const [ translateTo, setTranslateTo ] = useState( '' );
	const lengthOptions = getAiSuiteLengthOptions( __ );
	const toneOptions = getAiSuiteToneOptions( __ );
	const languageOptions = getAiSuiteLanguageOptions( __ );
	const changeToneOptions = [
		{
			label: __( 'Change Tone', 'responsive-block-editor-addons' ),
			value: '',
			disabled: true,
		},
		...toneOptions,
	];
	const translateToOptions = [
		{
			label: __( 'Translate to', 'responsive-block-editor-addons' ),
			value: '',
			disabled: true,
		},
		...languageOptions,
	];

	const [ prompt, setPrompt ] = useState( '' );
	const [ length, setLength ] = useState(
		aiSuite.default_length || 'large'
	);
	const [ tone, setTone ] = useState( aiSuite.default_tone || 'professional' );
	const [ isGenerating, setIsGenerating ] = useState( false );
	const [ generatedContent, setGeneratedContent ] = useState( '' );
	const [ generationError, setGenerationError ] = useState( '' );
	const [ hasUsedGenerateNow, setHasUsedGenerateNow ] = useState( false );

	const handleGenerate = async () => {
		if ( isGenerating ) return;
		if ( ! prompt.trim() ) {
			setGenerationError(
				__(
					'Enter a prompt describing what you want to write.',
					'responsive-block-editor-addons'
				)
			);
			return;
		}
		if ( ! hasApiKey ) {
			setGenerationError(
				__(
					'No API key configured. Add one in Ai Suite.',
					'responsive-block-editor-addons'
				)
			);
			return;
		}

		setIsGenerating( true );
		setGenerationError( '' );

		const formData = new FormData();
		formData.append( 'action', 'rbea_ai_generate' );
		formData.append( 'nonce', ajaxNonce );
		formData.append( 'prompt', prompt );
		formData.append( 'length', length );
		formData.append( 'tone', tone );

		try {
			const res = await fetch( ajaxUrl, { method: 'POST', body: formData } );
			const body = await res.json().catch( () => ( {} ) );
			if ( ! res.ok || ! body || body.success !== true ) {
				const message =
					( body && body.data && body.data.message ) ||
					__(
						'Could not generate content. Please try again.',
						'responsive-block-editor-addons'
					);
				throw new Error( message );
			}
			setGeneratedContent( ( body.data && body.data.text ) || '' );
			setHasUsedGenerateNow( true );
		} catch ( err ) {
			setGenerationError(
				err && err.message
					? err.message
					: __(
							'Could not generate content. Please try again.',
							'responsive-block-editor-addons'
					  )
			);
		} finally {
			setIsGenerating( false );
		}
	};

	const handleReplaceText = () => {
		const text = ( generatedContent || '' ).trim();
		if ( ! text || typeof richTextOnChange !== 'function' ) {
			return;
		}
		const next = create( { text } );
		next.start = text.length;
		next.end = text.length;
		richTextOnChange( next );
	};

	const handleInsertBelow = () => {
		const text = ( generatedContent || '' ).trim();
		if ( ! text || typeof richTextOnChange !== 'function' || ! richTextValue ) {
			return;
		}
		const len = richTextValue.text.length;
		const prefix = len > 0 ? '\n\n' : '';
		const addition = create( { text: prefix + text } );
		const next = insert( richTextValue, addition, len, len );
		richTextOnChange( next );
	};

	const handleCopy = async () => {
		const text = generatedContent || '';
		if ( ! text.trim() ) {
			return;
		}
		try {
			await navigator.clipboard.writeText( text );
			createSuccessNotice(
				__( 'Copied to clipboard.', 'responsive-block-editor-addons' ),
				{ type: 'snackbar', isDismissible: true }
			);
		} catch ( err ) {
			createErrorNotice(
				__( 'Could not copy to clipboard.', 'responsive-block-editor-addons' ),
				{ type: 'snackbar' }
			);
		}
	};

	const canApplyGenerated = !! ( generatedContent && generatedContent.trim() );

	return (
		<div className="rbea-ai-write-popover__container">
			<div className="rbea-ai-write-popover__header">
				<div className="rbea-ai-write-popover__title">
					<AiWriteHeaderIcon />
					<span>{ __( 'Responsive AI Writer', 'responsive-block-editor-addons' ) }</span>
				</div>
				<button
					type="button"
					className="rbea-ai-write-popover__close"
					aria-label={ __( 'Close', 'responsive-block-editor-addons' ) }
					onClick={ onClose }
				>
					<CloseIcon />
				</button>
			</div>

			{ ! hasApiKey && (
				<div className="rbea-ai-write-popover__api-key-warning">
					<span>
						{ __( 'Connect your API key in settings.', 'responsive-block-editor-addons' ) }{ ' ' }
						<a href={ settingsUrl }>
							{ __( 'Go to Settings', 'responsive-block-editor-addons' ) }
						</a>
					</span>
				</div>
			) }

			{ popupMode === 'rewrite' ? (
				<Fragment>
					<TextareaControl
						label={ __( 'Rewrite text', 'responsive-block-editor-addons' ) }
						hideLabelFromVision
						value={ rewriteText }
						onChange={ setRewriteText }
						className="rbea-ai-write-popover__prompt"
						rows={ 3 }
					/>

					<div className="rbea-ai-write-popover__field">
						<div className="rbea-ai-write-popover__chips">
							{ REWRITE_OPTIONS.map( ( { label, Icon } ) => (
								<button
									key={ label }
									type="button"
									className="rbea-ai-write-popover__chip"
								>
									<span className="rbea-ai-write-popover__chip-icon">
										<Icon />
									</span>
									{ label }
								</button>
							) ) }
						</div>
					</div>

					<div className="rbea-ai-write-popover__row">
						<SelectControl
							__nextHasNoMarginBottom
							label={ __( 'Change Tone', 'responsive-block-editor-addons' ) }
							hideLabelFromVision
							value={ changeTone }
							options={ changeToneOptions }
							onChange={ setChangeTone }
							className="rbea-ai-write-popover__select"
						/>
						<SelectControl
							__nextHasNoMarginBottom
							label={ __( 'Translate to', 'responsive-block-editor-addons' ) }
							hideLabelFromVision
							value={ translateTo }
							options={ translateToOptions }
							onChange={ setTranslateTo }
							className="rbea-ai-write-popover__select"
						/>
					</div>

					<div className="rbea-ai-write-popover__actions">
						<Button
							className="rbea-ai-write-popover__action rbea-ai-write-popover__action--rewrite-prompt"
							onClick={ () => setPopupMode( 'prompt' ) }
						>
							{ __( 'New Prompt', 'responsive-block-editor-addons' ) }
						</Button>
						<Button
							className="rbea-ai-write-popover__action rbea-ai-write-popover__action--rewrite-use"
							disabled
						>
							{ __( 'Use text', 'responsive-block-editor-addons' ) }
						</Button>
					</div>
				</Fragment>
			) : (
				<Fragment>
					<TextareaControl
						label={ __( 'Prompt', 'responsive-block-editor-addons' ) }
						hideLabelFromVision
						value={ prompt }
						onChange={ setPrompt }
						placeholder={ __(
							'Describe what you want to write…',
							'responsive-block-editor-addons'
						) }
						className="rbea-ai-write-popover__prompt"
						rows={ 3 }
					/>

					{ prompt.length === 0 && (
						<div className="rbea-ai-write-popover__field">
							<span className="rbea-ai-write-popover__field-label">
								{ __( 'Suggested Prompts', 'responsive-block-editor-addons' ) }
							</span>
							<div className="rbea-ai-write-popover__chips">
								{ SUGGESTED_PROMPTS.map( ( label ) => (
									<button
										key={ label }
										type="button"
										className="rbea-ai-write-popover__chip"
										onClick={ () => setPrompt( label ) }
									>
										{ label }
									</button>
								) ) }
							</div>
						</div>
					) }

					<div className="rbea-ai-write-popover__row">
						<SelectControl
							__nextHasNoMarginBottom
							label={ __( 'Length', 'responsive-block-editor-addons' ) }
							value={ length }
							options={ lengthOptions }
							onChange={ setLength }
							className="rbea-ai-write-popover__length"
						/>
						<SelectControl
							__nextHasNoMarginBottom
							label={ __( 'Tone', 'responsive-block-editor-addons' ) }
							value={ tone }
							options={ toneOptions }
							onChange={ setTone }
							className="rbea-ai-write-popover__tone"
						/>
					</div>

					<Button
						className={
							'rbea-ai-write-popover__generate' +
							( hasUsedGenerateNow
								? ' rbea-ai-write-popover__generate--locked'
								: '' )
						}
						onClick={ handleGenerate }
						disabled={
							isGenerating ||
							! prompt.trim() ||
							! hasApiKey ||
							hasUsedGenerateNow
						}
					>
						<AiWriteIcon />
						<span className="rbea-ai-write-popover__generate-label">
							{ isGenerating
								? __( 'Generating…', 'responsive-block-editor-addons' )
								: __( 'Generate Now', 'responsive-block-editor-addons' ) }
						</span>
					</Button>

					{ generationError && (
						<p className="rbea-ai-write-popover__error" role="alert">
							{ generationError }
						</p>
					) }

					{ generatedContent && (
						<Fragment>
							<div className="rbea-ai-write-popover__preview">
								{ generatedContent }
							</div>

							<div className="rbea-ai-write-popover__actions">
								<Button
									className="rbea-ai-write-popover__action rbea-ai-write-popover__action--replace"
									onClick={ handleReplaceText }
									disabled={ ! canApplyGenerated }
								>
									{ __( 'Replace Text', 'responsive-block-editor-addons' ) }
								</Button>
								<Button
									className="rbea-ai-write-popover__action rbea-ai-write-popover__action--insert"
									onClick={ handleInsertBelow }
									disabled={ ! canApplyGenerated }
								>
									{ __( 'Insert Below', 'responsive-block-editor-addons' ) }
								</Button>
								<button
									type="button"
									className="rbea-ai-write-popover__copy"
									aria-label={ __( 'Copy', 'responsive-block-editor-addons' ) }
									onClick={ handleCopy }
									disabled={ ! canApplyGenerated }
								>
									<span className="rbea-ai-write-popover__copy-inner">
										<CopyIcon />
									</span>
								</button>
							</div>

							<button
								type="button"
								className="rbea-ai-write-popover__regenerate"
								onClick={ handleGenerate }
								disabled={ isGenerating }
							>
								<RegenerateIcon />
								<span>{ __( 'Regenerate', 'responsive-block-editor-addons' ) }</span>
							</button>
						</Fragment>
					) }
				</Fragment>
			) }
		</div>
	);
}

function AiWriteToolbarButton( { richTextValue, richTextOnChange } ) {
	const [ isOpen, setIsOpen ] = useState( false );
	const anchorRef = useRef( null );

	return (
		<Fragment>
			<ToolbarButton
				ref={ anchorRef }
				className="rbea-ai-write-toolbar-button"
				title={ __( 'AI Write', 'responsive-block-editor-addons' ) }
				onClick={ () => setIsOpen( ( open ) => ! open ) }
			>
				<AiWriteIcon />
				<span className="rbea-ai-write-toolbar-button__label">
					{ __( 'AI Write', 'responsive-block-editor-addons' ) }
				</span>
			</ToolbarButton>
			{ isOpen && (
				<Popover
					className="rbea-ai-write-popover"
					anchor={ anchorRef.current }
					anchorRef={ anchorRef.current }
					position="bottom right"
					placement="bottom-end"
					onClose={ () => setIsOpen( false ) }
					onFocusOutside={ () => setIsOpen( false ) }
				>
					<AiWritePopoverContent
						onClose={ () => setIsOpen( false ) }
						richTextValue={ richTextValue }
						richTextOnChange={ richTextOnChange }
					/>
				</Popover>
			) }
		</Fragment>
	);
}

const RBEA_AI_WRITE_FORMAT = 'responsive-block-editor-addons/ai-write';

/**
 * RichText format `edit` — Nexter-style: BlockControls from inside the format
 * so the slot fills the block toolbar only for the active RichText instance.
 */
function AiWriteFormatEdit( { value, onChange } ) {
	const postType = useSelect( ( select ) => {
		const editorSelect = select( 'core/editor' );
		if ( ! editorSelect || typeof editorSelect.getCurrentPostType !== 'function' ) {
			return '';
		}
		return editorSelect.getCurrentPostType() || '';
	}, [] );

	if ( ! isAiWriteToolbarAllowedForPostType( postType ) ) {
		return null;
	}

	return (
		<BlockControls group="other">
			<AiWriteToolbarButton
				richTextValue={ value }
				richTextOnChange={ onChange }
			/>
		</BlockControls>
	);
}

registerFormatType( RBEA_AI_WRITE_FORMAT, {
	title: __( 'AI Write', 'responsive-block-editor-addons' ),
	tagName: 'span',
	className: 'rbea-ai-write-format',
	edit: AiWriteFormatEdit,
} );
