import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState, useEffect} from 'react'
import Todo from '../pages/components/Todo'
import {db} from '../pages/firebase'
import {query , collection , onSnapshot, QuerySnapshot, updateDoc,doc, addDoc,deleteDoc} from 'firebase/firestore'


const inter = Inter({ subsets: ['latin'] })

const style = {
  bg: 'h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0] ',
  button: 'bg-purple-500 hover:bg-blue-400 text-white font-bold py-2 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded m-1',
  container:'bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-3',
  heading:'text-3xl font-bold text-center text-gray-800 p-2',
  form:'flex justifty-between ',
  input:'border w-full text-xl p-2',
  count:'text-center p-2'
}
export default function Home() {
  const [todos,setTodos] = useState([]);
  const [input,setInput] = useState('');
  // Create Todo
  const createTodo = async (e:any)=>{
    e.preventDefault();
    if(input==''){
      alert('Please enter a valid ToDo');
      return 
    }
    await addDoc(collection(db,'todos'),{
      text:input,
      completed:false,
    })
    setInput('')
  };

  // Read Todo
  useEffect(()=>{
    const q = query(collection(db,'todos'));
    const unsubscribe = onSnapshot(q,(QuerySnapshot)=>{
       let todosArr = [];
      QuerySnapshot.forEach((doc)=>{
        todosArr.push({...doc.data(),id: doc.id});
      });
      setTodos(todosArr);
    });
    return ()=>unsubscribe();

  },[]);


  // Update Todo
const toggleComplete = async (todo:any) =>
{
  await updateDoc(doc(db,'todos',todo.id),{
    completed:!todo.completed
  })
}


  // Delete Todo
const deleteTodo = async (id:any)=>
{
  await deleteDoc(doc(db,'todos',id))
}



  //return 
  return (
    <main>

      <div className={style.bg}>
        <div className={style.container}>
            {/* container */}
            <h2 className={style.heading}>Todo App</h2>
            <form className={style.form} onSubmit={createTodo}>
              <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder='Add ToDo'className={style.input}/>
              <button className={style.button}> ADD</button>
            </form>

            <ul>
              {todos.map((todo,index)=>(
                <Todo  todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
              ))}
              
            </ul>
                {todos.length<1?null: <p className={style.count}>{`you have ${todos.length} todo's`}</p>}
            
        </div>
      </div>
      
    </main>
  )
}
