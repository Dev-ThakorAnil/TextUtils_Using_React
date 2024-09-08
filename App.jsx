import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
  const toUppercase = () =>{
    setText("");
    let newText = text.toUpperCase();
    setText(newText);
  }

  const toLowerCase = () =>{
    setText("");
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handelChange = (event) =>{
    setText(event.target.value);
  }

  const [text, setText] = useState("");

  return (
    <>
      <div 
        className="d-flex justify-content-center align-items-center" 
        style={{ height: '100vh' }} // Ensure it takes full screen height
      >
        <div className="form-floating ">
          <h1>Enter Your Text</h1>
          <textarea
            className="form-control"
            id="floatingTextarea2"
            value={text}
            onChange={handelChange}
            style={{ height: 400, width: 800 }}
          />
          <button 
            type="button" 
            className="btn btn-success mx-1 mt-2" 
            onClick={toUppercase}
          >
            UpperCase
          </button>
          <button 
            type="button" 
            className="btn btn-success mx-1 mt-2" 
            onClick={toLowerCase}
          >
            LowerCase
          </button>
          <div className="mt-3">
            <p>
              Number Of Words: {text.split(" ").filter(Boolean).length} and Number of Characters: {text.length}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
