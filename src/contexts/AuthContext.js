import React, { createContext, useState } from 'react';
import userData from '../utils/userData.js';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [user, setUser] = useState(userData);

    return (
        <AuthContext.Provider value={{ user }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;