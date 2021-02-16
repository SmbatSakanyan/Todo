
import './App.css';
import {useDebugValue, useState} from 'react'
import Todos from "./Components/Todolist"
import InputForm from "./Components/form"
import EditForm from './Components/editForm';

function App() {
    
    const [todoList,setTodoList]= useState([])

    const addTodo = (value)=>{
        const newtodoList=[...todoList,{text: value}]
        setTodoList(newtodoList)
    }
    const removeTodo =(index)=>{
       const newtodoList=[...todoList]
       newtodoList.splice(index,1)
       setTodoList(newtodoList)
    }

    const editTodo =(index)=>{
        const newTodolist =[...todoList]
        newTodolist[index].editing = true
        setTodoList(newTodolist)
    }
    const saveTodo =(index,newValue)=>{
        const newtodoList =[...todoList]
        newtodoList[index].text=newValue
        newtodoList[index].editing=false
        setTodoList(newtodoList)
        
    }


    return (
        <div className="App">
            <InputForm
                addTodo ={addTodo}
            />
            {
                todoList.map((todo,index)=>{
                    if(todo.editing){
                        return(
                            <EditForm
                                key ={index}
                                todo={todo}
                                index={index}
                                saveTodo={saveTodo}
                            />    
                        )
                    }
                    return(
                        <Todos
                            key={index}
                            todo={todo}
                            index ={index}
                            removeTodo={removeTodo}
                            editTodo ={editTodo}
                        />
                    )
                })
            }
        </div>
    )
}

export default App;
