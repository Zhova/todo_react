import React from "react";

import "./AppHeader.sass";

const AppHeader = ({quantityItems, doneCount, toDo}) => {
  return(
    <div className="AppHeader">
        <h1 className='header-title'>Todo List</h1>
        <p className="quantity-items">Всего: {quantityItems}</p>
        <p className="done-items">Готовых: {doneCount}</p>
        <p className="toDo-items">К выполнению: {toDo}</p>
    </div>

  )
};

export default AppHeader;
