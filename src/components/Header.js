import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import EastIcon from '@mui/icons-material/East';
import Logo from './logo.js'
import { makeStyles } from '@material-ui/core/styles';
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
        fontSize: "calc(16/16*1rem)",
      },
    },
    spacing: (factor) => `${0.8 * factor}rem`,
  });
  return (
    <ThemeProvider theme={theme}>
    <AppBar position="static" elevation={0} style={{ backgroundColor: '#EDEEF1' }}>
      <Toolbar style={{ display: 'flex', gap: '1rem', marginLeft: "3.4722vw", marginRight: '3.4722vw',marginTop:'calc(24/1024*100vh)', justifyContent: 'space-between',padding:0 }}>
        <Button color="inherit" style={{ flex: 1, textTransform: 'capitalize', borderRadius: '1rem', color: 'black', backgroundColor: 'white', height: '2.3rem' }}>
        <Logo/>
        </Button>
        <Button color="inherit" style={{ flex: '1 0 40%', borderRadius: '1rem', color: 'black', backgroundColor: 'white', justifyContent: 'flex-start', height: '2.3rem' }}>
          <Typography variant="body1" align="left" style={{textTransform: 'capitalize'}}>Menu</Typography>
        </Button>
        <Button color="inherit" style={{ flex: 1, textTransform: 'capitalize', borderRadius: '1rem', color: 'black', backgroundColor: 'white', height: '2.3rem' }}>
          <Typography variant='body1'>Categories</Typography>
        </Button>
        <Button color="inherit" style={{ flex: 1, textTransform: 'capitalize', borderRadius: '1rem', color: 'black', backgroundColor: 'white', height: '2.3rem' }}>
          <Typography variant='body1'>Login/Signup</Typography>
        </Button>
        <Button color="inherit" style={{ flex: 1, textTransform: 'capitalize', borderRadius: '1rem', color: 'white', backgroundColor: 'blue', height: '2.3rem' }}>
         <Typography variant='body1'>Start a Project</Typography>  &nbsp;<EastIcon color="white;" />
        </Button>
      </Toolbar>
    </AppBar>
    </ThemeProvider>
  );
}

export default Header;
