import { __ } from "@wordpress/i18n";
import { useState } from "react";
import { Button, FormToggle, SelectControl, Spinner, TextControl } from "@wordpress/components";

const DEFAULT_SETTINGS = {
  enable_ai_writer: false,
  post_types: '',
  user_role_access: '',
  provider: 'google-gemini',
  model: 'gemini-2.5-flash-lite',
  api_key: '',
  default_tone: '',
  default_length: '',
  default_language: '',
  max_tokens: '',
};

const selectPlaceholder = [
  { label: __( '— Select —', 'responsive-block-editor-addons' ), value: '' },
];

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
  'font-sans font-medium text-[16px] leading-[24px] tracking-normal text-[#1E293B]';

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

  // Initial values come from `rbealocalize.ai_suite` (printed into the page on
  // load by PHP), with `DEFAULT_SETTINGS` as a safety fallback.
  const initialSettings = {
    ...DEFAULT_SETTINGS,
    ...( ( typeof rbealocalize !== 'undefined' && rbealocalize.ai_suite ) || {} ),
  };

  const [enableAiWriter, setEnableAiWriter] = useState( !! initialSettings.enable_ai_writer );
  const [postTypes, setPostTypes] = useState( initialSettings.post_types );
  const [userRoleAccess, setUserRoleAccess] = useState( initialSettings.user_role_access );
  const [provider, setProvider] = useState( initialSettings.provider );
  const [model, setModel] = useState( initialSettings.model );
  const [apiKey, setApiKey] = useState( initialSettings.api_key );
  const [apiKeyVisible, setApiKeyVisible] = useState( false );
  const [connectionStatus, setConnectionStatus] = useState( 'idle' );
  const [connectionError, setConnectionError] = useState( '' );
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
    setPostTypes( settings.post_types || '' );
    setUserRoleAccess( settings.user_role_access || '' );
    setProvider( settings.provider || DEFAULT_SETTINGS.provider );
    setModel( settings.model || DEFAULT_SETTINGS.model );
    setApiKey( settings.api_key || '' );
    setDefaultTone( settings.default_tone || '' );
    setDefaultLength( settings.default_length || '' );
    setDefaultLanguage( settings.default_language || '' );
    setMaxTokens( settings.max_tokens || '' );
  };

  const resetConnectionStatus = () => {
    if ( connectionStatus !== 'idle' ) {
      setConnectionStatus( 'idle' );
      setConnectionError( '' );
    }
  };

  const handleApiKeyChange = ( value ) => {
    setApiKey( value );
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
      setConnectionStatus( 'connected' );
    } catch ( err ) {
      setConnectionError( humanizeConnectionError( err ) );
      setConnectionStatus( 'error' );
    }
  };

  const handleCancel = () => {
    applySettings( savedSettings );
    resetConnectionStatus();
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
      setSavedSettings( merged );
      applySettings( merged );
      setSaveStatus( 'saved' );
    } catch ( err ) {
      setSaveError(
        err && err.message
          ? err.message
          : __( 'Could not save settings. Please try again.', 'responsive-block-editor-addons' )
      );
      setSaveStatus( 'error' );
    }
  };

  return (
    <div className="rbea-ai-suite-page flex xl:mx-7.5 md:mx-3.75 mt-10 mb-10">
      <div className="w-full bg-slate-100 p-[40px]">
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
                  <p className="font-sans font-medium text-[18px] leading-[28px] tracking-normal text-[#1E293B]">
                    {__( 'Enable AI Writer', 'responsive-block-editor-addons' )}
                  </p>
                  <p className="font-sans font-normal text-[14px] leading-[20px] tracking-normal text-[#64748B]">
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
                    options={selectPlaceholder}
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
                    options={selectPlaceholder}
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
                    onChange={setProvider}
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
                <p className={fieldLabelClass} id="rbea-ai-suite-api-key-label">{__( 'API Key', 'responsive-block-editor-addons' )}</p>
                <div className="flex gap-2 items-center">
                  <div className={ `flex-1 rbea-ai-suite-api-key${ apiKeyVisible ? '' : ' is-masked' }` }>
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
                  <Button
                    type="button"
                    isSecondary
                    onClick={() => setApiKeyVisible( ! apiKeyVisible )}
                    aria-label={apiKeyVisible ? __( 'Hide API key', 'responsive-block-editor-addons' ) : __( 'Show API key', 'responsive-block-editor-addons' )}
                  >
                    <span className={ `dashicons ${ apiKeyVisible ? 'dashicons-hidden' : 'dashicons-visibility' }` } aria-hidden />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-3 items-center">
                  {connectionStatus !== 'connected' && (
                    <Button
                      isSecondary
                      type="button"
                      onClick={handleTestConnection}
                      disabled={connectionStatus === 'connecting' || !apiKey}
                    >
                      {__( 'Test Connection', 'responsive-block-editor-addons' )}
                    </Button>
                  )}
                  {connectionStatus === 'connecting' && (
                    <div className="flex items-center gap-1 text-[#475569]">
                      <Spinner />
                      <span className="font-sans text-[14px] leading-[20px]">
                        {__( 'Connecting…', 'responsive-block-editor-addons' )}
                      </span>
                    </div>
                  )}
                  {connectionStatus === 'connected' && (
                    <Button isSecondary type="button" disabled>
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
              <div className="flex flex-col gap-2 min-w-0">
                <p className={fieldLabelClass}>{__( 'Default Tone', 'responsive-block-editor-addons' )}</p>
                <SelectControl
                  __nextHasNoMarginBottom
                  hideLabelFromVision
                  label={__( 'Default Tone', 'responsive-block-editor-addons' )}
                  value={defaultTone}
                  options={selectPlaceholder}
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
                  options={selectPlaceholder}
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
                  options={selectPlaceholder}
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
                  onChange={setMaxTokens}
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[10px] p-6">
            <div className="flex justify-end items-center gap-3">
              {saveStatus === 'saving' && (
                <div className="flex items-center gap-1 text-[#475569]">
                  <Spinner />
                  <span className="font-sans text-[14px] leading-[20px]">
                    {__( 'Saving…', 'responsive-block-editor-addons' )}
                  </span>
                </div>
              )}
              {saveStatus === 'saved' && (
                <span className="font-sans text-[14px] leading-[20px] text-[#16A34A]">
                  {__( 'Changes saved.', 'responsive-block-editor-addons' )}
                </span>
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
              >
                {__( 'Cancel', 'responsive-block-editor-addons' )}
              </Button>
              <Button
                isPrimary
                type="button"
                onClick={handleSave}
                disabled={saveStatus === 'saving'}
              >
                {__( 'Save Changes', 'responsive-block-editor-addons' )}
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AiSuite;
