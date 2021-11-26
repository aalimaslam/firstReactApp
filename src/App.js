import './App.css';
import React, { useState } from 'react'
// import About from './components/About';
import Nav from './components/Nav';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = ()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor = "#333";
      document.body.style.color= "white"
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "#ddd";
      document.body.style.color= "#333"


    }
  }
  return (
    <>
      <Nav title="Textutils" mode={mode} toggleMode={toggleMode}/>
      <div className="container-fluid">
        <TextForm title="Enter The Text To Analyze" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
