import { useState } from "react";
import React from "react";
import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import { TextForm } from "./Components/TextForm";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" />
       */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <TextForm heading="Enter the text here to analyze" />

        {/* <About /> */}
      </div>
      {/* <Navbar /> */}
    </>
  );
}

export default App;
