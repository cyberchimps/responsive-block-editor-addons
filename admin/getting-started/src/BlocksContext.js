import { createContext, useState } from "react";

export const BlocksContext = createContext();

export const BlocksProvider = ({ children }) => {
    const [blocksList, setBlockList] = useState(rbealocalize?.rbea_blocks);
    const [isInitialized, setIsInitialized] = useState(false);

    const areAllBlocksSelected = blocksList.every((block) => block.status == 1);
    const [toggleAll, setToggleAll] = useState(areAllBlocksSelected);

    const permanentlyEnabledBlocks = ['advanced-heading', 'image', 'container'];

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

            fetchData(updatedBlockList);

            return updatedBlockList;
        });
    };

    const displayToast = (msg, status) => {
        let background = status === "error" ? "#FF5151" : "#00CF21";
        Toastify({
            text: msg,
            duration: 3000,
            gravity: "top",
            position: "center",
            stopOnFocus: true,
            offset: {
                x: 0,
                y: 30,
            },
            style: {
                background,
            },
        }).showToast();
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
            value={{ blocksList, setBlockList, handleToggle, toggleAll, handleToggleAll, permanentlyEnabledBlocks }}
        >
            {children}
        </BlocksContext.Provider>
    );
};
