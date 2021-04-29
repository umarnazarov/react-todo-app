import React, { createContext, useReducer } from 'react'
import {reducer} from '../reducer/todo.reducer'
// import configs from '../hook/Configurations'

export const todoContext = createContext()
export const dispatchContext = createContext()

export function ContextProvider(props) {
    const [todos, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem("todos") || "[]"))
    return (
        <todoContext.Provider value={todos}>
            <dispatchContext.Provider value={dispatch}>
                {props.children}
            </dispatchContext.Provider>
        </todoContext.Provider>
    )
}

