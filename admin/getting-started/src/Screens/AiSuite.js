import { __ } from "@wordpress/i18n";
import { useState } from "react";
import { Button, FormToggle, SelectControl, Spinner, TextControl, TextareaControl } from "@wordpress/components";
import {
  getAiSuitePostTypeOptions,
  getAiSuiteUserRoleOptions,
  getAiSuiteToneOptions,
  getAiSuiteLengthOptions,
  getAiSuiteLanguageOptions,
} from "../../../../src/utils/ai-suite-choices.js";
import { displayToast } from "../DisplayToast";
import Icons from "../icons";

const DEFAULT_SETTINGS = {
  enable_ai_writer: true,
  post_types: 'all',
  user_role_access: 'editor',
  context: '',
  default_tone: 'professional',
  default_length: 'large',
  default_language: 'english',
  max_tokens: 1500,
};

/**
 * @param {unknown} value
 * @param {number}  fallback
 * @return {number}
 */
function normalizeMaxTokens( value, fallback ) {
  if ( value === '' || value === null || value === undefined ) {
    return fallback;
  }
  const n =
    typeof value === 'number' && Number.isFinite( value )
      ? Math.trunc( value )
      : parseInt( String( value ).replace( /\D/g, '' ), 10 );
  if ( ! Number.isFinite( n ) ) {
    return fallback;
  }
  return Math.min( 10000, Math.max( 100, n ) );
}

const aiSuiteCardClass =
  'bg-white rounded-2xl border border-[#CBD5E1] [box-shadow:0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] pb-[40px] pl-[1px] pr-[1px]';

const fieldLabelClass =
  'font-sans font-medium text-base leading-6 tracking-normal text-[#1E293B]';

/**
 * @param {{ ariaLabel: string, children: import('react').ReactNode }} props
 */
function AiSuiteHelpTooltip( { ariaLabel, children } ) {
  return (
    <span className="rbea-ai-suite-context-tooltip">
      <button
        type="button"
        className="rbea-ai-suite-context-tooltip__trigger"
        aria-label={ ariaLabel }
      >
        { Icons.help }
      </button>
      <span
        className="rbea-ai-suite-context-tooltip__content"
        role="tooltip"
      >
        { children }
      </span>
    </span>
  );
}

// AI providers and API keys are configured via WordPress (Settings → Connectors),
// so the getting-started screen no longer manages provider/model/key state.

const AiSuite = () => {

  const rawAiSuite =
    ( typeof rbealocalize !== 'undefined' && rbealocalize.ai_suite ) || {};
  const initialSettings = {
    ...DEFAULT_SETTINGS,
    ...rawAiSuite,
    max_tokens: normalizeMaxTokens(
      rawAiSuite.max_tokens,
      DEFAULT_SETTINGS.max_tokens
    ),
  };

  const [enableAiWriter, setEnableAiWriter] = useState( !! initialSettings.enable_ai_writer );
  const [postTypes, setPostTypes] = useState( initialSettings.post_types );
  const [userRoleAccess, setUserRoleAccess] = useState( initialSettings.user_role_access );
  const [context, setContext] = useState( initialSettings.context || '' );
  const [defaultTone, setDefaultTone] = useState( initialSettings.default_tone );
  const [defaultLength, setDefaultLength] = useState( initialSettings.default_length );
  const [defaultLanguage, setDefaultLanguage] = useState( initialSettings.default_language );
  const [maxTokens, setMaxTokens] = useState( initialSettings.max_tokens );

  // Last persisted values — used to revert on "Cancel".
  const [savedSettings, setSavedSettings] = useState( initialSettings );
  const [saveStatus, setSaveStatus] = useState( 'idle' );
  const [saveError, setSaveError] = useState( '' );

  const applySettings = ( settings ) => {
    setEnableAiWriter( !! settings.enable_ai_writer );
    setPostTypes( settings.post_types || DEFAULT_SETTINGS.post_types );
    setUserRoleAccess( settings.user_role_access || DEFAULT_SETTINGS.user_role_access );
    setContext( settings.context || '' );
    setDefaultTone( settings.default_tone || DEFAULT_SETTINGS.default_tone );
    setDefaultLength( settings.default_length || DEFAULT_SETTINGS.default_length );
    setDefaultLanguage( settings.default_language || DEFAULT_SETTINGS.default_language );
    setMaxTokens(
      normalizeMaxTokens( settings.max_tokens, DEFAULT_SETTINGS.max_tokens )
    );
  };

  const handleCancel = () => {
    applySettings( savedSettings );
    setSaveStatus( 'idle' );
    setSaveError( '' );
  };

  const handleSave = async () => {
    if ( saveStatus === 'saving' ) return;
    setSaveStatus( 'saving' );
    setSaveError( '' );

    const payload = {
      enable_ai_writer: enableAiWriter,
      post_types: postTypes,
      user_role_access: userRoleAccess,
      context,
      default_tone: defaultTone,
      default_length: defaultLength,
      default_language: defaultLanguage,
      max_tokens: maxTokens,
    };

    const formData = new FormData();
    formData.append( 'action', 'rbea_save_ai_suite_settings' );
    formData.append( 'nonce', rbealocalize.nonce );
    formData.append( 'enable_ai_writer', enableAiWriter ? '1' : '0' );
    Object.entries( payload ).forEach( ( [ key, value ] ) => {
      if ( key === 'enable_ai_writer' ) return;
      formData.append( key, value == null ? '' : String( value ) );
    } );

    try {
      const res = await fetch( rbealocalize.ajaxurl, { method: 'POST', body: formData } );
      const body = await res.json().catch( () => ( {} ) );
      if ( ! res.ok || ! body || body.success !== true ) {
        const message = body && body.data && body.data.message
          ? body.data.message
          : __( 'Could not save settings. Please try again.', 'responsive-block-editor-addons' );
        throw new Error( message );
      }
      const merged = { ...DEFAULT_SETTINGS, ...( body.data || payload ) };
      merged.max_tokens = normalizeMaxTokens(
        merged.max_tokens,
        DEFAULT_SETTINGS.max_tokens
      );
      setSavedSettings( merged );
      applySettings( merged );
      displayToast( 'Settings Saved', 'success' );
      setSaveStatus( 'idle' );
    } catch ( err ) {
      setSaveError(
        err && err.message
          ? err.message
          : __( 'Could not save settings. Please try again.', 'responsive-block-editor-addons' )
      );
      displayToast( 'Error', 'error' );
      setSaveStatus( 'error' );
    }
  };

  return (
    <div className="rbea-ai-suite-page flex xl:mx-7.5 md:mx-3.75 mt-10 mb-10">
      <div className="w-full bg-slate-100 p-[40px] rounded-t-3xl">
        <div className="flex flex-col gap-6">

          <div className="rounded-[10px]">
            <div className="flex flex-col gap-2">
              <h2 className="font-sans font-bold text-[30px] leading-[36px] tracking-normal text-[#1E293B]">
                {__( 'AI Writer Settings', 'responsive-block-editor-addons' )}
              </h2>
              <p className="font-sans font-normal text-[16px] leading-[24px] tracking-normal text-[#475569]">
                {__( 'Configure your AI content generation preferences', 'responsive-block-editor-addons' )}
              </p>
            </div>
          </div>

          <div className={aiSuiteCardClass}>
            <div className="border-b border-[#CBD5E1] px-6 pt-6 pb-4">
              <p className="font-sans font-bold text-[18px] leading-[28px] tracking-normal text-[#1E293B]">
                {__( 'AI Writer', 'responsive-block-editor-addons' )}
              </p>
            </div>
            <div className="flex flex-col gap-4 px-6 pt-4">
              <div className="flex justify-between items-start gap-4">
                <div className="flex flex-col gap-1 w-3/4">
                  <p className="font-sans font-medium text-base leading-6 tracking-normal text-[#1E293B]">
                    {__( 'Enable AI Writer', 'responsive-block-editor-addons' )}
                  </p>
                  <p className="font-sans font-normal text-sm leading-5 tracking-normal text-[#64748B]">
                    {__( 'Turn on AI content generation inside Gutenberg editor', 'responsive-block-editor-addons' )}
                  </p>
                </div>
                <FormToggle
                  id="rbea-ai-suite-enable-writer"
                  checked={enableAiWriter}
                  onChange={() => setEnableAiWriter( ! enableAiWriter )}
                  aria-label={__( 'Enable AI Writer', 'responsive-block-editor-addons' )}
                />
              </div>
              <div className="grid grid-cols-2 gap-4 items-center">
                <div className="flex items-center gap-2 min-w-0">
                  <p className={ `${ fieldLabelClass } min-w-0` }>
                    {__( 'Select Post Types', 'responsive-block-editor-addons' )}
                  </p>
                  <AiSuiteHelpTooltip
                    ariaLabel={ __(
                      'What does Select Post Types control?',
                      'responsive-block-editor-addons'
                    ) }
                  >
                    {__(
                      'Choose which post types show the RBA AI Writer toolbar in the block editor.',
                      'responsive-block-editor-addons'
                    )}
                  </AiSuiteHelpTooltip>
                </div>
                <div className="min-w-0 w-full">
                  <SelectControl
                    __nextHasNoMarginBottom
                    hideLabelFromVision
                    label={__( 'Select Post Types', 'responsive-block-editor-addons' )}
                    value={postTypes}
                    options={getAiSuitePostTypeOptions( __ )}
                    onChange={setPostTypes}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-center">
                <div className="flex items-center gap-2 min-w-0">
                  <p className={ `${ fieldLabelClass } min-w-0` }>
                    {__( 'User Role Access', 'responsive-block-editor-addons' )}
                  </p>
                  <AiSuiteHelpTooltip
                    ariaLabel={ __(
                      'What does User Role Access control?',
                      'responsive-block-editor-addons'
                    ) }
                  >
                    {__(
                      'Only users with the selected role or a higher role can use AI Writer.',
                      'responsive-block-editor-addons'
                    )}
                  </AiSuiteHelpTooltip>
                </div>
                <div className="min-w-0 w-full">
                  <SelectControl
                    __nextHasNoMarginBottom
                    hideLabelFromVision
                    label={__( 'User Role Access', 'responsive-block-editor-addons' )}
                    value={userRoleAccess}
                    options={getAiSuiteUserRoleOptions( __ )}
                    onChange={setUserRoleAccess}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={aiSuiteCardClass}>
            <div className="border-b border-[#CBD5E1] px-6 pt-6 pb-4">
              <p className="font-sans font-bold text-[18px] leading-[28px] tracking-normal text-[#1E293B]">
                {__( 'Content Preference', 'responsive-block-editor-addons' )}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 px-6 pt-4">
              <div className="col-span-2 flex flex-col gap-2 min-w-0">
                <div className="flex items-center gap-2 min-w-0">
                  <p className={fieldLabelClass} id="rbea-ai-suite-context-label">
                    {__( 'Context', 'responsive-block-editor-addons' )}
                  </p>
                  <AiSuiteHelpTooltip
                    ariaLabel={ __( 'What is Context?', 'responsive-block-editor-addons' ) }
                  >
                    {__(
                      'Add background information about your site, target audience, and brand guidelines so AI responses stay aligned with your brand voice and content goals.',
                      'responsive-block-editor-addons'
                    )}
                  </AiSuiteHelpTooltip>
                </div>
                <TextareaControl
                  __nextHasNoMarginBottom
                  hideLabelFromVision
                  aria-labelledby="rbea-ai-suite-context-label"
                  label={__( 'Context', 'responsive-block-editor-addons' )}
                  value={context}
                  onChange={setContext}
                  className="rbea-ai-suite-context-field"
                  placeholder={__(
                    'Describe your site, audience, and brand guidelines…',
                    'responsive-block-editor-addons'
                  )}
                />
              </div>
              <div className="flex flex-col gap-2 min-w-0">
                <p className={fieldLabelClass}>{__( 'Default Tone', 'responsive-block-editor-addons' )}</p>
                <SelectControl
                  __nextHasNoMarginBottom
                  hideLabelFromVision
                  label={__( 'Default Tone', 'responsive-block-editor-addons' )}
                  value={defaultTone}
                  options={getAiSuiteToneOptions( __ )}
                  onChange={setDefaultTone}
                />
              </div>
              <div className="flex flex-col gap-2 min-w-0">
                <p className={fieldLabelClass}>{__( 'Default Length', 'responsive-block-editor-addons' )}</p>
                <SelectControl
                  __nextHasNoMarginBottom
                  hideLabelFromVision
                  label={__( 'Default Length', 'responsive-block-editor-addons' )}
                  value={defaultLength}
                  options={getAiSuiteLengthOptions( __ )}
                  onChange={setDefaultLength}
                />
              </div>
              <div className="flex flex-col gap-2 min-w-0">
                <p className={fieldLabelClass}>{__( 'Default Language', 'responsive-block-editor-addons' )}</p>
                <SelectControl
                  __nextHasNoMarginBottom
                  hideLabelFromVision
                  label={__( 'Default Language', 'responsive-block-editor-addons' )}
                  value={defaultLanguage}
                  options={getAiSuiteLanguageOptions( __ )}
                  onChange={setDefaultLanguage}
                />
              </div>
              <div className="flex flex-col gap-2 min-w-0">
                <p className={fieldLabelClass} id="rbea-ai-suite-max-tokens-label">{__( 'Max Tokens', 'responsive-block-editor-addons' )}</p>
                <TextControl
                  __nextHasNoMarginBottom
                  hideLabelFromVision
                  aria-labelledby="rbea-ai-suite-max-tokens-label"
                  label={__( 'Max Tokens', 'responsive-block-editor-addons' )}
                  value={maxTokens}
                  type="number"
                  min={100}
                  max={10000}
                  onChange={ ( v ) =>
                    setMaxTokens(
                      normalizeMaxTokens( v, DEFAULT_SETTINGS.max_tokens )
                    )
                  }
                  placeholder="1500"
                />
              </div>
            </div>
          </div>

          {/* <div className="bg-white rounded-[10px] p-6"> */}
            <div className="flex justify-end items-center gap-3">
              {saveStatus === 'saving' && (
                <div className="flex items-center gap-1 text-[#475569]">
                  <Spinner />
                  <span className="font-sans text-[14px] leading-[20px]">
                    {__( 'Saving…', 'responsive-block-editor-addons' )}
                  </span>
                </div>
              )}
              {saveStatus === 'error' && saveError && (
                <span
                  role="alert"
                  className="font-sans text-[14px] leading-[20px] text-[#DC2626]"
                >
                  {saveError}
                </span>
              )}
              <Button
                isSecondary
                type="button"
                onClick={handleCancel}
                disabled={saveStatus === 'saving'}
                className="w-[95px] h-[40px] py-[6px] px-6 !bg-white !border !border-solid !shadow-none !border-[#CBD5E1] rounded-md font-medium text-[14px] leading-5 text-center !text-[#475569]"
              >
                {__( 'Cancel', 'responsive-block-editor-addons' )}
              </Button>
              <Button
                isPrimary
                type="button"
                onClick={handleSave}
                disabled={saveStatus === 'saving'}
                className="h-[40px] rounded-md !border !border-solid !border-[#2563EB] !bg-[#2563EB] px-[14px] py-[10px] font-medium text-[14px] leading-5 text-white"
              >
                {__( 'Save Changes', 'responsive-block-editor-addons' )}
              </Button>
            </div>
          {/* </div> */}

        </div>
      </div>
    </div>
  );
};

export default AiSuite;
