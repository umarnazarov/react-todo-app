import { useState } from 'react'
import uuid from "uuid/dist/v4"


const Change = () => {
    const [todos, setTodos] = useState(JSON.parse(window.localStorage.getItem("todos") || "[]"));

    const deleteTodo = id => {
        let lasts = todos.filter(t => t.id !== id)
        setTodos(lasts)
    }

    const editTodo = (id, updatedTodo) => {
        let newlyTodos = todos.map(t => {
            if (t.id === id) {
                t.todo = updatedTodo
            } 
            return t
        })
        setTodos(newlyTodos)
    }

    const crossTodo = (id) => {
        let newlyTodos = todos.map(t => {
            if (t.id === id) {
                t.finished = !t.finished
            }
            return t
        })
        setTodos(newlyTodos)
    }
    
    const addTodo = (todo) => {
        let newlyTodo = {id: uuid(), todo: todo, finished: false }
        setTodos([...todos, newlyTodo])
    }

    return { todos, deleteTodo, editTodo, crossTodo, addTodo }
}

export default Change
