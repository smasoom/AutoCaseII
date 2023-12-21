import { useState } from "react";



export default function Input(props) {
    const uperfunc=()=>
    {  let newText= text.toUpperCase();
      setText(newText)
    }
    const handleonchange=(event)=>
    { 
  setText(event.target.value)
    }
    const [text, setText] = useState('enter text here please');




  return (
    <div>
      <div className="mb-3">
     <h1>{props.heading}</h1>
  
    <textarea className="input" id="mybox" onChange={handleonchange} value={text} rows="10" ></textarea>
 
   </div>
   <button className="btn btn-primary" onClick={uperfunc}>UPPERCASE</button>
    </div>
  )
}
