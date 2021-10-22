import React, { useEffect, useState } from 'react';
import '../styles/stylesc2.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useLocation } from 'react-router';
import 'react-toastify/dist/ReactToastify.css';

const EditarUsuarios = () => {
    let location = useLocation();
    const [estado, setEstado] = useState("");
    const [rol, setRol] = useState("");
    
    useEffect(() => {
        setEstado(location.state.estado);
        setRol(location.state.rol);
    },[]);

    const actualizarUsuario = async () => {
        const options = {
            method: 'PATCH',
            url: 'http://localhost:5000/users/edit',
            headers: { 'Content-Type': 'application/json' },
            data: { id: location.state._id, nombre: location.state.nombre, estado: estado, rol: rol },
        }
        console.log(options.data);
        await axios.request(options).then((response) => {
            toast.success('Usuario modificado con éxito');
        }).catch(function (err) {
            toast.error('Error modificando el usuario');
        });
    }

    return (
        <div className="color"> 
            <h1 className="h1">Edición de usuario</h1>
                <form className="colums">
                    <label className="label">Estado del usuario:</label>
                        <select className="tablaSelect" value={estado} onChange={(e) => setEstado(e.target.value)}>
                            <option>Pendiente</option>
                            <option>Autorizado</option>
                            <option>No autorizado</option>
                        </select>
                    <label className="label">Rol del usuario:</label>
                        <select className="tablaSelect" value={rol} onChange={(e) => setRol(e.target.value)}>
                            <option>Vendedor</option>
                            <option>Administrador</option>
                        </select>
                </form>
                <button type="button" className="btn btn-success separate" onClick={actualizarUsuario}>
                    <a className="aModificada" href="#usuarioActualizado">Actualizar</a>
                </button>
                <div id="usuarioActualizado" class="overlay">
                    <div id="popupBody">
                        <h2>Actualización de usuario</h2>
                        <div class="popupContent">
                            <p>El usuario se ha actualizado correctamente</p>
                        </div>
                        <a id="cerrar2" href="#">
                            <button type="button" className="btn btn-danger">Cerrar</button>
                        </a>
                    </div>
                </div>                    
        </div>
    )
}

export default EditarUsuarios
