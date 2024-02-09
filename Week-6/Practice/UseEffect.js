import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"
import { useEffect } from "react"

function App() {


  // const [todos, setTodos] = useState([0]);

  const [num,setNum] = useState(1);


  // useEffect(()=>{
  //   axios.get("https://sum-server.100xdevs.com/todos")
  //   .then(function(response){
  //     setTodos(response.data.todos);
  //   })
  // },[]);

  return (
    <div>
      {/* {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>)} */}

      <button onClick={function(){setNum(1)}}>1</button>
      <button onClick={function(){setNum(2)}}>2</button>
      <button onClick={function(){setNum(3)}}>3</button>
      <button onClick={function(){setNum(4)}}>4</button>

      <Todo id={num} />

    </div>
  )
}

function Todo({id}){
  const [todo,setTodo] = useState({})

  useEffect(()=> {
    axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
    .then(function(response){
      setTodo(response.data.todo)
    })
  },[id])

  console.log(todo)

  return <div>
    <h1>
      {todo.title}
    </h1>
    <h4>
      {todo.description}
    </h4>
  </div>
}


// function Todoprint({ title, description }) {
//   return <div>
//     <h1>{title}</h1>
//     <h4>{description}</h4>
//   </div>
// }

export default App
