import {React} from 'react'
import '../styles.css'
 import { BottomNavigation, createMuiTheme, TextField, ThemeProvider} from '@mui/material';
 import Shahbaz from '../images/Shahbaz.jpg'
 import kiran from '../images/Kiran.jpeg'
 import Absar from '../images/Absar.jpeg'
 import {  Grid, Card, Button } from '@mui/material'


 const theme =  createMuiTheme({
    palette:{
        primary:{
            main:'#f6f6f6'
        } 
    },
  })

function contribute(){

    
    return(
        <>
        <div id="ContributeGrid" className="contributePage">
            <ThemeProvider theme={theme}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} >
                    <h1 className="fontSize">Present Contributer</h1>
                    <h3 className="contrAdjust">If you wanna contribute contact us:)</h3>
        </Grid>


       <Grid item xs={12} sm={6}>
              {/* Shahbaz profile */}
        <div className='wrapper'>
            <div className='card'>
                <div className='content'>
                    <div className='img'><img src={Shahbaz} alt="per1" /></div>
                   <div className='details'>
                   <span className='name'> Mohammed Shahbaz </span>
                    <p className='cont'>Class of 2023 at Osmania university Experience with JavaScript, React. js</p>
                   </div>
                </div>
                <a href='https://www.linkedin.com/in/mohammed-shahbaz-2786261ba'> Connect </a>
            </div>
        </div>


        

        {/* kiran profile */}
         <div className='wrapper'>
            <div className='card'>
                <div className='content'>
                    <div className='img'><img src={kiran} alt="per2" /></div>
                   <div className='details'>
                   <span className='name'>Srigri Kiran </span>
                    <p>Student | Software Engineer trainee at Alphaleo Technology</p>
                   </div>
                </div>
                <a href='https://www.linkedin.com/in/kiran-srigiri'> Connect </a>
            </div>
        </div>

        {/* Absar profile */}
         <div className='wrapper'>
            <div className='card'>
                <div className='content'>
                    <div className='img'><img src={Absar} alt="per1" /></div>
                   <div className='details'>
                   <span className='name'> Absar Ali Rizwan </span>
                    <p>Pursuing Graduation Experience with JavaScript, React. js</p>
                   </div>
                </div>
                <a href='https://www.linkedin.com/in/absaar-ali-rizwan-47b9621b0/'> Connect </a>
            </div>
         </div> 

{/* <div class="card">
  <img className='pro-img' src={Absar} alt="John" /> 
  <h1>John Doe</h1>
  <p class="title">CEO & Founder, Example</p>
  <p>Harvard University</p>
  <div className='cont-div'>
    <a href="#"><i class="fa fa-dribbble"></i></a> 
    <a href="#"><i class="fa fa-twitter"></i></a>  
    <a href="#"><i class="fa fa-linkedin"></i></a>  
    <a href="#"><i class="fa fa-facebook"></i></a> 
  </div>
  <p><button>Contact</button></p>
</div> */}
                    
                </Grid>
            </Grid>
            </ThemeProvider>
        </div>
        </>
    )
}
export default contribute