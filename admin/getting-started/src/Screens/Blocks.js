import { useState } from 'react';
import Icons from "../icons";
import { ToggleControl } from "@wordpress/components";
import BlockIcon from "../components/BlockIcon";

const Blocks = () => {

  const [showCategory, setShowCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [blockList, setBlockList] = useState(rbealocalize?.rbea_blocks);
  const [isInitialized, setIsInitialized] = useState(false);

  const areAllBlocksSelected = blockList.every((block) => block.status == 1);
  const [toggleAll, setToggleAll] = useState(areAllBlocksSelected)

  const permanentlyEnabledBlocks = ['advanced-heading', 'image', 'container'];

  // Set the initialization flag after the first render
  useState(() => {
    setIsInitialized(true);
  }, []);

  const handleShowCategory = (tab) => {
    setShowCategory(tab);
    setSearch('');
  }

  const handleToggle = (checkboxKey) => {
    setBlockList((prevCheckboxes) => {
      const updatedBlockList = prevCheckboxes.map((checkbox) =>
        checkbox.key === checkboxKey ? { ...checkbox, status: !checkbox.status } : checkbox
      );

      const areAllUpdatedBlocksChecked = updatedBlockList.every((block) => block.status == 1);
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
    let background = status === 'error' ? '#FF5151' : '#00CF21';
    Toastify({
      text: msg,
      duration: 3000,
      gravity: "top",
      position: "center",
      stopOnFocus: true,
      offset: {
        x: 0,
        y: 30
      },
      style: {
        background,
      },
    }).showToast();
  }

  const fetchData = async (data) => {
    const formData = new FormData()

    formData.append('action', 'rbea_blocks_toggle');
    formData.append('nonce', rbealocalize.nonce);
    formData.append('value', JSON.stringify(data));

    const response = await fetch(rbealocalize.ajaxurl, {
      method: 'POST',
      body: formData
    })

    response.status === 200 ? displayToast('Settings Saved', 'success') : displayToast('Error', 'error')
    return response.json()
  }

  return (
    <div className="mx-10 p-10 mt-12 mb-16 bg-white rounded-[20px]">
      <div className="flex justify-between">
        <div className="flex border-b border-b-slate-300">
          <div onClick={() => handleShowCategory('all')} className={`px-3 py-0.625 text-base leading-6 font-normal text-desc cursor-pointer ${showCategory === 'all' ? 'rbea-active-category' : ''}`}>All (52)</div>
          <div onClick={() => handleShowCategory('content')} className={`px-3 py-0.625 text-base leading-6 font-normal text-desc cursor-pointer ${showCategory === 'content' ? 'rbea-active-category' : ''}`}>Content (44)</div>
          <div onClick={() => handleShowCategory('timelines')} className={`px-3 py-0.625 text-base leading-6 font-normal text-desc cursor-pointer ${showCategory === 'timelines' ? 'rbea-active-category' : ''}`}>Timelines (4)</div>
          <div onClick={() => handleShowCategory('cro')} className={`px-3 py-0.625 text-base leading-6 font-normal text-desc cursor-pointer ${showCategory === 'cro' ? 'rbea-active-category' : ''}`}>CRO (2)</div>
          <div onClick={() => handleShowCategory('extensions')} className={`px-3 py-0.625 text-base leading-6 font-normal text-desc cursor-pointer ${showCategory === 'extensions' ? 'rbea-active-category' : ''}`}>Extensions (2)</div>
        </div>
        <div className="relative">
          <input value={search} className="rbea-block-search border rounded-[10px] border-gray-300 p-3" onChange={(e) => setSearch(e.target.value)} autoComplete="off" type="text" name="" id="" placeholder="Search Blocks" />
          <i className="absolute right-2 top-3 bg-white"><span className="dashicons dashicons-search text-[#2563EB]"></span></i>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-11">
        <p className="text-base leading-6 font-normal text-desc">Toogle All Blocks</p>
        <ToggleControl
          className="rbea-block-toggle"
          __nextHasNoMarginBottom
          checked={toggleAll}
          onChange={() => handleToggleAll()}
        />
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-5">
        {blockList.map((current) => {
          return (
            <>
              {search === ''
                ?
                <>
                  {(current?.category === showCategory || showCategory === 'all') && (
                    <div key={current?.key} className={`flex justify-between items-center border border-slate-100 bg-white rounded-md py-[18px] px-[14px] transition-shadow hover:[box-shadow:0px_10px_15px_-3px_rgba(0,0,0,0.1)] rbea-block-category-card rbea-block-category-${current?.category} ${current?.category === 'extensions' ? 'relative' : ''}`}>
                      {current?.category === 'extensions' && <span className="absolute top-0 left-0 uppercase text-xs leading-4 font-normal text-slate-600 bg-gray-200 rounded-md px-[6px] py-[2px]">Extension</span>}
                      <div className="flex items-center gap-2">
                        <BlockIcon block={current?.key} />
                        <span className="text-sm font-medium text-slate-800">{current?.title}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <a href={current?.demo} target="_blank"><span className="flex w-[18px]">{Icons.arrowDiagonal}</span></a>
                        <ToggleControl
                          className={`${permanentlyEnabledBlocks.includes(current?.key) ? 'rbea-block-toggle-always-active' : 'rbea-block-toggle'}`}
                          __nextHasNoMarginBottom
                          checked={current?.status}
                          disabled={permanentlyEnabledBlocks.includes(current?.key)}
                          onChange={() => handleToggle(current?.key)}
                        />
                      </div>
                    </div>
                  )}
                </>
                :
                <>
                  {current?.title.toLowerCase().includes(search) && (
                    <div key={current?.key} className={`flex justify-between items-center border border-slate-100 bg-white rounded-md py-[18px] px-[14px] transition-shadow hover:[box-shadow:0px_10px_15px_-3px_rgba(0,0,0,0.1)] rbea-block-category-card rbea-block-category-${current?.category} ${current?.category === 'extensions' ? 'relative' : ''}`}>
                      ${current?.category === 'extensions' && <span className="absolute top-0 left-0 uppercase text-xs leading-4 font-normal text-slate-600 bg-gray-200 rounded-md px-[6px] py-[2px]">Extension</span>}
                      <div className="flex items-center gap-2">
                        <BlockIcon block={current?.key} />
                        <span className="text-sm font-medium text-slate-800">{current?.title}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <a href={current?.demo} target="_blank"><span className="flex w-[18px]">{Icons.arrowDiagonal}</span></a>
                        <ToggleControl
                          className={`${permanentlyEnabledBlocks.includes(current?.key) ? 'rbea-block-toggle-always-active' : 'rbea-block-toggle'}`}
                          __nextHasNoMarginBottom
                          checked={current?.status}
                          disabled={permanentlyEnabledBlocks.includes(current?.key)}
                          onChange={() => handleToggle(current?.key)}
                        />
                      </div>
                    </div>
                  )}
                </>
              }
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Blocks