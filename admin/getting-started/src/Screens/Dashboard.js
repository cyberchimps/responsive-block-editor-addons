import { __ } from "@wordpress/i18n";
import Icons from "../icons";

const Dashboard = () => {
  return (
    <>
      <div class="mx-7.5 mt-8 mb-16 sm:mx-8 rounded-lg bg-gradient-to-r from-[#080084] to-[#2563EB]">
        <div class="py-60 px-6 sm:py-14 sm:px-14 pl-60">
          <div class="max-w-[700px]">
            <div class="max-w-[700px]">
              <p className="text-white font-bold text-5xl sm:text-4xl md:text-5xl leading-tight">{__('Welcome to Responsive Blocks', 'responsive-block-editor-addons')}</p>
              <p className="mt-4 sm:mt-6 text-white font-medium text-sm leading-relaxed">{__('Create stunning WordPress websites with our intuitive block builder. Design beautiful pages, explore ready-made templates, and customize everything to match your vision. Get started in seconds!', 'responsive-block-editor-addons')}</p>
              <p class="mt-6">
                <button onClick={() => window.location.href = rbealocalize?.pageurl} class="flex items-center gap-1 py-2 px-5 text-blue-600 bg-white rounded-md font-medium">{Icons.createPage} {__('Create a Page', 'responsive-block-editor-addons')}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard