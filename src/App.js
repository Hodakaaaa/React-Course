import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, {useState} from 'react'
// import About from './Components/About';

function App() {
  const[mode, setMode] = useState('light');   //Whether dark mode is light or dark

  //creating function
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
    
  }
  return (
    <>
    <Navbar title="TextUtils" mode = {mode} toggleMode={toggleMode} About="About-Us"/>
    <div className="container my-3">

      <TextForm heading="Enter your text to analyze" mode = {mode}/>
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;
