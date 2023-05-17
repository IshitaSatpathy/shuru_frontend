import React from 'react';
import { AppBar, Button, Toolbar,Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
const useStyles = makeStyles({
  button: {
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'yellow',
    },
  },
  link: {
    color: 'black',
    '&:hover': {
      color: 'black',
    },
  },
});

function Navbar() {
  const classes = useStyles();
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
    <AppBar position="static" color="default" elevation={0} style={{backgroundColor: '#EDEEF1'}}>
      <Toolbar style={{ justifyContent: 'space-between', backgroundColor: '#EDEEF1',marginTop:'calc(20/1024*100vh)',padding:0,width:'100%' }}>
        <Button color="inherit" style={{textTransform:'capitalize',fontWeight:'bold', marginLeft: "3.4722vw",padding:0}} classes={{ root: classes.link }} href="#">
        <Typography variant='caption' style={{fontWeight:'bold'}}> <u> Get in Touch</u></Typography> 
        </Button>
        <div>
          <Button  color="inherit" className={classes.button}>
          <Typography variant='caption'>  Projects</Typography>
          </Button>
          <Button color="inherit" className={classes.button}>
          <Typography variant='caption'> Overview</Typography>
          </Button>
          <Button color="inherit" className={classes.button}>
          <Typography variant='caption'> Categories</Typography>
          </Button>
          <Button color="inherit" className={classes.button}>
          <Typography variant='caption'> Why Invest</Typography>
          </Button>
          <Button color="inherit" className={classes.button}>
          <Typography variant='caption'> How it works</Typography>
          </Button>
          <Button color="inherit" className={classes.button}>
          <Typography variant='caption'> About </Typography>
          </Button>
          <Button color="inherit" className={classes.button}>
          <Typography variant='caption'>   Benefits </Typography>
          </Button>
          <Button color="inherit" className={classes.button}>
          <Typography variant='caption'>  Trust & Safety</Typography>
          </Button>
          <Button color="inherit" className={classes.button}>
          <Typography variant='caption'>  Partners</Typography>
          </Button>
          <Button color="inherit" className={classes.button} style={{ marginRight: '3.4722vw'}}>
          <Typography variant='caption'>  Press</Typography>
          </Button>
        </div>
      </Toolbar>
    </AppBar>
    </ThemeProvider>
  );
}

export default Navbar;
