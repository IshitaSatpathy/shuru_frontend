import React from "react";
import {
  AppBar,
  Button,
  Card,
  CardContent,
  Grid,
  Hidden,
  Toolbar,
  Typography,
  Avatar,
  Divider,
  Box,
} from "@material-ui/core";
import HomepageScreen2 from './Homepage2';
import HomepageScreen3 from './Homepage3';
import HomepageScreen from './Homepage_screen';
import HomepageScreen4 from './Homepage4';
import HomepageScreen5 from './Homepage5';
import HomepageScreen6 from './Homepage6';
import HomepageScreen7 from './Homepage7';
import HomepageScreen8 from './Homepage8';
import HomepageScreen9 from './Homepage9';
import HomepageScreen10 from './Homepage10';
import HomepageScreen11 from './Homepage11';
import HomepageScreen13 from "./Homepage13";
import { useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import { IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { blueGrey } from "@mui/material/colors";
import interRegular from "../static/Inter-Regular.ttf";
import interBold from "../static/Inter-Bold.ttf";
import interExtraBold from "../static/Inter-ExtraBold.ttf";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  circle: {
    backgroundColor: blueGrey[50],
    borderRadius: "50%",
    height: 40,
    width: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  "@font-face": {
    fontFamily: "Inter",
    src: `
      url(${interRegular}) format('truetype'),
      url(${interBold}) format('truetype'),
      url(${interExtraBold}) format('truetype')
    `,
    fontWeight: "normal",
    fontStyle: "normal",
  },
  circle1: {
    backgroundColor: blueGrey[50],
    borderRadius: "50%",
    height: 40,
    width: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: "9.3rem",
    left: "32rem",
  },
}));
function Centerpage() {
  const theme = createTheme({
    typography: {
      caption: {
        fontSize: "0.75rem",
      },
      h5: {
        fontSize: "calc(25/16*1rem)",
      },
      h1: {
        fontSize: "calc(61.04/16*1rem)",
      },
      h2: {
        fontSize: "calc(48.83/16*1rem)",
      },
      h3: {
        fontSize: "calc(39.06/16*1rem)",
      },
      h4: {
        fontSize: "calc(31.25/16*1rem)",
      },
      body1: {
        fontSize: "calc(16/16*1rem)",
      },
    },
    spacing: (factor) => `${0.8 * factor}rem`,
  });
  const classes = useStyles();
  console.log(112)
  const [st,setst]=useState(0);
  return (
    <>
    <ThemeProvider theme={theme}>
    <Header/>
    <div id="overview">
      <HomepageScreen2 /></div>
      <div id="projects">
            <HomepageScreen /></div>
            <div id="categories">
            <HomepageScreen3 /></div>
            <div id="whyshuru">
            <HomepageScreen4 /></div>
            <div id="howitworks">
            <HomepageScreen5  /></div>
            <div id="benefits"> <HomepageScreen6 setst={setst} /></div>
            <div id="roadmap"><HomepageScreen13 /></div>
            <div id="aboutus">
            <HomepageScreen9 /></div>
            <div id="press">
            <HomepageScreen10 /></div>
            
        <Navbar/>   
        </ThemeProvider> 
     
    </>
  );
}

export default Centerpage;
