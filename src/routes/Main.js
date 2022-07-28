import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import VideoCard from '../components/Card';
import ModalComponent from 'react-modal-dom';
import { useHistory } from "react-router-dom";

const Main = () => {
    const [links, setLinks] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/videoInfo')
        .then(res => res.json())
        .then(data => setLinks(data))
    }, [])

    const history = useHistory();

    //////////////////////////////////////////////////////////////////
    
    const [randNum, setRandNum] = useState(5);

    return (
        <Grid container spacing={1}>
                {/* xs={12} md={6} lg={4}  */}
                {links.map(link => (
                    <Grid item key={link.id} onClick={() => {randNum > 3 ? history.push('/player', 
                    { 
                        hlsLink : link.link, 
                        title: link.title, 
                        uploader: link.uploader,
                        description: link.description, 
                        date: link.date
                    }) :
                                      
                    alert("This Video is Not Available at the Moment")
                    setRandNum(Math.floor(Math.random() * 10));
                                      
                    }}>
                    
                    <VideoCard link={link}/>
                    </Grid>
                ))}
        </Grid>
        
    )
}

export default Main