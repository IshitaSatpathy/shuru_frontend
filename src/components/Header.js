import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import EastIcon from '@mui/icons-material/East';
import Logo from './logo.js'
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
function Header() {
  const theme = createMuiTheme({
    typography: {
      caption: {
        fontSize: "calc(12.80/16*1rem)",
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
        fontSize: ".95rem",
      },
    },
    spacing: (factor) => `${0.8 * factor}rem`,
  });
  return (
    <ThemeProvider theme={theme}>
    <AppBar position="sticky" elevation={0} style={{ backgroundColor: '#EDEEF1',maxWidth: "83.75rem",margin:"auto",marginTop:'1.2rem', justifyContent: 'center'}}>
      <Toolbar style={{ display: 'flex', gap: '1rem', width: "83.75rem",marginTop:'calc(24/1024*100vh)',padding:0,margin:"auto",justifyContent:'space-between' }}>
        <Button color="inherit" style={{  textTransform: 'capitalize', borderRadius: '.75rem', color: 'black', backgroundColor: 'white', height: '3rem',width:'7rem' }}>
        <Logo/>
        </Button>
       <a href="#subscribe" style={{ textDecoration: 'none' }}>
        <Button color="inherit" style={{  textTransform: 'none', borderRadius: '.75rem', color: 'white', backgroundColor: '#0124F1', height: '3rem',width:'11rem' }}>
         <Typography variant='body1' style={{fontFamily:'Inter',fontFamily:500,}}>Subscribe</Typography>  &nbsp;<EastIcon color="white;" />
        </Button></a>
      </Toolbar>
    </AppBar>
    </ThemeProvider>
  );
}

export default Header;
