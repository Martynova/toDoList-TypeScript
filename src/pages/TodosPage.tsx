import React, { useState, useEffect } from 'react';
import ToDoForm from '../components/ToDoForm';
import { ToDoList } from '../components/ToDoList';
import { ITodo } from '../interface';

export const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem('todos') || '[]')
        setTodos(todos);

    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handlerAdd = (title: string) => {
        const newToDo: ITodo = {
            title,
            id: Date.now(),
            completed: false
        }
        setTodos(prev => [newToDo, ...prev])
    }

    const toggleHandler = (id: number) => {

        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        }))
    }

    const removeHandler = (id: number) => {
        const confirm = window.confirm('Do you want to delete element?')
        confirm && setTodos(todos.filter(todo => todo.id !== id))
    }
    return (
        <>
            <ToDoForm onAdd={handlerAdd} />
            <ToDoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler} />
        </>
    )
}