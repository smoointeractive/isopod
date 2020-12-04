import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const NavBar = () => {
  return (
    <div>
      <AppBar position="relative">
        <ToolBar>
          <Typography variant="h6" color="inherit">
            Sample Subtraction Problems
          </Typography>
        </ToolBar>
      </AppBar>
    </div>
  );
};

export default NavBar;
