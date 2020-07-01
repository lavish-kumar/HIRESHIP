import React from "react";

import {
  // Button,
  Div,
  Icon,
  Text,
  // Image,
  // ThemeProvider,
  // DefaultTheme,
  // StyleReset,
  Row,
  Col,
} from "atomize";

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

export default function Jobs({ job, onClick }) {
  return (
    <Col size={{ xs: 12, md: 12, lg: 6 }}>
      <Div
        m={{ xs: "2rem", md: "5rem" }}
        p={{ b: "1rem" }}
        onClick={onClick}
        pos="relative"
      >
        <Div
          pos={{ xs: "absolute", lg: "absolute" }}
          top={{ xs: "10rem", lg: "-1.5rem" }}
          right={{ xs: "-1.5rem", lg: "-1.5rem" }}
          w={{ xs: "5rem", lg: "9rem" }}
          h={{ xs: "5rem", lg: "9rem" }}
          shadow="5"
          rounded="xl"
          bgImg={job.company_logo}
          bgSize="contain"
          bgPos="center"
          
          style={{ backgroundRepeat: "no-repeat",backgroundColor:"white" }}
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
  );
}
