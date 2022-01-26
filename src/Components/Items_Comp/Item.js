import React from 'react';
import { Card,Button} from 'react-bootstrap';
import Bender from '../Icon-Comp/Bender.png'

const Item = ({bg,Producto}) => {
    return <div>
       <Card style={{ width: '12rem' }} bg={bg}>
  <Card.Img variant="top" src={Bender} height={400}  />
  <Card.Body>
    <Card.Title>Producto: {Producto}</Card.Title>
    <Card.Text>
    Descripción:....
    </Card.Text>
    <Button variant="primary">Comprar</Button>
  </Card.Body>
</Card>
<br/>
    </div>;
      
      
};

export default Item;
