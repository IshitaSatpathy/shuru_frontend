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
  notchedOutline: {
    borderColor: "#EDEEF1",
  },
  semicircleleft1: {
    width: "10%",
    height: "22%",
    borderTopRightRadius: "100% 100%",
    backgroundColor: "blue",
    position: "fixed",
    marginTop: "7rem",
  },
  semicircleleft2: {
    width: "10%",
    height: "22%",
    borderBottomRightRadius: "100% 100%",
    backgroundColor: "blue",
    position: "fixed",
    marginTop: "20rem",
  },
  semicircleright1: {
    width: "10%",
    height: "22%",
    borderTopLeftRadius: "100% 100%",
    backgroundColor: "blue",
    position: "fixed",
    right: 0,
    marginTop: "7rem",
  },
  semicircleright2: {
    width: "10%",
    height: "22%",
    borderBottomLeftRadius: "100% 100%",
    backgroundColor: "blue",
    position: "fixed",
    right: 0,
    marginTop: "20rem",
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
  const classes = useStyles();
  return (
    <>
      <Header style={{ zIndex: 1 }} />
      <Grid
        container
        spacing={2}
        style={{
          height: "calc(100vh - 8rem)",
          position: "relative",
          width: "calc(100%)",
          flexDirection: "column",
        }}
      >
        <Grid
          container
          style={{
            width: "96%",
            flex: "display",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Grid
            item
            style={{ width: "17%", height: "100%", marginTop: "5rem" }}
          >
            <div className={classes.semicircleleft1}></div>
            <div className={classes.semicircleleft2}></div>
          </Grid>
          <Grid
            container
            spacing={1}
            style={{
              height: "100%",
              position: "relative",
              width: "66%",
            }}
          >
            <Grid
              item
              style={{
                width: "100%",
                marginTop: "2rem",
                height: "27%",

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
                    overflowX: "hidden",
                    width: "100%",
                    marginLeft: "2rem",
                    marginTop: "4rem",
                  }}
                >
                  <Typography
                    variant="h1"
                    style={{
                      marginLeft: "3.3rem",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Subscribe our notification, news & blogs
                  </Typography>
                </Grid>
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  style={{
                    marginTop: "3rem",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Grid item style={{ width: "50%", marginLeft: "2rem" }}>
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
                          borderRadius: "1rem",
                          borderColor: "#EDEEF1",
                          outline: "none",
                        },
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    style={{
                      width: "50%",
                      marginLeft: "2rem",
                      marginTop: "2rem",
                    }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      style={{
                        backgroundColor: "black",
                        color: "white",
                        height: "22%",
                        borderRadius: "1rem",
                      }}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            style={{ width: "17%", height: "100%", marginTop: "5rem" }}
          >
            <div className={classes.semicircleright1}></div>
            <div className={classes.semicircleright2}></div>
          </Grid>
        </Grid>
      </Grid>
      <Bottomheaderscreen />
    </>
  );
}

export default HomepageScreen11;
