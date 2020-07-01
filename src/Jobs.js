import React from "react";
import Typography from "@material-ui/core/Typography";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import Dialog from "@material-ui/core/Dialog";
//import Button from "@material-ui/core/Button";
import JobCard from "./JobDescription";
import MobileStepper from "@material-ui/core/MobileStepper";
// import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
// import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
// import Paper from "@material-ui/core/Paper";
// import Radio from "@material-ui/core/Radio";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormControl from "@material-ui/core/FormControl";
// import FormLabel from "@material-ui/core/FormLabel";
// import TagSearch from "./TagSearch";

import {
  Button,
  Div,
  Icon,
  Text,
  // Image,
  // ThemeProvider,
  // DefaultTheme,
  // StyleReset,
  Row,
  // Col
} from "atomize";




import Job from "./Job";

export default function Jobs({ jobs }) {

  // description card
  
  const [open, setOpen] = React.useState(false);
  const [selectedJob, selectJob] = React.useState({});
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // location
  // const [location, setLocation] = React.useState("all");
  // function handleLocationChange(event) {
  //   setLocation(event.target.value);
  // }

  //pagination
  const maxSteps = Math.ceil(jobs.length / 25);
  const [activeStep, setActiveStep] = React.useState(0);

  const jobsOnPage = jobs.slice(activeStep * 25, activeStep * 25 + 25);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  // console.log("Job object", jobs.length, jobs[0]);
  return (
    <Div className="jobs">
      <JobCard open={open} job={selectedJob} handleClose={handleClose} />
{/*      
      <Typography style={{ marginTop: "5px", color: "white" }} variant="h6">
        Found {jobs.length} Developer Jobs 🧑‍💻✨
      </Typography>

      <Paper className="location-radio-container">
        <FormControl component="fieldset">
          <FormLabel component="legend">Location</FormLabel>
          <RadioGroup
            name="location"
            value={location}
            onChange={handleLocationChange}
            row
          >
            <FormControlLabel
              className="location-radio-item"
              value="all"
              control={<Radio color="primary" />}
              label="All"
              labelPlacement="start"
            />
            <FormControlLabel
              className="location-radio-item"
              value="india"
              control={<Radio color="primary" />}
              label="India"
              labelPlacement="start"
            />
            <FormControlLabel
              className="location-radio-item"
              value="intl"
              control={<Radio color="primary" />}
              label="International"
              labelPlacement="start"
            />
            <FormControlLabel
              className="location-radio-item"
              value="remote"
              control={<Radio color="primary" />}
              label="Remote"
              labelPlacement="start"
            />
          </RadioGroup>
        </FormControl>
      </Paper>
      <Paper className="job">
        <TagSearch />
      </Paper> */}

      <Row>
         
          {jobsOnPage.map((job, i) => (
        <Job
          key={i}
          job={job}
          onClick={() => {
            // console.log("Clicked!");
            handleClickOpen();
            selectJob(job);
          }}
        />

        
      ))}
      

        </Row>


      <Div>
        <Text textAlign="center">
          Page {activeStep + 1} of {maxSteps}
          </Text>
      </Div>
      <Div>
      <MobileStepper
        style={{backgroundColor:"transparent"}}
        className="stepper"
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        
        
        nextButton={
          <Button
          rounded="xl"
          bg="brand700"
    hoverBg="brand800"
            suffix={
      <Icon
        name="LongRight"
        size="16px"
        color="white"
        m={{ l: "1rem" }}
      />
    }
    shadow="3"
    hoverShadow="4"
   
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
          </Button>
        }
        backButton={
          <Button 
          bg="brand700"
    hoverBg="brand800"
          rounded="xl"
          prefix={
            <Icon
              name="LongLeft"
              size="16px"
              color="white"
              m={{ r: "1rem" }}
            />
          }
          shadow="3"
          hoverShadow="4"
          
          
          
         onClick={handleBack} disabled={activeStep === 0}>
       
            Back
          </Button>
        }
      />
      </Div>
    </Div>
  );
}
