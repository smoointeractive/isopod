import React, { Component } from "react";
import styled, { css } from "styled-components";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";

class SubtractionComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container {...this.props}>
        <Rect></Rect>
        <Rect2></Rect2>
        <Rect3></Rect3>
        {/* <EntypoIcon
        name="circle-with-minus"
        style={{
          top: 246,
          left: 45,
          position: "absolute",
          color: "rgba(128,128,128,1)",
          fontSize: 86,
        }}
      ></EntypoIcon> */}
        <Placeholder placeholder="1234" maxLength={4}></Placeholder>
        <TextInput placeholder="1234" maxLength={4}></TextInput>
        <Text2>1234</Text2>
      </Container>
    );
  }
}

/* function SubtractionComponent(props) {
  return (
    <Container {...props}>
      <Rect></Rect>
      <Rect2></Rect2>
      <Rect3></Rect3>
      { <EntypoIcon
        name="circle-with-minus"
        style={{
          top: 246,
          left: 45,
          position: "absolute",
          color: "rgba(128,128,128,1)",
          fontSize: 86,
        }}
      ></EntypoIcon> }
      <Placeholder placeholder="1234" maxLength={4}></Placeholder>
      <TextInput placeholder="1234" maxLength={4}></TextInput>
      <Text2>1234</Text2>
    </Container>
  );
} */

const Container = styled.div`
  position: relative;
  display: flex;
`;

const Rect = styled.div`
  top: 0px;
  left: 0px;
  width: 518px;
  height: 508px;
  position: absolute;
  background-color: #e6e6e6;
  border-width: 0px;
  border-color: #000000;
  border-radius: 33px;
  border-style: solid;
  box-shadow: 3px 3px 3px 0.42px rgba(0, 0, 0, 1);
`;

const Rect2 = styled.div`
  top: 343px;
  left: 45px;
  width: 426px;
  height: 6px;
  position: absolute;
  background-color: rgba(0, 0, 0, 1);
`;

const Rect3 = styled.div`
  top: 289px;
  left: 64px;
  width: 49px;
  height: 11px;
  position: absolute;
  background-color: rgba(27, 27, 27, 1);
`;

const Placeholder = styled.input`
  font-family: sans-serif;
  top: 69px;
  left: 119px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 136px;
  width: 352px;
  font-size: 132px;
  text-align: right;
  border: none;
  background: transparent;
`;

const TextInput = styled.input`
  font-family: sans-serif;
  top: 209px;
  left: 119px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 136px;
  width: 352px;
  font-size: 132px;
  text-align: right;
  border: none;
  background: transparent;
`;

const Text2 = styled.span`
  font-family: sans-serif;
  top: 349px;
  left: 119px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 136px;
  width: 352px;
  font-size: 132px;
  text-align: right;
`;

export default SubtractionComponent;
