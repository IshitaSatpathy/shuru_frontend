import React from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import Header from "./Header";
import Navbar from "./Navbar";
import { IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { blueGrey } from "@mui/material/colors";
import EastIcon from "@mui/icons-material/East";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Bottomheaderscreen from "./bottomheader";
import interRegular from '../static/Inter-Regular.ttf';
import interBold from '../static/Inter-Bold.ttf';
import interExtraBold from '../static/Inter-ExtraBold.ttf';
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
  notchedOutline: {
    borderColor: "#EDEEF1",
  },
  semicircleleft1: {
    width: "13.575rem",
    height: "10.5875rem",
    borderTopRightRadius: "100% 100%",
    backgroundColor: "#0124F1",
    position: "relative",
   
  },
  semicircleleft2: {
    width:"13.575rem",
    height: "10.5875rem",
    borderBottomRightRadius: "100% 100%",
    backgroundColor: "#0124F1",
    position: "relative",
    
  },
  semicircleright1: {
    width: "13.575rem",
    height: "10.5875rem",
    borderTopLeftRadius: "100% 100%",
    backgroundColor: "#0124F1",
    position: "relative",
    marginLeft:'3.77rem'
    
  },
  semicircleright2: {
    width: "13.575rem",
    height: "10.5875rem",
    borderBottomLeftRadius: "100% 100%",
    backgroundColor: "#0124F1",
    position: "relative",
    marginLeft:'3.77rem'
    
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
function HomepageScreen11() {
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
            maxWidth: "100%",
          }}
        >
        <Grid
          container
          style={{
            width: "100%",
            flex: "display",
            flexDirection: "row",
            justifyContent:'space-between'
          }}
        >
          <Grid
            item
            style={{ width: "17.375rem", marginTop: "13.9125rem" }}
          >
            <div className={classes.semicircleleft1}></div>
            <div className={classes.semicircleleft2}></div>
          </Grid>
          <Grid
            container
            spacing={1}
            style={{
              
              position: "relative",
              width: "43.472%",marginTop:"12.325rem"
            }}
          >
            <Grid
              item
              style={{
                width: "100%",
                
               padding:0,

                marginBottom: 0,
              }}
            >
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                style={{ marginBottom: "0rem" }}
              >
                <Grid
                  item
                  style={{
                   
                    width: "100%",
                   
                  }}
                >
                  <Typography
                    variant="h1"
                    style={{
                   
                      fontWeight:800,
                      fontFamily:'Inter',
                      textAlign: "center",
                    }}
                  >
                    Subscribe our notification, news & blogs
                  </Typography>
                </Grid>
                <Grid
                  container
                  
                  alignItems="center"
                  style={{
                   marginTop:'4.375rem',
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Grid item style={{ width: "29rem",  }}>
                    <TextField
                      id="email"
                      name="email"
                      label="Enter your email"
                      variant="outlined"
                      fullWidth
                      required
                      InputProps={{
                        style: {
                          backgroundColor: "white",
                          borderRadius: ".75rem",
                          borderColor: "#EDEEF1",
                          outline: "none",
                        },
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    style={{
                      width: "29rem",
                      
                      marginTop: "2.5rem",
                      marginBottom:'10rem'
                    }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                     
                      style={{
                        backgroundColor: "#292D32",
                        width:"100%",
                       
                        borderRadius: ".75rem",
                      }}
                    ><Typography variant="body1" style={{fontFamily:'Inter',fontWeight:800,color:'white',padding:'.3rem'}}>
                      Submit</Typography>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            style={{ width: "17.375rem", marginTop: "13.9125rem", }}
          >
            <div className={classes.semicircleright1}></div>
            <div className={classes.semicircleright2}></div>
          </Grid>
        </Grid>
      </Grid>
      </ThemeProvider>
    </>
  );
}

export default HomepageScreen11;
