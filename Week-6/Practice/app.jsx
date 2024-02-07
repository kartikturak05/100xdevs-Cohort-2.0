import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [title, setTitle] = useState("kartik turak")

  function UpdateTitle(){
    setTitle("My name is "+Math.random())
  }

  return (
    <div>
    {/* <HeaderwithButton></HeaderwithButton> */}
    <button onClick={UpdateTitle}>Click me</button>
      <Header title={title}></Header>
      <Header title="Sample text"></Header>
      <Header title="Sample text"></Header>
      <Header title="Sample text"></Header>
      <Header title="Sample text"></Header>
      <Header title="Sample text"></Header>
      <Header title="Sample text"></Header>
      <Header title="Sample text"></Header>
      <Header title="Sample text"></Header>

      <Header title="Sample text"></Header>


    </div>

     // <>
    //   <Header title="kartik turak"></Header>
    //   <Header title="kartik bhau "></Header>
    // </>
  )
}

// function HeaderwithButton(){

//   const [title, setTitle] = useState("kartik turak")

  
//   function UpdateTitle(){
//     setTitle("My name is "+Math.random())
//   }

//   return <div>
//   <button onClick={UpdateTitle}>Click me</button>
//   <Header title={title}></Header>
//   </div>

  
// }


// function Header({title}){
//   return <div>
//     {title}
//   </div>
// }

const Header = React.memo(function Header({title}){
  return <div>
    {title}
  </div>
})

export default App
