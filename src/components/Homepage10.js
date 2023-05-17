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
  },
  extraBold: {
    fontWeight: 700,
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
            marginTop: "3rem",
            height: "22%",

            marginBottom: 0,
          }}
        >
          <Grid
            item
            style={{ position: "relative", left: "3.3rem", width: "40%" }}
          >
            <Typography variant="body1">Press</Typography>
          </Grid>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            style={{ marginBottom: "0rem" }}
          >
            <Grid item style={{ overflowX: "hidden", width: "70%" }}>
              <Typography
                variant="h1"
                style={{ marginLeft: "3.3rem", fontWeight: "bold" }}
              >
                Hot off the Press
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          style={{
            display: "flex",
            flexDirection: "column",
            height: "78%",
            width: "100%",
          }}
        >
          <Grid
            item
            style={{
              width: "46%",
              display: "flex",
              marginLeft: "3.3rem",
              flexDirection: "column",
              height: "80%",

              overflowX: "hidden",
            }}
          >
            <Card
              style={{
                flexGrow: 1,
                borderRadius: "2rem",
                backgroundColor: "white",
              }}
            >
              <CardContent style={{ height: "100%", padding: 0 }}>
                <Grid container style={{ height: "49%", padding: 0 }}>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/31c6/bce3/2e34dd1da07c41044c876bd247993be7?Expires=1684713600&Signature=mKjWndVt7l4mFjfeibfJl7Dawur9p32QKoPyIZ7b3OjfaTfwumhEq3raZoQUCjGQ5UyCh95iU3wmL4zpJ5h5xCM3ID~ZbApkouu9bE~H4teUagFC7rqv724KD6JV5zpMWwA~toG-h3PMfdIwFD9HCsnWdZzPgni9i3oKGfLd6ys2KNPXIiqdnyT-Xvnwrp15UDRe5tLU0JKFSkR79yqomPxfyx~f30jGbmMF4cgOK-YACSUzQGn1J3Cc1GvWmh23RQy9BmxZ0b2Ten6oQ1mnBYg1g-395oiMIGJnpnbfmNAuSiU26pUkYuszCOkNadUcF-pKTWd-5TLjfh5oKgGiRw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
                    marginTop: "1.2rem",
                    fontFamily: "inter",
                    fontStyle: "regular",
                    color: "#292D32",
                    fontWeight: "bold",
                    textShadow: "1px 1px 1px black",
                    marginLeft: "1.8rem",
                  }}
                >
                  Seven Game-Changing Creative Projects You May Not Know
                  Launched on Shuru
                </Typography>
                <div
                  style={{
                    marginTop: "1.2rem",
                    marginLeft: "1.8rem",
                    marginRight: "1.2rem",
                  }}
                >
                  <Typography
                    variant="body"
                    style={{
                      fontFamily: "inter",
                      color: "black",
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
                    overflowY: "hidden",
                  }}
                >
                  <Typography
                    style={{
                      marginTop: "5.5rem",
                      marginLeft: "2rem",
                      width: "12%",
                      fontWeight: "bold",
                      color: "black",
                      fontFamily: "PP Neutra Montreux",
                    }}
                  >
                    Read more
                  </Typography>

                  <IconButton
                    aria-label="east"
                    style={{ marginTop: "5.1rem", padding: 0 }}
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
              width: "46%",
              display: "flex",
              marginLeft: "1rem",
              flexDirection: "column",
              height: "80%",
              marginRight: "1.5rem",
              overflowX: "hidden",
            }}
          >
            <Card
              style={{
                height: "100%",
                borderRadius: "2rem",
                backgroundColor: "white",
              }}
            >
              <CardContent style={{ height: "100%", padding: 0 }}>
                <Grid container style={{ height: "49%", padding: 0 }}>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/dc55/e79f/73be1715d3d5942c49f4ce40271b2773?Expires=1684713600&Signature=AMSdxVmVyjDIpsYL-6zW8J6LDxwZuWqrwDRZDHFTspiVN~BKVUplcFY4-w584tUOcFATsOZYC1419bCEWn6DbwV3Qvz3vbwy5BhbSmbhrUJBPcEu7l4NWv55Q~DbSiIsyUwb-19fuGL1FxwG8CpHmf0QMINdVfXKYPacYJuyD8zmOaLXOfRrnto7ymk~XIYKlqgCuzw~k2otv6GpTC5f3PugTJaWS-Y8kxrXyqG2Wg46A0PqHA8a-mN7pQSZI-kot4RdRjY0iN-N5gg4v~A2-GqE5qXSwr4~cM59YxmZ03hy7cfA~OTrGVxHrUg1JVBATqqV9jj72zvaUwoCJeEcNQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Grid>
                <Typography
                  variant="h5"
                  className={classes.extraBold}
                  style={{
                    marginTop: "1.2rem",
                    fontFamily: "inter",
                    fontStyle: "regular",
                    color: "#292D32",
                    textShadow: "1px 1px 1px black",
                    marginLeft: "1.8rem",
                  }}
                >
                  Seven Game-Changing Creative Projects You May Not Know
                  Launched on Shuru
                </Typography>
                <div
                  style={{
                    marginTop: "1.2rem",
                    marginLeft: "1.8rem",
                    marginRight: "1.2rem",
                  }}
                >
                  <Typography
                    variant="body"
                    style={{
                      fontFamily: "inter",
                      color: "black",
                    }}
                  >
                    Backers have pledged more than $7 billion to creative
                    projects on Shuru. Here are seven projects that went on to
                    become...
                  </Typography>
                </div>
                <Grid
                  container
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <Typography
                    style={{
                      marginTop: "5.5rem",
                      marginLeft: "2rem",
                      width: "12%",
                      fontWeight: "bold",
                      color: "black",
                      fontFamily: "PP Neutra Montreux",
                    }}
                  >
                    Read more
                  </Typography>

                  <IconButton
                    aria-label="east"
                    style={{ marginTop: "5.1rem", padding: 0 }}
                  >
                    <div className={classes.circle}>
                      <EastIcon color="background: gray;" />
                    </div>
                  </IconButton>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Navbar />
    </>
  );
}

export default HomepageScreen10;
