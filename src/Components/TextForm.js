import React, {useState} from 'react'


export default function TextForm(props) {
    const handleupClick = ()=>{
        // console.log("Uppercas was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    };

    const [text, setText] = useState('Mandhoj Thing...');
    // text = "new text"; // Wrong way to change the text
    // setText("new text"); // Correct way to change the state

  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="10"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleupClick}>Convert to Uppercase</button>

    </div>
  )
}
