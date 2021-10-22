import axios from "axios";

export const eliminarProducto = async (id) =>{
    const options= {
        method: 'DELETE',
        url: 'http://localhost:5000/productos/delete',
        headers: { 'Content-Type': 'application/json'},
        data : {id: id}
    }

    await axios.request(options).then(()=>{
       console.log("Eliminado correctamente");
    }).catch(function(err){
        console.error(err);
    })
}