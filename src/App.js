import React, { useState } from "react";
import "./App.css";
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom';

import MainNavigation from "../src/components/Navbar/Navbar";
import Main from "./components/Home/Home";



function App() {

  return (
   
    <BrowserRouter>
    <>
    <MainNavigation/>
    <main className="main-content">
       <Switch>
       <Route path="/" component={Main} />
      </Switch>
    </main>
    </>


    </BrowserRouter>
  );
}

export default App;





