import React from 'react';
import { Button,ButtonGroup,Card, Badge} from 'react-bootstrap';
import ItemCount from './ItemCount';
import { CartContext } from '../../context/CartContext';
import {NavLink } from 'react-router-dom';


const ItemDetail = ({ProductName,Description,Precio,Stock,Imagen,id}) => {
 const { addItem,items} = React.useContext(CartContext);
 const [quantity, setQuantity] = React.useState(1);


    const onAdd =()=>{
        addItem({
            item:{ProductName,Description,Precio,Stock,Imagen,id},
            quantity,
        })
    }

 
        if(items.some(({item})=>item.id===id)){return(
            <div>
            <div className='FlexStyleDetail'>

                <div>
                <Card.Img border="info" variant="top"  style={{background:"#394960"}} src={Imagen} height={250}/>
                </div>

                <Card.Body border="info">
                        <Card.Title>Producto: {ProductName}</Card.Title>
                        <Badge bg="info">Precio c/u: ${Precio}</Badge><span className="visually-hidden">unadada</span>
                        
                        <Card.Title>Detalles del producto:</Card.Title>
                        <Card.Text>
                            {Description}
                        </Card.Text>
                    </Card.Body>
            </div>   
            
            <ButtonGroup  aria-label="Basic example">
                <NavLink to="../cartList" ><Button variant="info">Ir al carrito FUA!</Button></NavLink>
                
                <NavLink to="../" ><Button variant="success">Go por mas Productos</Button></NavLink>
            </ButtonGroup>
            </div>
            );

        }
        else {
            return(
                <div>
                <div className='FlexStyleDetail'>

                    <div>
                    <Card.Img border="info" variant="top"  style={{background:"#394960"}} src={Imagen} height={250}/>
                    </div>

                    <Card.Body border="info">
                            <Card.Title>{ProductName}<Badge bg="info">Precio c/u: ${Precio}</Badge><span className="visually-hidden">unadada</span></Card.Title>
                            
                            <Card.Title>Detalles del producto:</Card.Title>
                            <Card.Text>
                                {Description}
                            </Card.Text>
                        </Card.Body>
                </div>   
                
                <ItemCount Stock={Stock} Initial={1} onAdd={onAdd} setQuantity={setQuantity}/>
                </div>
                );
        }  
};
export default ItemDetail;
