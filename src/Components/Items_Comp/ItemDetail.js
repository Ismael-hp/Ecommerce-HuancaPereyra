import React from 'react';
import { Button,Card} from 'react-bootstrap';
import ItemCount from './ItemCount';
import { NavLink } from 'react-router-dom';


const ItemDetail = ({Producto,Description,bg,Precio,Stock,Imagen}) => {

const [addCarrito, setaddCarrito] = React.useState(null)


    const onAdd =()=>{
        setaddCarrito(true)
        console.log("Stock");
    }
    return(
        addCarrito ? <Card style={{ width: '16rem' }} bg={bg}>
            <Card.Img variant="top" src={Imagen} height={400} />
            <Card.Body>
                <Card.Title>{Producto}</Card.Title>
                <Card.Title >${Precio}</Card.Title>
                <Card.Text>
                    {Description}
                </Card.Text>
                <NavLink to="carrito"><Button variant='info'>Finalizar compra</Button></NavLink>
            </Card.Body>
             </Card> :
    <div className='FlexStyle'>
        <Card style={{ width: '16rem' }} bg={bg}>
            <Card.Img variant="top" src={Imagen} height={400} />
            <Card.Body>
                <Card.Title>{Producto}</Card.Title>
                <Card.Title >${Precio}</Card.Title>
                <Card.Text>
                    {Description}
                </Card.Text>
                <ItemCount Stock={Stock} Initial={1} onAdd={onAdd}/>
            </Card.Body>
        </Card>

    </div>   
    );
};

export default ItemDetail;
