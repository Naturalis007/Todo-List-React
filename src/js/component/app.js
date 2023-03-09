import React, {useState} from "react";
import Header from "./header";
import Form from "./forms";
import Listadetareas from "./listadetareas";


function app ()  {
    const[input, setInput]= useState("");
    const[todos, setTodos]=useState([]);
   
    return (  
    <div className="container">
        <div className="app"> 
        <div className="header">
            <Header/>
        </div>
        <div>
            <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
           
            />
        </div>
        <div>
            <Listadetareas
           todos={todos}
           setTodos={setTodos}
            />
        </div>
        </div>
         </div>

);
      
}

export default app;