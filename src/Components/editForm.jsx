import React, { useState } from "react";

export default function EditForm(props){
    const [newValue,setNewValue]= useState(props.todo.text)
    const handleSave =()=>{
        props.saveTodo(props.index,newValue)
    }
    return(
        <div key={props.index}>
            <form onSubmit ={handleSave}>
                <input defaultValue={props.todo.text} onChange ={(e)=>{setNewValue(e.target.value)}} type="text"/>
                <button>save</button>
            </form>
        </div> 
    )
}