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
  Box,
} from "@material-ui/core";
import badal1 from "../images/badal1.png";
import badal2 from "../images/badal2.png";
import badal3 from "../images/badal3.png";
import badal4 from "../images/badal4.png";
import badal5 from "../images/badal5.png";
import badal6 from "../images/badal6.png";
import Header from "./Header";
import Navbar from "./Navbar";
import { IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { blueGrey } from "@mui/material/colors";
import EastIcon from "@mui/icons-material/East";
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
  box:{
    display:"flex",
    flexDirection:"row",
    
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
function HomepageScreen10() {
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
            <Grid item style={{ position: "relative" }}>
              <Typography
                variant="body"
                style={{ fontFamily: "Inter", fontWeight: 400 }}
              >
                Explore
              </Typography>
            </Grid>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              style={{ marginBottom: "0rem", width: "83.75rem", padding: 0 }}
            >
              <Grid item style={{ maxWidth: "39.375rem", padding: 0 }}>
                <Typography
                  variant="h1"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 800,
                    color: "#292D32",
                  }}
                >
                  Your bank of ideas.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item xs={2} sm={4} md={4}>
                <img src={badal6} style={{width:"26rem",height:"15rem", display:"flex",position:"relative",left:"3.75rem",top:"1.875rem"}}/>
                <Typography variant="body1" style={{display:"flex", position:"relative", bottom:"7.5rem", maxWidth:"20rem", left:"7rem", color:"white"}}>
                  Pollinate, a startup using tiny insect-bots that replicate natural pollination patterns .
                </Typography>
              </Grid>

              <Grid item xs={2} sm={4} md={4}>
                <img src={badal1} style={{width:"22rem",height:"15rem", display:"flex", position:"relative",bottom:"3rem",left:"6rem"}}/>
                <Typography variant="body1" style={{display:"flex", position:"relative", bottom:"12rem", maxWidth:"15rem", left:"11rem", color:"white"}}>
                ALina îs an AI designer who offers advice and ideas sustainable practices.
                </Typography>
              </Grid>

              <Grid item xs={2} sm={4} md={4}>
                <img src={badal5} style={{width:"23rem",height:"15rem",diplay:"flex",position:"relative",left:"0.938rem",top:"4rem"}}/>
                <Typography variant="body1" style={{display:"flex", position:"relative", bottom:"6rem", maxWidth:"10rem", left:"7.5rem", color:"white"}}>
                An AI trained on the U.S. Constitution of rights. What’s your AI.
                </Typography>
              </Grid>

              <Grid item xs={2} sm={4} md={4}>
                <img src={badal4} style={{width:"26rem",height:"15rem", display:"flex", position:"relative",top:"2rem",left:"3rem"}}/>
                <Typography variant="body1" style={{display:"flex", position:"relative", bottom:"8.25rem", maxWidth:"15rem", left:"9.5rem"}}>
                Solein, a protein-rich food spun out of thin air using a fermentation process.
                </Typography>
              </Grid>

              <Grid item xs={3} sm={4} md={4}>
                <img src={badal2} style={{width:"28rem",height:"20rem", display:"flex", position:"relative",bottom:"8rem",left:"0.5rem"}}/>

                <Typography variant="body1" style={{display:"flex", position:"relative", bottom:"20rem", maxWidth:"20rem", left:"6rem",color:"white"}}>
                Worldcoin, a global currency for income.
                </Typography>
              </Grid>
              
              <Grid item xs={1} sm={4} md={4}>
                <img src={badal3} style={{width:"30rem",height:"15rem", display:"flex", position:"relative", top:"1rem", right:"0.5rem"}}/>

                <Typography variant="body1" style={{display:"flex", position:"relative", bottom:"7rem", maxWidth:"12rem", left:"8rem",color:"black"}}>
                “Sports League” Don’t bet, make an investment, A stock market, for sports.
                </Typography>
              </Grid>
          </Grid>




          {/*<Grid
            container
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              marginTop: "3.125rem",
              justifyContent: "space-between",
              marginBottom: "4.375rem",
            }}
          >
            <Grid
              item
              style={{
                width: "48.88059701%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Card
                style={{
                  flexGrow: 1,
                  width: "100%",
                  borderRadius: "1.5rem",
                  backgroundColor: "white",
                  boxShadow: "none",
                }}
              >
                <CardContent style={{ width: "100%", padding: 0 }}>
                  <Grid container style={{ height: "19.125rem", padding: 0 }}>
                    <img
                      src="https://s3-alpha-sig.figma.com/img/31c6/bce3/2e34dd1da07c41044c876bd247993be7?Expires=1685923200&Signature=IGkCinF7mQUGT8kiamulJKNmnK5iVHS4DCFaq-WSQF8Nn13nE6Wrrhu1fJKnIyOjAl1QEPAqfk3kxLF~cSKUymA89ZqSQ~AK9Y3pSeTPZiImCP75LgjciL~hqdSf~E45rYNq0K6snmPsCB~ILf0buZpSCDqaq9f0Ue9YPaHek5Xpj2XwH-vKWECirbs0aI2SFP~zwedbXPAgWpGpxm8s~Rv7twmIsUxBJHvHrUwsWbgPpBYhWTlYZDsBDN09-g6K2386zLyTHCmsCrJp9LzKAw5U-ewO7TLJCgqpsgHdwMk7QYuqfIEN1-Tujd-3TScuHEAQoI7Quigkz9J9tw-19g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Grid>
                  <Typography
                    variant="h5"
                    style={{
                      marginTop: "1.875rem",
                      fontFamily: "Inter",
                      color: "#292D32",
                      fontWeight: 800,
                      maxWidth: "90.38167%",
                      marginLeft: "1.875rem",
                    }}
                  >
                    Seven Game-Changing Creative Projects You May Not Know
                    Launched on Shuru
                  </Typography>
                  <div
                    style={{
                      marginTop: "1.5rem",
                      marginLeft: "1.875rem",
                      maxWidth: "88.3875%",
                    }}
                  >
                    <Typography
                      variant="body1"
                      style={{
                        maxWidth: "100%",
                        fontFamily: "Inter",
                        fontWeight: 400,
                        color: "#292D32",
                      }}
                    >
                      Backers have pledged more than $7 billion to creative
                      projects on Shuru. Here are seven projects that went on to
                      become...
                    </Typography>
                  </div>
                  <Grid
                    container
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: "3.75rem",
                    }}
                  >
                    <Typography
                      variant="body1"
                      style={{
                        marginLeft: "1.875rem",
                        paddingTop: ".35rem",
                        fontWeight: 800,
                        color: "black",
                        fontFamily: "Inter",
                      }}
                    >
                      Read more
                    </Typography>

                    <IconButton
                      aria-label="east"
                      style={{
                        marginLeft: ".5rem",
                        padding: 0,
                        marginBottom: "1.875rem",
                      }}
                    >
                      <div className={classes.circle}>
                        <EastIcon color="background: gray;" />
                      </div>
                    </IconButton>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            <Grid
              item
              style={{
                width: "48.88059701%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Card
                style={{
                  flexGrow: 1,
                  width: "100%",
                  borderRadius: "1.5rem",
                  backgroundColor: "white",
                  boxShadow: "none",
                }}
              >
                <CardContent style={{ width: "100%", padding: 0 }}>
                  <Grid container style={{ height: "19.125rem", padding: 0 }}>
                    <img
                      src="https://s3-alpha-sig.figma.com/img/dc55/e79f/73be1715d3d5942c49f4ce40271b2773?Expires=1685923200&Signature=eBDkkDwm5fhN8ex2saj8yrjOG0xXFhoT6vrPvtdbi1Emx91j9l0nA7gE0HyejmbBGbr9BjkM~MWGACrK28jMElDgPtqshSazp2mlpUzlUCb5MvHhKFeNiRw-o7Lb-ImsurvwnR0fqj4WuYDq1aYEmXPIvgOVhRTy6ZuXY0LRu36~g2Ki5L7mv~DrDL8J68ZyWuTB4WV0L2QeRbVV2xXF1iTMdvLBnWBjBp80w-8YRGOTHqOM8JJaVp~ttnZF4meuvs-PyRE55s-tsUmCvHlDZOWWu2NsQBWZUMXG6R6rQgWmxG-9GKWZeTSfWevCOCke5ndu1hQQfc0ioISEDX7Syw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Grid>
                  <Typography
                    variant="h5"
                    style={{
                      marginTop: "1.875rem",
                      fontFamily: "Inter",
                      color: "#292D32",
                      fontWeight: 800,
                      maxWidth: "90.38167%",
                      marginLeft: "1.875rem",
                    }}
                  >
                    Seven Game-Changing Creative Projects You May Not Know
                    Launched on Shuru
                  </Typography>
                  <div
                    style={{
                      marginTop: "1.5rem",
                      marginLeft: "1.875rem",
                      maxWidth: "88.3875%",
                    }}
                  >
                    <Typography
                      variant="body1"
                      style={{
                        maxWidth: "100%",
                        fontFamily: "Inter",
                        fontWeight: 400,
                        color: "#292D32",
                      }}
                    >
                      Backers have pledged more than $7 billion to creative
                      projects on Shuru. Here are seven projects that went on to
                      become...
                    </Typography>
                  </div>
                  <Grid
                    container
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: "3.75rem",
                    }}
                  >
                    <Typography
                      variant="body1"
                      style={{
                        marginLeft: "1.875rem",
                        paddingTop: ".35rem",
                        fontWeight: 800,
                        color: "black",
                        fontFamily: "Inter",
                      }}
                    >
                      Read more
                    </Typography>

                    <IconButton
                      aria-label="east"
                      style={{
                        marginLeft: ".5rem",
                        padding: 0,
                        marginBottom: "1.875rem",
                      }}
                    >
                      <div className={classes.circle}>
                        <EastIcon color="background: gray;" />
                      </div>
                    </IconButton>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>*/}
        </Grid>
  
      </ThemeProvider>
    </>
  );
}

export default HomepageScreen10;
