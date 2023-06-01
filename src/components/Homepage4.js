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
} from "@material-ui/core";
import Header from "./Header";
import Navbar from "./Navbar";
import { IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { blueGrey } from "@mui/material/colors";
import interRegular from '../static/Inter-Regular.ttf';
import interBold from '../static/Inter-Bold.ttf';
import interExtraBold from '../static/Inter-ExtraBold.ttf';
import EastIcon from "@mui/icons-material/East";
import whyshuru from "../whyshuru.png";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
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
    top: "9.3rem",
    left: "6rem",
  },
  '@font-face': {
    fontFamily: 'Inter',
    src: `
      url(${interRegular}) format('truetype'),
      url(${interBold}) format('truetype'),
      url(${interExtraBold}) format('truetype')
    `,
    fontWeight: 'normal',
    fontStyle: 'normal',
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
function HomepageScreen4() {
  const theme = createMuiTheme({
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
  return (
    <>
    <ThemeProvider theme={theme}>
    
      <Grid
        container
        spacing={1}
        style={{
          justifyContent: "space-between",
            alignItems: "center",
            margin: "auto",
            position: "relative",
            maxWidth: "83.75rem",
        }}
      >
        <Grid
          item
          style={{
            maxWidth: "100%",
              marginTop: "4.375rem",
              padding: 0,
             
              marginBottom: 0,
          }}
        >
          <Grid
            item
            style={{ position: "relative" }}
          >
            <Typography variant="caption" style={{fontFamily:'Inter',fontWeight:500}}>WHY SHURU</Typography>
          </Grid>
          <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              style={{ marginBottom: "0rem", width: "83.75rem" }}
            >
            <Grid item style={{ maxWidth: "39.375rem" }}>
            <Typography variant="h1"  style={{ fontFamily:'Inter',fontWeight:800,color:'#292D32' }}>
                Why Shuru ?
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          style={{
            marginTop:"3.125rem",
            maxWidth: "83.75rem",
            overflowX: "hidden",
            height:'37.125rem',
            padding:0,
            marginBottom:'3.937rem'
          }}
        >
          <Card
            style={{  borderRadius: "1.5rem", display: "flex",height:"100%",boxShadow:'none',backgroundColor:'#FFFFFF' }}
          >
            <div
              style={{
                width: "44.104%",
                height: "100%",
                overflow: "hidden",
                margin: "auto",
                
                borderRadius: "1.5rem",
              }}
            >
              <img
                src={whyshuru}
                alt="card-image"
                style={{ width: "100%", height: "91.39%",borderRadius: "1.5rem",marginLeft:'1.375rem',marginTop:'1.375rem' }}
              />
            </div>
            <CardContent
              style={{
                width: "50%",
                height: "84.4%",
                padding: "3.5rem",
               
              }}
            >
              <div>
                <Typography
                  variant="h4"
                  style={{ width:'9rem',fontFamily:'Inter',fontWeight:800,color:'#292D32' }}
                  gutterBottom
                >
                   1
                </Typography>
                <Typography
                  variant="body1"
                  style={{ marginBottom: "2.2rem", marginRight: "10rem",fontFamily:'Inter',fontWeight:400,color:'#727376' }}
                  gutterBottom
                >
                  From an idea to a working prototype, Shuru helps you find your community of supporters along the way. 
                </Typography>
                <Typography
                  variant="h4"
                  style={{ width:'9rem',fontFamily:'Inter',fontWeight:800,color:'#292D32' }}
                  gutterBottom
                >
                 2
                </Typography>
                <Typography
                  variant="body1"
                  style={{ marginBottom: "2.2rem", marginRight: "10rem",fontFamily:'Inter',fontWeight:400,color:'#727376' }}
                  gutterBottom
                >
                  Investors can connect with creators when they are ready to commit funds.
                </Typography>
                <Typography
                  variant="h4"
                  style={{ width:'9rem',fontFamily:'Inter',fontWeight:800,color:'#292D32' }}
                  gutterBottom
                >
                  3
                </Typography>
                <Typography
                  variant="body1"
                  style={{ marginBottom: "2.2rem", marginRight: "10rem",fontFamily:'Inter',fontWeight:400,color:'#727376' }}
                  gutterBottom
                >
                  An open-source community that uses voting, and other tools to foster conversations, collective thinking and invest in proposals.
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
      </ThemeProvider>
    </>
  );
}

export default HomepageScreen4;
