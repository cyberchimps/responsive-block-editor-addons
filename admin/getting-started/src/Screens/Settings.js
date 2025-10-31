import { useState, useMemo, useEffect } from "react";
import Icons from "../icons";
import { ToggleControl } from "@wordpress/components";
import debounce from 'lodash/debounce';
import { displayToast } from "../DisplayToast";

const Settings = () => {

  const [settingsTab, setSettingsTab] = useState('editor');

  return (
    <div className="flex mx-7.5 mt-10 mb-10">
      <div className="w-1/4 bg-white rounded-tl-3xl p-5">
        <div className="flex flex-col gap-2">
          <div onClick={() => setSettingsTab('editor')} className={`flex items-center gap-2 px-3 py-4 cursor-pointer rounded-md ${settingsTab === 'editor' && 'bg-slate-100'}`}>
            {Icons.editor}
            <p className="text-base leading-6 font-medium">Editor Settings</p>
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
      <SettingsCard title="Automatic Block Recovery" description="Enable this to automatically fix broken blocks on your pages, so you don't have to manually click 'Attempt Block Recovery' every time.">
        <ToggleControl
          __nextHasNoMarginBottom
          checked={autoRecovery}
          onChange={() => {
            setAutoRecovery(!autoRecovery);
            saveSetting(!autoRecovery, 'rbea_toggle_auto_block_recovery');
          }}
        />
      </SettingsCard>

      <SettingsCard className="mt-5" title="Button - Inherit From Theme" description="Enable the 'Inherit From Theme' option to make all buttons in Responsive blocks across your website inherit their styles from the theme.">
        <ToggleControl
          __nextHasNoMarginBottom
          checked={buttonInherit}
          onChange={() => {
            setButtonInherit(!buttonInherit);
            saveSetting(!buttonInherit, 'rbea_toggle_global_inherit_from_theme');
          }}
        />
      </SettingsCard>

      <SettingsCard className="mt-5" title="Default Content Width" description="This setting will apply to Container Block's default Content Width.">
        <SettingsInput inputValue={contentWidth} setInput={setContentWidth} unit="PX" maxValue="2000" actionType="rbea_save_content_width" />
      </SettingsCard>

      <SettingsCard className="mt-5" title="Container Padding" description="This setting will apply default padding in the Container Block.">
        <SettingsInput inputValue={containerPadding} setInput={setContainerPadding} unit="PX" actionType="rbea_save_container_padding" />
      </SettingsCard>

      <SettingsCard className="mt-5" title="Container Elements Gap" description="This setting will apply default Row & Column Gaps in the Container Block.">
        <SettingsInput inputValue={containerGap} setInput={setContainerGap} unit="PX" actionType="rbea_save_container_gap" />
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

const SettingsInput = ({ inputValue, setInput, unit, actionType, maxValue = '' }) => {

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
    const value = e.target.value;
    setInput(value);
    debouncedChangeHandler(value);
  };

  return (
    <div className="flex items-center border border-slate-100 py-0.625 px-0.875">
      <input
        className="w-10 !border-0 !p-0 text-sm leading-5 font-normal"
        type="number"
        onChange={handleChange}
        value={inputValue}
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

const convertTruthyFalsyValue = ( value ) => {
  switch( value ) {
    case "0":
    case 0:
    case false:
    case "false":
    case null:
    case undefined:
      return false;
    case "1":
    case 1:
    case true:
    case "true":
      return true;
  }
};

export default Settings;