import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
    <Navbar title="TextUtils" About="About-Us"/>
    <div className="container my-3">

      <TextForm heading="Enter your text to analyze"/>
    </div>
    </>
  );
}

export default App;
