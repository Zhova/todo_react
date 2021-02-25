import React, { Component } from "react";

import SearchPanel from "../SearchPanel/SearchPanel";
import AppHeader from "../AppHeader/AppHeader";
import TodoList from "../TodoList/TodoList";
import AddNewItem from "../AddNewItem/AddNewItem";

import "./App.sass";

export default class App extends Component {
  maxId = 0;
  state = {
    todoData: [
      this.createNewItem("coffee"),
      this.createNewItem("bread"),
      this.createNewItem("milk"),
    ],
  };

  createNewItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
    };
  }

  toggleDone = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const oldItem = todoData[idx];
      const newItem = { ...oldItem, done: !oldItem.done };

      const newArr = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1),
      ];

      return {
        todoData: newArr,
      };
    });
  };

  toggleImportant = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const oldItem = todoData[idx];
      const newItem = { ...oldItem, important: !oldItem.important };

      const newArr = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1),
      ];
      console.log("oldState", this.state.todoData);
      console.log("newArr", newArr);

      return {
        todoData: newArr,
      };
    });
    console.log("state", this.state.todoData);
  };

  addItem = (text) => {
    const newItem = this.createNewItem(text);

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr,
      };
    });
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: todoData.filter((item) => item.id !== id),
      };
    });
  };

  render() {
    return (
      <div className='cover'>
        <AppHeader />
        <SearchPanel />
        <TodoList
          todos={this.state.todoData}
          onDeleted={this.deleteItem}
          onLabelClick={this.toggleDone}
          importantClick={this.toggleImportant}
        />
        <AddNewItem addItem={this.addItem} />
      </div>
    );
  }
}