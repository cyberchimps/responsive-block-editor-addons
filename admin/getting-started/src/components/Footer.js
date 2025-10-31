import { __ } from "@wordpress/i18n";
import Icons from "../icons";

const Footer = () => {
    return (
        <div className="lg:mx-7.5 md:mx-3.75 mt-16 mb-16 sm:mx-8 text-center">
            <p className="text-[#64748B] text-base inline-flex items-center flex-wrap justify-center gap-1">{__( 'If you like', 'responsive-block-editor-addons' )} <span className="text-gray-500 font-medium">{__( 'Responsive Block Editor Addons', 'responsive-block-editor-addons' )},</span>{__( 'please leave us a', 'responsive-block-editor-addons' )} <a href={rbealocalize.review_link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center"> {Icons.stars} </a> {__( 'rating. Thank you!', 'responsive-block-editor-addons' )}</p>
            <div className="mt-0.875 mx-auto w-[200px] border border-gray-200"></div>
            <img className="w-48 mx-auto mt-0.875" src={rbealocalize.responsiveurl + 'admin/images/cyberchimps-logo.png'} />
        </div>
    )
}

export default Footer