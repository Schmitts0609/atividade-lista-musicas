import React from 'react';
import './App.css';
import TodoList from './componentes/ListaAfazeres';

function App() {
  const todos = ['Fazer o tema de técnico', 'Jantar', 'Tomar banho', 'Dormir'];

  return (
    <div className="App">
      <h1>tarefas a fazer</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
