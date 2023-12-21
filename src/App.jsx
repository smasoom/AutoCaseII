import Input from "./components/Input"
import Navbar from "./components/Navbar"




function App() {
  
  return (
    <>  
    <Navbar title="AutoCase" about= "About"/>
    <div className="container my-3" ><Input heading="ENTER YOUR TEXT HERE"/></div>
    </>
  )
}

export default App
