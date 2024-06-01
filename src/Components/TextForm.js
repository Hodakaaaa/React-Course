import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "successfully:")
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "successfully:")
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
        
    };

    const handleClearClick = () => {
        setText('');
        props.showAlert("Clear Text", "successfully:")
    };

    const handleCapitalizeClick = () => {
        let newText = text.replace(/\b\w/g, char => char.toUpperCase());
        setText(newText);
        props.showAlert("Capitalize Text", "successfully:")
    };

    const handleReverseClick = () => {
        let newText = text.split('').reverse().join('');
        setText(newText);
        props.showAlert("Reverse Text", "successfully:")
    };

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard!", "successfully: ");

    };

    const handleRemoveSpacesClick = () => {
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText);
        props.showAlert("Remove Space", "successfully:")
    };

    const [text, setText] = useState('Mandhoj Thing...');
    
    return (
        <>
            <div className="container" style = {{color:props.mode === 'dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor:props.mode ==='dark'?'grey':'white', color: props.mode === 'dark'?'white':'black' }} id="myBox" rows="10"></textarea>
                </div>
                <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled = {text.length === 0} className="btn btn-secondary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled = {text.length === 0} className="btn btn-danger mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
                <button disabled = {text.length === 0} className="btn btn-warning mx-2 my-2" onClick={handleCapitalizeClick}>Capitalize</button>
                <button disabled = {text.length === 0} className="btn custom-button mx-2 my-2" onClick={handleReverseClick}>Reverse Text</button>
                <button disabled = {text.length === 0} className="btn btn-success mx-2 my-2" onClick={handleCopyClick}>Copy Text</button>
                <button disabled = {text.length === 0} className="btn btn-info mx-2 my-2" onClick={handleRemoveSpacesClick}>Remove Extra Spaces</button>
            </div>

            <div className="container" style = {{ color:props.mode === 'dark'?'white':'black'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter(word => word.length !== 0).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter(word => word.length !== 0).length} Minutes read...</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Nothing to preview!'}</p>
            </div>
        </>
    );
}
