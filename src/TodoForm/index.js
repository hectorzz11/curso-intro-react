import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css'

function TodoForm(){

    //nuevo estado local
    const [newTodoValue, setNewTodoValue]=React.useState('');

    const {
        addTodo,
        setOpenModal,
    }=React.useContext(TodoContext);

    //evento de escritura de la accion del usuario
    const onChange = (event)=>{
        //se agarra el valor que escribio
        setNewTodoValue(event.target.value);

        //

    };
    const onCancel = ()=>{
        setOpenModal(false);
        //

    };
    const onSubmit = (event)=>{
        //cuando el formulario se envie no se recarga la pagina,
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);

    };


    return(
    <form onSubmit={onSubmit}>
        <label>Escribe tu nuevo TODO</label>
        <textarea
        value={newTodoValue}
        onChange={onChange}        
        placeholder ="..."
        />
        <div className="TodoForm-buttonContainer">
            <button
                type="button"
                className="TodoForm-button TodoForm-button--cancel"
                onClick={onCancel}
            >
                Cancelar
            </button>
            <button
                type="submit"
                className="TodoForm-button TodoForm-button--add"
            >
                
                Añadir
            </button>        

        </div>
    </form>

    );

}
export {TodoForm};