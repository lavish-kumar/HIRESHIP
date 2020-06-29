import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  fontFamily: "Pacifico",
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={{ background: "#2E3B55" }} position="fixed">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            RemoteWay <span>🚀</span>
          </Typography>
          <Button
            style={{ background: "#B0B6B0" }}
            size="small"
            variant="contained"
          >
            Post a Job
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
