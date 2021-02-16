import React, { useState } from "react"

export  default function Todos(props){
    const handleSubmit =()=>{
        props.removeTodo(props.index)
    }

    const handleEdit=()=>{
        props.editTodo(props.index)
    }
    return(
        <div>
            <h1>{props.index+1}     {props.todo.text}</h1>
            <button onClick={handleEdit}>edit</button>
            <button onClick={handleSubmit}>x</button>
        </div>
    )
}