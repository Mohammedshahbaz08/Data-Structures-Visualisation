import {React, useEffect, useState} from 'react' 
import '../styles.css'
import { Grid, Stack, Divider, Paper, TextField, Button, Card} from '@mui/material'
import { makeStyles, styled } from '@mui/styles';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { createMuiTheme, ThemeProvider } from '@mui/material';


const theme =  createMuiTheme({
    palette:{
        primary:{
            main:'#f6f6f6'
        } 
    },
})

const useStyles = makeStyles(theme=>({
    textFeild:{
        color:'#f6f6f6'
    }
}))

const Queues = ()=>{
    const classes = useStyles();

    //Material Compoent
    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(1.5),
        textAlign: 'center',
        width:'50px'
      }));


    //Validations states
    const [invalidInput, setInvalidInput] = useState(false)
    const [invalidQueueInput, setInvalidQueueInput] = useState(false)
    const [helperMessage, setHelperMessage] = useState('Enter queue values 1,2,3,4')


    //state variables for actions
    const [queueSize, setQueueSize] = useState();
    const [tempVal, setTempVal] = useState();
    const [queueValues, setQueueValues] = useState([]);
    const [emptyQue, setSQueueValues2] = useState([]);
    const [newVal, setNewVal] = useState();
    const values = []
    var values2 = []


    useEffect(()=>{
        <CreateQueue/>
        console.log(emptyQue)
    },[queueValues])

    const queueSizeInput = (e)=>{
        setQueueSize(e.target.value)
    }

    const onCreate=()=>{
        if(tempVal !== undefined &&tempVal.length !== undefined){
            console.log("entred here")
            var txt = tempVal;
            var numb = txt.match(/\d/g);
            numb = numb.join("");
            for(var i=0;i<numb.length;i++){
                values.push(numb[i])
            }
            setQueueValues(values)
        }
        else if(tempVal === undefined){
            alert("Queue created of size:"+ queueSize)
            newQueue()
        }
        else if(queueSize > 10){
            setInvalidInput(true);
        }

    }

    const queueInput=(e)=>{
        if(e.target.value.length > 19){
            setInvalidQueueInput(true)
        }
        else if(e.target.value.length>0){
            setTempVal(e.target.value);
        }

    }
    //Function to create an empty queue
    const newQueue=()=>{         
        for(var i=0;i<queueSize;i++){
             values2.push(1)
         }     
         setSQueueValues2(values2)
        console.log(emptyQue)  
        return(
            <Stack justifyContent='center' direction="row"  spacing={1} >
            <Stack direction='row'>
            {emptyQue.map(item=>(
                <Item id='itemId'>{item}</Item>
            ))}
            </Stack>
        </Stack>
        )
    }

    
    const pushInputValue = (e)=>{
        setNewVal(e.target.value)
        console.log("message 2")
    }

    const [newQue, setNewQue] = useState()
    //push function
    const pushInput = ()=>{
        if(queueValues.length < queueSize){
        console.log(newVal,"message")
        setNewQue(queueValues.push(newVal))
        emptyQue.pop()
        console.log(queueValues)
        console.log(emptyQue)
        const newque = queueValues.concat(emptyQue)
        console.log(newque)
        
        return(
            <Stack justifyContent='center' direction="row" spacing={1} >
            <Stack direction='row'>
            {newque.map(item=>(
                <Item id='itemId'>{item}</Item>
            ))}
            </Stack>
        </Stack>
        )
        }
        else{
            alert("Queue is full")
        }
    }
    //pop function
    const popFunction=()=>{
        setNewQue(queueValues.pop())
        emptyQue.push('-')
        console.log(queueValues)
        console.log(emptyQue)
        return(
            <Stack justifyContent='center' direction="row" spacing={1} >
            <Stack direction='row'>
            {queueValues.map(item=>(
                <Item id='itemId'>{item}</Item>
            ))}
            </Stack>
        </Stack>
        )
    }
    //peek function
    const peekFunction=()=>{
        if(queueValues.length == 0){
            alert("Queue is Empty")
        }
        else{
             var lastElement = queueValues[queueValues.length -1]
             alert(`Element at top of the Queue is ${lastElement}`)
           // for(var i=0;i<=arrayValues.length)
        }

    }
    //Empty function
    const emptyFunction=()=>{
        if(queueValues.length == 0){
            alert("Queue is Empty")
        }
        else if(queueValues.length != null){
            console.log(queueValues)
            alert("Queue is Full")
        }
    }


    const CreateQueue=()=>{
        return(
        <Stack justifyContent='center' direction="row" spacing={1} >
                <Stack direction="row" className='outputSize'>
                {queueValues.map(item=>(
                    <Item id='itemId'>{item}</Item>
                ))}
                </Stack>
            </Stack>
        )
    }

    return(
        <div>
            <ThemeProvider theme={theme}>
                <Grid container spacing={1}>
                <Grid item xs={12}>
                        <h1>ANIMATIO I</h1>
                    </Grid>
                    <Grid>
                        <h1>ANIMATION II</h1>
                    </Grid>
                  <Grid item xs={6}>                     
                     <Grid  direction='row' className='mainDiv' container >
                        <Grid textAlign='left' className='inputClass'>
                           <Stack direction="row" spacing={3}>
                              <TextField variant='outlined' className={classes.textFeild} id='inputId' label='Enter size' size='small' onChange={queueSizeInput} type='number' error={invalidInput} helperText='Enter value less than 10'> </TextField>
                              <Button variant='contained' id='createId' onClick={onCreate}>
                                <NavigateNextIcon/>
                              </Button>
                           </Stack>
                        </Grid>
                     </Grid>
                      <Grid className='mainDiv' container>
                          <Grid textAlign='left' className='inputClass'>
                             <Stack spacing={1.5}>
                                 <TextField variant='outlined' className={classes.textFeild} id='inputId' label='Enter value' size='small' type='number' error={invalidInput} onChange={pushInputValue}> </TextField>
                                 <Button variant='contained' id='createId' onClick={pushInput}>PUSH</Button>
                                 <Button variant='contained' id='createId' onClick={popFunction}>POP</Button>
                                 <Button variant='contained' id='createId' onClick={peekFunction}>PEEK</Button>
                                 <Button variant='contained' id='createId' onClick={emptyFunction}>Empty</Button>
                              </Stack>
                          </Grid>
                      </Grid>
                  </Grid>
                  <CreateQueue/>
                </Grid>
            </ThemeProvider>
        </div>
    )
}

export default Queues;