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
      margin: "auto",
      width: "50%",
      height: "25%",
      // position: "absolute",
      // left: "20%",
      // top: "20%",
      // transform: "translate(-20%, -20%)",
      // display: "flex",
      // alignItems: "center",
      // justifyContent: "center",
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
