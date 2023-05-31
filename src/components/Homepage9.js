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
function HomepageScreen9() {
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
            
            margin: "auto",
            position: "relative",
            maxWidth: "83.75rem",
            marginBottom:'3.325rem'
          }}
        >
        <Grid
            item
            style={{
              maxWidth: "48.88%",
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
                ABOUT
              </Typography>
            </Grid>
            <Grid
              container
              justifyContent="space-between"
              
              style={{ marginBottom: "0rem", width: "100%", padding: 0 }}
            >
              <Grid item style={{ maxWidth: "36.625rem", padding: 0 ,marginTop:'.6rem'}}>
                <Typography
                  variant="h1"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 800,
                    color: "#292D32",
                  }}
                >
                  Back the project, take the ride
                </Typography>
              </Grid>
              <Grid item style={{ maxWidth: "39rem", padding: 0,marginTop:'1.5rem' }}>
                <Typography
                  variant="body1"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 400,
                    color: "#292D32",
                  }}
                >
                  Shuru, in Sanskrit means <b>the start</b> ,<b>to start</b> or <b>the beginning.</b><br></br><br></br>

At Shuru we believe in getting started with just an idea. We approach this with a unique perspective where design fiction as an imagination framework, and technology as a medium, come together. We create a playground for creative expression and experiments where innovation and culture can evolve.<br></br><br></br>

