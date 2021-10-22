import React, { useState } from 'react';
import '../styles/stylesc.css';
import axios from 'axios';

const ListaUsuarios = () => {

    const [state, setState] = useState({datos: []});
    const getUsuarios = async () => {
        const options = {
            method: 'GET',
            url: 'http://localhost:5000/users'
        };
        
            await axios.request(options).then((response) => {
            setState({datos: response.data})
            }).catch(function (error){
            console.error(error);
        });
    };
    getUsuarios();

    return (
        <div className="container"> 
        <div className="item item-1">
        <h3 className="tablaH3">Usuarios</h3>
        </div>
            <div className="item item-2">
            <form>
            <table className="tablaAzul">
            <thead>
            <tr> 
                <th className="tablath">ID USUARIO</th> 
                <th className="tablath">NOMBRE</th> 
                <th className="tablath">ESTADO</th>
                <th className="tablath">ROL</th> 
            </tr>
            </thead>
            <tbody>
                { state.datos.map((elemento)=>(
                    <tr> 
                <td className="tablatd">{elemento._id}</td> 
                <td className="tablatd">{elemento.nombre}</td>
                <td className="tablatd">{elemento.estado}</td> 
                <td className="tablatd">{elemento.rol}</td>
            </tr>
            ))}
            </tbody>
            </table>
            </form>
            </div> 
        </div>
    )
}

export default ListaUsuarios
