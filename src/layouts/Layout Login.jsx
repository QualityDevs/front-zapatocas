import Header from '../Components/Header';
import Footer from '../Components/Footer';
import React from 'react';
import Login from '../pages/login';


const LayoutLogin =({children}) =>{
    return(
        <div className="containerMain">
          
            
           <Login/>

            <Footer/>
            
        </div>
    );
};

export default LayoutLogin;