import { __ } from "@wordpress/i18n";
import Icons from "../icons";
import { useHistory } from 'react-router-dom';
import { ToggleControl } from "@wordpress/components";
import { useState } from 'react';
import BlockIcon from "../components/BlockIcon";

const Dashboard = () => {
  return (
    <>
      <HeroSection />
      <BlockSection />
      <CardSection />
      <ExtendAndQuickAccess />
      <StarterTemplates />
    </>
  )
}

const HeroSection = () => {

  return (
    <div className="mx-7.5 mt-8 mb-16 rounded-lg bg-gradient-to-r from-[#080084] to-[#2563EB]">
      <div className="py-3.7 px-6 sm:py-14 sm:px-14 pl-3.7">
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
    <div className="mx-7.5 mt-8 mb-16">
      <div className="flex justify-between">
        <div className="flex items-center gap-5">
          <p className="text-2xl font-medium">Blocks</p>
          <div className="flex items-center gap-3">
            <span className="flex items-center rounded-3xl border border-blue-300 text-xs font-medium text-blue-500 bg-blue-100 px-[10px] py-1">Total Blocks 52</span>
            <span className="flex items-center rounded-3xl border border-green-300 text-xs font-medium text-green-800 bg-green-100 px-[10px] py-1">Active 40</span>
            <span className="flex items-center rounded-3xl border border-red-300 text-xs font-medium text-red-500 bg-red-100 px-[10px] py-1">Inactive 12</span>
          </div>
        </div>
        <div>
          <button onClick={() => history.push('/blocks')} className="rounded-md border border-blue-600 text-blue-600 hover:bg-blue-100 text-sm font-medium px-5 py-2">View All</button>
        </div>
      </div>
      <p className="font-normal text-base text-desc mt-2">Manage which blocks are enabled for your website</p>
    </div>
  )
};


const CardSection = () => {

  const [hasFixedBackground, setHasFixedBackground] = useState(false);

  return (
    <div className="mx-7.5 mt-8 mb-16">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {rbealocalize?.rbea_blocks.map((current) => {
          return (
            <div key={current?.key} className="flex justify-between items-center border border-slate-100 bg-white rounded-md py-4 px-[14px] transition-shadow hover:[box-shadow:0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <div className="flex items-center gap-2">
                <BlockIcon block={current?.key} />
                <span className="text-sm font-medium text-slate-800">{current?.title}</span>
              </div>
              <div className="flex items-center gap-2">
                <a href={current?.demo} target="_blank"><span className="flex w-[18px]">{Icons.arrowDiagonal}</span></a>
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
          )
        })}
      </div>
    </div>

  )
}

