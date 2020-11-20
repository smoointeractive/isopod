import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import SubtractionComponent from "./components/SubtractionComponent";
// import Testcomponent from "./components/testcomponent";
// import Index from "./components/testcomponent";

ReactDOM.render(
  <div
    style={{
      position: "relative",
      left: "100%",
      top: "100%",
      transform: "translate(-75%, -75%)",
    }}
  >
    <SubtractionComponent />
  </div>,
  // <Index />,
  // <Testcomponent />,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
