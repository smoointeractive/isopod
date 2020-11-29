import React, { Component } from "react";
import styled, { css } from "styled-components";
import Subtraction from "../mathBehavior/subtraction";
import MaterialButtonViolet2 from "./MaterialButtonViolet2";
// import MaterialButtonDanger from "./components/MaterialButtonDanger";
// import MaterialButtonViolet1 from "./components/MaterialButtonViolet1";
// import CupertinoButtonInfo from "./components/CupertinoButtonInfo";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";

class SubtractionComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      minuend: 0,
      subtrahend: 0,
      result: 0,
    };

    this.onLoadHandler = this.onLoadHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.answerButtonOnClickHandler = this.answerButtonOnClickHandler.bind(
      this
    );

    this.subtractionBehavior = new Subtraction();
  }

  render() {
    return (
      <Container {...this.props}>
        <Canvas>
          {" "}
          <GroupRow>
            <Group>
              <HundredsButton
                onClick={(e) => {
                  this.onClickHandler("hundreds");
                }}
              >
                <Hundreds2>Hundreds</Hundreds2>
              </HundredsButton>
            </Group>
            <Group2>
              <TensButton
                onClick={(e) => {
                  this.onClickHandler("tens");
                }}
              >
                <Tens>Tens</Tens>
              </TensButton>
            </Group2>
            <Group3>
              <OnesButton
                onClick={(e) => {
                  this.onClickHandler("ones");
                }}
              >
                <Ones>Ones</Ones>
              </OnesButton>
            </Group3>
          </GroupRow>
          <Refresh></Refresh>
        </Canvas>
        <Rect2></Rect2>
        <Rect3></Rect3>
        <Refresh>
          <EntypoIcon
            name="ccw"
            style={{
              color: "rgba(255,255,255,1)",
              fontSize: 40,
            }}
          ></EntypoIcon>
          <MaterialButtonViolet2></MaterialButtonViolet2>
        </Refresh>
        <AnswerButton onClick={(e) => this.answerButtonOnClickHandler()}>
          Answer
        </AnswerButton>
        {/* <MaterialButtonPrimary
          style={{
            height: 36,
            width: 100,
            position: "absolute",
            left: 116,
            top: 0,
            borderRadius: 30,
          }}
        ></MaterialButtonPrimary>
        <MaterialButtonDanger
          style={{
            height: 36,
            width: 100,
            position: "absolute",
            left: 231,
            top: 0,
            borderRadius: 30,
          }}
        ></MaterialButtonDanger>
        <MaterialButtonViolet1
          style={{
            height: 36,
            width: 100,
            position: "absolute",
            left: 0,
            top: 0,
            borderRadius: 30,
          }}
        ></MaterialButtonViolet1> */}
        <MinuendText placeholder="1234" maxLength={4}>
          {this.state.minuend}
        </MinuendText>
        <SubtrahendText placeholder="1234" maxLength={4}>
          {this.state.subtrahend}
        </SubtrahendText>
        <ResultText>{this.state.result}</ResultText>
      </Container>
    );
  }

  onLoadHandler() {
    // this.initializeSubtraction("ones");
  }

  onClickHandler = (e) => {
    this.initializeSubtraction(e);
  };

  answerButtonOnClickHandler() {
    this.setState({
      result: this.subtractionBehavior.getResult(),
    });
  }

  initializeSubtraction(digit) {
    this.subtractionBehavior.generateMinuendSubstrahend(digit);

    this.setState({
      minuend: this.subtractionBehavior.getMinuend(),
      subtrahend: this.subtractionBehavior.getSubtrahend(),
      result: this.subtractionBehavior.getResultPlaceholderString(),
    });
  }

  componentDidMount() {
    window.addEventListener("load", this.onLoadHandler);
  }
}

// style code block-- css code //
const Container = styled.div`
  top: 50px;
  left: 50px;
  position: relative;
  display: flex;
`;

const Canvas = styled.div`
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

const Refresh = styled.div`
  font-family: sans-serif;
  top: 400px;
  left: 10px;
  color: #ffffff;
  border-radius: 10px;
  font-size: 20px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(25, 145, 36, 1);
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

const AnswerButton = styled.div`
  font-family: sans-serif;
  top: 450px;
  left: 10px;
  width: 80px;
  height: 30px;
  color: #ffffff;
  border-radius: 10px;
  font-size: 20px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(25, 145, 36, 1);
`;

const MinuendText = styled.span`
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

const SubtrahendText = styled.span`
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

const ResultText = styled.span`
  font-family: sans-serif;
  top: 349px;
  left: 119px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #878787;
  height: 136px;
  width: 352px;
  font-size: 132px;
  text-align: right;
`;

const HundredsButton = styled.div`
  font-family: sans-serif;
  width: 80px;
  height: 28px;
  background-color: rgba(80, 113, 249, 1);
  border-radius: 10px;
  flex-direction: column;
  display: flex;
  box-shadow: 2px 2px 2px 0.02px rgba(0, 0, 0, 0.25);
`;

const Hundreds = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  margin-top: 6px;
  margin-left: 10px;
`;

const Group = styled.div`
  width: 80px;
  height: 28px;
  flex-direction: column;
  display: flex;
`;

const Button4 = styled.div`
  width: 80px;
  height: 28px;
  background-color: rgba(80, 113, 249, 1);
  border-radius: 10px;
  flex-direction: column;
  display: flex;
  box-shadow: 3px 3px 2px 0.06px rgba(0, 0, 0, 1);
`;

const Hundreds2 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  margin-top: 6px;
  margin-left: 10px;
`;

const Group2 = styled.div`
  width: 80px;
  height: 28px;
  flex-direction: column;
  display: flex;
  margin-left: 17px;
`;

const TensButton = styled.div`
  font-family: sans-serif;
  width: 80px;
  height: 28px;
  background-color: rgba(80, 113, 249, 1);
  border-radius: 10px;
  flex-direction: column;
  display: flex;
  box-shadow: 2px 2px 2px 0.02px rgba(0, 0, 0, 0.25);
`;

const Tens = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  margin-top: 6px;
  margin-left: 25px;
`;

const Group3 = styled.div`
  width: 80px;
  height: 28px;
  flex-direction: column;
  display: flex;
  margin-left: 13px;
`;

const OnesButton = styled.div`
  font-family: sans-serif;
  width: 80px;
  height: 28px;
  background-color: rgba(80, 113, 249, 1);
  border-radius: 10px;
  flex-direction: column;
  display: flex;
  box-shadow: 2px 2px 2px 0.02px rgba(0, 0, 0, 0.25);
`;

const Ones = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  margin-top: 6px;
  margin-left: 25px;
`;

const GroupRow = styled.div`
  height: 28px;
  margin-top: 6px;
  flex-direction: row;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex: 1 1 0%;
`;
// style code block-- css code //

export default SubtractionComponent;
