import './App.css';
<<<<<<< HEAD

import React, { Component } from 'react'

export default class App extends Component {
 // Define the variable as a class property
 a = "Mandhoj";

  render() {
    return (
      <div>
        Hello ! {this.a} Welcome to my first class based Component.
      </div>
    )
  }
}

=======
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import About from './Components/About';

// Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is light or dark
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-info');
    document.body.classList.remove('bg-muted');
    document.body.classList.remove('bg-secondary');
  }

  const toggleMode = (cls) => {
    console.log(cls);
    removeBodyClasses(); 
    document.body.classList.add('bg-' + cls)

    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
      document.title = "Mandhoj Text Utils | Dark Mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "Mandhoj T ext Utils | Light Mode";
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} about="About-Us" />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/" element={<TextForm showAlert={showAlert} heading="" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
>>>>>>> 8c852ecc558572d0434d482952cf5e05e5c9244f
