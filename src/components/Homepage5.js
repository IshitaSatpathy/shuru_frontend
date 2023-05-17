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
} from "@material-ui/core";
import Header from "./Header";
import Navbar from "./Navbar";
import { IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { blueGrey } from "@mui/material/colors";
import EastIcon from "@mui/icons-material/East";
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
function HomepageScreen5() {
  const classes = useStyles();
  return (
    <>
      <Header style={{ zIndex: 1 }} />
      <Grid
        container
        spacing={1}
        style={{
          height: "calc(100vh - 8rem)",
          position: "relative",
          width: "calc(100%)",
        }}
      >
        <Grid
          item
          style={{
            width: "100%",
            marginTop: "2rem",
            height: "16%",
            overflowX: "hidden",
            marginBottom: 0,
          }}
        >
          <Grid
            item
            style={{ position: "relative", left: "3.3rem", width: "40%" }}
          >
            <Typography variant="body1">How it Works</Typography>
          </Grid>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            style={{ marginBottom: "0rem" }}
          >
            <Grid item style={{ overflowX: "hidden", width: "40%" }}>
              <Typography
                variant="h3"
                style={{ marginLeft: "3.3rem", fontWeight: "bold" }}
              >
                How it works ?
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          style={{
            width: "23%",
            height: "68%",
            marginLeft: "3.2rem",
            marginRight: "3rem",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h6"
            style={{ fontWeight: "bold", marginBottom: "3rem" }}
          >
            Creators{" "}
          </Typography>
          <Typography variant="h6" style={{ marginBottom: "20rem" }}>
            Investor
          </Typography>
          <Typography
            variant="body1"
            style={{ marginBottom: "1rem", marginRight: "2rem" }}
          >
            For legal, compliances and other info simply dummy text of the
            printing and typesetting industry.
          </Typography>
          <Typography variant="body1">
            Read our{" "}
            <Button
              color="inherit"
              style={{ textTransform: "capitalize", fontWeight: "bold" }}
              classes={{ root: classes.link }}
              href="#"
            >
              <u> Legal Guide</u>
            </Button>
          </Typography>
          <Divider
            orientation="vertical"
            style={{ marginLeft: "1.2rem", marginRight: "1rem" }}
          />
        </Grid>

        <Grid
          item
          style={{
            height: "55%",
            width: "40%",
            overflowX: "hidden",
            marginLeft: "1.2rem",
            marginRight: "1rem",
          }}
        >
          <Card
            style={{
              height: "100%",
              borderRadius: "2rem",
              display: "flex",
              backgroundColor: "#408FF7",
            }}
          >
            <CardContent
              style={{
                width: "50%",
                height: "84.4%",
                padding: "3rem",
                marginTop: "1rem",
              }}
            >
               <Typography
            variant="h2"
            style={{ color:'white',marginBottom:'4rem' }}
          >
            01
          </Typography>  
          <Typography
            variant="h5"
            style={{ marginBottom: "1rem",color:'white',fontWeight:'bold' }}
          >
            Why invest ?
          </Typography>
          <Typography
            variant="body1"
            style={{ marginBottom: "1rem", marginRight: "2rem",color:'white' }}
          >
            For legal, compliances and other info simply dummy text of the
            printing and typesetting industry.
          </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          item
          style={{
            height: "55%",
            width: "11%",
            overflowX: "hidden",
            marginLeft: "1.2rem",
            marginRight: "1rem",
          }}
        >
          <Card
            style={{ height: "100%", borderRadius: "2rem", display: "flex",backgroundColor:'#D2EC4C' }}
          >
            <CardContent
              style={{
                width: "50%",
                height: "84.4%",
                padding: "3rem",
                marginTop: "1rem",
              }}
            ><Typography
            variant="h2"
            style={{ color:'black' }}
          >
            02
          </Typography>  </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          style={{
            height: "55%",
            width: "11%",
            overflowX: "hidden",
            marginLeft: "1.2rem",
            marginRight: "1rem",
          }}
        >
          <Card
            style={{ height: "100%", borderRadius: "2rem", display: "flex",backgroundColor:'#57BF43' }}
          >
            <CardContent
              style={{
                width: "50%",
                height: "84.4%",
                padding: "3rem",
                marginTop: "1rem",
              }}
            ><Typography
            variant="h2"
            style={{ color:'white' }}
          >
            03
          </Typography>  </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Navbar />
    </>
  );
}

export default HomepageScreen5;
