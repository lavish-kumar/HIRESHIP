import React from 'react'
import loaderStyles from './SiteLoader.module.css';
import Lottie from "../Lottie/Lottie"
import logo from "../Lottie/rocket.json"

import {
  // Button,
  Div,
  // Icon,
  Text,
  // Image,
  // ThemeProvider,
  // DefaultTheme,
  // StyleReset,
  Row,
  Col,
} from "atomize";

export default function SiteLoader() {
    return (
        <div className={loaderStyles["App"]}>
        <header className={loaderStyles["App-header"]}>
          <Div className={loaderStyles["App-logo"]}>
            
          <Row>
          <Col>
          <Lottie animation={logo} w="50%" h="50%"/>
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
          Remote Software Developer Jobs
        </Text>
        <Text
          tag="h3"
          textSize="subheader"
          m={{ t: "1rem" }}
          textAlign="center"
        >
          in Indian Timezone <span role="img" aria-label="celebrate">🎉</span>
        </Text>
          </Col>
          </Row>
          </Div>
        </header>
      </div>
    )
}
