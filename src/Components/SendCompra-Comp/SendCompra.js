import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const SendCompra = () => {
    const [Comprador, setComprador] = useState({
        name:"Test",
        email:"Test2",
        phone:"Test3"
    });
    const [ordenId, setordenId] = useState(null)
    const SendOrder =()=>{
        const order={
            Comprador,
            item:[{ProductName:"MB-rodado39",Precio:54545,Description:"Detalle del producto MB"}],
            totalCompra:12983
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