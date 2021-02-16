import React, { useState } from "react";


export default function InputForm(props){
    const[value,setValue]= useState("")

    const valueChange = (e)=>{
        setValue(e.target.value)
    }
    const handleSumbmit=(e)=>{
        e.preventDefault()
        props.addTodo(value)
        setValue("")
    }
    return(
        <form onSubmit={handleSumbmit}>
            <input value={value} onChange={valueChange}  type="text"/>
            <button>Add</button>
        </form>
    )
}