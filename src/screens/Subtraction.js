import React, { Component } from "react";
import styled, { css } from "styled-components";
import SubtractionComponent from "../components/SubtractionComponent";

function Subtraction(props) {
  return (
    <>
      <SubtractionComponent
        style={{
          position: "absolute",
          top: 117,
          left: 440,
          height: 508,
          width: 518
        }}
      ></SubtractionComponent>
    </>
  );
}

export default Subtraction;
