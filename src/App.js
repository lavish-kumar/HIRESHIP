import React,{useState} from "react";
import "./App.css";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {Div} from 'atomize'
import MainNavigation from "../src/components/Navbar/Navbar";
import Main from "./components/Home/Home";

import withSplashScreen from "./components/HOC/withSplashScreen"
import { ThemeProvider,StyleReset } from 'atomize';
import {Button,Icon,Notification } from "atomize"
import { useDarkMode } from './components/darkMode';



const lightTheme = {
  colors: {
   
  },
  fontFamily: {
      primary: "Menlo, Monaco, Consolas, Courier New",
    }
  
  
};
const darkTheme = {
  colors: {
    black:"#FFF",
    dark:"#FFF",
    light:"#B0B7C3",
    disabled:"#FFFFFF",
    white:"#000",

    bg:"#23232e",

    gray100:"#8A94A6",
    gray200:"#D4D5D6",
    gray300:"#A7AEBB",
    gray400:"#B0B7C3",
    gray500:"#C9CED6",
    gray600:"#E1E4E8",
    gray700:"#DCDBDB",
    gray800:"#F7F8F9",
    gray900:"#E3E3E3",
    
    black100:"#0A1F44",
    black200:"#14284B",
    black300:"#283A5B",
    black400:"#364766",
    black500:"#455571",
    black600:"#DDDEDF",
    black700:"#596780",
    black800:"#E0E0E0",
    black900:"#E3E2E0",
   
  },
  fontFamily: {
      primary: "Menlo, Monaco, Consolas, Courier New",
    }
  
  
};



function App(props) {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    

    <ThemeProvider theme={themeMode}>
    <StyleReset />
    <Div bg="bg">
    <BrowserRouter>
    <>
   
    <MainNavigation theme={theme} toggleTheme={toggleTheme}/>

    <Div className="main-content">
       <Switch>
       <Route path="/" component={Main} />
      </Switch>
    </Div>
    </>
    </BrowserRouter>
    </Div>
    </ThemeProvider>

  );
}

export default withSplashScreen(App);





