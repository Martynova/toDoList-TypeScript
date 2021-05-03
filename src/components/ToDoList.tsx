import React from 'react';
import { ITodo } from '../interface';

type ToDoListProps = {
    todos: Array<ITodo>,
    onToggle: (id: number) => void,
    onRemove?: (id: number) => void, 
}

export const ToDoList: React.FC<ToDoListProps>= ({todos, onToggle, onRemove}) => {

    const removeHandler = (event:React.MouseEvent, id: number) => {
        event.preventDefault();
        if(onRemove) { onRemove(id)}
    }
    return (
        
        <ul>
            {todos.map((todo => {
                const classes = ['todo'];
                if(todo.completed) {
                    classes.push('completed')
                }
                return (
                    <li className={classes.join(' ')} key={todo.id}>
                        
                        <label>
                            <input type="checkbox" checked={todo.completed} onChange={onToggle.bind(null, todo.id)}/>
                            <span>{todo.title}</span>
                            <i className="material-icons red-text" onClick={(event) => {removeHandler(event, todo.id)}}>delete</i>
                        </label>
                    </li>
                )
            }))}
            
        </ul>
    )
}