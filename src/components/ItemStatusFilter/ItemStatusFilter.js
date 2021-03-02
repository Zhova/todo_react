import React, { Component } from "react";
import "./ItemStatusFilter.sass";

export default class ItemStatusFilter extends Component {
  render() {
    return (
      <div className='ItemStatusFilter'>
        <button type='button' className='btnDefault filterBtn BtnInfo active'>
          All
        </button>
        <button
          type='button'
          className='btnDefault filterBtn BtnOutlineSecondary'
        >
          Active
        </button>
        <button
          type='button'
          className='btnDefault filterBtn BtnOutlineSecondary'
        >
          Done
        </button>
      </div>
    );
  }
}
