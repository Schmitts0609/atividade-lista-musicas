import React, { useState } from 'react';
import './ListaMusicas.css';

const ListaMusicas = ({ todos, onDelete }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <span>{todo.text}</span>
          <button onClick={() => onDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

function App() {
  const [todos, setTodos] = useState([]); // Initialize todos as an empty array
  const inputRef = React.createRef();

  function adicionar() {
    const inputValue = inputRef.current.value.trim(); // Trim the input value to remove whitespace
    if (inputValue !== '') {
      setTodos([...todos, { text: inputValue, editing: false }]);
      inputRef.current.value = ''; // Clear the input field
    }
  }

  function onDelete(index) {
    setTodos(todos.filter((todo, i) => i !== index));
  }

  return (
    <div className="App">
      <h1>Lista de músicas favoritas</h1>
      <input ref={inputRef} id="input-musica" type="text" />
      <button id="enviar-musica" onClick={adicionar}>
        Adicionar Música
      </button>
      <ListaMusicas todos={todos} onDelete={onDelete} />
    </div>
  );
};

export default App;