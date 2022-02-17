import React from 'react';
import { Button,Card} from 'react-bootstrap';
import ItemCount from './ItemCount';
import { CartContext } from '../../context/CartContext';


const ItemDetail = ({Producto,Description,bg,Precio,Stock,Imagen,id}) => {

 const [addCarrito, setaddCarrito] = React.useState(null)
 const { addItem } = React.useContext(CartContext);
 const [quantity, setQuantity] = React.useState(1);
    const onAdd =()=>{
        addItem({
            item:{Producto,Description,bg,Precio,Stock,Imagen,id},
            quantity,
        })
        console.log({quantity})
    }
    
    return(
    <div className='FlexStyle'>
        <Card style={{ width: '16rem' }} bg={bg}>
            <Card.Img variant="top" src={Imagen} height={400} />
            <Card.Body>
                <Card.Title>{Producto}</Card.Title>
                <Card.Title >${Precio}</Card.Title>
                <Card.Text>
                    {Description}
                </Card.Text>
                <ItemCount Stock={Stock} Initial={1} onAdd={onAdd} setQuantity={setQuantity}/>
            </Card.Body>
        </Card>
    </div>   
    );
};
// addCarrito ? <Card style={{ width: '16rem' }} bg={bg}>
// <Card.Img variant="top" src={Imagen} height={400} />
// <Card.Body>
//     <Card.Title>{Producto}</Card.Title>
//     <Card.Title >${Precio}</Card.Title>
//     <Card.Text>
//         {Description}
//     </Card.Text>
//     <NavLink to="carrito"><Button variant='info'>Finalizar compra</Button></NavLink>
// </Card.Body>
//  </Card> :
export default ItemDetail;
