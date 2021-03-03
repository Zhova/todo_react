import React, { Component } from "react";
import "./AddNewItem.sass";

export default class AddNewItem extends Component {
  state = {
    label: "",
  };

  onChangeInput = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    if (this.state.label === "") {
      alert("поле не может быть пустым");
    } else {
      e.preventDefault();
      this.props.addItem(this.state.label);

      document.getElementsByClassName("addNewItemInput")[0].value = "";

      this.setState({
        label: "",
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className='AddNewItem '>
        <input
          type='text'
          className='addNewItemInput defaultInput'
          placeholder='Add new task'
          onChange={this.onChangeInput}
        />
        <button type='submit' className='btnAddItem btnDefault'>
          add item
        </button>
      </form>
    );
  }
}
