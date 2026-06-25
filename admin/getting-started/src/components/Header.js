import { __ } from "@wordpress/i18n";
import { useHistory, useLocation } from 'react-router-dom';

const Header = () => {
console.log('responsivex===='+rbealocalize.responsivex_status);
    const history = useHistory();
    const location = useLocation();
    return (
        <div className="bg-white border-b border-b-blue-100">
            <div className="mx-auto xl:px-7.5 md:px-3.75">
                <div className="flex justify-between">
                    <div className="flex items-center w-8/12 gap-6">
                        <img className="rbea-cyberchimps-logo" src={rbealocalize.responsiveurl + 'admin/images/rbea-logo.svg'} />
                        <div className="flex w-full">
                            <div onClick={() => history.push('/')} className={`hover:bg-sky-100 ${location.pathname === '/' ? 'rbea-active-tab' : ''} cursor-pointer`}><p className="text-slate-800 text-base font-medium my-6 px-5">{__('Dashboard', 'responsive-block-editor-addons')}</p></div>
                            <div onClick={() => history.push('/blocks')} className={`hover:bg-sky-100 ${location.pathname === '/blocks' ? 'rbea-active-tab' : ''} cursor-pointer`}><p className="text-slate-800 text-base font-medium my-6 px-5">{__('Blocks', 'responsive-block-editor-addons')}</p></div>
                            <div onClick={() => history.push('/settings')} className={`hover:bg-sky-100 ${location.pathname === '/settings' ? 'rbea-active-tab' : ''} cursor-pointer`}><p className="text-slate-800 text-base font-medium my-6 px-5">{__('Settings', 'responsive-block-editor-addons')}</p></div>
                            <div onClick={() => rbealocalize?.rst_status !== 'activated' ? history.push('/templates') : window.location.href = rbealocalize?.rst_redirect} className={`hover:bg-sky-100 ${location.pathname === '/templates' ? 'rbea-active-tab' : ''} cursor-pointer`}><p className="text-slate-800 text-base font-medium my-6 px-5">{__('Starter Templates', 'responsive-block-editor-addons')}</p></div>
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