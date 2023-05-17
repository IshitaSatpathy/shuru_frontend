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
import Header from "./Header";
import Navbar from "./Navbar";
import { IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { blueGrey } from "@mui/material/colors";
import EastIcon from "@mui/icons-material/East";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
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
function HomepageScreen7() {
  const classes = useStyles();
  return (
    <>
      <Header style={{ zIndex: 1 }} />
      <Grid 
      container
      spacing ={2}
      style={{
        height: "calc(100vh - 8rem)",
          position: "relative",
          width: "calc(100%)",
          flexDirection:'column',
      }}>
      <Grid
        container
        spacing={1}
        style={{
          height: "100%",
          position: "relative",
          width: "50%",
        }}
      >
        <Grid
          item
          style={{
            width: "100%",
            marginTop: "2rem",
            height: "27%",
            overflowX: "hidden",
            marginBottom: 0,
          }}
        >
          <Grid
            item
            style={{ position: "relative", left: "3.3rem", width: "100%" }}
          >
            <Typography variant="body1">Trust & Safety</Typography>
          </Grid>

          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            style={{ marginBottom: "0rem" }}
          >
            <Grid item style={{ overflowX: "hidden", width: "100%" }}>
              <Typography
                variant="h2"
                style={{ marginLeft: "3.3rem", fontWeight: "bold" }}
              >
                Trust & Safety
              </Typography>
              <Typography variant="body1" style={{ marginLeft: "3.3rem",marginTop:'1rem' }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 

Lorem Ipsum has been the industry's standard dummy text
            </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          style={{
            height: "63%",
            width: "100%",
            overflowX: "hidden",
            marginLeft: "3.2rem",
            marginRight: "3rem",
          }}
        >
          <Card
            style={{
              height: "100%",
              borderRadius: "2rem",
              display: "flex",
              backgroundColor: "white",
            }}
          >
            <CardContent
              style={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(https://s3-alpha-sig.figma.com/img/e955/bb4f/7e2764b10d8ee3b6845b61097adf2d85?Expires=1684713600&Signature=lvFg7oH2lsNGLCgi8jBG22gv5p-1m6xwmT~zDSUa~0eUqB~VofRyE~Ph2h3ue4Syz1JhkU5o3jO8p2gVJXki6TighW0XZ9eynqgqLBL2IPT84Ul~OC8~hyxrB9D~VfzQSd592R3p3RroSacoV5-yPyfb5SCW-Rx-itfZebHfpRcfmsumkdRhQfSRssVhHvimfJMt3HA9xNu239ETpkpfm8i4mEllbEEBJoAbQDZHoOOEZiGNniuvkKXWXMwzTyzptut4YrSR6Mb-bAmE~OgGXX~sh-S1gN0GYDVlCEygHvWAIrTStNXCgKPhfVHr-m03aKA5s0jPeZ1du-~ylvCzzQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
              }}
            >
              
            </CardContent>
          </Card>
        </Grid>

      </Grid>
      <Grid container style={{width:'47%',height:'90%',marginTop:'3rem',marginRight:'2rem'}}>
      <Card
            style={{
              height: "100%",
              width:'100%',
              borderRadius: "2rem",
              display: "flex",
              backgroundColor: "white",
            }}
          >
            <CardContent
              style={{
                width: "100%",
                height: "100%",
                backgroundColor:'white',
              }}
            >
              <Typography variant='h2' style={{margin:'2rem',marginTop:'3rem',fontWeight:'bold'}}>Most promising platform to raise funds</Typography>
              <Avatar style={{margin:'auto' }}src="https://s3-alpha-sig.figma.com/img/2953/3680/13d3da9f09561305abd64a0cd7402524?Expires=1684713600&Signature=miA1FwqnRtp1OfwsKm10xbYxGCPIAd1j3gnh4Wqc0jTUnQp5pXgtyCbHMgH0aDRIJNVLeuCXHOT2HUtZc1Ng0CspnuSX3LbDO0frQuxOVXv74YM-wmYwSoIyrkKbAhJHpNZfHL2q-Odbwnk8o-JXrHb2wjt7iHDZ~8k8whNan-BD4ZV~hf~NJkF2uZCr~d8IDe2Xzi12uRufnxmbYlWE5WuLTTMTm44FTt97fjR2XzZfpoH6izYm9hELelwCre-MBYLnzw2LlTW3ubZqzRYiM9t2eunog7BYtLrWxjPaVvgBQ-0UNtIDqyCHCfQ7rf8YELkpW1K7O~HfJaBz-vrNgQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
              <Typography variant='h5' style={{margin:'auto',marginTop:'1rem',marginBottom:'3rem',marginLeft:'19rem' ,fontWeight:'bold'}}>Brooklyn Simmons</Typography>
              <Typography variant='body' style={{position:'relative',marginTop:'6rem',marginLeft:'4rem',marginRight:'3rem',fontFamily:'Inter',fontStyle:'regular',fontSize:'25px',color:'#727376',lineHeight:'2rem'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Typography>
              <Avatar
                      variant="circular"
                      style={{
                        position: "relative",
                        marginTop: "10rem",
                        marginLeft: "23rem",
                        backgroundColor: "white",
                        border: '1px solid gray',
                        color: "white",
                      }}
                    >
                      <ChevronLeftIcon style={{color:'gray'}}/>
                    </Avatar>
                    <Avatar
                      variant="circular"
                      style={{
                        position: "relative",
                        marginTop: "10rem",
                        marginRight: "6rem",
                        backgroundColor: "gray",
                        
                       
                      }}
                    >
                      <ChevronLeftIcon style={{color:'gray'}}/>
                    </Avatar>
            </CardContent>
          </Card>
      </Grid>
      </Grid>
      <Navbar />
    </>
  );
}

export default HomepageScreen7;
