import { __ } from "@wordpress/i18n";
import Icons from "../icons";
import { useHistory } from 'react-router-dom';
import { ToggleControl } from "@wordpress/components";
import { useState } from 'react';

const Dashboard = () => {
  return (
    <>
      <HeroSection />
      <BlockSection />
      <CardSection />
    </>
  )
}

const HeroSection = () => {

  return (
    <div className="mx-7.5 mt-8 mb-16 sm:mx-8 rounded-lg bg-gradient-to-r from-[#080084] to-[#2563EB]">
      <div className="py-60 px-6 sm:py-14 sm:px-14 pl-60">
        <div className="max-w-[700px]">
          <div className="max-w-[700px]">
            <p className="text-white font-bold text-5xl sm:text-4xl md:text-5xl leading-tight">{__('Welcome to Responsive Blocks', 'responsive-block-editor-addons')}</p>
            <p className="mt-4 sm:mt-6 text-white font-medium text-sm leading-relaxed">{__('Create stunning WordPress websites with our intuitive block builder. Design beautiful pages, explore ready-made templates, and customize everything to match your vision. Get started in seconds!', 'responsive-block-editor-addons')}</p>
            <p className="mt-6">
              <button onClick={() => window.location.href = rbealocalize?.pageurl} className="flex items-center gap-1 py-2 px-5 text-blue-600 bg-white rounded-md font-medium">{Icons.createPage} {__('Create a Page', 'responsive-block-editor-addons')}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};

const BlockSection = () => {

  const history = useHistory();

  return (
    <div className="mx-7.5 mt-8 mb-16 sm:mx-8">
      <div className="flex justify-between">
        <div className="flex gap-5">
          <p className="text-2xl font-medium">Blocks</p>
          <div className="flex items-center gap-3">
            <span className="flex items-center rounded-3xl border border-blue-300 text-xs font-medium text-blue-500 bg-blue-100 px-[10px] py-1">Total Blocks 52</span>
            <span className="flex items-center rounded-3xl border border-green-300 text-xs font-medium text-green-800 bg-green-100 px-[10px] py-1">Active 40</span>
            <span className="flex items-center rounded-3xl border border-red-300 text-xs font-medium text-red-500 bg-red-100 px-[10px] py-1">Inactive 12</span>
          </div>
        </div>
        <div>
          <button onClick={() => history.push('/blocks')} className="rounded-md border border-blue-600 text-blue-600 bg-blue-100 text-sm font-medium px-5 py-2">View All</button>
        </div>
      </div>
      <p className="font-normal text-base text-[#4B5563] mt-2">Manage which blocks are enabled for your website</p>
    </div>
  )
};


const CardSection = () => {

  const [hasFixedBackground, setHasFixedBackground] = useState(false);

  return (
    <div className="mx-7.5 mt-8 mb-16 sm:mx-8">
      <div className="flex flex-wrap gap-3 justify-between">
        <div className="flex border border-slate-100 bg-white rounded-md py-4 px-[14px]">
          <div className="flex gap-2">
            <span>Icon</span>
            <span className="text-sm font-medium text-slate-800">Blockquote</span>
          </div>
          <div className="flex gap-2">
            <span className="flex w-[8px]">{Icons.arrowDiagonal}</span>
            <ToggleControl
              className="rbea-block-toggle"
              __nextHasNoMarginBottom
              checked={hasFixedBackground}
              onChange={(newValue) => {
                setHasFixedBackground(newValue);
              }}
            />
          </div>
        </div>
        <div className="flex border border-slate-100 bg-white rounded-md py-4 px-[14px]">
          <div className="flex gap-2">
            <span className="text-sm font-medium text-slate-800">Blockquote</span>
          </div>
          <div className="flex gap-2">
            <span className="flex w-[8px]">{Icons.arrowDiagonal}</span>
            <div>

            <ToggleControl
              className="rbea-block-toggle-always-active"
              disabled
              __nextHasNoMarginBottom
              checked={true}
            />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Dashboard