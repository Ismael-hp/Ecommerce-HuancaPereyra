import React from 'react';
import { Card, Button} from 'react-bootstrap';
import {NavLink, } from 'react-router-dom';

const Item = ({ id,ProductName,Imagen,setselectItem}) => {

  const selectItem = () => setselectItem(id);
  return <div>
    <Card style={{ width: '16rem' }} bg="dark" border="info">
      <Card.Img variant="top" style={{background:"#394960"}} src={Imagen} height={250} />
      <Card.Body>
        <Card.Title>{ProductName}</Card.Title>
<<<<<<< HEAD
        <Button variant="info" onClick={selectItem} ><NavLink to={`item/${id}`} >Detalles</NavLink></Button>
=======
        <Button variant="info" onClick={selectItem} ><NavLink to={`item/${id}`} >Detalles!!</NavLink></Button>
>>>>>>> Entrega-Proyecto-Final
      </Card.Body>
    </Card>
    <hr />
  </div>;
};
export default Item;
