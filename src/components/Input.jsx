import { useState } from "react";



export default function Input(props) {
    const uperfunc=()=>
    {  let newText= text.toUpperCase();
      setText(newText)
    }
    const reversefunc =(event)=>
    {
      let  strarr= text.split("");
      strarr=strarr.reverse();
      let newText= strarr.join("");
      setText(newText);
    
    }
    const clearfunc=()=>
    { let newText= "";
      setText(newText)
    }
    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    }
    const lowerfunc=()=>
    {  let newText= text.toLowerCase();
      setText(newText)
    }
    const handleonchange=(event)=>
    { 
  setText(event.target.value)
    }
    const [text, setText] = useState('');




  return (
    <div >
    <div className="container"   >
      <div className="mb-3">
     <h1>{props.heading}</h1>
  
    <textarea className="input" id="mybox" onChange={handleonchange} value={text} rows="10" cols="170" ></textarea>
 
   </div >
   <button className="btn btn-primary mx-2"  onClick={uperfunc}>UPPERCASE</button>
   <button className="btn btn-success mx-2" onClick={lowerfunc}>LOWERCASE</button>
   <button className="btn btn-danger mx-2" onClick={clearfunc}>CLEAR TEXT</button>
   <button className="btn btn-info mx-2" onClick={reversefunc}>REVERSE TEXT</button>
   <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
    </div>
    <h1 my-3>your text here</h1>
    <p> {text.split(" ").length} words and {text.length} characters</p>
    <p>max time to read the input text second { 0.008* text.split("").length }</p>
    <p>Preview of input text {text}</p>
    </div>
  )
}
