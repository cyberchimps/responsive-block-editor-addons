import { useState, useContext } from 'react';
import { ToggleControl } from "@wordpress/components";
import BlockCard from '../components/BlockCard';
import { BlocksContext } from '../BlocksContext';

const Blocks = () => {

  const { blocksList, toggleAll, handleToggleAll } = useContext(BlocksContext);
  const [showCategory, setShowCategory] = useState('all');
  const [search, setSearch] = useState('');

  const handleShowCategory = (tab) => {
    setShowCategory(tab);
    setSearch('');
  }

  const blockCategories = [ 'All', 'Content', 'Timelines', 'CRO', 'Extensions'];

  return (
    <div className="mx-10 p-10 mt-12 mb-16 bg-white rounded-[20px]">
      <div className="flex justify-between items-center">
        <div className="flex border-b border-b-slate-300">
          {blockCategories.map((current) => (
            <div key={current} onClick={() => handleShowCategory(current.toLowerCase())} className={`px-3 py-0.625 text-base leading-6 font-normal text-desc cursor-pointer hover:bg-slate-200 ${showCategory === current.toLowerCase() ? 'rbea-active-category' : ''}`}>{current}</div>
          ))}
        </div>
        <div className="relative">
          <input value={search} className="rbea-block-search !border !rounded-[10px] !border-gray-300 !p-3" onChange={(e) => setSearch(e.target.value)} autoComplete="off" type="text" name="" id="" placeholder="Search Blocks" />
          <i className="absolute right-2 top-4 bg-white"><span className="dashicons dashicons-search text-[#2563EB]"></span></i>
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
        {blocksList.map((current) => {
          return (
            <>
              {search === ''
                ?
                <>
                  {(current?.category === showCategory || showCategory === 'all') && <BlockCard data={current} />}
                </>
                :
                <>
                  {current?.title.toLowerCase().includes(search) && <BlockCard data={current} />}
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