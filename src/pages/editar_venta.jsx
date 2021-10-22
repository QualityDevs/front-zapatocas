import React, { useState } from 'react';
import '../styles/styles-sergio.css'
import { Modal } from 'react-bootstrap';


const EditarVenta = () => {

    const [show, popup] = useState(false);
    const modalOpen = () => popup(true);
    const modalClose = () => popup(false);

    return (
        <div>
            <div>
                <Modal show={show} onHide={modalClose}>
                    <Modal.Header>
                        <button type="button" class="btn btn-danger" onClick={modalClose}> Cerar</button>
                    </Modal.Header>
                    <Modal.Body>
                        <h6>Venta Editada correctamente:</h6>
                        <ul>
                            <li>Id:</li>
                            <li>Fecha:</li>
                            <li>Estado:</li>
                            <li>Responsable:</li>
                            <li>Cliente:     Documento de Indentidad:</li>
                            <li>N. Unidades:</li>
                            <li>Total</li>
                        </ul>
                    </Modal.Body>
                </Modal>
            </div>

            <div className="tsergio estadoventa" >
                <table>
                    <thead>
                        <tr>
                            <th>ESTADO VENTA</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <select>
                                    <option>En proceso</option>
                                    <option>Cancelada</option>
                                    <option>Entregada</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>

            <div className="tsergio">
                <table>
                    <thead>
                        <tr>
                            <th>ID VENTA</th>
                            <th>FECHA PEDIDO</th>
                            <th>HORA</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td></td>
                            <td><input></input></td>
                            <td><input></input></td>
                        </tr>
                    </tbody>
                </table>
            </div>


            <div className="tsergio">
                <table>
                    <thead>
                        <tr>
                            <th>CLIENTE</th>
                            <th>DOCUMENTO DE IDENTIDAD</th>
                            <th>RESPONSABLE</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td><input></input></td>
                            <td><input></input></td>
                            <td><input></input></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <form className='fsergio'>

                Agregar por:<select className='colorborde'>
                    <option >ID producto</option>
                    <option>Nombre producto</option>
                </select>

                <input type="search" className='colorborde' />
                Unidades <input type="number" className='colorborde' />
                <button type="button" className='colorborde'> AGREGAR </button>

            </form>

            <div className="tsergio">
                <table>
                    <thead>
                        <tr>
                            <th>ID PRODUCTO</th>
                            <th>NOMBRE PRODUCTO</th>
                            <th>UNIDADES</th>
                            <th>PRECIO UNIDAD</th>
                            <th>TOTAL UNIDADES</th>
                            <th>ACCIONES</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <td className="total" colSpan="4">TOTAL</td>
                        <td colSpan="2">111</td>
                    </tfoot>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td><input></input></td>
                            <td><input></input></td>
                            <td></td>
                            <td>
                                <button type="button" class="btn btn-danger">Eliminar</button>
                            </td>
                        </tr>
                        <tr className="sombra">
                            <td></td>
                            <td></td>
                            <td><input></input></td>
                            <td><input></input></td>
                            <td></td>
                            <td>
                                <button type="button" class="btn btn-danger">Eliminar</button>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td><input></input></td>
                            <td><input></input></td>
                            <td></td>
                            <td>
                                <button type="button" class="btn btn-danger">Eliminar</button>
                            </td>
                        </tr>
                        <tr className="sombra">
                            <td></td>
                            <td></td>
                            <td><input></input></td>
                            <td><input></input></td>
                            <td></td>
                            <td>
                                <button type="button" class="btn btn-danger">Eliminar</button>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td><input></input></td>
                            <td><input></input></td>
                            <td></td>
                            <td>
                                <button type="button" class="btn btn-danger">Eliminar</button>
                            </td>
                        </tr>
                        <tr className="sombra">
                            <td></td>
                            <td></td>
                            <td><input></input></td>
                            <td><input></input></td>
                            <td></td>
                            <td>
                                <button type="button" class="btn btn-danger">Eliminar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <button type="submit" className="bsergio" onClick={modalOpen}>CAMBIAR VENTA</button>
        </div>
    );
}

export default EditarVenta;