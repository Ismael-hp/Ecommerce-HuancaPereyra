import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Bender from '../Icon-Comp/Bender.png';

const Item = ({ id, bg, Producto, Stock, Initial, Description, setselectItem, Precio }) => {

    const selectItem = () => setselectItem({ id, bg, Producto, Stock, Initial, Description, Precio });
  return <div>
    <Card style={{ width: '16rem' }} bg={bg}>
      <Card.Img variant="top" src={Bender} height={400} />
      <Card.Body>
        <Card.Title>{Producto}</Card.Title>
        <Button variant="primary" onClick={selectItem} >Seleccionar Producto</Button>
      </Card.Body>
    </Card>
    <hr />
  </div>;
};

export default Item;
