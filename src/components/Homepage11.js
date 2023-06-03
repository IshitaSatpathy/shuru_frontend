import React,{useState} from "react";
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
  TextField,
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
import { styled } from "@mui/system";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import ThankYou from "./ThankYou";


const StyledTextField = styled(TextField,{
  name:"StyledTextField"
})({
  width:300,
  "& .MuiInputBase-root":{
    height:100
  }
})
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
  textField: {
    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-input": {
      backgroundColor: "#0022F2",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      backgroundColor: "#0022F2",
    },
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

  const [isSubmitted, setIsSubmitted] = React.useState(false);

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
              
              padding: 0,
             
              marginBottom: 0,
              marginTop:"6.25rem"
          }}
        >
          <Grid
            item
            style={{ position: "relative" }}
          >
            <Typography variant="caption" style={{fontFamily:'Inter',fontWeight:500}}>CONTACT US</Typography>
          </Grid>
          <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              style={{ marginBottom: "0rem", width: "83.75rem" }}
            >
            <Grid item style={{ maxWidth: "39.375rem" }}>
            <Typography variant="h1"  style={{ fontFamily:'Inter',fontWeight:800,color:'#292D32' }}>
                Contact us
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
          {isSubmitted ? (<ThankYou/>) : (
          <Card
            style={{  borderRadius: "1.5rem", display: "flex",height:"80%",width:"83rem",boxShadow:'none',backgroundColor:'#FFFFFF' }}
          >

            <Grid
              container
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Grid
                item
                xs={12}
                sm={6}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CardContent>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "450px",
                      justifyContent: "space-between",
                      paddingLeft: "10px",
                    }}
                  >
                    <div style={{ marginBottom: "15px" }}>
                      <Typography component="div" style={{ fontSize: "18px", marginBottom:"5px", marginLeft:"5px"}}>
                        First Name:
                      </Typography>
                      <TextField
                        className={classes.textField}
                        id="outlined-basic"
                        variant="outlined"
                        style={{ width: "100%", backgroundColor:blueGrey[50],borderRadius:"10px" }}
                        InputProps={{
                          style: {
                            borderRadius: "10px",
                          },
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: "15px" }}>
                      <Typography style={{ fontSize: "18px", marginBottom:"5px" , marginLeft:"5px"}} component="div">
                        Last Name:
                      </Typography>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        style={{ width: "100%", backgroundColor:blueGrey[50],borderRadius:"10px" }}
                        InputProps={{
                          style: {
                            borderRadius: "10px",
                          },
                        }}
                      />
                    </div>
                    <div>
                      <Typography style={{ fontSize: "18px" , marginBottom:"5px",marginLeft:"5px"}} component="div">
                        Email:
                      </Typography>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        style={{ width: "100%", backgroundColor:blueGrey[50],borderRadius:"10px"}}
                        InputProps={{
                          style: {
                            borderRadius: "10px",
                          },
                        }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                style={{
                  display: "flex",
                }}
              >
                <CardContent style={{ paddingBottom: "0" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "470px",
                      justifyContent: "space-between",
                      marginTop:"20px"
                    }}
                  >
                    <Typography style={{ fontSize: "18px", marginBottom:"5px" }} component="div">
                      Your Message :
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      multiline
                      rows={14}
                      style={{
                        backgroundColor:blueGrey[50]
                      }}
                    />
                  </div>
                  <Button
                    variant="contained"
                    onClick={() => setIsSubmitted(true)}
                    style={{
                      backgroundColor: "#D3E938",
                      color: "white",
                      borderRadius: "5px",
                      float: "right",
                      width:"120px",
                      marginTop: "10px",
                      boxShadow:"none"
                    }}
                  >
                    Submit
                  </Button>
                </CardContent>
              </Grid>
            </Grid>
            {/*<div style={{display:"flex"}}>
                  <div
                    style={{
                      width: "40rem",
                      height: "100%",
                      overflow: "hidden",
                      marginLeft:"2rem",
                      paddingBottom:"0px",
                      display:"flex",
                      flexDirection:"column",
                      justifyContent:"center",
                      alignItems:"left",
                      borderRadius: "1.5rem",
                    }}
                  >

                            <div style={{marginLeft:"2rem",width:"35rem",display:"flex",flexDirection:"column",marginTop:"-30px"}}>
                              <Typography variant="body">
                                First Name:
                              </Typography>
                              <TextField id="outlined-basic" label="" variant="outlined" fullWidth="true" margin="normal" style={{backgroundColor:blueGrey[50]}}/>
                            </div>

                            <div style={{marginLeft:"2rem",width:"35rem",display:"flex",flexDirection:"column"}}>
                              <Typography variant="body">
                                First Name:
                              </Typography>
                              <TextField id="outlined-basic" label="" variant="outlined" fullWidth="true" margin="normal" style={{backgroundColor:blueGrey[50]}}/>
                            </div>

                            <div style={{marginLeft:"2rem",width:"35rem",display:"flex",flexDirection:"column"}}>
                              <Typography variant="body">
                                First Name:
                              </Typography>
                              <TextField id="outlined-basic" label="" variant="outlined" fullWidth="true" margin="normal" style={{backgroundColor:blueGrey[50]}}/>
                            </div>
                  </div>

                  <div style={{padding:"0px",marginTop:"10px",width:"36rem",height:"20rem",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                  
                      <div style={{width:"100%"}}>
                        <Typography variant="body1" style={{fontWeight:500,marginBottom:"10px",marginTop:"10px"}}>
                          Your Message:
                        </Typography>
                        <TextField rows={15} multiline id="outlined-basic" label="" variant="outlined" fullWidth style={{marginRight:"10px",backgroundColor:blueGrey[50]}}>
                        </TextField>
                      </div>
            

                      <div style={{
                        display:"flex",
                        justifyContent:"flex-end",
                      }}>
                        <Button style={{marginTop:"10px",width:"10rem",backgroundColor:"#D3E938"}}>
                          Hello
                        </Button>
                      </div>
                  </div>

                    </div>*/}
          </Card>
          )}
        </Grid>
      </Grid>
      
      </ThemeProvider>
    </>
  );
}

export default HomepageScreen11;
