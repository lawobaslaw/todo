import React, {useState, useRef, useEffect} from 'react';
import TodoList from './TodoList.js';
import { v4 as uuidv4 } from 'uuid';

function App() {
 const [todos, setTodos] = useState([]);
 const addedTask = useRef();
 /**To get from todo list */


 useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  if (storedTodos) {setTodos(storedTodos);
    
  }
 }, []);

 /**To save to local storage*/
 const LOCAL_STORAGE_KEY ='john.white';
useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos))
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
 /**To toggle completed */
const toggleTodo =(id)=> {
  const newTodos = [...todos];
  const todo = newTodos.find(todo=> todo.id===id);
  todo.completed=!todo.completed;
  setTodos(newTodos);
}

  return (
    <div>
    <h1>TODO APP</h1>
    <TodoList todos={todos} toggleTodo={toggleTodo}/>
    <input ref={addedTask} type="text"/>
    <button onClick={addTodo}>Add Todo</button>
    <button>Clear Completed</button>
<div>0 left to do</div>
    </div>
  );
}

export default App;
