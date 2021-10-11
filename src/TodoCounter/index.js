import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';


function TodoCounter() {
  //las props se llamaran con use context
  const {totalTodos,completedTodos} = React.useContext(TodoContext);
  //se reciben total y completed
  //const{total,completed} = 
    return (
      <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
    );
  }
  
  export { TodoCounter };