import React, { useContext, useEffect,useState} from "react";
import { CartContext } from "../../context/CartContext";
import { Button, Card } from 'react-bootstrap';
<<<<<<< HEAD
import {Link,NavLink } from 'react-router-dom';
=======
import {NavLink } from 'react-router-dom';
>>>>>>> Entrega-Proyecto-Final
import ItemCart from "./ItemCart";
const Cart = () => {
  const { items,settotalPrice,totalPrice} = useContext(CartContext);
  useEffect(() => {
    GetPrecioTotal();
  }, [items])

  const GetPrecioTotal = () => {
    let total = 0;
    items.map(({ item, quantity }) => {
      total = total + (item.Precio * quantity)
    });
    settotalPrice(total)
    console.log(totalPrice)
  }

  return (
<<<<<<< HEAD
    <div className='FlexStyle'>
<h1>Holasda</h1>
      <ItemCart />
=======
    <div className="Carrito">
      <div className='FlexStyle'>
        {items[0] ? items.map(({ item, quantity }) => (<ItemCart getTotal={GetPrecioTotal} key={item.id} {...item} quantity={quantity} />)) : <h1>Lista Vacia Carrito</h1>}
      </div>
      {items[0]?<div>
        <h1>Monto total: {totalPrice}</h1>
       <NavLink to="../checkout" ><Button>Finalizar Compra!</Button></NavLink> 
      </div>:<div>
        <h1>Monto total: {totalPrice}</h1>
       <NavLink to="../" ><Button>GoProductos!</Button></NavLink> 
        </div>
      }
      
>>>>>>> Entrega-Proyecto-Final
    </div>

  );
};
<<<<<<< HEAD


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
=======
>>>>>>> Entrega-Proyecto-Final
export default Cart;