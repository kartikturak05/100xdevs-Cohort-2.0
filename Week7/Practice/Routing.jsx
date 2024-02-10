import { useState,lazy } from 'react'
import './App.css'
import {BrowserRouter,Route,Routes, useNavigate} from "react-router-dom"
import { Suspense } from 'react'
// import { Dashboard } from './components/dashboard'
// import { Landing } from './components/landing'  
// import Dashboard from "./components/dashboard"
const  Dashboard = lazy(()=> import("./components/dashboard")) 
const Landing = lazy(()=> import("./components/landing"))


function App() {
  return (
    <div>
{/* 
      <div style={{background:"black", color:"white"} } >
          Hi this is a topbar
      </div> */}
      <BrowserRouter>
      <AppBar></AppBar>
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"Loading...."}><Dashboard/></Suspense> }/>
          <Route path="/" element={<Suspense fallback={"Loading...."}><Landing/></Suspense> }/>
        </Routes>
      </BrowserRouter>
      </div>
  )
}

function AppBar(){
  const navigate = useNavigate()
  return <div>
     <div>
        <button onClick={()=>{
         navigate("/")
        }}> landing page</button>
        <button onClick={()=>{
           navigate("/dashboard")
        }}> Dashboard</button>
      </div>
  </div>
}

export default App
