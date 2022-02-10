import React from 'react';
import { Card, Button} from 'react-bootstrap';
import {Link,NavLink, } from 'react-router-dom';

const Item = ({ id,bg,Producto,Imagen,setselectItem}) => {

  const selectItem = () => setselectItem(id);
  return <div>
    <Card style={{ width: '16rem' }} bg={bg}>
      <Card.Img variant="top" src={Imagen} height={250} />
      <Card.Body>
        <Card.Title>{Producto}</Card.Title>
        <Button variant="info" onClick={selectItem} ><NavLink to={`item/${id}`} >TEST</NavLink></Button>
      </Card.Body>
    </Card>
    <hr />
  </div>;
};
export default Item;
