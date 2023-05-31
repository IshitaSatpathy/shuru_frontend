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
import interRegular from '../static/Inter-Regular.ttf';
import interBold from '../static/Inter-Bold.ttf';
import interExtraBold from '../static/Inter-ExtraBold.ttf';
import { IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { blueGrey } from "@mui/material/colors";
import EastIcon from "@mui/icons-material/East";
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
function HomepageScreen3() {
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
              <Typography variant="caption" style={{fontFamily:'Inter',fontWeight:500,color:'#292D32'}}>CATEGORIES</Typography>
            </Grid>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              style={{ marginBottom: "0rem", width: "83.75rem" }}
            >
              <Grid item style={{ maxWidth: "39.375rem" }}>
                <Typography variant="h1"  style={{ fontFamily:'Inter',fontWeight:800,color:'#292D32' }}>
                  Which categories interest you ?
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
                   <u>View all categories</u>
                  </Typography>
              </Grid>
              </Grid>
          </Grid>
       
        <Grid
          container
          
         
          style={{
            width: "100%",
            
            marginTop:'3.125rem',
            justifyContent:'space-between',
            marginBottom: "3.125rem",
          }}
        >
          <Grid
            container
            item
            
            flex-direction="row"
            style={{ width:'19.5625rem'}}
          >
            <Grid item style={{ width:'100%',marginBottom:'1.875rem' }}>
              <Card
                style={{
                  
                  borderRadius: "1.5rem",
                  backgroundImage: `url(https://s3-alpha-sig.figma.com/img/5f8e/9b21/c6be40f330cbbc110f2e5a909e59f6ed?Expires=1686528000&Signature=aJCs3fJn7gUvQYq8IKbKF9-7YmOpiAoOY6xe22ThHQ1WvbaOhTJTfk0l6nMST8YHzInBvrDCWis2w3PQldYuDUFxGm2UeHyf0wzgxUJjsPNg3h4JO737yqEzmC4cg8FM-SsSjCzgYJwN8PqCJoBAHXccKN13YfRweUyBYN3~2Xgc~oS1aADDTyh16PjNqBZod0o8OPFTbdX75zpMY2nsIIe2MfrwOaWGF4dDuXv2fzjU6vCUAjak6ItJxSob4CN0CQIRlWic5btpXAkDnSuJ4yPfTZvjrOqowoYZz3FGpzjHwWXOIY~Pg6JQT4PQ7Z4MCm-Re9u5-5imDK7kFH8uCA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width:'100%',
                  padding:0,
                  boxShadow:'none'
                }}
              >
                <CardContent style={{ position: "relative", padding:0,width:'100%' }}>
                  
                    <Typography
                      variant='h4'
                      style={{
                        color: "white",
                        fontWeight: 800,
                        
                        width: "77.31629393%",
                        
                        fontFamily: "Inter",
                        marginLeft:'1.25rem',
                        marginBottom:'20rem',
                        marginTop:'2rem'
                      }}
                    >Comics & illustration</Typography>
                  
                </CardContent>
              </Card>
            </Grid>
            <Grid item style={{ width:'100%' }}>
              <Card
                style={{
                  
                  borderRadius: "1.5rem",
                  backgroundImage: `url(https://s3-alpha-sig.figma.com/img/4dcf/afc1/1ab4574639c104bdfd3590d1353e3465?Expires=1686528000&Signature=l8Jv13733h1Kh0KOQblMWX5ZLNeNDg59RzwAYqChyvvMpvmNg~rLLQcMO0mvj45mazWHPTQSPVWi~jZYiKVNHi~6HAyEF8KS~c6dq0qO5TZAwtUwdWN3B4ptrivRa-PanTPUhLZ1fdpmbDD9wDPFMJQ7mEno1IbYbtBxZxzY-Osyi49wx5RByJjthofmtbOWDsWPWVIL5aKcJxcxOQQhQlvVVyZAuFkEI0olWv52d6jtj~uK9iF~wUu51fdmTc5D12E26EcCxhGnlsxEeJAmNMCmlqC3rkYtRKDVv7ooJPUQjtGPW4ypDwscGahmlf6w8J70mMb2veCrwdQw1cVNhg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width:'100%',
                  padding:0,
                  boxShadow:'none'
                }}
              >
                <CardContent style={{ position: "relative", padding:0,width:'100%' }}>
                  
                    <Typography
                      variant='h4'
                      style={{
                        color: "white",
                        fontWeight: 800,
                        
                        width: "77.31629393%",
                        
                        fontFamily: "Inter",
                        marginLeft:'1.25rem',
                        marginBottom:'16.5625rem',
                        marginTop:'2rem'
                      }}
                    >Food & Craft</Typography>
                  
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            item
            
            flex-direction="row"
            style={{ width:'19.5625rem'}}
          >
            <Grid item style={{ width:'100%',marginBottom:'1.875rem' }}>
              <Card
                style={{
                  
                  borderRadius: "1.5rem",
                  backgroundImage: `url(https://s3-alpha-sig.figma.com/img/ba7c/76bd/615a2866d81cb4922a67929925f20b22?Expires=1686528000&Signature=UIvBlY1Q36q-Ru3zc8YcsH61vwRfggZsgu9~THDGychijJvfmZiSK~4hj3NTfs~eMQipNPH3ox8JI4mxfD8KN4GEgJoHFuo7uP8D0dp7l1qTjbSzvdk-4kqqzqTAoiu7LGxFWBtyVatB4YiDEAUmQGFg8xxhkdOLYAeBqGQkqRYwFdmbV85rdpNt2GTUC1iLEkteBEsnqhDrD0ASj1JYyWQAJBV8HFz6NMEw9chgnEPgRGxU03sSYQ7BSmW6BobQwsCmMvQrWpCFIZKFkKTZ2Pl-EqkUeWJ5n5ryoRqgM4SpDexo1DQCFRENky8lpbNbCVg9xsMmWE6d-CseIaHeFQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width:'100%',
                  padding:0,
                  boxShadow:'none'
                }}
              >
                <CardContent style={{ position: "relative", padding:0,width:'100%' }}>
                  
                    <Typography
                      variant='h4'
                      style={{
                        color: "black",
                        fontWeight: 800,
                        
                        width: "77.31629393%",
                        
                        fontFamily: "Inter",
                        marginLeft:'1.25rem',
                        marginBottom:'16.5625rem',
                        marginTop:'2rem'
                      }}
                    >Arts</Typography>
                  
                </CardContent>
              </Card>
            </Grid>
            <Grid item style={{ width:'100%' }}>
              <Card
                style={{
                  
                  borderRadius: "1.5rem",
                  backgroundImage: `url(https://s3-alpha-sig.figma.com/img/0a7c/9fe6/3e5a972b2501284449cb36e9070ed544?Expires=1686528000&Signature=H9q~IOavuTx-9KwlTQjauz2KLD8k69XyYIaWANZf4ioyPRfAiYDRTqHTtykQZ1HZR7FApSRg0E1TgsjLViOqvK8vh~8YBC2cNw3p6hbeAcJOsGAO4KUiyv0A~y00j8syZl5i7~Ir~VwxIgVV8hobpgfUqs6WYUhy9doPvY~PcP2dGgWG69-BBO~cEt1gJX0XFnpa1-Cc03vFujFhmSmhkAGKRoasOSohL7IhLXYyiSsr3bPfWvOEa~amVfKlU8uOn7gAcbQj2eQzczJWcgHAgmgFW3OwRxucyyS6HcRVBNe8aecsrvVXs9L-DIwm0AvmmP9izLKIQJ0T1wdeHOZIrw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width:'100%',
                  padding:0,
                  boxShadow:'none'
                }}
              >
                <CardContent style={{ position: "relative", padding:0,width:'100%' }}>
                  
                    <Typography
                      variant='h4'
                      style={{
                        color: "white",
                        fontWeight: 800,
                        
                        width: "77.31629393%",
                        
                        fontFamily: "Inter",
                        marginLeft:'1.25rem',
                        marginBottom:'22.4rem',
                        marginTop:'2rem'
                      }}
                    >Games</Typography>
                  
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            item
            
            flex-direction="row"
            style={{ width:'19.5625rem'}}
          >
            <Grid item style={{ width:'100%',marginBottom:'1.875rem' }}>
              <Card
                style={{
                  
                  borderRadius: "1.5rem",
                  backgroundImage: `url(https://s3-alpha-sig.figma.com/img/f77f/13e3/72319a5e2b644f20400002b33ef480ed?Expires=1686528000&Signature=KUON5pIjF7bH~atEF7-KekdcUMEXztlA4Zbmy2o2Fm9WT8pJ-tSB8qn68rQdP2cL8pSavzEli2TPxqWvi9zy87e8rEUkFpgM4RDdQvGe6pGt~MqVbPghgAZx211-Qh8e~PwKw~dBIaondLtuNhTXGw9Z9VklqY4~mnXT1KiARpxONVpoKdEt78~tOXsy15bddSRXORDlRLt--BxLq2yrduFJezZaYk~8nhQgOWqcEZ3cC4NTLfG6T5nC2TvTQ8n0dBZq2glJfaTmm8lpIybfGZQgABt36W2F0T9J1RXuzMVt5RCvMc7XyMZmIunHqmJft2DXdIX7GYL8Lr7tfRdFyA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width:'100%',
                  padding:0,
                  boxShadow:'none'
                }}
              >
                <CardContent style={{ position: "relative", padding:0,width:'100%' }}>
                  
                    <Typography
                      variant='h4'
                      style={{
                        color: "white",
                        fontWeight: 800,
                        
                        width: "77.31629393%",
                        
                        fontFamily: "Inter",
                        marginLeft:'1.25rem',
                        marginBottom:'22rem',
                        marginTop:'2rem'
                      }}
                    >Design & Tech</Typography>
                  
                </CardContent>
              </Card>
            </Grid>
            <Grid item style={{ width:'100%' }}>
              <Card
                style={{
                  
                  borderRadius: "1.5rem",
                  backgroundImage: `url(https://s3-alpha-sig.figma.com/img/9a02/51d4/2159fb1d5e595969a0130391999c59f9?Expires=1686528000&Signature=pQzkPx3Wy0NUjRg0kbERoymBw33azE7FrpxkP6ZTgV33LqtGzZcvXL4BFuhcV6dbY1xW5zjOsBDRkyIuFJcPjRrQOVa2TBS9HBZpZLdFkau2amSpHQetk381-TGJX-IONNHPqAn8mwg67EGOUt0od4djySno8o3Z5Audy6LuK7NPh~6IbOwgTv1Uc1K3YSuI2Wsb56LhueUtvJYnnlWCsi~pglRB75KeVtmIIfy2KFTDX1dWZiwVJyvJxDl6DVL-hj4TiXvf9TnfMpE-OW5QICV7V14t7A0AX2Dx4EtEBJRPTK-Fmu9iyL7EwoOscP7SjoquasDXMZd6ItlRn4oBew__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width:'100%',
                  padding:0,
                  boxShadow:'none'
                }}
              >
                <CardContent style={{ position: "relative", padding:0,width:'100%' }}>
                  
                    <Typography
                      variant='h4'
                      style={{
                        color: "white",
                        fontWeight: 800,
                        
                        width: "77.31629393%",
                        
                        fontFamily: "Inter",
                        marginLeft:'1.25rem',
                        marginBottom:'16.5625rem',
                        marginTop:'2rem'
                      }}
                    >Publishing</Typography>
                  
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            item
            
            flex-direction="row"
            style={{ width:'19.5625rem'}}
          >
            <Grid item style={{ width:'100%',marginBottom:'1.875rem' }}>
              <Card
                style={{
                  
                  borderRadius: "1.5rem",
                  backgroundImage: `url(https://s3-alpha-sig.figma.com/img/715e/0b56/3f681bee08c64246e052ba9dcfdff051?Expires=1686528000&Signature=fny9qe0aTQ3~vshDBMcmnpbCQYO7N7W3LpOWLUho1JXl8ptGIthZcYcgoebADSMnbATVbIEiZiVNtC7zN4Wy0vsGP6iJtgCCRLmMnapGT~PG3dYg-dBx--sVdVn34Fvg8JqHCARM9FpTn7kqXfkcbAx-gW3gn5C4BL3-oJWDV8wQ4EHK5jQZ53Y0rQ2g0utYZ-5r4xuZ979O7BMKRZhDOOCWucrYlZJ4mRBjE6eeKyDWoj5NA~flAcyKU-yzvK96ms5ps4d87z0HjQ2BYUoJgin1T9zYfcA5HMB7XGVQiRbR9fIXb4KICYyrmeBhxA567nPzhEnaOF-8YH6hw9ZvBQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width:'100%',
                  padding:0,
                  boxShadow:'none'
                }}
              >
                <CardContent style={{ position: "relative", padding:0,width:'100%' }}>
                  
                    <Typography
                      variant='h4'
                      style={{
                        color: "white",
                        fontWeight: 800,
                        
                        width: "77.31629393%",
                        
                        fontFamily: "Inter",
                        marginLeft:'1.25rem',
                        marginBottom:'16.5625rem',
                        marginTop:'2rem'
                      }}
                    >Films</Typography>
                  
                </CardContent>
              </Card>
            </Grid>
            <Grid item style={{ width:'100%' }}>
              <Card
                style={{
                  
                  borderRadius: "1.5rem",
                  backgroundImage: `url(https://s3-alpha-sig.figma.com/img/aad7/fab8/ab744a8b0a584d7628dfd2e7190d6d26?Expires=1686528000&Signature=MAZZw8GsUtrqHb0SHZStRT2CTNdMH6IpCcmeVkvDm3piQMRAle1HVP8DYoaYJFtpg9yw6PlHyS~OoFd-AQ9gvgEqEtRlmPriJroXAuaVntZQcTe1-hmqcr9oBm126Gok-2Axd4e7elDdmGEiGq8vZnJeqS7bx8ePc~VDhrDXAqddhw8uRXneMoZfoURJzmMKv53fC2uv-OXTw01QVn9o-Z9bgPV7qbp99nL4Rb7l9ePWaM46OOIl5IQphFzeNmxxHR-0i29SfHLRgkcNk0p5oVqSl3tXZHD2n9LA70a-PhFHzo38OCzzxM0pFlsNPEjAm5LRc~SCSzwQuIMjPEy83A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width:'100%',
                  padding:0,
                  boxShadow:'none'
                }}
              >
                <CardContent style={{ position: "relative", padding:0,width:'100%' }}>
                  
                    <Typography
                      variant='h4'
                      style={{
                        color: "white",
                        fontWeight: 800,
                        
                        width: "77.31629393%",
                        
                        fontFamily: "Inter",
                        marginLeft:'1.25rem',
                        marginBottom:'22rem',
                        marginTop:'2rem'
                      }}
                    >Music</Typography>
                  
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      
      </ThemeProvider>
    </>
  );
}

export default HomepageScreen3;
