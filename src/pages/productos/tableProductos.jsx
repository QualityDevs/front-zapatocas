import '../../styles/stylesp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Container, Table, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { eliminarProducto } from '../../utils/api';


class TableProductos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: [],
      todos: []
    };
  }


  componentDidMount() {
    const getProductos = async () => {
      const options = {
        method: 'GET',
        url: 'http://localhost:5000/productos'
      };

      await axios.request(options).then((response) => {
        this.setState({ datos: response.data, todos: response.data })
      }).catch(function (error) {
        console.error(error);
      });

    };
    getProductos();
  }

  buscar = (valor) => {
    this.setState({
      datos: this.state.todos.filter((elemento) => {
        return JSON.stringify(elemento).toLowerCase().includes(valor);
      })
    })
  }

  render() {
    return (
      <Container>
        <div style={{ padding: 20 }}>
          <Form.Group as={Row} >
            <Form.Label column sm="2">Valor de Busqueda</Form.Label>
            <Col sm="10">
              <Form.Control class="form-control" type="text" onChange={(dato) => { this.buscar(dato.target.value.toLocaleLowerCase()) }} />
            </Col>
          </Form.Group>
        </div>
        <Table hover size="sm" bordered="true">
          <thead>
            <tr>
              <th>ID PRODUCTO</th>
              <th>NOMBRE</th>
              <th>DESCRIPCIÓN</th>
              <th>VALOR UNITARIO</th>
              <th>ESTADO</th>
            </tr>
          </thead>
          <tbody id="productos">
            {
              this.state.datos.map((elemento) => (
                <tr>
                  <td>{elemento._id}</td>
                  <td>{elemento.nombre}</td>
                  <td>{elemento.descripcion}</td>
                  <td>{elemento.vunitario}</td>
                  <td>{elemento.estado}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container >
    );
  }
}

class TableProductosA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: [],
      todos: []
    };
  }

  buscar = (valor) => {
    this.setState({
      datos: this.state.todos.filter((elemento) => {
        return JSON.stringify(elemento).toLowerCase().includes(valor);
      })
    })
  }


  componentDidMount() {
    const getProductos = async () => {
      const options = {
        method: 'GET',
        url: 'http://localhost:5000/productos'
      };

      await axios.request(options).then((response) => {
        this.setState({ datos: response.data, todos: response.data })
      }).catch(function (error) {
        console.error(error);
      });
    };
    getProductos();
  }

  render() {
    return(
      <Container>
        <div>
          <form class="form-horizontal">
            <div class="form-group" >
              <label for="busqueda" class="labels" >Buscar por:</label>
              <Form.Control class="form-control" type="text" placeholder="Ingrese el valor" onChange={(valor)=>{this.buscar(valor.target.value.toLocaleLowerCase())}}/>
            </div>
          </form>
        </div>
        <Table hover size="sm" bordered="true">
          <thead>
            <tr>
              <th>ID PRODUCTO</th>
              <th>NOMBRE</th>
              <th>DESCRIPCIÓN</th>
              <th>VALOR UNITARIO</th>
              <th>ESTADO</th>
              <th>ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            {this.state.datos.map((elemento) => (
              <tr>
                <th>{elemento._id}</th>
                <th>{elemento.nombre}</th>
                <th>{elemento.descripcion}</th>
                <th>{elemento.vunitario}</th>
                <th>{elemento.estado}</th>
                <th>
                  <div>
                    <Link to={{ pathname: "/productos/admin_editar_producto/", state: elemento }}><button type="button" class="btn btn-primary">Editar</button></Link>
                    <button type="button" class="btn btn-danger" onClick={() => {eliminarProducto(elemento._id); this.componentDidMount()}}>Eliminar</button></div>
                </th>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}

export {
  TableProductos,
  TableProductosA
}
