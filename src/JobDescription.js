import React from "react";


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

import { Div, Button, SideDrawer, Icon, Text,Row,Col } from "atomize";


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



export default function JobCard({ job,open, handleClose }){
  if (!job.title) return <div />;
  return (
    <SideDrawer style={{zIndex:4}} isOpen={open} onClose={handleClose} w={{ xs: "100vw", md: "40rem" }}>
          <Row d="flex">
            <Row>
            <Div w="100%" >
            <Button

    h="2.5rem"
    w="2.5rem"
    bg="info700"
    hoverBg="info600"
    rounded="circle"
    m={{ r: "1rem" }}
    shadow="2"
    hoverShadow="4"
    onClick={handleClose}
  >
    <Icon name="Cross" size="20px" color="white" />
  </Button>
            </Div>

            </Row>
            <Row>
          <Col>
      <Div
        m={{ xs: "3rem", md: "5rem" }}
        p={{ b: "1rem" }}
       pos="relative"
      >
        <Div
          pos={{ xs: "absolute", lg: "absolute" }}
          top={{ xs: "10rem", lg: "-1.5rem" }}
          right={{ xs: "-1.5rem", lg: "-1.5rem" }}
          w={{ xs: "5rem", lg: "9rem" }}
          h={{ xs: "5rem", lg: "9rem" }}
          bg="white"
          shadow="5"
          rounded="xl"
          bgImg={job.company_logo}
          bgSize="contain"
          rounded="lg"
          bgPos="center"
          style={{ backgroundRepeat: "no-repeat" }}
        >
          <Div />
        </Div>
        <Div bg="white" shadow="4" rounded="xl" m={{ b: "1rem" }} p="1.5rem">
          <Row>
            <Col size="8">
              <Text textSize="title" textWeight="500">
                <span>
                  <Icon name="Info" size="1rem" color="info700" />
                </span>
                {" " + job.title.split(" ").slice(0, 4).join(" ")}
              </Text>
              <Div
                border={{ b: "1px solid" }}
                borderColor="gray300"
                p={{ b: "0.75rem" }}
              >
                <Text textSize="caption" textColor="light">
                  <span>
                    <Icon name="Location" size="1rem" color="warning700" />
                  </span>{" "}
                  {" " + job.location}
                </Text>
              </Div>
              <Div
                d="flex"
                justify="space-between"
                p={{ t: "1rem", b: "1.5rem" }}
              >
                <Div>
                  <Text textSize="caption" textColor="dark">
                    <span>
                      <Icon name="Rename" size="1rem" color="danger700" />
                    </span>{" "}
                    {" " + job.company}
                  </Text>
                  <Text textSize="caption" textColor="light">
                    <span>
                      <Icon name="Timestamp" size="1rem" color="success700" />
                    </span>
                    {" " + makeDate(job.created_at)}
                  </Text>
                </Div>
              </Div>
              {/* <Button
            rounded="lg"
            bg="info700"
            hoverBg="info800"
            w="auto"
            textWeight="500"
          >
            View More 🚀
          </Button> */}
            </Col>
          </Row>
        </Div>
      </Div>

      <div className="flex-align-mid">
        {job.languages ? (
          <div className="logo-container">
            {job.languages.map((lang, i) => {
              return (
                <img
                  key={`${job.title}:${lang}`}
                  style={{ height: "40px" }}
                  src={`assets/${logoMap[lang]}`}
                />
              );
            })}
          </div>
        ) : (
          <div className="logo-spacer" />
        )}
      </div>
      <div></div>
    </Col>
          </Row>
          </Row>
   
          {/* {job.title} at {job.company}
          <img className={"logo"} src={job.company_logo}></img>
        


          Posted
          {makeDate(job.created_at)}
            
        
      
          
              {job.location}
           
        
         
         
            
            label={`from ${job.source}`}
         
          <DialogContentText
            id="alert-dialog-slide-description"
            dangerouslySetInnerHTML={{ __html: job.description }}
          />
 */}


    </SideDrawer>
  );
};


