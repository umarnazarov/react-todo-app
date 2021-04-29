import React, {useEffect, useContext} from "react"
import EachTodo from "./Todo"
import TodoForm from "./TodoForm"
import {todoContext} from './context/todo.context'


function TodoApp() {
    const todos = useContext(todoContext)
        useEffect(() => {
            window.localStorage.setItem("todos", JSON.stringify(todos))
        }, [todos])

    return (
        <div>
            <ul>
                {todos.map(t =>
                    <EachTodo
                        finished={t.finished}
                        key={t.id}
                        todo={t.todo}
                        id={t.id}
                    />
                )}
            </ul>
            <TodoForm/>
        </div>
    )
}

export default TodoApp