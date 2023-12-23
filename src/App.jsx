import About from "./components/About"
import Input from "./components/Input"
import Navbar from "./components/Navbar"
import  { useState } from 'react'
import './App.css';
import {BrowserRouter as Main,Route,Routes} from 'react-router-dom';



function App() {
  const [mode, setMode] = useState('light');
const togglemode=()=>
{
   if(mode==='light')
  {setMode('dark');
document.body.style.backgroundColor='black';
  }
else
  {setMode('light');
  document.body.style.backgroundColor='white';
}}


  return (
    <>  
       <Main>
    <Navbar title="AutoCase" mode={mode} togglemode={togglemode} about= "About"/>
    <Routes>
<Route exact path='/' element={<div className="container my-3" ><Input mode={mode} heading="ENTER YOUR TEXT HERE"/></div>}/>

    </Routes>
    
    {/* <About/> */}
 </Main>
    </>
  )
}

export default App
