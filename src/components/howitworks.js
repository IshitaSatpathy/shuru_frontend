import React from "react";
import { useEffect, useState } from "react";
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
import { Link } from "react-router-dom";
import interRegular from "../static/Inter-Regular.ttf";
import interBold from "../static/Inter-Bold.ttf";
import interExtraBold from "../static/Inter-ExtraBold.ttf";
import EastIcon from "@mui/icons-material/East";
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
    top: "9.3rem",
    left: "6rem",
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
function Howitworks() {
  const [creators_flag, set_creators_flag] = useState(true);
  const [box_flag, set_box_flag] = useState(0);

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
  console.log(box_flag)
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
      
        {(creators_flag==true) ? (<Grid
          container
          spacing={1}
          style={{
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
                variant="caption"
                style={{ fontFamily: "Inter", fontWeight: 500 }}
              >
                HOW IT WORKS
              </Typography>
            </Grid>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              style={{ marginBottom: "0rem", width: "83.75rem" }}
            >
              <Grid item style={{ maxWidth: "39.375rem" }}>
                <Typography
                  variant="h1"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 800,
                    color: "#292D32",
                  }}
                >
                  How it works ?
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            style={{
              maxWidth: "18.1875rem",

              marginTop: "5.0625rem",

              flexDirection: "column",
            }}
          >
            <Typography
              variant="h5"
              style={{
                fontFamily: "Inter",
                fontWeight: 800,

                color: "#292D32",
              }}
            >
              Creators
            </Typography>
            <div onClick={()=>{set_creators_flag(false)}}>
            <Typography
              variant="h5"
              style={{
                fontFamily: "Inter",
                fontWeight: 500,
                marginTop: "2.5rem",
                marginBottom: "20.5rem",
                color: "#292D32",
              }}
            >
              Investor
            </Typography></div>
            <Typography
              variant="body1"
              style={{
                fontFamily: "Inter",
                fontWeight: 400,
                marginBottom: "1rem",
                maxWidth: "18.1875rem",
              }}
            >
              For legal, compliances and other info simply dummy text of the
              printing and typesetting industry.
            </Typography>
            <Typography
              variant="body1"
              style={{ fontFamily: "Inter", fontWeight: 400 }}
            >
              Read our{""}
              <Button
                color="inherit"
                style={{
                  textTransform: "capitalize",
                  fontWeight: 800,
                  fontFamily: "Inter",
                  maxWidth: "18.1875rem",
                }}
                classes={{ root: classes.link }}
                href="#"
              >
                <u> Legal Guide</u>
              </Button>
            </Typography>
          </Grid>
          <Divider
            orientation="vertical"
            style={{
              marginLeft: "1.3125rem",
              color: "#C5C6CC",
              width: ".0625rem",
              height: "35rem",
              marginTop: "4.375rem",
              marginBottom: "4.375rem",
            }}
          />
          {box_flag == 0 ? (
            <Grid
              item
              style={{
                marginTop: "4.375rem",
                width: "39.0625rem",
                overflowX: "hidden",
                marginLeft: "3.75rem",
                marginRight: "1.875rem",
                padding: 0,
                height: "29.3125rem",
              }}
            >
              <Card
                
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "1.5rem",
                  display: "flex",
                  backgroundColor: "#408FF7",
                  boxShadow: "none",
                  position: "relative",
                }}
              >
                <CardContent
                  style={{
                    maxWidth: "26.625rem",
                    height: "100%",
                    padding: 0,
                  }}
                >
                  <Typography
                    variant="h1"
                    style={{
                      color: "white",
                      marginTop: "3.125rem",
                      marginLeft: "2rem",
                      fontFamily: "Inter",
                      fontWeight: 500,
                    }}
                  >
                    01
                  </Typography>
                  <Typography
                    variant="h4"
                    style={{
                      marginTop: "4.125rem",
                      color: "white",
                      fontWeight: "bold",
                      marginLeft: "2rem",
                      fontFamily: "Inter",
                      fontWeight: 800,
                    }}
                  >
                   Explore
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{
                      marginTop: "1.5rem",
                      color: "white",
                      marginLeft: "2rem",
                      fontFamily: "Inter",
                      fontWeight: 400,
                    }}
                  >
                    Sign up and explore ideas. 
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{
                      marginTop: "5.7rem",
                      color: "white",
                      marginLeft: "2rem",
                      fontFamily: "Inter",
                      fontWeight: 800,
                    }}
                  >
                    Read More
                  </Typography>
                </CardContent>
                <div // Add this div to create the circle quadrant
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: "12.8125rem",
                    height: "12.8125rem",
                    backgroundColor: "#fff",
                    borderTopLeftRadius: "100%",
                    opacity: "20%",
                  }}
                />
              </Card>
            </Grid>
          ) : (
            <Grid
              item
              style={{
                height: "29.3125rem",
                width: "8.8125rem",
                overflowX: "hidden",
                padding: 0,
                marginTop: "4.375rem",
                marginLeft: "3.75rem",
                marginRight: "1.875rem",
              }}
            >
              <Card
              onClick={()=>{set_box_flag(0)}}
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "1.5rem",
                  display: "flex",
                  backgroundColor: "#408FF7",
                  boxShadow: "none",
                  position: "relative",
                }}
              >
                <CardContent
                  style={{
                    width: "8.8125rem",
                    maxHeight: "21.3125rem",
                    padding: 0,
                  }}
                >
                  <Typography
                    variant="h1"
                    style={{
                      color: "white",
                      fontFamily: "Inter",
                      fontWeight: 500,
                      marginLeft: "2rem",
                      marginTop: "3.125rem",
                    }}
                  >
                    01
                  </Typography>{" "}
                </CardContent>
                <div // Add this div to create the circle quadrant
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: "6.8125rem",
                    height: "8rem",
                    backgroundColor: "#fff",
                    borderTopLeftRadius: "100%",
                    opacity: "20%",
                  }}
                />
              </Card>
            </Grid>
          )}
         {(box_flag!=1)?( <Grid
            item
            style={{
              height: "29.3125rem",
              width: "8.8125rem",
              overflowX: "hidden",
              padding: 0,
              marginTop: "4.375rem",
              marginRight: "1.875rem",
            }}
          >
            <Card
            onClick={()=>{set_box_flag(1)}}
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "1.5rem",
                display: "flex",
                backgroundColor: "#D2EC4C",
                boxShadow: "none",
                position: "relative",
              }}
            >
              <CardContent
                style={{
                  width: "8.8125rem",
                  maxHeight: "21.3125rem",
                  padding: 0,
                }}
              >
                <Typography
                  variant="h1"
                  style={{
                    color: "black",
                    fontFamily: "Inter",
                    fontWeight: 500,
                    marginLeft: "2rem",
                    marginTop: "3.125rem",
                  }}
                >
                  02
                </Typography>{" "}
              </CardContent>
              <div // Add this div to create the circle quadrant
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: "6.8125rem",
                  height: "8rem",
                  backgroundColor: "#fff",
                  borderTopLeftRadius: "100%",
                  opacity: "20%",
                }}
              />
            </Card>
          </Grid>
          ):(<Grid
            item
            style={{
              marginTop: "4.375rem",
              width: "39.0625rem",
              overflowX: "hidden",
              
              marginRight: "1.875rem",
              padding: 0,
              height: "29.3125rem",
            }}
          >
            <Card
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "1.5rem",
                display: "flex",
                backgroundColor: "#D2EC4C",
                boxShadow: "none",
                position: "relative",
              }}
            >
              <CardContent
                style={{
                  maxWidth: "26.625rem",
                  height: "100%",
                  padding: 0,
                }}
              >
                <Typography
                  variant="h1"
                  style={{
                    color: "black",
                    marginTop: "3.125rem",
                    marginLeft: "2rem",
                    fontFamily: "Inter",
                    fontWeight: 500,
                  }}
                >
                  02
                </Typography>
                <Typography
                  variant="h4"
                  style={{
                    marginTop: "4.125rem",
                    color: "black",
                    fontWeight: "bold",
                    marginLeft: "2rem",
                    fontFamily: "Inter",
                    fontWeight: 800,
                  }}
                >
                  Experiment
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    marginTop: "1.5rem",
                    color: "black",
                    marginLeft: "2rem",
                    fontFamily: "Inter",
                    fontWeight: 400,
                  }}
                >
                  Find ideas that excite you, experiment with technology and begin prototyping.
                </Typography>
                <Typography
                    variant="body1"
                    style={{
                      marginTop: "6rem",
                      color: "black",
                      marginLeft: "2rem",
                      fontFamily: "Inter",
                      fontWeight: 800,
                    }}
                  >
                    Read More
                  </Typography>
              </CardContent>
              <div // Add this div to create the circle quadrant
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: "12.8125rem",
                  height: "12.8125rem",
                  backgroundColor: "#fff",
                  borderTopLeftRadius: "100%",
                  opacity: "20%",
                }}
              />
            </Card>
          </Grid>)}
          {(box_flag!=2)?( <Grid
            item
            onClick={()=>{set_box_flag(2)}}
            style={{
              height: "29.3125rem",
              width: "8.8125rem",
              overflowX: "hidden",
              padding: 0,
              marginTop: "4.375rem",
              
            }}
          >
            <Card
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "1.5rem",
                display: "flex",
                backgroundColor: "#57BF43",
                boxShadow: "none",
                position: "relative",
              }}
            >
              <CardContent
                style={{
                  width: "8.8125rem",
                  maxHeight: "21.3125rem",
                  padding: 0,
                }}
              >
                <Typography
                  variant="h1"
                  style={{
                    color: "white",
                    fontFamily: "Inter",
                    fontWeight: 500,
                    marginLeft: "2rem",
                    marginTop: "3.125rem",
                  }}
                >
                  03
                </Typography>{" "}
              </CardContent>
              <div // Add this div to create the circle quadrant
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: "6.8125rem",
                  height: "8rem",
                  backgroundColor: "#fff",
                  borderTopLeftRadius: "100%",
                  opacity: "20%",
                }}
              />
            </Card>
          </Grid>
          ):(<Grid
            item
            style={{
              marginTop: "4.375rem",
              width: "39.0625rem",
              overflowX: "hidden",
              
             
              padding: 0,
              height: "29.3125rem",
            }}
          >
            <Card
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "1.5rem",
                display: "flex",
                backgroundColor: "#57BF43",
                boxShadow: "none",
                position: "relative",
              }}
            >
              <CardContent
                style={{
                  maxWidth: "26.625rem",
                  height: "100%",
                  padding: 0,
                }}
              >
                <Typography
                  variant="h1"
                  style={{
                    color: "white",
                    marginTop: "3.125rem",
                    marginLeft: "2rem",
                    fontFamily: "Inter",
                    fontWeight: 500,
                  }}
                >
                  03
                </Typography>
                <Typography
                  variant="h4"
                  style={{
                    marginTop: "4.125rem",
                    color: "white",
                    fontWeight: "bold",
                    marginLeft: "2rem",
                    fontFamily: "Inter",
                    fontWeight: 800,
                  }}
                >
                  Share your progress
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    marginTop: "1.5rem",
                    color: "white",
                    marginLeft: "2rem",
                    fontFamily: "Inter",
                    fontWeight: 400,
                  }}
                >
                Share updates with the community as you reach your milestones. 
                </Typography>
                <Typography
                    variant="body1"
                    style={{
                      marginTop: "6rem",
                      color: "white",
                      marginLeft: "2rem",
                      fontFamily: "Inter",
                      fontWeight: 800,
                    }}
                  >
                    Read More
                  </Typography>
              </CardContent>
              <div // Add this div to create the circle quadrant
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: "12.8125rem",
                  height: "12.8125rem",
                  backgroundColor: "#fff",
                  borderTopLeftRadius: "100%",
                  opacity: "20%",
                }}
              />
            </Card>
          </Grid>)}
        </Grid>):(<Grid
          container
          spacing={1}
          style={{
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
                variant="caption"
                style={{ fontFamily: "Inter", fontWeight: 500 }}
              >
                HOW IT WORKS
              </Typography>
            </Grid>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              style={{ marginBottom: "0rem", width: "83.75rem" }}
            >
              <Grid item style={{ maxWidth: "39.375rem" }}>
                <Typography
                  variant="h1"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 800,
                    color: "#292D32",
                  }}
                >
                  How it works ?
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            style={{
              maxWidth: "18.1875rem",

              marginTop: "5.0625rem",

              flexDirection: "column",
            }}
          >
            <div onClick={()=>set_creators_flag(true)}>
            <Typography
              variant="h5"
              style={{
                fontFamily: "Inter",
                fontWeight: 500,

                color: "#292D32",
              }}
            >
              Creators
            </Typography></div>
          
            <Typography
              variant="h5"
              style={{
                fontFamily: "Inter",
                fontWeight: 800,
                marginTop: "2.5rem",
                marginBottom: "20.5rem",
                color: "#292D32",
              }}
            >
              Investor
            </Typography>
            <Typography
              variant="body1"
              style={{
                fontFamily: "Inter",
                fontWeight: 400,
                marginBottom: "1rem",
                maxWidth: "18.1875rem",
              }}
            >
              For legal, compliances and other info simply dummy text of the
              printing and typesetting industry.
            </Typography>
            <Typography
              variant="body1"
              style={{ fontFamily: "Inter", fontWeight: 400 }}
            >
              Read our{""}
              <Button
                color="inherit"
                style={{
                  textTransform: "capitalize",
                  fontWeight: 800,
                  fontFamily: "Inter",
                  maxWidth: "18.1875rem",
                }}
                classes={{ root: classes.link }}
                href="#"
              >
                <u> Legal Guide</u>
              </Button>
            </Typography>
          </Grid>
          <Divider
            orientation="vertical"
            style={{
              marginLeft: "1.3125rem",
              color: "#C5C6CC",
              width: ".0625rem",
              height: "35rem",
              marginTop: "4.375rem",
              marginBottom: "4.375rem",
            }}
          />
          {box_flag == 0 ? (
            <Grid
              item
              style={{
                marginTop: "4.375rem",
                width: "39.0625rem",
                overflowX: "hidden",
                marginLeft: "3.75rem",
                marginRight: "1.875rem",
                padding: 0,
                height: "29.3125rem",
              }}
            >
              <Card
                
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "1.5rem",
                  display: "flex",
                  backgroundColor: "#408FF7",
                  boxShadow: "none",
                  position: "relative",
                }}
              >
                <CardContent
                  style={{
                    maxWidth: "26.625rem",
                    height: "100%",
                    padding: 0,
                  }}
                >
                  <Typography
                    variant="h1"
                    style={{
                      color: "white",
                      marginTop: "3.125rem",
                      marginLeft: "2rem",
                      fontFamily: "Inter",
                      fontWeight: 500,
                    }}
                  >
                    01
                  </Typography>
                  <Typography
                    variant="h4"
                    style={{
                      marginTop: "4.125rem",
                      color: "white",
                      fontWeight: "bold",
                      marginLeft: "2rem",
                      fontFamily: "Inter",
                      fontWeight: 800,
                    }}
                  >
                    Explore
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{
                      marginTop: "1.5rem",
                      color: "white",
                      marginLeft: "2rem",
                      fontFamily: "Inter",
                      fontWeight: 400,
                    }}
                  >
                    Sign up and explore ideas
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{
                      marginTop: "5.7rem",
                      color: "white",
                      marginLeft: "2rem",
                      fontFamily: "Inter",
                      fontWeight: 800,
                    }}
                  >
                    Read More
                  </Typography>
                </CardContent>
                <div // Add this div to create the circle quadrant
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: "12.8125rem",
                    height: "12.8125rem",
                    backgroundColor: "#fff",
                    borderTopLeftRadius: "100%",
                    opacity: "20%",
                  }}
                />
              </Card>
            </Grid>
          ) : (
            <Grid
              item
              style={{
                height: "29.3125rem",
                width: "8.8125rem",
                overflowX: "hidden",
                padding: 0,
                marginTop: "4.375rem",
                marginLeft: "3.75rem",
                marginRight: "1.875rem",
              }}
            >
              <Card
              onClick={()=>{set_box_flag(0)}}
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "1.5rem",
                  display: "flex",
                  backgroundColor: "#408FF7",
                  boxShadow: "none",
                  position: "relative",
                }}
              >
                <CardContent
                  style={{
                    width: "8.8125rem",
                    maxHeight: "21.3125rem",
                    padding: 0,
                  }}
                >
                  <Typography
                    variant="h1"
                    style={{
                      color: "white",
                      fontFamily: "Inter",
                      fontWeight: 500,
                      marginLeft: "2rem",
                      marginTop: "3.125rem",
                    }}
                  >
                    01
                  </Typography>{" "}
                </CardContent>
                <div // Add this div to create the circle quadrant
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: "6.8125rem",
                    height: "8rem",
                    backgroundColor: "#fff",
                    borderTopLeftRadius: "100%",
                    opacity: "20%",
                  }}
                />
              </Card>
            </Grid>
          )}
         {(box_flag!=1)?( <Grid
            item
            style={{
              height: "29.3125rem",
              width: "8.8125rem",
              overflowX: "hidden",
              padding: 0,
              marginTop: "4.375rem",
              marginRight: "1.875rem",
            }}
          >
            <Card
            onClick={()=>{set_box_flag(1)}}
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "1.5rem",
                display: "flex",
                backgroundColor: "#D2EC4C",
                boxShadow: "none",
                position: "relative",
              }}
            >
              <CardContent
                style={{
                  width: "8.8125rem",
                  maxHeight: "21.3125rem",
                  padding: 0,
                }}
              >
                <Typography
                  variant="h1"
                  style={{
                    color: "black",
                    fontFamily: "Inter",
                    fontWeight: 500,
                    marginLeft: "2rem",
                    marginTop: "3.125rem",
                  }}
                >
                  02
                </Typography>{" "}
              </CardContent>
              <div // Add this div to create the circle quadrant
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: "6.8125rem",
                  height: "8rem",
                  backgroundColor: "#fff",
                  borderTopLeftRadius: "100%",
                  opacity: "20%",
                }}
              />
            </Card>
          </Grid>
          ):(<Grid
            item
            style={{
              marginTop: "4.375rem",
              width: "39.0625rem",
              overflowX: "hidden",
              
              marginRight: "1.875rem",
              padding: 0,
              height: "29.3125rem",
            }}
          >
            <Card
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "1.5rem",
                display: "flex",
                backgroundColor: "#D2EC4C",
                boxShadow: "none",
                position: "relative",
              }}
            >
              <CardContent
                style={{
                  maxWidth: "26.625rem",
                  height: "100%",
                  padding: 0,
                }}
              >
                <Typography
                  variant="h1"
                  style={{
                    color: "black",
                    marginTop: "3.125rem",
                    marginLeft: "2rem",
                    fontFamily: "Inter",
                    fontWeight: 500,
                  }}
                >
                  02
                </Typography>
                <Typography
                  variant="h4"
                  style={{
                    marginTop: "4.125rem",
                    color: "black",
                    fontWeight: "bold",
                    marginLeft: "2rem",
                    fontFamily: "Inter",
                    fontWeight: 800,
                  }}
                >
                  Follow creators
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    marginTop: "1.5rem",
                    color: "black",
                    marginLeft: "2rem",
                    fontFamily: "Inter",
                    fontWeight: 400,
                  }}
                >
                  Tag the ideas you like and get access to a project’s prototype by the creators. 
                </Typography>
                <Typography
                    variant="body1"
                    style={{
                      marginTop: "6.1rem",
                      color: "black",
                      marginLeft: "2rem",
                      fontFamily: "Inter",
                      fontWeight: 800,
                    }}
                  >
                    Read More
                  </Typography>
              </CardContent>
              <div // Add this div to create the circle quadrant
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: "12.8125rem",
                  height: "12.8125rem",
                  backgroundColor: "#fff",
                  borderTopLeftRadius: "100%",
                  opacity: "20%",
                }}
              />
            </Card>
          </Grid>)}
          {(box_flag!=2)?( <Grid
            item
            onClick={()=>{set_box_flag(2)}}
            style={{
              height: "29.3125rem",
              width: "8.8125rem",
              overflowX: "hidden",
              padding: 0,
              marginTop: "4.375rem",
              
            }}
          >
            <Card
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "1.5rem",
                display: "flex",
                backgroundColor: "#57BF43",
                boxShadow: "none",
                position: "relative",
              }}
            >
              <CardContent
                style={{
                  width: "8.8125rem",
                  maxHeight: "21.3125rem",
                  padding: 0,
                }}
              >
                <Typography
                  variant="h1"
                  style={{
                    color: "white",
                    fontFamily: "Inter",
                    fontWeight: 500,
                    marginLeft: "2rem",
                    marginTop: "3.125rem",
                  }}
                >
                  03
                </Typography>{" "}
              </CardContent>
              <div // Add this div to create the circle quadrant
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: "6.8125rem",
                  height: "8rem",
                  backgroundColor: "#fff",
                  borderTopLeftRadius: "100%",
                  opacity: "20%",
                }}
              />
            </Card>
          </Grid>
          ):(<Grid
            item
            style={{
              marginTop: "4.375rem",
              width: "39.0625rem",
              overflowX: "hidden",
              
             
              padding: 0,
              height: "29.3125rem",
            }}
          >
            <Card
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "1.5rem",
                display: "flex",
                backgroundColor: "#57BF43",
                boxShadow: "none",
                position: "relative",
              }}
            >
              <CardContent
                style={{
                  maxWidth: "26.625rem",
                  height: "100%",
                  padding: 0,
                }}
              >
                <Typography
                  variant="h1"
                  style={{
                    color: "white",
                    marginTop: "3.125rem",
                    marginLeft: "2rem",
                    fontFamily: "Inter",
                    fontWeight: 500,
                  }}
                >
                  03
                </Typography>
                <Typography
                  variant="h4"
                  style={{
                    marginTop: "4.125rem",
                    color: "white",
                    fontWeight: "bold",
                    marginLeft: "2rem",
                    fontFamily: "Inter",
                    fontWeight: 800,
                  }}
                >
                 Notifications
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    marginTop: "1.5rem",
                    color: "white",
                    marginLeft: "2rem",
                    fontFamily: "Inter",
                    fontWeight: 400,
                  }}
                >
                Receive notifications when a project you like is ready to raise funds
                </Typography>
                <Typography
                    variant="body1"
                    style={{
                      marginTop: "5.7rem",
                      color: "white",
                      marginLeft: "2rem",
                      fontFamily: "Inter",
                      fontWeight: 800,
                    }}
                  >
                    Read More
                  </Typography>
              </CardContent>
              <div // Add this div to create the circle quadrant
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: "12.8125rem",
                  height: "12.8125rem",
                  backgroundColor: "#fff",
                  borderTopLeftRadius: "100%",
                  opacity: "20%",
                }}
              />
            </Card>
          </Grid>)}
        </Grid>)}
      
      </ThemeProvider>
    </>
  );
}

export default Howitworks;
