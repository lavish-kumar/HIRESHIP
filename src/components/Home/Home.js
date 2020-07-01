import React
// ,{ useState } 
from "react";
//import ReactDOM from "react-dom";
import {
  // Button,
  // Div,
  // Input,
  // Icon,
  // Image,
  Text,
  // Label,
  // Checkbox,
  // Anchor,
  // ThemeProvider,
  // DefaultTheme,
  // StyleReset,
  Col,
  Row
} from "atomize";

import Jobs from "../../Jobs";
// import fetch from "node-fetch";
import data from "../../data.json"

import Lottie from "../Lottie/Lottie"
import logo from "../Lottie/rocket.json"
import search from "../Lottie/jobs.json"

// const job_url = "http://localhost:3001/jobs";

// async function fetchJobs(updateCB) {
//   const res = await fetch(job_url);
//   const json = await res.json();
//   console.log({ json });

//   updateCB(json);
// }


function Home() {
  // const [jobList, updateJobs] = React.useState([]);
 
  // React.useEffect(() => {
  //   fetchJobs(updateJobs);
  // }, []);

  return (
  <>  
        <Row>
          <Col size={{xs:"12",lg:"7"}}>
          <Lottie animation={logo} w="10rem" h="10rem"/>
          
          <Text
          tag="h1"
          textSize="subheader"
          m={{ t: "1rem" }}
          textAlign="center"
          
        >
          Welcome to HIRESHIP       
        </Text>
          <Text
          tag="h3"
          textSize="subheader"
          m={{ t: "1rem" }}
          textAlign="center"
        >
          Remote Software Developer Jobs in Indian Timezone <span role="img" aria-label="celebrate">🎉</span>
        </Text>
          </Col>
          <Col size={{xs:"12",lg:"5"}}>
            <Lottie animation={search} w="50%" h="100%"/>
            </Col>
          </Row>


        <Jobs jobs={data} />

</>
  );
}

export default Home;
