import React,{ useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   return <div>
//   <Cardwrapper>
//     {<TextComponent></TextComponent>}
//   </Cardwrapper>
//   </div>
// }

// function TextComponent({}){
//   return <div>
//     hii there
//   </div>
// }
// function Cardwrapper({children}){
//   return <div style={{border:"2px solid black"}}>
//     {children}
//   </div>
// }

function App(){

  const [todos,setTodos] = useState([])
  const [counter,setCounter] = useState(0);

  
  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todos")
    .then(async function (res){
      const json = await res.json();
      setTodos(json.todos)
    })
  },[counter])
  
  setInterval(function(){
    setCounter(counter+1)
  },1000)

  return <div>
    {todos.map(function(todo){
      return <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>
    })}
  </div>
}

function Todo({title,description}){
  return <div>
    <h1>{title}</h1>
    <h4>{description}</h4>
  </div>
}

export default App
