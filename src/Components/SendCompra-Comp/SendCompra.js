import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Button,} from 'react-bootstrap';
import { useContext, useState } from "react";
import { CartContext } from '../../context/CartContext';
import {Link,NavLink } from 'react-router-dom';

const SendCompra = (FormData) => {
  const {items,totalPrice,cleanCarrito} = useContext(CartContext)
    const [ordenId, setordenId] = useState(null)
    const SendOrder =()=>{
      console.log(FormData)
    console.log(items)
    console.log(totalPrice)
        const order={
            FormData,
            items,
            totalPrice
        };
        const db = getFirestore();
        const OrdenCompra= collection(db,"orders");

     addDoc(OrdenCompra,order).then(({id}) =>setordenId(id)) 
    };
  return (
    <div className='m-5'>
      {ordenId ? <div><p>Se completo la compra. Muchas gracias!<br/>ticket de Compra:{ordenId}</p>
       <NavLink to="/"><Button onClick={cleanCarrito}>SeguirComprando</Button></NavLink></div>   
       :<Button onClick={SendOrder}>Realizar Compra!</Button>}
    </div>
  )
}

export default SendCompra