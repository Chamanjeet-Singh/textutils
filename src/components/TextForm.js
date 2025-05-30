import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Converted to UpperCase!', 'success');
    }

    const handleLoClick =()=>{
      // console.log("Uppercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert('Converted to LowerCase!', 'success');
  }
    const handleCopy =()=>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value); 
      props.showAlert('Copied to Clipboard', 'success');
    }

    const handleExtraSpaces =()=>{
      let newText = text.split(/[ ]+/)
      setText(newText.join[" "])
    }
  
    const handleOnClear =()=>{
      let newText = '';
      setText(newText)
      props.showAlert('Text Cleared', 'success');
    }


    const handleOnChange =(event)=>{
        // console.log("Onchange");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // text = "New text"; Wrong way to change the state
    // setText("New text"); Correct way to change the state;
  return (
    <>
    <div className='container' style={{color : props.mode === 'dark'?'white':'#042743'}}> 
        <h1 className='mb-4'>{props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark'?'#13466e':'white' , 
          color : props.mode === 'dark'?'white':'#042743' }} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleOnClear}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove ExtraSpaces</button>
    </div>
     <div className="container my-3" style={{color : props.mode === 'dark'?'white':'#042743'}}>
      <h2>Your Text Summary</h2>
       <p> {text.split(" ").filter( (element)=>{ return (element.length!==0)}).length} words and {text.length} character</p> 
       <p> {0.008 * text.split(" ").filter( (element)=>{ return (element.length!==0)}).length} Minutes to read the text</p> 

       <h2>Preview</h2>
       <p>{text.length>0?text:"Nothing to Preview!"}</p>
    </div> 
    </>
  )
}
