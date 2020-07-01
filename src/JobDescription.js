import React from "react";

// import Slide from "@material-ui/core/Slide";
// import Chip from "@material-ui/core/Chip";
// import Avatar from "@material-ui/core/Avatar";
import { DialogContentText } from "@material-ui/core";
// import Typography from "@material-ui/core/Typography";
// import LocationOnIcon from "@material-ui/icons/LocationOn";
// import IconButton from "@material-ui/core/IconButton";
// import AccessTime from "@material-ui/icons/AccessTime";

import { Div, Button, SideDrawer, Icon, Text, Row, Col, Tag } from "atomize";

// import Job from "./Job";

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

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
    <SideDrawer
      style={{ zIndex: 4 }}
      isOpen={open}
      onClose={handleClose}
      w={{ xs: "100vw", md: "40rem" }}
    >
      <Row>
        <Div w="100%">
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
      <Row justify="center">
        <Row w="100%">
          <Col>
            <Div
              m={{ xs: "2rem", md: "2rem" }}
              p={{ b: "1rem" }}
              pos="relative"
            >
              {/* <Div d="flex" flexWrap="wrap">
                {["info", "success", "danger", "gray", "warning", "brand"].map(
                  (name) => (
                    <Tag
                      bg={`${name}100`}
                      border="1px solid"
                      borderColor={`${name}500`}
                      textColor={`${name}800`}
                      m={{ r: "0.5rem", b: "0.5rem" }}
                    >
                      CustomTag
                    </Tag>
                  )
                )}
              </Div> */}
              <Div d="flex" justify="center">
                <Div
                  pos={{ xs: "absolute", lg: "absolute" }}
                  top="-1.5rem"
                  w={{ xs: "9rem", lg: "9rem" }}
                  h={{ xs: "9rem", lg: "9rem" }}
                  shadow="5"
                  rounded="xl"
                  bgImg={job.company_logo}
                  bgSize="contain"
                  bgPos="center"
                  style={{ backgroundRepeat: "no-repeat",backgroundColor:"white" }}
                >
                  <Div />
                </Div>
              </Div>
              <Div
                bg="white"
                shadow="4"
                rounded="xl"
                m={{ t: "5rem" }}
                p="1rem"
              >
                <Row m={{ y: "3rem" }}>
                  <Col size="12">
                    <Div d="flex" justify="center" flexWrap="wrap">
                      <Tag
                        bg={`success700`}
                        borderColor={`success500`}
                        textColor="white"
                        p={{ x: "0.75rem", y: "0.25rem" }}
                        m={{ r: "0.5rem", b: "0.5rem" }}
                        textSize="body"
                      >
                        <Icon
                          name="Timestamp"
                          size="1rem"
                          color="white"
                          m={{ r: "0.5rem" }}
                        />{" "}
                        <span>
                          <b>{"  " + makeDate(job.created_at).toUpperCase()}</b>
                        </span>
                      </Tag>
                      <Tag
                        bg={`warning700`}
                        borderColor={`warning500`}
                        textColor="white"
                        p={{ x: "0.75rem", y: "0.25rem" }}
                        m={{ r: "0.5rem", b: "0.5rem" }}
                        textSize="body"
                      >
                        <Icon
                          name="Location"
                          size="1rem"
                          color="white"
                          m={{ r: "0.5rem" }}
                        />{" "}
                        <span>
                          <b>{"  " + job.location.toUpperCase()}</b>
                        </span>
                      </Tag>
                      <Tag
                        bg={`danger700`}
                        borderColor={`danger500`}
                        textColor="white"
                        p={{ x: "0.75rem", y: "0.25rem" }}
                        m={{ r: "0.5rem", b: "0.5rem" }}
                        textSize="body"
                      >
                        <Icon
                          name="Message"
                          size="1rem"
                          color="white"
                          m={{ r: "0.5rem" }}
                        />{" "}
                        <span>
                          <b>{"  " + job.source.toUpperCase()}</b>
                        </span>
                      </Tag>

                      <Tag
                        bg={`brand700`}
                        borderColor={`brand500`}
                        textColor="white"
                        p={{ x: "0.75rem", y: "0.25rem" }}
                        m={{ r: "0.5rem", b: "0.5rem" }}
                        textSize="body"
                      >
                        <Icon
                          name="Settings"
                          size="1rem"
                          color="white"
                          m={{ r: "0.5rem" }}
                        />{" "}
                        <span>
                          <b>{"  " + job.type.toUpperCase()}</b>
                        </span>
                      </Tag>
                    </Div>
                    <Text textSize="title" textWeight="500">
                      <span>
                        <Icon name="Info" size="1rem" color="info700" />
                      </span>
                      {" " + job.title + " at " + job.company}
                    </Text>
                    <Div
                      border={{ b: "1px solid" }}
                      borderColor="gray300"
                      p={{ b: "0.75rem" }}
                    ></Div>

                      <Div>
                        {/* <Text textSize="caption" textColor="dark">
                          <span>
                            <Icon name="Rename" size="1rem" color="danger700" />
                          </span>{" "}
                          {" " + job.company}
                        </Text> */}
                        <Div
                          id="alert-dialog-slide-description"
                          dangerouslySetInnerHTML={{ __html: job.description }}
                        />
                      </Div>
               
                      <Div
                      border={{ b: "1px solid" }}
                      borderColor="gray300"
                      p={{ b: "0.75rem" }}
                    ></Div>

                      <Div d="flex" justify="space-evenly" flexWrap="wrap" m={{t:"2rem"}}>

                      <a m="1rem" 
                      rel="noopener noreferrer"
                      href={(job.how_to_apply.match(/"(.*?)"/g))?(job.how_to_apply.match(/"(.*?)"/g))[0].replace(/"/g,'') :"#"} target="_blank">
                        <Button
                          prefix={
                            <Icon
                              name="Rename"
                              size="16px"
                              color="white"
                              m={{ r: "0.5rem" }}
                            />
                          }
                          bg="success700"
                          hoverBg="success800"
                          rounded="circle"
                          p={{ r: "1.5rem", l: "1rem" }}
                          shadow="3"
                          hoverShadow="4"
                        >
                          How To Apply
                        </Button>
                      </a>
                      <a rel="noopener noreferrer" m="1rem" href={job.company_url} target="_blank">
                        <Button
                          prefix={
                            <Icon
                              name="EyeSolid"
                              size="16px"
                              color="white"
                              m={{ r: "0.5rem" }}
                            />
                          }
                          bg="warning700"
                          hoverBg="warning800"
                          rounded="circle"
                          p={{ r: "1.5rem", l: "1rem" }}
                          shadow="3"
                          hoverShadow="4"
                        >
                          Visit Company Profile
                        </Button>
                      </a>
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
                        alt="Company Logo"
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
          
        



            
        
      
          
            
           
        
         
         
            
            label={`from ${job.source}`}
         

 */}
    </SideDrawer>
  );
}
