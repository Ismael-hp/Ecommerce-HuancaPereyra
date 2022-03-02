import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Button } from 'react-bootstrap';
import { useContext, useState } from "react";
import { CartContext } from '../../context/CartContext';

const SendCompra = (FormData) => {
  const {items,totalPrice} = useContext(CartContext)
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
        console.log(ordenId);
    };

  return (
    <div><Button onClick={SendOrder}>Realizar Compra!</Button></div>
  )
}

export default SendCompra