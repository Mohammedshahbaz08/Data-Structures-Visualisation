import {React, useEffect, useState} from 'react'
import '../styles.css'
import { Button, Grid, Card, CardMedia, Typography } from '@mui/material'
import home from '../images/Array.png'
// import Bstfun from '../images/Bstfun.png'
// import Stackfun from '../images/Stackfun.png'
// import Arrarfun from '../images/Arrarfun.png'
import Fun from '../images/Fun.png'
// import { makeStyles, styled } from '@mui/styles';
// import home from '../images/home.jpg'
import { makeStyles, styled } from '@mui/styles';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { createMuiTheme, ThemeProvider } from '@mui/material';
import CodeCopy from '../images/CodeCopy.png'

const theme =  createMuiTheme({
    palette:{
        primary:{
            main:'#212121'
        } 
    },
    typography:{
        h1:{
            fontSize:'55px',
            fontWeight:'550'
        },
        fontFamily:'Lato'
    }
})

const Home = () =>{
    return(
        <div>
            
            <ThemeProvider theme={theme}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                <div  id="landingGrid" className="homePage">
                    <Typography variant='h6' color='primary' fontWeight='bold'>&lt;ds&gt;</Typography>
                    {/* <br/> */}
                    <Typography variant='h1' color='primary' className="textSize">Learn data structures visually <span></span> </Typography>
                    {/* <br/> */}
                    <Typography variant='h6'color='primary' fontWeight='bold'>&lt;/ds&gt;</Typography><br></br>
                     <Typography className="homeAdjust">MUI provides a robust, customizable, and accessible library of foundational and advanced components, enabling you to build your own design system and develop React applications faster.</Typography> <br></br><br></br>
                    <Button variant='contained' href="/Dslist" className="getStarted" >Get Started </Button></div>
                </Grid>
                
                {/* scrolling bar */}
                <Grid item xs={12} sm={6}>
                    <Card><div className='main-scroll-div'>
                      <main>
                        <div className='scroll-bg'>
                            <div className='scroll-div'>
                                <div className='scroll-object'>
                                {/* <div className='img'><img src={Stackfun} alt="per1" /></div>                                                                              
                                <div className='img'><img src={Bstfun} alt="per1" /></div>                                                                              
                                <div className='img'><img src={Arrarfun} alt="per1" /></div>                                                                            */}
                                <div><img className='funimg' src={Fun} alt="per1"  /></div>                                                                                                                                                
                                    
                                </div>
                            </div>
                        </div>
                                    </main></div>
                    </Card>
                </Grid>
            </Grid>
            </ThemeProvider>
        </div>
        
    )

}
export default Home