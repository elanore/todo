import React, { useEffect, useRef, useState } from 'react';
import todo_icon from '../assets/todo_icon.png';
import TodoItems from './TodoItems';

const Todo = () => {

    const[todolist,setTodoList]= useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")): []);


    const inputRef = useRef();
    const add =()=>{
        const inputText = inputRef.current.value.trim();

        if(inputText === ""){
            return null;
        }
        //console.log(inputText);
        const newTodo={
            id:Date.now(),
            text :inputText,
            isComplete:false,
        }
        setTodoList((prev)=>[...prev,newTodo]);
        inputRef.current.value ="";

    
    }

    const removeTodo =(id)=>{
        setTodoList((prevTodos)=>{
            return prevTodos.filter((todo)=> todo.id !== id)
        })
    }

    const toggle =(id)=>{
        setTodoList((prevTodos)=>{
            return prevTodos.map((todo)=>{
                if(todo.id === id){
                return {...todo, isComplete: !todo.isComplete}
                }
                return todo;
            })
        })
    }

    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todolist));
    },[todolist])

  return (
  
  <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
{/*---- heading----*/}
    <div className="flex items-center mt-7 gap-2">
        <img className="w-8" src={todo_icon} alt="todo"/>
        <h1 className="text-3xl font-semibold">Task Tracker</h1>
    </div>
{/*---- input----*/}
    <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input  ref= {inputRef}className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600" type="text" placeholder="Enter the task here"/>
        <button onClick={add} className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium curson-pointer">ADD +</button>
    </div>

    {/*---- task list----*/}
    <div>
        {todolist.map((item,index)=>{
            return <TodoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} removeTodo={removeTodo} toggle={toggle}/>
        })}
    </div>


        
    </div>
  )
}

export default Todo