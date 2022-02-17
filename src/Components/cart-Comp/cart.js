import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Button,Card} from 'react-bootstrap';
const Cart = () => {
  const { items} = useContext(CartContext);

console.log("asd");
  return (
    <div className='FlexStyle'>
        {items.map(({ item}) => (
            <Card style={{ width: '16rem' }} bg={item.bg}>
            <Card.Img variant="top" src={item.Imagen} height={400} />
            <Card.Body>
                <Card.Title>{item.Producto}</Card.Title>
                <Card.Title >${item.Precio}</Card.Title>
                <Card.Text>
                    {item.Description}
                </Card.Text>
                <Button variant="info">Finalizar compra!</Button>
            </Card.Body>
        </Card>
        ))}
    </div>  

  );
};

export default Cart;