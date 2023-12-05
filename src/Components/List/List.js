import React from 'react';
import './list.css';

function List({ todo, todos, inputRef, checked, index, setTodos }) {
  const deleteHandler = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const copy = [...todos];
  const checkHandler = (i) => {
    copy[i].checked = !copy[i].checked;
    setTodos(copy);
  };

  return (
    <li key={todos.indexOf(todo)}>
      <button onClick={() => deleteHandler(index)}>X</button>
      <p
        className={copy[index].checked ? 'checked' : ''}
        onClick={() => checkHandler(index)}
      >
      {/* ◻️ */}
      {/* 🟣 */}
       {todo}
      </p>
    </li>
  );
}

export default List;
