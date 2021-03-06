import React, { Component } from "react";
import "./ItemStatusFilter.sass";

export default class ItemStatusFilter extends Component {
  buttons = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" },
  ];

  render() {
    const { filterChange, filterVal } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filterVal === name;
      const clazz = isActive ? "active" : "disabled";
      return (
        <button
          key={name}
          name={name}
          type='button'
          className={`btnDefault filterBtn BtnInfo ${clazz}`}
          onClick={filterChange}
        >
          {label}
        </button>
      );
    });

    return <div className='ItemStatusFilter'>{buttons}</div>;
  }
}
