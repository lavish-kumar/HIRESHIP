import React from "react";
import "./App.css";
import Typography from "@material-ui/core/Typography";
import Jobs from "./Jobs";
import fetch from "node-fetch";
import NavBar from "./NavBar";
import data from "./data.json"
const job_url = "http://localhost:3001/jobs";

async function fetchJobs(updateCB) {
  const res = await fetch(job_url);
  const json = await res.json();
  console.log({ json });

  updateCB(json);

  
}




function Ak() {
  const [jobList, updateJobs] = React.useState([]);

  React.useEffect(() => {
    fetchJobs(updateJobs);
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#383e3f",
      }}
      className="App"
    >
      <NavBar />
      <Typography
        variant="h4"
        component="h1"
        style={{ fontWeight: "bold" }}
      ></Typography>

      <Jobs jobs={data} />
    </div>
  );
}

export default Ak;
