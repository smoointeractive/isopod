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
      minH: "1",
      minT: "2",
      minO: "3",
      subtraH: "1",
      subtraT: "2",
      subtraO: "3",
      diffH: "1",
      diffT: "2",
      diffO: "3",
    };

    this.onClickHundredsButtonHandler = this.onClickHundredsButtonHandler.bind(
      this
    );
    this.onClickTensButtonHandler = this.onClickTensButtonHandler.bind(this);
  }

  // event handlers
  onClickHundredsButtonHandler = () => {
    console.log("Hundreds Button has been clicked.");
  };

  onClickTensButtonHandler = () => {
    console.log("Tens Button has been clicked.");
  };

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
                <Button size="large" color="primary">
                  Ones
                </Button>
                <Button size="large" color="secondary">
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
