import React, { Component } from "react";
import "./TodoListItem.sass";

export default class TodoListItem extends Component {
  // state = {
  //   done: false,
  //   important: false,
  // };

  render() {
    const { label, onDeleted, onLabelClick, importantClick } = this.props;
    const { done, important } = this.props;
    let classNames = "TodoListItem";

    if (done) {
      classNames += " done";
    }

    if (important) {
      classNames += " important";
    }

    return (
      <span className={classNames}>
        <span className='todoListItemLabel' onClick={onLabelClick}>
          {label}
        </span>
        <div className='todoListItemLabelBock'>
          <button
            type='button'
            className='btn btn-outline-success'
            onClick={importantClick}
          >
            <i className='fa fa-exclamation'></i>
          </button>

          <button
            type='button'
            className='btn btnOutlineSuccess'
            onClick={onDeleted}
          >
            <i className='fa fa-trash'></i>
          </button>
        </div>
      </span>
    );
  }
}
