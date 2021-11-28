import './App.css';
import React, { useState } from 'react'
import About from './components/About';
import Nav from './components/Nav';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
        setAlert({
          msg:message,
          type:type
        })
        setTimeout(()=>{
          setAlert(null)
        },2000);
  }

  const toggleMode = ()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor = "#333";
      document.body.style.color= "white";
      showAlert("Dark Mode has been Enabled","success")
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "#eee";
      document.body.style.color= "#333"
      showAlert("Light Mode has been Enabled","success")
    }
  }
  return (
    <>
    <Router>
      <Nav title="Textutils" mode={mode} toggleMode={toggleMode}/>
      {/* {if(toggleMode){
      }
    } */}

      <div className="container-fluid">
        <Routes>
            <Route path="/about" element={<About />}/>
            <Route path="/" element={<TextForm showAlert={showAlert} title="Enter The Text To Analyze" heading="Enter The Text To Analyze" mode={mode} />} />
        </Routes>
        {/* <About /> */}
      </div>
      <Alert alert={alert} />
    </Router>
    </>
  );
}

export default App;
