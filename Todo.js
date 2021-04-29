import React, {useState, useContext, memo} from 'react'
import {dispatchContext} from './context/todo.context'


const EachTodo = (props) => {
    const [boolien, setBoolien] = useState(false);
    const [text, setText] = useState(props.todo);
    const dispatch = useContext(dispatchContext)
    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type: "EDIT", id: props.id, updatedTodo: text})
        setBoolien(false)
    }
    return (
        <div >
            <span onClick={dispatch.bind(this, {type: "TOGGLE", id:props.id})}>X</span>
            {boolien ?
                <form onSubmit={handleSubmit}>
                    <input type="text" value={text} onChange={handleChange} />
                    <button>Submit</button>
                </form> :
                <li style={{textDecoration: (props.finished && "line-through")}}>{props.todo}</li>
            }
            <button onClick={() => setBoolien(!boolien)}>edit</button>
            <button onClick={() => dispatch({type: "DELETE", id: props.id})}>delete</button>
        </div>
    )
}

export default memo(EachTodo)


