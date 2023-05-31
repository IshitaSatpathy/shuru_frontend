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
      <Toolbar style={{ display: 'flex', gap: '1rem', width: "83.75rem",marginTop:'calc(24/1024*100vh)',padding:0,margin:"auto", }}>
        <Button color="inherit" style={{ flex: 1, textTransform: 'capitalize', borderRadius: '.75rem', color: 'black', backgroundColor: 'white', height: '3rem' }}>
        <Logo/>
        </Button>
        <Button color="inherit" style={{ flex: '1 0 38%', borderRadius: '.75rem', color: 'black', backgroundColor: 'white', justifyContent: 'space-between', height: '3rem' }}>
          <Typography variant="body1" align="left" style={{textTransform: 'capitalize',fontFamily:'Inter',marginLeft:'.75rem',fontFamily:500,color:'#292D32'}}>Menu</Typography>
          <MenuIcon style={{marginRight:'.75rem'}}/>
        </Button>
        <Button color="inherit" style={{ flex: 1, textTransform: 'capitalize', borderRadius: '.75rem', color: 'black', backgroundColor: 'white', height: '3rem' }}>
          <Typography variant='body1' style={{fontFamily:'Inter',fontFamily:500,color:'#292D32'}}>Categories</Typography>
        </Button>
        <Button color="inherit" style={{ flex: 1, textTransform: 'capitalize', borderRadius: '.75rem', color: 'black', backgroundColor: 'white', height: '3rem' }}>
          <Typography variant='body1' style={{fontFamily:'Inter',fontFamily:500,color:'#292D32'}}>Login/Signup</Typography>
        </Button>
        <Button color="inherit" style={{ flex: 1, textTransform: 'none', borderRadius: '.75rem', color: 'white', backgroundColor: '#0124F1', height: '3rem' }}>
         <Typography variant='body1' style={{fontFamily:'Inter',fontFamily:500,}}>Start a project</Typography>  &nbsp;<EastIcon color="white;" />
        </Button>
      </Toolbar>
    </AppBar>
    </ThemeProvider>
  );
}

export default Header;
