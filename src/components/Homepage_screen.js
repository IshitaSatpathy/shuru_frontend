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
import interRegular from '../static/Inter-Regular.ttf';
import interBold from '../static/Inter-Bold.ttf';
import interExtraBold from '../static/Inter-ExtraBold.ttf';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  circle: {
    backgroundColor: blueGrey[50],
    borderRadius: "50%",
    height: "2.5rem",
    width: "2.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
   
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
    height: "2.5rem",
    width: "2.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    
  },
}));
function HomepageScreen() {
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
              
              marginBottom: 0,
            }}
          >
            <Grid item style={{ position: "relative" }}>
              <Typography variant="caption" style={{fontFamily:'Inter',fontWeight:500,color:'#292D32'}}>PROJECTS</Typography>
            </Grid>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              style={{ marginBottom: "0rem", width: "83.75rem" }}
            >
              <Grid item style={{ maxWidth: "39.375rem" }}>
                <Typography variant="h1"  style={{ fontFamily:'Inter',fontWeight:800,color:'#292D32' }}>
                  Popular projects
                </Typography>
              </Grid>
             
            
           
           
            <Grid item align="right" >
                

                  <Typography
                    variant="h5"
                    align="right"
                   
                    style={{
                      fontWeight:500,
                      display: "block",
                      
                      fontFamily:'Inter',
                      
                      color:'#292D32'
                    }}
                  >
                   <u>View all projects</u>
                  </Typography>
              </Grid>
              </Grid>
          </Grid>
        <Grid
          item
          
          style={{
            display: "flex",
            marginTop:'3.125rem',
            flexDirection: "column",
            width:'48.88059701%',
            marginRight: "1.875rem",
            padding:0,
            marginBottom:'3.125rem'
          }}
        >
          <Card
            style={{
              flexGrow: 1,
              borderRadius: "1.5rem",
              backgroundImage: `url(https://s3-alpha-sig.figma.com/img/fd91/c8c4/12dfe660a4361eea5b971d6ecf578bba?Expires=1686528000&Signature=LiaEJdlKBlajuYASgqwnT9knfv1lik98uSuYU2dNgNXcZwh8Ica7oShs-YEK-C8RKb0X-i7IQmqpvp-aDDn4tQvAQoy5ZSHC5New-8q01EupaXSmOyEQbYg~2kdo~K4NChGcrArS4~9kUn07KxWCQ66U62bwG8lc7zkueKZSKMBNSc2qdBLtGZ0Vjc353kE4cWx7rW1osoG2vxNqnUbu9NWyHe8YkiJzjVclRnbEUIV1kOWgHLUtwiqEpO580YUBivS9TScOkt9bJhC~3P2xBlYGSV~IWlThedurHXCvLUuIF1chaF4ecNdRvT6qcELC10Udy4qNy-Qu2xxEhSYUPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow:'none'
            }}
          >
            <CardContent style={{ width:'100%',padding:0 }}>
              <Typography
                variant="h2"
                gutterBottom
                style={{ color: "white", fontWeight: 800,fontFamily:'Inter',marginLeft:'1.875rem',marginTop:'2.5rem'}}
              >
                Hero Software
              </Typography>
              <Typography
              variant="body1"
                style={{
                  fontFamily: "Inter",
                  color: "white",
                  marginTop:'1rem',
                  marginLeft:'1.875rem',
                  fontWeight:400,
                  maxWidth:'93.38167%',
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
                  borderRadius: ".75rem",
                  color: "rgba(41, 45, 50, 1)",
                  marginTop: "1.50626rem",
                  marginLeft:'1.875rem',
                }}
              >
                <Typography
                variant='caption'
                  style={{
                    textTransform: "capitalize",
                    fontWeight: 400,
                    fontFamily: "Inter",
                  }}
                >
                  Pledge
                </Typography>
                &nbsp;
                <Typography
                variant='caption'
                  style={{
                    
                    fontWeight: 800,
                    fontFamily: "Inter",
                  }}
                >
                  {" "}
                  US$20,045
                </Typography>
              </Button>
              <Grid container style={{marginLeft:'1.875rem',marginTop:'18rem',display:'flex',flexDirection:'row',marginBottom:'2.5rem' }}>
              <Typography
                style={{
                  
                  marginTop:'0.9225rem',
                  fontWeight: 800,
                  color: "#FFFFFF",
                  fontFamily: "Inter",
                  
                }}
              >
                Read more
              </Typography>
              <IconButton
                aria-label="east"
                styles={{marginLeft:'.5rem'}}
              >
                <div className={classes.circle}>
                  <EastIcon color="background: #292D32;" />
                </div>
              </IconButton>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          container
          direction="column"
          
          style={{ display: "flex",width:'48.88059701%',marginTop:'3.125rem',padding:0,marginBottom:'3.125rem',justifyContent:"space-between"}}
        >
          <Grid
            item
            style={{ flexGrow: 1,width:'100%'}}
          >
            <Card
              style={{
                width:'100%',
                borderRadius: "1.5rem",
                backgroundImage: `url(https://s3-alpha-sig.figma.com/img/0411/d51c/ba699a29d4e6a814bbbc5e74cd825f86?Expires=1686528000&Signature=TGEF0BRkvq8gboKAQRG~2YuD~L5z5vox4jwwmvRNUxT0480Q6HtvaLixgu-eZWGEFkotM0wHOHaG-bNKv4ZvrOtlDxNkAJEtCvrgfz4LiQJTkDybUKx-sdEaaFGMk~E1zmlFJX~RrJrf8nUBlUXeaDly9wLCU~ELInvTRdcI9XBR0UixuNEFPIDncOVvzf9APLJOX-BwvTXXhElLnAYhzUPVc1MAVa~mD6O1QU0ElJL720ezdmQfdvKur29E~2ebg6-fqfHdoWOxrwdCuJ18GZMVyChpenSWMM7-4g9FDWRjn0--UT3O-hbIHbPo1sqhKh8yodpVG7Fn5yxR7u44zA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow:'none'
              }}
            >
              <CardContent style={{ width:'100%',padding:0 }}>
                
                  <Typography
                    
                    variant="h2"
                    style={{
                      color: "white",
                      fontWeight: 800,
                  
                      maxWidth:'21rem',
                      fontFamily: "Inter",
                      marginLeft:'1.875rem',
                      marginTop:'2.5rem'

                      
                    }}
                  >
                    The Art of Mark Schultz: Carbon 5
                  </Typography>
               

                  <Button
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(5dp)",
                  opacity: 0.9,
                  borderRadius: ".75rem",
                  color: "rgba(41, 45, 50, 1)",
                  marginTop: "1.50626rem",
                  marginLeft:'1.875rem',
                  marginBottom:'1.675rem'
                }}
              >
                <Typography
                variant='caption'
                  style={{
                    textTransform: "capitalize",
                    fontWeight: 400,
                    fontFamily: "Inter",
                  }}
                >
                  Pledge
                </Typography>
                &nbsp;
                <Typography
                variant='caption'
                  style={{
                    
                    fontWeight: 800,
                    fontFamily: "Inter",
                  }}
                >
                  {" "}
                  US$20,045
                </Typography>
              </Button>
                <IconButton aria-label="east" style={{marginLeft:'25.05rem'}}>
                  <div className={classes.circle1}>
                    <EastIcon color="background: #292D32;" />
                  </div>
                </IconButton>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            style={{ flexGrow: 1,width:'100%',marginTop:'1.675rem'}}
          >
            <Card
              style={{
                width:'100%',
                borderRadius: "1.5rem",
                backgroundImage: `url(https://s3-alpha-sig.figma.com/img/f801/a43b/c8db8db49bb6eb9b3e9b72bf0cede889?Expires=1686528000&Signature=Xyd6g5MvxZiZbBGz1KhCj3VCGiYLMJfKMiIQ5xne7~~9VIFFWVui5rbymJ~px92Op0Okh132SnQ2nMKjqY8Sr6wzMaV5XlaF9HYGycQCXsdb3DIxBut95k-QNnarfByO-O3HBjUA8p1~C3iqiQK~zOr7RfPku7Oltzjy739ZRTewTvWgRmVOlkz0o03u2Ccz1-rm5mirUHAUVaPi67ajIpR86nPhDL35A9BHvAvhMxEFuyyac~IMvpAlxzIRTrSOvhfh9xF3P0H~EZqf8p36xQAyIxt07SkEDTHg9jeFFS4pkXxzwI5B-Du6ySWwEnRYt6NUkvM7Ott0CiunbVgDzw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow:'none'
              }}
            >
              <CardContent style={{ width:'100%',padding:0 }}>
                
                  <Typography
                    
                    variant="h2"
                    style={{
                      color: "white",
                      fontWeight: 800,
                  
                      maxWidth:'21rem',
                      fontFamily: "Inter",
                      marginLeft:'1.875rem',
                      marginTop:'2.5rem'

                      
                    }}
                  >
                    Multiverse – The art of Aleksi Briclot
                  </Typography>
               

                  <Button
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(5dp)",
                  opacity: 0.9,
                  borderRadius: ".75rem",
                  color: "rgba(41, 45, 50, 1)",
                  marginTop: "1.50626rem",
                  marginLeft:'1.875rem',
                  marginBottom:'1.675rem'
                }}
              >
                <Typography
                variant='caption'
                  style={{
                    textTransform: "capitalize",
                    fontWeight: 400,
                    fontFamily: "Inter",
                  }}
                >
                  Pledge
                </Typography>
                &nbsp;
                <Typography
                variant='caption'
                  style={{
                    
                    fontWeight: 800,
                    fontFamily: "Inter",
                  }}
                >
                  {" "}
                  US$20,045
                </Typography>
              </Button>
                <IconButton aria-label="east" style={{marginLeft:'25.05rem'}}>
                  <div className={classes.circle1}>
                    <EastIcon color="background: #292D32;" />
                  </div>
                </IconButton>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
     
      </ThemeProvider>
    </>
  );
}

export default HomepageScreen;
