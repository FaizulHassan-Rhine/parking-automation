
import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { userContextManager } from '../../App';

const PrivateRoute = () => {
    const [getUserInfo] = useContext(userContextManager); 

    return getUserInfo.id > 0 ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;