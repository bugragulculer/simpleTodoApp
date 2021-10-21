/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';
import { Header, Form, List } from './components';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    let count = 0;
    todos.map((todo) => (!todo.done ? (count++) : null));
    document.title = `${count} task${count > 1 ? 's' : ''} todo`;
  });

  // eslint-disable-next-line consistent-return
  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    if (inputValue === '') return alert('Task name is required');

    const newArr = todos.slice();
    newArr.splice(0, 0, { name: inputValue, done: false });
    setTodos(newArr);
    setInputValue('');
  };

  const handleButtonClick = ({ type, index }) => {
    const newArr = todos.slice();
    if (type === 'uncomplete') newArr[index].done = false;
    else if (type === 'complete') newArr[index].done = true;
    return setTodos(newArr);
  };

  const handleRemoveClick = () => {
    const newArr = todos.slice();
    let array = [];
    console.log(newArr)
    for (let i = 0; i < todos.length; i++) {
      array = newArr.filter((e) => e.done === false);
    }
    setTodos(array);
  }

  return (
    <div className='todo__wrapper'>
      <Header />
      <div className='list'>
        <ul>
          {todos.map((todo, index) => (
            <List
              key={index}
              todo={todo}
              uncomplete={() => handleButtonClick({ type: 'uncomplete', index })}
              complete={() => handleButtonClick({ type: 'complete', index })}
            />
          ))}
        </ul>
        {todos.length === 0 ? null : <button onClick={() => handleRemoveClick()}>Remove</button> }
      </div>

      <Form
        onSubmit={handleSubmit}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}

export default TodoApp;
