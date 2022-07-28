import React from 'react';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import { red, blue, grey, green, yellow } from "@mui/material/colors";

let cardStyle = { 
    border: "none", 
    boxShadow: "none", 
    borderRadius: 0
};

const VideoCard = ({ link }) => {
    const colors = [red, blue, grey, green, yellow, blue];
    const randomColor = colors[Math.floor(Math.random() * colors.length)]

  return (
    <Card sx={{ maxWidth: 345 }} style={cardStyle}>

        <CardMedia
            component="img"
            height="195"
            image= {link.thumbnail}
            alt={link.title}
        />

        <CardHeader
            avatar={
            <Avatar sx={{ bgcolor: randomColor[500] }} aria-label="recipe">
                {link.uploader.slice(0, 2)}
            </Avatar>
            }

            title= {link.title.slice(0, 30)}
            subheader={link.date}
        />
        
    </Card>
  );
}

export default VideoCard

