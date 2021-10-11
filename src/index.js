import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/index.js';
import './index.css';


/*
const e = React.createElement

function App(){
  return(
    //esto
  <h1 id="title">
    hellou
    
  </h1>
  //es lo mismo que:
    //React.createElement('h1',{id:'title'}, 'hello')
  );
  

}
*/
ReactDOM.render(
    <App />,
  document.getElementById('root')
);
