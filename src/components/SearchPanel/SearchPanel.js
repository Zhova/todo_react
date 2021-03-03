import React, { Component } from "react";

import "./SearchPanel.sass";

import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";

export default class SearchPanel extends Component {
  render() {
    return (
      <div className='SearchPanel'>
        <input
          className='search defaultInput'
          placeholder='Search'
        />
        <ItemStatusFilter />
      </div>
    );
  }
}
