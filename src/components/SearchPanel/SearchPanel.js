import React from "react";
import "./SearchPanel.sass";

import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";

const SearchPanel = ({ filter }) => {
  const searchText = "search";
  const searchStyle = { fontSize: "15px" };
  return (
    <div className='SearchPanel'>
      <input
        className='search defaultInput'
        style={searchStyle}
        placeholder={searchText}
      />
      <ItemStatusFilter />
    </div>
  );
};

export default SearchPanel;
