import React, { useContext, useEffect,useState} from "react";
import { CartContext } from "../../context/CartContext";
import { Button, Card } from 'react-bootstrap';
import {NavLink } from 'react-router-dom';
import ItemCart from "./ItemCart";
import CheckCompra from "../Check-Compra/CheckCompra";




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
      
    </div>

  );
};
export default Cart;