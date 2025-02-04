import React,{useState } from 'react';
import './App.css';


import "./Light.css";
import "./dark.css";
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



  


  function App() {
    const [mode, setMode] = useState('Light');
    const [alert, setAlert] = useState(null); 

    
    
    const showAlert = ({ type, message }) => {
      setAlert({ type, message });
      setTimeout(() => {
        setAlert(null);
      }, 1500);
    };
    
      

   
    const toggleMode = () => {
      if (mode === 'Light') {
        document.body.style.backgroundColor = '#212121'; 
     
        setMode('Dark');
        showAlert({ type: 'success', message: 'Dark mode has been enabled' });
      } else {
        setMode('Light');
        document.body.style.backgroundColor = '#e6e7ee';
       
        showAlert({ type: 'success', message: 'Light mode has been enabled' });
      }
    };
  return (
    <>
     <Router>
     
  
    <Navbar aboutText='About' title="TextUtils" mode={mode}  togglemode={toggleMode} />
   
     <Alert alert={alert}  />
     
    
     <Routes>
      
      <Route  path="/textanaylzer/" element={<TextForm heading=" TextUtils | Gemini Ai Tools " showAlert={showAlert} mode={mode} />} />
     <Route exact path="/about" element={<About mode={mode} />} />
     
   </Routes>
  
  
    </Router>

    

   
    {/* {mode === 'light'? <LightMode mode={mode} alert={alert} togglemode={toggleMode} showAlert={showAlert} /> : < Darkmode mode={mode} alert={alert} togglemode={toggleMode} showAlert={showAlert} />} */}
    </>

   
  );
}

export default App;


