import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../Firebase/firebase.config';
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [isLoading,setIsLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const auth = getAuth(app)
    const [banners,setBanners] = useState([])
    useEffect(()=>{
        fetch('https://toyshop-zeta.vercel.app/banners')
        .then(res=>res.json())
        .then(data=>setBanners(data))
    },[])
    const createAccountWithEmail = (email,password)=>{
        setIsLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const createAccountWithGoogle = ()=>{
        setIsLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const loginWithEmailPass = (email,password)=>{
        setIsLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = ()=>{
       return signOut(auth)
    }

    useEffect(()=>{

        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setIsLoading(false)
        })
        return ()=>unsubscribe()
    },[])

    const userInfo = {
        user,
        createAccountWithEmail,
        createAccountWithGoogle,
        loginWithEmailPass,
        logOut,
        isLoading,
        banners
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;