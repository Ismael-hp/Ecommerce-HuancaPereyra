import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Button, Card } from 'react-bootstrap';
import {Link,NavLink } from 'react-router-dom';
import ItemCart from "./ItemCart";
const Cart = () => {
  const [PrecioTotal, setPrecioTotal] = useState([])
  const { items } = useContext(CartContext);
  useEffect(() => {
    getItem();

  }, [PrecioTotal])

  const getItem = () => {
    items.map(({ item }) => {

      setPrecioTotal(item)
      console.log(PrecioTotal.Precio)
    });
  }

  const removeItem=()=>{

  }


  return (
    <div className='FlexStyle'>
<h1>Holasda</h1>
      <ItemCart />
    </div>

  );
};


// {PrecioTotal ? items.map(({ item }) => (
//   <div>
//     <br/>
//   <Card style={{ width: '16rem' }} bg="dark" border="info">
//     <Card.Img variant="top" src={item.Imagen} height={250} />
//     <Card.Body>
//       <Card.Title>{item.ProductnName}</Card.Title>
//       <Card.Title >${item.Precio}</Card.Title>
//       <Card.Text>
//         {item.Description}
//       </Card.Text>
//       <Button onClick={removeItem} variant="danger">Remover</Button>
//     </Card.Body>
//   </Card>
//   <Button variant="info" ><NavLink to="../checkout" >Agregar Al Carrito!!</NavLink></Button>
//   </div>
// )) : <div>Lista vaciasa</div>
// }
export default Cart;