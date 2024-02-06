
// state,components

import {useState} from "react";
function App() {

  const [todos,setTodos] = useState([{
    title:"Go to gym",
    description:"Go to gym daily 7-9",
    completed:false
  },{
      title:"Study DSA",
      description:"Study DSA from 9-100",
      completed:true
}]);

function addTodo(){
  
  setTodos([...todos,{
    title:"new todo",
    description:"new description"
  }])
}

  return  (
    <div>

      {/* <Todo title="MyTitle" description="MyDescription"/>
      <Todo title="MyTitle" description="MyDescription"/>
      <Todo title="MyTitle" description="MyDescription"/> 
      <Todo title="MyTitle" description="MyDescription"/>  */}

      {/* <Todo title={todos[0].title} description={todos[0].description}>/</Todo>
      <Todo title={todos[1].title} description={todos[1].description}>/</Todo> */}

      <button onClick={addTodo}>Add a random todo</button>
   

      {todos.map(function(todo){
        return <Todo title={todo.title} description={todo.description}>/</Todo>
      })}

    </div>
  )
}

function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App
