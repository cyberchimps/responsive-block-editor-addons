import { __ } from "@wordpress/i18n";
import { useHistory } from 'react-router-dom';

const Header = () => {

    const history = useHistory();

    return (
        <div className="bg-white border-b border-b-blue-100">
            <div class="container mx-auto px-7.5">
                <div className="flex justify-between">
                    <div className="flex items-center w-8/12">
                        <img className="rbea-cyberchimps-logo" src={rbealocalize.responsiveurl + 'admin/images/rbea-logo.svg'} />
                        <div className="flex justify-evenly w-full">
                            <div onClick={() => history.push('/')} className="rbea-active-tab"><p className="text-slate-800 text-base font-medium my-6 px-5">{__( 'Dashboard', 'responsive-block-editor-addons')}</p></div>
                            <div onClick={() => history.push('/blocks')}><p className="text-slate-800 text-base font-medium my-6 px-5">{__('Blocks', 'responsive-block-editor-addons')}</p></div>
                            <div onClick={() => history.push('/settings')}><p className="text-slate-800 text-base font-medium my-6 px-5">{__('Settings', 'responsive-block-editor-addons')}</p></div>
                            <div onClick={() => history.push('/templates')}><p className="text-slate-800 text-base font-medium my-6 px-5">{__('Starter Templates', 'responsive-block-editor-addons')}</p></div>
                        </div>
                    </div>
                    <div className="flex w-4/12 items-center justify-end">
                        <div className="border border-slate-200 rounded-md p-3">
                            <p className="text-gray-400 font-medium text-sm">v{rbealocalize.rbea_version}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header