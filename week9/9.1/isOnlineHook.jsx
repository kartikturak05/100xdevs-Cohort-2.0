import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function useIsOnline(){
  const [isOnline,setIsOnline]=useState(window.navigator.onLine);

  useEffect(()=>{
    window.addEventListener('online',()=>{
      setIsOnline(true);
    })
  })
  useEffect(()=>{
    window.addEventListener('offline',()=>{
      setIsOnline(false);
    })
  })

  return isOnline;
}


function App() {
  
  const isOnline = useIsOnline();

  if(isOnline){
    return "You are Online babe";
  }
  return "You are offline idiot";
}

export default App
