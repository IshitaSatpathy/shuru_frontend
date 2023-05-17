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
function HomepageScreen4() {
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
            <Typography variant="body1">Why Invest</Typography>
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
                Why Invest ?
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          style={{
            height: "75%",
            width: "100%",
            overflowX: "hidden",
            marginLeft: "3.2rem",
            marginRight: "3rem",
          }}
        >
          <Card
            style={{ height: "100%", borderRadius: "2rem", display: "flex" }}
          >
            <div
              style={{
                width: "50%",
                height: "84.4%",
                overflow: "hidden",
                margin: "3rem",
                borderRadius: "2rem",
              }}
            >
              <img
                src="https://s3-alpha-sig.figma.com/img/59c3/49fb/06801f29bedd8cfba836abe10f9fd54a?Expires=1684108800&Signature=nytU-UD-z4gDIicf6FXXVlt9cK~HIxC6UoP0VrME0-coBQMHxlTkPDltFKOR0mbJnulA5mO8sD4djVUYhN9rmjsW3TU9E34hPwnh~BOntvkKvGm5rzo0MymYHO2KX939L2qI2T6TMFyBzuqe~F~YJuosO784W-WJX8Ry1Q5zCK1i64q5OUThHs7DLfZKI1S-xuBlKL5iWiEv6mC~tgIVhhowxQn3Da7nETluKI7ZdBJu8Q1~cBa67meFlEht-G5SeXKeE9yTGQopiX-OltsitHhE9HU3n3SHQ92UfHo0go5Yq7SAQuGRcx568leoxHrzNxGWxEBOjjN6oZ6ZF01rPg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="card-image"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <CardContent
              style={{
                width: "50%",
                height: "84.4%",
                padding: "3rem",
                marginTop: "1rem",
              }}
            >
              <div>
                <Typography
                  variant="h4"
                  style={{ fontWeight: "bold", marginRight: "2rem" }}
                  gutterBottom
                >
                  Step 1
                </Typography>
                <Typography
                  variant="body1"
                  style={{ marginBottom: "2.2rem", marginRight: "10rem" }}
                  gutterBottom
                >
                  Shuru campaigns make ideas into reality. It’s where creators
                  share new visions for creative work with the communities that
                  will come together to fund them.
                </Typography>
                <Typography
                  variant="h4"
                  style={{ fontWeight: "bold", marginRight: "2rem" }}
                  gutterBottom
                >
                  Step 2
                </Typography>
                <Typography
                  variant="body1"
                  style={{ marginBottom: "2.2rem", marginRight: "10rem" }}
                  gutterBottom
                >
                  Shuru campaigns make ideas into reality. It’s where creators
                  share new visions for creative work with the communities that
                  will come together to fund them.
                </Typography>
                <Typography
                  variant="h4"
                  style={{ fontWeight: "bold" }}
                  gutterBottom
                >
                  Step 3
                </Typography>
                <Typography
                  variant="body1"
                  style={{ marginBottom: "2.2rem", marginRight: "10rem" }}
                  gutterBottom
                >
                  Shuru campaigns make ideas into reality. It’s where creators
                  share new visions for creative work with the communities that
                  will come together to fund them.
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Navbar />
    </>
  );
}

export default HomepageScreen4;
