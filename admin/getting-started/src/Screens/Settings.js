import { useState } from "react";
import Icons from "../icons";
import { ToggleControl } from "@wordpress/components";

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
  return (
    <>
      <SettingsCard title="Automatic Block Recovery" description="Enable this to automatically fix broken blocks on your pages, so you don't have to manually click 'Attempt Block Recovery' every time.">
        <ToggleControl
          __nextHasNoMarginBottom
          checked={true}
        // onChange={() => handleToggle(key)}
        />
      </SettingsCard>
      <SettingsCard className="mt-5" title="Button - Inherit From Theme" description="Enable the 'Inherit From Theme' option to make all buttons in Responsive blocks across your website inherit their styles from the theme.">
        <ToggleControl
          __nextHasNoMarginBottom
          checked={true}
        // onChange={() => handleToggle(key)}
        />
      </SettingsCard>
      <SettingsCard className="mt-5" title="Default Content Width" description="This setting will apply to Container Block's default Content Width.">
        <ToggleControl
          __nextHasNoMarginBottom
          checked={true}
        // onChange={() => handleToggle(key)}
        />
      </SettingsCard>
      <SettingsCard className="mt-5" title="Container Padding" description="This setting will apply default padding in the Container Block.">
        <ToggleControl
          __nextHasNoMarginBottom
          checked={true}
        // onChange={() => handleToggle(key)}
        />
      </SettingsCard>
      <SettingsCard className="mt-5" title="Container Elements Gap" description="This setting will apply default Row & Column Gaps in the Container Block.">
        <ToggleControl
          __nextHasNoMarginBottom
          checked={true}
        // onChange={() => handleToggle(key)}
        />
      </SettingsCard>
    </>

  );
};

const SettingsCard = ({ title, description, children, className="" }) => {
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

export default Settings