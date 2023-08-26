import "./App.css";
import Navbar from "./Components/Navbar";
// import About from "./Components/About";
import { useState } from "react";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
// import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null); // Clear the alert after timeout
    }, 3000);
  };

  const [mode, setMode] = useState({
    color: "black",
    background: "white",
  });

  const toggleMode = () => {
    if (mode.background === "white") {
      // Check background color
      setMode({
        color: "white",
        background: "black",
      });
      document.body.style.backgroundColor = "#042743";
      showAlert("Successfully Changed backgorund Color", "success");
    } else {
      setMode({
        color: "black",
        background: "white",
      });
      document.body.style.backgroundColor = "white"; // Reset background color
      showAlert("Successfully Changed backgorund Color", "success");
    }
  };

  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar
        title="TextUtils2"
        about="About"
        mode={mode}
        togglemode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-4" mode={mode}>
        {/* <Routes>
            <Route path="/about" element={<About />}></Route>
            <Route
              path="/"
              element={ */}
        <TextForm
          showAlert={showAlert}
          heading="Enter Text to analyze "
          mode={mode}
        />
        {/* }
            ></Route>
          </Routes> */}
      </div>
      {/* </BrowserRouter> */}
    </>
  );

  // return (
  //   <>
  //     <Navbar
  //       title="TextUtils2"
  //       about="About"
  //       mode={mode}
  //       togglemode={toggleMode}
  //     />
  //     <Alert alert={alert} />
  //     {/* <About /> */}
  //     <TextForm
  //       label="Enter your text in the box below"
  //       mode={mode}
  //       showAlert={showAlert}
  //     />
  //   </>
  // );
}

export default App;
