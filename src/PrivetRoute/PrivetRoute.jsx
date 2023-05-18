import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Loading from '../Layout/ShareCompo/Loading/Loading';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    const { user, isLoading } = useContext(AuthContext)
    const location = useLocation()


    if (isLoading) {
        return <Loading />
    }
    if (user) {
        return children
    }
   return <Navigate to={'/logReg/login'} state={{ from: location }} replace></Navigate>
};

export default PrivetRoute;