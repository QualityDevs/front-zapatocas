import Button from '@restart/ui/esm/Button';
import React, { state } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles-sergio.css'


const data = [{ id: "001", fecha: "12/01/2021", unidades: "20", responsable: "Juan Martinez", totalv: "500.000", estado: "Espera" }]


const AdministracionVentas = () => {

    return (
        <div>
            <form class="form-horizontal">
                <div class="form-group">
                    <label for="busqueda" class="labels" >Buscar por:  </label>
                    <select class="form-control form-control" className='colorborde'>
                        <option>ID venta</option>
                        <option>Docuento cliente</option>
                        <option>Nombre cliente</option>
                    </select>
                    <input type="search" className='colorborde' />
                    <Button type="button" className="colorborde"> BUSCAR</Button>
                </div>
            </form>


            <div className="tsergio">
                <table>
                    <thead>
                        <tr>
                            <th>ID VENTA</th>
                            <th>FECHA </th>
                            <th>UNIDADES</th>
                            <th>RESPONSABLE</th>
                            <th>TOTAL VENTA</th>
                            <th>ESTADO</th>
                            <th>ACCIONES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((elemento) => (
                                <tr>
                                    <td>{elemento.id}</td>
                                    <td>{elemento.fecha}</td>
                                    <td>{elemento.unidades}</td>
                                    <td>{elemento.responsable}</td>
                                    <td>{elemento.totalv}</td>
                                    <td>{elemento.estado}</td>
                                    <td>
                                    <div>
                                    <Link to="/editar_venta"><button type="button" class="btn btn-primary">Ver</button></Link>
                                    <button type="button" class="btn btn-danger">Eliminar</button>
                                    </div>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default AdministracionVentas;
