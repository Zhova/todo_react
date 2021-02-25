import React, { Component } from "react";
import "./AddNewItem.sass";

export default class AddNewItem extends Component {
  render() {
    const { addItem } = this.props;
    return (
      <div className='AddNewItem'>
        <button
          onClick={() => {
            addItem("text");
          }}
          type='button'
          className='btnAddItem'
        >
          add item
        </button>
      </div>
    );
  }
}
