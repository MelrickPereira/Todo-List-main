import React from 'react'
const style = {
li:'flex justify-between bg-slate-200 p-4 my-2 ',
liComplete:'flex justify-between bg-slate-400 p-4 my-2 ',
button:'bg-red-500 hover:bg-blue-400 text-white font-bold py-1 px-1 border-b-4 border-blue-700 hover:border-blue-500 rounded',
row: 'flex',
text:'m-2',
textCompleted:'m-2 line-through'
}
function Todo({todo,toggleComplete,deleteTodo}) {
  return (
    <li className={todo.completed? style.liComplete: style.li}> 
    <div className={style.row}>
        <input onChange={()=> toggleComplete(todo)} type="checkbox" name="" id="" checked={todo.completed?'checked':''}/>
        <p className={todo.completed?style.textCompleted: style.text}>{todo.text}</p>
    </div>
    <button className={style.button} onClick={()=>deleteTodo(todo.id)}>Delete</button>
    </li>
  )
}

export default Todo