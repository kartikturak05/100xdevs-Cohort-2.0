import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function useTodos(n){
  const [todos,setTodos] = useState([])
  const [loading,setLoading] = useState(true);
  
  let clock = setInterval(()=>{
    useEffect(()=>{
      axios.get("https://sum-server.100xdevs.com/todos")
        .then(res =>{
          setTodos(res.data.todos);
          setLoading(false);
        })
    })
  },n*1000)
 

  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(res =>{
        setTodos(res.data.todos);
        setLoading(false);

      })
      //n changes we need to stop the clock which is running  By setInterval
      return ()=>{
          clearInterval(clock);
      }
  },[n])

  return [todos,loading]
}

function App() {
  const [todos,loading] = useTodos(5);

  if(loading){
    return <div>Loading ...</div>
  }
  return (
    <div>
      {todos.map(todo => <Track todo={todo}/>)}
    </div>
  )
}

function Track({todo}){
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App
