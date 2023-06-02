import React from "react";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Grid,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  button: {
    backgroundColor: "white",
    borderRadius: ".75rem",
    height: "3rem",
    "&:hover": {
      backgroundColor: "yellow",
    },
  },
  link: {
    color: "black",
    "&:hover": {
      color: "black",
    },
  },
  appBar: {
    top: "auto",
    bottom: 0,
  },
});

function Navbar() {
  const classes = useStyles();
  const theme = createTheme({
    typography: {
      caption: {
        fontSize: ".71rem",
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
        fontSize: "0.85rem",
      },
    },
    spacing: (factor) => `${0.8 * factor}rem`,
  });
  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="sticky"
        color="default"
        elevation={0}
        className={classes.appBar}
        style={{
          backgroundColor: "#EDEEF1",
          maxWidth: "83.75rem",
          margin: "auto",
        }}
      >
        <Toolbar
          style={{
            justifyContent: "space-between",
            backgroundColor: "#EDEEF1",
            width: "83.75rem",
            marginBottom: "1.3rem",
            padding: 0,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Button
            color="inherit"
            style={{
              textTransform: "capitalize",
              fontWeight: "bold",
              padding: 0,
              width: "8rem",
              justifyContent: "left",
            }}
            classes={{ root: classes.link }}
            href="#"
          >
            <Typography
              variant="body1"
              style={{ fontFamily: "Inter", fontWeight: 800, color: "#292D32" }}
            >
              {" "}
              <u> Get in Touch</u>
            </Typography>
          </Button>
          <Grid
            container
            style={{
              marginLeft: "17.7395rem",
              width: "65.3125rem",
              height: "3rem",
            }}
          >
            <Paper style={{ boxShadow: "none", borderRadius: ".75rem" }}>
              <a href="#projects" style={{ textDecoration: "none" }}>
                <Button color="inherit" className={classes.button}>
                  <Typography
                    variant="caption"
                    style={{
                      fontFamily: "Inter",
                      padding: ".45rem",
                      fontWeight: 500,
                      color: "#292D32",
                    }}
                  >
                    {" "}
                    Projects
                  </Typography>
                </Button>
              </a>
              <a href="#overview" style={{ textDecoration: "none" }}>
                <Button color="inherit" className={classes.button}>
                  <Typography
                    variant="caption"
                    style={{
                      fontFamily: "Inter",
                      margin: ".45rem",
                      fontWeight: 500,
                      color: "#292D32",
                    }}
                  >
                    {" "}
                    Overview
                  </Typography>
                </Button>
              </a>
              <a href="#categories" style={{ textDecoration: "none" }}>
                <Button color="inherit" className={classes.button}>
                  <Typography
                    variant="caption"
                    style={{
                      fontFamily: "Inter",
                      margin: ".45rem",
                      fontWeight: 500,
                      color: "#292D32",
                    }}
                  >
                    {" "}
                    Categories
                  </Typography>
                </Button>
              </a>
              <a href="#whyshuru" style={{ textDecoration: "none" }}>
                <Button color="inherit" className={classes.button}>
                  <Typography
                    variant="caption"
                    style={{
                      fontFamily: "Inter",
                      margin: ".45rem",
                      fontWeight: 500,
                      color: "#292D32",
                    }}
                  >
                    {" "}
                    Why Shuru
                  </Typography>
                </Button>
              </a>
              <a href="#howitworks" style={{ textDecoration: "none" }}>
                <Button color="inherit" className={classes.button}>
                  <Typography
                    variant="caption"
                    style={{
                      fontFamily: "Inter",
                      margin: ".45rem",
                      fontWeight: 500,
                      color: "#292D32",
                    }}
                  >
                    {" "}
                    How it works
                  </Typography>
                </Button>
              </a>
              <a href="#aboutus" style={{ textDecoration: "none" }}>
                <Button color="inherit" className={classes.button}>
                  <Typography
                    variant="caption"
                    style={{
                      fontFamily: "Inter",
                      margin: ".45rem",
                      fontWeight: 500,
                      color: "#292D32",
                    }}
                  >
                    {" "}
                    About{" "}
                  </Typography>
                </Button>
              </a>
              <a href="#benefits" style={{ textDecoration: "none" }}>
                <Button color="inherit" className={classes.button}>
                  <Typography
                    variant="caption"
                    style={{
                      fontFamily: "Inter",
                      margin: ".45rem",
                      fontWeight: 500,
                      color: "#292D32",
                    }}
                  >
                    {" "}
                    Benefits{" "}
                  </Typography>
                </Button>
              </a>
              <a href="#roadmap" style={{ textDecoration: "none" }}>
                <Button color="inherit" className={classes.button}>
                  <Typography
                    variant="caption"
                    style={{
                      fontFamily: "Inter",
                      margin: ".45rem",
                      fontWeight: 500,
                      color: "#292D32",
                    }}
                  >
                    {" "}
                    Roadmap
                  </Typography>
                </Button>
              </a>
              <Button color="inherit" className={classes.button}>
                <Typography
                  variant="caption"
                  style={{
                    fontFamily: "Inter",
                    margin: ".45rem",
                    fontWeight: 500,
                    color: "#292D32",
                  }}
                >
                  {" "}
                  Partners
                </Typography>
              </Button>
              <a href="#press" style={{ textDecoration: "none" }}>
                <Button color="inherit" className={classes.button} style={{}}>
                  <Typography
                    variant="caption"
                    style={{
                      fontFamily: "Inter",
                      margin: ".61rem",
                      fontWeight: 500,
                      color: "#292D32",
                    }}
                  >
                    {" "}
                    Press
                  </Typography>
                </Button>
              </a>
            </Paper>
          </Grid>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Navbar;