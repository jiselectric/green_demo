import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import Build from '@mui/icons-material/Build';
import Stack from '@mui/material/Stack';
import { red, blue, grey, green, yellow } from "@mui/material/colors";

const AlertDialog = () => {
  const [open, setOpen] = useState(true);
  
  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>

      <Dialog open={open} onClick={() => setOpen(false)}>
        <Grid container
          spacing={0} 
          direction="column">

          <Grid item style={{ margin : 20 }}>
            <Grid container direction="row" alignItems="center">
              <Grid item style={{ color : '#a9a9a9' }}>
                <Build/>
              </Grid>

              <Grid item>
                <DialogTitle> Video Not Available on GreenCDN </DialogTitle>
              </Grid>
            </Grid>
          </Grid>

          <Grid item style={{ margin : 10, color : '#000000', fontSize: 17.5 }}>
            <ListItem>
              The video is not currently available on green energy. Do you want to watch later? 
            </ListItem>
          </Grid>

          <Grid item style={{ margin : 30}}>
            <Grid container spacing={1}>
              <Grid item>
                <Button 
                style={{backgroundColor: '#1E90FF', color: '#FFFFFF', borderRadius: 8, padding : 10}}>
                  Yes, Watch Other Video    
                </Button>
              </Grid>

              <Grid item>
                <Button 
                style={{backgroundColor: '#37474f	', color: '#FFFFFF', borderRadius: 8, padding : 10}}>
                  No     
                </Button> 
              </Grid>

              {/* <Grid item>
                <Button 
                style={{backgroundColor: '#12824C', color: '#FFFFFF', borderRadius: 8, padding : 10}}>
                  Watch Other Video    
                </Button>
              </Grid> */}

            </Grid>
          </Grid>
        </Grid>

      </Dialog>

    </ClickAwayListener>
  )
}

export default AlertDialog;
