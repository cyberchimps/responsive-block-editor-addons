import { useState } from "react";
import InstallButton from "../components/InstallButton";

const Templates = () => {

  const [buttonText, setButtonText] = useState(rbealocalize?.rst_status);

  return (
    <div className="mx-7.5 mt-10 mb-10">
      <div className="py-10" style={{ backgroundImage: 'url(' + rbealocalize?.responsiveurl + "admin/images/rst-template-preview.jpg" + ')' }}>
        <div className="flex justify-center items-center">
          <div className="w-3/5 px-10 py-[60px] bg-white border border-gray-200 rounded shadow-2xl">
            <div className="flex justify-center">
              <img src={rbealocalize.responsiveurl + 'admin/images/rplus_logo.svg'} alt="Responsive Plus Logo" />
            </div>
            <p className="mt-6 text-center font-bold text-2xl text-gray-600">Responsive Starter Templates</p>
            <p className="mt-4 text-center font-normal text-base text-gray-500">Browse 150+ fully-functional ready site templates by installing the free Responsive Starter Templates plugin. Click the button below to get started.</p>
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
              <a className="font-normal text-sm underline text-blue-700" href="https://wordpress.org/plugins/responsive-add-ons/" target="_blank">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Templates;