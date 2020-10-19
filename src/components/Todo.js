import React, { useState } from 'react';
import { GrEdit, GrTrash } from 'react-icons/gr'
import { ImRadioUnchecked, ImRadioChecked } from 'react-icons/im'

import TodoForm from './TodoForm'; 

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({
        id:null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }
    
    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index} >
            <div className="todo-check" onClick={() => completeTodo(todo.id)}>
                {todo.isComplete
                    ? (<ImRadioChecked className='check-icon' />)
                    : (<ImRadioUnchecked className='check-icon' />)}
            </div>
            
            <div className='todo-item' key={todo.id} >
                {todo.text}
            </div>
            
            <div className="icons">
                <GrTrash
                    onClick={() => removeTodo(todo.id)}
                    className='delete-icon'
                />
                <GrEdit onClick={() => setEdit({ id: todo.id, value: todo.text })}
                    className='edit-icon'
                />
            </div>
        </div>
    ))
}


export default Todo