As a community, we hope to be the starting point for creators and investors to build upon ideas they’re passionate about. 

                </Typography>
              </Grid>
              <Grid item style={{ maxWidth: "39rem", padding: 0,marginTop:'3.875rem' }}>
                <Typography
                  variant="h5"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    color: "#292D32",
                  }}
                >
                  <u>Learn about us </u>

                </Typography>
              </Grid>
            </Grid>
          </Grid>
        <Grid
          container
          style={{
            width: "48.88%",
            height: "40.0625rem",
            marginTop: "4.175rem",
            
          }}
        >
          <Card
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "1.5rem",
              display: "flex",
              backgroundColor: "white",
              boxShadow:'none'
            }}
          >
            <CardContent
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "white",
              }}
            >
              {/* <Typography
                variant="h2"
                style={{
                  marginLeft: "2.1rem",
                  marginTop: "2.9rem",
                  fontWeight: "bold",
                }}
              >
                Join 23K Creators
              </Typography>
              <Grid
                container
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "nowrap",
                }}
              >
                <Grid
                  container
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <Grid
                    item
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginLeft: "2.1rem",
                      marginTop: "2.9rem",
                    }}
                  >
                    <Avatar
                      style={{ width: "4.5rem", height: "4.5rem" }}
                      src="https://s3-alpha-sig.figma.com/img/9e1a/daf4/78654b14e4469a5261557e196b5a6b9d?Expires=1684713600&Signature=M3RDxLOe~vnZcaBCKIEhKqPyMe6SSc~0fb3LH2YypDAPTJGcP-i6HJ1WRm0UqIlixGM5x5pXy89vHRTzpLVfKLSKxb384KadA1tbqGbL6GdMySwJlUqcHQVYAMJHPuGCH6u8RT9YRIMT7Q2CDB5u8hBSoyh0d7oxlko0AreXFrD1uTAb7HsQW0Z3xuVZoXAAx6QXmjaiJtZpfDLkRlSvr65kel6U5M1IAdLFz-TG8SrDP74Rm2x4cS1xhxAopmEOfOyToiUs5LdhtKRfWjts87e5IlrQ1Rh18dxvS3wSt~PhGcHgqZKqu62~gE5AVABBLPoump0SSt6XIouGhMtxjw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    />
                    <Grid
                      item
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: "1.1rem",
                      }}
                    >
                      <Typography
                        variant="body"
                        style={{ fontWeight: "bold", marginTop: ".4rem" }}
                      >
                        Brooklyn Simmons
                      </Typography>
                      <Typography
                        variant="body"
                        style={{
                          marginTop: ".4rem",
                          color: "#292D32",
                          fontStyle: "regular",
                          fontFamily: "initial",
                        }}
                      >
                        23 Projects
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginLeft: "2.1rem",
                      marginTop: "2.9rem",
                    }}
                  >
                    <Avatar
                      style={{ width: "4.5rem", height: "4.5rem" }}
                      src="https://s3-alpha-sig.figma.com/img/190a/2dee/4095a93c7bad0f93c8d59ae354432b8c?Expires=1684713600&Signature=qliAohhqp7elhMdUaHA0~lKZk1Wetlb0OibbOHIiJOq4IuwDyCploiaNxu1xCj53r3ofZJFI9ZNh54klOF1fdjdcmBItwChZMlArKCfTEuMdDXyLfG24m9AT9HD4hvMzDld0A6jJbJko~GVe4b~JE6Jctk3h-VyDrLX4A2Nx0MXiCctrflpm11Wo3WLSFMdUkNBbWZHDECDsPPBrcl7lB~puj9HJ3ShdrcB7QCPNdKKV2TOGegiiSWKkfmDD3bZ75C-vrqXKhPGZfVJ7HM31EkR9KGVw4Kc6o86CB6FHcBqwAs3uMi5usfalZmJLqdAVY0yHljQgr3gR69E4Qgyfng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    />
                    <Grid
                      item
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: "1.1rem",
                      }}
                    >
                      <Typography
                        variant="body"
                        style={{ fontWeight: "bold", marginTop: ".4rem" }}
                      >
                        Kathyrn Murphy
                      </Typography>
                      <Typography
                        variant="body"
                        style={{
                          marginTop: ".4rem",
                          color: "#292D32",
                          fontStyle: "regular",
                          fontFamily: "initial",
                        }}
                      >
                        23 Projects
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginLeft: "2.1rem",
                      marginTop: "2.9rem",
                    }}
                  >
                    <Avatar
                      style={{ width: "4.5rem", height: "4.5rem" }}
                      src="https://s3-alpha-sig.figma.com/img/9317/0b7a/6a626db87e981f177d5f3a63fb2a9a0e?Expires=1684713600&Signature=O2O~IJhMgdiZDN3G6iqOGuTHSBGc2DQVyyfU-IOmHkJ-VU52Da1Rd9UKC0SFeY7UOrPVTDKNKYtXCf0yRfJdrETs8MhKfFIxI4tIWb2fZtHsU9VBijBEFkBLpv41U3UEih-sxaZkZ9U4pL1IQUyRUGsx0lFNCf6WeLRddu5toymBV8qZm8Xkuam~lv4C5tvut1WNygNnIgdjJDhZFwoygguzaJuieyikF0K8ggj61HGiTxRB8QTa80mlp8Tc-cPAfth7-ThIWiPOHiRhbFiK3oUqKr8XdIE0jKLqs8FOuNS2qgXN7QG1GBfP2w1ZUsINTF1VU1FRyeTij4FwVpmO5Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    />
                    <Grid
                      item
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: "1.1rem",
                      }}
                    >
                      <Typography
                        variant="body"
                        style={{ fontWeight: "bold", marginTop: ".4rem" }}
                      >
                        Marvin Mckinney
                      </Typography>
                      <Typography
                        variant="body"
                        style={{
                          marginTop: ".4rem",
                          color: "#292D32",
                          fontStyle: "regular",
                          fontFamily: "initial",
                        }}
                      >
                        23 Projects
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginLeft: "2.1rem",
                      marginTop: "2.9rem",
                    }}
                  >
                    <Avatar
                      style={{ width: "4.5rem", height: "4.5rem" }}
                      src="https://s3-alpha-sig.figma.com/img/ec96/3012/4f4c9657ca9fe3a60c1d35f1851fe293?Expires=1684713600&Signature=lt13x83XezeckEsJeajXStPaG53NCNA6HUr2N~5DGTlxLdN8k7sidLQYp~bU2lqHbtE1mIW6ILCNAdHqwGf9bej6Dt8dOTQ67VqZhMh34FVi68Kg6jI6T4QZBCDY12Pu26k5wvQri5JpKhnp2GP-xVdbibc3LnM9G6fQkcpl8OmhcMUio8NdymA6tPqE3cTUhr3vXCWJpKVkkNEVbEfSBMd8aSir9Jk-JnPaeHYFKRMw64fW0o8qSGJWG2kRik5zvpVq18IthV44f0PWXGGoHqBjHydQZ8KRFYIM8pH44voI6norIQDVDef52O5M-SMIIAXLOZDuClmBtqHloFtQ9g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    />
                    <Grid
                      item
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: "1.1rem",
                      }}
                    >
                      <Typography
                        variant="body"
                        style={{ fontWeight: "bold", marginTop: ".4rem" }}
                      >
                        Robert Fox
                      </Typography>
                      <Typography
                        variant="body"
                        style={{
                          marginTop: ".4rem",
                          color: "#292D32",
                          fontStyle: "regular",
                          fontFamily: "initial",
                        }}
                      >
                        23 Projects
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  container
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <Grid
                    item
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginLeft: "2.1rem",
                      marginTop: "2.9rem",
                    }}
                  >
                    <Avatar
                      style={{ width: "4.5rem", height: "4.5rem" }}
                      src="https://s3-alpha-sig.figma.com/img/e03f/8edc/ec9d38b05340bb399f63dbd906ba0313?Expires=1684713600&Signature=WSVWIKsovtK1PEp6D3loOJ2IWvby1pEmj-79EaLrNvSVczhDiwchqlPeOniJEeMWoSFPGN79IC3-OTcpZ5ggA8aNGZT4~IeJL3jzBOlaRJMulpWlQc~TrdgtCO7n-gLRuWEU56ZvMoe9flenmG5o2eUL5l1~zK5HKVAgFHM6NsDmeTJye~5I~-QqGrZqmcZUE70VSftgWdFqLGy9ONyBln9vPpFOWtbFseHv0-E2ByUYWvMGeuUClsDL7ME3r-mY9MO0nnaHhd6-ILekxSO-1O0OXkBJSe6uRfz0BOP72mEg01XviyyK3qCLRJLG4G9Y4GouBfsjDnUWRRGqBUOIRg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    />
                    <Grid
                      item
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: "1.1rem",
                      }}
                    >
                      <Typography
                        variant="body"
                        style={{ fontWeight: "bold", marginTop: ".4rem" }}
                      >
                        Brooklyn Simmons
                      </Typography>
                      <Typography
                        variant="body"
                        style={{
                          marginTop: ".4rem",
                          color: "#292D32",
                          fontStyle: "regular",
                          fontFamily: "initial",
                        }}
                      >
                        23 Projects
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginLeft: "2.1rem",
                      marginTop: "2.9rem",
                    }}
                  >
                    <Avatar
                      style={{ width: "4.5rem", height: "4.5rem" }}
                      src="https://s3-alpha-sig.figma.com/img/6a28/dc52/f859c94120cf23588bf4bec5d12da394?Expires=1684713600&Signature=TI8Q-YWcwetixu9WootXwGarAwr73yE7bXXVNHm4faIRrr-ehi2A86qEe8ekk2DqG5Z4cT53zqACBdcC5NyTHqXXAAFTqfoH-3hFmf0sD5fXc3pL63q6~bMYxdntqkPqk8j6Y5wVJcRH9h7~y-oaGhd2KyN1gUquMJYX83mW7Dc2Wi0pzKx7TLbqg3xezg4m9GHRwKNCRbtDW~ZwTY2HbX6o~Msv3KYIpff1HSgC87ziIQQunNjOhicRvdyxhdRuz6PGZ8tyF79-nytbUGnAm6ODb9EMgylJVN5t9xgbPu1VBJUoaPauTbdXMOpK0VGSKkWELF7kFaRVhQFj3OmG1g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    />
                    <Grid
                      item
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: "1.1rem",
                      }}
                    >
                      <Typography
                        variant="body"
                        style={{ fontWeight: "bold", marginTop: ".4rem" }}
                      >
                        Kathyrn Murphy
                      </Typography>
                      <Typography
                        variant="body"
                        style={{
                          marginTop: ".4rem",
                          color: "#292D32",
                          fontStyle: "regular",
                          fontFamily: "initial",
                        }}
                      >
                        23 Projects
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginLeft: "2.1rem",
                      marginTop: "2.9rem",
                    }}
                  >
                    <Avatar
                      style={{ width: "4.5rem", height: "4.5rem" }}
                      src="https://s3-alpha-sig.figma.com/img/3702/5888/c16b24afb838108c87efe0ae26b3e002?Expires=1684713600&Signature=GCE1k9bZ3kFCKr6Nfpa56wA0ppMMlfLqjAuaGD6X6VmCJP~WBRMSrxfcvXToOam4scbOLCicwKNAEnoadqsBYq-vxnRov50RT9LtxscA-ym~0CCLmG08WyLGUJpw77-DisosX1ynRQlTSna7f9eBFuyqlJz7zQYp-zIiNGbEyGGSE2XWFTQsV8gjqX~~cQL5E5f1eQRsWBbr9N8Kr9HOdhR0XOdK4HGVL18jkxuSSgFzS~TYK6LOevR1pA5YfoURcaB7Eb7EXBkl2OvgCOv-7Pj3DGc9IKJr-oEHLRLTFZu5wc0CkF61Fpzgp7EMyWTXnwJTfU2l7aYMPd1Sycq47w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    />
                    <Grid
                      item
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: "1.1rem",
                      }}
                    >
                      <Typography
                        variant="body"
                        style={{ fontWeight: "bold", marginTop: ".4rem" }}
                      >
                        Marvin Mckinney
                      </Typography>
                      <Typography
                        variant="body"
                        style={{
                          marginTop: ".4rem",
                          color: "#292D32",
                          fontStyle: "regular",
                          fontFamily: "initial",
                        }}
                      >
                        23 Projects
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginLeft: "2.1rem",
                      marginTop: "2.9rem",
                    }}
                  >
                    <Avatar
                      style={{ width: "4.5rem", height: "4.5rem" }}
                      src="https://s3-alpha-sig.figma.com/img/eef6/f842/5c3e7a384d115a0955d78a480efe0bbe?Expires=1684713600&Signature=AprBTVdTe1MVtRai3KnGodUl-jcmtVXG4Hd-R1i~OOPF3kqAigOnq4-C48VYnhwAetSZbNTnJVd-fFFQaR2Sx1BEM5FLYEab5rq3ylVzE11VcF18PbruNO8DhCjXlGfmW7aH-OzoM9A5~KsckIfAK51GVO6DQYOQCBCIQ-c8XP1S1Fu3SzVtW72kXPRMAIFVFyuye59-7DHQjmv76AJlLbkq0kbTBzhM8Y9RjIPE9CvltE89BFjk9z72E2P2RcZQpXN-9y5eZK~3NrWLnZuYS~HLWxWkIPhVpG3O65dnSWq~cRaH2vDgevXPZp~VhikUD292nRT3jQCysLOYyu6VTg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    />
                    <Grid
                      item
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: "1.1rem",
                      }}
                    >
                      <Typography
                        variant="body"
                        style={{ fontWeight: "bold", marginTop: ".4rem" }}
                      >
                        Robert Fox
                      </Typography>
                      <Typography
                        variant="body"
                        style={{
                          marginTop: ".4rem",
                          color: "#292D32",
                          fontStyle: "regular",
                          fontFamily: "initial",
                        }}
                      >
                        23 Projects
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid> */}
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      </ThemeProvider>
    </>
  );
}

export default HomepageScreen9;
