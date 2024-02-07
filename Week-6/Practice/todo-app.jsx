import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let counter = 0;

function App() {

  const [todos,setTodos] = useState([{
    id:counter++,
    title:"DO DSA",
    description:"Solce todays code of the day problem",
  },{
    id:counter++,
    title:"Go to gym",
    description:"Go to gym daily good for health",
  },{
    id:counter++,
    title:"Prepare for interview",
    description:"Interview preperation for 2 hours daily",
  },  
])

  function addTodo(){
    setTodos([...todos,{
      id:counter++,
      title:"New added title",
      description:"New added description"
    },
  ])
  }

  return (
    <div>
      <button onClick={addTodo}>Add a todo</button>

      {todos.map(function(todo){
        return <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>
      })}
    </div>
  )
}

function Todo({title,description}){
  return <div>
    <h1>{title}</h1>
    <h2>{description}</h2>
  </div>
}
export default App
