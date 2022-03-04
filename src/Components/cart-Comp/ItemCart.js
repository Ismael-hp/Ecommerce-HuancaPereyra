import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../Items_Comp/ItemCount';

const ItemCart = ({ProductName,Precio,Imagen,quantity,id,Stock,getTotal}) => {
    const {removerItem,changeCart} = React.useContext(CartContext)
const remmItem=()=>{
    removerItem(id)
}

const addCantidad=(cantidad)=>{
    changeCart(id,cantidad)
    getTotal();
}


  return (<div>
    <Card style={{ width: '16rem' }} bg="dark" border="info">
    <Card.Img variant="top" style={{background:"#394960"}} src={Imagen} height={250} />
    <Card.Body>
       <Card.Title>{ProductName}</Card.Title>
       <Card.Text >Unidades: {quantity}</Card.Text>
       <Card.Text >Precio c/u: ${Precio}</Card.Text>
       <ItemCount Stock={Stock} Initial={quantity} setQuantity={addCantidad} />
       <Button onClick={remmItem} variant="danger">Remover</Button>
     </Card.Body>
     </Card>
      </div>

  )
}

export default ItemCart