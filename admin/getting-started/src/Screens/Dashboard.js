import { useContext, useState } from "react";
import { __ } from "@wordpress/i18n";
import Icons from "../icons";
import { useHistory } from 'react-router-dom';
import BlockCard from "../components/BlockCard";
import { BlocksContext } from "../BlocksContext";
import InstallButton from "../components/InstallButton";

const Dashboard = () => {
  return (
    <>
      <HeroSection />
      <BlockSection />
      <ExtendAndQuickAccess />
      <StarterTemplates />
    </>
  )
}

const HeroSection = () => {

  return (
    <div className="xl:mx-7.5 md:mx-3.75 mt-8 mb-16 rounded-lg bg-gradient-to-r from-[#080084] to-[#2563EB]">
      <div className="py-3.7 px-6 sm:py-14 sm:px-14 pl-3.7">
        <p className="text-white font-bold text-5xl sm:text-4xl md:text-5xl leading-tight">{__('Welcome to Responsive Blocks', 'responsive-block-editor-addons')}</p>
        <p className="max-w-[700px] mt-4 sm:mt-6 text-white font-medium text-sm leading-relaxed">{__('Create stunning WordPress websites with our intuitive block builder. Design beautiful pages, explore ready-made templates, and customize everything to match your vision. Get started in seconds!', 'responsive-block-editor-addons')}</p>
        <p className="mt-6">
          <button onClick={() => window.location.href = rbealocalize?.pageurl} className="flex items-center gap-1 py-0.625 px-5 text-blue-600 bg-white rounded-md font-medium">{Icons.createPage} {__('Create a Page', 'responsive-block-editor-addons')}
          </button>
        </p>
      </div>
    </div>
  )
};

const BlockSection = () => {

  const history = useHistory();

  const { blocksList, activeBlocksCount, inactiveBlocksCount } = useContext(BlocksContext);

  return (
    <div className="xl:mx-7.5 md:mx-3.75 mt-8 mb-16">
      <div className="flex justify-between">
        <div className="flex items-center gap-5">
          <p className="text-2xl font-medium">{__('Blocks', 'responsive-block-editor-addons')}</p>
          <div className="flex items-center gap-3">
            <span className="flex items-center rounded-3xl border border-blue-300 text-xs font-medium text-blue-500 bg-blue-100 px-[10px] py-1">{__('Total Blocks', 'responsive-block-editor-addons')} {blocksList.length}</span>
            <span className="flex items-center rounded-3xl border border-green-300 text-xs font-medium text-green-800 bg-green-100 px-[10px] py-1">{__('Active', 'responsive-block-editor-addons')} {activeBlocksCount}</span>
            <span className="flex items-center rounded-3xl border border-red-300 text-xs font-medium text-red-500 bg-red-100 px-[10px] py-1">{__('Inactive', 'responsive-block-editor-addons')} {inactiveBlocksCount}</span>
          </div>
        </div>
        <div>
          <button onClick={() => history.push('/blocks')} className="rounded-md border border-blue-600 text-blue-600 hover:bg-blue-100 text-sm font-medium px-5 py-2">{__('View All', 'responsive-block-editor-addons')}</button>
        </div>
      </div>
      <p className="font-normal text-base text-desc mt-2 mb-6">{__('Manage which blocks are enabled for your website', 'responsive-block-editor-addons')}</p>
      <CardSection />
    </div>
  )
};


const CardSection = () => {

  const specificBlocks = ['container', 'advanced-heading', 'advanced-text', 'buttons', 'image', 'instagram', 'gallery-masonry', 'table-of-contents', 'image-slider', 'video-popup', 'animations', 'display-conditions'];

  const { blocksList } = useContext(BlocksContext);

  const showBlocks = blocksList.filter(item => specificBlocks.includes(item.key));

  return (
    <div className="mt-8 mb-16">
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {showBlocks.map((current) => <BlockCard data={current} />)}
      </div>
    </div>
  )
}

