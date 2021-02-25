import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import "./TodoList.sass";
import "../TodoListItem/TodoListItem.sass";

const TodoList = ({ todos, onDeleted, onLabelClick, importantClick }) => {
  const elements = todos.map(({ id, ...item }) => {
    return (
      <li className='list-item' key={id}>
        <TodoListItem
          {...item}
          onLabelClick={() => onLabelClick(id)}
          importantClick={() => importantClick(id)}
          onDeleted={() => onDeleted(id)}
        />
      </li>
    );
  });

  return <ul className='list-group todo-list'>{elements}</ul>;
};

export default TodoList;
