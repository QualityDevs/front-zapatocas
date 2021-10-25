import axios from "axios";

export const eliminarProducto = async (id) =>{
    const options= {
        method: 'DELETE',
        url: 'https://peaceful-fortress-80371.herokuapp.com/productos/delete',
        headers: { 'Content-Type': 'application/json',Authorization: `Bearer ${localStorage.getItem("token")}`},
        data : {id: id}
    }

    await axios.request(options).then(()=>{
       console.log("Eliminado correctamente");
    }).catch(function(err){
        console.error(err);
    })
}


export const obtenerDatosUsuario = async (id) =>{
    const options= {
        method: 'GET',
        url: 'https://peaceful-fortress-80371.herokuapp.com/users/self',
        headers: { 'Content-Type': 'application/json',Authorization: `Bearer ${localStorage.getItem("token")}`},    //{Authorization: getToken();}
        data : {id: id}
    }

    await axios.request(options).then(()=>{
       console.log("Obtenido correctamente");
    }).catch(function(err){
        console.error(err);
    })
}