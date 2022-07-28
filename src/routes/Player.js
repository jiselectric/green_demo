import React, { useState, useEffect } from 'react';
import ReactHlsPlayer from 'react-hls-player';
import Header from '../components/Header.js';
import Grid from '@mui/material/Grid';
import { useLocation } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Alert from "../components/Alert.js"
import { red, blue, grey, green, yellow } from "@mui/material/colors";
import ClickAwayListener from '@mui/material/ClickAwayListener';

const Player = () => {
    const videoInfo = useLocation();
    const hlsURL = videoInfo.state.hlsLink;
    
    useEffect(() => {
        fetch('http://localhost:3001/videoInfo')
        .then(res => res.json())
        // .then(data => setLinks(data))
    }, [])

    const colors = [red, blue, grey, green, yellow, blue];
    const randomColor = colors[Math.floor(Math.random() * colors.length)]

    const [randNum, setRandNum] = useState(Math.floor(Math.random() * 10));

    return (
        <div className='player-container'>
            {randNum < 4  ?
                <Alert/>
             : null}

            <Header/>

            <Grid container>

                <Grid item xs={2} style={{ margin : 20 }}>
                </Grid>

                <Grid item xs={8}>
                    <ReactHlsPlayer style={{ margin : 20 }}
                            src={hlsURL}
                            autoPlay={true}
                            controls={true}
                            width="80%"
                            height="auto"
                    />

                
                </Grid>

                <Grid item xs={2}>
                </Grid>
            </Grid>

            <Grid container>

                <Grid item xs={2.2} style={{ margin : 20 }}>
                </Grid>

                <Grid item xs={7.5} direction="column">
                    
                    <Typography variant="h6" fontWeight='500' style={{ marginRight: 15 }}>
                        {videoInfo.state.title}
                    </Typography>

                    <Grid container>

                    <Grid item xs={6}>

                    <CardHeader
                        avatar={
                        <Avatar sx={{ bgcolor: randomColor[500] }} aria-label="recipe">
                        {videoInfo.state.uploader.slice(0, 2)}
                        </Avatar>
                        }

                        // title= {link.title.slice(0, 30)}
            
                        subheader={videoInfo.state.uploader}
                    />
                    </Grid>
                    </Grid>

                    <Typography>
                        {videoInfo.state.description}
                    </Typography>
                </Grid>

                <Grid item xs={2} style={{ margin : 20 }}>
                </Grid>
            </Grid>

        </div> 
    );
}

export default Player;