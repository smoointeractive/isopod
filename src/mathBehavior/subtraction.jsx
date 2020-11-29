class Subtraction {
  constructor() {
    this.minuend = 0;
    this.subtrahend = 0;
    this.result = 0;
    this.digit = "";
  }

  getMinuend() {
    return this.minuend;
  }

  getSubtrahend() {
    return this.subtrahend;
  }

  getResult() {
    return this.result;
  }

  getResultPlaceholderString() {
    let placeholderString = "";

    if ("ones" === this.digit) {
      placeholderString = "?";
    } else if ("tens" === this.digit) {
      placeholderString = "??";
    } else if ("hundreds" === this.digit) {
      placeholderString = "???";
    }

    return placeholderString;
  }

  generateRandomInteger(maxRange) {
    return Math.round(Math.random() * Math.floor(maxRange));
  }

  generateValue(digit) {
    let result = 0;
    this.digit = digit;
    if (null === digit) {
      result = 0;
    } else if ("ones" === digit) {
      result = this.generateRandomInteger(9);
    } else if ("tens" === digit) {
      result = this.generateRandomInteger(99);
    } else if ("hundreds" === digit) {
      result = this.generateRandomInteger(999);
    }
    return result;
  }

  calculateResult() {
    this.result = this.minuend - this.subtrahend;
  }

  // make sure that minuend is a larger value than the subtrahend
  // by checking values in both minuend and subtrahend variables
  // if subtrahend is larger than the minuend we swap the minuend
  // and subtrahend values.

  generateMinuendSubstrahend(digit) {
    this.minuend = this.generateValue(digit);
    this.subtrahend = this.generateValue(digit);
    this.compareMinuendSubtrahend();
    this.calculateResult();
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