const ExtendAndQuickAccess = () => {

  const history = useHistory();

  const [rplusText, setRplusText] = useState(rbealocalize?.rst_status);
  const [raeText, setRaeText] = useState(rbealocalize?.rae_status);
  const [themeText, setThemeText] = useState(rbealocalize?.responsive_status);

  return (
    <div className="xl:flex lg:block justify-between xl:mx-7.5 md:mx-3.75 mt-8 mb-16 gap-12">
      <div className="xl:w-2/3 lg:w-full">
        <p className="font-medium text-2xl">{__('Extend Your Website', 'responsive-block-editor-addons')}</p>
        <p className="font-normal text-base text-desc mt-2 mb-6">{__("Powerful tools to enhance your site's functionality", 'responsive-block-editor-addons')}</p>
        <div className="grid md:grid-cols-2 gap-6 w-full">
          <PluginCard title={__('Starter Templates', 'responsive-block-editor-addons')} description={__('150+ Ready to Import Designer-Made Website Starter Templates.', 'responsive-block-editor-addons')} image="rplus_logo">
            <button onClick={() => history.push('/templates')} className="mt-1.125 py-0.625 px-0.875 bg-blue-600 hover:bg-blue-900 rounded-md text-white text-sm leading-5 font-medium">{__('Explore Templates', 'responsive-block-editor-addons')}</button>
          </PluginCard>

          <PluginCard title={__('Responsive Plus', 'responsive-block-editor-addons')} description={__('Get Advanced modules: Site Builder, Fonts, WooCommerce, and more.', 'responsive-block-editor-addons')} image="rplus_logo">
            <InstallButton
              type="plugin"
              status={rbealocalize?.rst_status}
              nonce={rbealocalize.rst_nonce}
              redirect={rbealocalize.rst_redirect}
              buttonText={rplusText}
              setButtonText={setRplusText}
              slug="responsive-add-ons"
            />
          </PluginCard>

          <PluginCard title={__('Responsive Addons for Elementor', 'responsive-block-editor-addons')} description={__('A free Elementor Addons plugin with more than 80+ premium quality Elementor widgets.', 'responsive-block-editor-addons')} image="rae_logo">
            <InstallButton
              type="plugin"
              status={rbealocalize?.rae_status}
              nonce={rbealocalize.rae_nonce}
              redirect={rbealocalize.rae_redirect}
              buttonText={raeText}
              setButtonText={setRaeText}
              slug="responsive-addons-for-elementor"
            />
          </PluginCard>

          <PluginCard title={__('Responsive Theme', 'responsive-block-editor-addons')} description={__('Craft Stunning Websites Effortlessly with the Responsive Theme.', 'responsive-block-editor-addons')} image="responsive_logo">
            <InstallButton
              type="theme"
              status={rbealocalize?.responsive_status}
              nonce={rbealocalize.responsive_nonce}
              redirect={rbealocalize.responsive_redirect}
              buttonText={themeText}
              setButtonText={setThemeText}
              slug="responsive"
            />
          </PluginCard>
        </div>
      </div>
      <div className="xl:w-1/3 lg-w-full max-xl:mt-8">
        <p className="font-medium text-2xl">{__('Quick Access', 'responsive-block-editor-addons')}</p>
        <p className="font-normal text-base text-desc mt-2 mb-6">{__('Helpful resources & links', 'responsive-block-editor-addons')}</p>
        <div className="p-6 bg-white rounded-md">
          <div className="flex gap-5">
            <span className="flex items-center p-0.625 rounded-md border border-blue-200">{Icons.help}</span>
            <div>
              <a href="https://wordpress.org/support/plugin/responsive-block-editor-addons/" target="_blank" className="text-lg leading-7 font-medium text-blue-500">{__('Support', 'responsive-block-editor-addons')}</a>
              <p className="text-sm leading-5 font-normal text-desc">{__('Get help from our support team', 'responsive-block-editor-addons')}</p>
            </div>
          </div>
          <div className="flex gap-5 mt-10">
            <span className="flex items-center p-0.625 rounded-md border border-yellow-500">{Icons.community}</span>
            <div>
              <a href="https://www.facebook.com/groups/responsive.theme" target="_blank" className="text-lg leading-7 font-medium text-desc">{__('Join the Community', 'responsive-block-editor-addons')}</a>
              <p className="text-sm leading-5 font-normal text-desc">{__('Connect with other users', 'responsive-block-editor-addons')}</p>
            </div>
          </div>
          <div className="flex gap-5 mt-10">
            <span className="flex items-center p-0.625 rounded-md border border-green-500">{Icons.star}</span>
            <div>
              <a href="https://wordpress.org/support/plugin/responsive-block-editor-addons/reviews/#new-post" target="_blank" className="text-lg leading-7 font-medium text-desc">{__('Rate Us', 'responsive-block-editor-addons')}</a>
              <p className="text-sm leading-5 font-normal text-desc">{__('Share your experience', 'responsive-block-editor-addons')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const PluginCard = ({ title, description, image, children }) => {
  return (
    <div className="p-6 bg-white rounded-md transition-shadow hover:[box-shadow:0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
      <div className="flex justify-between items-start">
        <img src={rbealocalize.responsiveurl + 'admin/images/' + image + '.svg'} alt="Responsive Logo" />
        <span className="py-1 px-0.625 text-xs leading-4 font-medium text-green-800 bg-green-50 border border-green-300 rounded cap">{__('Free', 'responsive-block-editor-addons')}</span>
      </div>
      <p className="mt-1.125 mb-2 text-base leading-6 font-medium">{title}</p>
      <p className="text-sm leading-5 font-normal">{description}</p>
      {children}
    </div>
  );
}

const StarterTemplates = () => {

  const history = useHistory();

  const templates = ['Real Estate', 'Business', 'Jewellery Shop', 'Interior Design Firm'];

  return (
    <div className="xl:mx-7.5 md:mx-3.75 mt-8 mb-16">
      <div className="flex justify-between mb-6">
        <div>
          <p className="text-2xl leading-8 font-medium">{__('Starter Templates', 'responsive-block-editor-addons')}</p>
          <p className="mt-2 text-base leading-6 font-normal text-desc">{__('Pre-designed templates to kickstart your website in seconds', 'responsive-block-editor-addons')}</p>
        </div>
        <button onClick={() => history.push('/templates')} className="rounded-md border border-blue-600 text-blue-600 hover:bg-blue-100 text-sm font-medium px-5 py-2 self-baseline">{__('View All Templates', 'responsive-block-editor-addons')}</button>
      </div>
      <div className="flex justify-center gap-6">
        {templates?.map((template, index) => (
          <div className="bg-white border border-slate-200 rounded-md transition-shadow hover:[box-shadow:0px_10px_10px_-5px_rgba(0,0,0,0.04)]">
            <img src={rbealocalize.responsiveurl + `admin/images/template${index + 1}.jpg`} alt={template} />
            <p className="py-6 pl-6 text-base leading-6 font-normal">{template}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard