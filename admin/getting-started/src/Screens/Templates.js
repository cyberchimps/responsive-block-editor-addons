import { __ } from "@wordpress/i18n";
import { useState } from "react";
import InstallButton from "../components/InstallButton";

const Templates = () => {

  const [buttonText, setButtonText] = useState(rbealocalize?.rst_status);

  return (
    <div className="xl:mx-7.5 md:mx-3.75 m-10">
      <div className="py-10" style={{ backgroundImage: 'url(' + rbealocalize?.responsiveurl + "admin/images/rst-template-preview.jpg" + ')' }}>
        <div className="flex justify-center items-center">
          <div className="w-3/5 px-10 py-[60px] bg-white border border-gray-200 rounded shadow-2xl">
            <div className="flex justify-center">
              <img className="w-10" src={rbealocalize.responsiveurl + 'admin/images/rst_sm_logo.svg'} alt="Responsive ST Logo" />
            </div>
            <p className="mt-6 text-center font-bold text-2xl text-gray-600">{__( 'Responsive Starter Templates', 'responsive-block-editor-addons' )}</p>
            <p className="mt-4 text-center font-normal text-base text-gray-500">{__( 'Build stunning sites fast with 250+ ready templates. Install the free Responsive Starter Templates plugin to get started.', 'responsive-block-editor-addons' )}</p>
            <div className="flex flex-col items-center gap-4">
              <InstallButton
                type="plugin"
                status={rbealocalize?.rst_status}
                nonce={rbealocalize.rst_nonce}
                redirect={rbealocalize.rst_redirect}
                buttonText={buttonText}
                setButtonText={setButtonText}
                slug="responsive-add-ons"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Templates;