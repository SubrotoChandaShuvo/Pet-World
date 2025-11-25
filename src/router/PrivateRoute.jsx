import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading}=useContext(AuthContext);

    const location = useLocation();
    console.log(location);
    

    if(loading){
       return <div className='flex justify-center pt-10'>
        <span className="loading loading-spinner text-neutral loading-lg scale-250"></span>
       </div>
    }

    
    if(user){
        return children;
    }
    else
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;