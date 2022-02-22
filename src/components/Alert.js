import { Alert, Button, Snackbar } from '@mui/material';
import React, { useEffect, useState } from 'react' 

const AlertNotify = (props)=>{

    useEffect((e)=>{
        setOpen(props.obj.open)
    },[])

    const [open, setOpen] = useState(false);


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };

    const justlog=()=>{
        console.log(props)
        console.log(open)
    }
    return(
        <div>
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={props.obj.alertLevel} sx={{ width: '100%' }}>
          {props.obj.alertMess}
        </Alert>
      </Snackbar>
          </div>
    )
}

export default AlertNotify;