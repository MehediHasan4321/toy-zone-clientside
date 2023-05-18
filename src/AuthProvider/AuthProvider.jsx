import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../Firebase/firebase.config';
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider()
    const auth = getAuth(app)

    const createAccountWithEmail = (email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const createAccountWithGoogle = ()=>{
        return signInWithPopup(auth,googleProvider)
    }
    const loginWithEmailPass = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = ()=>{
       return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>setUser(currentUser))
        return ()=>unsubscribe()
    },[])

    const userInfo = {
        user,
        createAccountWithEmail,
        createAccountWithGoogle,
        loginWithEmailPass,
        logOut
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;