class Subtraction {
  constructor() {
    this.minuend = 0;
    this.subtrahend = 0;
  }

  getMinuend() {
    return this.minuend;
  }

  getSubtrahend() {
    return this.subtrahend;
  }

  calculateValue(digit) {
    let result = 0;
    if (null === digit) {
      result = 0;
    } else if ("ones" === digit) {
      result = this.getRandomInteger(9);
    } else if ("tens" === digit) {
      result = this.getRandomInteger(99);
    } else if ("hundreds" === digit) {
      result = this.getRandomInteger(999);
    }
    return result;
  }

  getRandomInteger(maxRange) {
    return Math.round(Math.random() * Math.floor(maxRange));
  }

  // make sure that minuend is a larger value than the subtrahend
  // by checking values in both minuend and subtrahend variables
  // if subtrahend is larger than the minuend we swap the minuend
  // and subtrahend values.

  calculateMinuendSubstrahend(digit) {
    this.minuend = this.calculateValue(digit);
    this.subtrahend = this.calculateValue(digit);
    this.compareMinuendSubtrahend();
  }

  compareMinuendSubtrahend() {
    this.outputMinuendSubtrahend();

    if (this.subtrahend > this.minuend) {
      this.swapMinuendSubtrahendValues();
    }

    this.outputMinuendSubtrahend();
  }

  swapMinuendSubtrahendValues() {
    let minuendValue = this.minuend;
    this.minuend = this.subtrahend;
    this.subtrahend = minuendValue;
  }

  outputMinuendSubtrahend() {
    console.log("Minued: ", this.minuend);
    console.log("Subtrahend: ", this.subtrahend);
  }
}
export default Subtraction;
