import "./MathCard.css";
import { makeStyles } from "@material-ui/styles";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Box,
  Divider,
} from "@material-ui/core";
import React from "react";
import Logo from "../gears.svg";
import { EntypoCircleWithMinus } from "react-entypo";

const subtractionEquation = {
  MINUEND: 0,
  SUBTRAHEND: 1,
  DIFFERENCE: 2,
};

const customStyles = makeStyles({
  root: {
    // backgroundColor: "#FDAADF",
    height: "3rem",
    width: "3rem",
    marginTop: ".5rem",
    marginBottom: "1rem",
    justifyContent: "center",
    alignItems: "center",
  },
  grid: {
    height: "3rem",
    width: "3rem",
    justifyContent: "center",
    alignItems: "center",
  },
});

class MathCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minH: "?",
      minT: "?",
      minO: "?",
      subtraH: "?",
      subtraT: "?",
      subtraO: "?",
      diffH: "?",
      diffT: "?",
      diffO: "?",
    };

    this.onClickHundredsButtonHandler = this.onClickHundredsButtonHandler.bind(
      this
    );
    this.onClickTensButtonHandler = this.onClickTensButtonHandler.bind(this);
    this.onClickOnesButtonHandler = this.onClickOnesButtonHandler.bind(this);
    this.onClickAnswerButtonHandler = this.onClickAnswerButtonHandler.bind(
      this
    );
    this.onLoadHandler = this.onLoadHandler.bind(this);
  }

  // event handlers
  onLoadHandler = () => {
    this.initializeEquationStrings();
  };

  initializeEquationStrings() {
    this.separateNumberStringsIntoSingleDigits(
      this.props.minuend,
      this.props.subtrahend,
      this.props.difference
    );
    // console.log("MathCard loaded!");
    // console.log("check data: ", this.props.minuend);
  }

  separateNumberStringsIntoSingleDigits(...data) {
    this.convertMinuendStringToSingleDigits(data[subtractionEquation.MINUEND]);
    this.convertSubtrahendStringToSingleDigits(
      data[subtractionEquation.SUBTRAHEND]
    );
    this.convertDifferenceStringToSingleDigits(
      data[subtractionEquation.DIFFERENCE]
    );
  }

  componentDidUpdate() {
    // console.log("this is a test: ", this.props.minuend);
    // console.log("this is a test: ", this.props.subtrahend);
  }

  componentDidMount() {
    window.addEventListener("load", this.onLoadHandler);
  }

  onClickHundredsButtonHandler = () => {
    let subtractionElements = this.props.onClickHundreds();
    this.separateNumberStringsIntoSingleDigits(
      subtractionElements[subtractionEquation.MINUEND],
      subtractionElements[subtractionEquation.SUBTRAHEND],
      subtractionElements[subtractionEquation.DIFFERENCE]
    );
    // console.log("Hundreds Button has been clicked. ", subtractionElements[0]);
  };

  onClickTensButtonHandler = () => {
    let subtractionElements = this.props.onClickTens();
    // this.initializeEquationStrings();
    this.separateNumberStringsIntoSingleDigits(
      subtractionElements[subtractionEquation.MINUEND],
      subtractionElements[subtractionEquation.SUBTRAHEND],
      subtractionElements[subtractionEquation.DIFFERENCE]
    );
    // console.log("Tens Button has been clicked. ", subtractionElements[0]);
  };

  onClickOnesButtonHandler = () => {
    let subtractionElements = this.props.onClickOnes();
    this.separateNumberStringsIntoSingleDigits(
      subtractionElements[subtractionEquation.MINUEND],
      subtractionElements[subtractionEquation.SUBTRAHEND],
      subtractionElements[subtractionEquation.DIFFERENCE]
    );
    // console.log("Ones Button has been clicked.", subtractionElements[0]);
  };

  onClickAnswerButtonHandler = () => {
    let subtractionElement = this.props.onClickAnswer();
    this.convertDifferenceStringToSingleDigits(subtractionElement);
    // console.log("Answer Button has beem clicked.", subtractionElement);
  };

  // convert min minuend, subtrahend and difference strings to
  // Hundreds, Tens, and Ones digits to separate characters
  convertMinuendStringToSingleDigits(minuendString) {
    let baseString = minuendString.toString();
    let char0, char1, char2;

    if (2 === baseString.length) {
      char0 = " ";
      char1 = baseString.charAt(0);
      char2 = baseString.charAt(1);

      // console.log("2");
    } else if (1 === baseString.length) {
      char0 = " ";
      char1 = " ";
      char2 = baseString.charAt(0);

      // console.log("1");
    } else {
      char0 = baseString.charAt(0);
      char1 = baseString.charAt(1);
      char2 = baseString.charAt(2);
    }

    this.setState({
      minH: char0,
      minT: char1,
      minO: char2,
    });
    // console.log("character at 0: ", baseString.charAt(0));
    // console.log("character at 1: ", baseString.charAt(1));
    // console.log("character at 2: ", baseString.charAt(2));
  }

  convertSubtrahendStringToSingleDigits(subtrahendString) {
    let baseString = subtrahendString.toString();
    let char0, char1, char2;

    if (2 === baseString.length) {
      char0 = " ";
      char1 = baseString.charAt(0);
      char2 = baseString.charAt(1);

      // console.log("2");
    } else if (1 === baseString.length) {
      char0 = " ";
      char1 = " ";
      char2 = baseString.charAt(0);

      // console.log("1");
    } else {
      char0 = baseString.charAt(0);
      char1 = baseString.charAt(1);
      char2 = baseString.charAt(2);
    }

    this.setState({
      subtraH: char0,
      subtraT: char1,
      subtraO: char2,
    });

    // console.log("character at 0: ", baseString.charAt(0));
    // console.log("character at 1: ", baseString.charAt(1));
    // console.log("character at 2: ", baseString.charAt(2));
  }

  convertDifferenceStringToSingleDigits(differenceString) {
    let baseString = differenceString.toString();
    let char0, char1, char2;

    if (2 === baseString.length) {
      char0 = " ";
      char1 = baseString.charAt(0);
      char2 = baseString.charAt(1);

      // console.log("2");
    } else if (1 === baseString.length) {
      char0 = " ";
      char1 = " ";
      char2 = baseString.charAt(0);

      // console.log("1");
    } else {
      char0 = baseString.charAt(0);
      char1 = baseString.charAt(1);
      char2 = baseString.charAt(2);
    }

    this.setState({
      diffH: char0,
      diffT: char1,
      diffO: char2,
    });

    // console.log("character at 0: ", baseString.charAt(0));
    // console.log("character at 1: ", baseString.charAt(1));
    // console.log("character at 2: ", baseString.charAt(2));
  }

  checkIfDigitEqualsZero(characterString) {
    var stringResult;
    if ("0" === characterString) {
      stringResult = " ";
    } else {
      stringResult = characterString;
    }
    return stringResult;
  }

  render() {
    return (
      <div>
        <Grid container spacing={10} style={{ padding: 24 }}>
          <Grid item>
            <Card>
              <CardContent display="flex">
                <CardMedia style={{}} title="Subtraction" image={Logo}>
                  <Typography gutterBottom variant="h5">
                    Subtraction
                  </Typography>
                  <Grid container spacing={1}>
                    <Grid container direction="column">
                      <Grid container direction="row">
                        <Grid item xs={3}>
                          <Box />
                        </Grid>
                        <Grid item xs={3}>
                          <Box>
                            <Typography variant="h1">
                              {this.state.minH}
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={3}>
                          <Box>
                            <Typography variant="h1">
                              {this.state.minT}
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={3}>
                          <Box>
                            <Typography variant="h1">
                              {this.state.minO}
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                      <Grid container direction="row">
                        <Grid item xs={3}>
                          <Box
                            // backgroundColor="#FFDD21"
                            height="80px"
                            width="80px"
                            display="flex"
                            marginTop="18px"
                          >
                            <EntypoCircleWithMinus fontSize={80} />
                          </Box>
                        </Grid>
                        <Grid item xs={3}>
                          <Box>
                            <Typography variant="h1">
                              {this.state.subtraH}
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={3}>
                          <Box>
                            <Typography variant="h1">
                              {this.state.subtraT}
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={3}>
                          <Box>
                            <Typography variant="h1">
                              {this.state.subtraO}
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                      <Grid container direction="row">
                        <Grid item xs={12}>
                          <Divider width="100%" />
                        </Grid>
                      </Grid>
                      <Grid container direction="row">
                        <Grid item xs={3}>
                          <Box />
                        </Grid>
                        <Grid item xs={3}>
                          <Box>
                            <Typography variant="h1">
                              {this.state.diffH}
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={3}>
                          <Box>
                            <Typography variant="h1">
                              {this.state.diffT}
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={3}>
                          <Box>
                            <Typography variant="h1">
                              {this.state.diffO}
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardMedia>
              </CardContent>
              <CardActions display="flex">
                <Button
                  size="large"
                  color="primary"
                  onClick={this.onClickHundredsButtonHandler}
                >
                  Hundreds
                </Button>
                <Button
                  size="large"
                  color="primary"
                  onClick={this.onClickTensButtonHandler}
                >
                  Tens
                </Button>
                <Button
                  size="large"
                  color="primary"
                  onClick={this.onClickOnesButtonHandler}
                >
                  Ones
                </Button>
                <Button
                  size="large"
                  color="secondary"
                  onClick={this.onClickAnswerButtonHandler}
                >
                  answer
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default MathCard;
