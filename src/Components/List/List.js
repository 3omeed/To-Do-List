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
    <li className='font-medium text-2 flex items-center justify-center text-secondary' key={todos.indexOf(todo)}>
      <button className='text-accent font-bold flex items-center justify-center w-px md:w-10 my-1 px-2 py-1 border-2 rounded-lg border-accent hover:bg-accent hover:text-primary transition-all' onClick={() => deleteHandler(index)}>X</button>
      <p
        className={`${copy[index].checked ? 'checked font-medium' : 'font-medium'} focus:through text-md truncate mx-4 text-left p-0 sm:p-2 `}
        
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
