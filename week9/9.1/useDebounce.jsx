import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function useDebounce(value,timeout){
  const [debouncedvalue,setDebouncedValue]= useState(value);
  useEffect(()=>{
    const val = setTimeout(()=>{
      setDebouncedValue(value);
    },timeout)

    return ()=>{
      clearTimeout(val)
    }
  },[value])


  return debouncedvalue
}

function App() {
      const [value,setValue]=useState(0);
      const debounceValue = useDebounce(value,500);

    return (
      <div>
        debounced value is {debounceValue}
        <br />
        <input type="text" onChange={e=>{
          setValue(e.target.value)
        }}/>
      </div>
    )
}

export default App
