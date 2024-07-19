import React, { useState, useRef } from 'react';
import './ListaMusicas.css';

const ListaMusicas = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
};

function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  function adicionar() {
    if (inputRef.current) {
      setTodos([...todos, inputRef.current.value]);
      inputRef.current.value = ''; // Clear the input field
    }
  }

  return (
    <div className="App">
      <h1>Lista de músicas favoritas</h1>
      <input ref={inputRef} id='input-musica' type='text' />
      <button id='enviar-musica' onClick={adicionar}>Adicionar Música</button>
      <ListaMusicas todos={todos} />  
    </div>
  );
};

export default App;