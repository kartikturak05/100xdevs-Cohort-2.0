
// state,components

import {useState} from "react";



function App() {

  const [count,setCount] = useState(0);

  // function OnClickHandler(){
  //   setCount(count+1);
  // }
  // return (
  //   <div>
  //     <button onClick={OnClickHandler}>Counter {count}</button>
  //   </div>    
  // )


  return  (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
  )

  function CustomButton(props){

    function onClickHandler(){
      props.setCount(count+1);
    }
    
    return <button onClick={onClickHandler}>Counter {props.count}</button>
  }
}

export default App
