import React, { Component } from "react";
import styled, { css } from "styled-components";
import Subtraction from "../mathBehavior/subtraction";

class SubtractionComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      minuend: 0,
      subtrahend: 0,
      result: 42,
    };

    this.onLoadHandler = this.onLoadHandler.bind(this);

    this.subtractionBehavior = new Subtraction();
  }

  render() {
    return (
      <Container {...this.props}>
        <Rect></Rect>
        <Rect2></Rect2>
        <Rect3></Rect3>
        <Text0 placeholder="1234" maxLength={4}>
          {this.state.minuend}
        </Text0>
        <Text1 placeholder="1234" maxLength={4}>
          {this.state.subtrahend}
        </Text1>
        <Text2>{this.state.result}</Text2>
      </Container>
    );
  }

  onLoadHandler() {
    this.subtractionBehavior.generateMinuendSubstrahend("ones");

    this.setState({
      minuend: this.subtractionBehavior.getMinuend(),
      subtrahend: this.subtractionBehavior.getSubtrahend(),
    });
  }

  componentDidMount() {
    window.addEventListener("load", this.onLoadHandler);
  }
}

// style code block-- css code //
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

const Text0 = styled.span`
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

const Text1 = styled.span`
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
// style code block-- css code //

export default SubtractionComponent;
