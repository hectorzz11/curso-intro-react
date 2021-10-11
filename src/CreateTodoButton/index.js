import React from 'react';
import './CreateTodoButton.css';


function CreateTodoButton(props) {
  const onClickButton =()=>{
    //se manda una funcion que devuelve el estado anterior 
    props.setOpenModal(prevState =>!prevState);
  };
    return (
      <button 
      className="CreateTodoButton"
      //se mandan funciones no directamente consol,kig
      onClick={onClickButton}
      >
        +
      </button>
    );
  }
  
  export { CreateTodoButton };