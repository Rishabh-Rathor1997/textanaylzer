import React, { useState } from "react";

export default function TextForm(props) {



  const [text, setText] = useState("");

  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + " " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("Uppercase converted", "successfully", "success");
  };
  const handleUpClicklower = () => {
    // console.log("Capitalize was clicked" + " " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("lowercase converted", "successfully", "success");
  };
  const handleUpClickreset = () => {
    // console.log("Reset was clicked" + " " + text);
    let newText = "";
    setText(newText);
    props.showalert("Reset ", "successfully", "success");
  };
  const handlecopy = () => {
    // console.log("Copy was clicked" + " " + text);
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showalert(
      "copy to clipboard",
      "successfully",
      "successfully",
      "success"
    );
  };
  const hendleExtraspace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showalert("Extra space was removed", "successfully", "success");
  };

  const handleonchange = (event) => {
    setText(event.target.value);

  };
  
  const removeUnicodeAndSpecialChars = () => {
    let newText = text.replace(/[^a-zA-Z0-9 ]/g, "");
    // remove non-alphanumeric characters and non-whitespace characters

    setText(newText);
    props.showalert("Unicode characters removed", "successfully", "success");
   
  };
  return (
      <>
      <div className="container">
        <h1>{props.heading}</h1>
        <h2 className="mb-3">{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.replace(/\s+/g, "").length} characters</h2>
          <div className="mb-3">
            <textarea

              className="form-control"
              id="myBox"
              rows="8"
              value={text}
              onChange={handleonchange}
              placeholder="Enter text here"
            ></textarea>
            
            
           
            <button
              onClick={handleUpClick}
              className={`btn   ${props.btnmode} me-3 my-3`}
              disabled={text.length === 0}
            >

              Text UpperCase
            </button>
            <button
              onClick={handleUpClicklower}
              className={`btn  ${props.btnmode} me-3 my-3`}
              disabled={text.length === 0}
            >

              Text Lowercase
            </button>
            <button
              onClick={handleUpClickreset}
              className={`btn  ${props.btnmode} me-3 my-3`}
              disabled={text.length === 0}
            >

              Clear Text
            </button>
            <button
              onClick={handlecopy}
              className={`btn  ${props.btnmode} me-3 my-3`}
              disabled={text.length === 0}
            >

              Copy Text
            </button>
            <button
              onClick={hendleExtraspace}
              className={`btn  ${props.btnmode} me-3  my-3`}
              disabled={text.length === 0}
            >
              Remove Extra Space
            </button>
            <button onClick={removeUnicodeAndSpecialChars} 
            className={`btn  ${props.btnmode} me-3  my-3`}
            disabled={text.length === 0}
            >
              Unicode Characters remove
            </button>
            
          
        </div>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          <b>
            {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.replace(/\s+/g, "").length} characters
          </b>
        </p>
        <p>
          <b>{text ? 0.008 * text.split(" ").length : 0} Minutes read</b>
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Nothing TO Preview"}
        </p>
      </div>
    </>
  );
}