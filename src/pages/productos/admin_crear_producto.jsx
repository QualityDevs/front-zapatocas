import '../../styles/stylesp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import axios from 'axios';

const CrearProducto = () => {
    const [show, popup] = useState(false);
    const modalOpen = () => popup(true);
    const modalClose = () => popup(false);
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [vunitario, setVUnitario] = useState(0);
    const [estado, setEstado]= useState("Disponible");
    const [mensaje, setMensaje] = useState("");

    const crearBD = async () => {
        if(comprobar()){
            const options= {
                method: 'POST',
                url: 'http://localhost:5000/productos/new',
                headers: { 'Content-Type': 'application/json' },
                data: {nombre: nombre, descripcion: descripcion, vunitario:vunitario, estado:estado},
            };

            await axios.request(options).then((response) => {
               setMensaje(<div><p>Producto creado exitosamente</p>
            </div>);
                modalOpen();
                setNombre("");
                setDescripcion("");
                setVUnitario("");
                setEstado("Disponible");
            }).catch(function (error){
                setMensaje(error.toString());
                modalOpen();
            });
        }
 
    
    }

    const comprobar = () => {
        if (vunitario.valueOf() > 0 && nombre.toString().length > 0 && descripcion.toString().length > 0 &&
            estado.toString().length > 0) 
        return true;
        console.log(nombre);
        setMensaje(<div><p>Debe llenar todos los campos </p>
                    <p>El Valor no del producto debe ser mayor que a 0</p></div>);
        modalOpen();
        return false;
    }

    return (
        <div className="contenedorM" >
            <div>
                <Modal show={show} onHide={modalClose}>
                    <Modal.Header>
                        <h4>Información</h4>
                        <button type="button" class="btn btn-danger" onClick={modalClose}> Cerrar</button>
                    </Modal.Header>
                    <Modal.Body>
                       <div>{mensaje}</div>
                    </Modal.Body>
                </Modal>   
            </div>
            
            <h1> Crear un nuevo producto</h1>
            <form class="form-horizantal">
         
                <div class="form-group">
                    <label for="n_producto" class="labels">Nombre del producto</label>
                    <input type="text" class="form-control" value={nombre} id="n_producto" onChange={(value) => setNombre(value.target.value)} placeholder="Ingrese el nombre del producto" />
                </div>

                <div class="form-group">
                    <label for="d_producto" class="labels">Descripción del producto</label>
                    <input type="text" class="form-control" value={descripcion} id="d_producto" onChange={(value) => setDescripcion(value.target.value)} placeholder="Ingrese la descripcion del producto" />
                </div>

                <div class="form-group">
                    <label for="v_producto" className="labels">Valor unitario</label>
                    <input type="number" class="form-control" value={vunitario} id="v_producto" onChange={(value) => setVUnitario(value.target.value)} placeholder="Ingrese el valor en pesos" />
                </div>

                <div class="form-group">
                    <label for="e_producto" className="labels">Estado del producto</label>
                    <select class="form-control form-control" onChange={(value) => setEstado(value.target.value)}>
                        <option selected={true}>Disponible</option>
                        <option>No Disponible</option>
                    </select>
                </div>

                <div class="form-group">
                    <button type="button" class="btn btn-success" onClick={crearBD}> Crear Producto</button>
                </div>

            </form>
        </div>
    );
}

export default CrearProducto;