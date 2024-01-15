import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const [todos, settodos] = useState([]);
  const inputRef = useRef()
  const handleAddTodo = () => {
    const text = inputRef.current.value;
    const newItem = { completed: false, text }
    settodos([...todos, newItem])
    console.log(text);
    inputRef.current.value = "";
  };
  const handleItemDone = (index) => {
    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed
    settodos(newTodos)
  }
  const handleDeleteItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1)
    settodos(newTodos)

  }
  return (
    <div className="App">
      <h2>To Do List</h2>
      <div className='to-do-container'>
        <ul>
          {todos.map(({ text, completed }, index) => {
            return (
              <div className='item'>
              <li className={completed ? 'done' : ''} key={index} onClick={() => handleItemDone(index)}>{text}</li>;
              <span className='trash' onClick={() => handleDeleteItem(index)}> ❌ </span>
            </div>
            )
           
          })}
        </ul>
        <input ref={inputRef} placeholder='Enter item' />
        <button onClick={handleAddTodo}>Add</button>
      </div>

    </div>
  );
}

export default App;
