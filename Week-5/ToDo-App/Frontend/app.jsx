import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {CreateTodo} from"./components/Createtodo"
import {Todos} from './components/Todos'


function App() {
  const [todos,setTodos] = useState([]);

  fetch("http://localhost:3000/todos")
  .then(async function(res){
    const json = await res.json();
    setTodos(json);
  })



  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>

      {/* <Todos todos={[
        {
        title:"my title",
        description:"My description",
        completed:true
      },{
        title:"Title 2",
        description:"My second description",
        completed:false
      }
      ]}></Todos> */ }
    </div>
  )
}

export default App
