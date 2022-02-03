import React from 'react';
import {Card} from 'react-bootstrap';
import Bender from '../Icon-Comp/Bender.png'
import ItemCount from './ItemCount';

const Item = ({bg,Producto,Stock,Initial,Description}) => {
    return <div>
       <Card style={{ width: '16rem' }} bg={bg}>
  <Card.Img variant="top" src={Bender} height={400}  />
  <Card.Body>
    <Card.Title>Producto: {Producto}</Card.Title>
    <Card.Text>
    {Description}
    </Card.Text>
    <ItemCount Stock={Stock} Initial={Initial}/>
  </Card.Body>
  </Card>
  <br/>
    </div>;
      
      
};

export default Item;
