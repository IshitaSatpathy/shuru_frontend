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
function HomepageScreen() {
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
        <Grid item xs={12} style={{ marginTop: "6rem", overflowX: "hidden" }}>
          <Grid item style={{ position: "relative", left: "8.3rem" }}>
            <Typography variant="body1">PROJECTS</Typography>
          </Grid>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            style={{ marginBottom: "0rem" }}
          >
            <Grid item style={{ overflowX: "hidden" }}>
              <Typography
                variant="h2"
                style={{ marginLeft: "8rem", fontWeight: "bold" }}
              >
                Popular Projects
              </Typography>
            </Grid>
            <Grid item style={{ overflowX: "hidden" }}>
              <Typography
                variant="h5"
                align="right"
                color="primary"
                style={{
                  overflowX: "hidden",
                  display: "block",
                  marginRight: "9rem",
                  textDecoration: "underline",
                  color: "black",
                }}
              >
                View all projects
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={5}
          style={{
            display: "flex",
            marginLeft: "8rem",
            flexDirection: "column",
            height: "65%",
            marginRight: "2rem",
            overflowX: "hidden",
          }}
        >
          <Card
            style={{
              flexGrow: 1,
              borderRadius: "2rem",
              backgroundImage: `url(https://s3-alpha-sig.figma.com/img/fd91/c8c4/12dfe660a4361eea5b971d6ecf578bba?Expires=1683504000&Signature=AgKzM1me7c2dHWzs5wNgs1JuRIwpiQkv3SmWHTn8pcataZnAwRwUbZknRkgyBxGVxe7-KdTjb3x3zaHayJTok2zII~QdE5ja6dElVfEMWYImZlafpKxsVB95rKxkdBaVv7Z0u3YipJ5l-dU0mLy8LRE7OUutI4zh~hnaMtpbw0Ve9GPyHPk2MsmChzYNMAF376k3HgxvoMfg5dgUA0wAl4vM0iAGXwSJBNp6NVATbmoZzR5A8n48Hc2ZUyN6nHZaa4nz3atbVksGXw7pFx9IrmLFSbBF2Rd-6tSRM79mpPgwTYtHborqxT2bWOIJWMsFS5oFM0wqND7fvIWLRdC6TA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <CardContent style={{ marginLeft: "1rem", marginTop: "1rem" }}>
              <Typography
                variant="h3"
                gutterBottom
                style={{ color: "white", fontWeight: "bold" }}
              >
                Hero Software
              </Typography>
              <Typography
                style={{
                  fontFamily: "PP Neutra Montreal",
                  color: "white",
                  fontSize: "1.3rem",
                }}
              >
                Online platform that helps couples get divorced without the
                cost, time and conflict of attorne Online platform that helps
                couples get divorced without the cost, time and conflict of
                attorneys
              </Typography>
              <Button
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(5dp)",
                  opacity: 0.9,
                  borderRadius: "1rem",
                  color: "rgba(41, 45, 50, 1)",
                  marginTop: "1rem",
                }}
              >
                <Typography
                  style={{
                    textTransform: "capitalize",
                    fontWeight: 500,
                    fontFamily: "PP Neutra Montreal",
                  }}
                >
                  Pledge
                </Typography>
                &nbsp;
                <Typography
                  style={{
                    fontWeight: "bold",
                    fontFamily: "PP Neutra Montreux",
                  }}
                >
                  {" "}
                  US$20,045
                </Typography>
              </Button>
              <Typography
                style={{
                  marginTop: "1rem",
                  position: "relative",
                  top: "12rem",
                  fontWeight: "bold",
                  color: "#FFFFFF",
                  fontFamily: "PP Neutra Montreux",
                  fontSize: "1.2rem",
                }}
              >
                Read more
              </Typography>
              <IconButton
                aria-label="east"
                styles={{ position: "absolute", bottom: 0, right: 0 }}
              >
                <div className={classes.circle}>
                  <EastIcon color="background: #292D32;" />
                </div>
              </IconButton>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          container
          direction="column"
          xs={5}
          style={{ display: "flex", height: "68%", overflowX: "hidden" }}
        >
          <Grid
            item
            style={{ flexGrow: 1, height: "50%", overflowX: "hidden" }}
          >
            <Card
              style={{
                height: "90%",
                borderRadius: "2rem",
                backgroundImage: `url(https://s3-alpha-sig.figma.com/img/0411/d51c/ba699a29d4e6a814bbbc5e74cd825f86?Expires=1683504000&Signature=CDFIuu6OqCGi5zOlsFDw4LyxoxYurnRn4IOCJG77OPJkt5Y3mZvx2Ph-9Y4o6CSQQJPXvGzFDdh3dxB0ig0Ogutq-DfZplPOfHPpoTFK1zbwilQABEM~OHmYykSUIUvCIrnBTZt4EvV2d0nFwpCo21-VFJkLjpCD1lsiVGAXnBFbjhl4zP9sQSYnm5n~2M~bI5YRFuoef-mpgZdQMIu-RR8ypyvgpZXSFkZQba8git8UbA6l1kdASNaJMGwlHISZpX4MAcbaOOKPWvMJWJom0yOltT1Qcb-QehrGqIMRafWTzkVBk2psWAdGvXXCqvgqp7l0CY4gUFG1dRNCWeFRwg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <CardContent style={{ position: "relative", height: "90%" }}>
                <div
                  style={{
                    position: "absolute",
                    top: 20,
                    left: 20,
                    width: "50%",
                    height: "65%",
                    overflow: "hidden",
                  }}
                >
                  <Typography
                    gutterBottom
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      textOverflow: "ellipsis",
                      wordWrap: "break-word",
                      hyphens: "auto",
                      width: "100%",
                      height: "100%",
                      fontFamily: "PP Neutra Montreal",
                      fontSize: `calc(1.2vw + 1.1vh + 0.7vmin)`,

                      display: "inline-block",
                    }}
                  >
                    The Art of Mark Schultz: Carbon 5
                  </Typography>
                </div>

                <Button
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    backdropFilter: "blur(5dp)",
                    opacity: 0.9,
                    borderRadius: "1rem",
                    color: "rgba(41, 45, 50, 1)",
                    marginTop: "1rem",
                    position: "relative",
                    top: "9rem",
                  }}
                >
                  <Typography
                    style={{
                      textTransform: "capitalize",
                      fontWeight: 500,
                      fontFamily: "PP Neutra Montreal",
                    }}
                  >
                    Pledge
                  </Typography>
                  &nbsp;
                  <Typography
                    style={{
                      fontWeight: "bold",
                      fontFamily: "PP Neutra Montreux",
                    }}
                  >
                    {" "}
                    US$20,045
                  </Typography>
                </Button>
                <IconButton aria-label="east">
                  <div className={classes.circle1}>
                    <EastIcon color="background: #292D32;" />
                  </div>
                </IconButton>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            style={{ flexGrow: 1, height: "50%", overflowX: "hidden" }}
          >
            <Card
              style={{
                height: "90%",
                borderRadius: "2rem",
                backgroundImage: `url(https://s3-alpha-sig.figma.com/img/f801/a43b/c8db8db49bb6eb9b3e9b72bf0cede889?Expires=1683504000&Signature=hzP5XF8gDWdonMXeaC~BwLYsWZU~RiTIM4xJw3WxFCmj9MeG4vHn-Vs-quzqSKPb5fhYvB-tToSeQ9xQZpBIU4y4jmWK3NowOJMJ2xh10vBBzUTBZcGafR7BaJ3O5n8DCcRVmmeYKwlDTRGQgoIaNXfmE3xHZvaip-UPz-yc2yv203UeQFn2bfXIafs6jZJag6F3tAz6zgzUHnF3T7AdQwMHY3f2HxoRI-NJlTC~vWwXMxfv1lDEpWDXTZlqCCU-MI3fQRjUzqDQ4e6FtQzzv~ZeUy7tRswPu8BdqaeieazRsM4BRlCQAsaUC3bAkIY2WO3--oHmkd74AsS9-tGHkA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <CardContent style={{ position: "relative", height: "90%" }}>
                <div
                  style={{
                    position: "absolute",
                    top: 20,
                    left: 20,
                    width: "50%",
                    height: "65%",
                    overflow: "hidden",
                  }}
                >
                  <Typography
                    gutterBottom
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      textOverflow: "ellipsis",
                      wordWrap: "break-word",
                      hyphens: "auto",
                      width: "100%",
                      height: "100%",
                      fontFamily: "PP Neutra Montreal",
                      fontSize: `calc(1.2vw + 1.1vh + 0.7vmin)`,

                      display: "inline-block",
                    }}
                  >
                    Multiverse – The art of Aleksi Briclot
                  </Typography>
                </div>

                <Button
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    backdropFilter: "blur(5px)",
                    opacity: 0.9,
                    borderRadius: "1rem",
                    color: "rgba(41, 45, 50, 1)",
                    marginTop: "1rem",
                    position: "relative",
                    top: "9rem",
                  }}
                >
                  <Typography
                    style={{
                      textTransform: "capitalize",
                      fontWeight: 500,
                      fontFamily: "PP Neutra Montreal",
                    }}
                  >
                    Pledge
                  </Typography>
                  &nbsp;
                  <Typography
                    style={{
                      fontWeight: "bold",
                      fontFamily: "PP Neutra Montreux",
                    }}
                  >
                    {" "}
                    US$20,045
                  </Typography>
                </Button>
                <IconButton
                  aria-label="east"
                  styles={{ position: "absolute", bottom: 0, right: 0 }}
                >
                  <div className={classes.circle1}>
                    <EastIcon color="background: #292D32;" />
                  </div>
                </IconButton>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Navbar />
    </>
  );
}

export default HomepageScreen;
