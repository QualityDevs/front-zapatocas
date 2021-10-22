import React from 'react'
import { Link } from 'react-router-dom';
import { TableProductosA } from './tableProductos.jsx';
const Adminproductos = () => {
    return (
        <div style={{ padding: 50 }} >
            <h3>Administración de Productos</h3>
            
            <div style={{ padding: 10 }}>
                <TableProductosA />
            </div>
            <Link to="/productos/admin_crear_producto">
                <button type="button" class="btn btn-primary">
                    CREAR PRODUCTO
                </button>
            </Link>
        </div>

    )
}


export default Adminproductos;


