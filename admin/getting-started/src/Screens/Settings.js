import { __ } from "@wordpress/i18n";
import { useState, useMemo, useEffect } from "react";
import Icons from "../icons";
import { ToggleControl } from "@wordpress/components";
import debounce from 'lodash/debounce';
import { displayToast } from "../DisplayToast";
import { convertTruthyFalsyValue } from "../../../../src/utils/helper";

const Settings = () => {

  const [settingsTab, setSettingsTab] = useState('editor');

  return (
    <div className="flex xl:mx-7.5 md:mx-3.75 mt-10 mb-10">
      <div className="w-1/4 bg-white rounded-tl-3xl p-5">
        <div className="flex flex-col gap-2">
          <div onClick={() => setSettingsTab('editor')} className={`flex items-center gap-2 px-3 py-4 cursor-pointer rounded-md ${settingsTab === 'editor' && 'bg-slate-100'}`}>
            {Icons.editor}
            <p className="text-base leading-6 font-medium">{__( 'Editor Settings', 'responsive-block-editor-addons' )}</p>
          </div>
        </div>
      </div>
      <div className="w-3/4 rounded-tr-3xl p-10 bg-slate-100">
        {settingsTab === 'editor' && <EditorSettings />}
      </div>
    </div>
  )
}

const EditorSettings = () => {

  const [autoRecovery, setAutoRecovery] = useState(convertTruthyFalsyValue(rbealocalize?.auto_block_recovery));
  const [buttonInherit, setButtonInherit] = useState(convertTruthyFalsyValue(rbealocalize?.global_inherit_from_theme));
  const [contentWidth, setContentWidth] = useState(Number(rbealocalize?.default_content_width));
  const [containerPadding, setContainerPadding] = useState(Number(rbealocalize?.default_container_padding));
  const [containerGap, setContainerGap] = useState(Number(rbealocalize?.default_container_gap));

  return (
    <>
      <SettingsCard title={__( 'Automatic Block Recovery', 'responsive-block-editor-addons' )} description={__( "Enable this to automatically fix broken blocks on your pages, so you don't have to manually click 'Attempt Block Recovery' every time.", 'responsive-block-editor-addons' )}>
        <ToggleControl
          __nextHasNoMarginBottom
          checked={autoRecovery}
          onChange={() => {
            setAutoRecovery(!autoRecovery);
            saveSetting(!autoRecovery, 'rbea_toggle_auto_block_recovery');
          }}
        />
      </SettingsCard>

      <SettingsCard className="mt-5" title={__( 'Button - Inherit From Theme', 'responsive-block-editor-addons' )} description={__( "Enable the 'Inherit From Theme' option to make all buttons in Responsive blocks across your website inherit their styles from the theme.", 'responsive-block-editor-addons' )}>
        <ToggleControl
          __nextHasNoMarginBottom
          checked={buttonInherit}
          onChange={() => {
            setButtonInherit(!buttonInherit);
            saveSetting(!buttonInherit, 'rbea_toggle_global_inherit_from_theme');
          }}
        />
      </SettingsCard>

      <SettingsCard className="mt-5" title={__( 'Default Content Width', 'responsive-block-editor-addons' )} description={__( "Set the default width for the RB Container block. This value will apply automatically unless you override it in individual containers.", 'responsive-block-editor-addons' )}>
        <SettingsInput inputValue={contentWidth} setInput={setContentWidth} unit="PX" maxValue="1600" minValue={0} actionType="rbea_save_content_width" />
      </SettingsCard>

      <SettingsCard className="mt-5" title={__( 'Container Padding', 'responsive-block-editor-addons' )} description={__( 'Define the default padding applied inside the RB Container block. You can adjust it per container when needed.', 'responsive-block-editor-addons' )}>
        <SettingsInput inputValue={containerPadding} setInput={setContainerPadding} unit="PX" maxValue="100" minValue={0} actionType="rbea_save_container_padding" />
      </SettingsCard>

      <SettingsCard className="mt-5" title={__( 'Container Elements Gap', 'responsive-block-editor-addons' )} description={__( 'Control the default spacing between rows and columns inside the RB Container block.', 'responsive-block-editor-addons' )}>
        <SettingsInput inputValue={containerGap} setInput={setContainerGap} unit="PX" maxValue="200" minValue={0} actionType="rbea_save_container_gap" />
      </SettingsCard>
    </>

  );
};

const SettingsCard = ({ title, description, children, className = "" }) => {
  return (
    <div className={`flex justify-between p-6 bg-white rounded-[10px] ${className}`}>
      <div className="w-3/4">
        <p className="text-base leading-6 font-medium">{title}</p>
        <p className="mt-4 text-sm leading-5 font-normal text-setting-desc">{description}</p>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};

const SettingsInput = ({ inputValue, setInput, unit, actionType, maxValue = '', minValue = 0 }) => {

  // Create the debounced function once.
  const debouncedChangeHandler = useMemo(
    () =>
      debounce((value) => {
        console.log("Debounced value:", value);
        saveSetting(value, actionType);
      }, 800),
    [actionType]
  );

  // Cleanup on unmount to prevent memory leaks.
  useEffect(() => {
    return () => debouncedChangeHandler.cancel();
  }, [debouncedChangeHandler]);

  const handleChange = (e) => {
    let value = e.target.value;
    if (value === '') {
      setInput('');
      return;
    }
    const numValue = Number(value);
    if (!isNaN(numValue)) {
      const maxNum = maxValue ? Number(maxValue) : Infinity;
      const clampedValue = Math.max(minValue, Math.min(maxNum, numValue));
      setInput(clampedValue);
      debouncedChangeHandler(clampedValue);
    } else {
      setInput(inputValue);
    }
  };

  return (
    <div className="flex items-center border border-slate-100 py-0.625 px-0.875">
      <input
        className="w-10 !border-0 !p-0 text-sm leading-5 font-normal"
        type="number"
        onChange={handleChange}
        value={inputValue}
        min={minValue}
        {...(maxValue ? { max: maxValue } : {})}
      />
      <p className="text-sm leading-5 font-normal text-[#64748B]">{unit}</p>
    </div>
  );
};

const saveSetting = async (settingValue, actionType) => {

  const formData = new FormData();
  formData.append('action', actionType);
  formData.append('nonce', rbealocalize.nonce);
  formData.append('value', settingValue);

  try {
    const res = await fetch(rbealocalize.ajaxurl, { method: 'POST', body: formData });
    const ok = res?.status === 200;
    displayToast(ok ? 'Settings Saved' : 'Error', ok ? 'success' : 'error');
  } catch (e) {
    displayToast('Error', 'error');
  }
};

export default Settings;