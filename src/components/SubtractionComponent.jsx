import React, { Component } from "react";
import Subtraction from "../mathBehavior/subtraction";
import MathCard from "./MathCard";

class SubtractionComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      minuend: 0,
      subtrahend: 0,
      difference: 0,
    };

    this.onLoadHandler = this.onLoadHandler.bind(this);

    this.subtractionBehavior = new Subtraction();
  }

  render() {
    return (
      <MathCard
        minuend={this.state.minuend}
        subtrahend={this.state.subtrahend}
        difference={this.state.difference}
        onClickHundreds={() => {
          this.initializeEquation("hundreds");
          let arithmeticElements = [
            this.subtractionBehavior.getMinuend(),
            this.subtractionBehavior.getSubtrahend(),
            this.subtractionBehavior.getResultPlaceholderString(),
          ];
          return arithmeticElements;
        }}
        onClickTens={() => {
          this.initializeEquation("tens");
          let arithmeticElements = [
            this.subtractionBehavior.getMinuend(),
            this.subtractionBehavior.getSubtrahend(),
            this.subtractionBehavior.getResultPlaceholderString(),
          ];
          return arithmeticElements;
        }}
        onClickOnes={() => {
          this.initializeEquation("ones");
          let arithmeticElements = [
            this.subtractionBehavior.getMinuend(),
            this.subtractionBehavior.getSubtrahend(),
            this.subtractionBehavior.getResultPlaceholderString(),
          ];
          return arithmeticElements;
        }}
        onClickAnswer={() => {
          return this.subtractionBehavior.getDifference();
        }}
      />
    );
  }

  onLoadHandler() {
    this.initializeEquation("");
  }

  initializeEquation(digits) {
    this.subtractionBehavior.generateMinuendSubstrahend(digits);
    this.subtractionBehavior.calculateDifference();
    this.setState({
      minuend: this.subtractionBehavior.getMinuend(),
      subtrahend: this.subtractionBehavior.getSubtrahend(),
      difference: this.subtractionBehavior.getResultPlaceholderString(),
    });
  }

  componentDidMount() {
    window.addEventListener("load", this.onLoadHandler);
  }
}

export default SubtractionComponent;
