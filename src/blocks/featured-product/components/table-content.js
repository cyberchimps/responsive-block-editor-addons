import React,{Fragment} from "react";

const TableContent = ({ data }) => {
  return (
    <Fragment>
      <div className="fp-radio">
        <input type="radio" name="product-list" value={data.id} />
        {data.name}
      </div>
    </Fragment>
  );
};

export default TableContent;
