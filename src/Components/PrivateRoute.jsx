import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';

const PrivateRoute = ({children}) => {
   
    const { user, isAuthenticated, isLoading } = useAuth0();



   if(isLoading) return (
        <div>
            LOADING...
        </div>
    )

    return isAuthenticated ? <> { children }</> : <div> 
        
        SIN AUTORIZACIÓN
        <Link to="/">
        
        <span>
            llévame a home
        </span>

        </Link>
        
        
         </div>


}

export default PrivateRoute
