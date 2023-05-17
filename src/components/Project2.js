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
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { blueGrey } from "@mui/material/colors";
import EastIcon from "@mui/icons-material/East";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Bottomheaderscreen from "./bottomheader";
import Navbarr from "./navbarr";
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

function ProjectScreen2() {
  const classes = useStyles();
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
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header style={{ zIndex: 1 }} />
        <Grid
          container
          style={{
            height: "72.554vh",
            position: "relative",
            width: "calc(100%)",
            maxWidth:'calc(1340/1440*100vw)',
            flexDirection: "column",
          }}
        >
          <Grid
            container
            style={{
              height: "100%",
              position: "relative",
              width: "35.2083vw",
            }}
          >
            <Grid
              item
              style={{
                width: "100%",
                marginTop: "6.83559vh",
                
              }}
            >
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                width="100%"
              >
                <Grid item style={{ width: "35.2083vw" }}>
                  <Typography
                    variant="h1"
                    style={{ marginLeft: "3.4722vw", fontWeight: "bold" }}
                  >
                    Overview
                  </Typography>
                  <article
                    style={{
                      marginLeft: "3.4722vw",
                      marginTop: "5.46875vh",
                      marginRight: "1rem",
                      width: "86%",
                    }}
                  >
                    <Typography
                      variant="h4"
                      style={{
                        fontFamily: "Inter",
                        fontStyle: "regular",
                        fontWeight: 900,
                      }}
                    >
                      Reasons to invest
                    </Typography>
                  </article>
                  <Grid
                    container
                    style={{
                      marginLeft: "3.4722vw",
                      marginTop: "3.125vh",
                      flexDirection: "row",
                      marginRight: "3.2638vw",
                      display: "flex",
                      flexWrap: "nowrap",
                    }}
                  >
                    <Grid
                      item
                      style={{
                        marginRight: "calc(19/1440*100vw)",
                        width: "2.6vw",
                        height: "4.5vh",
                      }}
                    >
                      <Avatar
                        style={{
                          backgroundColor: "#D4D9F8",
                          border: ".2rem solid white",
                        }}
                      >
                        <Typography variant="h5" style={{ color: "#0124F1" }}>
                          1
                        </Typography>
                      </Avatar>
                    </Grid>
                    <Grid style={{ width: "70%" }}>
                      <Typography variant="body1">
                        Our construction products prove product-market fit
                        through our <b>$100M+</b> residential development
                        pipeline and real estate funds.
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    style={{
                      marginLeft: "3.4722vw",
                      marginTop: "4.6875vh",
                      flexDirection: "row",
                      marginRight: "3.2638vw",
                      display: "flex",
                      flexWrap: "nowrap",
                    }}
                  >
                    <Grid
                      item
                      style={{
                        marginRight: "calc(19/1440*100vw)",
                        width: "2.6vw",
                        height: "4.5vh",
                      }}
                    >
                      <Avatar
                        style={{
                          backgroundColor: "#D4D9F8",
                          border: ".2rem solid white",
                        }}
                      >
                        <Typography variant="h5" style={{ color: "#0124F1" }}>
                          2
                        </Typography>
                      </Avatar>
                    </Grid>
                    <Grid style={{ width: "70%" }}>
                      <Typography variant="body1">
                        For over a decade, we’ve built sustainability into the
                        core of our products and projects for people + planet.
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    style={{
                      marginLeft: "3.4722vw",
                      marginTop: "4.6875vh",
                      flexDirection: "row",
                      marginRight: "3.2638vw",
                      display: "flex",
                      flexWrap: "nowrap",
                    }}
                  >
                    <Grid
                      item
                      style={{
                        marginRight: "calc(19/1440*100vw)",
                        width: "2.6vw",
                        height: "4.5vh",
                      }}
                    >
                      <Avatar
                        style={{
                          backgroundColor: "#D4D9F8",
                          border: ".2rem solid white",
                        }}
                      >
                        <Typography variant="h5" style={{ color: "#0124F1" }}>
                          3
                        </Typography>
                      </Avatar>
                    </Grid>
                    <Grid style={{ width: "70%" }}>
                      <Typography variant="body1">
                        We have already raised <b>$9.6M in funding</b> to prove
                        and scale our products and have <b>$2.8M available</b>{" "}
                        in this funding round.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            style={{
              width: "61.319vw",
              height: "67.1875vh",
              marginTop: "4.8828vh",
              marginRight: "3.4722vw",
            }}
          >
            <Card
              style={{
                height: "67.1875vh",
                width: "61.319vw",
                borderRadius: "2rem",
                display: "flex",
                backgroundColor: "white",
              }}
            >
              <CardContent
                style={{
                  width: "61.319vw",
                  height: "67.1875vh",
                  backgroundColor: "white",
                  padding: 0,
                }}
              >
                <Typography
                  variant="h4"
                  style={{
                    marginLeft: "2.77vw",
                    marginTop: "4.8828125vh",
                    fontWeight: 910,
                  }}
                >
                  The Pitch
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    marginLeft: "2.771vw",
                    marginTop: "1.5625vh",
                    marginRight: "5.8333vw",
                  }}
                >
                  In the face of mounting pressure for more housing, it’s time
                  for construction to evolve. Green Canopy NODE is scaling
                  construction technology products by leveraging our integrated
                  construction company as an ecosystem. We hack go-to-market
                  hurdles by initially deploying our construction products on
                  site with the support of our residential housing pipeline and
                  real estate funds. In 2023, we are planning to install
                  millions of dollars of product on site, develop a new region
                  for expansion, and release our configurable product catalog.
                  We are raising $2.8M to finish our preferred financing round
                  with <b>$9.6M already raised</b>.
                </Typography>
                <Grid
                  item
                  style={{
                    marginLeft: "2.77vw",
                    marginRight: "2.77vw",
                    marginTop: "calc(41/1024*100vh)",
                    marginBottom: "calc(40/1024*100vh)",
                    borderRadius: "2rem",
                  }}
                >
                  <img
                    src="https://s3-alpha-sig.figma.com/img/8c02/1189/3e3c3ee040e1a49943a1dea5372bb1ca?Expires=1685318400&Signature=RI7mdMwMn2Nr5TlMxELWqdCPSuRjpa~obwTOE0lRjcYp0bnW~HLCUzVF1DoKexGfAlQa7Kq-E61ckUWiSt55bTlgLPwgLOiigG1pj79gncswKgvvTcI9ed5vAaZQjMnTDIcEf2fAdRPGIVsehsU59NUkqVwTPUtsrODBb6RwgV5Bne6jXyEVaMeBgoFc1A59W6N0Fs4IJR2~hyk5DZNb9sPmC932ST~ZHripRxEIveZKqzrO9ank4I9ropRtIdiXg2WVXl~YS0BZqfCBwfb19wzSgBN20FpxHDCEgTx0~X4JwXFi7BgNrrGPAz~GxD2M992ETqxKDkSZplSj4QlOaw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    style={{
                      width: "calc(803/1440*100vw)",
                      height: "calc(370/1024*100vh)",
                      borderRadius: "2rem",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  ></img>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Navbarr />
        <Bottomheaderscreen />
      </ThemeProvider>
    </>
  );
}

export default ProjectScreen2;
