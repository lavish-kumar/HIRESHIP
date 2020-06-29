import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";

import Typography from "@material-ui/core/Typography";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import IconButton from "@material-ui/core/IconButton";
import AccessTime from "@material-ui/icons/AccessTime";




import Job from "./Job";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ONE_DAY_MS = 24 * 3600 * 1000;
const logoMap = {
  js: "js-logo.png",
  cPlusPlus: "cplusplus-logo.png",
  java: "java-logo.png",
  ruby: "ruby-logo.png",
  python: "py-logo.gif",
  php: "php-logo.png",
};

// returns a date like Fri Jun 14
function getMDY(ts) {
  return ts.toDateString().split(" ").slice(0, 3).join(" ");
}

// makeDate takes a TS and returns a date like Fri Jun 14
// if it's today or yesterday, it returns that instead
function makeDate(timestamp) {
  const date = new Date(timestamp);
  const dateStr = getMDY(date);
  const todayStr = getMDY(new Date());
  const yesterdayStr = getMDY(new Date(Date.now() - ONE_DAY_MS));
  if (dateStr === todayStr) {
    return "today";
  } else if (dateStr === yesterdayStr) {
    return "yesterday";
  } else {
    return dateStr;
  }
}

export default function JobCard({ job, open, handleClose }) {
  if (!job.title) return <div />;
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {job.title} at {job.company}
          <img className={"logo"} src={job.company_logo}></img>
        </DialogTitle>

        <DialogContent>
          <IconButton color="primary" aria-label="Posted time">
            <AccessTime />{" "}
            <Typography variant="caption" display="block">
              {" "}
              &nbsp; Posted&nbsp;
              {makeDate(job.created_at)}
            </Typography>
          </IconButton>
          {"\n"}
          <IconButton color="primary">
            <LocationOnIcon />
            <Typography float="right" variant="caption" display="block">
              {job.location}
            </Typography>
          </IconButton>
          {"\n"}
          <Chip
            size="small"
            avatar={
              <Avatar src="http://pngimg.com/uploads/github/github_PNG40.png"></Avatar>
            }
            label={`from ${job.source}`}
          />
          <DialogContentText
            id="alert-dialog-slide-description"
            dangerouslySetInnerHTML={{ __html: job.description }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="secondary">
            Close
          </Button>
          <Button
            onClick={handleClose}
            variant="contained"
            color="primary"
            href={job.url}
            target="_blank"
          >
            Apply
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
