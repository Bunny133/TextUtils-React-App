import React, { useState } from "react";

export default function TextForm(props) {
  const handelClearclick = () => {
    let text = "";
    setText(text);
  };

  const handelCopyclick = () => {
    var text = document.getElementById("MyTextForm");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handellowerclick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted into Lower Case", "success");
  };
  const handelupclick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted into Upper Case", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter Text here:");

  return (
    <>
      <div
        className="mb-3"
        style={{
          color: props.mode.color,
        }}
      >
        <div className="container my-3">
          <h1>{props.label}</h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="MyTextForm"
            rows="6"
            // onChange={}
            style={{
              color: props.mode.color,
              backgroundColor: props.mode.background,
            }}
          ></textarea>
        </div>
        <button class="btn btn-primary mx-2" onClick={handelupclick}>
          Convert To Uppercase
        </button>
        <button class="btn btn-primary mx-2" onClick={handellowerclick}>
          Convert To Lowercase
        </button>
        <button class="btn btn-primary mx-2" onClick={handelClearclick}>
          ClearText
        </button>
        <button class="btn btn-primary mx-2" onClick={handelCopyclick}>
          Copy Text
        </button>
      </div>
      <div
        className="container"
        style={{
          color: props.mode.color,
        }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words {text.length} characters
        </p>
        <h2>Preview</h2>
        {text.length > 0
          ? text
          : "Enter something above in the box to preview it here"}
      </div>
    </>
  );
}
