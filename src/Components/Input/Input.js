import React, { useRef, useState } from 'react';
import List from '../List/List';
import './input.css';

function Input() {
  const inputRef = useRef();
  const [todos, setTodos] = useState([]);

  const handleClick = (e) => {
    let name = inputRef.current.value;
    const newItem = { checked: false, name };
    e.preventDefault();

    if (newItem.name === '') {
      return;
    } else {
      setTodos((prev) => {
        return [...prev, newItem];
      });
    }
    inputRef.current.value = '';
  };

  return (
    <div>
      <form className="flex flex-row flex-wrap justify-evenly items-center">
        <input
          className="w-4/6 p-2 border-2 m-2 border-accent rounded-xl  text-secondary font-medium placeholder:weight-bold"
          type="text"
          name="name"
          ref={inputRef}
          placeholder="Enter an item..."
          autoFocus
        />
        <button
          className="add relative w-1/6 h-10 border-2 border-accent bg-white rounded-xl text-accent font-meduim font-meduim hover:bg-white hover:text-primary before:absolute before:content-[''] before:w-full before:h-full before:bg-accent before:top-0 before:left-0  before:-translate-x-full  before:rounded-lg before:border-2 before:border-accent before:hover:bg-accent  before:hover:-translate-x-0 before:transition-all before:duration-300 before:ease-in-out before:cursor-pointer overflow-hidden z-2 before:-z-10 "
          type="submit"
          onClick={handleClick}
        >
          Add
        </button>
      </form>
      <ul className='flex flex-col items-start px-4 py-4 md:px-12'>
        {todos.map((todo, index) => {
          return (
            <List
              todo={todo.name}
              todos={todos}
              checked={todo.checked}
              inputRef={inputRef}
              index={index}
              setTodos={setTodos}
              key={index}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Input;
