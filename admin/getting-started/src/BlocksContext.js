import { createContext, useState } from "react";
import { displayToast } from './DisplayToast'; 
import { convertTruthyFalsyValue } from "../../../src/utils/helper";

export const BlocksContext = createContext();

export const BlocksProvider = ({ children }) => {
    const [blocksList, setBlockList] = useState(rbealocalize?.rbea_blocks);
    const [isInitialized, setIsInitialized] = useState(false);

    const areAllBlocksSelected = blocksList.every((block) => convertTruthyFalsyValue(block?.status) === true);
    const [toggleAll, setToggleAll] = useState(areAllBlocksSelected);

    const initialActiveBlocks = blocksList.filter((item) => convertTruthyFalsyValue(item?.status) === true);
    const initialInactiveBlocks = blocksList.filter((item) => convertTruthyFalsyValue(item?.status) === false);
    const [activeBlocksCount, setActiveBlocksCount] = useState(initialActiveBlocks.length);
    const [inactiveBlocksCount, setInactiveBlocksCount] = useState(initialInactiveBlocks.length);

    const permanentlyEnabledBlocks = ['advanced-heading', 'image', 'container'];

    const handleBlocksCount = ( updatedBlockList ) => {
        const activeBlocks   = updatedBlockList.filter((item) => convertTruthyFalsyValue(item?.status) === true)
        const inactiveBlocks = updatedBlockList.filter((item) => convertTruthyFalsyValue(item?.status) === false)

        setActiveBlocksCount(activeBlocks.length);
        setInactiveBlocksCount(inactiveBlocks.length);
    }

    const handleToggle = (checkboxKey) => {
        setBlockList((prevCheckboxes) => {
            const updatedBlockList = prevCheckboxes.map((checkbox) =>
                checkbox.key === checkboxKey
                    ? { ...checkbox, status: !checkbox.status }
                    : checkbox
            );

            const areAllUpdatedBlocksChecked = updatedBlockList.every(
                (block) => block.status == 1
            );

            setToggleAll(areAllUpdatedBlocksChecked);

            handleBlocksCount( updatedBlockList );

            if (isInitialized) {
                fetchData(updatedBlockList);
            }

            return updatedBlockList;
        });
    };

    const handleToggleAll = () => {
        setToggleAll(!toggleAll);

        setBlockList((prevCheckboxes) => {
            const updatedBlockList = prevCheckboxes.map((checkbox) => {
                if (permanentlyEnabledBlocks.includes(checkbox.key)) {
                    return checkbox;
                }
                return { ...checkbox, status: !toggleAll };
            });

            handleBlocksCount( updatedBlockList );

            fetchData(updatedBlockList);

            return updatedBlockList;
        });
    };

    const fetchData = async (data) => {
        const formData = new FormData();

        formData.append("action", "rbea_blocks_toggle");
        formData.append("nonce", rbealocalize.nonce);
        formData.append("value", JSON.stringify(data));

        const response = await fetch(rbealocalize.ajaxurl, {
            method: "POST",
            body: formData,
        });

        response.status === 200
            ? displayToast("Settings Saved", "success")
            : displayToast("Error", "error");
        return response.json();
    };

    useState(() => {
        setIsInitialized(true);
    }, []);

    return (
        <BlocksContext.Provider
            value={{ blocksList, setBlockList, handleToggle, toggleAll, handleToggleAll, permanentlyEnabledBlocks, activeBlocksCount, inactiveBlocksCount }}
        >
            {children}
        </BlocksContext.Provider>
    );
};
