import React from "react";

import "./SearchPanel.sass";

import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";

const SearchPanel = ({ inputSearch, filterChange, filterVal }) => {
  const inputChange = (e) => {
    inputSearch(e.target.value);
  };
  return (
    <div className='SearchPanel'>
      <input
        className='search defaultInput'
        placeholder='Search'
        onChange={inputChange}
      />
      <ItemStatusFilter filterChange={filterChange} filterVal={filterVal} />
    </div>
  );
};
export default SearchPanel;
