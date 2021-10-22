import './App.css';
import Layout from './layouts/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AdministracionVentas from './pages/administracion_Ventas';
import Adminproductos from './pages/productos/admin_productos';
import AdminUsuarios from './pages/admin_Usuarios';
import LayoutLogin from './layouts/Layout Login';
import RegistroVentas from './pages/registro_Ventas';
import Productos from './pages/productos/productos';
import CrearProducto from './pages/productos/admin_crear_producto';
import EditarProducto from './pages/productos/admin_editar_producto';
import ListaUsuarios from './pages/lista_Usuarios';
import EditarUsuarios from './pages/editar_Usuarios';
import CrearVenta from './pages/crear_venta';
import EditarVenta from './pages/editar_venta';
import { Auth0Provider } from "@auth0/auth0-react"; 

function App() {
  return (
   <Auth0Provider
     domain="autenticacionmintic.us.auth0.com"
    clientId="ljdxTywVaa7tVPkdZgyes5iITCjFehoO"
    redirectUri={window.location.origin}
   >
   <div className="App">
      <Router>
        <Switch>

          <Route path='/' exact>
            <LayoutLogin>
              <Route path='/login' >
              </Route>
            </LayoutLogin>

          </Route>

          <Route path={['/home', '/crear_venta','/editar_venta', '/administracion_Ventas', '/productos/admin_productos', '/productos/productos', '/productos/admin_crear_producto', '/productos/admin_editar_producto', '/registro_Ventas', '/admin_Usuarios', '/lista_Usuarios', '/editar_Usuarios']} exact>
            <Layout>
              <Switch>

                <Route path='/administracion_Ventas' exact>
                  <AdministracionVentas />
                </Route>

                <Route path='/productos/admin_productos' exact>
                  <Adminproductos />
                </Route>

                <Route path='/productos/productos' exact>
                  <Productos />
                </Route>

                <Route path='/productos/admin_crear_producto' exact>
                  <CrearProducto />
                </Route>

                <Route path='/productos/admin_editar_producto'>
                  <EditarProducto />
                </Route>

                <Route path='/admin_Usuarios' exact>
                  <AdminUsuarios />
                </Route>

                <Route path='/lista_Usuarios' exact>
                  <ListaUsuarios />
                </Route>

                <Route path='/editar_Usuarios' exact>
                  <EditarUsuarios />
                </Route>

                <Route path='/registro_Ventas' exact>
                  <RegistroVentas />
                </Route>

                <Route path='/crear_venta' exact>
                  <CrearVenta />
                </Route>

                <Route path='/editar_venta' exact>
                  <EditarVenta />
                </Route>

              </Switch>
            </Layout>
          </Route>
        </Switch>
      </Router>
    </div>
    </Auth0Provider>
  );


}

export default App;