const ExtendAndQuickAccess = () => {

  const history = useHistory();

  const [rplusText, setRplusText] = useState(rbealocalize?.rst_status);
  const [raeText, setRaeText] = useState(rbealocalize?.rae_status);
  const [themeText, setThemeText] = useState(rbealocalize?.responsive_status);

  const activatePlugin = (url, redirect, setButtonText) => {
    if (typeof url === 'undefined' || !url) {
      return;
    }
    setButtonText(rbealocalize.activating + '...');
    fetch(url, { method: 'GET' })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then((data) => {
        if (typeof redirect !== 'undefined' && redirect !== '') {
          window.location.replace(redirect);
        } else {
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const InstallButton = ({ type, status, nonce, redirect, buttonText, setButtonText, slug }) => {
    const handleInstall = (e) => {
      e.preventDefault();
      setButtonText(rbealocalize.installing + '...');

      const installFunction = type === 'theme' ? wp.updates.installTheme : wp.updates.installPlugin;

      installFunction({
        slug: slug,
        success: function () {
          setButtonText(rbealocalize.activating + '...');
          activatePlugin(nonce, redirect, setButtonText);
        },
        error: function (error) {
          console.error(`${type} installation failed:`, error);
          setButtonText(rbealocalize.install_failed || 'Install Failed');
        }
      });
    };

    const handleActivate = () => {
      activatePlugin(nonce, redirect, setButtonText);
    };

    switch (status) {
      case 'install':
        return (
          <button
            onClick={handleInstall}
            className="mt-1.125 py-0.625 px-5 bg-white hover:bg-sky-100 border border-blue-600 text-blue-600 rounded-md text-sm leading-5 font-medium capitalize"
          >
            {buttonText}
          </button>
        );
      case 'activate':
        return (
          <button
            onClick={handleActivate}
            className="mt-1.125 py-0.625 px-5 bg-white hover:bg-sky-100 border border-blue-600 text-blue-600 rounded-md text-sm leading-5 font-medium capitalize"
          >
            {buttonText}
          </button>
        );
      case 'activated':
        return (
          <button className="mt-1.125 py-0.625 px-5 border border-slate-500 text-slate-500 bg-white rounded-md text-sm leading-5 font-medium capitalize">
            Activated
          </button>
        );
      default:
        return (
          <button className="mt-1.125 py-0.625 px-5 bg-gray-400 hover:bg-slate-500 rounded-md text-white text-sm leading-5 font-medium capitalize">
            {buttonText}
          </button>
        );
    }
  };

  return (
    <div className="flex justify-between mx-7.5 mt-8 mb-16">
      <div className="w-2/3">
        <p className="font-medium text-2xl">Extend Your Website</p>
        <p className="font-normal text-base text-desc mt-2 mb-6">Powerful tools to enhance your site's functionality</p>
        <div className="grid md:grid-cols-2 gap-6 w-full">
          <div className="p-6 bg-white rounded-md">
            <div className="flex justify-between items-start">
              <img src={rbealocalize.responsiveurl + 'admin/images/rplus_logo.svg'} alt="Responsive Plus Logo" />
              <span className="py-1 px-0.625 text-xs leading-4 font-medium text-green-800 bg-green-50 border border-green-300 rounded">Free</span>
            </div>
            <p className="mt-1.125 mb-2 text-base leading-6 font-medium">Starter Templates</p>
            <p className="text-sm leading-5 font-normal">150+ Ready to Import Designer-Made Website Starter Templates.</p>
            <button onClick={() => history.push('/templates')} className="mt-1.125 py-0.625 px-0.875 bg-blue-600 hover:bg-blue-900 rounded-md text-white text-sm leading-5 font-medium">Explore Templates</button>
          </div>
          <div className="p-6 bg-white rounded-md">
            <div className="flex justify-between items-start">
              <img src={rbealocalize.responsiveurl + 'admin/images/rplus_logo.svg'} alt="Responsive Plus Logo" />
              <span className="py-1 px-0.625 text-xs leading-4 font-medium text-green-800 bg-green-50 border border-green-300 rounded">Free</span>
            </div>
            <p className="mt-1.125 mb-2 text-base leading-6 font-medium">Responsive Plus</p>
            <p className="text-sm leading-5 font-normal">Get Advanced modules: Site Builder, Fonts, WooCommerce, and more.</p>
            <InstallButton 
              type="plugin"
              status={rbealocalize?.rst_status}
              nonce={rbealocalize.rst_nonce}
              redirect={rbealocalize.rst_redirect}
              buttonText={rplusText}
              setButtonText={setRplusText}
              slug="responsive-add-ons"
            />
          </div>
          <div className="p-6 bg-white rounded-md">
            <div className="flex justify-between items-start">
              <img src={rbealocalize.responsiveurl + 'admin/images/rae_logo.svg'} alt="RAE Logo" />
              <span className="py-1 px-0.625 text-xs leading-4 font-medium text-green-800 bg-green-50 border border-green-300 rounded">Free</span>
            </div>
            <p className="mt-1.125 mb-2 text-base leading-6 font-medium">Responsive Addons for Elementor</p>
            <p className="text-sm leading-5 font-normal">A free Elementor Addons plugin with more than 80+ premium quality Elementor widgets.</p>
            <InstallButton 
              type="plugin"
              status={rbealocalize?.rae_status}
              nonce={rbealocalize.rae_nonce}
              redirect={rbealocalize.rae_redirect}
              buttonText={raeText}
              setButtonText={setRaeText}
              slug="responsive-addons-for-elementor"
            />
          </div>
          <div className="p-6 bg-white rounded-md">
            <div className="flex justify-between items-start">
              <img src={rbealocalize.responsiveurl + 'admin/images/responsive_logo.svg'} alt="Responsive Logo" />
              <span className="py-1 px-0.625 text-xs leading-4 font-medium text-green-800 bg-green-50 border border-green-300 rounded cap">Free</span>
            </div>
            <p className="mt-1.125 mb-2 text-base leading-6 font-medium">Responsive Theme</p>
            <p className="text-sm leading-5 font-normal">Craft Stunning Websites Effortlessly with the Responsive Theme.</p>
            <InstallButton 
              type="theme"
              status={rbealocalize?.responsive_status}
              nonce={rbealocalize.responsive_nonce}
              redirect={rbealocalize.responsive_redirect}
              buttonText={themeText}
              setButtonText={setThemeText}
              slug="responsive"
            />
          </div>
        </div>
      </div>
      <div className="1/3">
        <p className="font-medium text-2xl">Quick Access</p>
        <p className="font-normal text-base text-desc mt-2 mb-6">Helpful resources & links</p>
        <div className="p-6 bg-white rounded-md">
          <div className="flex gap-5">
            <span className="flex items-center p-0.625 rounded-md border border-blue-200">{Icons.help}</span>
            <div>
              <p className="text-lg leading-7 font-medium text-blue-500">Support</p>
              <p className="text-sm leading-5 font-normal text-desc">Get help from our support team</p>
            </div>
          </div>
          <div className="flex gap-5 mt-10">
            <span className="flex items-center p-0.625 rounded-md border border-yellow-500">{Icons.community}</span>
            <div>
              <p className="text-lg leading-7 font-medium text-desc">Join the Community</p>
              <p className="text-sm leading-5 font-normal text-desc">Connect with other users</p>
            </div>
          </div>
          <div className="flex gap-5 mt-10">
            <span className="flex items-center p-0.625 rounded-md border border-green-500">{Icons.star}</span>
            <div>
              <p className="text-lg leading-7 font-medium text-desc">Rate Us</p>
              <p className="text-sm leading-5 font-normal text-desc">Share your experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const StarterTemplates = () => {

  const history = useHistory();

  const templates = ['Real Estate', 'Business', 'Jewellery Shop', 'Interior Design Firm'];

  return (
    <div className="mx-7.5 mt-8 mb-16">
      <div className="flex justify-between mb-6">
        <div>
          <p className="text-2xl leading-8 font-medium">Starter Templates</p>
          <p className="mt-2 text-base leading-6 font-normal text-desc">Pre-designed templates to kickstart your website in seconds</p>
        </div>
        <button onClick={() => history.push('/templates')} className="rounded-md border border-blue-600 text-blue-600 hover:bg-blue-100 text-sm font-medium px-5 py-2 self-baseline">View All Templates</button>
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