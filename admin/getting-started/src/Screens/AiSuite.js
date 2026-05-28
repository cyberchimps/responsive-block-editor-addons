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

/** Eye open — key visible (click to hide). */
function ApiKeyVisibilityOnIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M1.7181 10.2898C1.64865 10.1027 1.64865 9.89691 1.7181 9.70981C2.39452 8.06969 3.5427 6.66735 5.01708 5.68056C6.49146 4.69378 8.22564 4.16699 9.99977 4.16699C11.7739 4.16699 13.5081 4.69378 14.9825 5.68056C16.4568 6.66735 17.605 8.06969 18.2814 9.70981C18.3509 9.89691 18.3509 10.1027 18.2814 10.2898C17.605 11.9299 16.4568 13.3323 14.9825 14.3191C13.5081 15.3058 11.7739 15.8326 9.99977 15.8326C8.22564 15.8326 6.49146 15.3058 5.01708 14.3191C3.5427 13.3323 2.39452 11.9299 1.7181 10.2898Z"
        stroke="#64748B"
        strokeWidth="0.952381"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
        stroke="#64748B"
        strokeWidth="0.952381"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Eye obscured — key masked (click to show). Same stroke weight as open state. */
function ApiKeyVisibilityOffIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M1.7181 10.2898C1.64865 10.1027 1.64865 9.89691 1.7181 9.70981C2.39452 8.06969 3.5427 6.66735 5.01708 5.68056C6.49146 4.69378 8.22564 4.16699 9.99977 4.16699C11.7739 4.16699 13.5081 4.69378 14.9825 5.68056C16.4568 6.66735 17.605 8.06969 18.2814 9.70981C18.3509 9.89691 18.3509 10.1027 18.2814 10.2898C17.605 11.9299 16.4568 13.3323 14.9825 14.3191C13.5081 15.3058 11.7739 15.8326 9.99977 15.8326C8.22564 15.8326 6.49146 15.3058 5.01708 14.3191C3.5427 13.3323 2.39452 11.9299 1.7181 10.2898Z"
        stroke="#64748B"
        strokeWidth="0.952381"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
        stroke="#64748B"
        strokeWidth="0.952381"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.2 15.8L15.8 4.2"
        stroke="#64748B"
        strokeWidth="0.952381"
        strokeLinecap="round"
      />
    </svg>
  );
}

