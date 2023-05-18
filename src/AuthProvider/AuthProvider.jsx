import React, { createContext, useEffect } from 'react';

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    const createAccountWithEmail = (email,password)=>{

    }
    const createAccountWithGoogle = ()=>{

    }
    const loginWithEmailPass = (email,password)=>{

    }
    const logOut = ()=>{

    }

    useEffect(()=>{
        
    },[])

    const userInfo = {
        user:'Mehedi Hasan'
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;