import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/stylesc.css';
import axios from 'axios';

const AdminUsuarios = () => {
    const [state, setState] = useState({datos: []});

    const getUsuarios = async () => {
        const options = {
            method: 'GET',
            url: 'https://peaceful-fortress-80371.herokuapp.com/users',
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              }
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
        <h3 className="tablaH3">Administración de Usuarios</h3>
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
                <th className="tablath">ACCIÓN</th> 
            </tr>
            </thead>
            <tbody>
            { state.datos.map((elemento)=>(
            <tr> 
                <td className="tablatd">{elemento._id}</td> 
                <td className="tablatd">{elemento.name}</td>
                <td className="tablatd">{elemento.estado}</td> 
                <td className="tablatd">{elemento.rol}</td>
                <td className="tablatd centro">
                    <div>
                    <Link to={{pathname:"/editar_Usuarios/", state: elemento }}><button type="button" className="btn btn-primary">Editar</button></Link>
                    </div>
                </td>
            </tr>
            ))}
            </tbody>
            </table>
            </form>
            </div> 

        </div>
    );
}

export default AdminUsuarios;