const DEFAULT_SETTINGS = {
  enable_ai_writer: true,
  post_types: 'all',
  user_role_access: 'editor',
  provider: 'google-gemini',
  model: 'gemini-2.5-flash-lite',
  api_key: '',
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

const PROVIDER_OPTIONS = [
  { label: __( 'Google Gemini', 'responsive-block-editor-addons' ), value: 'google-gemini' },
];

const MODEL_OPTIONS = [
  { label: __( '2.5 Flash', 'responsive-block-editor-addons' ), value: 'gemini-2.5-flash' },
  { label: __( '2.5 Flash Lite', 'responsive-block-editor-addons' ), value: 'gemini-2.5-flash-lite' },
  { label: __( '2.5 Pro', 'responsive-block-editor-addons' ), value: 'gemini-2.5-pro' },
];

const aiSuiteCardClass =
  'bg-white rounded-2xl border border-[#CBD5E1] [box-shadow:0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] pb-[40px] pl-[1px] pr-[1px]';

const fieldLabelClass =
  'font-sans font-medium text-base leading-6 tracking-normal text-[#1E293B]';

/**
 * Hits Gemini's `generateContent` endpoint with a 1-token prompt to validate
 * the API key + model combo. Returns on success, throws an Error (with
 * `.status` + `.apiStatus`) on failure.
 */
async function testGeminiConnection( model, apiKey ) {
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${ encodeURIComponent(
    model
  ) }:generateContent?key=${ encodeURIComponent( apiKey ) }`;

  let response;
  try {
    response = await fetch( endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( {
        contents: [ { parts: [ { text: 'Hi' } ] } ],
        generationConfig: { maxOutputTokens: 5 },
      } ),
    } );
  } catch ( networkErr ) {
    const err = new Error( 'NETWORK' );
    err.cause = networkErr;
    throw err;
  }

  let data = {};
  try {
    data = await response.json();
  } catch ( _e ) {
    // Ignore — we'll fall back to response status below.
  }

  if ( ! response.ok ) {
    const apiMessage = data?.error?.message || '';
    const apiStatus = data?.error?.status || '';
    const err = new Error( apiMessage );
    err.status = response.status;
    err.apiStatus = apiStatus;
    throw err;
  }
}

/**
 * @param {{ connection_verified?: boolean }} settings
 * @return {'connected' | 'idle'}
 */
function deriveConnectionStatus( settings ) {
  return settings && settings.connection_verified ? 'connected' : 'idle';
}

function humanizeConnectionError( err ) {
  if ( err.message === 'NETWORK' ) {
    return __(
      'Could not reach Google. Check your internet connection and try again.',
      'responsive-block-editor-addons'
    );
  }

  const message = err.message || '';
  const status = err.status;
  const apiStatus = err.apiStatus || '';

  if (
    /api key (not valid|invalid|expired)/i.test( message ) ||
    apiStatus === 'INVALID_ARGUMENT' && /api key/i.test( message ) ||
    apiStatus === 'UNAUTHENTICATED'
  ) {
    return __(
      'The API key was rejected. Copy a fresh key from Google AI Studio and try again.',
      'responsive-block-editor-addons'
    );
  }

  if ( status === 403 || apiStatus === 'PERMISSION_DENIED' ) {
    return __(
      'This API key does not have permission to use the selected model.',
      'responsive-block-editor-addons'
    );
  }

  if ( status === 404 || apiStatus === 'NOT_FOUND' ) {
    return __(
      'The selected model is not available for this API key.',
      'responsive-block-editor-addons'
    );
  }

  if ( status === 429 || apiStatus === 'RESOURCE_EXHAUSTED' ) {
    if ( /quota|billing|plan|tier/i.test( message ) ) {
      return __(
        'This model is not available on your current Gemini plan. Enable billing in Google AI Studio, or pick 2.5 Flash / Flash Lite.',
        'responsive-block-editor-addons'
      );
    }
    return __(
      'Too many requests right now. Wait a moment and try again.',
      'responsive-block-editor-addons'
    );
  }

  if ( status >= 500 ) {
    return __(
      'Google’s servers returned an error. Please try again in a moment.',
      'responsive-block-editor-addons'
    );
  }

  return message
    ? message
    : __(
        'Something went wrong while testing the connection. Please try again.',
        'responsive-block-editor-addons'
      );
}

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
  const [provider, setProvider] = useState( initialSettings.provider );
  const [model, setModel] = useState( initialSettings.model );
  const [apiKey, setApiKey] = useState( initialSettings.api_key );
  const [apiKeyVisible, setApiKeyVisible] = useState( false );
  const [connectionStatus, setConnectionStatus] = useState( () =>
    deriveConnectionStatus( initialSettings )
  );
  const [connectionError, setConnectionError] = useState( '' );
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
    setProvider( settings.provider || DEFAULT_SETTINGS.provider );
    setModel( settings.model || DEFAULT_SETTINGS.model );
    setApiKey( settings.api_key || '' );
    setContext( settings.context || '' );
    setDefaultTone( settings.default_tone || DEFAULT_SETTINGS.default_tone );
    setDefaultLength( settings.default_length || DEFAULT_SETTINGS.default_length );
    setDefaultLanguage( settings.default_language || DEFAULT_SETTINGS.default_language );
    setMaxTokens(
      normalizeMaxTokens( settings.max_tokens, DEFAULT_SETTINGS.max_tokens )
    );
  };

  const resetConnectionStatus = () => {
    setConnectionStatus( 'idle' );
    setConnectionError( '' );
  };

  const syncConnectionFromSettings = ( settings ) => {
    setConnectionStatus( deriveConnectionStatus( settings ) );
    setConnectionError( '' );
  };

  const handleApiKeyChange = ( value ) => {
    setApiKey( value );
    resetConnectionStatus();
  };

  const handleProviderChange = ( value ) => {
    setProvider( value );
    resetConnectionStatus();
  };

  const handleModelChange = ( value ) => {
    setModel( value );
    resetConnectionStatus();
  };

  const handleTestConnection = async () => {
    if ( ! apiKey || connectionStatus === 'connecting' ) {
      return;
    }
    setConnectionStatus( 'connecting' );
    setConnectionError( '' );
    try {
      await testGeminiConnection( model, apiKey );
      // Session-only: persist key + Connected on Save, not on Test.
      setConnectionStatus( 'connected' );
    } catch ( err ) {
      setConnectionError(
        err && err.message
          ? err.message
          : humanizeConnectionError( err )
      );
      setConnectionStatus( 'error' );
    }
  };

  const handleCancel = () => {
    applySettings( savedSettings );
    syncConnectionFromSettings( savedSettings );
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
      provider,
      model,
      api_key: apiKey,
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
    if ( connectionStatus === 'connected' ) {
      formData.append( 'connection_verified', '1' );
    }
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
      syncConnectionFromSettings( merged );
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
                <p className={ `${ fieldLabelClass } min-w-0` }>
                  {__( 'Select Post Types', 'responsive-block-editor-addons' )}
                </p>
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
                <p className={ `${ fieldLabelClass } min-w-0` }>
                  {__( 'User Role Access', 'responsive-block-editor-addons' )}
                </p>
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
                {__( 'AI Provider', 'responsive-block-editor-addons' )}
              </p>
            </div>
            <div className="flex flex-col gap-4 px-6 pt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2 min-w-0">
                  <p className={fieldLabelClass}>{__( 'Provider', 'responsive-block-editor-addons' )}</p>
                  <SelectControl
                    __nextHasNoMarginBottom
                    hideLabelFromVision
                    label={__( 'Provider', 'responsive-block-editor-addons' )}
                    value={provider}
                    options={PROVIDER_OPTIONS}
                    onChange={handleProviderChange}
                  />
                </div>
                <div className="flex flex-col gap-2 min-w-0">
                  <p className={fieldLabelClass}>{__( 'Model', 'responsive-block-editor-addons' )}</p>
                  <SelectControl
                    __nextHasNoMarginBottom
                    hideLabelFromVision
                    label={__( 'Model', 'responsive-block-editor-addons' )}
                    value={model}
                    options={MODEL_OPTIONS}
                    onChange={handleModelChange}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row flex-wrap items-center gap-2 min-w-0">
                  <p className={ fieldLabelClass } id="rbea-ai-suite-api-key-label">{ __( 'API Key', 'responsive-block-editor-addons' ) }</p>
                  <a
                    className="text-[12px] font-medium leading-5 text-[#64748B] underline hover:underline"
                    href="https://cyberchimps.com/docs/responsive-blocks/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    { __( 'Get API Key', 'responsive-block-editor-addons' ) }
                    <span className="sr-only">{ __( '(opens in a new tab)', 'responsive-block-editor-addons' ) }</span>
                  </a>
                </div>
                <div className="relative min-w-0 w-full rbea-ai-suite-api-key-field">
                  <div className={ `min-w-0 w-full rbea-ai-suite-api-key${ apiKeyVisible ? '' : ' is-masked' }` }>
                    <TextControl
                      __nextHasNoMarginBottom
                      id="rbea-ai-suite-api-key"
                      hideLabelFromVision
                      aria-labelledby="rbea-ai-suite-api-key-label"
                      label={__( 'API Key', 'responsive-block-editor-addons' )}
                      type="text"
                      name="rbea_ai_suite_api_key"
                      autoComplete="off"
                      spellCheck={false}
                      value={apiKey}
                      onChange={handleApiKeyChange}
                    />
                  </div>
                  <button
                    type="button"
                    className="rbea-ai-suite-api-key-toggle"
                    onClick={ () => setApiKeyVisible( ! apiKeyVisible ) }
                    aria-label={ apiKeyVisible ? __( 'Hide API key', 'responsive-block-editor-addons' ) : __( 'Show API key', 'responsive-block-editor-addons' ) }
                    aria-pressed={ apiKeyVisible }
                  >
                    { apiKeyVisible ? <ApiKeyVisibilityOnIcon /> : <ApiKeyVisibilityOffIcon /> }
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <div
                    className={
                      'inline-flex rounded-md rbea-ai-suite-test-connection-wrap' +
                      ( connectionStatus === 'connecting'
                        ? ' rbea-ai-suite-test-connection-wrap--connecting relative'
                        : '' ) +
                      ( ! apiKey ? ' rbea-ai-suite-test-connection-wrap--disabled' : '' )
                    }
                  >
                    <Button
                      isSecondary
                      type="button"
                      onClick={handleTestConnection}
                      disabled={connectionStatus === 'connecting' || !apiKey}
                      aria-busy={connectionStatus === 'connecting'}
                      className="min-w-[138px] min-h-[40px] py-[10px] px-[14px] !bg-[#2563EB] !border !border-solid !shadow-none !border-[#2563EB] rounded-md font-medium text-[14px] leading-5 text-center !text-white"
                    >
                      {__( 'Test Connection', 'responsive-block-editor-addons' )}
                    </Button>
                    {connectionStatus === 'connecting' && (
                      <span
                        className="rbea-ai-suite-test-connection-spinner"
                        aria-hidden="true"
                      >
                        <Spinner />
                      </span>
                    )}
                  </div>
                  {connectionStatus === 'connected' && (
                    <Button
                      isSecondary
                      type="button"
                      disabled
                      className="min-w-[114px] min-h-[40px] py-[10px] px-[12px] !inline-flex !items-center !justify-center gap-2 !bg-[#ECFDF5] !border-none !shadow-none rounded-md font-medium text-[14px] leading-5 text-center !text-[#15803D]"
                    >
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0"
                        aria-hidden="true"
                      >
                        <path
                          d="M0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4Z"
                          fill="#15803D"
                        />
                      </svg>
                      {__( 'Connected', 'responsive-block-editor-addons' )}
                    </Button>
                  )}
                </div>
                {connectionStatus === 'error' && connectionError && (
                  <p
                    role="alert"
                    className="font-sans text-[14px] leading-[20px] tracking-normal text-[#DC2626] m-0"
                  >
                    {connectionError}
                  </p>
                )}
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
                  <span className="rbea-ai-suite-context-tooltip">
                    <button
                      type="button"
                      className="rbea-ai-suite-context-tooltip__trigger"
                      aria-label={ __( 'What is Context?', 'responsive-block-editor-addons' ) }
                    >
                      { Icons.help }
                    </button>
                    <span
                      className="rbea-ai-suite-context-tooltip__content"
                      role="tooltip"
                    >
                      {__(
                        'Add background about your site, target audience, and brand guidelines so AI responses stay aligned with your brand voice and content goals.',
                        'responsive-block-editor-addons'
                      )}
                    </span>
                  </span>
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
