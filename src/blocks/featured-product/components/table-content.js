import React from "react";

const TableContent = ({ data }) => {
  return (
    <>
      <div className="fp-radio">
        <input type="radio" name="product-list" value={data.id} />
        {data.name}
      </div>
    </>
  );
};

export default TableContent;
