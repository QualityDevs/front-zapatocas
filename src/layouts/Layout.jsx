import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Sidebar from '../Components/Sidebar';
import React from 'react';
import PrivateRoute from '../Components/PrivateRoute';

const Layout =({children}) =>{
    return(

        <PrivateRoute>

        <div className="containerMain">
          
          
            <Header/>
            
            <Sidebar/>
            <main >
                {children}
            </main>
            <Footer/>
       
            
        </div>

        </PrivateRoute>
    );
};

export default Layout;