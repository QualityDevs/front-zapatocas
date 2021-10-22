import '../../styles/stylesp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Modal } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useLocation} from 'react-router';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router';



const EditarProducto = () => {
    let location = useLocation();
    let history = useHistory();
    const [show, popup] = useState(false);
    const modalOpen = () => {popup(true)};
    const modalClose = () => { popup(false)};
    const [nombre, setNombre] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [vunitario, setVUnitario] = useState("");
    const [estado, setEstado] = useState("");


    useEffect(() => {
        setNombre(location.state.nombre);
        setDescripcion(location.state.descripcion);
        setVUnitario(parseInt(location.state.vunitario));
        setEstado(location.state.estado);
    }, []);

    const cambiarDB = async () => {
        const options = {
            method: 'PATCH',
            url: 'http://localhost:5000/productos/edit',
            headers: { 'Content-Type': 'application/json' },
            data: { id: location.state._id, nombre: nombre, descripcion: descripcion, vunitario: vunitario, estado: estado },
        }
        console.log(options.data);
        await axios.request(options).then((response) => {
            setNombre("");
            setDescripcion("");
            setVUnitario(0);
            setEstado("Disponible");
            setMensaje("Producto modificado correctamente");
            modalOpen();
            setTimeout(function(){history.push('/productos/admin_productos')},5000);
        }).catch(function (err) {
            setMensaje(err.toString());
            modalOpen();
        });
        
    }

    return (
        <div className="contenedorM" >
            <div>
                <Modal show={show} onHide={modalClose}>
                    <Modal.Header>
                        <button type="button" class="btn btn-danger" onClick={modalClose}> Cerar</button>
                    </Modal.Header>
                    <Modal.Body>
                        <div>{mensaje}</div>
                    </Modal.Body>
                </Modal>
            </div>
            <h1> Editar producto</h1>
            <Form >
                <Form.Group class="form-group">
                    <Form.Label for="n_producto" class="labels">Nombre del producto</Form.Label>
                    <input type="text" class="form-control" value={nombre} onChange={(value) => setNombre(value.target.value)} id="n_producto" placeholder="Ingrese el nombre del producto" />
                </Form.Group>

                <Form.Group class="form-group">
                    <Form.Label for="d_producto" class="labels">Descripción del producto</Form.Label>
                    <Form.Control type="text" class="form-control" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} id="d_producto" placeholder="Ingrese la descripcion del producto" />
                </Form.Group>

                <Form.Group class="form-group">
                    <Form.Label for="v_producto" className="labels">Valor unitario</Form.Label>
                    <Form.Control type="number" class="form-control" id="v_producto" value={vunitario} onChange={(e) => setVUnitario(e.target.value)} placeholder="Ingrese el valor en pesos" />
                </Form.Group >

                <Form.Group class="form-group">
                    <Form.Label for="e_producto" className="labels">Estado del producto</Form.Label>
                    <select class="form-control form-control" value={estado} onChange={(e) => setEstado(e.target.value)} >
                        <option>Disponible</option>
                        <option>No Disponible</option>
                    </select>
                </Form.Group >

                <div class="form-group">
                    <button type="button" class="btn btn-success" onClick={cambiarDB}> CAMBIAR </button>
                </div>

            </Form>
        </div>
    );
}

export default EditarProducto;