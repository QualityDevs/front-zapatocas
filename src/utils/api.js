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