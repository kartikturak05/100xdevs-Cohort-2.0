import { useState,useContext } from "react"
import { countContext } from "./context"


function App() {
  const [count,setCount] = useState(0)
  return (
    <div>
        <countContext.Provider value={{count,setCount}}>
        <Count></Count>
        </countContext.Provider>
    </div>
  )
}

function Count(){
  return <div>
    <CountRenderer></CountRenderer>
    <Button ></Button>
  </div>
}

function CountRenderer(){
  const {count,setCount} = useContext(countContext)
  return <div>
    {count}
  </div>

}

function Button(){
  const {count,setCount} = useContext(countContext)
  return <div>
    <button onClick={()=>{
      setCount(count+1)
    }}>Increase</button>

    <button onClick={()=>{
      setCount(count-1)

    }}>Decrease</button>
  </div>

}
export default App
