import React, { useState } from "react";

export const TextForm = (props) => {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };
  const [text, setText] = useState(" ");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            onChange={handleOnChange}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowerCase}>
          {" "}
          Convert to LowerCase{" "}
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          {" "}
          Clear Text{" "}
        </button>
      </div>
      <div className="container my-2">
        <h1>your text summary</h1>
        <p>
          {text.split("").length}word and {text.length} Character
        </p>
        <p>{0.008 * text.split("").length}Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
};
