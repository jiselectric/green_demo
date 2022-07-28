import React, { createContext, useState } from 'react';
import videoData from '../utils/VideoData.js';

export const VideoContext = createContext();

const VideoContextProvider = (props) => {
    

    return (
        <AuthContext.Provider value={{ user }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default VideoContextProvider;