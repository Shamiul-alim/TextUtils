import React,{useState} from 'react';

export default function TextForm(props) {
    const [text,setText] = useState('');
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handlleOnChnage=(event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const handleRemoveClick=()=>{
        setText("");
    }

    // setText("Enter The Text");
    return (
        <>
        <div className = "container"style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value = {text} onChange={handlleOnChnage} id="myBox" rows="8" style={{backgroundColor:props.mode==='light'?'white':'#373261',color:props.mode==='dark'?'white':'black'}}></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={handleUpClick} disabled={text.length===0} >
                Conver to UpperCase
            </button>
            <button className="btn btn-primary mx-3" onClick={handleRemoveClick}disabled={text.length===0}>
                Remove Text
            </button>

        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words, {text.length} character</p>
        </div>
        </>
  );
}