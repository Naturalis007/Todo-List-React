import React from "react";

const Listadetareas = ({todos, setTodos, }) => {

   

    const handleDeleted = ({id}) =>{
        setTodos(todos.filter((todo) => todo.id !==id))
    }
    return (
        <div >
            {todos.map((todo)=>(
             <li className="list-item"  key={todo.id}>
                <input 
                type="text" 
                value={todo.title}
                 className="list" 
                 onChange={(event) => event.preventDefault()}/>
            
                <button className="button-deleted" onClick={()=>handleDeleted(todo)}><i className="fa fa-trash-alt"></i></button>
             
             </li>
            
            ))}
        </div>
    );
}


export default Listadetareas;