import {React, useEffect, useState} from 'react' 
import '../styles.css';
import { Grid, Stack, Divider, Paper, TextField, Button, styled } from '@mui/material'
 import { createMuiTheme, ThemeProvider,} from '@mui/material';
import { BinarySearchTree, useTree } from 'react-tree-vis';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import BSTVid from '../images/BSTAnimate.mp4';
const theme =  createMuiTheme({
  palette:{
      primary:{
          main:'#f6f6f6'
      } 
  },
})
  
function BST(){
  
  const [input, setInput] = useState('');
  const { ref, insert, remove } = useTree()
  // const [arrayVal, ] = useState([])
  // const [newVal, setNewVal] = useState();
  // const [newArr, setNewArr] = useState()
  const takeInputHandler = (e)=>{
    setInput(e.target.value)
    // setNewVal(e.target.value)
    console.log("message 2")
  }
  //Material Compoent
  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1.5),
    textAlign: 'center',
    width:'50px'
  }));

//   useEffect(()=>{
//     <Createdmy/>
// },[arrayVal])

    //push element
    const insertbtn = ()=>{
      // console.log(newVal,"message")
      // setNewArr(arrayVal.push(newVal))
      // console.log(arrayVal)
      insert(input)
      
      // return(
      //     <Stack justifyContent='center' direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={1} >
      //     <Stack direction='row'>
      //     {arrayVal.map(item=>(
      //         <Item id='itemId'>{item}</Item>
      //     ))}
      //     </Stack>
      // </Stack>
      // )
  }


// const Createdmy=()=>{
//    return(
//    <Stack justifyContent='left' direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={1} >
//            <Stack direction="column-reverse" className='outputSize'>
//            {arrayVal.map(item=>(
//                <Item id='itemId'>{item}</Item>
//            ))}
//            </Stack>
//        </Stack>
//    )
// }

const deletedata=()=>{
  
  remove(input)
  console.log('deleted')
//  setNewArr(arrayVal.pop())
 
  //  return(
  //      <Stack justifyContent='center' direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={1} >
  //      <Stack direction='row'>
  //      {arrayVal.map(item=>(
  //          <Item id='itemId'>{item}</Item>
  //      ))}
  //      </Stack>
  //  </Stack>
  //  )
}

     return(
     <>
     <div>
     <ThemeProvider theme={theme}>
     <Grid item xs={12}>\
          <video autoPlay height="300px" width="100%" controls loop>
             <source src={BSTVid} type="video/mp4"></source>
          </video>
     </Grid>
     <Grid container>
        <Grid item xs={12} md={6}>
        <Grid container direction='column'>
        <Grid item direction='column'>
            <Grid container direction='column' className='AllInputsGrid'>
    
                 <TextField onChange={takeInputHandler} focused variant='outlined'  label='Insert' size='small' type='number' id='inputdata'> </TextField>
                  <Button  variant='contained' id='insertData' onClick={insertbtn}>
                    Create BST<NavigateNextIcon /></Button><br></br>
                  <TextField onChange={takeInputHandler}  focused variant='outlined'  label='Remove' size='small' type='number' id='inputdata'> </TextField>
                  <Button variant='contained' id='insertData' onClick={deletedata}>Remove Node<NavigateNextIcon /></Button>
                  {/* <Createdmy /> */}
                  </Grid>  
                  </Grid></Grid></Grid>
                  
               {/* BST display */}       
               <Grid item xs={12} sm={6}>      
                  <BinarySearchTree data={[]} ref={ref} remove={remove} /></Grid>
                     </Grid></ThemeProvider></div>
                                       
     </>

   );
     }
    
    
    

export default BST; 