import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Button, Card } from 'react-bootstrap';
import {Link,NavLink } from 'react-router-dom';
import ItemCount from "../Items_Comp/ItemCount";
import itemcar from "./itemcar";

const Cart = () => {
  const [PrecioTotal, setPrecioTotal] = useState(null)
  const { items,removeritem} = useContext(CartContext);
  useEffect(() => {
    getItemParcial();

  }, [])
  const getItemParcial = () => {
    items.map(({ item,quantity }) => {
      setPrecioTotal(
        quantity*item.Precio
      )
      console.log(PrecioTotal)
    });
  }

  const remItem=()=>{
    removeritem("EiMPwLq3khye9U2uk73x")
  };

  return (
    <div className='FlexStyle'>
 { items.map(({ item, quantity }) => (
      <div>
        <br />
        <Card style={{ width: '16rem' }} bg="dark" border="info">
// // //     <Card.Img variant="top" src={item.Imagen} height={250} />
// // //     <Card.Body>
// // //       <Card.Title>{item.ProductnName}</Card.Title>
// // //       <Card.Title >Seleccionado: {quantity}    ${item.Precio} Por unidad</Card.Title>
// // //       <Card.Title >Subtotal ${PrecioTotal} ++ item id: {item.id}</Card.Title>
// // //       {/* <Card.Text>
// // //         {item.Description}
// // //       </Card.Text> */}
// // //       {/* <ItemCount Stock={item.Stock} Initial={quantity}/> */}
// // //       <Button onClick={remItem(item.id)} variant="danger">Removerrr</Button>
// // //     </Card.Body>

        </Card>

      </div>
    ))
      }
    </div>

  );
};

            {/* <Card.Text>
              {item.Description}
            </Card.Text> */}
            {/* <ItemCount Stock={item.Stock} Initial={quantity}/> */}


// {PrecioTotal ? items.map(({ item,quantity }) => (
//   <div>
//     <br/>
//   <Card style={{ width: '16rem' }} bg="dark" border="info">
//     <Card.Img variant="top" src={item.Imagen} height={250} />
//     <Card.Body>
//       <Card.Title>{item.ProductnName}</Card.Title>
//       <Card.Title >Seleccionado: {quantity}    ${item.Precio} Por unidad</Card.Title>
//       <Card.Title >Subtotal ${PrecioTotal} ++ item id: {item.id}</Card.Title>
//       {/* <Card.Text>
//         {item.Description}
//       </Card.Text> */}
//       {/* <ItemCount Stock={item.Stock} Initial={quantity}/> */}
//       <Button onClick={remItem(item.id)} variant="danger">Removerrr</Button>
//     </Card.Body>
    
//   </Card>
  
//   </div>
// )) : <div>Lista vaciasa</div>
// }


export default Cart;