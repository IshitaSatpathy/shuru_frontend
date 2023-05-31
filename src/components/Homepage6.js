import React, { useState,useEffect } from "react";
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
import Header from "./Header";
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';
import { makeStyles } from "@mui/styles";
import { blueGrey } from "@mui/material/colors";
import EastIcon from "@mui/icons-material/East";
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
function HomepageScreen6(props) {
  const [creators_flag,set_creators_flag]=useState(true)
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
  useEffect(()=>{
props.setst(1)
  },[creators_flag]);
  return (
    <>

    {(creators_flag==true) ? (
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
            <Typography variant="caption" style={{fontFamily:'Inter',fontWeight:500}}>BENEFITS</Typography>
          </Grid>

          <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              style={{ marginBottom: "0rem", width: "83.75rem" }}
            >
            <Grid item style={{ maxWidth: "39.375rem" }}>
            <Typography variant="h1"  style={{ fontFamily:'Inter',fontWeight:800,color:'#292D32' }}>
                Benefits for
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          style={{
            marginTop:"3.125rem",
            width: "100%",
            overflowX: "hidden",
            height:'38.125rem',
            padding:0,
            marginBottom:'3.937rem'
          }}
        >
          <Card
            style={{  borderRadius: "1.5rem", display: "flex",height:"100%",boxShadow:'none',backgroundColor:'#FFFFFF' }}
          >
            <CardContent
              style={{
                width: "100%",
                height: "100%",
                padding:0,
               
              }}
            >
              <Grid container
              style={{
                width: "100%",
                height: "100%",
                padding:0,
                flexDirection:'column'
              }}>
              <Grid
                container
                style={{
                  width: "23.125rem",
                  height: "100%",
                  
                  
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h5"
                  style={{
                    fontFamily:'Inter',
                    fontWeight: 800,
                    marginTop: "2.5rem",
                    marginLeft: "3.125rem",
                    color:"#292D32"
                  }}
                >
                  Creators
                </Typography>
                <div onClick={()=>{set_creators_flag(false)}}>
                <Typography
                  variant="h5"
                  style={{
                    fontFamily:'Inter',
                    fontWeight: 500,
                    marginTop: "2.5rem",
                    marginLeft: "3.125rem",
                    color:"#292D32"
                  }}
                >
                  Investor
                </Typography></div>

                <Divider
                  orientation="vertical"
                  style={{ marginLeft: "12.625rem", marginRight: "1rem",color:"#C5C6CC" }}
                />
                </Grid>
                <Grid
                  container
                  style={{
                    width: "58.525rem",
                    height: "100%",
                   
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="body1"
                    style={{
                      marginTop: "3.125rem",
                      marginLeft: "3.5rem",
                      width: "45.125rem",
                      fontFamily:'Inter',
                      color:'#292D32'
                    }}
                  >
                    Shuru, a community for creators and investors. On Shuru, you can showcase your ideas, build relationships, and stay up-to-date on the projects that interest you. 
                  </Typography>
                  <Divider
                    orientation="horizontal"
                    style={{
                      marginLeft: "3.5rem",
                      width:'48.0625rem',
                      marginTop: "2.5rem",
                    }}
                  />
                  <Grid
                    container
                    
                    
                    style={{ flexDirection: "row" ,display:'flex',width:"48.125rem",marginLeft: "3.5rem",marginTop:'1.25rem',flexWrap:'nowrap'}}
                  >
                    <Avatar
                      variant="circular"
                      style={{
                        position: "relative",
                       
                        backgroundColor: "blue",
                        color: "white",
                      }}
                    ><Typography variant='body1' style={{fontFamily:'Inter',fontWeight:800}}>
                      01</Typography>
                    </Avatar>
                    <Typography
                      variant="h5"
                      style={{fontFamily:'Inter',fontWeight:500,color:'#292D32',marginLeft:'1.25rem',marginTop:'.1rem',  }}
                    >
                      Stay informed and inspired through new tools, insights and projects! 
                    </Typography>
                  </Grid>
                  <Divider
                    orientation="horizontal"
                    style={{
                      marginLeft: "3.5rem",
                      width:'48.0625rem',
                      marginTop: "1.25rem",
                    }}
                  />
                  <Grid
                    container
                    
                    
                    style={{ flexDirection: "row" ,display:'flex',width:"48.125rem",marginLeft: "3.5rem",marginTop:'1.25rem',flexWrap:'nowrap'}}
                  >
                    <Avatar
                      variant="circular"
                      style={{
                        position: "relative",
                       
                        backgroundColor: "blue",
                        color: "white",
                      }}
                    ><Typography variant='body1' style={{fontFamily:'Inter',fontWeight:800}}>
                      02</Typography>
                    </Avatar>
                    <Typography
                      variant="h5"
                      style={{fontFamily:'Inter',fontWeight:500,color:'#292D32',marginLeft:'1.25rem',marginTop:'.1rem',  }}
                    >
                      Reach a wider audience and receive feedback from the community passionate about your idea. 
                    </Typography>
                  </Grid>
                  <Divider
                    orientation="horizontal"
                    style={{
                      marginLeft: "3.5rem",
                      width:'48.0625rem',
                      marginTop: "1.25rem",
                    }}
                  />
                  <Grid
                    container
                    
                    
                    style={{ flexDirection: "row" ,display:'flex',width:"48.125rem",marginLeft: "3.5rem",marginTop:'1.25rem',flexWrap:'nowrap'}}
                  >
                    <Avatar
                      variant="circular"
                      style={{
                        position: "relative",
                       
                        backgroundColor: "blue",
                        color: "white",
                      }}
                    ><Typography variant='body1' style={{fontFamily:'Inter',fontWeight:800}}>
                      03</Typography>
                    </Avatar>
                    <Typography
                      variant="h5"
                      style={{fontFamily:'Inter',fontWeight:500,color:'#292D32',marginLeft:'1.25rem',marginTop:'.1rem',  }}
                    >
                      Raise funds once your prototype has been validated by the community.
                    </Typography>
                  </Grid>
                  <Divider
                    orientation="horizontal"
                    style={{
                      marginLeft: "3.5rem",
                      width:'48.0625rem',
                      marginTop: "1.25rem",
                    }}
                  />
                 
                </Grid>
                </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid></ThemeProvider>):(     <ThemeProvider theme={theme}><Grid
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
            <Typography variant="caption" style={{fontFamily:'Inter',fontWeight:500}}>BENEFITS</Typography>
          </Grid>

          <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              style={{ marginBottom: "0rem", width: "83.75rem" }}
            >
            <Grid item style={{ maxWidth: "39.375rem" }}>
            <Typography variant="h1"  style={{ fontFamily:'Inter',fontWeight:800,color:'#292D32' }}>
                Benefits for
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          style={{
            marginTop:"3.125rem",
            width: "100%",
            overflowX: "hidden",
            height:'38.125rem',
            padding:0,
            marginBottom:'3.937rem'
          }}
        >
          <Card
            style={{  borderRadius: "1.5rem", display: "flex",height:"100%",boxShadow:'none',backgroundColor:'#FFFFFF' }}
          >
            <CardContent
              style={{
                width: "100%",
                height: "100%",
                padding:0,
               
              }}
            >
              <Grid container
              style={{
                width: "100%",
                height: "100%",
                padding:0,
                flexDirection:'column'
              }}>
              <Grid
                container
                style={{
                  width: "23.125rem",
                  height: "100%",
                  
                  
                  flexDirection: "column",
                }}
              ><div onClick={()=>{set_creators_flag(true)}}>
                <Typography
                  variant="h5"
                  style={{
                    fontFamily:'Inter',
                    fontWeight: 500,
                    marginTop: "2.5rem",
                    marginLeft: "3.125rem",
                    color:"#292D32"
                  }}
                >
                  Creators
                </Typography></div>
                
                <Typography
                  variant="h5"
                  style={{
                    fontFamily:'Inter',
                    fontWeight: 800,
                    marginTop: "2.5rem",
                    marginLeft: "3.125rem",
                    color:"#292D32"
                  }}
                >
                  Investor
                </Typography>

                <Divider
                  orientation="vertical"
                  style={{ marginLeft: "12.625rem", marginRight: "1rem",color:"#C5C6CC" }}
                />
                </Grid>
                <Grid
                  container
                  style={{
                    width: "58.525rem",
                    height: "100%",
                   
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="body1"
                    style={{
                      marginTop: "3.125rem",
                      marginLeft: "3.5rem",
                      width: "45.125rem",
                      fontFamily:'Inter',
                      color:'#292D32'
                    }}
                  >
                    Shuru, a community for creators and investors. On Shuru, you can showcase your ideas, build relationships, and stay up-to-date on the projects that interest you. 
                  </Typography>
                  <Divider
                    orientation="horizontal"
                    style={{
                      marginLeft: "3.5rem",
                      width:'48.0625rem',
                      marginTop: "2.5rem",
                    }}
                  />
                  <Grid
                    container
                    
                    
                    style={{ flexDirection: "row" ,display:'flex',width:"48.125rem",marginLeft: "3.5rem",marginTop:'1.25rem',flexWrap:'nowrap'}}
                  >
                    <Avatar
                      variant="circular"
                      style={{
                        position: "relative",
                       
                        backgroundColor: "blue",
                        color: "white",
                      }}
                    ><Typography variant='body1' style={{fontFamily:'Inter',fontWeight:800}}>
                      01</Typography>
                    </Avatar>
                    <Typography
                      variant="h5"
                      style={{fontFamily:'Inter',fontWeight:500,color:'#292D32',marginLeft:'1.25rem',marginTop:'.1rem',  }}
                    >
                      Find the next idea you’re passionate about and save them.
                    </Typography>
                  </Grid>
                  <Divider
                    orientation="horizontal"
                    style={{
                      marginLeft: "3.5rem",
                      width:'48.0625rem',
                      marginTop: "1.25rem",
                    }}
                  />
                  <Grid
                    container
                    
                    
                    style={{ flexDirection: "row" ,display:'flex',width:"48.125rem",marginLeft: "3.5rem",marginTop:'1.25rem',flexWrap:'nowrap'}}
                  >
                    <Avatar
                      variant="circular"
                      style={{
                        position: "relative",
                       
                        backgroundColor: "blue",
                        color: "white",
                      }}
                    ><Typography variant='body1' style={{fontFamily:'Inter',fontWeight:800}}>
                      02</Typography>
                    </Avatar>
                    <Typography
                      variant="h5"
                      style={{fontFamily:'Inter',fontWeight:500,color:'#292D32',marginLeft:'1.25rem',marginTop:'.1rem',  }}
                    >
                      Receive updates from creators, and commit funds in stages.. 
                    </Typography>
                  </Grid>
                  <Divider
                    orientation="horizontal"
                    style={{
                      marginLeft: "3.5rem",
                      width:'48.0625rem',
                      marginTop: "1.25rem",
                    }}
                  />
                  <Grid
                    container
                    
                    
                    style={{ flexDirection: "row" ,display:'flex',width:"48.125rem",marginLeft: "3.5rem",marginTop:'1.25rem',flexWrap:'nowrap'}}
                  >
                    <Avatar
                      variant="circular"
                      style={{
                        position: "relative",
                       
                        backgroundColor: "blue",
                        color: "white",
                      }}
                    ><Typography variant='body1' style={{fontFamily:'Inter',fontWeight:800}}>
                      03</Typography>
                    </Avatar>
                    <Typography
                      variant="h5"
                      style={{fontFamily:'Inter',fontWeight:500,color:'#292D32',marginLeft:'1.25rem',marginTop:'.1rem',  }}
                    >
                      Commit further funds only when you feel confident in a creator’s track record. 
                    </Typography>
                  </Grid>
                  <Divider
                    orientation="horizontal"
                    style={{
                      marginLeft: "3.5rem",
                      width:'48.0625rem',
                      marginTop: "1.25rem",
                    }}
                  />
                 
                </Grid>
                </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid></ThemeProvider>)}
   
      
    </>
  );
}

export default HomepageScreen6;
