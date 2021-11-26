import PropTypes from 'prop-types'
import React, {useState} from 'react';


export default function TextForm(props) {
    const handleUpperCase = ()=>{
        setText(text.toUpperCase())
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
        
    }
    const handleLowercase = ()=>{
        setText(text.toLowerCase());
    }
    const handleClear = ()=>{
        setText("");
    }
    const handleCopy = ()=>{
        document.getElementById("textArea").select();
        document.execCommand("copy");
        alert("Copied");
    }
    const handleSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const [text , setText] = useState("Enter Your Text...");
    
    return (
        <div className="my-5">
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" id="textArea" rows="3" value={text} style={{background: props.mode==="light"? "dark":"light",color:props.mode==="light"?"dark":"light"}} onChange={handleOnChange}>
                    
                </textarea>
            </div>
            <div className="word">You Wrote { text.length } Letter</div>
            <div className="word">You Wrote { text.split(" ").length } Words</div>
            <div className="word">Your Average Time To Read The Whole Text is { 0.003 * text.split(" ").length } Minutes</div>
            <button className="btn btn-info my-2 mx-1" onClick={handleUpperCase}>Convert To Uppercase</button>
            <button className="btn btn-info my-2 mx-1" onClick={handleLowercase}>Convert To Lowercase</button>
            <button className="btn btn-info my-2 mx-1" onClick={handleClear}>Clear</button>
            <button className="btn btn-info my-2 mx-1" onClick={handleCopy}>Copy</button>
            <button className="btn btn-info my-2 mx-1" onClick={handleSpaces}>Remove Extra Spaces</button>

            <h2>Preview</h2>
            <p>{text}</p>

        </div>
    )
}
TextForm.propTypes = {heading : PropTypes.string};


//Copy Function 
// CLear function 