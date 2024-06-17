import React from 'react';
import tick from '../assets/tick.png';
import not_tick from '../assets/not_tick.png';
import remove from '../assets/remove.png';

const TodoItems = ({text,id,isComplete,removeTodo,toggle}) => {
  return (
    <div className="flex items-center my-3 gap-2">
        <div onClick={()=>{toggle(id)}} className="flex flex-1 items-center cursor-pointer">
            <img className="w-7" src={isComplete ? tick : not_tick} alt="tick"/>
            <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through" :""}`}>
                {text}
                </p>
        </div>
        <img onClick={()=>{removeTodo(id)}} className ="w-3.5 cursor-pointer"src={remove} alt="delete"/>
    </div>
  )
}

export default TodoItems