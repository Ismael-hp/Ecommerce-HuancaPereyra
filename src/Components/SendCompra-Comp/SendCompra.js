import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Button, } from 'react-bootstrap';
import { useContext, useState } from "react";
import { CartContext } from '../../context/CartContext';
import { Link, NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

const SendCompra = (FormData) => {
  const { items, totalPrice, cleanCarrito } = useContext(CartContext)
  const [ordenId, setordenId] = useState(null)
  const SendOrder = () => {
    if (FormData.FormData.nombreCompleto === "" || FormData.FormData.direccion === "" || FormData.FormData.email === "" || FormData.FormData.tel === "") {

      Swal.fire(
        'Falta Datos',
        'Debes Completar todos los campos para Realizar la compra',//JSON.stringify(DetalleCompra.items,null,4)
        'error'
      )
    }
    else {
      const order = {
        FormData,
        items,
        totalPrice
      };
      const db = getFirestore();
      const OrdenCompra = collection(db, "orders");

      addDoc(OrdenCompra, order).then(({ id }) => setordenId(id))

    }

  };
  return (
    <div className='m-5'>
      {ordenId ? <div><p>Se completo la compra. Muchas gracias!<br />ticket de Compra:{ordenId}</p>
        <NavLink to="/"><Button onClick={cleanCarrito}>SeguirComprando</Button></NavLink></div>
        : <Button onClick={SendOrder}>Realizar Compra!</Button>}
    </div>
  )
}

export default SendCompra