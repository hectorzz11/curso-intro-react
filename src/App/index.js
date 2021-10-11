import React from 'react';
import { AppUI } from './AppUI';
import{TodoProvider}from '../TodoContext/';

//import './App.css';
/*const defaultTodos =[

  {text: 'Cortar cebolla',completed:true },
  {text: 'Tomar curso',completed:false },
  {text: 'hacer nada',completed:false },

];*/

function App() {   
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;