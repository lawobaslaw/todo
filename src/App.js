import React, {useState, useRef, useEffect} from 'react';
import TodoList from './TodoList.js';
import { v4 as uuidv4 } from 'uuid';

function App() {
 const [todos, setTodos] = useState([]);
 const addedTask = useRef();
 /**To get from todo list */

 /**To save to local storage*/
useEffect(() => {
 }, [todos]);


 /**To add to todo list */
 const addTodo =()=> {
   let name = addedTask.current.value;
   if (name === '') return
    const newTask = {
      name,
      id: uuidv4(),
      completed: false
    }
setTodos(prevTodos => [...prevTodos, newTask ])
addedTask.current.value="";
 }



  return (
    <div>
    <h1>TODO APP</h1>
    <TodoList todos={todos}/>
    <input ref={addedTask} type="text"/>
    <button onClick={addTodo}>Add Todo</button>
    <button>Clear Completed</button>
<div>0 left to do</div>
    </div>
  );
}

export default App;
