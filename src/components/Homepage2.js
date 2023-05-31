import React from "react";
import interRegular from '../static/Inter-Regular.ttf';
import interBold from '../static/Inter-Bold.ttf';
import interExtraBold from '../static/Inter-ExtraBold.ttf';
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
  '@font-face': {
    fontFamily: 'Inter',
    src: `
      url(${interRegular}) format('truetype'),
      url(${interBold}) format('truetype'),
      url(${interExtraBold}) format('truetype')
    `,
    fontWeight: 'normal',
    fontStyle: 'normal',
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
function HomepageScreen2() {
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
  const creators = [
    {
      name: "Creator1",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/4cc1/0024/bc195ddc64de7141f16a4986d80f5a1f?Expires=1685318400&Signature=U8NWivXL5KLfPQsZMxP1CXiT4dMupGzil3NoQwi1NqnJtWjqIPPUr9ruCO~Rxw4rNXaIh3HfMpvKXF4nWSRsMqMcE~WpPlpSefEN96BN7ymzn3jo2s9Dnkqw8zFY~0E1pMvbLVUfTYdqkfT1maxD5t5OyUxZ25qEiWUvJ2-itEICCj4q1AsW7FqrcN-Jd0~x-VpXATjgPjvUcMgQQWQz0yMOMW47vk516SdwR2Bu6RakAEUEUHl~CX-yaNEkGP7828yjrhHu~ZrGvFvdBQfxuwwIrZ7Yajf5of1dp1qpKcJZirQbg1hDerz~zmMK7o1CXDwzFUVVmaqvTqKRiL6Rug__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      name: "Creator2",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/5922/a16b/9c67743692bf36ea85861e2ee633b6ec?Expires=1685318400&Signature=fofRmQRpeePz1osak96MOdJ7C3yX938gWUrZGiHQuoIL9lX~ofdvFtADrLzZNc-1XM80PJ2D3rXSgSTWWZl7~h6Mg6NnXifYdOiLjwvvxsWdGDmWNwFgv3kmbVFlytmMHddBz3WZhOs9ywEw088A6aahn5u3TOTT9WPHEYAPY1nMNQzvY7EySPWJWtwg9AwKJHGatklM7t6NJesT2N7O7F2Ou~bfRmD04hsqKi1lV5twTord8OrMbjVNZ3XmTuU-dN1ZuIoYl~93iYAAbNazDNpzDDax9Nl5ACVRo4xZKJItvVCeIqogC999R9LTRX4gSMmNWa66yuiJcy8Db5N69g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      name: "Creator3",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/6e5f/4dff/78cfdda9a50ae35c427a9e5a7397f058?Expires=1685318400&Signature=mgz5CsfAI5~ilgALVdEU7C4MitjoTabcIivJW4oPbwnM~c7vxwD0j11cM~GiD8SWznR-oQApIJoWdLJ0Br27BZVO7Q6SOu17D8rjwYjDU7Q8amW6Ij8~3iGqSgzmJuK24riq2WSwslBncVZlMRRME7XL7rwB3kbeAFR3nI~yM2MxeJwUh-LPc2pUYCUlWUCHBHgifKvDjX1WMpI~k~6kKWYs4XEiCcjZwR0yxBqTkTHhcEzZ4NGTlTBgENuxk5skWPf0xtMc-zLan8oKJ8PzOcWja8bcvQJvYEZxa62Hdn-vPPHri93Pm~xvBF0kAL1hnQlidlqFwH1QiJFpmbheTQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      name: "Creator 4",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/d8a1/a04c/d29e41f55d3b4d2df60cd0b0b1861730?Expires=1685318400&Signature=MlvV53NOhXbzSgQyAq~jlJoDbdBuhE~BX2zah7jbMowRxMiLNAnKfOq5FDA3lkEwLcWLvSh-ewKWpdV2odq6PqxLEoRXS8eFMM~h8ikAmQURdRSb1B4II0w72-TOML~e0k82pkyURi~prLwyHzvqjgD8V8bF6fs8zgnR3drNCoc6ZE5AQ7v95w9nfai1WtRwh4kwrp599dRw4psdzR39~vnRof7DFKGcYiFA9NI23kIp4gZ-c4sRf7azzaVgZAneB9PQ9zGfsNKCQjBFbvJk7LVbIgSFRf0M7NPYViU48nnR4y2PQ-fYGNwKorVtcXKP9GxqEeYlP21plxohZSwm9g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
  ];

  const classes = useStyles();
  return (
    <div className='container1'>
      <ThemeProvider theme={theme}>
      
        <Grid
          container
          spacing={1}
          style={{
            justifyContent: "space-between",
            alignItems: "center",
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
              overflowX: "hidden",
              marginBottom: 0,
            }}
          >
            <Grid item style={{ position: "relative" }}>
              <Typography variant="caption" style={{fontFamily:'Inter',fontWeight:500,color:'#292D32'}}>OVERVIEW</Typography>
            </Grid>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              style={{ marginBottom: "0rem", width: "83.75rem" }}
            >
              <Grid item style={{ maxWidth: "39.375rem" }}>
                <Typography variant="h1"  style={{ fontFamily:'Inter',fontWeight:800,color:'#292D32' }}>
                  Bring a creative project to life.
                </Typography>
              </Grid>
             
            </Grid>
            <Grid container justifyContent="space-between" alignItems="center" style={{width:'83.75rem'}}>
            <Grid
              item
              style={{
                position: "relative",
                maxWidth: "30.9375rem",
                marginTop: "1rem",
              }}
            >
              <Typography variant="body1" style={{fontFamily:'Inter',fontWeight:400,color:'#292D32'}}>
                Shuru campaigns make ideas into reality. It’s where creators
                share new visions for creative work with the communities that
                will come together to fund them.
              </Typography>
              
            </Grid>
            <Grid item align="right" style={{ overflowX: "hidden" }}>
                <Grid container spacing="">
                {creators.map((creator, index) => (
    <Grid item key={creator.name} style={{ marginLeft: index !== 0 ? '-.85rem' : 0 }}>
      <Avatar style={{ border: ".2rem solid #EDEEF1", maxWidth: '2.5rem', maxHeight: '2.5rem', position: 'relative', zIndex: creators.length - index }} alt={creator.name} src={creator.imageUrl} />
    </Grid>
  ))}
                  <Typography
                    variant="body1"
                    align="right"
                    color="primary"
                    style={{
                      overflowX: "hidden",
                      display: "block",
                      marginTop:'.4rem',
                      fontFamily:'Inter',
                      marginLeft:'.7rem',
                      color:'#292D32'
                    }}
                  >
                   <b>+1342 </b> creators
                  </Typography>
                </Grid>
              </Grid>
              </Grid>
          </Grid>
          <Grid
            item
            style={{
              maxWidth: "26.6875rem",
              display: "flex",
              width: "26.6875rem",
              flexDirection: "column",
              height: "13.375rem",

              overflowX: "hidden",

              padding: 0,
              marginTop: "4.175rem",
            }}
          >
            <Card
              style={{
                flexGrow: 1,
                borderRadius: "1.5rem",
                backgroundColor: "#408FF7",
                boxShadow:'none'
              }}
            >
              <CardContent style={{ marginLeft: "3.6875rem", marginTop: "3.2875rem",padding:0 }}>
                <Typography
                  variant="h2"
                  style={{
                    color: "white",
                    fontWeight: 800,marginBottom:'0.4rem',fontFamily:'Inter'
                    
                  }}
                >
                  23.4K
                </Typography>
                <Typography
                  variant="h5"
                  style={{
                    color: "white",fontFamily:'Inter',fontWeight:400
                    
                   
                  }}
                >
                  projects funded
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            container
            direction="row"
            style={{
              width: "55.125rem",
              display: "flex",
              height: "13.375rem",
              overflowX: "hidden",
              padding: 0,
              justifyContent: "space-between",
              marginTop: "4.175rem",
            }}
          >
            <Grid
              item
              style={{
                width: "26.6875rem",
                height: "100%",
                overflowX: "hidden",
              }}
            >
              <Card
                style={{
                  height: "100%",
                  borderRadius: "1.5rem",
                  backgroundColor: "#D2EC4C",
                  boxShadow:'none'
                }}
              >
                 <CardContent style={{ marginLeft: "3.6875rem", marginTop: "3.2875rem",padding:0 }}>
                <Typography
                  variant="h2"
                  style={{
                    color: "black",
                    fontWeight: 800,marginBottom:'0.4rem',fontFamily:'Inter',color:'#292D32'
                    
                  }}
                >
                 $7.5M
                </Typography>
                <Typography
                  variant="h5"
                  style={{
                    color: "black",fontFamily:'Inter',fontWeight:400,color:'#292D32'
                    
                   
                  }}
                >
                  towards creative work
                </Typography>
              </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              style={{
                width: "26.6875rem",
                height: "100%",
                overflowX: "hidden",
              }}
            >
              <Card
                style={{
                  height: "100%",
                  borderRadius: "1.5rem",
                  backgroundColor: "#57BF43",
                  boxShadow:'none'
                }}
              >
                 <CardContent style={{ marginLeft: "3.6875rem", marginTop: "3.2875rem",padding:0 }}>
                <Typography
                  variant="h2"
                  style={{
                    color: "white",
                    fontWeight: 800,marginBottom:'0.4rem',fontFamily:'Inter'
                    
                  }}
                >
                  85.5k
                </Typography>
                <Typography
                  variant="h5"
                  style={{
                    color: "white",fontFamily:'Inter',fontWeight:400
                    
                   
                  }}
                >
                  pledges
                </Typography>
              </CardContent>
              </Card>
            </Grid>
          </Grid>

          <div
            style={{
              textAlign: "center",
              marginTop: "4.175rem",
              marginBottom: "7rem",
            }}
          >
            <Button
              color="inherit"
              style={{
                flex: 1,
                width: "12.125rem",
                textTransform: "capitalize",
                borderRadius: "0.75rem",
                color: "white",
                fontWeight: "bold",
                backgroundColor: "#292D32",

                marginRight: "2rem",
              }}
            >
              <Typography variant="body1" style={{ fontWeight: 800,fontFamily:'Inter',marginTop:'.2rem' ,marginBottom:'.2rem'}}>
                {" "}
                Explore Projects{" "}
              </Typography>{" "}
              &nbsp;
              <EastIcon color="white;" />
            </Button>
            <Button
              color="inherit"
              style={{ textTransform: "none", fontWeight: "bold" }}
              classes={{ root: classes.link }}
              href="#"
            >
              <Typography variant="body1" style={{ fontWeight: 800,fontFamily:'Inter',color:'#292D32' }}>
                {" "}
                <u> Start a project</u>
              </Typography>
            </Button>
          </div>
        </Grid>
       
      </ThemeProvider>
    </div>
  );
}

export default HomepageScreen2;
