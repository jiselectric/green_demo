import React, { Component, useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Login from '@material-ui/icons/AccountCircle';
import SearchBar from "material-ui-search-bar";
import { AuthContext } from '../contexts/AuthContext';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import { red, blue, grey, green, yellow } from "@mui/material/colors";
import { Shadows } from "@material-ui/core/styles/shadows"
import { useHistory } from "react-router-dom";

const Header = () => {
    const history = useHistory();

    const { user } = useContext(AuthContext);

    //console.log(user.currentUserID)

    const colors = [red, blue, grey, green, yellow, blue];
    const randomColor = colors[Math.floor(Math.random() * colors.length)]

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky" style={{ background : '#1de9b6' }} elevation={0}>
                <Toolbar style={{ marginTop : 1}}>
                
                    <Grid justify="space-between" container>
                        <Grid item xs={1.5}>
                            <Typography variant="h5" color="white"
                            fontWeight='300' style={{ marginTop: 5 }} onClick={() => history.push('/')}>
                                GreenTube
                            </Typography>
                        </Grid>

                        <Grid item xs={9.2}>
                            <SearchBar style={{boxShadow: "none"}} elevation={0} />
                        </Grid>

                        <Grid item xs={1.3}>
                            {/* user.users[userData.currentUserID]['username'] */}
                            
                            { user.currentUserID > -1 ? 
                            <Avatar sx={{ bgcolor: 'gray' }} aria-label="recipe" onClick={() => history.push('/dashboard')} style={{ fill : 'white', marginLeft: 45, marginTop : 3}}>
                                {user.users[user.currentUserID]['username'].slice(0, 2)}
                            </Avatar>

                            :  
                            <Login fontSize={'large'} style={{ fill : 'white', marginLeft: 50, marginTop : 5}} />}
                            
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>   
    );
}

export default Header;