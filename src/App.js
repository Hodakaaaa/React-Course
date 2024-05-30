import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, {useState} from 'react';
import Alert from './Components/Alert';
// import About from './Components/About';

function App() {
  const[mode, setMode] = useState('light');   //Whether dark mode is light or dark
  const[alert, setAlert] = useState(null);


  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }

  //creating function
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success: ");
      document.title = "Mandhoj Text Utils | Dark Mode";
      // setInterval(()=>{
      //   document.title = "Welcome ";
      // }, 2000);

      // setInterval(()=>{
      //   document.title = "Install Netflix";
      // }, 1500);
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success: ");
      document.title = "Mandhoj Text Utils | Light Mode";
    }
    
  }
  return (
    <>
    <Navbar title="TextUtils" mode = {mode} toggleMode={toggleMode} About="About-Us"/>
    <Alert alert={alert}/>

    <div className="container my-3">

      <TextForm showAlert={showAlert} heading="Enter your text to analyze" mode = {mode}/>
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;
