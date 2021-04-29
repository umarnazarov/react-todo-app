import uuid from "uuid/dist/v4"

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD": 
            return [...state, {id: uuid(), todo: action.todo, finished: false }]
        case "DELETE":
            return state.filter(t => t.id !== action.id)
        case "EDIT":
            return state.map(t => 
                t.id === action.id ? {...t, todo: action.updatedTodo} : t    
            )
        case "TOGGLE":
            return state.map(t => 
                t.id === action.id ? {...t, finished: !t.finished} : t
            )
        default:
            return state
    }
}

