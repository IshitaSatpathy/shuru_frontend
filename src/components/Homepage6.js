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
function HomepageScreen6() {
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
            <Typography variant="body1">Benefits</Typography>
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
                Benefits For
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          style={{
            height: "74%",
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
                width: "50%",
                height: "100%",
              }}
            >
              <Grid
                container
                style={{
                  width: "100%",
                  height: "100%",
                  marginLeft: "1.2rem",
                  marginRight: "1rem",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h4"
                  style={{
                    fontWeight: "bold",
                    marginTop: "3rem",
                    marginLeft: "2rem",
                  }}
                >
                  Creators
                </Typography>
                <Typography
                  variant="h4"
                  style={{ marginLeft: "2rem", marginTop: "3rem" }}
                >
                  Investor
                </Typography>

                <Divider
                  orientation="vertical"
                  style={{ marginLeft: "20rem", marginRight: "1rem" }}
                />
                <Grid
                  container
                  style={{
                    width: "85%",
                    height: "100%",
                    marginLeft: "4.2rem",
                    marginTop: "1rem",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="body"
                    style={{
                      marginTop: "2rem",
                      marginLeft: "2rem",
                      width: "100%",
                    }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text
                  </Typography>
                  <Divider
                    orientation="horizontal"
                    style={{
                      marginLeft: "2rem",
                      marginRight: "1rem",
                      marginTop: "3.1rem",
                    }}
                  />
                  <Grid
                    container
                    display="flex"
                    alignItems="center"
                    style={{ flexDirection: "row" }}
                  >
                    <Avatar
                      variant="circular"
                      style={{
                        position: "relative",
                        marginTop: "1.6rem",
                        marginLeft: "1.7rem",
                        backgroundColor: "blue",
                        color: "white",
                      }}
                    >
                      01
                    </Avatar>
                    <Typography
                      variant="h6"
                      style={{ marginTop: "1rem", marginLeft: "1rem" }}
                    >
                      The standard Lorem Ipsum passage, used since the 1500s
                    </Typography>
                  </Grid>
                  <Divider
                    orientation="horizontal"
                    style={{
                      marginLeft: "2rem",
                      marginRight: "1rem",
                      marginTop: "1rem",
                    }}
                  />
                  <Grid
                    container
                    display="flex"
                    alignItems="center"
                    style={{ flexDirection: "row" }}
                  >
                    <Avatar
                      variant="circular"
                      style={{
                        position: "relative",
                        marginTop: "1.6rem",
                        marginLeft: "1.7rem",
                        backgroundColor: "blue",
                        color: "white",
                      }}
                    >
                      02
                    </Avatar>
                    <Typography
                      variant="h6"
                      style={{ marginTop: "1rem", marginLeft: "1rem" }}
                    >
                      The standard Lorem Ipsum passage, used since the 1500s
                    </Typography>
                  </Grid>
                  <Divider
                    orientation="horizontal"
                    style={{
                      marginLeft: "2rem",
                      marginRight: "1rem",
                      marginTop: "1rem",
                    }}
                  />
                  <Grid
                    container
                    display="flex"
                    alignItems="center"
                    style={{ flexDirection: "row" }}
                  >
                    <Avatar
                      variant="circular"
                      style={{
                        position: "relative",
                        marginTop: "1.6rem",
                        marginLeft: "1.7rem",
                        backgroundColor: "blue",
                        color: "white",
                      }}
                    >
                      03
                    </Avatar>
                    <Typography
                      variant="h6"
                      style={{ marginTop: "1rem", marginLeft: "1rem" }}
                    >
                      The standard Lorem Ipsum passage, used since the 1500s
                    </Typography>
                  </Grid>
                  <Divider
                    orientation="horizontal"
                    style={{
                      marginLeft: "2rem",
                      marginRight: "1rem",
                      marginTop: "1rem",
                    }}
                  />
                  <Grid
                    container
                    display="flex"
                    alignItems="center"
                    style={{ flexDirection: "row" }}
                  >
                    <Avatar
                      variant="circular"
                      style={{
                        position: "relative",
                        marginTop: "1.6rem",
                        marginLeft: "1.7rem",
                        backgroundColor: "blue",
                        color: "white",
                      }}
                    >
                      04
                    </Avatar>
                    <Typography
                      variant="h6"
                      style={{ marginTop: "1rem", marginLeft: "1rem" }}
                    >
                      The standard Lorem Ipsum passage, used since the 1500s
                    </Typography>
                  </Grid>
                  <Divider
                    orientation="horizontal"
                    style={{
                      marginLeft: "2rem",
                      marginRight: "1rem",
                      marginTop: "1rem",
                    }}
                  />
                  <Grid
                    container
                    display="flex"
                    alignItems="center"
                    style={{ flexDirection: "row" }}
                  >
                    <Avatar
                      variant="circular"
                      style={{
                        position: "relative",
                        marginTop: "1.6rem",
                        marginLeft: "1.7rem",
                        backgroundColor: "blue",
                        color: "white",
                      }}
                    >
                      05
                    </Avatar>
                    <Typography
                      variant="h6"
                      style={{ marginTop: "1rem", marginLeft: "1rem" }}
                    >
                      The standard Lorem Ipsum passage, used since the 1500s
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Navbar />
    </>
  );
}

export default HomepageScreen6;
