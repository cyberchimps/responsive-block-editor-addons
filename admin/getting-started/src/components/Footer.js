const { __ } = wp.i18n;
import Icons from "../icons";

const Footer = () => {
    return (
        <div className="mx-7.5 mt-16 mb-16 sm:mx-8 text-center">
            <p className="text-[#64748B] text-base inline-flex items-center flex-wrap justify-center gap-1">If you like <span className="text-gray-500 font-medium">Responsive Block Editor Addons,</span>please leave us a <a href={rbealocalize.review_link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center"> {Icons.stars} </a> rating. Thank you!</p>
            <div className="mt-0.875 mx-auto w-[200px] border border-gray-200"></div>
            <img className="w-48 mx-auto mt-0.875" src={rbealocalize.responsiveurl + 'admin/images/cyberchimps-logo.png'} />
        </div>
    )
}

export default Footer