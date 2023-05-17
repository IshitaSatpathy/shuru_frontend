import React from "react";
import {
  AppBar,
  Button,
  Box,
  Card,
  CardContent,
  Grid,
  Hidden,
  Toolbar,
  Typography,
  Divider,
} from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { blueGrey } from "@mui/material/colors";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const theme = createMuiTheme({
  typography: {
    caption: {
      fontSize: "calc(12.80/1024*100vh)",
    },
    h5: {
      fontSize: "calc(25/1024*100vh)",
    },
    h1: {
      fontSize: "calc(61.04/1024*100vh)",
    },
    h2: {
      fontSize: "calc(48.83/1024*100vh)",
    },
    h3: {
      fontSize: "calc(39.06/1024*100vh)",
    },
    h4: {
      fontSize: "calc(31.25/1024*100vh)",
    },
    body1: {
      fontSize: "calc(16/1024*100vh)",
    },
  },
  spacing: (factor) => `${0.8 * factor}rem`,
});

function Bottomheaderscreen() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="fixed"
        color="default"
        elevation={0}
        style={{ top: "auto", bottom: 0 }}
      >
        <Grid
          container
          style={{
            maxWidth: "100%",
            maxHeight: "8.8vh",
            display: "flex",
            flexDirection: "row",
            height: "8.59375vh",
            bottom: 0,
            backgroundColor: "white",
          }}
        >
          <Grid
            container
            style={{
              width: "9.861vw",
              height: "5.078vh",
              marginLeft: "",
              display: "flex",
              flexDirection: "column",
              marginLeft: "3.47vw",
              marginTop: "1.5vh",
            }}
          >
            <Grid
              item
              style={{
                width: "100%",
                height: "3.4179vh",
               
              }}
            >
              <Typography variant="h5" color="textPrimary" style={{fontWeight:"bold"}}>
                US$20,244
              </Typography>
            </Grid>
            <Grid
              item
              style={{ width: "60%", height: "1.2695vh" }}
            >
              <Typography variant="caption" color="primary">
                22 Backers
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            style={{
              width: "37.5vw",
              height: "3.5vh",
              marginLeft: "13.95vw",
              display: "flex",
              flexDirection: "column",
              marginTop: "2.832vh",
            }}
          >
            <Grid
              container
              style={{
                width: "100%",
                height:
                  "1.269vh",
                display:
                  "flex",
                flexDirection:
                  "column",
                marginBottom:
                  "1.4vh",
              }}
            >
              <Typography
                variant="caption"
                color="textPrimary"
                style={{ marginRight:
                  '24.35vw',fontWeight:'bold' }}
              >
                70% completed
              </Typography>
              <Typography variant="caption" color="textPrimary" style={{}}>
                25 days to go
              </Typography>
            </Grid>
            <Grid
              container
              style={{
                width:
                  '100%',
                height:
                  '.487vh',
                display:
                  'flex',
                flexDirection:
                  'column',
                marginTop:
                  '.2vh',
              }}
            >
              <Divider
                orientation="horizontal"
                style={{
                  width:
                    '81.296%',
                  height:
                    '.487vh',
                  backgroundColor:
                    '#292D32',
                }}
              />
              <Divider
                orientation="horizontal"
                style={{
                  width:
                    '18.70%',
                  height:
                    '.487vh',
                  backgroundColor:
                    '#EDEEF1',
                }}
              />
            </Grid>
          </Grid>

          
            <Button  style={{width:'9.652vw',height:'4.685vh',marginLeft:'9.513vw',marginTop:'1.7vh',marginRight:'1.111vw',backgroundColor:"#E2E4EA",borderRadius:'0.4rem'}}>
                <Grid container style={{width:'100%',height:'100%',display:'flex',flexDirection:'row'}}>
              <FavoriteBorderIcon style={{marginRight:'.69vw',marginLeft:'1.11vw',width:'1.388vw',height:'1.95vh'}} />
              <Typography variant='body1'>Bookmark</Typography>
              </Grid>
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{ borderRadius:'.4rem',marginTop:'1.7vh',width:'11.45833vw',height:'4.685vh' }}
            >
               <Typography variant='body1'>Back this project</Typography>
            </Button>
          
        </Grid>
      </AppBar>
    </ThemeProvider>
  );
}
export default Bottomheaderscreen;
