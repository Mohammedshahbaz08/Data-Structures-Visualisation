import { Button, Card, CardActions, CardMedia, CardContent, Grid, Typography } from '@mui/material';
import React from 'react' 
import { createMuiTheme, ThemeProvider } from '@mui/material';
import '../styles.css'
import arr from '../images/Array.png'
import stackImg from '../images/Stack.png'
import bstImg from '../images/BST.png'
import graphImg from '../images/graph.png'
import LinkedlistImg from '../images/Linkedlist.png'
import queueImg from '../images/queue.png'
import Bounce from 'react-reveal/Bounce';


const LandingPage = ()=>{

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
        },
        overrides:{
            MuiCardMediaRoot:{
                objectFit:'fill'
            }
        }
    })

    return(
        <div>
            <ThemeProvider theme={theme}>
                 <Grid container rowSpacing={2} columnSpacing={2} justifyContent='space-around' alignItems='center' id='landingGrid'>
                <Grid id='landingItem' item xs={12} sm={4} md={4}>
                <Card >
                <CardMedia 
                    component="img"
                    height="150"
                    image={arr}
                    alt="array imgage"
                    sx={{
                        objectFit:'fill'
                    }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" id="boldText" component="div">
                    Array
                    </Typography>
                    <Typography variant="body2"  id="lightBlodText">
                    An array is a data structure for storing more than one data item of similar data type,
                    which take adjacent memory locations.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button href='Array' variant='contained' id="lighBoldText" size="small">Visualise</Button>
                </CardActions>
                </Card>
            </Grid>


            <Grid id='landingItem' item xs={12} sm={4} md={4}>
                 <Card >
                <CardMedia 
                    component="img"
                    height="150"
                    image={stackImg}
                    alt="array imgage"
                    sx={{
                        objectFit:'fill'
                    }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" id="boldText" component="div">
                    Stack
                    </Typography>
                    <Typography variant="body2" >
                    An array is a data structure for storing more than one data item of similar data type,
                    which take adjacent memory locations.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button href='Stack' variant='contained' id="lighBoldText" size="small">Visualise</Button>
                </CardActions>
                </Card>
            </Grid>


            <Grid id='landingItem' item xs={12} sm={4} md={4}>
                 <Card >
                <CardMedia
                    component="img"
                    height="150"
                    image={queueImg}
                    alt="array imgage"
                    sx={{
                        objectFit:'fill'
                    }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" id="boldText" component="div">
                    Queue
                    </Typography>
                    <Typography variant="body2" >
                    An array is a data structure for storing more than one data item of similar data type,
                    which take adjacent memory locations.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button href='Queue' variant='contained' id="lighBoldText" size="small">Visualise</Button>
                </CardActions>
                </Card>
            </Grid>


            <Grid id='landingItem' item xs={12} sm={4} md={4}>
                 <Card >
                <CardMedia
                    component="img"
                    height="150"
                    image={bstImg}
                    alt="array imgage"
                    sx={{
                        objectFit:'fill'
                    }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" id="boldText" component="div">
                    Binary Search Tree
                    </Typography>
                    <Typography variant="body2" >
                    A binary search tree follows some order to arrange the elements. In a Binary search tree, the value of left node must be smaller than the parent node, and the value of right node must be greater than the parent node.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button href='BST' variant='contained' id="lighBoldText" size="small">Visualise</Button>
                </CardActions>
                </Card>
            </Grid>


            <Grid id='landingItem'item xs={12} sm={4} md={4}>
                 <Card >
                <CardMedia 
                    component="img"
                    height="150"
                    image={LinkedlistImg}
                    alt="array imgage"
                    sx={{
                        objectFit:'fill'
                    }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" id="boldText" component="div">
                    Linked List
                    </Typography>
                    <Typography variant="body2" >
                    An array is a data structure for storing more than one data item of similar data type,
                    which take adjacent memory locations.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button href='Linkedlist'  variant='contained' id="lighBoldText" size="small">Visualise</Button>
                </CardActions>
                </Card>
            </Grid>


            <Grid id='landingItem' item xs={12} sm={4} md={4}>
                <Card >
                <CardMedia 
                    component="img"
                    height="150"
                    image={graphImg}
                    alt="array imgage"
                    sx={{
                        objectFit:'fill'
                    }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" id="boldText" component="div">
                    Graph
                    </Typography>
                    <Typography variant="body2" >
                    An array is a data structure for storing more than one data item of similar data type,
                    which take adjacent memory locations.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button href='/' variant='contained' id="lighBoldText" size="small">Visualise</Button>
                </CardActions>
                </Card>
            </Grid>
        </Grid>   
        </ThemeProvider>
        </div>
    )
}

export default LandingPage;