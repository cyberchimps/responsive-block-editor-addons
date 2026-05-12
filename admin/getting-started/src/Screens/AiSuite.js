import { __ } from "@wordpress/i18n";
import { useState } from "react";
import { Button, FormToggle, SelectControl, TextControl } from "@wordpress/components";

const selectPlaceholder = [
  { label: __( '— Select —', 'responsive-block-editor-addons' ), value: '' },
];

const aiSuiteCardClass =
  'bg-white rounded-2xl border border-[#CBD5E1] [box-shadow:0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] pb-[40px] pl-[1px] pr-[1px]';

const fieldLabelClass =
  'font-sans font-medium text-[16px] leading-[24px] tracking-normal text-[#1E293B]';

const AiSuite = () => {

  const [enableAiWriter, setEnableAiWriter] = useState( false );
  const [postTypes, setPostTypes] = useState( '' );
  const [userRoleAccess, setUserRoleAccess] = useState( '' );
  const [provider, setProvider] = useState( '' );
  const [model, setModel] = useState( '' );
  const [apiKey, setApiKey] = useState( '' );
  const [apiKeyVisible, setApiKeyVisible] = useState( false );
  const [defaultTone, setDefaultTone] = useState( '' );
  const [defaultLength, setDefaultLength] = useState( '' );
  const [defaultLanguage, setDefaultLanguage] = useState( '' );
  const [maxTokens, setMaxTokens] = useState( '' );

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
                    options={selectPlaceholder}
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
                    options={selectPlaceholder}
                    onChange={setModel}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className={fieldLabelClass} id="rbea-ai-suite-api-key-label">{__( 'API Key', 'responsive-block-editor-addons' )}</p>
                <div className="flex gap-2 items-center">
                  <div className="flex-1">
                    <TextControl
                      __nextHasNoMarginBottom
                      id="rbea-ai-suite-api-key"
                      hideLabelFromVision
                      aria-labelledby="rbea-ai-suite-api-key-label"
                      label={__( 'API Key', 'responsive-block-editor-addons' )}
                      type={apiKeyVisible ? 'text' : 'password'}
                      value={apiKey}
                      onChange={setApiKey}
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
              <div className="flex gap-2">
                <Button isSecondary type="button">
                  {__( 'Test Connection', 'responsive-block-editor-addons' )}
                </Button>
                <Button isSecondary type="button">
                  {__( 'Connected', 'responsive-block-editor-addons' )}
                </Button>
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
            <div className="flex justify-end gap-2">
              <Button isSecondary type="button">
                {__( 'Cancel', 'responsive-block-editor-addons' )}
              </Button>
              <Button isPrimary type="button">
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
