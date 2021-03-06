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
    term: "",
    filterVal: "all",
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

      return {
        todoData: newArr,
      };
    });
  };

  addItem = (text) => {
    const newItem = this.createNewItem(text);

    this.setState(({ todoData }) => {
      const newArr = [newItem, ...todoData];
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

  inputSearch = (text) => {
    this.setState(({ term }) => {
      return {
        term: text,
      };
    });
  };

  search(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label.indexOf(term) > -1;
    });
  }

  filter(items, filter) {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter((item) => !item.done);
      case "done":
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }

  filterChange = (e) => {
    const newVal = e.target.name;

    return this.setState(({ filter }) => {
      return { filterVal: newVal };
    });
  };

  render() {
    // console.log(this.state);
    const { todoData, term, filterVal } = this.state;

    const doneCount = todoData.filter((el) => el.done).length;
    const quantityItems = todoData.length;
    const toDo = quantityItems - doneCount;

    const visibleItems = this.filter(this.search(todoData, term), filterVal);

    return (
      <div className='cover'>
        <AppHeader
          quantityItems={quantityItems}
          doneCount={doneCount}
          toDo={toDo}
        />
        <SearchPanel
          filterChange={this.filterChange}
          filterVal={filterVal}
          inputSearch={this.inputSearch}
        />
        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          isDoneFun={this.isDoneFun}
          onLabelClick={this.toggleDone}
          importantClick={this.toggleImportant}
        />
        <AddNewItem addItem={this.addItem} />
      </div>
    );
  }
}
