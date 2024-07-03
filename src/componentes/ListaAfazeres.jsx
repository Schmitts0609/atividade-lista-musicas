import React from 'react';
import './ListaAfazeres.css';

const ListaAfazeres = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
};

export default ListaAfazeres;
