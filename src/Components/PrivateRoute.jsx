import React, {useEffect} from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import { obtenerDatosUsuario } from '../utils/api';

const PrivateRoute = ({children}) => {
   
    const { user, isAuthenticated, isLoading,getAccessTokenSilently } = useAuth0();

    useEffect(() => {

        const fetchAuth0Token =async()=>{
            const accessToken = await getAccessTokenSilently({
                audience:"api-auteticacion-zapatocas-mintic",
        });
        localStorage.setItem("token", accessToken);
        await obtenerDatosUsuario((response)=>{
            console.log('response',response);   
        },
        (err)=>{
            console.log('err',err);   
        }
        );
        };
        if (isAuthenticated) {

            fetchAuth0Token()
        }   
    }, [isAuthenticated, getAccessTokenSilently]);



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
