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
      <form>
        <input
          type="text"
          name="name"
          ref={inputRef}
          placeholder="Enter an item..."
          autoFocus
        />
        <button className="add" type="submit" onClick={handleClick}>
          Add
        </button>
      </form>
      <ul>
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
