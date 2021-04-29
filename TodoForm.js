import React, {useState, useContext} from 'react'
import {dispatchContext} from './context/todo.context'

const TodoForm = () => {
    const [todo, setTodo] = useState('')
    const dispatch = useContext(dispatchContext)
    console.log("render todo form ")
    const handleSubmit = (e) => {        
        e.preventDefault()
            dispatch({type: "ADD", todo})
            setTodo('')   
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={todo} placeholder="Add New Todo" onChange={(e) => setTodo(e.target.value)}/>
            <button>Add</button>
        </form>
    )
}

export default TodoForm