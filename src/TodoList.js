mport React from 'react';
import Todo from './Todo.js';

const TodoList = ({todos}) => {
    return (
        <div>
        {todos.map(todo => {return <Todo key={todo.id} todo={todo}/>  })}
           
        </div>
    );
}

export default TodoList;


