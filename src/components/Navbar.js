import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { makeStyles, styled } from '@mui/styles';
import { createMuiTheme, ThemeProvider } from '@mui/material';
import { fontWeight } from '@mui/system';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    fontSize:'15px',
    color:'#f6f6f6',
    fontFamily:'Lato'
  },
}));

const theme =  createMuiTheme({
    palette:{
        primary:{
            main:'#212121'  
        },
        secondary:{
            main:'#f6f6f6'
        }
    },
    typography:{
        fontFamily:'Lato',
        fontWeightBold:700
    }
})

const Navbar = () => {
  const classes = useStyles();
  

  return (
      <ThemeProvider theme={theme}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className={classes.menuButton}
        >
        </IconButton>
         <Typography id="boldText" className={classes.title}>
        <Button href="/" color="secondary">Data Structures Visualisation</Button>
        </Typography> 

        <Button color='secondary' href="/Dslist">Home</Button>
        <Button color='secondary' href="#text-buttons">Documentation</Button>
        <Button color='secondary' href="/Contribute">Contribute</Button>
        <Button color='secondary' href="#text-buttons">Code</Button>

      </Toolbar>
    </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;