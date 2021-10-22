import React from 'react'
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import "../styles/styles.css";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  
  return (
    <div className="llogin ">

      <h4 className="titulo">
        Ingresa
      </h4>
      
      
            <button
            onClick={() => loginWithRedirect()}
            class= 'border border-danger rounded ' type='submit'>Iniciar Sesion</button>
      
      
    </div>
  )
}

export default Login;
