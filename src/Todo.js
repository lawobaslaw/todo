import React from 'react';

const Todo = ({todo, toggleTodo}) => {
    const handleTodoClick = () => {
        toggleTodo(todo.id);
    }
    return (
        <div>
            <input type="checkbox" onClick={handleTodoClick} checked={todo.completed}/>
 {todo.name}
        </div>
    );
}

export default Todo;

