import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const todos = ['Estudar React', 'Fazer exercícios', 'Ler um livro'];

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
