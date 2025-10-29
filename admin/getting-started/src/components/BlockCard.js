import Icons from "../icons";
import BlockIcon from "./BlockIcon";
import { ToggleControl } from "@wordpress/components";
import { BlocksContext } from "../BlocksContext";
import { useContext } from "react";

const BlockCard = ({ data }) => {

    const { key, category, title, status, demo } = data;

    const { permanentlyEnabledBlocks, handleToggle } = useContext(BlocksContext);

    return (
        <div key={key} className={`flex justify-between items-center border border-slate-100 bg-white rounded-md py-[18px] px-[14px] transition-shadow hover:[box-shadow:0px_10px_15px_-3px_rgba(0,0,0,0.1)] rbea-block-category-card rbea-block-category-${category} ${category === 'extensions' ? 'relative' : ''}`}>
            {category === 'extensions' && <span className="absolute top-0 left-0 uppercase text-xs leading-4 font-normal text-slate-600 bg-gray-200 rounded-md px-[6px] py-[2px]">Extension</span>}
            <div className="flex items-center gap-2">
                <BlockIcon block={key} />
                <span className="text-sm font-medium text-slate-800">{title}</span>
            </div>
            <div className="flex items-center gap-2">
                <a href={demo} target="_blank"><span className="flex w-[18px]">{Icons.arrowDiagonal}</span></a>
                <ToggleControl
                    className={`${permanentlyEnabledBlocks.includes(key) ? 'rbea-block-toggle-always-active' : 'rbea-block-toggle'}`}
                    __nextHasNoMarginBottom
                    checked={status}
                    disabled={permanentlyEnabledBlocks.includes(key)}
                    onChange={() => handleToggle(key)}
                />
            </div>
        </div>
    )
}

export default BlockCard