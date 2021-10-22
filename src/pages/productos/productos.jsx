import React from 'react'
import {TableProductos} from './tableProductos.jsx';
const Productos = () => {
    return (
        <div style={{padding:50}} >
            <h3>Lista de Productos</h3>
            <div style={{padding:10}}>
                <TableProductos/>
            </div>
        </div>
    )
}



export default Productos;