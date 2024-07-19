import React from 'react';
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
// function App() {
//   const todos = [];

//   const input_mus = document.getElementById('input-musica');

//   function adicionar(){
//     todos.push(input_mus.value);
//   }

//   return (
//     <div className="App">
//       <h1>Lista de músicas favoritas</h1>
//       <input id='input-musica' type='text' />
//       <button id='enviar-musica' onClick={adicionar}>Adicionar Música</button>
//       <TodoList todos={todos} />  
//     </div>
//   );
// };

export default ListaMusicas;
