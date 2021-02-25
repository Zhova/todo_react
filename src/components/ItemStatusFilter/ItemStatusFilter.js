import React, { Component } from "react";
import "./ItemStatusFilter.sass";

export default class ItemStatusFilter extends Component {
  render() {
    return (
      <div className='ItemStatusFilter'>
        <button type='button' className='Btn BtnInfo'>
          All
        </button>
        <button type='button' className='Btn BtnOutlineSecondary'>
          Active
        </button>
        <button type='button' className='Btn BtnOutlineSecondary'>
          Done
        </button>
      </div>
    );
  }
}
